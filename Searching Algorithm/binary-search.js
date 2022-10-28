//limitations
//binary search is only work for the sorted array
//doesn't work for unsorted  array
//middle = left+right/2
//if middle<target {
//middle++
//}

//Runn Time Complexity = O(log(n))
//Space Complexity is constant === O(1)
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return `${arr[middle]} is found at index ${middle} } `;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return `Iteam is not found`;
}

//array must be sorted
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 24, , 60];
let target = 70;
console.log(binarySearch(numbers, target));
