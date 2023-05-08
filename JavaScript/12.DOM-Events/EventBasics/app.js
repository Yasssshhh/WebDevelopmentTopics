const btn=document.querySelector('#v2');

btn.onclick=function(){
    console.log('You Clicked 2nd Version');
}

const btn2=document.querySelector('#v3');

btn2.onclick=function(){
    console.log('You Clicked 3rd Version');
}

function shout(){
    console.log('Stop Shout');
    console.log('Ahh, as your wish');
}

function twist(){
    console.log('Stop Twisting');
    console.log('Ahh, as your wish');
}

const btn3=document.querySelector('#tas');

// Using this method, only shout funtion will work.
// btn3.onclick=twist;
// btn3.onclick=shout;

//Using addEventListener, both will run.

btn3.addEventListener('click', twist)
btn3.addEventListener('click', shout)

// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1!')
// }

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function () {
//     alert("CLICKED!");
// })