import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");
 
  const onFilterHandler = (selectedYear) => {
    console.log("In Expense");
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilter={onFilterHandler} />
        <ExpenseItem
          date={props.items[0].date}
          amount={props.items[0].amount}
          title={props.items[0].title}
        />
        <ExpenseItem
          date={props.items[1].date}
          amount={props.items[1].amount}
          title={props.items[1].title}
        />
        <ExpenseItem
          date={props.items[2].date}
          amount={props.items[2].amount}
          title={props.items[2].title}
        />
        <ExpenseItem
          date={props.items[3].date}
          amount={props.items[3].amount}
          title={props.items[3].title}
        />
      </Card>
    </div>
  );
}

export default Expenses;
