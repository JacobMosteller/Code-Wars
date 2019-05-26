// Write a JavaScript function to get a random item from an array
const random = (arr)=>{
    let randomItem = arr[Math.floor(Math.random()*arr.length)];
    return randomItem
}

console.log(random(['hello','goodbye','dope']))