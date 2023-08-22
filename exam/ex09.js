function digitalClock (num){

var showhours = Math.floor(num/3600);
var showminutes =Math.floor(( num  % 3600 ) / 60);
var showmilliseconds = num % 60 ;

return showhours + " : " + showminutes + " : " +showmilliseconds ;

}


console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));