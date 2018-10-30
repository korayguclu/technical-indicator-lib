/*
Long-Term Indicators (weighting)
--------------------------------

  * Percent above/below 200-day EMA (30%)
  * 125-Day Rate-of-Change (30%)

Medium-Term Indicators (weighting)
----------------------------------

  * Percent above/below 50-day EMA (15%)
  * 20-day Rate-of-Change (15%)

Short-Term Indicators (weighting)
---------------------------------

  * 3-day slope of PPO(12,26,9) Histogram/3 (5%)
  * 14-day RSI (5%)
*/
import {EMA} from './ema';
import {ROC} from './roc';
import {RSL} from './rsl';
import {PPO} from './ppo';
import {RSI} from './rsi';

const SCTR = (close: number[])  => {
    if( close.length<200) {
      throw new Error("Price array length can not be less than 200");
    }
    let sctr: number[] = [];
    const rsl200 = RSL(close,200);
    const roc125 = ROC(close,125);
    const rsl50 = RSL(close,50);
    const roc20 = ROC(close,20);
    const rsiData = RSI(close,14);
    const result = [];
    for(let i = 0;i<200;i++){
      result.push(null);
    }
    for (let k =200;k<rsl200.length;k++) {
      const data = rsl200[k] *.30 + roc125[k] *.30 + rsl50[k]*.15+ roc20[k] *.15 + rsiData[k]*.05;
      result.push(parseFloat(data.toFixed(4)));
    }
    return result;
}
export {SCTR};