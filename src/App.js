import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount, incrementByAmountTwo } from './redux/counter'
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <p>Score: { count } </p>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        <button onClick={() => dispatch(incrementByAmountTwo(5))}>*5</button>
      </div>

    </div>

  )
}

export default App;
