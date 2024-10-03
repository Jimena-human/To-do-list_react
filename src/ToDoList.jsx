//código react- componente
import React, {useState} from "react";

function ToDoList(){
    //setear las tareas con setStatus array vacío
    //tarea
    const [tareas, setTarea] =useState(["almorzar", "comer", "desayunar","comer"]);
    //nueva tarea
    const[nuevaTarea, setNuevaTarea] =useState([]);

    //Funciones a realizar 
    //función para textbox cuando escribimos algo
    function manejoCambioInput(evento){
        //ingresa al parametro del evento,luego al target, luego al valor
        setNuevaTarea(evento.target.value); 
    }


    //agregar
    function agregarTarea(){
        setTarea(setNuevaTarea)
    }
    //subir tarea
    function subirCategoria(indice){

    }

    //bajar tarea
    function bajarCategoria(indice){

    }

    //eliminar
    function eliminarTarea(indice){

    }


    return (
        <div className="todo-list">
            {/* input, le enviamos la tarea */}
            <div className="seccionInput">
            <input type="text" 
            placeholder="Ingresa una tarea"
            value={nuevaTarea}
            onChange={manejoCambioInput}/>

            <button className="btnAgregar"
            onClick={agregarTarea}>Agregar</button>
            </div>

            <h2>Tus tareas pendientes</h2>

            {/* Lista de tareas
            Por cada tarea agregada, las mapea y las agrega */}
            <div className="tareasPendientes">
                 <ol> 
                    {/*Toma dos parametros, un elemento y el indice */}
                    {tareas.map((tarea, indice) => 
                        <li key={indice}>
                            <span className="texto">{tarea}</span>

                            <button className="btnBorrar" 
                            onClick={eliminarTarea}>Eliminar</button>
                            <button className="btnSubir"
                            onClick={subirCategoria}>Subir 👆</button>
                            <button className="btnBajar"
                            onClick={bajarCategoria}>Bajar 👇  </button>
                        </li>
                    )} 
                    
                </ol>
                
            </div>
            
        </div> 
);
}

export default ToDoList;