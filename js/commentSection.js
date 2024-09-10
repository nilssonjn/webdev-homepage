"use strict";

const elCommentForm = document.getElementById("comment");
const elCharCountDisplay = document.getElementById("comment-length");
const allowedChars = /^[a-zA-Z0-9!?]*$/;

function handleInput() {

    if (!allowedChars.test(elCommentForm.value)) {
        alert("Only alphanumeric characters and !? are allowed");
        elCommentForm.value = elCommentForm.value.replace(/[^a-zA-Z0-9!?]/g, "");
    }

    const charLength = elCommentForm.value.length;
    const maxLength = elCommentForm.maxLength;

    elCharCountDisplay.textContent = `${charLength}/${maxLength} characters`;

}

elCommentForm.addEventListener("input", handleInput);