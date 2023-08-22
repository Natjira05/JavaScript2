function  simplePair (arr , result ){
let show = 0 ;
let num = [];
   for ( let i = 0; i < arr.length - 1 ; i++)
   {
      for ( let a = 1 ; a <= arr.length - 1 ; a++)
      {
        show = arr[i] * arr[a];  
        if ( show === result)
        {
            num.unshift(arr[i],arr[a]);
            break;
        }
      }
      if (num.length === 0)
      {
        return null ;
      }
      else 
      {
        return num;
      }
   }
}


console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));