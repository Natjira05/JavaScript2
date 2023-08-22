const getBudgets1 = [
  { name : "John", age : 21 , budget : 23000},
  { name : "Steve", age : 32 , budget : 40000},
  { name : "Martin", age : 16 , budget : 2700}
];

const getBudgets2 = [
  { name : "John", age : 21 , budget : 29000},
  { name : "Steve", age : 32 , budget : 32000},
  { name : "Martin", age : 16 , budget : 1600}
];


function getBudgets (arr) {
  let show = 0 ;
  for (i = 0 ; i < arr.length; i++){
    show += arr[i].budget;
  }

  return ``;
}


console.log(getBudgets(getBudgets1));
console.log(getBudgets(getBudgets2));