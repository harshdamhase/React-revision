import './App.css';

import React, { useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [college,setCollege] = useState("");
  return (
    <>
      <form>
        <input type='text' value={name}onChange={(e)=>{
          setName(e.target.value);
        }
      }
          /><br/>
           <input type='text' value={college}onChange={(e)=>{
          setCollege(e.target.value);
        }
      }
          />
        <h1>{name} 'is studyng </h1>
      </form>
    </>
  );
}

export default App;
