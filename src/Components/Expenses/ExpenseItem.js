import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card"

const ExpenseItem =(props)=>{
  const [title,setTitle]=useState(props.title);
  function buttonClickHandler(event){
    setTitle("New Title");
  }
  return (
    <li>
    <Card className="expense-item">      
    <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;