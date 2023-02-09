import './App.css';
import { useEffect, useState } from 'react';

const Header = (props) =>{
  let greeting = props.greeting;

  return(
    <header><h1 className='title'>{greeting}</h1></header>
  );
}

const Clock = () =>{

  const [time, setTime] = useState(new Date);
  const [ampm, setAmpm] = useState("");

  useEffect(() =>{

    const i = setInterval(()=>{
      setTime(new Date);
      if(time.getHours() >= 12){
        setAmpm("PM");
      }
      else{
        setAmpm("AM");
      }
    }, 1000);
    return () => clearInterval(i);
  }, []
  );

  return(
    <h1 className="time">{time.getHours()>12?time.getHours()-12:time.getHours()}:{time.getMinutes()} {ampm}</h1>
  )

}

function App() {
  return (
    <div className="App">

    <Header greeting="Current Time: "/>
    <Clock />

    </div>
  );
}

export default App;
