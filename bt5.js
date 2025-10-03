let tienVay, laiSuat, soDu, nam;
do {
  tienVay = parseFloat(prompt("Nhập số tiền cần vay:"));
} while (isNaN(tienVay) || tienVay <= 100 || tienVay >= 1000);
laiSuat = 0.05;
soDu = tienVay;
nam = 1;
while (nam <= 10) {
  soDu = soDu * (1 + laiSuat);
  console.log(`Năm ${nam}: Số dư là ${soDu.toFixed(2)} USD`);
  if (soDu >= 2 * tienVay) {
    console.log("Số dư đã vượt gấp đôi số tiền vay ban đầu. Dừng tính toán.");
    break;
  }
  nam++;
}
