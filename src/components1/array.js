
   
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//Array.find
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.
/*Parameters
callbackFn
Function to execute on each value in the array, taking 3 arguments:
element
The current element in the array.
index Optional
The index (position) of the current element in the array.
array Optional
The array that find was called on.
thisArg Optional
Object to use as this inside callbackFn.*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12



//Array.filter
//Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
// expected output: Array ["exuberant", "destruction", "present"]
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => {
    console.log(word);
    return word.length > 6;
});


console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//Array.map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


//Array.keys
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2

//Array.reduce
//The reduce() method executes a user-supplied “reducer” callback function on each element of the array, 
//passing in the return value from the calculation on the preceding element. The final result of running the 
//reducer across all elements of the array is a single value.
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 5)
