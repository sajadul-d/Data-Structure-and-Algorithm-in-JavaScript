//time complexity = O(n)
//space complexity = O(1)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `${arr[i]} is found at index ${i}`;
    }
  }
  return `Iteam is not found in the above array`;
}

const numbers = [5, 2, 3, 4, 12, -4, 2, -3];
//the targeted elemet that have to find in the above array
let target = 12;
console.log(linearSearch(numbers, target));
