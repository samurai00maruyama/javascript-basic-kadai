// 体重と身長の変数
let weight = 68;      // kg
let height = 1.7;     // m

// BMIを計算する
let bmi = weight / (height * height);

// 結果を出力する
console.log("体重: " + weight + "kg");
console.log("身長: " + height + "m");
console.log("BMI: " + bmi.toFixed(2));
