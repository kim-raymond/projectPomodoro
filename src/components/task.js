import { useState } from "react"

var Notif = new Audio('/bell.mp3')

const Task = ({id, task,addedTask,setAddedTask,finishedTask, setFinishedTask}) => {

    const handleDelete = (e)=>{
        const remove = e.target.parentNode.id
        addedTask.splice(remove, 1)
        setAddedTask([...addedTask])
    }

    const [isDone,setIsDone] = useState(false)

    const handleDone =(e)=>{
    
        setIsDone( Done =>!Done)
        if(!isDone){
        Notif.currentTime =0;
        Notif.play()
        e.target.parentNode.classList.add('Done')
        }
        else{
        e.target.parentNode.classList.remove('Done')
        }
        // let done = e.target.nextSibling.innerHTML;
        // setFinishedTask([...finishedTask, done])
        // const remove = e.target.parentNode.id
        // addedTask.splice(remove, 1)
        // setAddedTask([...addedTask])
    }


    return(
        <div id={id} className="Task ">
            <button type="button" className='finishBtn' onClick={handleDone}></button>
            <p>{task}</p>
            <button type="button" className="deletebtn" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i></button>
        </div>
    );
}

export default Task;