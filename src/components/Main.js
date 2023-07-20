import { useEffect, useState } from "react";

var audio1 = new Audio("/Desk Bell.mp3");
var audio2 = new Audio('/NOBODY.mp3')


const Main =()=>{
    const [Minute,setMinute] = useState(25);
    const [Second,setSecond] = useState(0);

    const [InSecond,setInSecond] = useState('00')
    const [didPlay,setDidPLay] = useState(false)

    const [breakSesh,setBreakSesh] = useState(false)
    const [duration, setDuration] =useState(100);
    
    const handlePlay =()=>{
        setDidPLay((prevState) => !prevState);

        if(!didPlay){
            if(!breakSesh){
                Focus()
                setMessage("Whatever you do, work heartily, as for the Lord and not for men.")
            }
        }
        else{
            pauseFocus()
        }
    }

    useEffect(()=> {

        let intervalId

        if(didPlay){
        intervalId = setInterval(() => {
        setSecond(prevSecond => prevSecond + 1)
        }, 100);
        }

        return()=> clearInterval(intervalId);
    }, [didPlay]);

    useEffect(()=> {
        if(Second<10){
            setInSecond(`0${Second}`)
        }

        else{
        setInSecond(`${Second}`)
            if(Second>59){
                setMinute(prevMin => prevMin -1)
                setSecond(0)
                if(!breakSesh){
                    setDuration(prevVal=>prevVal -4)
                }
                else{
                    setDuration(prevVal=>prevVal -20)
                }
            }
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
                stopFocus()
            }
            else{
                setMinute(25)
                setDuration(100)
                setBreakSesh(false);
                Bell()
                Focus()
            }
        }

        return()=>{
        }
    },[Minute,breakSesh]);

    const [Message,setMessage] = useState();

    const Bell = ()=>{
        audio1.play()
    }

    // const stopBreak= ()=>{
    //     audio1.pause()
    //     audio1.currentTime = 0;
    // }

    const Focus = () =>{
        audio2.play()
    }

    const stopFocus= ()=>{
        audio2.pause()
        audio2.currentTime = 0;
    }
    const pauseFocus= ()=>{
        audio2.pause()
    }
    const updateStyle = {
        width:`${duration}%`,
    };

    return(
        <div className="MainWrapper">
            <h2 className="logo">Basta<span>Pomodoro</span></h2>
            <div className="Timer">
                <p>{Minute}:{InSecond}</p>
                <div className="Line" style={updateStyle} ></div>
                <div className="Message">{Message}</div>
            </div>
            <button type="button" onClick={handlePlay} className="tmrbutton">
            {didPlay ? <i className="fa-solid fa-pause"></i> :<i className="fa-solid fa-play"></i>}
            
            </button>
            <div className="CustomButtons">
                <button className="Adjust">ADJUST</button>
                <button className="Restart">RESTART</button>
            </div>
        </div>
        
    );

}
export default Main;