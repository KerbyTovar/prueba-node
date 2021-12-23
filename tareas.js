
let fs = require ('fs');

function escribirJSON (miArray){
    let miArrayJson = JSON.stringify(miArray);
    fs.writeFileSync ('./tareas.json', miArrayJson);
}
//console.log(escribirJSON())

function leerJSON (){
    let jsonConvertido = fs.readFileSync( './tareas.json', 'utf-8');
    let datosConvertidos = JSON.parse(jsonConvertido);
    return datosConvertidos;
}


function guardarTarea (tarea){
    let miJsonOriginal = leerJSON();
    miJsonOriginal.push (tarea);

    escribirJSON (miJsonOriginal);

}

function leerPorEstado (estado){
    let miJsonOriginal = leerJSON();
    let miJsonFiltrado = miJsonOriginal.filter (function(tarea){
       return  tarea.estado === estado;
    });
    return miJsonFiltrado;
}


module.exports = escribirJSON; 
module.exports = guardarTarea;
module.exports = leerPorEstado;