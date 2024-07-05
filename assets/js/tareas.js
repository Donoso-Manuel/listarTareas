const tareas = [{
    id: 14578,
    nombre: 'Hacer Desafio',
    estado: true
},
{
    id: 26789,
    nombre: 'Revision APIs',
    estado: false
},
{
    id: 87489,
    nombre: 'Subir Desafio',
    estado: false
}
];
let listadoTareas = document.querySelector('.listaTareas');

renderizarTareas();
contarTareas();

function agregarTarea(){
let nombreTarea = document.querySelector('.nuevaTarea').value;
    if(nombreTarea == ''){
        document.querySelector('.verificacionTarea').innerHTML = "No se ha ingresado ninguna Tarea"
    }else{
        let nuevaTarea = {
        id: Date.now(),
        nombre: nombreTarea,
        estado: false
    }
    tareas.push(nuevaTarea);
    document.querySelector('.verificacionTarea').innerHTML = "Tarea ingresada con exito"
    renderizarTareas();
    contarTareas()
    document.querySelector('.nuevaTarea').value = '';
    }
}
function eliminarTarea(id){
    let indiceTarea = tareas.findIndex(tarea=>tarea.id === id);
    tareas.splice(indiceTarea,1);
    renderizarTareas();
    contarTareas()
}

function renderizarTareas(){
    let mostrartareas = document.querySelector('.listaTareas')
    let templateTareas = '';
    
    for (const tarea of tareas) {
        templateTareas +=`<tr>
                            <td>${tarea.id}</td>
                            <td>${tarea.nombre}</td>
                            <td><input type="checkbox" ${tarea.estado ? 'checked' : ''} onclick="cambioEstado(${tarea.id})"></td>
                            <td><button class="btnEliminar" onclick="eliminarTarea(${tarea.id})">X</button></td>
                            <td><p> ${tarea.estado ? 'Realizada' : 'Pendiente'} </p></td>
                        </tr>`
    }
    mostrartareas.innerHTML = templateTareas;
}
function contarTareas(){
    let cantTareas = tareas.length;
    let tareasRealizadas = tareas.filter(tarea=>tarea.estado == true).length;

    document.querySelector('.totalTareas').innerHTML = cantTareas ;
    document.querySelector('.totalRealizadas').innerHTML = tareasRealizadas;
}
function cambioEstado(idTarea){
    let index = tareas.findIndex(tarea=>tarea.id == idTarea);
    tareas[index].estado = !tareas[index].estado;
    contarTareas();
    renderizarTareas();
}