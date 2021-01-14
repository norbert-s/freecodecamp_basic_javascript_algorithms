
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var strHossza = str.length;
  
  var hosszabbe;
  hosszabbe = strHossza >num;
  var csonka ="";
  
  if(num<=3){
    csonka = str.slice(0,num);
    csonka+="...";
    str = csonka;
    console.log(str);
    return str;
  }
  
  if(strHossza===num){
    return str;
  }
  if(strHossza<num){
    return str;
  }
  
  if(hosszabbe){
    csonka = str.slice(0,num-3);
    csonka += "...";
    str = csonka;
    console.log(str);
    return str;
  }
  
  
}




truncateString("A-tisket a-tasket A green and yellow basket", 8);
