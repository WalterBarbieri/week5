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
console.log(emme);

setInterval(() => {
    let random = Math.round(Math.random() * (emme.length -1));
    emme[random].classList.toggle('invisible');
    
}, 300);