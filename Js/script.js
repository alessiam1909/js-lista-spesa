const lista = ["Pane", "Nutella", "Pasta", "Formaggio", "Mandarini", "Fragole", "Fette Biscottate"];
const contenitoreLista = document.querySelector('.lista-spesa');


let elementoLista = 0;

while(elementoLista < lista.length){

    let listItem = document.createElement('li') ;

    listItem.innerText = lista[elementoLista];

    listItem.classList.add('elemento-lista');

    console.log(listItem);

    contenitoreLista.append(listItem);

    elementoLista++;
}