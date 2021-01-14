
function destroyer(arr,...args) {
  // Remove all the values
  console.log(args);
  let argsHossz = args.length;
  

  for(let i=0;i<args.length;i++){
  	let elso = args[i];
  	for(let j=0;j<arr.length;j++){
  		let masodik = arr[j]; 
  		if(masodik===elso){
  			arr.splice(j,1);
  			j--;
  		}

  	}
  }
 return arr;
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
