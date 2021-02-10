//MAIN.JS Este bendito archivo tiene el proposito de manipular el DOM
import data from './data/rickandmorty/rickandmorty.js';
import {filterGender, filterStatus, orderZA} from './data.js'//invocacion

//VISUALIZACION DE LAS TARJETAS
const characters = data.results;

     function Card(personaje) {
          return `
               <div class="container">
                    <h2>${personaje.name}</h2>
                    <img class = "imgCard" src="${personaje.image}">
                    <h3>Information</h3>
                    <div class="information">
                    <p>Status: ${personaje.status}</p>
                    <p>Specie: ${personaje.species}</p>
                    <p>Gender: ${personaje.gender}</p>
                    <p>Origin: ${personaje.origin.name}</p>
                    <p>Location: ${personaje.location.name}</p>
                    </div>
               </div>
          `
     }

    //Mostrar  tarjetas 
     function cardShow(personajes) {
          const cards =  document.getElementById('cardsContainer');
          let information = ''; 
          personajes.forEach((personaje) => {
              information += Card(personaje);
            });
            cards.innerHTML = information;
        };

        cardShow(characters);
        
        let button = document.getElementById("female");
        button.addEventListener("click", () => {
            const charactersFem = filterGender(characters, 'Female'); 
            cardShow(charactersFem)
        });
// FILTRADO POR MASCULINO
    
    let maleButton = document.getElementById("male");
    maleButton.addEventListener("click", () => {
        const charactersMa = filterGender(characters, 'Male'); 
        cardShow(charactersMa);
    });

    let aliveButton = document.getElementById("alive");
    aliveButton.addEventListener("click", () => {
        const charactersAli = filterStatus(characters, 'Alive');
        cardShow(charactersAli);
    });

    let deadButton = document.getElementById("dead");
    deadButton.addEventListener("click", () => {
        const charactersDe = filterStatus(characters, 'Dead');
        cardShow(charactersDe);
    });

    //ORDENADO
    let buttonZa = document.getElementById("za");
    buttonZa.addEventListener("click", () => {
        const charactersOr = orderZA(characters);
        cardShow(charactersOr);
    });
