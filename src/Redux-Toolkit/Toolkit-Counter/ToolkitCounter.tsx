import React from 'react'
import { counterActions } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'

function ToolkitCounter() {
    const counter = useSelector((state:any) => state.counter)
    const show = useSelector((state:any) => state.handleShow)
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux counter - toolkit</h2>
      {show && <div>{counter}</div> }
      <div>
        <button onClick={()=>dispatch(counterActions.increment())}>+</button>
        <button onClick={()=>dispatch(counterActions.increase(5))}>increase by 5</button>
        <button onClick={()=>dispatch(counterActions.decrement())}>-</button>
      </div>
      <button onClick={()=>dispatch(counterActions.toggle())}>Toggle</button>
    </div>
  )
}

export default ToolkitCounter
