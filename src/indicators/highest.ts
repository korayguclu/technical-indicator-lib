const HIGHEST = (arr: number[], timeporid: number): number[] => {
    let result: number[] = [];
    let queue = [];
    for (let i = 0; i < timeporid - 1; i++) {
        queue.push(arr[i]);
        result.push(Math.max.apply(null, queue));
    }
    for (let i = timeporid - 1; i < arr.length; i++) {
        queue.push(arr[i]);
        result.push(Math.max.apply(null, queue));
        queue.shift();
    }
    return result;
}

export {HIGHEST};