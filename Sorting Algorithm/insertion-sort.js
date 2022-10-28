// time complexity = O(n^2)
// space complexity = O(1)
//value = for storing
//hole position
function insertionSort(arr) {
  let i, value, hole;
  for (i = 1; i < arr.length; i++) {
    value = arr[i];
    hole = i;
    while (hole > 0 && arr[hole - 1] > value) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = value;
  }
  return arr;
}
const numbers = [-5, 3, -5, -11, 12, 4, 8];
let sorted = insertionSort(numbers);
console.log(sorted);
