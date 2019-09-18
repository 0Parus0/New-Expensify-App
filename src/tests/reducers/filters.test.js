import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filters value', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should setup sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should setup text filter correctly', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = { 
    type: 'SET_TEXT_FILTER',
    text: 'Rent'
  };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe('Rent');
});


test('should setup start date filter correctly', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = { 
    type: 'SET_START_DATE',
    startDate: 123
  };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toBe(123);
});


test('should setup start date filter correctly', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = { 
    type: 'SET_END_DATE',
    endDate: 123
  };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toBe(123);
});
