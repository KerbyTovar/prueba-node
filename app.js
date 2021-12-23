/*
let fs = require ('fs') //acceso directo a node

//acceder a otros archivos
let tareas = fs.readFileSync( './tareas.json', 'utf-8');
//console.log (tareas);
let datosConvertidos = JSON.parse (tareas);
//console.log (datosConvertidos);
*/

let listarTareas = require ('./funcionesDeTareas.js');
//let escribirJSON = require ('./tareas.js');
let guardarTarea = require ('./tareas.js');
let leerPorEstado = require ('./tareas.js');

let prueba = process.argv[2];

switch(prueba){
    case 'listar':
        console.log (listarTareas());
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
        break;
    case 'crear':
        let tareaNew = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        console.log(tareaNew);
        guardarTarea(tareaNew);
        break;
    case 'filtrar':
        let estado = process.argv[3];
        let arrayFiltrado = leerPorEstado(estado);
        console.log (arrayFiltrado);
        break;
        
    default:
        console.log('No entiendo qué quieres hacer');
        break;    
}



