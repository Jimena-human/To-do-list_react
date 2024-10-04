//código react- componente
import React, {useState} from "react";

function ToDoList(){
    //setear las tareas con setStatus array vacío
    //tarea
    const [tareas, setTareas] = useState(["almorzar", "comer", "desayunar"]);
    //nueva tarea
    const[nuevaTarea, setNuevaTarea] =useState("");

    //Funciones a realizar 
    //función para textbox cuando escribimos algo
    function manejoCambioInput(evento){
        //ingresa al parametro del evento,luego al target, luego al valor
        setNuevaTarea(evento.target.value); 
    }


    //agregar
    function agregarTarea(){
        //si al cortar el espacio vacío es diferente a un string vacío, añade la tarea
        if(nuevaTarea.trim() !== ""){
            //spread the current elements of tasks (?) y añade una nueva tarea
            setTareas(tareas => [...tareas, nuevaTarea]);
            setNuevaTarea(""); 
        }
    }

    //eliminar
    function eliminarTarea(indice){
    // creamos un nuevo array de tareas actualizadas, filtramos las tareas
    //el filter method nos provee un elemento y un index (diferente al que ya nos llega)
    //si el index que nos llega no es estrictamente igual al que tenemos
    //no nos interesa, sólo el que si matchee
    //tendremos un array con un elemento faltante
    //a la lista de tareas le enviamos la actualizada

    
    // let indice2;
        console.log("seleccioné eliminar");
        // console.log("indice " + indice2);
        
        
        const tareasActualizadas = tareas.filter((_, indice2) => indice2 !== indice);   
        setTareas(tareasActualizadas);
    
    

    }

    //subir tarea
    function subirCategoria(indice){
        if(indice > 0){
            const listaActualizada = [...tareas];
            [listaActualizada[indice],listaActualizada[indice-1]] = 
            [listaActualizada[indice-1],listaActualizada[indice]];
            setTareas(listaActualizada);
        }

    }

    //bajar tarea
    function bajarCategoria( indice){

        // console.log("tarea "+ tarea);
        console.log("indice "+indice);

        if(indice < tareas.length - 1){
            const listaActualizada = [...tareas];
            
            [listaActualizada[indice],listaActualizada[indice+1]]=
            [listaActualizada[indice+1],listaActualizada[indice]];

            setTareas(listaActualizada);
        }
        // if(tarea !== undefined){
            
        // }else{
        //     console.log("es undefined, no baja");
            
        // }
        
        

    }

    // console.log("lista de tareas: "+ tareas);
    


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
                            onClick={()=>eliminarTarea(indice)}>Eliminar  </button>

                            <button className="btnSubir"
                            onClick={()=>subirCategoria(indice)}>Subir 👆</button>

                            <button className="btnBajar"
                            onClick={()=>bajarCategoria(indice)}>Bajar 👇  </button>
                            
                        </li>
                    )} 
                    
                </ol>
                
            </div>
            
        </div> 
);
}

export default ToDoList;