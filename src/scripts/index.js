const url = "https://rickandmortyapi.com/api/character";
const button = document.querySelector("#button-app")
const app = document.querySelector("#app") 
let filteredData = null

async function execute() {
  await fetchAPI()
  await createCards()
}

async function fetchAPI() {
  const response = await fetch(url)
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
    app.appendChild(col)
    // // if(result.status === "alive"){
    // //   return badgeColor = bg-success
    // // }
    // // else {
    // //   return badgeColor = bg-secondary
    // // }
  })
}

function characters (character){
  return`
  <div class="card">
    <img class="card-img-top" src="${character.image}" alt="">
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
      <span id="span" class="badge bg-success">${character.status}</span>
    </div>
  </div>
  `
}

button.addEventListener("click", execute, false)






  // async function supStatus() {
  //   let bStatus = "unknown"
  //   if(character.status === "alive"){
  //     bStatus = "badge bg-success"
  //   }
  //   else{
  //     bStatus = "badge bg-secondary"
  //   }
  // }
  // await supStatus()

// let bStatus ;
// if (character.status === "Alive"){
//   let bStatus = "badge bg-success";
// }
// else{
//   let bStatus = "badge bg-secondary"
// }
// return`
// <div class="card">
//   <img class="card-img-top" src="${character.image}" alt="">
//   <div class="card-body">
//     <h5 class="card-title">${character.name}</h5>
//     <span id="span" class=${bStatus}>${character.status}</span>
//   </div>
// </div>
// `




















// const url = "https://rickandmortyapi.com/api/character";
// const button = document.querySelector("#button-app")
// const app = document.querySelector("#app") 

// // async function execute() {
// //   await createRow()
// //   await fetchAPI()
// // }

// // async function createRow(){
// //   const newRow = document.createElement("div");
// //   newRow.classList = "row"
// //   console.log("add")
// //   app.appendChild(newRow)
// // }

// button.addEventListener("click", execute, false)

// async function fetchAPI() {
//   const response = await fetch(url)
//   const results = await response.json()
//   const data = results.results

//   let filteredData = data.map(({name, status, species, image}) => ({name,status,species, image}))
//   console.log(filteredData)

//   data.map((result, index) => {
//     const col = document.createElement("div")
//     col.classList= "col-12 col-sm-4 col-lg-3"
//     col.id = "col"
//     col.innerHTML = characters(result)
//     app.appendChild(col) 
//     console.log(index) 
//   })
// }



// function characters(character) {
//   return`
//   <div class="card">
//     <img class="card-img-top" src="${character.image}" alt="">
//     <div class="card-body">
//       <h5 class="card-title">${character.name}</h5>
//       <span class="badge bg-success">${character.status}</span>
//     </div>
//   </div>
//   `
// }

