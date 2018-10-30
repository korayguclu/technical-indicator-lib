const SMA = (close: number[], timeperiod = 10): number[] => {
    let result: number[] = [];
    let queue = [];
    for (let i = 0; i < timeperiod - 1; i++) {
        queue.push(close[i]);
        result.push(null);
    }
    for (let i = timeperiod - 1; i < close.length; i++) {
        queue.push(close[i]);
        result.push(queue.reduce(
            (pre, cur, index, arr) => {
                return pre + cur;
            }
        ) / timeperiod);
        queue.shift();
    }
    return result;
};

export {SMA};