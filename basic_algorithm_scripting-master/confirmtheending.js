function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var arr = [];
  arr = str.split(" ");
  
  var pozicio = arr.length-1;
  var ezKell = arr[pozicio];
  

  var targetHossza = target.length;
  var ezKellHossza= ezKell.length;
  var ezKellTargetnyiString=ezKell.substring((ezKellHossza)-targetHossza,ezKellHossza)
  console.log(ezKellTargetnyiString);
  

  if(ezKellTargetnyiString===target){
  	return true;
  }
  else{
  	return false;
  }

  
}

confirmEnding("Bastian", "n");

