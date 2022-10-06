// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const numbers2 = [1];

function sumNumbers(arrayOfNumbers) 
{
  if (arrayOfNumbers.length === 0)
  {
    return 0;
  }
  else if (arrayOfNumbers.length === 1)
  {
    return arrayOfNumbers[0];
  }
  else
  {
    sum = 0;
    for (let index = 0; index < arrayOfNumbers.length; index += 1)
    {
      sum += arrayOfNumbers[index];
    }
    return sum;
  }


}




console.log(sumNumbers(numbers));