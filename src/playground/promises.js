
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Parus',
    //   age: 38,
    //   location: {
    //     city: 'Islamabad',
    //     country: 'Pakistan'
    //   }
  // });    
    // eslint-disable-next-line prefer-promise-reject-errors
    // reject('Something went wrong');
    resolve([
      'Parus', 'sleepy', { name: 'Parus' } 
    ]);
  }, 1500);
});


console.log('before');

promise.then((data) => {
  console.log('1:', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      resolve('This is my other promise');
    }, 3000);
  });
}).then((str) => {
  console.log('Does this run?', str);
}).catch((error) => {
  console.log('error :', error);
});

// promise.then((data) => {
//   console.log('2:', data);
// });

console.log('after');
