function remove(s,n){
    let arr= s.split('');
    for(i=0;i<=arr.length;i++){
        if(arr[i]==='!'){
            arr.splice(i,n)
        }
    }
    let done =arr.join('');
    return done
  }



  console.log(remove('hi!!',))