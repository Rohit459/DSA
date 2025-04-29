function binarySearch(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while(true) {
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if(target === nums[middleIndex]) return middleIndex;
        if(target <  nums[middleIndex]) {
            rightIndex = middleIndex - 1;
            if(rightIndex<leftIndex) return -1;
        } else {
            leftIndex = middleIndex + 1
            if(leftIndex>rightIndex) return -1;
        }
    }
}