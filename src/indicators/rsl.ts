
// RSL = Close / sma(Close27) 
// https://www.godmode-trader.de/know-how/rsl-indikator-relative-strength-levy,4367144m

import {SMA} from './sma';

const RSL = (close: number[], n = 27): number[]  => {
    let rsl: number[] = [];
    for (let i = 0; i < n; i++) {
        rsl.push(null);
    }
    const smaData = SMA(close,n); 
    for (let i = n; i < close.length; i++) {
        const num = (close[i] - smaData[i]) / smaData[i] * 100;
        const rounded = Math.round(num * 100) / 100
        rsl.push(rounded);
    }
    return rsl;
}
export {RSL};