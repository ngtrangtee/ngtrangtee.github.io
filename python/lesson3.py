#CONDITION 
# var x = condition ? value_if_true : value_if_false

# var = value if condition else value (chỉ dùng để gán)
salary = 100 

is_happy = True if salary > 1000 else False 

print(is_happy)

#var x = condition 
#           ? value1
#           : condition 
#           ? value 3
#           : value4;

# value if condition 

# is_happy1 = "very happy" if salary > 1000 else "happy" if salary == 500 else "sad"
# print(is_happy1)

# # bài tập toán tử 3 ngôi
# #Viết chương trình yêu cầu nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng alphabet (a-zA-Z) hay không
# # Ví dụ:
# # Nhập một ký tự: g
# # 'g' thuộc bảng ký tự alphabet

# print("Nhập một kí tự")
# letter = input("> ")
# is_alphabet = f"{letter} thuộc bảng kí tự alphabet" if letter.isalpha() else f"{letter} không thuộc bảng kí tự alphabet"
# print(is_alphabet)

#FOR LOOP - lặp qua giá trị 
# __iter__() #khởi tạo vòng lặp 
# __next__() #tạo ra 

# #magic method
# __init__() #khởi tạo đối tượng

# name = "Tee Nguyen"

# it = name.__iter__()
# print(next(it))
# print(next(it))
# print(next(it))

# for char in name:
#     print(char)

# list = [1,2,3,4]
# for item in list: 
#     print(item)

# lặp từ 1 đến 19
# range()
# next(range())
# có 3 cú pháp
    # 1 giá trị - range(stop) start = 0, step = 1 
# for i in range(10):
#     print(i) #0-9
#     # 2 giá trị - range(start, stop) step = 1 
# for i in range(5,10):
#     print(i) #5-9
#     # 3 giá trị - range(start, stop, end)
# for i in range (1, 10, 2):
#     print(i) #1,3,5,7,9

# #BREAK, CONTINUE
#     #continue dừng vòng lặp hiện tại, chuyển sang vòng tiếp
#     #gặp break --> bỏ qua else
# for i in range(1, 10):
#     if (i > 5):
#         continue #mỗi khi gặp i không là chẵn, bỏ qua phần bên dưới, chuyển tiếp
#     else: print(i * i) #kết quả là 1,4,9,16, 25
# print("after loop")

#FOR ELSE 
# txt = "rainbow"

# for char in txt:
#     if char.lower == "*"
#         print(txt + " contains '*'")
#         break
# else:
#     print(txt + " not contains '*'")

# # dùng vòng lặp, kiểm tra có chứa kí tự x hay không
# x = "Ba Nguyen"
# for char in x:
#     if char.lower == "x"
#     print("text contains x")
#     break
# else:
#     print("text has no x")

# guess = None
# answer = 30 

# while guess != answer: 
#     guess = int(input("Thay Ba bnhieu tuoi?\n> "))

#     if guess == answer:
#         print("congrats")
#         break
#     else:
#         print("try again")

# i = 0
# while i < 5:
#     print(i)
#     i += 1
# else: #sẽ vẫn chạy đến else
#     print("Elseeeeeeee")

# while i:
#     print(i)
#     i += 1
#     if (i >= 5):
#         break #sẽ không chạy đến else nữa
# else:
#     print("elseeeeeee")

    #bài tập 

# 7. Viết chương trình yêu cầu nhập một số, in ra bảng cửu chương của số đó
# Ví dụ:
# Nhập một số (1 - 9): 5
# 5 x 1 = 5
# 5 x 2 = 10
# ...
print("Nhập 1 số")
number = int(input("> "))
i = 0
for i in range (1,11):
    print(i * number)

# 8. Viết chương trình yêu cầu nhập một số nguyên dương n, kiểm tra các số trong khoảng từ 1 - n
# - Nếu số chia hết cho 3 in ra Fizz
# - Nếu số chia hết cho 5 in ra Buzz
# - Nếu số chia hết cho 3 và 5 in ra FizzBuzz
# - Nếu không chia hết cho cả 3 và 5 in ra số đó

# Ví dụ:

# Nhập một số nguyên dương: 10
# 1
# 2
# Fizz
# 4
# Buzz
# ...

# 9. Viết chương trình yêu cầu người dùng nhập số nguyên dương n tính tổng tất cả các số chia hết cho 3 và 5 trong khoảng từ 1 -> n
# Ví dụ:
# Nhập một số nguyên dương: 10
# Tổng các số từ 1 đến 10 là 55

# 10. Viết chương trình yêu cầu người dùng nhập một loạt số, tính và in ra trung bình cộng của các số đó
# - Cho phép nhập số lượng số bất kỳ
# - In ra kết quả ngay lập tức với mỗi số nhập vào
# - Dừng nhập và in ra kết quả khi người dùng nhập 'q' hoặc 'c'


# Ví dụ:

# Nhập một số: 2
# Dãy số đã nhập: 2
# Trung bình cộng các số: 2.0
# Nhập một số: 5
# Dãy số đã nhập: 2 5
# Trung bình cộng các số: 3.5
# ...
# Nhập một số: q
# Exit!

sum = 0
count = 0
numbers = ""

while True:
    user_input = input("Nhập một số: ").lower()

    if user_input == 'q' or user_input == 'c':
        print("Quit...")
        break

    number = float(user_input)

    sum += number
    count += 1
    numbers += user_input + " "

    print(f"Dãy số đã nhập: {numbers}")
    print(f"Trung bình cộng: {sum / count}")