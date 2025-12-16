/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
            .then(response => response.text())
            .then(data => document.getElementById("header").innerHTML = data);

    fetch("footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data);
    // Vérifie si on est dans le dossier "pages"
    setTimeout(() => {
        let isInPagesFolder = window.location.pathname.includes("/pages/");
        document.querySelectorAll("nav a").forEach(link => {
            if (isInPagesFolder && !link.getAttribute("href").startsWith("../")) {
                link.href = "../" + link.getAttribute("href");
            }

        });
    }, 100); // Petit délai pour laisser le temps au header de se charger 
});

