let phieuBau, tongPhieu,phieu,ungCuVien,soPhieu,i;
 phieuBau = [
  { ungCuVien: 'A', soPhieu: 50 },
  { ungCuVien: 'B', soPhieu: 30 },
  { ungCuVien: 'C', soPhieu: 20 },
  { ungCuVien: 'D', soPhieu: 15 }
];
 tongPhieu = 0;
for ( phieu of phieuBau) {
  tongPhieu += phieu.soPhieu;
}
console.log(`Tổng số phiếu: ${tongPhieu}`);
for ( i in phieuBau) {
   ungCuVien = phieuBau[i].ungCuVien;
   soPhieu = phieuBau[i].soPhieu;
  console.log(`Ứng cử viên ${ungCuVien} nhận được ${soPhieu} phiếu.`);
}
