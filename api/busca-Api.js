function apertandApi(){
    const axios=require('axios')
    
    axios.get('http://localhost:3080/peoples/Doguinho-Ong/cadastros')
    .then(function(response){
        console.log(response)
    })
    console.log('fui clicado')
}