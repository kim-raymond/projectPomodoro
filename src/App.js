// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
// import Finished from './components/FinshedTask'
import Task from'./components/task';
import Main from './components/Main';
import BackTrack from './components/BackgroundMusic';

var audio1 = new Audio('/Chill Christian R&B_Lofi Playlist.mp3');
var audio2 = new Audio('/Christian R&B 2.mp3');

function App() {

  const [audioOptn,setAudioOptn] =useState([audio1,audio2]);
  const [AddTask,setAddTask] = useState('')

  const handleAddTask = (event)=>{
    event.preventDefault();
    setAddTask(event.target.value)
  }
  const [placeholder,setPlaceHolder] =useState('Add Task')
  const [addedTask,setAddedTask] = useState([])
  const [finishedTask, setFinishedTask] = useState([])
  const [options,setOptions] =useState(0);

  const displayTask = (event)=>{
    event.preventDefault();
    if(AddTask!==''){
      setAddedTask([...addedTask, AddTask]);
      setAddTask(event.target.value='')
    }
  }
  const clearPlaceholder =()=>{
    setPlaceHolder('')
  }

  return (

    <div className='appContainer'>
 
    <div className='SideBarWrapper'>
    <div className='TodoContainer'>
      <h2>Task</h2>
      <form onSubmit={displayTask}>
        <button type='submit' className='add' onClick={displayTask}>+</button>
        <input 
        type ='text' 
        value={AddTask} 
        placeholder={placeholder} 
        onChange={handleAddTask}
        onFocus={clearPlaceholder}
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

    </div>
    <BackTrack
    audioOptn={audioOptn}
    setAudioOptn={setAudioOptn}
    options={options}
    setOptions={setOptions}/>
    </div>
    
    {<Main
    audioOptn={audioOptn}
    options={options}
    setOptions={setOptions}/>}

    </div>


  );
}

export default App;
