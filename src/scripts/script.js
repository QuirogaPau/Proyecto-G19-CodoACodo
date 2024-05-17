document.addEventListener("DOMContentLoaded", function() {
    fetch("/partials/navbar.html")
        .then(response => response.text())
        .then(data => {
            console.log("Disparé"); // Este console.log se ejecutará después de que la respuesta del fetch sea exitosa
            document.getElementById("navbarContainer").innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error); // Este console.log se ejecutará si hay un error en el fetch
            console.log("Disparé dentro del catch"); // Este console.log se ejecutará si hay un error en el fetch
        });
});
 
fetch(api['cardLibro'])