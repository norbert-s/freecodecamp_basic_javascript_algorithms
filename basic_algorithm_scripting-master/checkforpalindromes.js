

function palindrome(str) {
  // Good luck!
	let tomb = [];
	tomb = [...str];
	console.log(str);
	 
	str=str.replace(/\W/g,'');
	str=str.replace(/\_/g,'');
	str=str.toLowerCase();
	console.log(str);

	let compare = "";
	
	for(let i=(str.length-1);i>=0;i--){

		compare+=str[i];
	}
	console.log(compare);
	let flag = true;
	for(let i=0;i<str.length;i++){
		if(str[i]!==compare[i]){
			flag = false;
		}
	}
	if(flag===false){
		return false;
	}
	else{
		return true;
	}
}



palindrome("eye");



palindrome("eye");
