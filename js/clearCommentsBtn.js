"use strict";
const elBtnClearComments = document.getElementById("clear-comments");

elBtnClearComments.addEventListener("click", function() {
    localStorage.removeItem("comments");
    displayComments();
});