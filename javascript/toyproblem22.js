// Write a JavaScript function to merge two arrays and removes all duplicates elements.
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 
const merge_array = (arr1, arr2)=>{
    let newarr = [];
    for(i=0;i<arr1.length;i++){
        newarr.push(arr1[i]);
    }
    for(j=0;j<arr2.length;j++){
        newarr.push(arr2[j]);      
    }
    var Unique = newarr.filter(function(item, index){
        return newarr.indexOf(item) >= index;
    });
    return Unique
};
console.log(merge_array(array1, array2));
