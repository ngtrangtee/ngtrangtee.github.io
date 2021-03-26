// Bài 1: Viết function để lấy một mảng bao gồm các phần tử xuất hiện trong cả hai mảng
// Ví dụ: similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarElement(arr1, arr2) {
    let similar = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                similar.push(arr1[i]);
            }
        }
    } return similar;
}
console.log(similarElement([1,2,3], [1,2,4]))

// Bài 2: Viết function remove những phần tử bị trùng nhau trong mảng
// Ví dụ: removeDuplicates([1,2,5,2,6,2,5]) => [1,2,5,6]
function removeDuplicates(arr3) {
    let unique = [];
    for (i = 0; i < arr3.length; i++) {
        if (unique.indexOf(arr3[i]) === -1) {
            unique.push(arr3[i]);
        }
    } return unique;
}
console.log(removeDuplicates([1,2,3,5,6,3]))

// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
// Ví dụ: randomHexCode() => #2ecc71
// Ví dụ: randomHexCode() => #8e44ad
function randomHexCode() {
    let digits = '0123456789abcdef';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += digits[Math.floor(Math.random() * 16)];
    }
    return hexCode;
 }
console.log(randomHexCode())
// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
// Ví dụ: randomRgbCode() => rgb(46, 204, 113)
// Ví dụ: randomRgbCode() => rgb(142, 68, 173)
function randomRgbCode() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return rgb = "rgb(" + r + "," + g + "," + b + ")";
}
console.log(randomRgbCode());