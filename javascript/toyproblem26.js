function greed(arr){
    let total = 0;
    let one=[];
    let two=[];
    let three=[];
    let four=[];
    let five=[];
    let six=[];
    for(i=0;i<=arr.length;i++){
        if(arr[i]===1){
            total+=100;
            one.push(arr[i]);
        }
        else if (arr[i]===2){
            two.push(arr[i]);
        }
        else if (arr[i]===3){
            three.push(arr[i]);
        }
        else if (arr[i]===4){
            four.push(arr[i]);
        }
        else if (arr[i]===5){
            total+=50;
            five.push(arr[i]);
        }
        else if (arr[i]===6){
            six.push(arr[i]);
        }
    }
    if(one.length>=3){
        total-=300;
        total+=1000;
    }
    else if(one.length===6){
        total-=600;
        total+=2000;
    }
    if(two.length>=3){
        total+=200;
    }
    else if(two.length===6){
        total+=400;
    }
    if(three.length>=3){
        total+=300;
    }
    else if(three.length===6){
        total+=600;
    }
    if(four.length>=3){
        total+=400;
    }
    else if(four.lenth===6){
        total+=800;
    }
    if(five.length>=3){
        total-=150;
        total+=500;
    }
    else if(five.length===6){
        total-=300;
        total+=100;
    }
    if(six.length>=3){
        total+=600;
    }
    else if(six.length===6){
        total+=1200;
    }
    if(total>=1){
        return total;
    }
    else{
        return 'Bust';
    }


}

console.log(greed([]))