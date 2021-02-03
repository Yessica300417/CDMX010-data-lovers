//MAIN.JS Este bendito archivo tiene el proposito de manipular el DOM
import data from './data/rickandmorty/rickandmorty.js';
import {filterGender, filterStatus, orderZA /*orderAZ*/} from './data.js'//invocacion

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

    // FILTRADO 
     function mostrarTarjetas(personajes) { // female, male\
          const cards =  document.getElementById('cardsContainer')

          let html = ''
          personajes.forEach((personaje) => {
               html += Card(personaje)
          });

          cards.innerHTML = html;
     }
// function Card(characters) {
//     return characters
// }

let buttonPe = document.getElementById("buttonPe");
     buttonPe.addEventListener("click", () => {
        const personnajes = mostrarTarjetas (characters);
        mostrarTarjetas(personajes);
     });
  

     let button = document.getElementById("female");
     button.addEventListener("click", () => {
          const personajes = filterGender(characters, 'Female'); 

          mostrarTarjetas(personajes)
     });
// FILTRADO POR MASCULINO
    
    let maleButton = document.getElementById("male");

    maleButton.addEventListener("click", () => {
          const personajes = filterGender(characters, 'Male'); 

        mostrarTarjetas(personajes)
    });

    let aliveButton = document.getElementById("alive");

    aliveButton.addEventListener("click", () => {
          const personajes = filterStatus(characters, 'Alive'); 

        mostrarTarjetas(personajes)
    });

    let deadButton = document.getElementById("dead");

    deadButton.addEventListener("click", () => {
          const personajes = filterStatus(characters, 'Dead'); 

        mostrarTarjetas(personajes)
    });
    //ORDENADO
    let buttonZa = document.getElementById("za");

    buttonZa.addEventListener("click", () => {
          const personajes = orderZA(characters,); 

        mostrarTarjetas(personajes)
    });


   
    
// CALCULO DE LA APARICION DE LOS PERSONAJES POR CAPITULO 
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

//Grafica de resultados

// google.charts.load("current", {packages:["corechart"]});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ["Personaje", "Porcentaje", { role: "style" } ],
//     ["Rick Sanchez", 100, "#b87333"],
//     ["Morty Smith", 100, "color: #C70039"],
//     ["Summer Smith", 77.41, "color:#76A7FA"],
//     ["Birdperson", 16.12, "color: #e5e4e2"]
    //["Evil Morty", 6.45, "color: #e5e4e2"]
    //["Mr. Goldenflod", 29.03, "color: #b87333"],
//     ["Mr. Meeseeks", 12.90, "color:BC5679"],
//     ["Squanchy", 9.67, "color: #e5e4e2"]
//  ]);

//  var view = new google.visualization.DataView(data);
//   view.setColumns([0, 1,
//                    { calc: "stringify",
//                      sourceColumn: 1,
//                      type: "string",
//                      role: "annotation" },
//                    2]);

//   var options = {
//     title: "Porcentaje de aparición en la serie",
//     width: 600,
//     height: 400,
//     bar: {groupWidth: "95%"},
//     legend: { position: "none" },
//   };
//   var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
//   chart.draw(view, options);
// }
