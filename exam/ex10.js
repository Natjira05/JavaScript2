function isValisIP (entry){
  var blocks = entry.split(".");
  if(blocks.length === 4) {
    return blocks.every(function(block) {
      return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
    });
  }
  return false;
}


console.log(isValisIP("1.2.3.4"));
console.log(isValisIP("1.2.3"));
console.log(isValisIP("1.2.3.4.5"));
console.log(isValisIP("123.45.67.89"));
console.log(isValisIP("123.456.78.90"));
console.log(isValisIP("123.045.067.089"));