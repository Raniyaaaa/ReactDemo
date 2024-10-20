
import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

   const [isFormVisilble, setFormVisibility]=useState(false);
    const showFormHandler=()=>{
        setFormVisibility(true);
    }

    const hideFormHandler=()=>{
        setFormVisibility(false);
    }
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisilble && 
          <button onClick={showFormHandler}>Add Expense</button>
      }
      {isFormVisilble && 
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>
      }
    </div>
  );
};
export default NewExpense;