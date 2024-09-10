"use strict";

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