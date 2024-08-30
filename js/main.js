const elRatingForm = document.getElementById("rating-form");

const ul = document.querySelector('#ingredients-pizza');
const url = 'data/recipes.json';

function submitRatingForm(event) {
    let rating = document.getElementById("rating").value;

    if (rating < 1 || rating > 5) {
        alert("Rating must be between 1 and 5");
    } else {
        alert("Thank you for rating this recipe!");
    }
    
    event.preventDefault();
}

elRatingForm.addEventListener("submit", submitRatingForm, false);

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.recipes);
        let recipes = data.recipes;

        ul.innerHTML = '';

        let pizzaRecipe = recipes.filter(function(recipe) {
            return recipe.id === 1;
        });

        pizzaRecipe.forEach(function(recipe) {
            recipe.ingredients.forEach(function(ingredient) {
                let li = document.createElement('li');
                li.textContent = ingredient;
                ul.appendChild(li);
            })
        })
        .catch(function(error) {
            console.error(error);
    });
});

