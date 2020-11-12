'use strict';

// # 4_DOM

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];
const section =  document.getElementById('exo1');

const maDiv = document.createElement('div');

colors.forEach(function(color){
    const div = document.createElement('div'); 
    section.appendChild(div)

    div.textContent = color
    div.style.backgroundColor = color

    div.addEventListener(
        'click',
        function () {
          console.log("Couleur: ",color);
        },
    );
})

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/
const exo2 = document.createElement('section');
exo2.id = "exo2";
document.body.append(exo2);

const divExo2 = document.createElement('div');
divExo2.id = "exo-2";
exo2.appendChild(divExo2);

document.addEventListener("mousemove",function(changeSize){
    let sizeX = changeSize.clientX;
    let sizeY = changeSize.clientY;
    console.log("sizeX:",sizeX,"sizeY:",sizeY);

    divExo2.style.width = 100 + sizeX + "px";
    divExo2.style.height = 100 + sizeY + "px";
    },
)
divExo2.classList.add('exo2')

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/
const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const exo3 = document.createElement('section');
exo3.id = 'exo3';
document.body.append(exo3);

let div = document.createElement('div');
div.textContent = names[0];
exo3.append(div);

exo3.addEventListener('click', function(){
    let rand = Math.floor(Math.random()*names.length);
    div.textContent = names[rand];
});

// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

let exo4 = document.createElement('section');
exo4.id = "exo4";
document.body.append(exo4);

let button = document.createElement('button')
let textbu = document.createTextNode("track");
button.appendChild(textbu)
exo4.appendChild(button);
let isActive = false

function coord(event){
    let coordX = event.clientX
    let coordY = event.clientY
    console.log("X:",coordX,"Y:",coordY)
}

button.addEventListener('click',function(){
   isActive = !isActive
   console.log(isActive)
   if (isActive == true){
    document.addEventListener("mousemove",coord);
   }
   if (isActive == false){
    document.removeEventListener("mousemove",coord);
   }
},
)



// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/
