function getEvenNumbers(numbersArray){
    let arr = numbersArray.filter((e)=>{
        if(e%2===0){
            return e
        }
    })
    return arr
  }

  console.log(getEvenNumbers([1,2,3,4,5]))