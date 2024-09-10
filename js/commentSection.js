"use strict";

const elCommentForm = document.getElementById("comment-form");
const elNameInput = document.getElementById("name");
const elCommentInput = document.getElementById("comment");
const elCharCountDisplay = document.getElementById("comment-length");
const allowedChars = /^[a-zA-Z0-9!?]*$/;

function handleInput() {

    if (!allowedChars.test(elCommentInput.value)) {
        alert("Only alphanumeric characters and !? are allowed");
        elCommentInput.value = elCommentInput.value.replace(/[^a-zA-Z0-9!?]/g, "");
    }

    if (!allowedChars.test(elNameInput.value)) {
        alert("Only alphanumeric characters and !? are allowed");
        elNameInput.value = elNameInput.value.replace(/[^a-zA-Z0-9!?]/g, "");
    }

    const charLength = elCommentInput.value.length;
    const maxLength = elCommentInput.maxLength;
    elCharCountDisplay.textContent = `${charLength}/${maxLength} characters`;

};

elCommentInput.addEventListener("input", handleInput, false);
elNameInput.addEventListener("input", handleInput, false);

function handleComments() {
    document.addEventListener("DOMContentLoaded", function() {
        displayComments();
    });

    elCommentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = elNameInput.value;
        let comment = elCommentInput.value;

        let comments = JSON.parse(localStorage.getItem("comments")) || [];

        comments.push({ name: name, comment: comment });
        localStorage.setItem("comments", JSON.stringify(comments));

        elCommentForm.reset();
        elCharCountDisplay.textContent = "0/200 characters";

        displayComments();
    });
};

function displayComments () {
    const elCommentList = document.getElementById("comment-list");
    elCommentList.innerHTML = "";

    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.forEach(function(comment) {
        let li = document.createElement("li");
        li.textContent = `${comment.name}: ${comment.comment}`;
        elCommentList.appendChild(li);

    });
};

handleComments();
