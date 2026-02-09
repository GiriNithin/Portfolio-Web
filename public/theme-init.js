(function () {
  var k = "portfolio-theme";
  var t = localStorage.getItem(k);
  if (t) {
    document.documentElement.setAttribute("data-theme", t);
  } else if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
