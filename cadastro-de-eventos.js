let dataAtual = new Date("01/09/2021");
let dataEvento = new Date("25/12/2021");
//======================================
//Compara as datas
if (dataAtual < dataEvento) {
    console.log("Evento não pode ser realizado")
} else {
    console.log("Realizar o evento");
}
//Verifica a idade
//========================================
let idadeParticipante = 22;
if (idadeParticipante >= 18) {
    console.log("idade do participante é admissível");
 } else {
        console.log("Idade não permitida para assistir ao evento");
} //==========================================================================================

//Lista participantes, palestrantes e eventos
let listaDeParticipante = ["Everaldo","Manoela","jonas","Karina","Pedro","Maria","Paula","Godofredo","Armando"];
let quantidadeDeParticipante = listaDeParticipante.length;
if (quantidadeDeParticipante < 10) {
        console.log("PARTICIPANTES: "+listaDeParticipante);
    
    }
let listaDePalestrante = ["Marilda","Paula","Luiz","Antonio"];
let quantidadeDePalestrante = listaDePalestrante.length;
if (quantidadeDePalestrante < 10){
    console.log("PALESTRANTES: " +listaDePalestrante);
}

let listaEventos = ["evento-1","EVENTO-2","EVENTO-3"];
let quantidaDeEventos = listaEventos.length;
if (quantidaDeEventos < 10) {
    console.log("EVENTOS: "+listaEventos);
}
