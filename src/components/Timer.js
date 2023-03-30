import React, { useEffect, useState } from 'react';
import "./Timer.css"
import {getCorrectTime,stripReductionSize, stripeRduction} from './helpers/getCorrect';


const Timer = ({props, step}) => {

const   [time, setTime] =useState(props),
        [autostart, setAutostart]= useState(false),
        [timerBar, setTimerBar] = useState(100),
        bar = document.querySelector(".timerBar"),
        minutes = getCorrectTime(Math.floor(time/60)),
        seconds = getCorrectTime(Math.floor(time-minutes*60));

const   buttonStart = ()=>{  setAutostart(true);
                                 setTime(time); 
                console.log("Таймер запущено!")},

        buttonPause = ()=>{  setAutostart(false)
                console.log("Таймер на паузі!")},

        buttonStop  = ()=>{  setAutostart(false);
                                      setTime(0);
                                setTimerBar(100);
                                stripeRduction(100, bar)};



useEffect(()=>{
        const onTick = setInterval(()=>{                        
                        autostart && setTimerBar((timerBar)=>( timerBar=timerBar-stripReductionSize(time, step,timerBar)));
                        autostart &&  stripeRduction(timerBar, bar);  
                        autostart && setTime((time)=> (time>=1?time-(1*step):0) );          
                        },step*1000);
                        console.log("Залишилось часу: " + time + "секунд");

        if(time <=0 ) {console.log("Час вийшов!");                                    
                                  setTimerBar(100)
                                   setTime(props)};

        return ()=> clearInterval(onTick);

        },[time, autostart]);

useEffect(()=>{setTime(props)},[props]);


       
    return (
        <div>
            <div>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div>
                {autostart?
                    (<button onClick={buttonPause}>Pause</button>):
                    (<button onClick={buttonStart}>Start</button>)}

                <button onClick={buttonStop}>Stop</button>         
            </div>

                <div className='timerBar'>{Math.floor(timerBar)+"%"}</div>
            
        </div>
    );
};



export default Timer;