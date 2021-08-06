# #Cấu trúc điều khiển

# print("how old are you?")
# age = int(input(">"))

# if age > 18: 
#     print("Ok, can access")
#     print("Ok, can access")
#     print("Ok, can access")
# elif age > 15:
#     print("ask parents")
# else:
#     print("can't see")


# #Bài tập
# # 1. Viết chương trình yêu cầu nhập một số nguyên n, kiểm tra và in ra số đó có chia hết cho cả 3 và 5 hay không
# # Ví dụ:
# # Nhập một số nguyên: 5
# # 5 không chia hết cho cả 3 và 5
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