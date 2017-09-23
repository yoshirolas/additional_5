module.exports = function check(str, bracketsConfig) {
  var arrStr = str.split('');
//counts for breckets: countA = (); countB = []; countC = {}; countD = ||;
  var countA = 0; var countB = 0; var countC = 0; var countD = 0;
  if (arrStr.length % 2 !== 0) {
  	return false;
  }
  else {
  	for (var i = 0; i < arrStr.length; i++) {
  		switch (arrStr[i]) {
  			case '(':
  				countA += 1;
  				break;
   			case ')':
  				countA -= 1;
  				break; 
  			case '[':
  				countB += 1;
  				break;
  			case ']':
  				countB -= 1;
  				break;  		
  			case '{':
  				countC += 1;
  				break;
  			case '}':
  				countC -= 1;
  				break;
  			case '|':
  				countD += 1;
  				break;
   		}
   		if ((countA < 0) || (countB < 0) || (countC < 0)) {
   			return false;
   		}
  	}
  	if ((countA !== 0) || (countB !== 0) || (countC !== 0) || (countD % 2 !== 0)) {
  		return false;
  	}
  	else {
  		return true;
  	}
  }
}
