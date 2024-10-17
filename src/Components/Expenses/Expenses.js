import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
const Expenses = (props)=>{
    return(
       <Card className="expenses">
        {props.expenses.map((expenses) => {
          return (
            <ExpenseItem
              key={expenses.id}
              date={expenses.date}
              title={expenses.title}
              price={expenses.price}
            />
          );
        })}
       </Card>
    )
  }
  
  export default Expenses;