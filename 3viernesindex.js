//el fetch es la forma en la que nosotros hacemos una consulta a una funcion
//o a un api
//Fetch es una funcion para hacer la consulta al api
//Fetch le pide al servidor un resultaldo despues de consultar la URL de pokeapi

//sincrono significa que las lineas de codigo se leen secuencialmente de arriba a abajo

//asincrona: es la programacion en donde al llegar a una lina de codigo, ese codigo se estaria ejecutando
//al mismo tiempo de que el programa sigue leyendo las lineas de codigo de abajo

//la promesa es como decirle al programa que espere un resultado que una funcion traera de un api o un servidor

//fetch(url) = le hablamos al servidor para recibir algo
//then((res));==then(entonces recibimos una funcion). then es para poder agarrar la respuesta

const fetchPokemon = () => {//Funcion flecha
    pokeName = document.getElementById("pokeName");
    pokeInput = pokeName.value.toLowerCase();//obtenemos lo que se escriba en el input y en minusculas
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;//ponemos lo que se escriba en el input en la url directamente
    fetch(url).then((res) => {//lo que el servidor(mediante fetch(url)) devuelva se metera en res
        // console.log(res);
        if (res.status != "200") {//Ese status se obtiene desde el api, indica que el servidor devolvio correctamente
            console.log(res);
            pokeImage("pikachu-pokemon.jpg");//pone esta imagen por si el nombre se escribio mal
        }else{
            return res.json();//regresamos la respuesta(json)
        }
    }).then((data) => {//lo que devolvio la funcion es aun una promesa, por lo que aqui obtenemos los datos deunavez como un objeto
        console.log(data);
        let pokeImg = data.sprites.front_default;//accedemos al objeto(data) qu recibimos y a sprites que tambien es un objeto y accedemos a su valor front_default
        console.log(pokeImg);

        pokeImage(pokeImg);//llamamos a la funcion que cambiara la imagen y le pasamos la imagen desde la api
    })
}

// fetchPokemon();

//Cambiar la imagen
//recibe un url porque lo que cambiaremos sera el src
const pokeImage = (url)=>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");//le pasamos la url de la imagen a cambiar


// fetchPokemon();
// let h2 = document.getElementById("h2");
// const imprimir = () =>{//Al dar clic al boton se ejecuta esta funcion
//     pokeName = document.getElementById("pokeName");
//     console.log("Hola " + pokeName.value);
// }