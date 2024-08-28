const elRatingForm = document.getElementById("rating-form");

function submitRatingForm(event) {
    let rating = document.getElementById("rating").value;

    if (rating < 1 || rating > 5) {
        alert("Rating must be between 1 and 5");
    } else {
        alert("Thank you for rating this recipe!");
    }
    
    event.preventDefault();
}

elRatingForm.addEventListener("submit", submitRatingForm), false;

