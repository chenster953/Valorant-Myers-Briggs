const hamburger = document.querySelector(".menu");
const startbtn = document.querySelector(".startbtn");
const dropdown = document.querySelector(".dropdownmenu");
const quitmenu = document.querySelector(".close");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const chosen = document.querySelector(".chosen");
const popup = document.querySelector(".popup");
const next = document.querySelector(".next");
const agentlogo = document.querySelector(".agentlogo");
const link = document.querySelector(".link");
const agentlink = document.querySelector(".agentlink");
const bigyes1 = document.getElementById("1");
const medyes1 = document.getElementById("2");
const smallyes1 = document.getElementById("3");
const idk1 = document.getElementById("4");
const smallno1 = document.getElementById("5");
const medno1 = document.getElementById("6");
const bigno1 = document.getElementById("7");
const bigyes2 = document.getElementById("8");
const medyes2 = document.getElementById("9");
const smallyes2 = document.getElementById("10");
const idk2 = document.getElementById("11");
const smallno2 = document.getElementById("12");
const medno2 = document.getElementById("13");
const bigno2 = document.getElementById("14");
const bigyes3 = document.getElementById("15");
const medyes3 = document.getElementById("16");
const smallyes3 = document.getElementById("17");
const idk3 = document.getElementById("18");
const smallno3 = document.getElementById("19");
const medno3 = document.getElementById("20");
const bigno3 = document.getElementById("21");
const bigyes4 = document.getElementById("22");
const medyes4 = document.getElementById("23");
const smallyes4 = document.getElementById("24");
const idk4 = document.getElementById("25");
const smallno4 = document.getElementById("26");
const medno4 = document.getElementById("27");
const bigno4 = document.getElementById("28");
// ROLES
let lead = 24;
let intel = 24;
let conf = 24;
let impact = 24;
// AGENTS
let cypher = 0;
let killjoy = 0;
let chamber = 0;
let sage = 0;
let astra = 0;
let brimstone = 0;
let omen = 0;
let viper = 0;
let jett = 0;
let phoenix = 0;
let raze = 0;
let reyna = 0;
let yoru = 0;
let neon = 0;
let sova = 0;
let skye = 0;
let breach = 0;
let kayo = 0;
// ROLE QUESTIONS
const leadQuestions = [
  "I frequently communicate my ideas or concerns in a group setting.",
  "When working in groups, I can usually see a solution that others don't.",
  "I perfer to be the leader in a group setting. ",
  "I can ignore distractions and stay fixated on my goals. ",
  "I am confidence in my decisions.",
  "I would rather have other rely on me than rely on others.",
  "I have no problem admitting my mistakes and taking the blame for a poor decision.",
  "I would not ff even if we are down 0-12."]
const intelQuestions = [
  "I like to master every aspect of one subject before moving on to another. ",
  "If I don't have enough knowledge to make a decision, I will learn more before making one.",
  "I like to know exactly what I'm getting into before I commit.",
  "I know more random useless facts than most other people. ",
  "I am good at reading people. ",
  "I can recognize patterns easily.",
  "I enjoy looking for loopholes or shortcuts. ",
  "I actively look for advantages to help reach my goal more efficiently."]
const confQuestions = [
  "I am confident in my capabilities.",
  "I like to take risks. ",
  "I prefer glory over victory.",
  "I am good at thinking on my feet. ",
  "I would rather go with the flow than plan out an event. ",
  "I am always looking to test my skills against the best.",
  "I enjoy high-risk, high-rewards stakes.",
  "I would ff if we are down 0-5."]
const impactQuestions = [
  "I enjoy making an impact for my team.",
  "I am flexible to change.",
  "I enjoy setting my team up for success.",
  "If I have information that can help my team, I share it immediately.",
  "I'd rather collaborate than work independently.",
  "I would rather walk away with a small loss than gamble it all.",
  "We win as a team or lose as a team.",
  "I enjoy providing my team with information that leads to a decision."]
// AGENT QUESTIONS
const leadAgentquestions = [
  "I enjoy making impactful plays using information.",
  "I enjoy being patient and waiting for other to make mistakes.",
  "I pay close attention to detail.",
  "I often trust my teammates to successfully complete their tasks.",
  "I enjoy setting traps for people (ingame).",
  "I do not care for the word 'shooter' in FPS.",
  "I often scroll thru tick-tock while playing video games.",
  "I like to wear puffy yellow jackets. ",
  "I like snipers.",
  "I really like snipers.",
  "I really really like snipers.",
  "I like getting free snipers.",
  "I like healing my teammates.",
  "I like reviving my teammates. ",
  "I like slowing enemies down.",
  "I am a female."]
const intelAgentquestions = [
  "I like smokes.",
  "I like unique smokes.",
  "I like cool smokes.",
  "I like cool unique smokes..idk.",
  "I am a muscular man.",
  "I have a deep voice.",
  "I have a gnarly beard.",
  "Molotov.",
  "I like teleporting.",
  "I like smoking.",
  "I like blinding.",
  "I'd rather not walk.",
  "I like being annoying.",
  "I like poison.",
  "I also don't shoot in FPS.",
  "I am a toxic person."]
const confAgentquestions = [
  "I am smurfing.",
  "I like to think I'm smurfing.",
  "I pretend I play professionally.",
  "I like being fast.",
  "I like fire.",
  "I like blinding people.",
  "I have a british accent.",
  "I enjoy a british accent.",
  "I am incredibly handsome.",
  "I am overwhelmingly talented.",
  "I have a large and feared presence. ",
  "I like explosives.",
  "I am smurfing.",
  "People usually know I'm smurfing.",
  "I play professionally.",
  "I am playing with my bronze duo.",
  "I like teleporting.",
  "I like teleporting again.",
  "Just kidding I didn't teleport.",
  "Now I'm invincible and you can't see.",
  "I launched valorant instead of warzone.",
  "I am very hyper.",
  "I like running around.",
  "I am trolling."]
const impactAgentquestions = [
  "I know where you are.",
  "I know where your team is.",
  "I can see you.",
  "I'm in your walls.",
  "You cannot see.",
  "You still can't see.",
  "You can't see for a third time.",
  "You can see now but not very clearly.",
  "You cannot see.",
  "You cannot see.",
  "You cannot move.",
  "You cannot see.",
  "You have no abilities.",
  "You have no abilities.",
  "I died.",
  "Pick me up."]
// COUNTERS
let i = 0;
let k = 0;
let j = 0;
let l = 0;
let m = 0;
// CONTROLLER
hamburger.addEventListener("click", ()=> {
  hamburger.classList.add("hidden");
  dropdown.classList.add("visible");
  dropdown.classList.remove("hidden")
})
quitmenu.addEventListener("click", ()=> {
  hamburger.classList.remove("hidden");
  dropdown.classList.add("hidden");
})
startbtn.addEventListener("click", ()=> {
  popup.classList.remove("hidden");
})
next.addEventListener("click", ()=> {
  addScore();
  i++;
  renderQuestions();
  clearAll();
  console.log(i)
  console.log(k)
})
renderQuestions();
// RENDER FUNCTIONS
function renderQuestions() {
  question1.innerHTML = leadQuestions[i];
  question2.innerHTML = intelQuestions[i];
  question3.innerHTML = confQuestions[i];
  question4.innerHTML = impactQuestions[i];
  if (i >= 8) {
    if (lead>intel && lead>conf && lead>impact) {
      lead = 99;
      question1.innerHTML = leadAgentquestions[k];
      question2.innerHTML = leadAgentquestions[k+1];
      question3.innerHTML = leadAgentquestions[k+2];
      question4.innerHTML = leadAgentquestions[k+3];
      k = k + 4;
      if (i == 9) {
      cypherScore();
      }
      if (i == 10) {
      killjoyScore();
      }
      if (i == 11) {
      chamberScore();
      }
      if (i == 12) { 
        sageScore();
        popup.classList.add("hidden");
        if (cypher>killjoy && cypher>chamber && cypher>sage) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUnew1f-4MfHCrai8T1JLawvp6zdGJajEfw&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "cypher/cypher.html");
          agentlink.innerHTML = "Cypher";
          link.appendChild(agentlink);
        }
        if (killjoy>cypher && killjoy>chamber && killjoy>sage) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEQxLrQc47o68UX_KFEWqRG3_2zmI3CPDGA&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "killjoy/killjoy.html");
          agentlink.innerHTML = "Killjoy";
          link.appendChild(agentlink);
        }
        if (chamber>killjoy && chamber>cypher && chamber>sage) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOmm6zjvR03Zh-G-SUlCM6KMrmS7QXTvOoQ&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "chamber/chamber.html");
          agentlink.innerHTML = "Chamber";
          link.appendChild(agentlink);
        }
        if (sage>cypher && sage>chamber && sage>killjoy) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhIlkOvcps4_TcPxvTJ34N-XGWA4GFHU9QA&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "sage/sage.html");
          agentlink.innerHTML = "Sage";
          link.appendChild(agentlink);
        }
      }
    }
    if (intel>lead && intel>conf && intel>impact) {
      intel = 99;
      question1.innerHTML = intelAgentquestions[j];
      question2.innerHTML = intelAgentquestions[j+1];
      question3.innerHTML = intelAgentquestions[j+2];
      question4.innerHTML = intelAgentquestions[j+3];
      j = j + 4;
      if (i == 9) {
        astraScore();
        }
        if (i == 10) {
        brimstoneScore();
        }
        if (i == 11) {
        omenScore();
        }
        if (i == 12) { 
          viperScore();
          popup.classList.add("hidden");
          if (astra>brimstone && astra>omen && astra>viper) {
            agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwYm9FXynoxBYiy2eIH0HD8K5TBcVA5A0xQ&usqp=CAU)";
            chosen.classList.remove("hidden");
            agentlink.setAttribute("href", "astra/astra.html");
            agentlink.innerHTML = "Astra";
            link.appendChild(agentlink);
          }
          if (brimstone>astra && brimstone>omen && brimstone>viper) {
            agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8YEKHk9e7LbjzGAgU1q-N96rBxWOyAh7Xw&usqp=CAU)";
            chosen.classList.remove("hidden");
            agentlink.setAttribute("href", "brimstone/brimstone.html");
            agentlink.innerHTML = "Brimstone";
            link.appendChild(agentlink);
          }
          if (omen>brimstone && omen>astra && omen>viper) {
            agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPhGPrQqeTs43pbZMKkewFBEuZLusiRT5Gg&usqp=CAU)";
            chosen.classList.remove("hidden");
            agentlink.setAttribute("href", "omen/omen.html");
            agentlink.innerHTML = "Omen";
            link.appendChild(agentlink);
          }
          if (viper>brimstone && viper>omen && viper>astra) {
            agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuELvFd9WpFlXgwfJkht4TxokcYIPNVtXKw&usqp=CAU)";
            chosen.classList.remove("hidden");
            agentlink.setAttribute("href", "viper/viper.html");
            agentlink.innerHTML = "Viper";
            link.appendChild(agentlink);
          }
        }
    }
    if (conf>intel && conf>lead && conf>impact) {
      conf = 99;
      question1.innerHTML = confAgentquestions[l];
      question2.innerHTML = confAgentquestions[l+1];
      question3.innerHTML = confAgentquestions[l+2];
      question4.innerHTML = confAgentquestions[l+3];
      l = l + 4;
      if (i == 9) {
        jettScore();
      }
      if (i == 10) {
        phoenixScore();
      }
      if (i == 11) {
        razeScore();
      }
      if (i == 12) { 
        reynaScore();
      } 
      if (i == 13) {
        yoruScore();
      }
      if (i == 14) {
        neonScore();
        popup.classList.add("hidden");
        if (jett>phoenix && jett>raze && jett>reyna && jett>yoru && jett>neon) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIk4EpFXA40vCFuN4plLfSLYarpx9ZavhJQ&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "jett/jett.html");
          agentlink.innerHTML = "Jett";
          link.appendChild(agentlink);
        }
        if (phoenix>jett && phoenix>raze && phoenix>reyna && phoenix>yoru && phoenix>neon) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeN0WE1BgTj3Sh8CL3AFDeO_LfJRCLZQ0f0A&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "phoenix/phoenix.html");
          agentlink.innerHTML = "Phoenix";
          link.appendChild(agentlink);
        }
        if (raze>phoenix && raze>jett && raze>reyna && raze>yoru && raze>neon) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzkhh8PyInlPKMqZA96q4hpTIOognfNysNQ&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "raze/raze.html");
          agentlink.innerHTML = "Raze";
          link.appendChild(agentlink);
        }
        if (reyna>phoenix && reyna>raze && reyna>jett && reyna>yoru && reyna>neon) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyVj7coyFoKEjIL3im7D0H6LeRJI9dHNMHA&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "reyna/reyna.html");
          agentlink.innerHTML = "Reyna";
          link.appendChild(agentlink);
        }
        if (yoru>phoenix && yoru>raze && yoru>reyna && yoru>jett && yoru>neon) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7CROY0cfd_dmT9rrZN29we6apmCFACCWVQ&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "yoru/yoru.html");
          agentlink.innerHTML = "Yoru";
          link.appendChild(agentlink);
        }
        if (neon>phoenix && neon>raze && neon>reyna && neon>yoru && neon>jett) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipZY1UreDAzxDGFh0yliJtfqDt1uD6EzTZg&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "neon/neon.html");
          agentlink.innerHTML = "Neon";
          link.appendChild(agentlink);
        }
      }
    }
    if (impact>intel && impact>conf && impact>lead) {
      impact = 99;
      question1.innerHTML = impactAgentquestions[m];
      question2.innerHTML = impactAgentquestions[m+1];
      question3.innerHTML = impactAgentquestions[m+2];
      question4.innerHTML = impactAgentquestions[m+3];
      m = m + 4;
      if (i == 9) {
      sovaScore();
      }
      if (i == 10) {
      skyeScore();
      }
      if (i == 11) {
      breachScore();
      }
      if (i == 12) { 
        kayoScore();
        popup.classList.add("hidden");
        if (sova>skye && sova>breach && sova>kayo) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XWHSe6sbA0P05EYNP3e_Fm26RaB4RecKKg&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "sova/sova.html");
          agentlink.innerHTML = "Sova";
          link.appendChild(agentlink);
        }
        if (skye>sova && skye>breach && skye>kayo) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF5izfAU9CIt47Z5s9FCb3gAG9aiBQD8cdA&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "skye/skye.html");
          agentlink.innerHTML = "Skye";
          link.appendChild(agentlink);
        }
        if (breach>skye && breach>sova && breach>kayo) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFLZd3KqDC7NGSebqpg8fg0NAVwY-mQTPYg&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "breach/breach.html");
          agentlink.innerHTML = "Breach";
          link.appendChild(agentlink);
        }
        if (kayo>skye && kayo>breach && kayo>sova) {
          agentlogo.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQZxXfCf1xxJHCSflWqCXaSCj7bB2-pig0A&usqp=CAU)";
          chosen.classList.remove("hidden");
          agentlink.setAttribute("href", "kayo/kayo.html");
          agentlink.innerHTML = "Kayo";
          link.appendChild(agentlink);
        }
      }
    }
  }
}
function clearAll() {
  bigyes1.checked = false;
  medyes1.checked = false;
  smallyes1.checked = false;
  idk1.checked = false;
  smallno1.checked = false;
  medno1.checked = false;
  bigno1.checked = false;
  bigyes2.checked = false;
  medyes2.checked = false;
  smallyes2.checked = false;
  idk2.checked = false;
  smallno2.checked = false;
  medno2.checked = false;
  bigno2.checked = false;
  bigyes3.checked = false;
  medyes3.checked = false;
  smallyes3.checked = false;
  idk3.checked = false;
  smallno3.checked = false;
  medno3.checked = false;
  bigno3.checked = false;
  bigyes4.checked = false;
  medyes4.checked = false;
  smallyes4.checked = false;
  idk4.checked = false;
  smallno4.checked = false;
  medno4.checked = false;
  bigno4.checked = false;
}
// CALCULATION FUNCTIONS
function addScore() {
  if (bigyes1.checked) {
    lead = lead + 3;
  }
  if (medyes1.checked) {
    lead = lead + 2;
  }
  if (smallyes1.checked) {
    lead = lead + 1;
  }
  if (idk1.checked) {
    lead = lead + 0;
  }
  if (smallno1.checked) {
    lead = lead - 1;
  }
  if (medno1.checked) {
    lead = lead - 2;
  }
  if (bigno1.checked) {
    lead = lead - 3;
  }
  if (bigyes2.checked) {
    intel = intel + 3;
  }
  if (medyes2.checked) {
    intel = intel + 2;
  }
  if (smallyes2.checked) {
    intel = intel + 1;
  }
  if (idk2.checked) {
    intel = intel + 0;
  }
  if (smallno2.checked) {
    intel = intel - 1;
  }
  if (medno2.checked) {
    intel = intel - 2;
  }
  if (bigno2.checked) {
    intel = intel - 3;
  }
  if (bigyes3.checked) {
    conf = conf + 3;
  }
  if (medyes3.checked) {
    conf = conf + 2;
  }
  if (smallyes3.checked) {
    conf = conf + 1;
  }
  if (idk3.checked) {
    conf = conf + 0;
  }
  if (smallno3.checked) {
    conf = conf - 1;
  }
  if (medno3.checked) {
    conf = conf - 2;
  }
  if (bigno3.checked) {
    conf = conf - 3;
  }
  if (bigyes4.checked) {
    impact = impact + 3;
  }
  if (medyes4.checked) {
    impact = impact + 2;
  }
  if (smallyes4.checked) {
    impact = impact + 1;
  }
  if (idk4.checked) {
    impact = impact + 0;
  }
  if (smallno4.checked) {
    impact = impact - 1;
  }
  if (medno4.checked) {
    impact = impact - 2;
  }
  if (bigno4.checked) {
    impact = impact - 3;
  }
}
function cypherScore() {
  if (bigyes1.checked) {
    cypher = cypher + 3;
  }
  if (medyes1.checked) {
    cypher = cypher + 2;
  }
  if (smallyes1.checked) {
    cypher = cypher + 1;
  }
  if (idk1.checked) {
    cypher = cypher + 0;
  }
  if (smallno1.checked) {
    cypher = cypher - 1;
  }
  if (medno1.checked) {
    cypher = cypher - 2;
  }conf
  if (bigno1.checked) {
    cypher = cypher - 3;
  }
  if (bigyes2.checked) {
    cypher = cypher + 3;
  }
  if (medyes2.checked) {
    cypher = cypher + 2;
  }
  if (smallyes2.checked) {
    cypher = cypher + 1;
  }
  if (idk2.checked) {
    cypher = cypher + 0;
  }
  if (smallno2.checked) {
    cypher = cypher - 1;
  }
  if (medno2.checked) {
    cypher = cypher - 2;
  }
  if (bigno2.checked) {
    cypher = cypher - 3;
  }
  if (bigyes3.checked) {
    cypher = cypher + 3;
  }
  if (medyes3.checked) {
    cypher = cypher + 2;
  }
  if (smallyes3.checked) {
    cypher = cypher + 1;
  }
  if (idk3.checked) {
    cypher = cypher + 0;
  }
  if (smallno3.checked) {
    cypher = cypher - 1;
  }
  if (medno3.checked) {
    cypher = cypher - 2;
  }
  if (bigno3.checked) {
    cypher = cypher - 3;
  }
  if (bigyes4.checked) {
    cypher = cypher + 3;
  }
  if (medyes4.checked) {
    cypher = cypher + 2;
  }
  if (smallyes4.checked) {
    cypher = cypher + 1;
  }
  if (idk4.checked) {
    cypher = cypher + 0;
  }
  if (smallno4.checked) {
    cypher = cypher - 1;
  }
  if (medno4.checked) {
    cypher = cypher - 2;
  }
  if (bigno4.checked) {
    cypher = cypher - 3;
  }
}
function killjoyScore() {
  if (bigyes1.checked) {
    killjoy = killjoy + 3;
  }
  if (medyes1.checked) {
    killjoy = killjoy + 2;
  }
  if (smallyes1.checked) {
    killjoy = killjoy + 1;
  }
  if (idk1.checked) {
    killjoy = killjoy + 0;
  }
  if (smallno1.checked) {
    killjoy = killjoy - 1;
  }
  if (medno1.checked) {
    killjoy = killjoy - 2;
  }conf
  if (bigno1.checked) {
    killjoy = killjoy - 3;
  }
  if (bigyes2.checked) {
    killjoy = killjoy + 3;
  }
  if (medyes2.checked) {
    killjoy = killjoy + 2;
  }
  if (smallyes2.checked) {
    killjoy = killjoy + 1;
  }
  if (idk2.checked) {
    killjoy = killjoy + 0;
  }
  if (smallno2.checked) {
    killjoy = killjoy - 1;
  }
  if (medno2.checked) {
    killjoy = killjoy - 2;
  }
  if (bigno2.checked) {
    killjoy = killjoy - 3;
  }
  if (bigyes3.checked) {
    killjoy = killjoy + 3;
  }
  if (medyes3.checked) {
    killjoy = killjoy + 2;
  }
  if (smallyes3.checked) {
    killjoy = killjoy + 1;
  }
  if (idk3.checked) {
    killjoy = killjoy + 0;
  }
  if (smallno3.checked) {
    killjoy = killjoy - 1;
  }
  if (medno3.checked) {
    killjoy = killjoy - 2;
  }
  if (bigno3.checked) {
    killjoy = killjoy - 3;
  }
  if (bigyes4.checked) {
    killjoy = killjoy + 3;
  }
  if (medyes4.checked) {
    killjoy = killjoy + 2;
  }
  if (smallyes4.checked) {
    killjoy = killjoy + 1;
  }
  if (idk4.checked) {
    killjoy = killjoy + 0;
  }
  if (smallno4.checked) {
    killjoy = killjoy - 1;
  }
  if (medno4.checked) {
    killjoy = killjoy - 2;
  }
  if (bigno4.checked) {
    killjoy = killjoy - 3;
  }
}
function chamberScore() {
  if (bigyes1.checked) {
    chamber = chamber + 3;
  }
  if (medyes1.checked) {
    chamber = chamber + 2;
  }
  if (smallyes1.checked) {
    chamber = chamber + 1;
  }
  if (idk1.checked) {
    chamber = chamber + 0;
  }
  if (smallno1.checked) {
    chamber = chamber - 1;
  }
  if (medno1.checked) {
    chamber = chamber - 2;
  }conf
  if (bigno1.checked) {
    chamber = chamber - 3;
  }
  if (bigyes2.checked) {
    chamber = chamber + 3;
  }
  if (medyes2.checked) {
    chamber = chamber + 2;
  }
  if (smallyes2.checked) {
    chamber = chamber + 1;
  }
  if (idk2.checked) {
    chamber = chamber + 0;
  }
  if (smallno2.checked) {
    chamber = chamber - 1;
  }
  if (medno2.checked) {
    chamber = chamber - 2;
  }
  if (bigno2.checked) {
    chamber = chamber - 3;
  }
  if (bigyes3.checked) {
    chamber = chamber + 3;
  }
  if (medyes3.checked) {
    chamber = chamber + 2;
  }
  if (smallyes3.checked) {
    chamber = chamber + 1;
  }
  if (idk3.checked) {
    chamber = chamber + 0;
  }
  if (smallno3.checked) {
    chamber = chamber - 1;
  }
  if (medno3.checked) {
    chamber = chamber - 2;
  }
  if (bigno3.checked) {
    chamber = chamber - 3;
  }
  if (bigyes4.checked) {
    chamber = chamber + 3;
  }
  if (medyes4.checked) {
    chamber = chamber + 2;
  }
  if (smallyes4.checked) {
    chamber = chamber + 1;
  }
  if (idk4.checked) {
    chamber = chamber + 0;
  }
  if (smallno4.checked) {
    chamber = chamber - 1;
  }
  if (medno4.checked) {
    chamber = chamber - 2;
  }
  if (bigno4.checked) {
    chamber = chamber - 3;
  }
}
function sageScore() {
  if (bigyes1.checked) {
    sage = sage + 3;
  }
  if (medyes1.checked) {
    sage = sage + 2;
  }
  if (smallyes1.checked) {
    sage = sage + 1;
  }
  if (idk1.checked) {
    sage = sage + 0;
  }
  if (smallno1.checked) {
    sage = sage - 1;
  }
  if (medno1.checked) {
    sage = sage - 2;
  }conf
  if (bigno1.checked) {
    sage = sage - 3;
  }
  if (bigyes2.checked) {
    sage = sage + 3;
  }
  if (medyes2.checked) {
    sage = sage + 2;
  }
  if (smallyes2.checked) {
    sage = sage + 1;
  }
  if (idk2.checked) {
    sage = sage + 0;
  }
  if (smallno2.checked) {
    sage = sage - 1;
  }
  if (medno2.checked) {
    sage = sage - 2;
  }
  if (bigno2.checked) {
    sage = sage - 3;
  }
  if (bigyes3.checked) {
    sage = sage + 3;
  }
  if (medyes3.checked) {
    sage = sage + 2;
  }
  if (smallyes3.checked) {
    sage = sage + 1;
  }
  if (idk3.checked) {
    sage = sage + 0;
  }
  if (smallno3.checked) {
    sage = sage - 1;
  }
  if (medno3.checked) {
    sage = sage - 2;
  }
  if (bigno3.checked) {
    sage = sage - 3;
  }
  if (bigyes4.checked) {
    sage = sage + 3;
  }
  if (medyes4.checked) {
    sage = sage + 2;
  }
  if (smallyes4.checked) {
    sage = sage + 1;
  }
  if (idk4.checked) {
    sage = sage + 0;
  }
  if (smallno4.checked) {
    sage = sage - 1;
  }
  if (medno4.checked) {
    sage = sage - 2;
  }
  if (bigno4.checked) {
    sage = sage - 3;
  }
}
function astraScore() {
  if (bigyes1.checked) {
    astra = astra + 3;
  }
  if (medyes1.checked) {
    astra = astra + 2;
  }
  if (smallyes1.checked) {
    astra = astra + 1;
  }
  if (idk1.checked) {
    astra = astra + 0;
  }
  if (smallno1.checked) {
    astra = astra - 1;
  }
  if (medno1.checked) {
    astra = astra - 2;
  }conf
  if (bigno1.checked) {
    astra = astra - 3;
  }
  if (bigyes2.checked) {
    astra = astra + 3;
  }
  if (medyes2.checked) {
    astra = astra + 2;
  }
  if (smallyes2.checked) {
    astra = astra + 1;
  }
  if (idk2.checked) {
    astra = astra + 0;
  }
  if (smallno2.checked) {
    astra = astra - 1;
  }
  if (medno2.checked) {
    astra = astra - 2;
  }
  if (bigno2.checked) {
    astra = astra - 3;
  }
  if (bigyes3.checked) {
    astra = astra + 3;
  }
  if (medyes3.checked) {
    astra = astra + 2;
  }
  if (smallyes3.checked) {
    astra = astra + 1;
  }
  if (idk3.checked) {
    astra = astra + 0;
  }
  if (smallno3.checked) {
    astra = astra - 1;
  }
  if (medno3.checked) {
    astra = astra - 2;
  }
  if (bigno3.checked) {
    astra = astra - 3;
  }
  if (bigyes4.checked) {
    astra = astra + 3;
  }
  if (medyes4.checked) {
    astra = astra + 2;
  }
  if (smallyes4.checked) {
    astra = astra + 1;
  }
  if (idk4.checked) {
    astra = astra + 0;
  }
  if (smallno4.checked) {
    astra = astra - 1;
  }
  if (medno4.checked) {
    astra = astra - 2;
  }
  if (bigno4.checked) {
    astra = astra - 3;
  }
}
function brimstoneScore() {
  if (bigyes1.checked) {
    brimstone = brimstone + 3;
  }
  if (medyes1.checked) {
    brimstone = brimstone + 2;
  }
  if (smallyes1.checked) {
    brimstone = brimstone + 1;
  }
  if (idk1.checked) {
    brimstone = brimstone + 0;
  }
  if (smallno1.checked) {
    brimstone = brimstone - 1;
  }
  if (medno1.checked) {
    brimstone = brimstone - 2;
  }conf
  if (bigno1.checked) {
    brimstone = brimstone - 3;
  }
  if (bigyes2.checked) {
    brimstone = brimstone + 3;
  }
  if (medyes2.checked) {
    brimstone = brimstone + 2;
  }
  if (smallyes2.checked) {
    brimstone = brimstone + 1;
  }
  if (idk2.checked) {
    brimstone = brimstone + 0;
  }
  if (smallno2.checked) {
    brimstone = brimstone - 1;
  }
  if (medno2.checked) {
    brimstone = brimstone - 2;
  }
  if (bigno2.checked) {
    brimstone = brimstone - 3;
  }
  if (bigyes3.checked) {
    brimstone = brimstone + 3;
  }
  if (medyes3.checked) {
    brimstone = brimstone + 2;
  }
  if (smallyes3.checked) {
    brimstone = brimstone + 1;
  }
  if (idk3.checked) {
    brimstone = brimstone + 0;
  }
  if (smallno3.checked) {
    brimstone = brimstone - 1;
  }
  if (medno3.checked) {
    brimstone = brimstone - 2;
  }
  if (bigno3.checked) {
    brimstone = brimstone - 3;
  }
  if (bigyes4.checked) {
    brimstone = brimstone + 3;
  }
  if (medyes4.checked) {
    brimstone = brimstone + 2;
  }
  if (smallyes4.checked) {
    brimstone = brimstone + 1;
  }
  if (idk4.checked) {
    brimstone = brimstone + 0;
  }
  if (smallno4.checked) {
    brimstone = brimstone - 1;
  }
  if (medno4.checked) {
    brimstone = brimstone - 2;
  }
  if (bigno4.checked) {
    brimstone = brimstone - 3;
  }
}
function omenScore() {
  if (bigyes1.checked) {
    omen = omen + 3;
  }
  if (medyes1.checked) {
    omen = omen + 2;
  }
  if (smallyes1.checked) {
    omen = omen + 1;
  }
  if (idk1.checked) {
    omen = omen + 0;
  }
  if (smallno1.checked) {
    omen = omen - 1;
  }
  if (medno1.checked) {
    omen = omen - 2;
  }conf
  if (bigno1.checked) {
    omen = omen - 3;
  }
  if (bigyes2.checked) {
    omen = omen + 3;
  }
  if (medyes2.checked) {
    omen = omen + 2;
  }
  if (smallyes2.checked) {
    omen = omen + 1;
  }
  if (idk2.checked) {
    omen = omen + 0;
  }
  if (smallno2.checked) {
    omen = omen - 1;
  }
  if (medno2.checked) {
    omen = omen - 2;
  }
  if (bigno2.checked) {
    omen = omen - 3;
  }
  if (bigyes3.checked) {
    omen = omen + 3;
  }
  if (medyes3.checked) {
    omen = omen + 2;
  }
  if (smallyes3.checked) {
    omen = omen + 1;
  }
  if (idk3.checked) {
    omen = omen + 0;
  }
  if (smallno3.checked) {
    omen = omen - 1;
  }
  if (medno3.checked) {
    omen = omen - 2;
  }
  if (bigno3.checked) {
    omen = omen - 3;
  }
  if (bigyes4.checked) {
    omen = omen + 3;
  }
  if (medyes4.checked) {
    omen = omen + 2;
  }
  if (smallyes4.checked) {
    omen = omen + 1;
  }
  if (idk4.checked) {
    omen = omen + 0;
  }
  if (smallno4.checked) {
    omen = omen - 1;
  }
  if (medno4.checked) {
    omen = omen - 2;
  }
  if (bigno4.checked) {
    omen = omen - 3;
  }
}
function viperScore() {
  if (bigyes1.checked) {
    viper = viper + 3;
  }
  if (medyes1.checked) {
    viper = viper + 2;
  }
  if (smallyes1.checked) {
    viper = viper + 1;
  }
  if (idk1.checked) {
    viper = viper + 0;
  }
  if (smallno1.checked) {
    viper = viper - 1;
  }
  if (medno1.checked) {
    viper = viper - 2;
  }conf
  if (bigno1.checked) {
    viper = viper - 3;
  }
  if (bigyes2.checked) {
    viper = viper + 3;
  }
  if (medyes2.checked) {
    viper = viper + 2;
  }
  if (smallyes2.checked) {
    viper = viper + 1;
  }
  if (idk2.checked) {
    viper = viper + 0;
  }
  if (smallno2.checked) {
    viper = viper - 1;
  }
  if (medno2.checked) {
    viper = viper - 2;
  }
  if (bigno2.checked) {
    viper = viper - 3;
  }
  if (bigyes3.checked) {
    viper = viper + 3;
  }
  if (medyes3.checked) {
    viper = viper + 2;
  }
  if (smallyes3.checked) {
    viper = viper + 1;
  }
  if (idk3.checked) {
    viper = viper + 0;
  }
  if (smallno3.checked) {
    viper = viper - 1;
  }
  if (medno3.checked) {
    viper = viper - 2;
  }
  if (bigno3.checked) {
    viper = viper - 3;
  }
  if (bigyes4.checked) {
    viper = viper + 3;
  }
  if (medyes4.checked) {
    viper = viper + 2;
  }
  if (smallyes4.checked) {
    viper = viper + 1;
  }
  if (idk4.checked) {
    viper = viper + 0;
  }
  if (smallno4.checked) {
    viper = viper - 1;
  }
  if (medno4.checked) {
    viper = viper - 2;
  }
  if (bigno4.checked) {
    viper = viper - 3;
  }
}
function jettScore() {
  if (bigyes1.checked) {
    jett = jett + 3;
  }
  if (medyes1.checked) {
    jett = jett + 2;
  }
  if (smallyes1.checked) {
    jett = jett + 1;
  }
  if (idk1.checked) {
    jett = jett + 0;
  }
  if (smallno1.checked) {
    jett = jett - 1;
  }
  if (medno1.checked) {
    jett = jett - 2;
  }conf
  if (bigno1.checked) {
    jett = jett - 3;
  }
  if (bigyes2.checked) {
    jett = jett + 3;
  }
  if (medyes2.checked) {
    jett = jett + 2;
  }
  if (smallyes2.checked) {
    jett = jett + 1;
  }
  if (idk2.checked) {
    jett = jett + 0;
  }
  if (smallno2.checked) {
    jett = jett - 1;
  }
  if (medno2.checked) {
    jett = jett - 2;
  }
  if (bigno2.checked) {
    jett = jett - 3;
  }
  if (bigyes3.checked) {
    jett = jett + 3;
  }
  if (medyes3.checked) {
    jett = jett + 2;
  }
  if (smallyes3.checked) {
    jett = jett + 1;
  }
  if (idk3.checked) {
    jett = jett + 0;
  }
  if (smallno3.checked) {
    jett = jett - 1;
  }
  if (medno3.checked) {
    jett = jett - 2;
  }
  if (bigno3.checked) {
    jett = jett - 3;
  }
  if (bigyes4.checked) {
    jett = jett + 3;
  }
  if (medyes4.checked) {
    jett = jett + 2;
  }
  if (smallyes4.checked) {
    jett = jett + 1;
  }
  if (idk4.checked) {
    jett = jett + 0;
  }
  if (smallno4.checked) {
    jett = jett - 1;
  }
  if (medno4.checked) {
    jett = jett - 2;
  }
  if (bigno4.checked) {
    jett = jett - 3;
  }
}
function phoenixScore() {
  if (bigyes1.checked) {
    phoenix = phoenix + 3;
  }
  if (medyes1.checked) {
    phoenix = phoenix + 2;
  }
  if (smallyes1.checked) {
    phoenix = phoenix + 1;
  }
  if (idk1.checked) {
    phoenix = phoenix + 0;
  }
  if (smallno1.checked) {
    phoenix = phoenix - 1;
  }
  if (medno1.checked) {
    phoenix = phoenix - 2;
  }conf
  if (bigno1.checked) {
    phoenix = phoenix - 3;
  }
  if (bigyes2.checked) {
    phoenix = phoenix + 3;
  }
  if (medyes2.checked) {
    phoenix = phoenix + 2;
  }
  if (smallyes2.checked) {
    phoenix = phoenix + 1;
  }
  if (idk2.checked) {
    phoenix = phoenix + 0;
  }
  if (smallno2.checked) {
    phoenix = phoenix - 1;
  }
  if (medno2.checked) {
    phoenix = phoenix - 2;
  }
  if (bigno2.checked) {
    phoenix = phoenix - 3;
  }
  if (bigyes3.checked) {
    phoenix = phoenix + 3;
  }
  if (medyes3.checked) {
    phoenix = phoenix + 2;
  }
  if (smallyes3.checked) {
    phoenix = phoenix + 1;
  }
  if (idk3.checked) {
    phoenix = phoenix + 0;
  }
  if (smallno3.checked) {
    phoenix = phoenix - 1;
  }
  if (medno3.checked) {
    phoenix = phoenix - 2;
  }
  if (bigno3.checked) {
    phoenix = phoenix - 3;
  }
  if (bigyes4.checked) {
    phoenix = phoenix + 3;
  }
  if (medyes4.checked) {
    phoenix = phoenix + 2;
  }
  if (smallyes4.checked) {
    phoenix = phoenix + 1;
  }
  if (idk4.checked) {
    phoenix = phoenix + 0;
  }
  if (smallno4.checked) {
    phoenix = phoenix - 1;
  }
  if (medno4.checked) {
    phoenix = phoenix - 2;
  }
  if (bigno4.checked) {
    phoenix = phoenix - 3;
  }
}
function razeScore() {
  if (bigyes1.checked) {
    raze = raze + 3;
  }
  if (medyes1.checked) {
    raze = raze + 2;
  }
  if (smallyes1.checked) {
    raze = raze + 1;
  }
  if (idk1.checked) {
    raze = raze + 0;
  }
  if (smallno1.checked) {
    raze = raze - 1;
  }
  if (medno1.checked) {
    raze = raze - 2;
  }conf
  if (bigno1.checked) {
    raze = raze - 3;
  }
  if (bigyes2.checked) {
    raze = raze + 3;
  }
  if (medyes2.checked) {
    raze = raze + 2;
  }
  if (smallyes2.checked) {
    raze = raze + 1;
  }
  if (idk2.checked) {
    raze = raze + 0;
  }
  if (smallno2.checked) {
    raze = raze - 1;
  }
  if (medno2.checked) {
    raze = raze - 2;
  }
  if (bigno2.checked) {
    raze = raze - 3;
  }
  if (bigyes3.checked) {
    raze = raze + 3;
  }
  if (medyes3.checked) {
    raze = raze + 2;
  }
  if (smallyes3.checked) {
    raze = raze + 1;
  }
  if (idk3.checked) {
    raze = raze + 0;
  }
  if (smallno3.checked) {
    raze = raze - 1;
  }
  if (medno3.checked) {
    raze = raze - 2;
  }
  if (bigno3.checked) {
    raze = raze - 3;
  }
  if (bigyes4.checked) {
    raze = raze + 3;
  }
  if (medyes4.checked) {
    raze = raze + 2;
  }
  if (smallyes4.checked) {
    raze = raze + 1;
  }
  if (idk4.checked) {
    raze = raze + 0;
  }
  if (smallno4.checked) {
    raze = raze - 1;
  }
  if (medno4.checked) {
    raze = raze - 2;
  }
  if (bigno4.checked) {
    raze = raze - 3;
  }
}
function reynaScore() {
  if (bigyes1.checked) {
    reyna = reyna + 3;
  }
  if (medyes1.checked) {
    reyna = reyna + 2;
  }
  if (smallyes1.checked) {
    reyna = reyna + 1;
  }
  if (idk1.checked) {
    reyna = reyna + 0;
  }
  if (smallno1.checked) {
    reyna = reyna - 1;
  }
  if (medno1.checked) {
    reyna = reyna - 2;
  }conf
  if (bigno1.checked) {
    reyna = reyna - 3;
  }
  if (bigyes2.checked) {
    reyna = reyna + 3;
  }
  if (medyes2.checked) {
    reyna = reyna + 2;
  }
  if (smallyes2.checked) {
    reyna = reyna + 1;
  }
  if (idk2.checked) {
    reyna = reyna + 0;
  }
  if (smallno2.checked) {
    reyna = reyna - 1;
  }
  if (medno2.checked) {
    reyna = reyna - 2;
  }
  if (bigno2.checked) {
    reyna = reyna - 3;
  }
  if (bigyes3.checked) {
    reyna = reyna + 3;
  }
  if (medyes3.checked) {
    reyna = reyna + 2;
  }
  if (smallyes3.checked) {
    reyna = reyna + 1;
  }
  if (idk3.checked) {
    reyna = reyna + 0;
  }
  if (smallno3.checked) {
    reyna = reyna - 1;
  }
  if (medno3.checked) {
    reyna = reyna - 2;
  }
  if (bigno3.checked) {
    reyna = reyna - 3;
  }
  if (bigyes4.checked) {
    reyna = reyna + 3;
  }
  if (medyes4.checked) {
    reyna = reyna + 2;
  }
  if (smallyes4.checked) {
    reyna = reyna + 1;
  }
  if (idk4.checked) {
    reyna = reyna + 0;
  }
  if (smallno4.checked) {
    reyna = reyna - 1;
  }
  if (medno4.checked) {
    reyna = reyna - 2;
  }
  if (bigno4.checked) {
    reyna = reyna - 3;
  }
}
function yoruScore() {
  if (bigyes1.checked) {
    yoru = yoru + 3;
  }
  if (medyes1.checked) {
    yoru = yoru + 2;
  }
  if (smallyes1.checked) {
    yoru = yoru + 1;
  }
  if (idk1.checked) {
    yoru = yoru + 0;
  }
  if (smallno1.checked) {
    yoru = yoru - 1;
  }
  if (medno1.checked) {
    yoru = yoru - 2;
  }conf
  if (bigno1.checked) {
    yoru = yoru - 3;
  }
  if (bigyes2.checked) {
    yoru = yoru + 3;
  }
  if (medyes2.checked) {
    yoru = yoru + 2;
  }
  if (smallyes2.checked) {
    yoru = yoru + 1;
  }
  if (idk2.checked) {
    yoru = yoru + 0;
  }
  if (smallno2.checked) {
    yoru = yoru - 1;
  }
  if (medno2.checked) {
    yoru = yoru - 2;
  }
  if (bigno2.checked) {
    yoru = yoru - 3;
  }
  if (bigyes3.checked) {
    yoru = yoru + 3;
  }
  if (medyes3.checked) {
    yoru = yoru + 2;
  }
  if (smallyes3.checked) {
    yoru = yoru + 1;
  }
  if (idk3.checked) {
    yoru = yoru + 0;
  }
  if (smallno3.checked) {
    yoru = yoru - 1;
  }
  if (medno3.checked) {
    yoru = yoru - 2;
  }
  if (bigno3.checked) {
    yoru = yoru - 3;
  }
  if (bigyes4.checked) {
    yoru = yoru + 3;
  }
  if (medyes4.checked) {
    yoru = yoru + 2;
  }
  if (smallyes4.checked) {
    yoru = yoru + 1;
  }
  if (idk4.checked) {
    yoru = yoru + 0;
  }
  if (smallno4.checked) {
    yoru = yoru - 1;
  }
  if (medno4.checked) {
    yoru = yoru - 2;
  }
  if (bigno4.checked) {
    yoru = yoru - 3;
  }
}
function neonScore() {
  if (bigyes1.checked) {
    neon = neon + 3;
  }
  if (medyes1.checked) {
    neon = neon + 2;
  }
  if (smallyes1.checked) {
    neon = neon + 1;
  }
  if (idk1.checked) {
    neon = neon + 0;
  }
  if (smallno1.checked) {
    neon = neon - 1;
  }
  if (medno1.checked) {
    neon = neon - 2;
  }conf
  if (bigno1.checked) {
    neon = neon - 3;
  }
  if (bigyes2.checked) {
    neon = neon + 3;
  }
  if (medyes2.checked) {
    neon = neon + 2;
  }
  if (smallyes2.checked) {
    neon = neon + 1;
  }
  if (idk2.checked) {
    neon = neon + 0;
  }
  if (smallno2.checked) {
    neon = neon - 1;
  }
  if (medno2.checked) {
    neon = neon - 2;
  }
  if (bigno2.checked) {
    neon = neon - 3;
  }
  if (bigyes3.checked) {
    neon = neon + 3;
  }
  if (medyes3.checked) {
    neon = neon + 2;
  }
  if (smallyes3.checked) {
    neon = neon + 1;
  }
  if (idk3.checked) {
    neon = neon + 0;
  }
  if (smallno3.checked) {
    neon = neon - 1;
  }
  if (medno3.checked) {
    neon = neon - 2;
  }
  if (bigno3.checked) {
    neon = neon - 3;
  }
  if (bigyes4.checked) {
    neon = neon + 3;
  }
  if (medyes4.checked) {
    neon = neon + 2;
  }
  if (smallyes4.checked) {
    neon = neon + 1;
  }
  if (idk4.checked) {
    neon = neon + 0;
  }
  if (smallno4.checked) {
    neon = neon - 1;
  }
  if (medno4.checked) {
    neon = neon - 2;
  }
  if (bigno4.checked) {
    neon = neon - 3;
  }
}
function sovaScore() {
  if (bigyes1.checked) {
    sova = sova + 3;
  }
  if (medyes1.checked) {
    sova = sova + 2;
  }
  if (smallyes1.checked) {
    sova = sova + 1;
  }
  if (idk1.checked) {
    sova = sova + 0;
  }
  if (smallno1.checked) {
    sova = sova - 1;
  }
  if (medno1.checked) {
    sova = sova - 2;
  }conf
  if (bigno1.checked) {
    sova = sova - 3;
  }
  if (bigyes2.checked) {
    sova = sova + 3;
  }
  if (medyes2.checked) {
    sova = sova + 2;
  }
  if (smallyes2.checked) {
    sova = sova + 1;
  }
  if (idk2.checked) {
    sova = sova + 0;
  }
  if (smallno2.checked) {
    sova = sova - 1;
  }
  if (medno2.checked) {
    sova = sova - 2;
  }
  if (bigno2.checked) {
    sova = sova - 3;
  }
  if (bigyes3.checked) {
    sova = sova + 3;
  }
  if (medyes3.checked) {
    sova = sova + 2;
  }
  if (smallyes3.checked) {
    sova = sova + 1;
  }
  if (idk3.checked) {
    sova = sova + 0;
  }
  if (smallno3.checked) {
    sova = sova - 1;
  }
  if (medno3.checked) {
    sova = sova - 2;
  }
  if (bigno3.checked) {
    sova = sova - 3;
  }
  if (bigyes4.checked) {
    sova = sova + 3;
  }
  if (medyes4.checked) {
    sova = sova + 2;
  }
  if (smallyes4.checked) {
    sova = sova + 1;
  }
  if (idk4.checked) {
    sova = sova + 0;
  }
  if (smallno4.checked) {
    sova = sova - 1;
  }
  if (medno4.checked) {
    sova = sova - 2;
  }
  if (bigno4.checked) {
    sova = sova - 3;
  }
}
function skyeScore() {
  if (bigyes1.checked) {
    skye = skye + 3;
  }
  if (medyes1.checked) {
    skye = skye + 2;
  }
  if (smallyes1.checked) {
    skye = skye + 1;
  }
  if (idk1.checked) {
    skye = skye + 0;
  }
  if (smallno1.checked) {
    skye = skye - 1;
  }
  if (medno1.checked) {
    skye = skye - 2;
  }conf
  if (bigno1.checked) {
    skye = skye - 3;
  }
  if (bigyes2.checked) {
    skye = skye + 3;
  }
  if (medyes2.checked) {
    skye = skye + 2;
  }
  if (smallyes2.checked) {
    skye = skye + 1;
  }
  if (idk2.checked) {
    skye = skye + 0;
  }
  if (smallno2.checked) {
    skye = skye - 1;
  }
  if (medno2.checked) {
    skye = skye - 2;
  }
  if (bigno2.checked) {
    skye = skye - 3;
  }
  if (bigyes3.checked) {
    skye = skye + 3;
  }
  if (medyes3.checked) {
    skye = skye + 2;
  }
  if (smallyes3.checked) {
    skye = skye + 1;
  }
  if (idk3.checked) {
    skye = skye + 0;
  }
  if (smallno3.checked) {
    skye = skye - 1;
  }
  if (medno3.checked) {
    skye = skye - 2;
  }
  if (bigno3.checked) {
    skye = skye - 3;
  }
  if (bigyes4.checked) {
    skye = skye + 3;
  }
  if (medyes4.checked) {
    skye = skye + 2;
  }
  if (smallyes4.checked) {
    skye = skye + 1;
  }
  if (idk4.checked) {
    skye = skye + 0;
  }
  if (smallno4.checked) {
    skye = skye - 1;
  }
  if (medno4.checked) {
    skye = skye - 2;
  }
  if (bigno4.checked) {
    skye = skye - 3;
  }
}
function breachScore() {
  if (bigyes1.checked) {
    breach = breach + 3;
  }
  if (medyes1.checked) {
    breach = breach + 2;
  }
  if (smallyes1.checked) {
    breach = breach + 1;
  }
  if (idk1.checked) {
    breach = breach + 0;
  }
  if (smallno1.checked) {
    breach = breach - 1;
  }
  if (medno1.checked) {
    breach = breach - 2;
  }conf
  if (bigno1.checked) {
    breach = breach - 3;
  }
  if (bigyes2.checked) {
    breach = breach + 3;
  }
  if (medyes2.checked) {
    breach = breach + 2;
  }
  if (smallyes2.checked) {
    breach = breach + 1;
  }
  if (idk2.checked) {
    breach = breach + 0;
  }
  if (smallno2.checked) {
    breach = breach - 1;
  }
  if (medno2.checked) {
    breach = breach - 2;
  }
  if (bigno2.checked) {
    breach = breach - 3;
  }
  if (bigyes3.checked) {
    breach = breach + 3;
  }
  if (medyes3.checked) {
    breach = breach + 2;
  }
  if (smallyes3.checked) {
    breach = breach + 1;
  }
  if (idk3.checked) {
    breach = breach + 0;
  }
  if (smallno3.checked) {
    breach = breach - 1;
  }
  if (medno3.checked) {
    breach = breach - 2;
  }
  if (bigno3.checked) {
    breach = breach - 3;
  }
  if (bigyes4.checked) {
    breach = breach + 3;
  }
  if (medyes4.checked) {
    breach = breach + 2;
  }
  if (smallyes4.checked) {
    breach = breach + 1;
  }
  if (idk4.checked) {
    breach = breach + 0;
  }
  if (smallno4.checked) {
    breach = breach - 1;
  }
  if (medno4.checked) {
    breach = breach - 2;
  }
  if (bigno4.checked) {
    breach = breach - 3;
  }
}
function kayoScore() {
  if (bigyes1.checked) {
    kayo = kayo + 3;
  }
  if (medyes1.checked) {
    kayo = kayo + 2;
  }
  if (smallyes1.checked) {
    kayo = kayo + 1;
  }
  if (idk1.checked) {
    kayo = kayo + 0;
  }
  if (smallno1.checked) {
    kayo = kayo - 1;
  }
  if (medno1.checked) {
    kayo = kayo - 2;
  }conf
  if (bigno1.checked) {
    kayo = kayo - 3;
  }
  if (bigyes2.checked) {
    kayo = kayo + 3;
  }
  if (medyes2.checked) {
    kayo = kayo + 2;
  }
  if (smallyes2.checked) {
    kayo = kayo + 1;
  }
  if (idk2.checked) {
    kayo = kayo + 0;
  }
  if (smallno2.checked) {
    kayo = kayo - 1;
  }
  if (medno2.checked) {
    kayo = kayo - 2;
  }
  if (bigno2.checked) {
    kayo = kayo - 3;
  }
  if (bigyes3.checked) {
    kayo = kayo + 3;
  }
  if (medyes3.checked) {
    kayo = kayo + 2;
  }
  if (smallyes3.checked) {
    kayo = kayo + 1;
  }
  if (idk3.checked) {
    kayo = kayo + 0;
  }
  if (smallno3.checked) {
    kayo = kayo - 1;
  }
  if (medno3.checked) {
    kayo = kayo - 2;
  }
  if (bigno3.checked) {
    kayo = kayo - 3;
  }
  if (bigyes4.checked) {
    kayo = kayo + 3;
  }
  if (medyes4.checked) {
    kayo = kayo + 2;
  }
  if (smallyes4.checked) {
    kayo = kayo + 1;
  }
  if (idk4.checked) {
    kayo = kayo + 0;
  }
  if (smallno4.checked) {
    kayo = kayo - 1;
  }
  if (medno4.checked) {
    kayo = kayo - 2;
  }
  if (bigno4.checked) {
    kayo = kayo - 3;
  }
}