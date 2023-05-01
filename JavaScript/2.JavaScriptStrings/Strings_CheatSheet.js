// Making Strings
let colorr= "purple";

// Single quotes work too:
let city = 'Tokyo';


//Nesting of Strings
// let nested="I told her "go away""; //wrong;
let nested="I told her 'go away'";


//Length of strings.
nested.length;
"LOL".length;
// nested.length(); wrong as length is not a function.


//Accessing elements
nested[7];
'h'

nested[70];
undefined


// Concatination of strings
let a="River";
let b="Mountains";

let c=a+" "+b;
'River Mountains'


//Adding numbers and strings.
1+"Hi"
'1Hi'

// String Methods

let mst="leave me alone";

//To lowercase
mst.toLowerCase();
'leave me alone'


//To lowercase
mst.toUpperCase();
'LEAVE ME ALONE'


//Trim
let msg2="  Always be  Optimistic "
msg2.trim();
'Always be  Optimistic'


//indexOf
msg2.indexOf('be'); //only returns FIRST matching index
9
msg2.indexOf('x'); //-1 not found
-1

//Slice
let str3="abcdefghi";
str.slice(0,5);
'abcde'
str.slice(5);
'fghi'


//Replace 
// returns a new string, with the FIRST match replaced
"pump".replace("p", "b"); //"bump" - only replaces first "p"



// String Template Literals
// Use backtick characters, NOT SINGLE QUOTES!
const color = "olive green";
const msg = `My favorite color is: ${color}` //"My favorite color is: olive green"

const str = `There are ${60 * 60 * 24} seconds in a day`//"There are 86400 seconds in a day"