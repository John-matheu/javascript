alert("voce entrou em nosso sistema de voo")
alert("pediremos a você algumas informações")
let nome = prompt("por favorr digite seu nome: ")
let velocidade = prompt("certo " + nome +" agora digite sua velocidade")
let confirmacao = confirm("esta certa a velocidade digitada? ")
console.log(confirmacao)

if (confirmacao == true) {
    alert("aproveite a viajem muito obrigado por preferir nossos serviços")
} else {
   let novaConfirm = prompt("digite novamente a velocidade ")
}
