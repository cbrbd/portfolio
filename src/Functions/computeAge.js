export function getAge(date) { 
    var diff = Date.now() - date.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}