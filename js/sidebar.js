"use strict";
const elSidebar = document.querySelector('.sidebar');
const elMenuButton = document.querySelector('.menuButton');

function showSidebar() {
    elSidebar.style.display = 'flex';
}

function closeSidebar() {
    elSidebar.style.display = 'none';
}

elMenuButton.addEventListener('click', showSidebar);