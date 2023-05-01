console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")

// HELLO!!!...
// VM45:6 GOODBYE!!
// undefined
// VM45:3 ...are you still there?

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id);