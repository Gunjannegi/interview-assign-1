import { useEffect, useState } from "react";
import { FaRegStopCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
const CountDownTimer = () =>{
    const [timer, setTimer] = useState(0);
    const [start,setStart] = useState(false);
    //create the loop and stop the loop
    useEffect(()=>{
        let intervalId;
        if(start){
            intervalId = setInterval(()=>{
                setTimer(timer=>timer-1)
            },1000)
        }else{
            clearInterval(intervalId)
        }
        return ()=>clearInterval(intervalId);
    },[start])
    //set timer
    const handleTimer = (event) =>{
         setTimer(event.target.value);
    }
    //start timer
    const handleStartTimer = ()=>{
    setStart(true);
    }
    //stop timer
    const handleStopTimer = () =>{
        setStart(false);
    }

   return(
    <div className="bg-fuchsia-400 p-4 rounded">
    <label className="font-semibold text-lg">Set Timer : </label>
    <input type='number' className="rounded p-2" onChange={handleTimer} required/>
    <p className="text-center m-6 text-lg font-semibold">{timer}</p>
    <div className="flex justify-between">
        <button onClick={handleStartTimer} className="flex items-center bg-fuchsia-200 active:bg-fuchsia-800 active:text-white p-2 rounded-full ">
            <FaPlayCircle/>
            <div className="pl-2">Start</div></button>
        <button onClick={handleStopTimer} className="flex items-center bg-fuchsia-200 active:bg-fuchsia-800 active:text-white p-2 rounded-full">
            <FaRegStopCircle/>
            <div className="pl-2">Stop</div></button>
    </div>
    </div>
   )
}
export default CountDownTimer;