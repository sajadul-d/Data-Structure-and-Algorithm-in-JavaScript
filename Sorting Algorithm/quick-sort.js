//Time complexity = O(nlog(n))
//space complexity = O(n)
function accendingQuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let len = arr.length;
  let pivot = arr[len - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...accendingQuickSort(left), pivot, ...accendingQuickSort(right)];
}

const numbers = [8, 20, -2, 4, -6, 8];
let accendingSorted = accendingQuickSort(numbers);
console.log(accendingSorted);
