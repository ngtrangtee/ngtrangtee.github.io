# def sum(a, b):
#     print(a + b)

# result = sum(1,2)

# def greeting(name):
#     print(f"Hello, {name}!")

# greeting("trang")
# print(sum(1,2)) #sẽ ra None vì

# # Mọi khi gọi hàm thì kết quả luôn là 1 giá trị --> Python: None; JS: undefined
# #sau khi nó chạy xong, nó sẽ ra giá trị
# #retun để ngắt hàm - ưu tiên dùng return khi dùng hàm
# def sum(a,b):
#     return a+b 
# result = sum(1,2)
# print(result)

# def is_even(number):
#     if number % 2 == 0:
#         return True
#     else: 
#         return False

# if is_even(5):
#     print(5 + " la so chan")
# else:
#     print( 5, "la so le")

# def sum(a: float, b: float) -> float:
#     """
#     Trả về tổng giá trị các tham số

#     các tham số:
#     ```python
#     - `a: int`
#     - `b: int`
#     ```

#     Giá trị trả về
#     ```python
#     - result: int
#     """
#     return a+b
# sum(1,2)

#cú pháp markdown -
#sau này làm việc nhóm lớn, sẽ cần phải viết docstring này để giúp người khác đọc và sử dụng


# Bài tập
# 1. Viết hàm find_min_max() cho phép nhập một số lượng "số nguyên dương" bất kỳ, in ra số lớn nhất, nhỏ nhất. Dừng và in ra kết quả khi nhập 'q' hoặc 'c'. Lưu ý không sử dụng list, tuple, ... và các phương thức math.min(), math.max()
# Ví dụ:
# Enter number: 12
# Enter number: 15
# Enter number: 11
# Enter number: 8
# Enter number: 3
# Enter number: 21
# Enter number: q -> end, then print
# List of number: 12 15 11 8 3 21
# Largest number: 21
# Smallest number: 3

# dùng vòng lặp while
# in ra kết quả số lớn nhất, số nhỏ nhất


# numbers = ""
# max = 0
# while True:
#     user_input = input("Enter a number: ").lower()

#     numbers += user_input + " "

#     if user_input == 'q' or user_input == 'c':
#         print(f"List of number: {numbers}")

# def find_min_max():
#     max = None
#     min = None
#     numbers = ''

#     while True:
#         ui = input("Nhập một số: ").lower()

#         if ui == 'q' and not max:
#             return

#         if ui == 'q' and max:
#             print(f"Dãy số đã nhập: {numbers}")
#             print(f"Số lớn nhất: {max}")
#             print(f"Số nhỏ nhất: {min}")

#             return

#         numbers += ui + " "

#         if not max:
#             max = min = ui
#         else:
#             number = float(ui)

#             if number > float(max):
#                 max = ui

#             if number < float(min):
#                 min = ui


# find_min_max()

# 2. Viết hàm print_fibonacci(n) in ra n số trong dãy fibonacci. Mặc định số thứ nhất và 2 là 0 1
# Ví dụ:
# print_fibonacci(10)
# 0 1 1 2 3 5 8 13 21 34

# def print_fibonacci(n):
#     """
#     Fibonacci: số sau bằng tổng 2 số trước đó
#     """
#     a = 0
#     b = 1
#     c = None

#     if n <= 2:
#         print("n phải lớn hơn bằng 2")

#     fi = f"{a} {b} "

#     for i in range(0, n - 2):
#         c = a + b
#         fi += f"{c} "
#         a, b = b, c

#     print(fi)


# print_fibonacci(10)
# # 3. Viết hàm print_pattern() in ra theo mẫu sau

# # 1  2  3  4  5  6  7  8  9 10
# # 2  4  6  8 10 12 14 16 18 20
# # 3  6  9 12 15 18 21 24 27 30
# # ...
# def print_pattern():
#     s = ''
#     for i in range(1,11):
#         # i = 2
#         # s = '' 1 2 3 4 5 6 7 8 9 10 2 4 6 8 10 12 14 16
#         for j in range (1,11):
#             n = i + j
#             s += f"{n:<4}"
#         print(s)

# print_pattern()
        
# # 4. Viết hàm is_leap_year(year) kiểm tra xem một năm có phải năm nhuận hay không, kết quả trả về là True hoặc False, lưu ý về các trường hợp của năm nhuận
# def is_leap_year(year):
#     """
#     - Năm nhuận là năm chia hết cho 400
#     - hoặc chia hết cho 4 nhưng ko chia hết cho 100

#     VD: 
#     - 2000 là năm nhuận vì chia hết cho 400
#     - 2100 không phải năm nhuận vì chia hết cho 100 
#     - 2104 là năm nhuận, vì chia hết cho 4 nhưng không chia hết cho 100
#     """

#     if year % 400 == 0:
#         return True
#     elif year % 100 == 0:
#         return False
#     elif year % 4 == 0:
#         return True

# print(is_leap_year(2000)) #true
# print(is_leap_year(2100))
# print(is_leap_year(2104))
# print(is_leap_year(2000))

# #or
# def is_leap_year1(year):
#     return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

# print(is_leap_year1(2000))  # True
# print(is_leap_year1(2100))  # False
# print(is_leap_year1(2104))  # True
# print(is_leap_year1(2240))  # True

# # 5. Viết hàm tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0, hàm nhận 3 tham số a, b, c, in ra nghiệm phương trình, lưu ý điều kiện phương trình


# # 6. Viết hàm kiểm tra một số có phải số nguyên tố hay không, kết quả trả về True hoặc False
# def is_prime(n: int) -> bool:
#     """
#     Số nguyên tố là số chia hết cho 1 và chính nó

#     VD: 
#     - 5 là số nguyên tố vì chỉ chia hết cho 1 và 5
#     - 10 không phải là số nguyên tố
#     """
#     for i in range(2,n):
#         if n % i == 0:
#             return False

#     # nếu hết vòn lặp mà khoogn gặp câu lệnh return thì sẽ thoát ra khỏi vòng lặp 
#     return True

# print(is_prime(2))
# print(is_prime(3))
# print(is_prime(11))
# print(is_prime(12))
# print(is_prime(15))

#  7. Viết hàm in ra chữ số đầu và cuối của một số, VD: 12345 -> 15


# 8. Viết hàm kiểm tra một số có phải số Strong hay không (? Số Strong là số có tổng giai thừa các chữ số bằng chính nó). VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145


# 9. Viết hàm print_number_pattern(n)
#  in ra theo mẫu sau
# VD: n = 5
#  1 -> i = 1, j = 1
#  2  1 -> i = 2, j = 2 - 1
#  3  2  1 -> i = 3, j = 3 - 1
#  4  3  2  1 -> i = 4, j = 4 - 1
#  5  4  3  2  1

# i -> 1 - n 
# j -> i - 1

def print_number_pattern(n):
    for i in range(1, n + 1):


        s = ''
        for j in range(i, 0, -1): #chạy ngược
            s += f"{j:,3}"
        
        print(s)

print_number_pattern(5)


# 10. Viết hàm convert_temperature(temp, from, to) chuyển đổi nhiệt độ từ thang 'from' sang thang 'to'
# VD: convert_temperature(30, 'C', 'F') -> chuyển đổi nhiệt độ từ 30*C -> *F
# 3 thang nhiệt Celcius, Farenheit, Kevin

# 11. Viết hàm tính và trả về kết quả của phép trừ giữa tích và tổng tất cả chữ số của một số
# VD: 123 -> 1  2  3 - (1 + 2 + 3) = 0


# 12. Viết hàm is_triangle(a, b, c) nhận vào tham số là 3 cạnh của tam giác, kiểm tra xem độ dài 3 cạnh có tạo thành tam giác hợp lệ hay không, kết quả trả về True hoặc False
# VD: is_triangle(1, 2, 4) -> True


# 13. Viết nearest(a, b) kiểm tra và trả về số gần với 100 nhất
# VD: nearest(105, 99) -> 99

# 14. Viết hàm sum(value1, unit1, value2, unit2) nhận vào 2 tham số value1 và value2 là giá trị độ dài, unit1 và unit2 là đơn vị độ dài. Quy đổi giá trị unit2 về cùng đơn vị với unit1, tính và in ra tổng giá trị
# VD: sum(1, 'km', 100, 'm') -> 1.1 km


# 9. Viết hàm print_number_pattern(n) in ra theo mẫu sau
# VD: n = 5
#  1
#  2  1
#  3  2  1
#  4  3  2  1
#  5  4  3  2  1


        




            