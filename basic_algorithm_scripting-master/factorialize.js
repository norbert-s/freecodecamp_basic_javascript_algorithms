
function factorialize(num) {
  var szam;
  if(num===0 || num===1){
    num=1;
  }
  else{
    szam =1;
    for(var i=0;i<num;i++){
      szam= szam*(i+1);
    }
    num = szam;
  }
  
  return num;
}

factorialize(5);
