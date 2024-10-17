import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [userInput,setUserInput]=useState({
      enteredTitle:"",
      enteredAmount:"",
      enteredDate:"",  
    })
   
     const titleChangeHandler = (event) => {
       setUserInput((prevInput)=>{
         return {
           ...prevInput,
           enteredTitle:event.target.value
         }
       })
     };
   
     const amountChangeHandler = (event) => {
       setUserInput((prevInput)=>{
         return {
           ...prevInput,
           enteredAmount:event.target.value
         }
       })
     };
   
     const dateChangeHandler = (event) => {
       setUserInput((prevInput)=>{
         return {
           ...prevInput,
           enteredDate:event.target.value
         }
       })
     };
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
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;