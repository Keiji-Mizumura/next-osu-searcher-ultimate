export const secondsToDayHourMinute = (seconds) => {


    let day =parseInt( seconds / (24 * 3600));
    seconds = seconds % (24 * 3600);

    let hour = parseInt(seconds / 3600);
    seconds %= 3600;

    let minutes = seconds / 60;
 

    return [day, hour, Math.floor(minutes)];

}