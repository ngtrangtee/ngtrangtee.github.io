# # 7. Viết hàm in ra chữ số đầu và cuối của một số, VD: 12345 -> 15
def first_last_digit(n):
    number = str(n)
    print(f"first digit: {number[0]}; last digit: {number[-1]}")

first_last_digit(200920293)
# 8. Viết hàm kiểm tra một số có phải số Strong hay không (? Số Strong là số có tổng giai thừa các chữ số bằng chính nó). VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
    # Find factorial 
def factorial(n):
    f = 1

    for i in range(1, n+1):
        f = f * i
    return f

    # Check strong
def check_strong(n):
    number_copy = n
    strong_sum = 0

    while n:
        remainder = n % 10
        strong_sum += factorial(remainder)
        n //= 10
    if strong_sum == number_copy: 
        print (f"{strong_sum} is a strong number")
    else:
        print (f"{strong_sum} is not a strong number")
        

check_strong(145) 

# 9. Viết hàm print_number_pattern(n)
#  in ra theo mẫu sau
# VD: n = 5
#  1
#  2  1
#  3  2  1
#  4  3  2  1
#  5  4  3  2  1
def print_number_pattern(n):
    for i in range(1, n + 1):

        s = ''
        for j in range(i, 0, -1):
            s += f"{j:<3}"
        print(s)
print_number_pattern(5)

# 10. Viết hàm convert_temperature(temp, f, to) chuyển đổi nhiệt độ từ thang 'from' sang thang 'to'
# VD: convert_temperature(30, 'C', 'F') -> chuyển đổi nhiệt độ từ 30*C -> *F
# 3 thang nhiệt Celcius, Farenheit, Kevin

def convert_temperature(temp, f, t):
    if f == 'C':
        if t == 'F':
            return temp * 1.8 + 32
        elif t == 'K':
            return temp + 273.15
        else:
            return temp
    if f == 'K':
        if t == 'C':
            return temp - 273.15
        elif t == 'F':
            return temp * 1.8 - 459.67
        else:
            return temp 
    if f == 'F':
        if t == 'C': 
            return (temp - 32) / 1.8
        if t == 'K':
            return (temp - 32) * 5/9 + 273.15
def test():
    assert convert_temperature(1, 'C', 'F') == 33.8
    assert convert_temperature(40, 'C', 'F') == 104
    assert convert_temperature(1, 'C', 'K') == 274.15
    assert convert_temperature(40, 'C', 'K') == 313.15

    assert convert_temperature(5, 'F', 'K') == 258.15
    assert convert_temperature(14, 'F', 'K') == 263.15
    assert convert_temperature(41, 'F', 'C') == 5
    assert convert_temperature(59, 'F', 'C') == 15

    assert convert_temperature(1, 'K', 'C') == -272.15
    assert convert_temperature(276, 'K', 'C') == 2.85
    assert convert_temperature(305, 'K', 'F') == 89.33
    assert convert_temperature(5, 'K', 'F') == -450.67

# 11. Viết hàm tính và trả về kết quả của phép trừ giữa tích và tổng tất cả chữ số của một số
# VD: 123 -> 1  2  3 - (1 + 2 + 3) = 0
def product_minus_sum(list):
    product = 1
    sum = 0
    for i in list:
        product = product * i
        sum = sum + i
    print (product - sum)
 
product_minus_sum([1, 2, 3])

# 12. Viết hàm is_triangle(a, b, c) nhận vào tham số là 3 cạnh của tam giác, kiểm tra xem độ dài 3 cạnh có tạo thành tam giác hợp lệ hay không, kết quả trả về True hoặc False
# VD: is_triangle(1, 2, 4) -> True
def is_triangle(a, b, c):
    if (a + b > c) and (a + c > b) and (b + c > a):
        print(True)
    else:
        print(False)  

is_triangle(1, 2, 4)

# 13. Viết nearest(a, b) kiểm tra và trả về số gần với 100 nhất
# VD: nearest(105, 99) -> 99
import math
def nearest(a, b):
    first = abs(a-100)
    second = abs(b-100)

    if first < second:
        print(f"{a} gần với 100 hơn")
    elif first > second: 
        print(f"{b} gần với 100 hơn")
    else:
        print(f"Hai số {a} {b} bằng nhau")

nearest(105, 99)

# 14. Viết hàm sum(value1, unit1, value2, unit2) nhận vào 2 tham số value1 và value2 là giá trị độ dài, unit1 và unit2 là đơn vị độ dài. Quy đổi giá trị unit2 về cùng đơn vị với unit1, tính và in ra tổng giá trị
# VD: sum(1, 'km', 100, 'm') -> 1.1 km

# def other_t_mm(value, unit):
#     if unit == "km":  # 1 km = 1.000.000 mm = 10^6
#         return value * 10**6
#     elif unit == "m":  # 1 m = 1.000 mm = 10^3
#         return value * 10**3
#     elif unit == "dm":  # 1 cm = 100 mm => 10^2
#         return value * 10**2
#     elif unit == "cm":
#         return value * 10
#     elif unit == "mm":
#         return value
#     elif unit == "nm":  # 1 nm = 0.000001 = 10^-6
#         return value * 10**-6
#     elif unit == "in":  # 1 in = 25.4 mm
#         return value * 25.4
#     elif unit == "mile":  # 1 mile = 1609344 mm
#         return value * 1609344
#     else:
#         return None


# def mm_to_other(value, unit):
#     if unit == "km":  # 1 km = 1.000.000 mm = 10^6
#         return value / 10**6
#     elif unit == "m":  # 1 m = 1.000 mm = 10^3
#         return value / 10**3
#     elif unit == "dm":  # 1 cm = 100 mm => 10^2
#         return value / 10**2
#     elif unit == "cm":
#         return value / 10
#     elif unit == "mm":
#         return value
#     elif unit == "nm":  # 1 nm = 0.000001 = 10^-6
#         return value / 10**-6
#     elif unit == "in":  # 1 in = 25.4 mm
#         return value / 25.4
#     elif unit == "mile":  # 1 mile = 1609344 mm
#         return value / 1609344
#     else:
#         return None


# def sum(v1, u1, v2, u2):
#     result = other_to_mm(v1, u1) + other_to_mm(v2, u2)
#     return f"{mm_to_other(result, u1)} {u1}"


# print(sum(1, 'in', 1, 'km'))