import React from "react";
import Chart from "../Chart/Chart";
const ExpenseChart =(props)=>{
    return(
        <div>
            <Chart chartExpenses={props.filterExpensesForChart}/>
        </div>
    )
}

export default ExpenseChart;