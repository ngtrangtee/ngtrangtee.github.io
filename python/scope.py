y = 100
def scope():
    x = 10 
    print(x)
    # global y #để biến nó thành global
    y = 10
    print("Inside function: ", y) #10

scope()
print("Outside function: ", y) #100
#print(x) #error

#Encapsoation -  Best practice hàm nên hoạt động độc lập
# hàm không có tính tái sử dụng
# hàm không phụ thuộc vào biến bên ngoài - không truy cập trực tiếp đến biến bên ngoài (trừ khi sử dụng parameter)

#Default Parameter
# có giá trị value = None để 
def scope(value=None):
    print("Inside function: ", value)

scope(100)


def scope(a = 0, b = 1): #positional argument; cái nào đứng trước được truyền trước
    print(a + b) # b = 10 -> 10

scope(10)

#truyền vào b - dùng keyword argument
def scope(a = 0, b = 1): #positional argument; cái nào đứng trước được truyền trước
    print(a + b) # b = 10 -> 10

scope(b=10)


#keyword arguement
def scopr(*, a, b):
    print(a+b)

scope(a=1, b=2)
# 
range(1,2,3)

########## argument
def sum(args): #arguments
    print(args)

sum(1,2,3,4,5,6,7)

def sum(a, b, *args):
    total = 0

    for i in args:
        total += i

    return total

total = sum(1,2,3,4,5,6,7) #tuple -> iterable, tối thiểu ph có 2 giá trị a,b; a = 1, b =2 thì args = 3,4,5,6,7
print(total) #28



