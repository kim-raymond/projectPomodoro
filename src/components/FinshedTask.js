const Finished = ({id, task,addedTask,setAddedTask,finishedTask,setFinishedTask})=>{

    const handleClick = (e)=>{
        const remove = e.target.parentNode.id
        finishedTask.splice(remove, 1)
        setFinishedTask([...finishedTask])
    }


    const handleCheck =(e)=>{
        let done = e.target.nextSibling.innerHTML;
        setAddedTask([...addedTask, done])
        const remove = e.target.parentNode.id
        finishedTask.splice(remove, 1)
        setFinishedTask([...finishedTask])
    }


    return(
        <div id={id} className="Task Done ">
            <button type="button" className='finishBtn clicked' onClick={handleCheck}></button>
            <p>{task}</p>
            <button type="button" className="deletebtn" onClick={handleClick}>Delete</button>
        </div>
    );
 }
 export default Finished;