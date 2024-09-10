"use strict";

const elCommentForm = document.getElementById("comment");
const elCharCountDisplay = document.getElementById("comment-length");

elCommentForm.addEventListener("input", function() {
    const charLength = elCommentForm.value.length;
    const maxLength = elCommentForm.maxLength;

    elCharCountDisplay.textContent = `${charLength}/${maxLength} characters`;

});