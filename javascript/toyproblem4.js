let array=[1,2,3,4,5]
function flipFirstLast(arr){
if(arr.length<=1){
    return arr;
}
thing=arr.pop();
otherThing=arr.shift()
arr.push(otherThing)
arr.unshift(thing);
return arr;
}

flipFirstLast(array);

console.log(array)