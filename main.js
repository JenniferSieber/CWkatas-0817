// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript
const olympicRing = a => {
  let score = 0;
  const rings = a.match(/[BaAbdDeoOpPQqRg]/g);
  if (!rings || rings.length == 1 && !rings.includes('B')) {
    return 'Not even a medal!'
  } else {
    rings.forEach(letter => {
      return letter == 'B' ? score += 2 : score += 1;
    })
  }
  switch(score) {
    case 0 :
    case 1 : return 'Not even a medal!';
    case 2 : return 'Bronze!';
    case 3 : return 'Silver!';
    default: return 'Gold!';
  }
}

console.log(olympicRing('wHjMudLwtoPGocnJ'));
console.log(olympicRing('JKniLfLW'));
console.log(olympicRing('oooo'));
console.log(olympicRing('ozzzz'));
console.log(olympicRing('oozzz'));
console.log(olympicRing('oBz'));


// KATA 2 7kyu
// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
const crap = (x, bags, cap) => {
  var yard = x.reduce( (a, b) => a.concat(b) );
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)); //Clean 
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1)); //Cr@p 
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2)); //Dog!!

// KATA 3 7kyu
// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
const evenChars = string => {
  if (string.length < 2 || string.length > 100) return 'invalid string';
  return Array.from(string).filter((ch, i) => ((i + 1) % 2 === 0))};

console.log(evenChars('1234'));
console.log(evenChars(';;;--'));
console.log(evenChars('abcdefghijklm'));

// KATA 4 8kyu
// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
const uefaEuro2016 = (teams, scores) => {
  if (scores[0] == scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  let winner = (scores[0] > scores[1]) ? `${teams[0]}`: `${teams[1]}`;
  
  return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`;
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));  
console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 2]));  
console.log(uefaEuro2016(['Germany', 'Ukraine'], [0, 2]));  

// KATA 5 7kyu
// https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript
const bald = x => {
  let hair = 0;
  let noHair = Array.from(x).map(ch => {
    if (ch === `/`) hair++;
    return `-`;
  });

  let result =
  hair > 5 ? 'Hobo!' :
  hair > 2 && hair <= 5 ? 'Careless!' :
  hair === 2 ? 'Homer!' :
  hair === 1 ? 'Unicorn!' :
  'Clean!';
  console.log(hair, noHair.length, noHair.join('').length)
  
  return [`${noHair.join('')}`, `${result}`];
  
}

console.log(bald('--/----/-----//----/'));
console.log(bald('/---------'));
console.log(bald('----------'));
console.log(bald('-////-----'));
console.log(bald('-///////--'));

