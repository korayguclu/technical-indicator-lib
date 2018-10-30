import {ROC} from './roc';

const closes = [11045.27,11167.32,11008.61,
    11151.83,10926.77,10868.12,
    10520.32,10380.43,10785.14,
    10748.26,10896.91,10782.95,
    10620.16,10625.83,10510.95,
    10444.37,10068.01,10193.39,
    10066.57,10043.75];

const expectedResult = [null, null, null, null, null, null, null, null, 
    null, null, null, null, -3.85, -4.85, -4.52, -6.34, -7.86, -6.21, -4.31, -3.24];

test('calculate ROC', () => {
    expect(ROC(closes, 12)).toEqual(expectedResult);
});    