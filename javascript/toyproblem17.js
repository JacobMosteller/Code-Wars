function validParentheses(parens){
    let answer = false;
    let val=0;
    if(parens.length%2===1){
        answer = false;
    }
    if(parens.length%2===0){
        if(parens.charAt()==='('){
            val+=1;
        }
        else{val-=1}
    }
    if(val === 0){
        answer = true
    }
        return answer;
  }


  console.log(validParentheses(`()()()())(())()()(())()`))