function compareNum(a,b){
  var str = '';
  var countA = 0;
  var countB = 0;
  var str_a = a.toString();
  var str_b = b.toString();
  for(var i=0;i<str_a.length;i++){
    if(str_a[i]==str_b[i]){
      countA ++;
    }else if(str_b.indexOf(str_a[i])>=0){
      countB ++;
    }
  }
  str = countA.toString() + 'A' + countB.toString() + 'B';
  console.log(str);
  return str;
}

module.exports = {compareNum};
