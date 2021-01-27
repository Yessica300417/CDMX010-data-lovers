//MAIN.JS Este bendito archivo tiene el proposito de manipular el DOM
import data from './data/rickandmorty/rickandmorty.js';
import {filterGender, filterStatus, orderZA /*orderAZ*/} from './data.js'//invocacion


//VISUALIZACION DE LAS TARJETAS
const characters = data.results;  

let buttonPe = document.getElementById("buttonPe");
    buttonPe.addEventListener("click", () => {
    const cards = document.querySelector(".card"),
    template = document.getElementById("card-box").content, 
    fragment =document.createDocumentFragment();
     characters.forEach((role) => {
         template.querySelector("h2").textContent =  role.name;
         template.querySelector("img").setAttribute("src", role.image);
         template.querySelector(".p1").textContent = "Status: " + role.status;
         template.querySelector(".p2").textContent = "Specie: " + role.species;
         template.querySelector(".p3").textContent = "Gender: " + role.gender;
         template.querySelector(".p4").textContent = "Origin: " + role.origin.name;
         template.querySelector(".p5").textContent = "Location: " + role.location.name;

         let clone = document.importNode(template, true);
         fragment.appendChild(clone);
        });
        cards.appendChild(fragment);
    });

    //FILTRADO 
      
    //console.log(filterGender(characters,'Female'));
    let button = document.getElementById("female");
    button.addEventListener("click", () => {
    let femaleCharacter = filterGender(characters,'Female');    
    const template = document.getElementById("card-box").content, 
        cards = document.querySelector(".card"),
        fragment =document.createDocumentFragment();
        femaleCharacter.forEach((role) => {
         template.querySelector("h2").textContent =  role.name;
         template.querySelector("img").setAttribute("src", role.image);
         template.querySelector(".p1").textContent = "Status: " + role.status;
         template.querySelector(".p2").textContent = "Specie: " + role.species;
         template.querySelector(".p3").textContent = "Gender: " + role.gender;
         template.querySelector(".p4").textContent = "Origin: " + role.origin.name;
         template.querySelector(".p5").textContent = "Location: " + role.location.name;
    
    let clone = document.importNode(template, true);
         fragment.appendChild(clone);
         });
         cards.appendChild(fragment);
    });
    //document.getElementById("card-box").style.display="block";
    //document.getElementById("").style.display="none";
    
    let maleButton = document.getElementById("male");
    maleButton.addEventListener("click", () => {
    let maleCharacter = filterGender(characters,'Male');    
    const template = document.getElementById("card-box").content, 
        cards = document.querySelector(".card"),
        fragment =document.createDocumentFragment();
        maleCharacter.forEach((role) => {
         template.querySelector("h2").textContent =  role.name;
         template.querySelector("img").setAttribute("src", role.image);
         template.querySelector(".p1").textContent = "Status: " + role.status;
         template.querySelector(".p2").textContent = "Specie: " + role.species;
         template.querySelector(".p3").textContent = "Gender: " + role.gender;
         template.querySelector(".p4").textContent = "Origin: " + role.origin.name;
         template.querySelector(".p5").textContent = "Location: " + role.location.name;
    
    let clone = document.importNode(template, true);
         fragment.appendChild(clone);
         });
         cards.appendChild(fragment);
    });

    let aliveButton = document.getElementById("alive");
    aliveButton.addEventListener("click", () => {
    let aliveCharacter = filterStatus (characters,'Alive');    
    const template = document.getElementById("card-box").content, 
        cards = document.querySelector(".card"),
        fragment =document.createDocumentFragment();
        aliveCharacter.forEach((role) => {
         template.querySelector("h2").textContent =  role.name;
         template.querySelector("img").setAttribute("src", role.image);
         template.querySelector(".p1").textContent = "Status: " + role.status;
         template.querySelector(".p2").textContent = "Specie: " + role.species;
         template.querySelector(".p3").textContent = "Gender: " + role.gender;
         template.querySelector(".p4").textContent = "Origin: " + role.origin.name;
         template.querySelector(".p5").textContent = "Location: " + role.location.name;
    
    let clone = document.importNode(template, true);
         fragment.appendChild(clone);
         });
         cards.appendChild(fragment);
    });
    let deadButton = document.getElementById("dead");
    deadButton.addEventListener("click", () => {
    let deadCharacter = filterStatus (characters,'Dead');    
    const template = document.getElementById("card-box").content, 
        cards = document.querySelector(".card"),
        fragment =document.createDocumentFragment();
        deadCharacter.forEach((role) => {
         template.querySelector("h2").textContent =  role.name;
         template.querySelector("img").setAttribute("src", role.image);
         template.querySelector(".p1").textContent = "Status: " + role.status;
         template.querySelector(".p2").textContent = "Specie: " + role.species;
         template.querySelector(".p3").textContent = "Gender: " + role.gender;
         template.querySelector(".p4").textContent = "Origin: " + role.origin.name;
         template.querySelector(".p5").textContent = "Location: " + role.location.name;
    
    let clone = document.importNode(template, true);
         fragment.appendChild(clone);
         });
         cards.appendChild(fragment);
    });
    // ORDENADO
    let zaButton = document.getElementById("za");
    zaButton.addEventListener("click", () => {
    let zaCharacter = orderZA (characters);    
    const template = document.getElementById("card-box").content, 
        cards = document.querySelector(".card"),
        fragment =document.createDocumentFragment();
        zaCharacter.forEach((role) => {
         template.querySelector("h2").textContent =  role.name;
         template.querySelector("img").setAttribute("src", role.image);
         template.querySelector(".p1").textContent = "Status: " + role.status;
         template.querySelector(".p2").textContent = "Specie: " + role.species;
         template.querySelector(".p3").textContent = "Gender: " + role.gender;
         template.querySelector(".p4").textContent = "Origin: " + role.origin.name;
         template.querySelector(".p5").textContent = "Location: " + role.location.name;
    
    let clone = document.importNode(template, true);
         fragment.appendChild(clone);
         });
         cards.appendChild(fragment);
    });
    // console.log(orderAZ(characters));
    // console.log(orderZA(characters));
   
    
 
// function reglaDeTres (capitulos) {
//      let resultado = (capitulos*100)/31
//     console.log(resultado)
// };
// reglaDeTres (data.results[0].episode.length);
// reglaDeTres(data.results[1].episode.length);
// reglaDeTres(data.results[2].episode.length);
// reglaDeTres(data.results[46].episode.length);
// reglaDeTres(data.results[117].episode.length);
// reglaDeTres(data.results[239].episode.length);
// reglaDeTres(data.results[241].episode.length);
// reglaDeTres(data.results[330].episode.length);