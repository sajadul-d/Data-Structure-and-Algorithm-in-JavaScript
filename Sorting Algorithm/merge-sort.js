//Mergesort is a divide and conquer algorithm and is O(n log(n))
//because the input is repeatedly halved.
//n auxiliary space is required in Merge Sort implementation as all the elements are copied into an auxiliary array.
//Hence space complexity is: O(n)

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergesort(leftArr), mergesort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  //merge the sorted array using spread operator
  const resultArr = [...sortedArr, ...leftArr, ...rightArr];
  return resultArr;
}

const arr = [8, 20, -2, 4, -6];
console.log(mergesort(arr)); // [-6, -2, 4, 8, 20]
