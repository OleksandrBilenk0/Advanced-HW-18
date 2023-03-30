import { useEffect, useRef, useState } from 'react';
import './App.css';
import Timer from './components/Timer';


function App() {

const inputMinutes = useRef(),
      inputSeconds = useRef(),
      inputInterval = useRef(),

      [startTime, setStartTime] = useState(0),
      [stepInterval, setStepInterval] = useState(1),

      onChangeTime = ()=> { 
                      setStartTime(Number(inputSeconds.current.value )+
                                  Number(inputMinutes.current.value * 60))},
      onChangeInterval =()=>{
                      setStepInterval( Number(inputInterval.current.value));               
                      };

     
  return (
    <div className="App">
      <header className="App-header">

          <div className='header_main'>
            <h2>Встановити параметри:</h2>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <label >Хвилини</label>
              <input  onChange={onChangeTime} ref ={inputMinutes} type="number" min="1" max="60"  ></input>
              <label >Секунди</label>
              <input onChange={onChangeTime} ref ={inputSeconds} type="number" min="1" max="60" ></input>
            </div>
          </div> 
          
                <Timer props={startTime} step={stepInterval} />
        
      </header>
    </div>
  );
}

export default App;
