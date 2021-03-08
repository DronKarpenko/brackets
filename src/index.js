module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets =[]; 
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  } 
  
  let toClose = [];
  
  for (let i = 0; i < str.length; i++) { 
    if(closeBrackets.indexOf(str[i]) !== -1 && toClose.length) {		
      let lastNotClosed = toClose[toClose.length - 1];
      const openedBracketIndex = openBrackets.indexOf(lastNotClosed);
      if(closeBrackets[openedBracketIndex] === str[i]) {
        toClose.pop();
        continue;
      }
    }
    if(openBrackets.indexOf(str[i]) !== -1) {
    	toClose.push(str[i]);
    }
    // Если нет, то вернуть false
    else {
    return false;
    }
  }
  if(toClose.length > 0) {
    return false;
  }
  else {
  return true;
  }
}
