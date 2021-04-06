export const numberWithCommas = (x) =>{
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const roundTwoDecimals = (x) =>{
    return Math.round(x * 100) / 100
}
