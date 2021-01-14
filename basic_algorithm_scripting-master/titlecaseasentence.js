
function titleCase(str) {
  var arr = [];
  var strToLower = "";
  strToLower= str.toLowerCase();
  arr = strToLower.split(" ");
  
   
   var valami="";

  for(var i=0;i<arr.length;i++){
  	
  	

  	valami += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)+" ";
  	
  }

  
  
  var hossz = valami.length;
  str = valami.substring(0,hossz-1);
  
  return str;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");