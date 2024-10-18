import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"
const Expenses = (props)=>{

  const [filteredYear, setFilterYear]= useState("2023");
  const changeFilterHandler=(selectedYear)=>{
        setFilterYear(selectedYear);
  };
  const filteredExpenses=props.expenses.filter(expense=>expense.date.getFullYear().toString()===filteredYear);

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      );
    });
  }

  
    return(
       <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={changeFilterHandler}
        />
        {expensesContent}
        {filteredExpenses.length===1 && <p>Only one expense here. Please add more</p>}
       </Card>
    )
  }
  
  export default Expenses;