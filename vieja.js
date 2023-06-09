let jugada = [];


let partida = 0




$("button").each(function(indice, elemento){
    elemento.addEventListener('click', (e) => btnPulsado(e, indice));
});

const btnPulsado = (elemento, indice) => {
    partida++;
    if (partida % 2 != 0) {
        let btn = elemento.target;
        btn.style.background = "red";
        jugada [indice = "1"];
    } else {
        let btn = elemento.target;
        btn.style.background = "blue";
        jugada [indice = "2"];
    }
};

if (condition) {
    
} else {
    
}