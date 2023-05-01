// The forEach() method is an iterative method. It calls a provided callbackFn function once for each element 
// in an array in ascending-index order. Unlike map(), forEach() always returns undefined and is not chainable.

//For Arrays.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})


//For Objects.
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

// NOTE:
// forEach() does not mutate the array on which it is called, but the function provided as callbackFn can.
// There is no way to stop or break a forEach() loop other than by throwing an exception.