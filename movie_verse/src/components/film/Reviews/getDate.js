
export default function getCurrentDate() {
    let date = new Date()
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
}