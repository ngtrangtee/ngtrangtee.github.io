file = open("text.txt", "r", encoding="utf8")
data = file.read()
search = input("Nhập từ cần tìm:")

#Đếm từ đó xuất hiện bao nhiêu lần
print(f"Có {data.count(search)} từ '{search}' xuất hiện trong file")
print(data.replace(search, search.upper()))

first_word = data.find(search)
start = data.rfind(".", 0, first_word)
end = data.find(".", first_word)

print()
print("Câu đầu tiên xuất hiện từ khóa:")
print(data[start + 1:end].strip().replace(search, search.upper()))