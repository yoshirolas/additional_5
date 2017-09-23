module.exports = function check(str, bracketsConfig) {
  var arrStr = str.split('');
//counts for breckets: countA = '(', ')'; countB = '[', ']'; 
//					   countC = '{', '}'; countD = '|', '|';
  var countA = 0; var countB = 0; var countC = 0; var countD = 0;
//counts for numbers: count12 = '1', '2'; count34 = '3', '4';
//                    count56 = '5', '6'; count77 = '7', '7'; count88 = '8', '8';
  var count12 = 0; var count34 = 0; var count56 = 0; var count77 = 0; var count88 = 0;
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
  			case '1':
  				count12 += 1;
  				break;
   			case '2':
  				count12 -= 1;
  				break; 
  			case '3':
  				count34 += 1;
  				break;
  			case '4':
  				count34 -= 1;
  				break;  		
  			case '5':
  				count56 += 1;
  				break;
  			case '6':
  				count56 -= 1;
  				break;
  			case '7':
  				count77 += 1;
  				break;
			case '8':
  				count88 += 1;
  				break;
   		}
   		if ((countA < 0) || (countB < 0) || (countC < 0) || (count12 < 0) || (count34 < 0) || (count56 < 0) ) {
   			return false;
   		}
  	}
  	if ((countA !== 0) || (countB !== 0) || (countC !== 0) || (count12 !== 0) || (count34 !== 0) || (count56 !== 0) || (countD % 2 !== 0) || (count77 % 2 !== 0) || (count88 % 2 !== 0)) {
  		return false;
  	}
  	else {
  		return true;
  	}
  }
}
