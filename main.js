let api = []
fetch ("https://rickandmortyapi.com/api/character")

.then(response => response.json()) 
.then(data => {                     
console.log(data);    
personajes = data.results;               
mostrarPersonajes(personajes);
})
.catch(error => {                
console.error('Error al leer el archivo JSON:', error);
});

let personajes = []
const contenedor = document.getElementById("mainContainer");
const searchInput = document.getElementById("searchInput");

function mostrarPersonajes(listaPersonajes) {
    mainContainer.innerHTML = ""

    listaPersonajes.forEach(personajes => {
        mainContainer.innerHTML += `
        <div class="card">
            <img src="$(personaje.inage)" alt="$(personaje.name)">
            <h2>$(personaje.name)</h2>
            <p>Especie: $(personaje.species)</p>
            <p>Estado: $(personaje.status)</p>
        </div>
    `;
    })
}
searchInput.addEventListener('input', ()=> {
    const searchTerm = searchInput.value.toLowerCase();
    const filtroPersonajes = personajes.filter(personaje => {
        return personaje.name.toLowerCase().includes(searchTerm)
    })
    mostrarPersonajes(filtroPersonajes)
})
