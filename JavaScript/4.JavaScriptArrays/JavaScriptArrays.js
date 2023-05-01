// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

//When we store array elemets on negative indexes, then they are stored as a key value pair.
colors[-1]='white';
// (3) ['red', 'orange', 'yellow', -1: 'white']

colors[4]='black';
// (5) ['red', 'orange', 'yellow', empty, 'black', -1: 'white']

colors[10]='blue';
// (11) ['red', 'orange', 'yellow', empty, 'black', empty × 5, 'blue', -1: 'white']


let arr=['honey','sugar'];

// Array methods:

//push(value) - adds value to the END of an array
arr.push('sugarcane');
3
// (3) ['honey', 'sugar', 'sugarcane']

//pop() - removes from end and returns last value in array
arr.pop();
// 'sugarcane'

//unshift(val) - adds value to START of an array
arr.unshift('sugarcane');
3
// (3) ['sugarcane', 'honey', 'sugar']

//shift() - removes from start and returns first element in an array
'sugarcane'
// (2) ['honey', 'sugar']


//Concat-Used to concat 2 arrays.
const arr1=['a','b'];
const arr2=['c','d'];
const arr3=arr1.concat(arr2);
// (4) ['a', 'b', 'c', 'd']

arr3.indexOf('c');
// 2

//reverse()-reverse the array (changes the orignal array)
arr3.reverse();
// (4) ['d', 'c', 'b', 'a']


//Slice-The slice() method returns selected elements in an array, as a new array.
let arr4=['Hi','Hello','Hola','Namaste'];

arr4.slice(1,3)
// (2) ['Hello', 'Hola']

arr4.slice(2)
// (2) ['Hola', 'Namaste']

//Splice-It lets you change the content of your array by removing or replacing existing elements with new ones. 
const months=['Jan','Feb','March','April'];

months.splice(1,0,'Feb');
// (5) ['Jan', 'Feb', 'Feb', 'March', 'April']

// At position 2, add 2 elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

// At position 2, remove 2 items:
const fruitss = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

//SORT
const months2=["March","Jan","Dec","Feb"];
months2.sort();
//To use sort effecitivelym we need to study functions default way is useless.

//Mutli-Dimensional arrays
const board=[
    ['O','X','O'],
    ['O','O','X'],
    ['X','X','O']
];

