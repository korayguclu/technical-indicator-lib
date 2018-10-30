import {SMA} from './sma';

// https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:moving_averages
// Initial SMA: 10-period sum / 10 
// Multiplier: (2 / (Time periods + 1) ) = (2 / (10 + 1) ) = 0.1818 (18.18%)
// EMA: {Close - EMA(previous day)} x multiplier + EMA(previous day).
const EMA = (close: number[], timeperiod = 10): number[] => {
    let k = 2 / (timeperiod + 1);
    let result: number[] = [];
    for (let i = 0; i < timeperiod; i++) {
        result.push(null);
    }
    const smaData = SMA(close,timeperiod); 
    result[timeperiod-1] = Math.round(smaData[timeperiod-1] * 100) / 100;
    for (let i = timeperiod; i < close.length; i++) {
        const num = k * close[i] + (1 - k) * result[i - 1];
        const rounded = Math.round(num * 100) / 100
        result.push(rounded);
    }
    return result;
};

export { EMA };