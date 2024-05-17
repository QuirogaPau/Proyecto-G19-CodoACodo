document.addEventListener("DOMContentLoaded", function() {
    fetch("/src/templates/view/js/script.js")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbarContainer").innerHTML = data;
        })  
        .catch(error => console.error('Error loading navbar:', error));
});
