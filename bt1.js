let scores = [12, 8, 15, 20, 5, 18, 22, 10, 7, 14];
let tong = 0;
for (let i = 0; i < scores.length; i++) {
  tong += scores[i];
}
console.log("Tổng điểm của đội là:", tong);
if (tong > 100) {
  console.log("thắng.");
} else {
  console.log("Thua.");
}
