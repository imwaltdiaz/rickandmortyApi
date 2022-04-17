const url = "https://rickandmortyapi.com/api/character?page=";
// https://rickandmortyapi.com/api/character?page=2
const button = document.querySelector('#button-app');
const minimum = 1;
const maximum = 42;
//async
async function fetchData() {
  const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum) 
  debugger
  const pageUrl =  `${url}${random()}`
  const response = await fetch(pageUrl)
  data = await response.json()
  console.log(allItems) 
}

//try getting the characters
data.data.forEach((item) => {
  //create row
  const row = document.createElement("div")
  //create col
  const col = document.createElement("div")
  //create card
  const card = document.createElement("div")
  //create img
  const img = document.createElement("img")
  //create card body
  const cbody = document.createElement("div")
  //create card title
  const ctitle = document.createElement("h5")
  //create card badge
  const cbadge = document.createElement("span")
  //create type
  const ctype = document.createElement("p")
  row.append(col, card)
  card.append(img, cbody, ctitle, cbadge, ctype)

})
button.addEventListener("click", fetchData())



//Ejemplos de js DOM

async function fetchData() {
  const response = await fetch(url),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    // create title
    const title = document.createElement("h2");
    // create price
    const price = document.createElement("div");

    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  document.body.append(...allItems)
}

fetchData();

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app')

appNode.addEventListener("click", (event) => {
  if(event.target.nodeName === 'H2'){
    window.alert("hola")
  }
} )

//web api - fetch, es para traer recursos de una pagina web, solo podemos pasarle una url

//1 - Conectarnos al servr
//2 - Procesar la respuesta y convertirla en JSON
//3 - JSON -> Data -> Renderizar la infor en el browser


//Intl - Api de internacionalizacion
//1 - Dar formato a fechas
//2 - Dar formato a monedas

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: "USD",
  }).format(price);

  return newPrice;

};


window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then ((responseJson) => {
    const todosLosItems = []
    responseJson.data.forEach((item) => {
      //crear imagen
      const image = document.createElement('img')
      image.src = `${baseUrl}${item.image}` 
      image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

      //crear titulo
      const title = document.createElement('h2')
      title.textContent = item.name
      // title.style.fontSize = '3rem'<;  cambias elementos como un objeto o propiedad
      //title.className = 'muy-grande';  creas clases para un nodo
      title.className = 'text-lg'
  

      //crear precio
      const price = document.createElement('div')
      price.textContent = formatPrice(item.price);
      price.className = "text-gray-600"
      
      
      const priceAndTitle = document.createElement('div');
      priceAndTitle.className = "text-center md:text-left";
      priceAndTitle.append(title, price);
      
      const card = document.createElement("div");
      card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
      card.append(image, priceAndTitle)

      todosLosItems.push(card)
    });
    appNode.append(...todosLosItems)
  });


//del curso de asincronismo

const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'
//si algo nunca va a cmabiar o mover lo ponemos en mayusculas

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api)
    const character = await fetchData(`${API}${data.results[0].id}`)
    const origin = await fetchData(character.origin.url)
    
    console.log(data.info.count)
    console.log(character.name)
    console.log(origin.dimension)
  }
  catch (error) {
    console.error(error)
  }
}

console.log('Before')
anotherFunction(API)
console.log('After')

//help

function Characters(character) {
  return`
    <h2>Name: #${character.id}: ${character.name}</h2>
    <img src=${character.image} alt=${character.name} />
  `;
}
const title = document.querySelector("h1");
const container = document.createElement("div")
title.insertAdjacentElement("afterend", container);

const url = "https://rickandmortyapi.com/api/character"

async function fetchAPI() {
  const response = await fetch(url);
  const results = await response.json();
  const data = results.results;
  data.map(result => {
    const cont = document.createElement("div")
    cont.innerHTML = Characters(result)
    container.appendChild(cont)
  } )
}

fetchAPI();