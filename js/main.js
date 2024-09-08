"use strict";
const elRatingForm = document.getElementById("rating-form");
const elAlertMessage = document.getElementById("alert-message");
const elCloseButton = document.getElementById("close-alert");
const elAlertPopup = document.getElementById("alert-popup");
function submitRatingForm(event) {
    let rating = document.getElementById("rating").value;

    if (rating < 1 || rating > 5) {
        elAlertMessage.textContent = "Rating must be between 1 and 5";
    } else {
        elAlertMessage.textContent = "Thank you for rating this recipe!";
    }
    
    elAlertPopup.style.display = "flex";
    event.preventDefault();
}

elCloseButton.addEventListener("click", function() {
    elAlertPopup.style.display = "none";
});

elRatingForm.addEventListener("submit", submitRatingForm, false);

const pDescriptionPizza = document.querySelector('#description-pizza');
const ulInstructionsPizza = document.querySelector('#instructions-pizza');
const ulIngredientsPizza = document.querySelector('#ingredients-pizza');
const url = 'data/recipes.json';

function fetchRecipes(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data.recipes);
            let recipes = data.recipes;

            let pizzaRecipe = recipes.filter(function(recipe) {
                return recipe.id === 1;
            });

            ulIngredientsPizza.innerHTML = '';
            ulInstructionsPizza.innerHTML = '';

            pizzaRecipe.forEach(function(recipe) {
                pDescriptionPizza.textContent = recipe.description;

                recipe.instructions.forEach(function(instruction) {
                    let li = document.createElement('li');
                    li.textContent = instruction;
                    ulInstructionsPizza.appendChild(li);
                });

                recipe.ingredients.forEach(function(ingredient) {
                    let li = document.createElement('li');
                    li.textContent = ingredient;
                    ulIngredientsPizza.appendChild(li);
                });
            });
        })
        .catch(function(error) {
            console.error(error);
        });
}

fetchRecipes(url);

document.querySelector('.menuButton').addEventListener('click', showSidebar);

function showSidebar() {
    const elSidebar = document.querySelector('.sidebar');
    elSidebar.style.display = 'flex';
}

function closeSidebar() {
    const elSidebar = document.querySelector('.sidebar');
    elSidebar.style.display = 'none';
}
