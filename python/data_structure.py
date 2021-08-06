# l = [1, None, True, "ba", 0, [], (1,), {2, 3}]
# # nhân 3 lần
# print(l*3)

# # print(l = list("ba")) #Iterable (range, chuỗi)

# #lấy số lượng phần tử của 1 list
# # print(len(l))

# #lặp qua list
# for value in l:
#     print(value)

# #copy 
# other = l
#     #khi thay đổi l thì other sẽ ko bị thay đổi

# #pop có thể phát sinh lỗi =, mấy cái còn lại của list thì không

# l.append("hhahaaa")
# l.insert(3, "Insert heare")
# l.insert(10, "new") # khi vượt ngoài range, sẽ insert đoạn cuối
# l.insert(-10, "so am")

# try: 
#     l.index(10)
# except ValueError as error:

# if 10 in l 

# l.sort(reverse=True)

# l2 =  [
#       [1,3,2],
#       [2,1,5],
#       [1,2,1],
#       [3,3,3]
# ]
# l2.sort()
# print(l2)

# def sort_by_2nd_column(row):
#     return row[1] #giá trị thứ 2

# l2.sort(key=)

# s.split #sẽ phân tách thành các dấu cách

#Bài tập

# 1. Viết chương trình gợi ý người dùng nhập một dãy số tùy ý (phân tách bằng dấu cách), lưu vào một list. Sắp xếp list số đã nhập, sau đó, tìm và hiển thị số lớn thứ 3 (Lưu ý trường hợp nhiều số trùng nhau)
# Ví dụ:
# Nhập dãy số: 1 43 53 53 32 65 43 10
# List of numbers: [1 10 32 43 43 53 53 65]
# Số lớn thứ 3 trong dãy đã nhập là 43
print("Nhập dãy số phân cách bằng dấu ' ' - space")
l = input("> ").split()
try:
    for index, value in enumerate(l):
        l[index] = int(value)

    print(l) #trong trường hợp đổi hết đúng
except ValueError as error:
    print("Dãy số đã nhập không hợp lệ")

sort = sorted(list(set(l)),reverse=True) 
print(sort[2])











# 2. Viết chương trình đếm số phần tử có kiểu str trong một list
# Ví dụ:
# l = ["a", "b", 1, 2, "c", True, False]
# Kết quả
# # 3

# def count_str(s):
#     count = 0
#     for value in s: 
#         if type(value) == str:
#             count += 1
#         return count
# print(count_str(["a", "b", 1, 2, "c", True, False]))

