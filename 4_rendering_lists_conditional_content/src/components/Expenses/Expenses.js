import { useState } from "react";

import "./Expenses.css";

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const onFilterYearChangeHandler = (year) => {
    setFilterYear(year);
  };

  // To render the list of expenses in our JSX code we first use {} which are used for dynamic expressions in jsx.

  // We map from the array passed in from the props and transform into an array of expense item JSX elements.

  // Because if we do output an array of JSX elements , react is capable of simply rendering these elements.

  // Also we get an error for 'unique key prop' when we render the list the reason being becuase react has a special feature for rendering lists of data without performance losses or bugs which may occur.

  // So when we add a new element to the list of elements react adds a new div and refreshes every div so as to match the order of the new list of items if all elements look same to it.

  // Although the list is visible correctly , from a performance perspective this is not great because all items are visited and updated. And will also lead to bugs in stateful items.

  // To fix this we need to have a special prop called the key prop.

  // Its a prop which we can add inside of any component no matter if its a custom component or a pre-built HTML element. If we add it then it helps react identify the individual items and for that we need to set a unique value per list item.

  const filteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear.toString();
  });

  // We can also add conditional content using {} but we cannot use if-else because long statements are not allowed between {}.We can use ternary expressions.

  // Or we can abuse a little trick in js, we can use the and operator and then use the JSX content we want to render if this condition is met.

  // JS works such that if we use the and operator it basically will return the part after the and operator as the result of the overall check if the first condition is met. This allows us to write shorter code.

  // Or we can use the variable to store the correct JSX code.

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filterYear}
          onFilterYearChange={onFilterYearChangeHandler}
        />
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((exp) => {
            return (
              <ExpenseItem
                key={exp.id}
                title={exp.title}
                amount={exp.amount}
                date={exp.date}
              />
            );
          })} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
