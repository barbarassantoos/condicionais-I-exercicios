
const nacionalidade = prompt("Escreva abaixo sua nacionalidade")

function paisOrigem(nacionalidade){

if (nacionalidade === "brasileira"|| nacionalidade==="brasileiro") {
    console.log("nacionalidade encontrada")
}else if (nacionalidade === "argentina"|| nacionalidade === "argentino"){
    console.log ("nacionalidade encontrada")
}else if (nacionalidade === "uruguaia" || nacionalidade === "uruguaio"){
    console.log ("nacionalidade encontrada")
}else if (nacionalidade ==="chilena"||nacionalidade === "chileno"){
console.log ("nacionalidade encontrada")
}else if (nacionalidade === "colombiana"|| nacionalidade ==="colombiano"){
console.log ("nacionalidade encontrada")
} else {
    console.log("nacionalidade não encontrada");
}
}
console.log(paisOrigem(nacionalidade))
