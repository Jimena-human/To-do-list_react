//Aquí va todo el react
import './App.css';
import ToDoList from './ToDoList';

function App (){
  return(
    <div>
    <header className='header'>
      <p className='titulo'>To Do - List</p>
    </header>
    <div className='body-principal'>
      <h2>Agregar tareas</h2>
      <ToDoList/>
    </div>
    </div>
)}

export default App;