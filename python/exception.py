# try:
#     1 + "A"
#     number = int(input("Enter a Number: "))
# except ValueError as e: 
#     print("ValueError: ", e)
# except TypeError as e:
#     print("Type Eror: ", e)
# print("After try except block")

# # try:
# #     f = open(path.join(path.dirname(__file__),"data.txt")
# #     data = f.read()
# #     print(data)
# # except ValueError as e:
# #     print("ValueError: " , e)
# # except TypeError as e: 
# #     print("TypeError: ", e)

# # chur ddoong

# def calc(n: float) -> float:
#     """
#     if n = 0 raise ValueError
#     """
#     if n == 0: 
#         raise ValueError("'n' cannot be 0")

#     return 10 / n

# try: 
#     print(calc(0))
# except ValueError as e:
#     print("ValueError: ", e)

# Viết chương trình nhập số bất kì, tìm số lớn nhất, nhỏ nhất
# sẽ dừng khi người dùng nhập q
# Khi giá trị nhập không đúng --> Thông báo người dùng

def find_min_max():
    max = None
    min = None
    numbers = ''

    while True:
        ui = input("Nhập một số: ").lower()

        if ui == 'q' and not max:
            return

        if ui == 'q' and max:
            print(f"Dãy số đã nhập: {numbers}")
            print(f"Số lớn nhất: {max}")
            print(f"Số nhỏ nhất: {min}")

            return

        numbers += ui + " "

        if not max:
            max = min = ui
        else:
            try: 
                number = float(ui)
            except ValueError as error:
                print("Giá trị không phải là số")
                continue

            if number > float(max):
                max = ui

            if number < float(min):
                min = ui

find_min_max()
