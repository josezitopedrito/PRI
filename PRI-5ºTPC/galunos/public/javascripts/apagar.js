function apagaItem(ident){
    console.log('Vou apagar o item: ' + ident)
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function apagaNota(idA,ident){
    console.log('Vou apagar o item: ' + ident)
    axios.delete('/alunos/' + idA + '/notas/'+ ident)
        .then(response => window.location.assign('/alunos/' + idA))
        .catch(error => console.log(error))
}