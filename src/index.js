//constants 

const newToyForm = document.querySelector("form.add-toy-form")
// const textUserTyped = document.querySelector("#whatUserTypes")
// const imageUserTyped = document.querySelector("#urlUserTypes")
const toyCollection = document.querySelector("#toy-collection")
const addToyForm = document.querySelector("form.add-toy-form")
//getRequests

function fetchAll () {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toysArray => renderToy(toysArray))
};

// function addNewPokemon(newPokemon) {
//   fetch('http://localhost:3000/toys',
//    {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newPokemon),
// }) }
  // .then((r) => r.json())
  // .then((articleObj) => console.log(articleObj)); }// this is for confirmation so we can cosole log and add it to the page 

  // // newToyForm.addEventListener("submit", addToy(e)){
  
  



document.addEventListener("DOMContentLoaded", () => {
  fetchAll()

  

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  let addToy = false; // boolean set at false
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// //helper functions  
// function addNewToy(e){
//   e.preventDefault()
  
//   const newPokemon ={
//     "name": e.target.whatUserTypes.value,
//     "url": e.target.urlUserTypes.value
//  }


function renderToy(toysArray) {
    toysArray.forEach(toy => {
      // console.log(toy)
      // console.log(toy.name)
  
     const cardDiv = document.createElement("div")
     cardDiv.innerHTML = `<div class="card">
     <h2>${toy.name}</h2>
     <img src="${toy.image}" class="toy-avatar" />
     <p>${toy.likes} Likes </p>
     <button class="like-btn" id="[toy_id]">Like <3</button>
   </div>` 
      toyCollection.append(cardDiv)
    });

  }

