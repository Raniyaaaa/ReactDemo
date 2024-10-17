import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm =()=>{
    const [enteredTitle, setEnteredTitle]=useState("");
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount]=useState("");
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate]=useState("");
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlfor="title">Title</label>
                    <input type="text" id="text" onChange={titleChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label htmlfor="amount">Amount</label>
                    <input type="number" id="amount" onChange={amountChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label htmlfor="date">Title</label>
                    <input type="date" id="date" onChange={dateChangeHandler}></input>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;