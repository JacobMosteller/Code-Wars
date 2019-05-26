function reverseMe(arr){
    let newarr =[];
    for(i=0;i<arr.length;i++){
      newarr.unshift(arr[i])
    }
    return newarr
  }
  
  console.log(reverseMe([1,2,3,4,5]))

  function ages(arr){
    let newage = [];
    let a = arr[0];
    let b = arr[1];
    
    if(a>b){
      newage = [a,b,(a-b)];
    }
    else{
      newage = [b,a,(b-a)];
    }
    
    return newage;
  }

  console.log(ages([17,25]))


  function sortIT(arr){
      return arr.sort();
  }

 console.log(sortIT(['a','b','k','c','d']))

  function removeDups(arr) {
      return (new Set(arr))
}

    console.log(removeDups([1,2,3,4]))
