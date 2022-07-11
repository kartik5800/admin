
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../redux/action/counter.action'



export default function Counter() {
    const c = useSelector(state=>state.counter)
    
    const dispatch = useDispatch()

    const handleincrement = () => {
        dispatch(incrementCounter())
    }

    const handledecrement = () => {
        dispatch(decrementCounter())
    }
  return (
    <div style={{
     textAlign:'center'
    }}>
      <h1 style={{
          color:'green',
          padding:'10px 30px',
          fontSize:'50px'
        }}> counter</h1>
        <button style={{
          color:'red',
          padding:'10px 30px',
          backgroundColor:'orange'
        }} onClick={() => handleincrement()}>INCREMENT</button>
        <p style={{
          color:'blue',
          padding:'10px',
          fontSize:'30px',
        }}>{c.counter}</p>
        <button 
        style={{
          color:'red',
          padding:'10px 30px',
          backgroundColor:'orange'
        }}onClick={() => handledecrement()}>DECREMENT</button>
    </div>
  )
}
