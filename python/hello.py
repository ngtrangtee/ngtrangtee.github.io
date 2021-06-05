file = open("text.txt", "r", encoding="utf8")
data = file.read()
search = input("Nhập từ cần tìm:")

#Đếm từ đó xuất hiện bao nhiêu lần
print(data.count(search))

#in hoa từ đó
print(data.upper(search))

# hiển thị cậu chứa từ đó
sentences = data.split(".")
if search in sentences:
    print(sentences)

# #Hightlight những từ đó
# print(data.upper(search))

# In câu chứa từ đó 



#Tìm các từ "bệnh"
# Hiển thị kết quả
# Đếm có bn từ xuất hiện trong file
# Highlight những từ đó (in hoa)
# In ra câu đầu tiên chứa từ đó
# .Câu thì kết thúc bằng dấu.
