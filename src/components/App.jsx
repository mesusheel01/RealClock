import { useState } from "react";

function getTime(){
 const time = new Date().toLocaleTimeString();
 console.log(time)
 return time;
 
}
const App = ()=>{
//i have set the currtime to current by calling and getting the current time
  const [currTime, newTime] = useState(getTime());

  return (
    <div>
      <h1>{currTime}</h1>
      {/* here we have set the newtime to again call the function */}
      <button onClick={()=> newTime(getTime())} >click to update</button>
    </div>
  )
}

export default App;
