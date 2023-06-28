import React, { useState } from 'react'
import { counterActions } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'

function ToolkitCounter() {
  const counter = useSelector((state: any) => state.counter.counter)
  const show = useSelector((state: any) => state.counter.handleShow)
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleAdd = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      dispatch(counterActions.increase(value));
      setInputValue('');
    }
  };

  // -----------this is for only using redux and not React hooks---------

  // const handleAdd = (value: number) => {
  //   if (!isNaN(value)) {
  //     dispatch(counterActions.increase(value));
  //   }
  // };


  return (
    <div>
      <h2>Redux counter - toolkit</h2>
      {show && <div>{counter}</div>}
      <div>
        <button className='counter-btn' onClick={() => dispatch(counterActions.decrement())}>-</button>
        <button className='counter-btn' onClick={() => dispatch(counterActions.increase(5))}>increase by 5</button>
        <button className='counter-btn' onClick={() => dispatch(counterActions.increment())}>+</button>
      </div>
      <div>
  
        {/* -----------this is for only using redux and not React hooks---------
        <input className='counter-input' type="number" />
        <button className='counter-btn' onClick={() => {
          const value = parseInt((document.querySelector('.counter-input') as HTMLInputElement).value);
          handleAdd(value);
        }}>Add</button> */}
        <input className='counter-input' value={inputValue} onChange={handleInputChange} type="number" />
        <button className='counter-btn' onClick={handleAdd}>Add</button>
      </div>
      <button className='counter-btn' onClick={() => dispatch(counterActions.toggle())}>Toggle</button>
    </div>
  )
}

export default ToolkitCounter
