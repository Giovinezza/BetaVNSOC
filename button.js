
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

try{
	  var discord = document.getElementById("discord");
  }catch{}
var theme = "dark";
  const root = document.querySelector(":root");
  const container = document.getElementsByClassName("theme-container")[0];
  
  const themeIcon = document.getElementById("theme-icon");
  
  container.addEventListener("click", setTheme);
  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {

	root.style.setProperty("--primary-color","rgb(255, 255, 255)");
	root.style.setProperty("--secondary-color", "rgb(0, 0, 0)");
	root.style.setProperty("--highlight-color","rgb(255, 251, 0)");
	root.style.setProperty("--text-color","rgb(0, 0, 0)");
	root.style.setProperty("--header-color", "rgb(54, 54, 54)");
	root.style.setProperty("--header-text-color", "rgb(255, 255, 255)");
	root.style.setProperty("--ribbon-color", "rgb(52, 52, 52)");
	root.style.setProperty("--hover-ribbon-color", "rgb(255, 0, 0)");	
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    
	themeIcon.classList.add("change");
	try{
	discord.src="https://discord.com/widget?id=1046297627798552617&theme=light&WidgetChannel=true";
	}catch{}
    themeIcon.src = sun;
  }
  function setDark() {
	root.style.setProperty("--primary-color","rgb(0, 0, 0)");
	root.style.setProperty("--secondary-color"," rgb(255, 255, 255)");
	root.style.setProperty("--highlight-color","rgb(3, 3, 3)");
	root.style.setProperty("--text-color","#fff");
	root.style.setProperty("--header-color","rgb(207, 44, 39)");
	root.style.setProperty("--header-text-color","rgb(0, 0, 0)");
	root.style.setProperty("--ribbon-color","rgb(245, 90, 0)");
	root.style.setProperty("--hover-ribbon-color","rgb(0, 0, 0)");
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
	try{discord.src="https://discord.com/widget?id=1046297627798552617&theme=dark&WidgetChannel=true";}catch{}
  }