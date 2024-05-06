import React from "react";
import { employees } from "./data";
import { useState } from "react";

import "./App.css";
function App() {
  
  const [data, setdata] = useState(employees);
  const deleteItem=(id)=>{
    setdata(data.filter((item)=>item.id!==id))
  }

  

  return (
    <>
    
    
    <div className="main">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt="John" style={{ width: "100%" }} />
          <h1>{item.name}</h1>
          <p className="title">{item.position}</p>
          <p>{item.university}</p>
          <p>
            <button style={{backgroundColor: "red"}} onClick={()=>deleteItem(item.id)}>Delete</button>
            <button >Contact</button>
          </p>
        </div>
      ))}





      
    </div>

    </>





  );
}

export default App;