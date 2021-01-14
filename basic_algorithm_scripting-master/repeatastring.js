
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num>0){
    var szoveg = "";
  for(var i=0;i<num;i++){
    szoveg += str;
    }
    return szoveg;
  }
  
else{
  var empty = "";
  return empty;
}


  
  
}
repeatStringNumTimes("abc", 3);
