window.addEventListener("DOMContentLoaded", function() {
    let cbb = document.querySelector('.check-box');
    let i = document.querySelector('.fa-check');
    
    cbb.addEventListener("click", ()=> {
        i.classList.toggle("visible");
    })
}, false);

let copyright = document.querySelector(".updateCopyright");

let currentYear = new Date().getFullYear()
copyright.textContent = currentYear;