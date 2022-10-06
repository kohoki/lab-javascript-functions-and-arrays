/* Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const numbers2 = ["2", "1"];

// Iteration #3.1 Bonus:
function sum(arrayOfNumbers) 
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
    summ = 0;
    for (let index = 0; index < arrayOfNumbers.length; index += 1)
    {
      if (typeof arrayOfNumbers[index] === "number" || typeof arrayOfNumbers[index] === "string" || typeof arrayOfNumbers[index] === "boolean")
      {
        if (typeof arrayOfNumbers[index] === "string")
        {
          summ += parseInt(arrayOfNumbers[index]);
          
        }
        else
        {
          summ += arrayOfNumbers[index];
        }
      }
      else
      {
        return error;
      }
    }
    return summ;
    
  }
}

console.log(sum(numbers2));
*/


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const test = ["aber", "aberrr"];
function averageWordLength(arrayOfStrings) 
{
  if (arrayOfStrings.length === 0)
  {
    return null;
  }
  else if (arrayOfStrings.length === 1)
  {
    return arrayOfStrings[0].length ;
  }
  else
  { 
    let count = 0;
    for (let index = 0; index < arrayOfStrings.length; index += 1)
    {
      count += arrayOfStrings[index].length;
      console.log(count);
    } 
    return count/arrayOfStrings.length;
  }
}

console.log(averageWordLength(test));
