function merge(array1, array2) {
    let combined = [];
    let i = 0
    let j = 0
    while(i<array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            combined.push(array[i])
            i++
        } else {
            combined.push(array[j])
            j++
        }
    }
    while(i<array1.length){
        combined.push(array[i])
        i++
    }
    while(j<array2.length){
        combined.push(array[j])
        j++
    }
    return combined;
}

function mergeSort(array) {
    if(array.length === 1) return array
    const middle = Math.floor(array.length/2);
    const left = arr.slice(0, middle)
    const right = array.slice(middle);
    mergeSort(left);
    mergeSort(right);
    return merge(left,right)
}


function merge2(arr1,arr2) {
    const combined = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            combined.push[arr1[i]];
            i++;
        } else {
            combined.push[arr2[j]];
            j++;
        }
    }
    while(i < arr1.length) {
        combined.push[arr1[i]];
        i++;
    }

    while(j < arr2.length) {
        combined.push[arr1[j]];
        j++;
    }
}

function mergeSort2(array) {
    if(array.length ===1) return array;
    const left = array.slic(0, Math.floor(array.length/2));
    const right = array.slic(Math.floor(array.length/2));
    return merge(left,right);
}