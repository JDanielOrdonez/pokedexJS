let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btn = document.getElementById("btn");
let msgContainer = document.getElementById("msg");


btn.addEventListener("click", ()=>
{       
    msgContainer.innerHTML = parseInt(numero1.value) + parseInt(numero2.value);
    // if(numero1.value == "eliminar"){
        
    //     msgContainer.innerHTML = "d";

    // }else if (numero1.value == "mostrar") {
    //     msgContainer.style.display = "flex";
    // } 
    // alert(numero1.value);
    }
);

//Hay varias formas de crear una funcion

//UNA FORMA
const cuadrado = function (x) {
    return x * x;
}
console.log(cuadrado(5));

//SEGUNDA FORMA
function dividir(x,y) {
    return x / y;
}
console.log(dividir(10,5));

//TERCERA, FUNCION DE FLECHA
const restar = (a,b)=>{
    return a-b;
}
console.log(restar(12,5));



//TRES FUNCIONES CONECTADAS ENTRE SI
// EXCEPCIONES-------------
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);//prompt abre un cuadro de dialogo para pedir datos
    if(result.toLocaleLowerCase() == "left") return "L";
    if(result.toLocaleLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result); //si no entra en alguno de los     
                                                     //ifs anteriores, entra aqui en throw
}


//otro
function mirar() {
    //Esto dentro del if llama a la funcion anterior
    if (preguntaDireccion("A que lado?") == "L") {
        return "una casa";
    } else {
        return "2 osos hambrientos"

    }
}

//try chatch
try {
    console.log("Mira a ", mirar());//Se llama a la funcion anterior
} catch (error) {
    console.log("Hubo un error: " + error);
}