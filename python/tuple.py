# #tupple - giống list, nhưng read-only - không thể thêm, xóa, sửa; chỉ hỗ trợ count và index
# #toán tử vẫn ok nhưng sẽ tạo tupple mới

# #set: biến thành duy nhất
#     # có một số toán tử đặc biệt
# s1 = {1,2,3}
# s2 = {4,6,7}

# print(s1 | s2) #union
# print(s1 & s2) #intersection
# print(s1 - s2) #difference
# print(s1^s2) #symmetric differnece = everything but intersection

#     #không đánh chỉ mục nên không truy cập qua indexx được

# #dictionary -Giống object trong javascript
#     #các cặp key:value
#     # key chỉ có thể là immutable (str, int, num...)
#     # value có thể là bất kì

# point = dict(x=1, y="234", z=dict(j="WTF?"))
# point["z"]["j"]
# del point["y"] #xóa

#     #khi truy cập key không tồn tại sẽ gây lỗi
# if "x" in point:
#     print(point["x"])
#         # hoặc dùng
# point.get("x", None)


# d = dict()
# d.update({"y":2})
# print(d)

#     #lặp qua dictionary
# for key in point:
#     print(key, point[key])

    #Dictionary comprehension - Ít dùng vì khó chỉnh được key


# Generator expression: Khoowei tạp giá trị mới mỗi vòng lặp, ko lưu toàn bộ giá trị trong bộ nhớ --> chiếm ít bộ nhớ hơn
# Tìm

#Bài tập 
#Tìm kí tự có số lần xuất hiện nhiều nhất trong một chuỗi, không tính khoảng trắng
# sentence = "This is a common interview question"

#tạo dictionary 

sentence = "This is a common interview question"

def max_char(s):
    d = dict()

    for char in s: 
        if char == " ":
            continue
    
        if char in d:
            d[char] += 1
        else:
            d[char] = 1

    max = 0
    key = None
    for k, v in d.items():
        if v > max:
            max = v
            key = k
        
    return (key,max)

print(max_char(sentence))


