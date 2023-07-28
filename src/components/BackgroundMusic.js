import { useState, useEffect} from "react";

    const BackTrack = ({audioOptn,options,setAudioOptn,setOptions,setDidPLay}) =>{

    const [prevAudio, setPrevAudio] = useState();
    const [didClick,setDidClick] = useState(false);
    const [timePlayed,setTimePlayed] = useState(0);
    const [play1, setPLay1] = useState(false);
    const [play2, setPLay2] = useState(false);

    const handlePrev =(e)=>{
            var index = e.target.parentNode.id;
            audioOptn[index].play()
            const Audio = audioOptn[index]
            setPrevAudio(Audio);
            setDidClick(true);
            console.log(index)
            if(index==='0'){
                setPLay1(true)
            }
            else{
                setPLay2(true)
            }
            pausePrevAudio()
    }
    const pausePrevAudio=()=>{
        if(prevAudio!== undefined){
            prevAudio.currentTime=0;
            prevAudio.pause();
            setTimePlayed(0)
            if(play1){
                setPLay1(false)
            }
            else{
                setPLay2(false)
            }
        }
    }
    
    const handleCheck =(e)=>{
        let choice = e.target.parentNode.id
        setOptions(choice);
        if(choice==='0'){
            setSelect1(prev=>!prev)
            setSelect2(false)
            audioOptn[options].pause()
            audioOptn[options].currentTime = 0;
            setDidPLay(false)
        }
        else{
            setSelect2(prev=>!prev)
            setSelect1(false)
            audioOptn[options].pause()
            audioOptn[options].currentTime = 0;
            setDidPLay(false)
        }
    }
    useEffect(()=> {

        let intervalId

        if(didClick){
        intervalId = setInterval(() => {
        setTimePlayed(prevTime => prevTime + 1)
        }, 1000);

        }

        return()=> {
            clearInterval(intervalId)
        };
    }, [didClick]);

    useEffect(()=> {

        if(timePlayed>10){
            setDidClick(prevState => !prevState);
            // pausePrevAudio();
            if(prevAudio!== undefined){
                prevAudio.currentTime=0;
                prevAudio.pause();
                setTimePlayed(0)
                if(play1){
                    setPLay1(false)
                }
                else{
                    setPLay2(false)
                }
            }
        }
        return()=> {
        };
    }, [timePlayed,prevAudio,play1]);

    const [select1,setSelect1]=useState(false);
    const [select2,setSelect2]=useState(false);

    return(
        <div className="BackTrack">
            <h2>Background</h2>

            <div className="SoundContainer" id="0">
                <button type="button" id="0" onClick={handlePrev} className="SoundPrev">
                {play1 ? <i className="fa-solid fa-pause"></i> :<i className="fa-solid fa-play"></i>}
                </button>
                <p>Christian Chill</p>
                <button id="0" type="button" className="select" onClick={handleCheck}>

                {select1? <i className="fa-solid fa-check"></i>:<span id="0"><i className="fa-solid fa-check uncheck"></i></span>}
                </button>
            </div>

            <div className="SoundContainer" id="1">
                <button  type="button" id="1" onClick={handlePrev} className="SoundPrev">
                {play2 ? <i className="fa-solid fa-pause"></i> :<i className="fa-solid fa-play"></i>}
                </button>
                <p>Christian R&B</p>
                <button id="1" type="button" className="select" onClick={handleCheck}>

                {select2? <i className="fa-solid fa-check"></i>:<span id="1"><i className="fa-solid fa-check uncheck"></i></span>}
                    
                </button>
            </div>

        </div>
    );
}
export default BackTrack