import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

export class Counter extends Component {
    render() { 
        return (
            <div className="total_count">    
                <h1>Total Students ({this.props.counter.mycount})</h1>
                <div className="btn_main"> 
                    <button className="btn1" onClick={this.props.increment}>Add</button>
                    <button className="btn2" onClick={this.props.decrement}>Sub</button>
                    <Link className="link" to="/girlsStudents">
                        <div className="total">Add Girls and Boys</div>
                    </Link>
                </div>
            </div>           
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);