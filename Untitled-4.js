

// 2. Implement a custom stringify function that behaves similarly to JSON.stringify. Your function should handle:
// Primitive data types (strings, numbers, booleans, null).
// Arrays and objects.
// Special cases including undefined, functions

function customStringify(object){
  //code here
  const emptyString = "";
  let stringifiedPairs = ""
  const pairs = Object.entries(obj); // [[]] [key: value]
  pairs.forEach(([key,value]) => {
    if(value && typeof value !== undefined) {
      if(Array.isArray(value)) {
        let initialString = "";
        let quotedValues = value.forEach((arrayElement, index) => {
          if(index === value.length -1) {
            initialString += `"${arrayElement}"`
          } else {
            initialString += `"${arrayElement}", `
          }
        })
        stringifiedPairs += `"${key}": [${initialString}] ` 
      } else {
        stringifiedPairs += `"${key}": "${value}", ` 
      }
    } 
  });
  const finalStringifiedVersion = `{${stringifiedPairs}}`
  return finalStringifiedVersion;
}
 

const obj = {
  name: "Rohit",
  age: 30,
  city: "Hyderabad",
  addr: ["Hyderabad", "Tealangana"],
  myUndefined: undefined,
  myNull: null,
  circularRef: null,
  nested: {
    name: "Nested",
    valid: true,
  },
  fn: () => {}
};

// Object.keys(obj)

console.log("---------original stringfy",JSON.stringify(obj))
console.log('-------------------------------------------')
console.log("---------custom stringfy",customStringify(obj))

//3. Can you implement the function myPromiseAll, which acts as a polyfill for Promise.all? The function should accept an array of tasks, including promises and non-promise values, and return a promise that resolves when all the input promises resolve or rejects if any promise rejects. The resolved value should be an array of resolved values in the order of the input tasks. We can use the following test cases

function myPromiseAll(taskList) {
  const resolvedPromises = [];
  const rejectedPromises = [];
  let counter = 0;
  const total = taksList.length;
  // coding here
  return new Promise((resolve, reject) => {
    setInterval(() => {
      taskList.forEach(task => {
        task.then(data => {
          resolvedPromises.push(data)
          counter++
        })
      })
      if(counter === total) {
        resolve(taskList)
      };
    }, 500);
  })
 }



//  const successTasks = [
//   new Promise((resolve) => setTimeout(() => resolve('Task 1'), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve('Task 2'), 500)),
//   new Promise((resolve) => setTimeout(() => resolve('Task 3'), 200))
  
// ];

// myPromiseAll(successTasks)
//   .then((result) => console.log(result)) 
//   .catch((error) => console.error(error));

// // Error case
// const errorTasks = [
//   new Promise((resolve) => setTimeout(() => resolve('Task 1'), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject('Error'), 500))
// ];

// myPromiseAll(errorTasks)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));