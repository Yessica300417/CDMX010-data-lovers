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
   
    
// CALCULO DE LA APARICION DE LOS PERSONAJES POR CAPITULO 
function reglaDeTres (capitulos) {
     let resultado = (capitulos*100)/31
    console.log(resultado)
};
reglaDeTres (data.results[0].episode.length);
reglaDeTres(data.results[1].episode.length);
reglaDeTres(data.results[2].episode.length);
reglaDeTres(data.results[46].episode.length);
reglaDeTres(data.results[117].episode.length);
reglaDeTres(data.results[239].episode.length);
reglaDeTres(data.results[241].episode.length);
reglaDeTres(data.results[330].episode.length);

//Grafica de resultados

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Personaje", "Porcentaje", { role: "style" } ],
    ["Rick Sanchez", 100, "#b87333"],
    ["Morty Smith", 100, "color: #C70039"],
    ["Summer Smith", 77.41, "color:#76A7FA"],
    ["Birdperson", 16.12, "color: #e5e4e2"]
    //["Evil Morty", 6.45, "color: #e5e4e2"]
    //["Mr. Goldenflod", 29.03, "color: #b87333"],
//     ["Mr. Meeseeks", 12.90, "color:BC5679"],
//     ["Squanchy", 9.67, "color: #e5e4e2"]
  ]);

 var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Porcentaje de aparición en la serie",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}
