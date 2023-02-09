function setTheme() {
  //change the theme from dark to light and vice versa depending

  if (
    localStorage.getItem("theme") === "light" ||
    localStorage.getItem("theme") === "null"
  ) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", setTheme);

function getTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}
getTheme();
