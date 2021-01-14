
function findLongestWord(str) {
  var arr = [];
  arr = str.split(" ");
  var hosszu=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i].length>hosszu){
      hosszu=arr[i].length;
    }
  }
  return hosszu;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
