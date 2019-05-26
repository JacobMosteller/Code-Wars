function solution(string,limit){
    let ending = string.substring(limit,string.length)
    let dots = '...';
    return(string.substring(0,limit)+dots)
}