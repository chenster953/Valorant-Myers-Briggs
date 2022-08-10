const overview = document.querySelector(".overview");
const origin = document.querySelector(".origin");
const playstyle = document.querySelector(".playstyle");
const abilities = document.querySelector(".abilities");
const personality = document.querySelector(".personality");
const container = document.querySelector(".right-container")

overview.addEventListener("click", ()=> {
  container.style.background = "rgb(87, 20, 203)";
  origin.style.background = "white";
  playstyle.style.background = "white";
  abilities.style.background = "white";
  personality.style.background = "white";
  renderColors();
  overview.addEventListener("mouseout", ()=> {
    overview.style.background = "rgb(87, 20, 203)"});
})

origin.addEventListener("click", ()=> {
  container.style.background = "rgb(198, 82, 198)";
  overview.style.background = "white";
  playstyle.style.background = "white";
  abilities.style.background = "white";
  personality.style.background = "white";  
  renderColors();
  origin.addEventListener("mouseout", ()=> {
    origin.style.background = "rgb(198, 82, 198)"});
})

playstyle.addEventListener("click", ()=> {
  container.style.background = "rgb(221, 221, 41)";
  origin.style.background = "white";
  overview.style.background = "white";
  abilities.style.background = "white";
  personality.style.background = "white";
  renderColors();
  playstyle.addEventListener("mouseout", ()=> {
    playstyle.style.background = "rgb(221, 221, 41)"});
})
abilities.addEventListener("click", ()=> {
  container.style.background = "rgb(26, 182, 26)";
  origin.style.background = "white";
  playstyle.style.background = "white";
  overview.style.background = "white";
  personality.style.background = "white";
  renderColors();
  abilities.addEventListener("mouseout", ()=> {
    abilities.style.background = "rgb(26, 182, 26)"});
})
personality.addEventListener("click", ()=> {
  container.style.background = "rgb(210, 34, 72)";
  origin.style.background = "white";
  playstyle.style.background = "white";
  abilities.style.background = "white";
  overview.style.background = "white";
  renderColors();
  personality.addEventListener("mouseout", ()=> {
    personality.style.background = "rgb(210, 34, 72)"});
})  

function renderColors() {
overview.addEventListener("mouseover", ()=> {
  overview.style.background = "rgb(87, 20, 203)";})
overview.addEventListener("mouseout", ()=> {
  overview.style.background = "white";})
origin.addEventListener("mouseover", ()=> {
  origin.style.background = "rgb(198, 82, 198)";})
origin.addEventListener("mouseout", ()=> {
  origin.style.background = "white";})
playstyle.addEventListener("mouseover", ()=> {
  playstyle.style.background = "rgb(221, 221, 41)";})
playstyle.addEventListener("mouseout", ()=> {
  playstyle.style.background = "white";})
abilities.addEventListener("mouseover", ()=> {
  abilities.style.background = "rgb(26, 182, 26)";})
abilities.addEventListener("mouseout", ()=> {
  abilities.style.background = "white";})
personality.addEventListener("mouseover", ()=> {
  personality.style.background = "rgb(210, 34, 72)";})
personality.addEventListener("mouseout", ()=> {
  personality.style.background = "white";})}