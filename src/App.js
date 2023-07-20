// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Finished from './components/FinshedTask'
import Task from'./components/task';
import Main from './components/Main';

function App() {
  
  const [AddTask,setAddTask] = useState('')

  const handleAddTask = (event)=>{
    event.preventDefault();
    setAddTask(event.target.value)
  }
  const [addedTask,setAddedTask] = useState([])
  const [finishedTask, setFinishedTask] = useState([])

  const displayTask = (event)=>{
    event.preventDefault();
    setAddedTask([...addedTask, AddTask]);
  }


  return (

    <div className='appContainer'>
 
 {/* // start of Task component */}
      <div className='TodoContainer'>
      <h2>Task</h2>
      <form onSubmit={displayTask}>
        <button type='submit' className='add' onClick={displayTask}>+</button>
        <input 
        type ='text' 
        value={AddTask} 
        placeholder='Add Task' 
        onChange={handleAddTask}
        className='input'/>
      </form>

    <div className='taskContainer'>
      {addedTask.map((task,index)=> 
      <Task 
       key={index}
       id={index} 
       task={task} 
       addedTask={addedTask}
       setAddedTask={setAddedTask}
       finishedTask={finishedTask}
       setFinishedTask={setFinishedTask}/>)}
    </div>

    <div className='taskContainer'>
      {finishedTask.map((task,index)=> 
      <Finished 
       key={index}
       id={index} 
       task={task} 
       addedTask={addedTask}
       setAddedTask={setAddedTask}
       finishedTask={finishedTask}
       setFinishedTask={setFinishedTask}/>)}
    </div>

    </div>
    {/* // end of Task component */}

    {<Main/>}

    </div>


  );
}

export default App;
