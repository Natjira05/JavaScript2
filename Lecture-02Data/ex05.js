function leapYear (num) {
  if (num % 4 == 0 ){
  return true ;
}
else {
  return false ;
}
}

console.log(leapYear(1990));
console.log(leapYear(1924));
console.log(leapYear(2021));
console.log(leapYear(1992));

// num เท่ากับจำนวนปี %ด้วย 4 เพราะ 4 ปี มี 1 ครั้งที่จะมี 29 วัน จะเป็น Ture
// ส่วนปีที่มี 28 วันจะเป็น false 