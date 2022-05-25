// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(start, end) {
    let result = []	
    for (let num = start; num <= end; num++){	
      let factorArray = []	
      let numString = num.toString();	
      let numArray = numString.split('');	
      let length = numArray.length;	
      numArray.forEach((item) => {	
        let exponent = item ** length;	
        factorArray.push(exponent)	
      });	
      let sum = factorArray.reduce((a, b) => a + b, 0)	
      if (sum === num){	
        result.push(sum);	
      }	
    }  	
    return result;
};
console.log(exports.findArmstrongNumbers(0, 999))