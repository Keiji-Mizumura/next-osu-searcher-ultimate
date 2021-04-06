import { roundTwoDecimals } from './Math'

export function standard(miss, x, y, z){

    let dividend = (x * 50) + (y * 100) + (z * 300);
    let divisor = 300 * (miss + x + y + z);

    let acc = 100 * (dividend / divisor);

    return roundTwoDecimals(acc);

}