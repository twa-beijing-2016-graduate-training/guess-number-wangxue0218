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
//  console.log(str);
  return str;
}
function answerGenerator(){
  var answer = 0;
  var res = '';
  while(res.length<4){
    var oneNum = parseInt(Math.random()*10);
    var oneStr = oneNum.toString();
    if(answer == 0 && oneNum == 0)
    continue;
    if(res.indexOf(oneStr)==-1){
      res += oneStr;
      answer = answer*10 + oneNum;
    }
  }
  return answer;
}
//To test answer or input
function testNum(num){
  var res = 'generate a right num';
  var str = num.toString();
  if(isNaN(num)||str.length!=4)
  res = 'generate a wrong num';
  for(var i=0;i<str.length;i++){
    for(var j=0;j<str.length;j++){
      if(j==i) continue;
      if(str[j]==str[i])
      res = 'generate a wrong num';
    }
  }
  return res;
}
function guessGame(input){
  var answer = answerGenerator();
  var res = compareNum(answer,input);
//  console.log(res);
  return res;
}
function mockTestGuess(){
  var res = guessGame(1234);
  console.log(res);
}
module.exports = {compareNum,answerGenerator,testNum,guessGame,mockTestGuess};
