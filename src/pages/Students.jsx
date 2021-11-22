import React from 'react'
import { increment, decrement } from '../actions'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const GirlsStudents = () => {
    const counter = useSelector(state => state.mycount);
    const dispatch = useDispatch();
  
    return (
      <div className="App">
        <h1>Girls Students + Boys Students ({counter})</h1>
        <div className="btn_main">
          <button className="btn1" onClick={() => dispatch(increment())}>+</button>
          <button className="btn2" onClick={() => dispatch(decrement())}>-</button>
          <Link className="link" to="/">
            <div className="total">Check Total Students</div>
          </Link>
        </div>
      </div>
    )
}
  
export default GirlsStudents