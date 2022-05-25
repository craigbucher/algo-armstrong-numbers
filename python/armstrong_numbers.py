# How can you make this more scalable and reusable later?
def find_armstrong_numbers(start, end):
    result = []
    for i in range(start, end):
        sum = 0
        num = i
        digits = str(num)
        digits = digits.split()
        for j in range(0, len(digits)):
            #power = digits[j] ** len(digits)
            power = pow(int(digits[j]), len(digits))
            sum += power
            if sum == num:
                result.append(num)
    print(result)

print(find_armstrong_numbers(0,999))