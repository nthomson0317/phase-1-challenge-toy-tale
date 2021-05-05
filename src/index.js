//constants 

const newToyForm = document.querySelector("form.add-toy-form")
const textUserTyped = document.querySelector("#whatUserTypes")
const imageUserTyped = document.querySelector("#urlUserTypes")
const toyCollection =document.querySelector("#toy-collection")

//getRequests


let addToy = false; // boolean set at false

document.addEventListener("DOMContentLoaded", () => {
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


function addToy() {
  
newToyForm.appendChild("li")
}

})