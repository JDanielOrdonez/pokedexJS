//es mas recomendable usar let y conts que var
//VARIABLES Y MOSTRAR EN PANTALLA
let numero = 2;
let numero2 = 'mi numero es ';
let numero3 = 3;
let numero4 = 5;

console.log(numero2 + numero + numero3 + '\n' + numero4);

console.log(`mi numero es ${numero3}`);


//CONDICIONALES     AND(&&) y OR(||) y diferente(!=)
console.log('Condicionales---------------');
if (numero < numero3) {
    console.log(numero + ' Es menor que ' + numero3);
}else{
    console.log(numero + ' Es mayor');
}


//OPERADORES DE COMPARACION


const numero7 = 20;
const numero8 = "20";
const numero9 = 30;
console.log(typeof(numero8));
console.log(typeof(numero7));

//REVISANDO SI 2 NUMEROS SON IGUALES
console.log(numero7 == numero9);
console.log(numero7 == numero8);


//COMPARADOR ESTRICTO
//paseInt = convierte un string a entero
//REVISA QUE EL VALOR Y EL TIPO DE DATO SEAN IGUALES
console.log(numero7 === numero9);
console.log(numero7 === numero8);
console.log(numero7 === parseInt(numero8));//lo convertimos a entero



//DIFERENTE A 
console.log(numero7 != numero8);
console.log(numero7 !== numero8);//COMPARADOR ESTRICTO, REVISA VALOR Y TIPO DE DATO
console.log(numero7 !== parseInt(numero8));// lo convertimos a entero



//ARREGLOS-----------------

//Usar let dentro de un codigo como ciclos for, etc
//Usar var para variables globales//NO SON SEGURAS
//Usar const para valores que nunca cambiaran su valor y son valores globales

console.log("ARREGLOS-----------------");
let listaDeNumeros = [1,4,5];
let listaDePalabras = ['Hola','Mundo','desde','JavaScript'];
console.log(listaDeNumeros[0]);

for (let i = 0; i < listaDeNumeros.length; i++) {
    console.log(listaDeNumeros[i]);    
}

listaDeNumeros.push(12);//METER MAS DATOS AL ARREGLO

let palabra = "palabra"; 
console.log(palabra[3]);//TAMBIEN FUNCIONA COMO ARREGLO

listaDeNumeros.length;//Obtener el tamaño de un arreglo


//OBJETOS ------------------
console.log("OBJETOS---------------------");
let explorer = {
    nombre : "Nombre del explorer",
    email : "email@innovaccion.mx",
    numeroReg : 212,
    mision : "FrontEnd",
    proyectos : [//Arreglo
        "abogabot",
        "pasteleria",
        "taqueria",
        "vacunacion"
    ],
    proper : {
        escolar : "Tareas",
        profesional : "Trabajo",
        personal : "Negocio"
    }
}

console.log(explorer);
console.log(explorer.email);
console.log(explorer.proper.escolar);