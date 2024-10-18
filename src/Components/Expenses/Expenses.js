import React,{useState} from "react";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props)=>{

  const [filteredYear, setFilterYear]= useState("2023");
  const changeFilterHandler=(selectedYear)=>{
        setFilterYear(selectedYear);
  };
  const filteredExpenses=props.expenses.filter(expense=>expense.date.getFullYear().toString()===filteredYear);
    return(
       <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={changeFilterHandler}
        />
        <ExpenseChart filterExpensesForChart={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
       </Card>
    )
  }
  
  export default Expenses;