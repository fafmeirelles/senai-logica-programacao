let dataAtual = new Date();
let dataEvento = new Date("jan 31 2021");
console.log(dataAtual);
console.log(dataEvento);

let getdataAtual = dataAtual.getTime();
const getdataEvento = dataEvento.getTime();
console.log(getdataAtual);
console.log(getdataEvento);

if (dataEvento <= dataAtual) {
    console.log("Evento não pode ser cadastrado");
    console.log("Data inferior ou igual a data de hoje");
} else {
    console.log("Permitir o evento");
}