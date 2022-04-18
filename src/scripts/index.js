const url = "https://rickandmortyapi.com/api/character?page=";
const button = document.querySelector("#button-app")
const app = document.querySelector("#app") 
let filteredData = null
const minimum = 1;
const maximum = 42;

async function execute() {
  await fetchAPI()
  await createCards()
}

async function fetchAPI() {
  const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum) 
  const pageUrl = `${url}${random()}`
  const response = await fetch(pageUrl)
  const results = await response.json()
  const data = results.results
  filteredData = data.map(({name, status, species, image}) => ({name,status,species, image}))
}
//bring the data
async function createCards() {
  await fetchAPI()
  filteredData.map((result) => {
    const col = document.createElement("div")
    col.classList = "col"
    col.innerHTML = characters(result)
    // app.appendChild(col)
    //not needed anymore
    app.insertBefore(col, app.firstChild)
  })
}

function characters (character){
  return`
  <div class="card h-100">
    <img class="card-img-top lazy" src="${character.image}" alt="">
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
      <span id="span" class="badge bg-success">${character.status}</span>
    </div>
  </div>
  `
}

button.addEventListener("click", execute, false)