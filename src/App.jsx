//Aquí va todo el react
import './App.css';
import ToDoList from './ToDoList';

function App (){
  return(
    <div>
    <header className='header'>
      <p className='titulo'>To Do - List</p>
    </header>
    <body className='body-listado'>
      <h2>Agregar tareas</h2>
      <ToDoList/>
    </body>
    </div>
)}

export default App;