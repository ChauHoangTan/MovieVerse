
export default function getCurrentDate() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const format = (field) => {
        if(field < 10){
            return '0' + field
        }
        return field
    }

    hours = format(hours);
    minutes = format(minutes);
    seconds = format(seconds);
    day = format(day);
    month = format(month);
    year = format(year);

    return hours+":"+minutes+":"+seconds+" "+day+"/"+month+"/"+year;
}