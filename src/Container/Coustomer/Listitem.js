import React, { useEffect, useState } from 'react';

function Listitem({getItem}) {
  const [item,setitem]=useState([])
  useEffect(()=>{
    setitem(getItem(5))
  },[getItem])
  return (
    <div>
      {
     item.map((i)=>{
      return(
        <p>{i}</p>
      )
     })
      }
    </div>
  );
}

export default Listitem;
