fetch('http://localhost:3000/books'),{
    method : `POST`,
}
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Erro ao buscar livros', error))