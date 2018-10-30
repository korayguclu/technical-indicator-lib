
// ROC = [(Close - Close n periods ago) / (Close n periods ago)] * 100
// https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:rate_of_change_roc_and_momentum

const ROC = (close: number[], n = 12): number[]  => {
    let roc: number[] = [];
    for (let i = 0; i < n; i++) {
        roc.push(null);
    }
    for (let i = n; i < close.length; i++) {
        const num = (close[i] - close[i - n]) / close[i - n] * 100;
        const rounded = Math.round(num * 100) / 100
        roc.push(rounded);
    }
    return roc;
}
export {ROC} ;