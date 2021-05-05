//constants 

const newToyForm = document.querySelector("form.add-toy-form")
const textUserTyped = document.querySelector("#whatUserTypes")
const imageUserTyped = document.querySelector("#urlUserTypes")
const toyCollection = document.querySelector("#toy-collection")

//getRequests

function fetchAll () {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toysArray => renderToy(toysArray))
}



let addToy = false; // boolean set at false

document.addEventListener("DOMContentLoaded", () => {
  fetchAll()

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

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



newToyForm.addEventListener("submit", (event) => 
{ event.preventDefault()
  
  console.log(event)

})

// function addToy() {
  

function renderToy(toysArray) {
    toysArray.forEach(toy => {
      console.log(toy)
     const cardDiv = document.createElement("div")
     cardDiv.className= ("card")
      cardDiv.textContent = toy["name"].value
      console.log(cardDiv.textContent)
      cardDiv.append(h2);
    });
  }


