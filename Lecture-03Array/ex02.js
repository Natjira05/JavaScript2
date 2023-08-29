let values1 = ['Apple', 1 , false];
let values2 = ['Fries', 1 , true];
let values3 = ['Mars', 9 , 'Apple'];

for ( let show1 of values1 ){
    //console.log(show1);

    for (let show2 of values2){
      if ( show1 === show2) {
        console.log("values1 , values2 has " , show1);
      }
     
    }
    for (let show3 of values3){
      if ( show1 === show3) {
        console.log("values1 , values3 has " , show1);
      }
    }  

}

for (let show2 of values2 ){

  for ( let show3 of values3){
    if (show2 === show3){
      console.log("values2 , values3 has ", show3);
    }
  }
}

