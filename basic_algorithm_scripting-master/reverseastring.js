
function reverseString(str) {
  var array = str.split('');
  array.reverse();
  str='';
  var uj;
  for(var i=0;i<array.length;i++){
   str+=array[i];
  }
  
  return str;
}

reverseString("hello");