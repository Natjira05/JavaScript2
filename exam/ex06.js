let num = [1, 0, 1, 0] ;
let num2 = ["The", "big", "cat"];
let num3 = ["John", "Taylor", "John"] ;

function removeDups (arr ) {
  let num = [];
  for (i = 0 ; i < arr.length ; i++){
    if ( num.indexOf(arr[i]) == -1)
    {
      num.push(arr[i]);
    }
  }

  return  num ;
}


console.log(removeDups(num));
console.log(removeDups(num2));
console.log(removeDups(num3));