function ageSort(users) {
  // Your code here
  const compFun = (userA, userB) => {
    return userA.age - userB.age;
  }

  return users.sort(compFun);
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function oddEvenSort(arr) {
  // Your code here
  const compFun = (valA, valB) => {
    if (isEven(valA) && isOdd(valB)) return 1;
    if (isOdd(valA) && isEven(valB)) return -1;
    return valA - valB;
  }
  return arr.sort(compFun);
}

function validAnagrams(s, t) {
  // Your code here
  const sArr = s.split("").sort();
  const tArr = t.split("").sort();

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }
  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  const compFun = (a, b) => {
    aPlaces = a.toString().length;
    bPlaces = b.toString().length;
    if (aPlaces === bPlaces) return a - b;
    return bPlaces - aPlaces;
  }

  return arr.sort(compFun);
}

function freqCount(n, arr) {
  let count = 0;
  for (const el of arr) {
    if (el === n) count++;
  }
  return count;
}

function frequencySort(arr) {
  // Your code here
  const compFun = (a, b) => {
    let aCount = freqCount(a, arr);
    let bCount = freqCount(b, arr);
    if (aCount === bCount) return b - a;
    return aCount - bCount;
  }

  return arr.sort(compFun);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
