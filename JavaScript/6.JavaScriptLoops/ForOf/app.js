const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for(let i=0;i<subreddits.length;i++){
    console.log(subreddits[i]);
}

for(let subreddit of subreddits){
    console.log(subreddit);
}

for(let subreddit in subreddits){
    console.log(subreddit);
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6 here output is bit diffrent using for in.


for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}



//2D MATRIX

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for(let i=0;i<seatingChart.length;i++){
    for(let j=0;j<seatingChart[i].length;j++){
        console.log(seatingChart[i][j])
    }
}

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char)
}

// h
// e
// l
// l
// l
// o

// w
// o
// r
// l
// d