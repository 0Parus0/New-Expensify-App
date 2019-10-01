
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });


// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });


// database.ref().set(null);


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     }); 
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses/-LpweQaWxvHiUN1NNE8E/amount').set(109555);

// expenses.push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 97612345873
// });

// expenses.push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 97612345873
// });

// expenses.push({
//   description: 'food',
//   note: '',
//   amount: 1200,
//   createdAt: 97612345873
// });

// const firebaseNotes = {
//   notes: {
//     abheuel: {
//       title: 'First Note',
//       body: 'This is my note'
//     },
//     bahdoeyel: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{ 
//   id: '12',
//   title: 'first note',
//   body: 'This is my note'
// }, {
//   id: '13',
//   title: '2nd note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// const printIntro = database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (error) => {
//   console.log('Error fetching data', error);
// });

// database.ref().update({
//   name: 'Parus',
//   'job/company': 'Google'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (error) => {
//   console.log('Error with data fetching', error);
// });

// setTimeout(() => {
//   database.ref('age').set(40);
// }, 3500);


// setTimeout(() => {
//   database.ref().off();
// }, 7000);


// setTimeout(() => {
//   database.ref('age').set(38);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((error) => {
//     console.log(error);
//   });

// database.ref().set({
//   name: 'Parus!!!',
//   age: 39,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'RawalPindi',
//     country: 'Pakistan'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((error) => {
//   console.log('This is failed', error);
// });


// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data is removed');
//   }).catch((error) => {
//     console.log('Did not remove data', error);
//   });

// database.ref().update({
//   name: 'Andrew',
//   age: 29,
//   job: 'Software developer',
//   isSingle: null
// });

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston'
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Islamabad'
// });
