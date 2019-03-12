const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,];
function greaterThanTen(num){
    return num>10;
}
function makeArr(arr,callback){
    let newArr=[];
    for(i=0;i<arr.length;i++){
        if (callback(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(makeArr(numbers,greaterThanTen))