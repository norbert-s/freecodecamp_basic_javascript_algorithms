function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var index;
  var kapottErtek= num;
  var sorted = arr.sort(function(a,b){
  	return a-b;
  });
  var arrlength= arr.length;
  arrlength-=1;
  
  arrLengthHaUres = arr.length;
  console.log("ha ures: "+arr.length);

  arr = sorted;
  for(var i=0;i<arr.length;i++){
  	if(arr[i]<num && arr[i+1]>=num){
  		index = i+1;
	}
	else if(arr[0]>=num){
		index = 0;
	}
	else if(arr[arrlength]<num){
		index = arrlength+1;
	}
	
	}
	if(arr.length<1){
		index = 0;
		console.log('ok');
	}
	
  num = index;
  return num;
  
}
getIndexToIns([40, 60], 50);
