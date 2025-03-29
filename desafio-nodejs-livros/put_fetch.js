fetch('http://localhost:3000/books'),{
    method : `PUT`,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title:'livro Atualizado Hoje',
        author: 'Autor atualizado hoje',
        Editora: 'Saraivahoje',
        Year: 2025
    })
}
    .then(response => {
        if (response.ok) {
            console.log('Livro atualizado com sucesso');
            
        }else{
            console.error('Erro ao atualizar o livro');
            
        }
    })
    .catch(error => console.error('Erro ao atualizar o livro', error))