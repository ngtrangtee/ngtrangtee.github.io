# 1. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một giá trị số (index), hiển thị chuỗi được cắt từ 0 đến vị trí index
print("Nhập một chuỗi")
string = input(">")
print("Nhập một giá trị số (Index)")
index = input(">")
print(string[0:int(index)])

# # 2. Viết chương trình yêu cầu người dùng nhập tên, in ra tên viết tắt theo mẫu:
# # Ví dụ:
# # Nhập tên: Ba Nguyễn
# # Ba Ng.
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