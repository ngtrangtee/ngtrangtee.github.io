// Bài 1.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
function tangDan(arr1 = []) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr1[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(tangDan([6, 2, 6]));

// Bài 2. Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng giảm dần hay không
function giamDan(arr2 = []) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < arr2[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(giamDan([5, 4]));

// // Bài 3.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số chẵn tăng dần hay không
function chanTangDan(arr3 = []) {
  for (let i = 0; i <= arr3.length; i++) {
    if (arr3[i] % 2 !== 0 || arr3[i] > arr3[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(chanTangDan([0, 2, 4]));

// // Bài 4.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số lẻ giảm dần hay không
function leGiamDan(arr4 = []) {
  for (let i = 0; i <= arr4.length; i++) {
    if (arr4[i] % 2 == 0 || arr4[i] < arr4[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(leGiamDan([103, 9, 7]));

// // Bài 5.Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng
function max(arr5 = []) {
  let maxValue = arr5[0];
  for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] > maxValue) {
      return (maxValue = arr5[i]);
    }
  }
}
console.log(max([10, 12, 112]));

// Bài 6.Viết function truyền vào 1 mảng. Tìm số nhỏ nhất trong mảng
function min(arr6 = []) {
  let minValue = arr6[0];
  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] < minValue) {
      return (minValue = arr6);
    }
  }
}
console.log(min([10, 12, 124]));

// Bài 7.Viết function truyền vào 1 mảng, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function soDu(arr7 = []) {
  let arr71 = [];
  for (let i = 0; i < soDu.length; i++) {
    arr71.push(soDu[i] % 2);
  }
}
console.log(soDu([10, 5]));

// // Bài 8.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần
// function repeatString(arr8 = []) {
//   do {
//     arr8.push(arr8[0]);
//   } while (repeatString.length <= 5);
// }
// console.log(repeatString([1]));

// // Bài 9.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang
// function repeatStringWithDash(arr9 = []) {
//     for (let i = 0; i < 10; i++) {
//         arr9.push(-arr9[0]);
//     }
// }
// console.log(repeatString([b]))
