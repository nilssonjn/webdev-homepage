"use strict";

const elNameInput = document.getElementById("name");
const elCommentInput = document.getElementById("comment");
const elCharCountDisplay = document.getElementById("comment-length");
const allowedChars = /^[a-zA-Z0-9!?]*$/;

function handleInput() {

    if (!allowedChars.test(elCommentInput.value, elNameInput.value)) {
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

}

elCommentInput.addEventListener("input", handleInput, false);
elNameInput.addEventListener("input", handleInput, false);