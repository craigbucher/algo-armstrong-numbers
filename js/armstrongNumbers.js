exports.findArmstrongNumbers = function(start, end) {
    const result = [];
    for (let i = start; i <= end; i++){
      let sum = 0;
      const num = i; // just to make it easier to understand
      //split number into digits
      const digits = num.toString().split('');
      //iterate through digits
      for (let j = 0; j < digits.length; j++){
        // calculate number to powwer
        let power = digits[j] ** digits.length
        sum += power
        if (sum == num) {
          result.push(sum)
        }
      } 
    }
    return result;
  }
  
  console.log(exports.findArmstrongNumbers(0,999))