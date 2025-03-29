fetch('http://localhost:3000/books'),{
    method : `POST`,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title:'Novo Livroteste',
        author: 'Andreateste',
        Editora: 'Saraiva99',
        Year: 2015
    })
}
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Erro', error))