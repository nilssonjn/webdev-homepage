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

document.querySelector('.menuButton').addEventListener('click', showSidebar);

function showSidebar() {
    const elSidebar = document.querySelector('.sidebar');
    elSidebar.style.display = 'flex';
}

function closeSidebar() {
    const elSidebar = document.querySelector('.sidebar');
    elSidebar.style.display = 'none';
}
