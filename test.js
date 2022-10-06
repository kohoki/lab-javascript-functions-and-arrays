// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arrayOfStrings) 
{
  if (arrayOfStrings.length === 0)
  {
    return null;
  }
  else{
    newArray = [];
    for (let index = 0; index < arrayOfStrings.length; index += 1)
    {
      if (newArray.includes(arrayOfStrings[index]) === false)
      {
        newArray.push(arrayOfStrings[index]);
      }
    }
    return newArray;
  }
}

console.log(uniquifyArray(wordsUnique));