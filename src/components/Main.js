import { useEffect, useState } from "react";
import Message from './message';
var audio1 = new Audio("/Desk Bell.mp3");

const Main =({audioOptn,options,didPlay,setDidPLay,handleSlide})=>{
    // const {handleSlide} = handleSlide
    const [Minute,setMinute] = useState(25);
    const [Second,setSecond] = useState();

    const [InSecond,setInSecond] = useState('00')

    const [breakSesh,setBreakSesh] = useState(false)
    const [duration, setDuration] =useState(100);
    const [firstPLay,setFirstPlay] =useState(false)
    
    const handlePlay =()=>{
        setDidPLay((prevState) => !prevState);
        console.log(didPlay);
        if(!didPlay){
            if(!breakSesh){
                Focus()
                if(!firstPLay){
                    setSecond(59);
                    setMinute(24);
                    setFirstPlay(prev=>!prev);
                }
            }
        }
        else{
            pauseFocus()
        }
    }

    const handleRestart =()=>{
        console.log(didPlay);
        setDidPLay(false);
        setFirstPlay(false)
        setDuration(100)
        setMinute(25)
        setSecond()
        stopFocus()
    }

    
    useEffect(()=> {
        let intervalId
        if(didPlay){
        intervalId = setInterval(() => {
        setSecond(prevSecond => prevSecond - 1)
        }, 1000);
        }

        return()=> clearInterval(intervalId);
    }, [didPlay]);



    useEffect(()=> {

        if(Second>=10){
            setInSecond(`${Second}`)  
            }

        else if(Second<=10){
            setInSecond(`0${Second}`)
            if(Second<=0){
                setSecond(59)
                setMinute(prevMin => prevMin -1)
                if(!breakSesh){
                    setDuration(prevVal=>prevVal -4)
                }
                else{
                    setDuration(prevVal=>prevVal -20)
                }
            }
        }
        else{
            setInSecond('00')
        }
        return()=>{
            setInSecond()
        }
    
        }, [Second,breakSesh]);

    useEffect(()=>{
        if(Minute===0){
            if(!breakSesh){
                setMinute(5);
                setDuration(100)
                setBreakSesh(true);
                Bell()
                audioOptn[options].pause()
                audioOptn[options].currentTime = 0;
            }
            else{
                setMinute(25)
                setDuration(100)
                setBreakSesh(false);
                audio1.play()
                audioOptn[options].play()
                setMinute(24)
                setSecond(59)
            }
        }

        return()=>{
        }
    },[Minute,breakSesh,audioOptn,options]);


    const Bell = ()=>{
        audio1.play()
    }

    const Focus = () =>{
        audioOptn[options].play()
    }

    const stopFocus= ()=>{
        audioOptn[options].pause()
        audioOptn[options].currentTime = 0;
    }
    
    const pauseFocus= ()=>{
        audioOptn[options].pause()
    }
    const updateStyle = {
        width:`${duration}%`,
    };



    return(
        <div className="MainWrapper">
            <label for="checkbox" class="checkbox-label">
            <input type="checkbox" onClick={handleSlide} id="checkbox"/>
            <i className="fa-solid fa-bars"></i>
            </label>
            
            <h2 className="logo">Basta<span>Pomodoro</span></h2>
            <div className="ToggleContainer">
                <div className="toggle"><div className="toggleCircle"></div></div>
                <p>Mode</p>
            </div>
            <div className="Timer">
                <p>{Minute}:{InSecond}</p>
                <div className="Line" style={updateStyle} ></div>
                <div className="Message">{<Message/>}</div>
            </div>
            <button type="button" onClick={handlePlay} className="tmrbutton">
            {didPlay ? <i className="fa-solid fa-pause"></i>:<i className="fa-solid fa-play"></i>}
            </button>
            <div className="CustomButtons">
                <button className="Adjust">ADJUST</button>
                <button className="Restart" onClick={handleRestart}>RESTART</button>
            </div>
        </div>
        
    );

}
export default Main;