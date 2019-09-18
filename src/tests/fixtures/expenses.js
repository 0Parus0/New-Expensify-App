import moment from 'moment';


const expenses = [{
  id: '1',
  description: 'Gum',
  amount: 100,
  note: '',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  amount: 60,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  amount: 30,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;
