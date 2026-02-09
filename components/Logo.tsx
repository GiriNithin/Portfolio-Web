interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <a
      href="#"
      className="logo"
      aria-label="Home"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <span className="logo-symbol" aria-hidden="true">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4v24l8-6 8 6V4L16 10 8 4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10v14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </a>
  );
}
