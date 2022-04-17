const url = "https://rickandmortyapi.com/api/character";
const button = document.querySelector("#button-app")
const app = document.querySelector("#app") 

async function execute() {
  await createRow()
  await fetchAPI()
}

async function createRow(){
  const newRow = document.createElement("div");
  newRow.classList = "row"
  console.log("add")
  app.appendChild(newRow)
}
button.addEventListener("click", execute, false)
async function fetchAPI() {
  const response = await fetch(url)
  const results = await response.json()
  const data = results.results
  data.map(result => {
    const col = document.createElement("div")
    col.classList= "col-12 col-sm-4 col-lg-3"
    col.innerHTML = characters(result)
    app.appendChild(col)
  })
}
function characters(character) {
  return`
  <div class="card">
    <img class="card-img-top" src="${character.image}" alt="">
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
      <span class="badge bg-success">${character.status}</span>
    </div>
  </div>
  `
}

