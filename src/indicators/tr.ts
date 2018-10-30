const TR = (high: number[], low: number[], close: number[], timeperiod = 14): number[] => {
    let trueR: number[] = [high[0] - low[0]];
    for (let i = 1; i < high.length; i++) {
        let trueHigh: number;
        let trueLow: number;
        if (high[i] > close[i - 1]) {
            trueHigh = high[i];
        } else {
            trueHigh = close[i - 1];
        }
        if (low[i] < close[i - 1]) {
            trueLow = low[i];
        } else {
            trueLow = close[i - 1];
        }
        trueR.push(trueHigh - trueLow);
    }
    return trueR;
};

export {TR};