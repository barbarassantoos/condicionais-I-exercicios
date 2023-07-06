const idade = Number(prompt("Qual a sua idade?"))
const ensinoMedio = confirm ("Terminou o ensino médio?")
const faculdade = confirm ("Está cursando faculdade?")

const cadastro = (idade,ensinoMedio,faculdade) =>{
if (idade>=18){
    console.log("A pessoa é maior de idade")
}else {
   console.log("A pessoa é menor de idade")
}
if (ensinoMedio === true) {
    console.log ("A pessoa terminou o ensino médio")
}else {
    console.log ("A pessoa não terminou o ensino médop")
}
if (faculdade === false){
    console.log("A pessoa não está cursando faculdade")
}else {
   console.log ("A pessoa não está cursando faculdade")
}
}
cadastro(idade,ensinoMedio,faculdade);