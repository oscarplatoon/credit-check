exports.checkCredit = function(str) {
	
	let reversed = str.split('').reverse().join('');
	let finalArray = []
	for (var i = 0; i < reversed.length; i++) {
		if(i % 2 == 1){
			let doubled = parseInt(reversed[i]) * 2;
			if(doubled > 9){
				finalArray.push(doubled % 10 + 1);
			}else {
			finalArray.push(doubled);
			}
		}
		else {
			finalArray.push(parseInt(reversed[i]));
		}

	}
	let sum = 0;
	for (var i = 0; i < finalArray.length; i++) {
		sum += finalArray[i]
	}
	if(sum % 10 == 0){
		return "The number is valid!";
	} else {
		return "The number is invalid!";
	}
	}

