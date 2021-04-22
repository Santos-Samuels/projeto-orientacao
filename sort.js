function insertionSort(_array) {
    let array = [... _array]
    let n = array.length
    
    for(let i = 1; i < n; i++) {
        let current = array[i]

        let j = i-1
        while ((j > -1) && (current < array[j])) {
            array[j+1] = array[j]
            j--
        }
        array[j+1] = current
    }

    return array
}


function merge(left, right) {
    let array = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift())  
        } else {
            array.push(right.shift()) 
        }
    }
    
    return [ ...array, ...left, ...right ]
}

function mergeSort(_array) {
    let array = [... _array]
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}


function bubbleSort(_array) {
    let array = [... _array]
    var swapp;
    var n = array.length-1;
    var x=array;
    do {
        swapp = false;
        for (var i=0; i < n; i++) {
            if (x[i] > x[i+1]) {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
    
    return x; 
}


function countingSort(_array, min, max) {
    let array = [... _array]
    var i, z = 0, count = []
 
    for (i = min; i <= max; i++) {
        count[i] = 0
    }
 
    for (i=0; i < array.length; i++) {
        count[array[i]]++
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            array[z++] = i
        }
    }
    return array
}