"use strict";

function change() {
    let color1=Math.floor(Math.random()*256);
    let color2=Math.floor(Math.random()*256);
    let color3=Math.floor(Math.random()*256);
    let textNb=Math.floor(Math.random()*10);
    let idBigCard = document.getElementById('container');
    let idButton = document.getElementById('button');
    let idText = document.getElementById('text');
    idText.innerHTML=text[textNb];
    idBigCard.style.backgroundColor=`rgb(${color1}, ${color2}, ${color3})`; 
    idButton.style.backgroundColor=`rgb(${color1}, ${color2}, ${color3})`; 
    idText.style.color=`rgb(${color1}, ${color2}, ${color3})`; 

}

let button = document.querySelector("button");
button.addEventListener("click",change);

let text = ["Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute.",
 "Chuck Norris peut faire des ronds avec une equerre", 
 "Chuck Norris peut écrire un traitement de texte avec la souris.",
 "Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris",
 "Chuck norris se souvient très bien de son futur",
 "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
 "Google, c'est le seul endroit où tu peux taper Chuck Norris...",
 "Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.",
 "Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.",
 "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.",
 "Chuck Norris ne porte pas de montre. Il décide de l'heure qu'il est."
];


