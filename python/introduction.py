print("What's your name?")
name = input(">") # > Nhắc mình nhập dữ liệu
print("Hello," + name)
print("nice to meet ya")

# Khai báo biến
name = "Trang"
age = "20"
job = "student"
is_cool = True

#Mỗi câu lệnh phải kết thúc trên một dòng
long_text = """
text 1 is short
text 2 is short
but text 1 and text 2 combine makes 1 long text
"""
 
a = b= c = d = e = f = 1
print(a)

a, b, c = 1, 2, 3

print(type(name))
print(type(is_cool))
print(type(None))
print(type(1.3))


# Khai báo biến w/Annotation
name: str = "Trang"
age: int = "20"
job: str = "student"
is_cool: bool = True

#Mutable vs. Immutable 
l = [1,2,3]
print(id(l))

l[0] = 100
print(id(l))

#string
name = "trang"
print(name[0]) #Braket notaiton - kí hiệu ngoặc vuông
print(len(name))

print(name[-1])

#3 cú pháp
# name[index]
#name[start:end] - không bao gồm end
#name[start:end:step]
print(name[0:2])
print(name[-2:])
print(name[::2]) #Lấy theo kí tự ở vị trí chẵn, bắt đầu từ 0 
print(name[-2:3])

hello = "Hi, I\'m Trang \"Tee\""
text = "Hello \\"
thutle = "\tHi, I\n Trang"
print(hello)
print(text)
print(thutle)

print("Hello, " + name)

#Nhúng giá trị, sử dụng: fast string f-string
print(f"hello, {name}") 

money = 1

# 0000001
# print(f"B{money:10}A") #In money đã nhúng với 10 kí tự , bất kể giá trị là bao nhiêu
# print(f"B{money":>10}A")

#In ra bảng f"{value:format}""
    # Căn phải >, căn trái <, căn giữa ^
print(f"{'STT':3} {'Ten HS':<10} {'Tuoi':<4}")
print(f"{1:>3} {'Trang':<10} {20:<4}")
print(f"{2:>3} {'Dung':<10} {21:<4}")
print(f"{3:>3} {'Trung':<10} {22:<4}")

#Format với số
v = 1.2345
print(f"{v:.3}")

newname = "ba nguyen"
print(newname.title())
print(newname.title())
print(newname.upper())
print(newname.capitalize())
print(newname.swapcase()) #chữ thường thành hoa --> Hoa thành thường
print(newname.count("a")) #đếm xem có bao nhiêu chữ a
print(newname.count(i)) #sẽ không báo lỗi
print(newname.index(i)) #sẽ báo lỗi
print(newname.find("i")) #tìm, nếu ko thấy sẽ không báo lỗi







