// sorting an array of integers via bubble sort / swapping

function sortNumbers(numbers) {
    let copy = [...numbers];
    const length = copy.length
    for(let i = 0; i < length - 1; i++) {
        for(j = 0; j < length - 1 -i; j ++) {
            if(copy[j] > copy[j+1]) {
                let temp = copy[j];
                copy[j] = copy[j+1];
                copy[j+1] = temp
            }
        }
    }
    return copy
}

//2nd attempt

function bubbleSort(numbers) {
    for(let i = numbers.length -1; i>0; i--){
        for(let j = 0; j < i; j++) {
            if(numbers[j] > numbers[j+1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
            }
        }
    }
    return numbers
}

// 3rd variation

function bbSortWithFlag(numbers) {
    let swapped
    do {
        swapped = false
        for(let j = 0; j < numbers.length-1; j++) {
            if(numbers[j] > numbers[j+1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
                swapped = true
            }
        }
    } while(swapped)
}