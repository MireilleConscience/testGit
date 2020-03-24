let texto= "¡Hola!, soy Carli";
console.log(texto.split(' '));
let licenciada = texto.split(' ').pop();
console.log(licenciada);
console.log("Hola mundo!");


function agregarHttp(url) {
    return"http://" + url;
}

function procesar(listaDeSitiosWeb,funcion){
    let arrayDeResulatdos = [];
    for (let i =0; i<listaDeSitiosWeb.length; i++){
        arrayDeResulatdos.push(funcion(listaDeSitiosWeb[i]));
    }
    console.log("No es el fin del mundo!!!");
    return arrayDeResulatdos;
}

let listaDeSitiosWeb=["sitioWeb1", "sitioWeb2","sitioWeb3"];
console.log(procesar(listaDeSitiosWeb,agregarHttp));