let numbers = [2,2,6,5,3,2,1]
function arraySum(numbers) {
  let sum = 0 
  for (let i = 0; i < numbers.length - 1; i++ ) {
    sum += numbers[i]
  }
  return sum
}
arraySum(numbers)