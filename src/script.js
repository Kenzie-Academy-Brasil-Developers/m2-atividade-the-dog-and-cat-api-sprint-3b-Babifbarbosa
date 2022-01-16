const idgato        = document.getElementById('idgato')
const imggato       = document.querySelector('#idgato img')
const botaogato     = document.querySelector('#botaogato')
const idcachorro    = document.getElementById('idcachorro')
const imgcachorro   = document.querySelector('#idcachorro img')
const botaocachorro = document.querySelector('#botaocachorro')


function pegarFotosGatos(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => imggato.src = data[0].url)   
}
pegarFotosGatos()
botaogato.addEventListener("click", pegarFotosGatos)

//const idcachorro  = document.getElementById('idcachorro')
//const divcachorro = document.createElement('div')
//const imgcachorro = document.createElement('img') 

function pegarFotosCachorros(){
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => imgcachorro.src = data[0].url)
}

pegarFotosCachorros()
botaocachorro.addEventListener("click", pegarFotosCachorros)

