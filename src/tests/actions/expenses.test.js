import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove action object', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: 'abc123' });
});

test('Should set edit action object', () => {
  const action = editExpense('abc123', { amount: '100' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { amount: '100' }
  });
});

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'Last Months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
    
  });
});


test('Should setup add expense action object with default values', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
