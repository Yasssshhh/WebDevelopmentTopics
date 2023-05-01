const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}


// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free

const agee = 100;
if ((agee >= 0 && agee < 5) || agee >= 65) {
    console.log("FREE");
} else if (agee >= 5 && agee < 10) {
    console.log("$10")
} else if (agee >= 10 && agee < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}