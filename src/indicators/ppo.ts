import {SMA} from './sma';
import {EMA} from './ema';

const PPO = (close: number[], fastperiod = 12, slowperiod = 26, signalperiod = 9): number[][] => {
    let ema1 = EMA(close, fastperiod);
    let ema2 = EMA(close, slowperiod);
    let diff = [];
    for (let i = 0; i < close.length; i++) {
        diff.push(((ema1[i] - ema2[i])/ ema2[i])*100);
    }
    let dea = SMA(diff, signalperiod);
    let macd = [];
    for (let i = 0; i < close.length; i++) {
        if (dea[i] !== null) {
            macd.push(diff[i] - dea[i]);
        } else {
            macd.push(null);
        }
    }
    return [diff, dea, macd]
}

export {PPO};