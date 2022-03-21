 //estadisticas pokemon
const getStats = document.getElementById("statsPokemon");
const getMoves = document.getElementById("movements");
const getTitleStat = document.getElementById("titleStats");

const fetchPokemon = () =>{
    getStats.innerHTML = "";
    getMoves.innerHTML = "";
    
    pokeName = document.getElementById("pokeName").value.toLowerCase();    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res)=>{
        if (res.status != "200") {
            console.log(res);
            modDates("img/demo.jpg");
        }else{
            getTitleStat.style.display = "flex";
            return res.json();
        }
    }).then((data)=>{
        console.log(data);
        let pokeImg =data.sprites.front_default;//imagen
        let pokeNameApi = data.name;//Nombre
        let pokeId = data.id;        //id

        //tipo_pokemon
        let typesA = [];
        for (let i = 0; i < data.types.length; i++) {                                        
            typesA[i] = data.types[i].type.name;                              
        }       
        
        //estadisticas
        let statsPoke;        
        data.stats.forEach(stat => {
            // console.log(stat.stat.name, stat.base_stat);            
            statsPoke = stat.stat.name + ": " + stat.base_stat + "<br>";            
            getStats.innerHTML += statsPoke;            
        });

        //movements
        data.moves.forEach(move => {
            let movesPoke = move.move.name;
            console.log(movesPoke);
            // getMoves.innerHTML += movesPoke + "<br>";
        });
        modDates(pokeImg, pokeNameApi, pokeId, typesA);
    })
}
const modDates = (url, name, pokeId, types) =>{
    //imagen
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
    
    //nombre
    const getName = document.getElementById("name");
    getName.innerHTML = "nombre biologico: " + name;

    //id
    const getId = document.getElementById("id");
    getId.innerHTML = pokeId;

     //tipo_pokemon
    const getType = document.getElementById("typePoke");
    getType.innerHTML = "tipo de pokemon: " + types.join(", ");

   
}