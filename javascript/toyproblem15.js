function twoOldestAges(ages){
    let arr=[];
    let num=ages.sort((a,b)=>{return a-b});
    arr.push(num[ages.length-2],num[ages.length-1])
    return arr
    }


console.log(twoOldestAges([1,5,87,45,8,8]))
    