import { useState } from "react";

import "./Expenses.css";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {

  const [filterYear,setFilterYear]=useState('2022');

  const onFilterYearChangeHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={filterYear} onFilterYearChange={onFilterYearChangeHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
        <ExpenseItem
          title={props.expenses[4].title}
          amount={props.expenses[4].amount}
          date={props.expenses[4].date}
        />
      </Card>    
    </div>
  );
};

export default Expenses;
