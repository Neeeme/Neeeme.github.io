/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/header.html")
            .then(response => response.text())
            .then(data => document.getElementById("header").innerHTML = data);
    fetch("pages/footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data);
});

