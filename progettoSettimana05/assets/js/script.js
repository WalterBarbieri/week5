/* Funzione fatta da me, funziona ma non bene come quella di Lidia. Basta decommentare per vedere in funzione*/
/*
const pieces = document.querySelectorAll('g[opacity="0"]');
pieces.forEach((g) => {
  function ciao() {
    g.setAttribute("opacity", Math.round(Math.random() * 1));
  }
  setInterval(ciao, 1000);
});
*/

let emme = document.querySelectorAll('g[stroke-linecap="butt"]');

setInterval(() => {
    let random = Math.round(Math.random() * (emme.length -1));
    emme[random].classList.toggle('invisible');
    
}, 100);

window.addEventListener("scroll", function () {
    var nav = document.getElementById("navContainer");
    var btn = document.getElementById("btnChange");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      nav.style.backgroundColor = "white";
      btn.style.backgroundColor = "#1a8917"
    } else {
      nav.style.backgroundColor = "#ffc017";
      btn.style.backgroundColor = "#191919";
    }
  });
