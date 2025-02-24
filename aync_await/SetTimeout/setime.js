function delay(){
    console.log("My name is viraj!");
}

function overDelay(){
    console.log("What is your name");
    setTimeout(delay,3000);
}

setTimeout(overDelay,3000);
console.log("Hi");
setTimeout(() => console.log("Yes"),1000);
