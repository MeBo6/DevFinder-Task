

let darkIcon = document.getElementById("dark-icon");

darkIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  let themeText = document.querySelector(".theme");
  if (themeText.textContent === "dark") {
    themeText.textContent = "light";
    darkIcon.src = "./assets/sun.png";
  } else {
    themeText.textContent = "dark";
    darkIcon.src = './assets/moon.png';
  }
});

