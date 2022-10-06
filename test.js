// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) 
{
  if (array.length === 0)
  {
    return null;
  }
  else if (array.length === 1)
  {
    return array[0];
  }
  else (array.length > 1)
  {
    let cache = "";
    for (let index = 0; index < array.length; index +=1)
    {
      if (array[index].length > cache.length)
        {
          cache = array[index];
        }
    }
    return cache;
  }


//   for (let index = 0; index < array.length; index += 1)
}



console.log(findLongestWord(words));