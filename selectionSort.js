function selectionSort(nums) {
  for (let i = position; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }
  return nums;
}
