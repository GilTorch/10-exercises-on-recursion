function binarySearch(sortedArray, target, start = 0, end = sortedArray.length - 1) {

    let middleIndex = Math.floor((start + end) / 2);
    let middle = sortedArray[middleIndex];

    if (middle === target) {
        return middleIndex;
    } else {
        if (middle < target) {
            return binarySearch(sortedArray, target, middleIndex + 1, end);
        } else {
            return binarySearch(sortedArray, target, start, middleIndex - 1);
        }
    }
}