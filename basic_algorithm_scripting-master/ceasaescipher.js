function rot13(str) { // LBH QVQ VG!
  //let newArr= str.split("");
  let betuk=['A','B','C','D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
  'A','B','C','D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
   console.log(str);
   let newStr=[];
   for(var i=0;i<str.length;i++){
   	for(var j=0;j<26;j++){
   		if(str[i]==="!" || str[i]==="." || str[i]===" " || str[i]==="?"){
        	
          newStr+=str[i];
          i += 1;
        }
      
      	if (str[i] === betuk[j]) {
      		let atmeneti=betuk[j+13];
          newStr+=betuk[j+13]; 
        }   
   	}
        
   }
       console.log(newStr);
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");