const today = new Date();
const year = today .getFullYear();
const month = today.getMonth() + 1;//月は0から始まるため+1する 
const date = today.getDate();

console.log(year + "年" + month + "月" + date + "日");con
