
import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList=(props)=>{
    if(props.items.length===0){
        return <h2 className="expense-list__fallback">No expenses found</h2>
    }
    return(
        <ul className="expense-list">
            {props.items.map((item) => {
                return (
                    <ExpenseItem
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    price={item.price}
                    />
                );
            })}
            {props.items.length===1 && <h3>Only one expense here. Please add more</h3>}
        </ul>
    )
}
export default ExpenseList;