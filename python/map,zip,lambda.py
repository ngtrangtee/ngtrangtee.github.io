# from homework4 import print_number_pattern


# def sort_by():
#     pass

# [1,2,4,5,4,2].sort(key=sort_by)

# #Viết nhiều hàm không dùng sẽ lãng phí bộ nhớ nên sẽ dùng các hàm ẩn danh, dùng 1 lần rồi xóa 
# #lamba function (py) = arrow function in js

# #lamba parameter_list: expression 

# #Javascript
# # let sum = (...args) -> {
# #     let total = 0
# #     for (let value of args) {
# #         total += value
# #     }
# #     return total
# # }

# #Python 
# def sum (*args):
#     total = 
#     for value in args:
#         total += value 
#     return total

# def sum(a, b):
#     return a + b
# #equals to this lambda
# sum = lambda a,b : a + b 
# result = sum(1,2)
# print(result)

# second example: 
# l = [
#     [1,2,3], 
#     [3,3,1],
#     [2,0,3],
#     [1,1,1],

# ]

# #dùng lambda để sort
# l.sort(key=lambda child: child[1])
# print(l)
# #in ra cho đẹp
# for child in l: 
#     print(child)

# #map function - biến đổi list thành 1 list mới
#     # javascript 
#     # a.forEach(i => console.log(i *10))
#     #a.map(i => i*i)

#     #python 
# _l = [1,3,5,7,9]

# _l_map  = list(map(lambda i:i*i, _l))
# print(_l_map)

# # filter: lọc theo điều kiện 
#     # javascript
#     # a.filter(i => i >= 6) 

#     # python 
# _l_filter = list(filter(lambda i: i > 6, _l))
# print(_l_filter)

# #List Comprehension  - cú pháp thay thế map và filter
# devices = [
#     ("Iphone 12", 1299), 
#     ("Samsumg", 1199), 
#     ("Nokia", 29814)
#     ("Blackberry", 300),
# ]

#     # only return number from that list
#     # lambda
# devices_price = map(lambda d: d[1], devices))
# print(devices_price)

#     #List comprehension 
# devices_price1 = [d[1] for d in devices]
# print(devices_price1)

#     #devices over 1000
# devices_1000 = [d for d in devices if d[1] > 1000]
# print(devices_1000)


# #Zip function 
#     #sẽ bỏ qua các phần tử thừa

# #List unpacking 
#     #cho phép gán giá trị trong list cùng lúc cho nhiều biến
#     # nhưng số lượng phải tương ứng 
# a,b,c = [1,2,3]

# a,b, *args = [1,2,3,4] #chỉ lấy hai giá trị dầu là 1,2 bỏ qua các giá trị phía sau

# Bài tập với List
# Biết hàm để cộng dồn các chuỗi vào
# 4. Viết chương trình cộng giá trị của 2 hoặc nhiều List chứa các số nguyên (lưu ý số lượng phần tử trong các List có thể khác nhau, cộng giá trị các phần tử có index tương ứng).
# Ví dụ:
l1 = [1, 2, 3]
l2 = [3, 4, 5, 6]
l3 = [5]
# Kết quả
# l4 = [9, 6, 8, 6]

# Pseudo code -> test case
# lặp từ 0 đến độ dài của list lớn nhất, nếu index nhỏ hơn độ dài
# với mỗi index, cộng các phần tử có cùng index đó lại với nhau
# Lặp mỗi lần tìm ra index, cho vào list mới. 

# def sum_list(*lists):
#     lists = list(lists)
#     result = list()

#     _len = [len(l) for l in lists]
#     max_len = max(*_len)

#     for i in range(max_len): 
#         sum = 0
#         for l in lists: 
#             if i < len(l):
#                 sum += l[i]

#         return result

# print(sum_list(l1,l2,l3))

#Sắp xết các chữ số của 1 số sao cho giá trị sau khi sắp xếp là nhỏ nhất (lưu ý giữ nguyên số lượng các chữ số)
#Cho một số
#Tách số đó thành 1 list gồm các hàng trong số đó
# đặt số ở vị trí index = 0 là min
# lặp qua list, Nếu số nào < số ở vị trí index 0 --> số đó là min
# tìm số có giá trị bằng 0 trong list, insert vào sau số có giá trị 

def sort_number(n):
    number_list = list(str(n)
    )
    for i,v in enumerate(number_list):
        try: 
            number_list[i] = int(v)
        except ValueError as error:
            pass

    if n < 0:
        number = number_list[1:]
        number.sort(reverse = True)
        number_list = number_list[0:1] + number
    else:
        number_list.sort()
        if number_list[0] == 0:
            for i, v in enumerate(number_list):
                if v != 0:
                    number_list[0], number_list[i] = number_list[i], number_list[0]
                    break
    return int("".join([str(i) for i in number_list]))

print(sort_number(12304))







