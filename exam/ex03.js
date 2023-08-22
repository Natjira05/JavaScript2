function capToFront (show){
  let a = show ;
  var b = "" ;
  var c = "" ;

  for ( let i = 0 ; i < show.length ; i++)
  {
    if (a[i].toUpperCase() == show[i])
    {
      b += a[i];
    }
    else
    {
      c += a[i];
    }
  
  }
  return `CapToFront(${show}) => ${b + c }`;
}


console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));