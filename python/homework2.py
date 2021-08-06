# 1. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một giá trị số (index), hiển thị chuỗi được cắt từ 0 đến vị trí index
print("Nhập một chuỗi")
string = input(">")
print("Nhập một giá trị số (Index)")
index = input(">")
print(string[0:int(index)])

# 2. Viết chương trình yêu cầu người dùng nhập tên, in ra tên viết tắt theo mẫu:
# Ví dụ:
# Nhập tên: Ba Nguyễn
# Ba Ng.
print("Nhập Tên và Họ có dấu")
name = input("> ")
space = name.find(" ")
short_name = name.replace[:space + 3] + "."
print(short_name)

# 3. Viết chương trình yêu cầu người dùng nhập địa chỉ email, ẩn địa chỉ email và in ra theo mẫu trong ví dụ:
# Ví dụ:
# Nhập email: banguyen@gmail.com
# ba...@gmail.com

print("Nhập địa chỉ email")
email = input("> ")
at = email.find("@")
new_email = email.replace(email[2:at],"...")
print(new_email)

# 4. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một ký tự bất kỳ trong chuỗi đó. Đếm số lần xuất hiện của ký tự trong chuỗi, và hiển thị chuỗi khi thay thế ký tự đó thành 😉
# Ví dụ:
# Nhập một chuỗi bất kỳ: Hello world
# Nhập một ký tự trong chuỗi: o
# Ký tự 'o' xuất hiện 2 lần trong chuỗi 'Hello world'
# Hell😉 w😉rld

print("Nhập một chuỗi")
string = input(str("> "))
print("Nhập một kí tự bất kì trong chuỗi trên")
character = input(str("> "))

print(f"Kí tự {character} xuất hiện {string.count(character)} lần trong chuỗi '{string}'")

new_string = string.replace(character, f"😉")
print(new_string)

# 1. Viết chương trình yêu cầu người dùng nhập vào 2 số a, b. Tính và in ra kết quả của các phép tính (+ - * / // % ...) giữa 2 số đó

print("Nhập số a")
number_a = int(input("> "))

print("Nhập số b")
number_b = int(input("> "))

print(number_a + number_b)
print(number_a - number_b)
print(number_a * number_b)
print(number_a / number_b)
print(number_a // number_b)
print(number_a % number_b)

# 4. Viết chương trình yêu cầu người dùng nhập vào giá trị độ dài (long) với đơn vị là cm, quy đổi và in ra giá trị tương ứng ở các đơn vị km, dm, m, mm
print("Nhập giá trị độ dài cm")
cm = int(input("> "))

km = cm/1000
dm = cm/10
m = cm/100
mm = cm*10

print(f"{cm} cm = {km} km")
print(f"{cm} cm = {dm} dm")
print(f"{cm} cm = {m} m")
print(f"{cm} cm = {mm} mm")

# 5. Viết chương trình yêu cầu người dùng nhập vào giá trị nhiệt độ thang nhiệt Celsius (c), quy đổi và in ra nhiệt độ tương ứng trong thang nhiệt Fahrenheit và Kevin
print("Nhập nhiệt độ theo giá trị Celcius")
celcius = int(input("> "))
fahrenheit = (celcius * 9/5) + 32
kevin = celcius + 273.15
print(f"{celcius} độ C = {fahrenheit} độ F")
print(f"{celcius} độ C = {kevin} độ K")

# 6. Viết chương trình yêu cầu người dùng nhập vào số phút (tính từ 0h của ngày hôm nay, giả sử số phút nhập không quá 1440), tính và in ra giá trị giờ:phút tương ứng (VD: 325 -> 5:25)
print("Nhập vào số phút (tính từ 0h của ngày hôm nay; số phút nhập không quá 1440)")
minutes = round(float(input("> ")))
hour = round(minutes // 60)
print(round(hour))
minute = round(((minutes / 60) % 1) * 60)
print(minute)
print(f"{minutes} phút tương ứng với {hour} giờ {minute} phút")

###################################

# 1. Viết chương trình yêu cầu nhập một số nguyên n, kiểm tra và in ra số đó có chia hết cho cả 3 và 5 hay không
# Ví dụ:
# Nhập một số nguyên: 5
# 5 không chia hết cho cả 3 và 5
import math
print("Type an integer")
integer = int(input("> "))

if integer % 3 == 0 and integer % 5 == 0:
    print(f"{integer} Chia hết cho cả 3 và 5")
else: 
    print(f"{integer} Không chia hết cho cả 3 và 5")

# 2. 2. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra số lớn nhất
# Ví dụ:
# Nhập số a: 1
# Nhập số b: 2
# Nhập số c: 3
# Số lớn nhất trong 3 số [1 2 3] là 3

import math
print("Type number A")
a = int(input("> "))
print("Type number B")
b = int(input("> "))
print("Type number C")
c = int(input("> "))

if a >= b and a >= c:
    print(f"{a} là số lớn nhất")
elif b >= a and b >= c:
    print(f"{b} là số lớn nhất")
elif c >= a and c >= b:
    print(f"{c} là số lớn nhất")

print("Type an integer")
max = a = int(input(">"))
b = int(input(">"))
c = int(input(">"))

if b > max:
    max = b

if c > max:
    max = c

print(f"{max} la so lon nhat trong 3 so [{a}, {b}, {c}]")

# 3. Viết chương trình yêu cầu nhập 3 số a, b, c tương ứng với độ dài 3 cạnh tam giác. Kiểm tra và in ra 3 số có tạo thành một tam giác hợp lệ hay không
# Ví dụ:
# Nhập cạnh a: 1
# Nhập cạnh b: 3
# Nhập cạnh c: 3
# [1 3 3] là một tam giác hợp lệ

print("Nhập cạnh a của tam giác")
side_a = int(input("> "))

print("Nhập cạnh b của tam giác")
side_b = int(input("> "))

print("Nhập cạnh c của tam giác")
side_c = int(input("> "))

if (side_a + side_b) > side_c and (side_a + side_c) > side_b and (side_b + side_c) > side_a:
    print(f"[{side_a} {side_b} {side_c}] là một tam giác hợp lệ") 
else:
    print(f"[{side_a} {side_b} {side_c}] không phải là một tam giác hợp lệ")

# # 4. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra 3 số là dãy tăng dần (a < b < c), giảm dần (a > b > c) hay không
# # Ví dụ:
# # Nhập số a: 1
# # Nhập số b: 2
# # Nhập số c: 3
# # [1 2 3] là dãy tăng dần

print("Nhập số a")
number_a = int(input("> "))

print("Nhập số b")
number_b = int(input("> "))

print("Nhập số c")
number_c = int(input("> "))

if number_a <= number_b and number_b <= number_c: 
    print(f"[{number_a} {number_b} {number_c}] là dãy số tăng dần")

elif number_a >= number_b and number_b >= number_c: 
    print(f"[{number_a} {number_b} {number_c}] là dãy số giảm dần")

else: 
    print(f"[{number_a} {number_b} {number_c}] không phải là dãy số giảm dần hay tăng dần")


# 5. Viết chương trình yêu cầu nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng alphabet (a-zA-Z) hay không
# Ví dụ:
# Nhập một ký tự: g
# 'g' thuộc bảng ký tự alphabet

print("Nhập một kí tự")
letter = str(input("> "))
if letter.isalpha() == True: 
    print(f"{letter} thuộc bảng kí tự alphabet")
else: 
    print(f"{letter} không thuộc bảng kí tự alphabet")

# 6. Viết chương trình yêu cầu nhập một tháng trong năm, kiểm tra và in ra mùa tương ứng
# Ví dụ:
# Nhập một tháng bất kỳ: 5
# Tháng 5 là mùa hè

print("Nhập tháng trong năm dưới dạng số")
month = int(input("> "))
if month == 1 or month == 2 or month == 3:
    print("Mùa xuân")
if month == 4 or month == 5 or month == 6:
    print("Mùa hạ")
if month == 7 or month == 8 or month == 9:
    print("Mùa thu")
if month == 10 or month == 11 or month == 12:
    print("Mùa đông")
else: 
    print("Không phải tháng trong năm")