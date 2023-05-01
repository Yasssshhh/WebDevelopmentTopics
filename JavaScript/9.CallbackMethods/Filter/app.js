//Filter: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the 
// elements from the given array that pass the test implemented by the provided function.

// The filter() method is an iterative method. It calls a provided callbackFn function once for each element 
// in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10
})

//Filter with objects.

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)

movies.filter(m => m.score > 80).map(m => m.title);

//Custom Filter 

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function myPolyfillFilter(arr2,cb){
    let newArr=[];
    for(let i=0;i<arr2.length;i++){
        if(cb(arr[i]))   newArr.push(arr2[i]);
    }
    return newArr;
}

function isEven(x){
    return x%2===0;
}

console.log(myPolyfillFilter(arr2,isEven));
// (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]



// It does not alter this but instead returns a shallow copy that contains the same elements as the ones from 
// the original array (with some filtered out). However, the function provided as callbackFn can mutate the array.