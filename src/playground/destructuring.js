// const book = {
//   title: 'Ego is Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: PublisherName = 'Self-Publish' } = book.publisher;

// console.log(PublisherName);

// const person = {
//   name: 'Parus',
//   age: 38,
//   location: {
//     city: 'Islamabad',
//     temp: 95
//   }
// };

// const { name, age } = person;

// console.log(`${name} is ${age} year(s) old`);

// const { name: firstName = 'Anonymous', age = 0 } = person;

// console.log(`${firstName} is ${age} year(s) old`);


// const { temp: temperature, city } = person.location;

// console.log(`I am from ${city} and its ${temperature} degrees there`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [hotCoffee, , , largePrice] = item;
const [Coffee, smallPrice] = item;

console.log(`A large ${hotCoffee} costs ${largePrice}`);
console.log(`A small ${Coffee} costs ${smallPrice}`);
