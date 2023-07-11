function dividesEvenly ( a, b) {
 if  (a % b == 0 ){
  return true ;
 }
 else  {
  return false ;
 }
}

console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));

// ถ้า % หารแล้วลงตัวจะได้ Ture ส่วนหารไม่ลงตัวจะได้ False