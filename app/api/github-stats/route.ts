import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "GiriNithin";


interface GitHubUser {
  public_repos: number;
  followers: number;
  following?: number;
}

interface GitHubRepo {
  stargazers_count: number;
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Web",
    };
    if (process.env.GITHUB_TOKEN) {
      (headers as Record<string, string>)["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers, next: { revalidate: 3600 } }),
    ]);

    if (!userRes.ok) {
      return NextResponse.json({ error: "GitHub user not found" }, { status: userRes.status });
    }

    const user = (await userRes.json()) as GitHubUser;
    const repos = reposRes.ok ? ((await reposRes.json()) as GitHubRepo[]) : [];
    const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    return NextResponse.json(
      { repos: user.public_repos, stars, followers: user.followers },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch (err) {
    console.error("GitHub stats error:", err);
    return NextResponse.json({ error: "Failed to fetch GitHub stats" }, { status: 500 });
  }
}
