let fs = require ('fs') //acceso directo a node

//acceder a otros archivos
let tareas = fs.readFileSync( './tareas.json', 'utf-8');
//console.log (tareas);
let datosConvertidos = JSON.parse (tareas);
//console.log (datosConvertidos.length);

function listarTareas(){
    datosConvertidos.forEach(function(dato){
        //console.log(typeof dato);
        if((dato)){
        console.log (dato);
        }
    });

    /*for(let i=0; i<= datosConvertidos.length -1 ; i++ ){
        console.log (datosConvertidos[i]);
    }*/
};

//console.log (listarTareas());

module.exports = listarTareas;