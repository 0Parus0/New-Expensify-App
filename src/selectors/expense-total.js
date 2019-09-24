const expenseTotal = (expenses) => {
  const totalExpense = expenses
    .map((expense) => expense.amount)
    .reduce((total, num) => total + num, 0);
  return totalExpense;
};

export default expenseTotal;
