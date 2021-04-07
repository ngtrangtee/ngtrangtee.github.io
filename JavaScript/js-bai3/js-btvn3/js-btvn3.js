// Bài 1.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
// Giảm vòng lặp đi 1 cái
function tangDan(arr1) {
  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] >= arr1[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(tangDan([6, 2, 6]));

// Bài 1 cách 4
// Every: Tất cả đúng sẽ trả về đúng, chỉ càn 1 cái sai sẽ trả về sai
function checkAscArr_01(arr) {
  return arr.every(function (ele, index) {
    if (index == arrr.length - 1) {
      return true
    }
    return ele >= arr[index + 1]
  })
}
console.log(checkAscArr_01)([1, 2, 3, 4]));
console.log(checkAscArr_01)([1, 2, 3, 4]));


// Bài 2. Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng giảm dần hay không
function giamDan(arr2) {
  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] <= arr2[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(giamDan([5, 4]));

// // Bài 3.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số chẵn tăng dần hay không
function chanTangDan(arr3) {
  for (let i = 0; i < arr3.length - 1; i++) {
    // Kiểm tra số chẵn
    if (arr3[i] % 2 != 0 || arr3[i + 1] % 2 != 0){
      return false
    }

    // Kiểm tra tăng dần
    if (arr3[i+1] <= arr3[i]) {
      return false;
    } 
  }
  return true;
}
console.log(chanTangDan([2, 4, 6, 8]));
console.log(chanTangDan([2, 4, 6, 7]));
console.log(chanTangDan([1, 4, 6, 8]));
console.log(chanTangDan([2, 4, 7]));

// // Bài 4.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số lẻ giảm dần hay không
function leGiamDan(arr4) {
  for (let i = 0; i < arr4.length - 1; i++) {
    if (arr4[i] % 2 == 0 || arr4[i] <= arr4[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(leGiamDan([103]));

// // Bài 5.Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng
function max(arr5) {
  let maxValue = arr5[0];
  for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] > maxValue) {
      maxValue = arr5[i];
    }
  } return maxValue;
}
console.log(max([10, 12, 112]));

// Cách 2 bài 5
function maxArr_01(arr) {
  let arrSortDesc = arr.sort(function (a, b) {
    return b - a;
});
return arrSortDesc[0];
}
console.log(maxArr_01([1, 2, 4, 3, 5]));

// Cách 3 Bài 5 
function maxArr_02(arr) {
  return Math.max(...arr)
}
console.log(maxArr_02([1, 2, 3, 4, 5]))

// Bài 6.Viết function truyền vào 1 mảng. Tìm số nhỏ nhất trong mảng
function min(arr6) {
  let minValue = arr6[0];
  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] < minValue) {
      minValue = arr6[i];
    }
  } return minValue;
}
console.log(min([10, 12, 124]));

// Bài 7.Viết function truyền vào 1 mảng, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function soDu(arr7) {
  let arr71 = [];
  for (let i = 0; i < arr7.length; i++) {
    arr71.push(arr7[i] % 2);
  } return arr71;
}
console.log(soDu([10, 5]));

// Bài 7 - cách 2
// tạo mảng mới ko ảnh hưởng mảng cũ
// Với mỗi mảng sẽ lấy chia 2
function modulo(arr) {
  e là giá trị, i là chỉ số
  return arr.map(e => e % 2);
}
console.log(modulo([4, 2, 5, 6, 2, 7]));



// // Bài 8.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần
// function repeatString(string, times) {
//   if (times < 0) {
//     return "";
//   } else if (times === 1) {
//     return string;
//   } else return string + repeatString(string, times - 1)
// }
// console.log(repeatString("a", 10));

// // Bài 9.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang
// function repeatStringWithDash(string, times) {
//   if (times < 0) {
//     return "";
//   } else if (times === 1) {
//     return string;
//   } else {
//     return string + repeatString("-" + string, times - 1)
//   }
// }
// console.log(repeatStringWithDash("a", 10));

// Chữa bài 8 
function repeatString1(str) {
  let result = '';
  for (i = 0; i < 10; i++) {
    result = result + str;
  } return result;
}
console.log(repeatString1('a'));
 
// Bài 9 - Chữa cách 1
function repeatString01(str) {
  let result = "";
  for (i = 0; i < 10; i++) {
    result = result + str;
  }
  return result;
}
console.log(repeatString1("a"));

// Bài 9 - Chữa cách 2
function repeatString02(str) {
  return str.repeat(10);
}
console.log(repeatString02('a'))

// Bài 10 - chữa cách 1
function repeatString_10(str) {
  let arr = [];
  for (let i = 0; i < 10; i++){
    arr.push(str);
  }
  return arr.join('-')
}
console.log(repeatString_10('a'));

// Bài 10 - Chữa cách 2
function repeatStringWithDash_01(str) {
  let newStr = `${str}-`.repeat(10);
  return newStr.slice(0, newStr.length - 1);
}
console.log(repeatStringWithDash_01('a'));

// Bài 10 - Chữa cách 3
function repeatStringWithDash_03(str) {
  let result = '';
  for (let i = 0; i < 9; i++) {
    // result = result + str
    result += str + '-';
  }
  return result + str;
}
console.log(repeatStringWithDash_03('a'));

// Bài 10 - Chữa cách 4
function repeatStringWithDash_04(str) {
  let result = str;
  for (let i = 0; i < 9; i++) {
    // result = result + str
    result += '-' + str;
  }
  return result;
}
console.log(repeatStringWithDash_04('a'))