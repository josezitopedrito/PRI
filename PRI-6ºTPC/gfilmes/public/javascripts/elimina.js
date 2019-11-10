function eliminar(id){
    console.log('cheguei aqui')
    axios.delete('filmes/' + id)
		.then(dados=> window.location.assign('/'))
        .catch(error=>console.log(error))
}