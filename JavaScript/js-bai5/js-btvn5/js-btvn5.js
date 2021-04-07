// ## Bài tập thực hành String
// 1. Viết function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không
//     - Ví dụ: checkStringExist("i love you", "you") => true
//     - Ví dụ: checkStringExist("i love you", "hate") => false
function checkStringExist(str1, str1a) {
  if (str1.indexOf(str1a) != -1) {
    return true;
  } else {
    return false;
  }
}
console.log(checkStringExist("i love you", "you"));
console.log(checkStringExist("i love you", "hate"));

// 2. Viết function rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi.
//     - Ví dụ: shortenString('Xin chào các bạn') => 'Xin chào...'
//     - Ví dụ: shortenString('Hello') => 'Hello'
function shortenString(str2) {
  if (str2.length > 8) {
    let shorternStringNew = str2.slice(0, 8) + "...";
    return shorternStringNew;
  } else {
    return str2;
  }
}
console.log(shortenString("Xin chào các bạn"));
console.log(shortenString("Hello"));

// 3. Viết function có tác dụng biến 1 chuỗi thành chuỗi chỉ viết hoa từ đầu tiên.
//     - Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => 'Chào Mừng Đến Với Techmaster'
// Tách chuỗi thành mảng các từ
// Tác
function capitalizeString(str3) {
  let word = str3.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].toLowerCase();
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
  console.log(word);
}
console.log(capitalizeString("chÀo MừnG đẾn với techMaster"));


// 4. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết function có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString('a', 5) => 'a-a-a-a-a'
function repeatStringWithDash(string, times) {
  if (times < 0) {
    return "";
  } else if (times === 1) {
    return string;
  } else {
    let stringDash = "-" + string;
    return string + stringDash.repeat(times - 1);
  }
}
console.log(repeatStringWithDash("a", 10));


// 5. Viết function với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
//     - Ví dụ: reverseString('Hello') => 'olleH'
function reverseString(str5) {
  let arr = str5.split("");
  return arr.reverse().join("");
}
console.log(reverseString("Hello"));

// Chữa bài 5
function reverseString1(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString1('Hello'))

// 6. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường),
//     - Ví dụ: checkSymmetricString("Race car") => true
//     - Ví dụ: checkSymmetricString("hello world") => false
function checkSymmetricString(str6) {
  let convertOriginal = str6.split(" ").join("").trim().toLowerCase();
  let testString = convertOriginal.split("").reverse().join("");
  if (convertOriginal === testString) {
    return true;
  }
  return false;
}
console.log(checkSymmetricString("Race car"));
console.log(checkSymmetricString("hello world"));

// chuyển từ chuỗi qua mảng qua chuỗi lại

// 7. Viết một function nhận vào string, trả về số lượng nguyên âm có trong string
//     - Nguyên âm:  a, o, e, u, i.
//     - Ví dụ: countNumberVowels("hello") => 2
//     - Ví dụ: countNumberVowels("hello hien") => 4
function countNumberVowels(str7) {
  let arr7 = str7.split("");
  let vowel = [];
  for (let i = 0; i < arr7.length; i++) {
    if (
      arr7[i] === "a" ||
      arr7[i] === "e" ||
      arr7[i] === "i" ||
      arr7[i] === "o" ||
      arr7[i] === "u"
    ) {
      vowel.push(arr7[i]);
    }
  }
  return vowel.length;
}
console.log(countNumberVowels("hello"));
console.log(countNumberVowels("hello hien"));
// Cách làm:
// Chuyển string về nhiều mảng, mỗi mảng là 1 chữ cái
// if giá trị của mảng = nguyên âm, thì push giá trị vào mảng mới
// return số phần tử của mảng mới
// console.log số phần tử

// 8. Viết function kiểm tra xem một chuỗi có kết thúc bằng chuỗi khác hay không.
//     - Ví dụ : confirmEnding("hello", "lo") => true
//     - Ví dụ : confirmEnding("hello", "ll") => false
function confirmEnding(set1, set2) {
  let arrSet1 = set1.split("");
  let arrSet1Ending = arrSet1.slice(-2).join();
  let arrSet2 = set2.split("").join();
  if (arrSet1Ending === arrSet2) {
    return true;
  }
  return false;
}
console.log(confirmEnding("hello", "lo"));
console.log(confirmEnding("hello", "ll"));

// 9. Viết function lấy ra những chữ cái đầu của từng từ trong chuỗi, các chữ cái đầu được phân tách với nhau bằng dấu cách
//     - Ví dụ : getFirstLetter("xin chào các bạn") => "x c c b"
//     - Ví dụ : getFirstLetter("hello world") => "h c"
function getFirstLetter(str9) {
  firstLetterResult = str9.split(" ");
  for (let i = 0; i < firstLetterResult.length; i++) {
    firstLetterResult[i] = firstLetterResult[i].charAt(0);
  }
  return firstLetterResult.join(" ");
}
console.log(getFirstLetter("xin chào các bạn"));

// Split thành 1 array gồm các từ
// trong mỗi array chuyển thành 1 string
// Từ string split ra thành các chữ cái
// Push chữ cái đầu vào array mới

// 10. Viết function nhập vào 1 chuỗi bất kỳ. Sắp xếp các ký tự trong chuỗi theo chiều tăng dần của bảng chữ cái (có phân biệt chữ hoa, chữ thường). Yêu cầu loại bỏ khoảng trắng trong chuỗi trước khi sắp xếp

//     - Ví dụ : sortLetters("hello world") => "dehllloorw"
//     - Ví dụ : sortLetters("HellO WorLd") => "HLOWdellor"
function sortLetters(str10) {
  removeSpace = str10.split(" ").join("");
  sortLettersResults = removeSpace.split("").sort().join("");
  return sortLettersResults;
}
console.log(sortLetters("hello world"));
console.log(sortLetters("HellO WorLd"));

// loại bỏ khoảng trắng trong string
// Chuyển string thành array
// Sắp xếp array
// chuyển lại về string

// 11. Viết function nhập vào 1 chuỗi bất kỳ. Tìm ra ký tự không bị lặp lại trong chuỗi (không tính khoảng trắng)
//     - Ví dụ : getLetterNoRepeat("abc abce") => "e";
//     - Ví dụ : getLetterNoRepeat("abce abcdf") => "e,d,f";
//     - Ví dụ : getLetterNoRepeat("abab") => "";
function getLetterNoRepeat(str11) {
  removeSpace1 = str11.split(" ").join("");
  let uniqueLetter = "";
  for (let i = 0; i < removeSpace1.length; i++) {
    if (
      removeSpace1.indexOf(removeSpace1[i]) ==
      removeSpace1.lastIndexOf(removeSpace1[i])
    ) {
      uniqueLetter += removeSpace1[i];
    }
  }
  return uniqueLetter.split("");
}
console.log(getLetterNoRepeat("abc abce"));
console.log(getLetterNoRepeat("abce abcdf"));
console.log(getLetterNoRepeat("abab"));
