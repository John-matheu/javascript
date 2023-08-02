alert("pediremos os seus nomes para o calculo de idade ")

  let maior = prompt("nome da pessoa mais velha")
  let menor = prompt("nome da pessoa mais nova ")

  alert("certo, agora as idades ")
  let idadeMaior = prompt( maior + " você tem quantos anos? ")
  let idadeMenor = prompt( menor + " certo, você tem quantos anos?")

  alert("agora vamos calcular")

  let calculo = (idadeMaior - idadeMenor)
  alert ("calculo terminado! \n" + " adiferença de idade entre " + maior + " e " + menor + " é de: " + calculo )
