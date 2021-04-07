// slice: Cắt mảng
let arr = [1, 2, 3, 4, 5, 6];
// Truyền đủ tham số - Lấy các giá trị 2,3,4,5
console.log(arr.slice(1,5));
// Truyền 1 tham số - Lấy từ vị trí bắt đầu đó đến cuối mảng
console.log(arr.slice(1));
// Không truyền tham số - Nguyên xi
console.log(arr.slice());
// Truyền tham số âm - Tính ngược lại
console.log(arr.slice(-5, -1));

// IndexOf: Kiểm tra xem 1 giá trị có nằm trong mảng hay không
    // Nếu có > trả về vị trí đầu tiên của phần tử
    // Nếu không > trả về -1
console.log(arr.indexOf(4));
console.log(arr.indexOf(7));
console.log(arr.indexOf(1));

// lastIndexOf: Trả về vị trí cuối cùng của phần tử
console.log(arr.lastIndexOf(1));

// join(): Convert arr => string
console.log((arr.join()));  //không truyền - mặc định là dấu phẩy
console.log((arr.join(' '))) //Thông thường sẽ dùng cái này
console.log((arr.join(('*'))))

// Viết function kiểm tra 1 giá trị có nằm trong mảng hay không
function valueInArray(arr1) {
    if (arr1.indexOf(45) !== -1) {
        return true;
    } else {
        return false
    }
}
console.log(valueInArray([1, 2, 3, 4]))

// Bai 2: Viết function tìm ra số lớn thứ nhì trong mảng các số
function max2Number(arr2) {
    let arrSortDesc = arr2.sort(function (a, b) {
        return b - a;
    });
    return arrSortDesc[1];
}
console.log(max2Number([1, 2, 3, 6, 7]));

// Bài 3: Viết function để lấy 1 phần tử ngẫu nhiên từ 1 mảng 
function randomElement(element) {
    return element[Math.floor(Math.random() * element.length)];
}
let element = [1, 2, 3, 4];
console.log(randomElement(element));

// Bài 4: Cho 1 mảng các chuỗi. Viết function lọc ra các phần tử có độ dài lớn nhất
function findLongestWord(arr4) {
    let longestWord = "";
    arr4.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}
console.log(findLongestWord(["aaa", "bb", "cccc"]))

// convert ra mảng độ dài
// Tìm ra độ dài lớn nhất

function max(arr5) {
  let maxValue = arr5[0];
  for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] > maxValue) {
      maxValue = arr5[i];
    }
  }
  return maxValue;
}
console.log(max([10, 12, 112]));