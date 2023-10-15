let notas = [];
let counter = 0;

function agregarNota(){
    let inputNota = document.getElementById("inputNota").value;
    if(inputNota.trim() != ""){
        notas.push(`<div class="divNota" id="item-${counter}"><p class="textoNota">${inputNota}</p><button class="btnBorrarNota" idnota="item-${counter}" onclick="borrarNota(event)">Borrar</button></div>`)
    }else{
        alert("La nota esta vacía")
    }
    listarNotas();
    counter++
}

function listarNotas(){
    let divNotas = document.getElementById("divNotas");
    divNotas.innerHTML = "";
    for(const nota of notas){
        divNotas.innerHTML += nota;
    }
}

function borrarNota(event){
    let idNota = event.target.parentNode.id;
    notas = notas.filter((nota) => nota.includes(idNota) != true);
    listarNotas();
}