import React, { useState } from 'react'
import Listitem from './Listitem';

export default function Usecallbackexp() {
const [dark , setdark] = useState(false);
const [number , setnumber] = useState(0);

const theme = {
  backgroundColor : dark ? '#fff' : '#000',
  color : dark ? '#000' : '#fff'
} 

const getItem = Usecallback((i) => {
  console.log("callback fun");
  return [i+number , i+number+1 , i+number+2]
},[number])

  return (

    <>
      <h1>useCallback</h1>
      <div style={theme}>
        <button onClick={() => setdark(!dark)}>change theam</button>
        <input type='text' placeholder='enter number' onChange={(e) => setnumber(parseInt(e.target.value))} />
        <Listitem getItem={getItem}/>
      </div>
    </>
  )
}
