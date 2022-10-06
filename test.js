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


/* Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrayOfStrings) 
{
  if (arrayOfStrings.length === 0)
  {
    return null;
  }


}

*/
// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const test = ["machine"]
function doesWordExist(word , arrayOfStrings) 
{
  if (arrayOfStrings.length === 0)
  {
    return null;
  }
  else if (arrayOfStrings.length === 1 && word === arrayOfStrings[0])
  {
    return true;
  }
  else
  {
    for (let index = 1; index < arrayOfStrings.length; index += 1)
    {
      if (word === arrayOfStrings[index])
      {
        return true;
      }
    }
    return false;
  }
}

console.log(doesWordExist("machine", test));