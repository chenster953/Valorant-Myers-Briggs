const overview = document.querySelector(".overview");
const counters = document.querySelector(".counters");
const playstyle = document.querySelector(".playstyle");
const abilities = document.querySelector(".abilities");
const quotes = document.querySelector(".quotes");
const container = document.querySelector(".right-container")
const content = document.querySelector(".content");

overview.addEventListener("click", ()=> {
  container.style.background = "rgb(87, 20, 203)";
  counters.style.background = "white";
  playstyle.style.background = "white";
  abilities.style.background = "white";
  quotes.style.background = "white";
  renderColors();
  overview.addEventListener("mouseout", ()=> {
    overview.style.background = "rgb(87, 20, 203)"});
  content.innerHTML = "";
  content.innerHTML = "Raze is a Valorant agent who specializes in mines, grenades, and general explosions. Raze is all about causing AOE damage to foes. With her blunt-force-trauma playstyle, she excels at flushing entrenched foes and clearing tight areas with a generous amount of “boom.”";
})

counters.addEventListener("click", ()=> {
  container.style.background = "rgb(198, 82, 198)";
  overview.style.background = "white";
  playstyle.style.background = "white";
  abilities.style.background = "white";
  quotes.style.background = "white";  
  renderColors();
  counters.addEventListener("mouseout", ()=> {
    counters.style.background = "rgb(198, 82, 198)"});
  content.innerHTML = "";
  // Add Hyperlinks 
  content.innerHTML = "- Kay/O's knife can disable raze abilities, which are an essential part of her dominating playstyle <br> - Jett's updraft can easily avoid Raze's ult and grenade damage <br> - Breach's abilities can disorientate to cripple her mobility";
})

playstyle.addEventListener("click", ()=> {
  container.style.background = "rgb(221, 221, 41)";
  counters.style.background = "white";
  overview.style.background = "white";
  abilities.style.background = "white";
  quotes.style.background = "white";
  renderColors();
  playstyle.addEventListener("mouseout", ()=> {
    playstyle.style.background = "rgb(221, 221, 41)"});
  content.innerHTML = "";
  content.innerHTML = "Raze is best utilized where she has a lot of room to work or can hold down certain areas without catching allies in the blast zone. Her abilities are nearly all explosive AOE splash damage, so seeing or knowing where foes are and trying to catch as many of them in range of her abilities as possible is key";
})
abilities.addEventListener("click", ()=> {
  container.style.background = "rgb(26, 182, 26)";
  counters.style.background = "white";
  playstyle.style.background = "white";
  overview.style.background = "white";
  quotes.style.background = "white";
  renderColors();
  abilities.addEventListener("mouseout", ()=> {
    abilities.style.background = "rgb(26, 182, 26)"});
  content.innerHTML = "";
  content.innerHTML = "Blast Pack: Instantly throw a blast pack that will latch onto surfaces and can be triggered to explode <br> Boom Bot: Deploy a roomba that travels in a straight line and hunts down enemies <br> Paint Shells: Cluster grenade that explodes on impact <br> Showstopper: Rocket Launcher that kills all";
})
quotes.addEventListener("click", ()=> {
  container.style.background = "rgb(210, 34, 72)";
  counters.style.background = "white";
  playstyle.style.background = "white";
  abilities.style.background = "white";
  overview.style.background = "white";
  renderColors();
  quotes.addEventListener("mouseout", ()=> {
    quotes.style.background = "rgb(210, 34, 72)"});
  content.innerHTML = "";
  //Add Audio Files
  content.innerHTML = "Match Start: 'Paint? Check. Charges? Check. Brakes? Nowhere in sight.' <br> Round Start: 'None of my stuff has malfunctioned yet! Can we celebrate that?' <br> Headshot: 'Nailed it.' <br> Melee: 'Didn't waste my ammo.' <br> Ace: 'Talk about collateral damage! Ha!'";
})  

function renderColors() {
overview.addEventListener("mouseover", ()=> {
  overview.style.background = "rgb(87, 20, 203)";})
overview.addEventListener("mouseout", ()=> {
  overview.style.background = "white";})
counters.addEventListener("mouseover", ()=> {
  counters.style.background = "rgb(198, 82, 198)";})
counters.addEventListener("mouseout", ()=> {
  counters.style.background = "white";})
playstyle.addEventListener("mouseover", ()=> {
  playstyle.style.background = "rgb(221, 221, 41)";})
playstyle.addEventListener("mouseout", ()=> {
  playstyle.style.background = "white";})
abilities.addEventListener("mouseover", ()=> {
  abilities.style.background = "rgb(26, 182, 26)";})
abilities.addEventListener("mouseout", ()=> {
  abilities.style.background = "white";})
quotes.addEventListener("mouseover", ()=> {
  quotes.style.background = "rgb(210, 34, 72)";})
quotes.addEventListener("mouseout", ()=> {
  quotes.style.background = "white";})}