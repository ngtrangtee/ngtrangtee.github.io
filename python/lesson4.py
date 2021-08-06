# 14. Viết hàm sum(value1, unit1, value2, unit2) nhận vào 2 tham số value1 và value2 là giá trị độ dài, unit1 và unit2 là đơn vị độ dài. Quy đổi giá trị unit2 về cùng đơn vị với unit1, tính và in ra tổng giá trị
# VD: sum(1, 'km', 100, 'm') -> 1.1 km
def sum(value1, unit1, value2, unit2):
    if unit1 == "km":
        if unit2 == "km":
            return value1 + value2
        elif unit2 =="m":
            return value1 + value2/1000
    elif unit1 =="m":
        if unit2 == "km":
            return value1 + value2 * 1000
        elif unit2 =="km"

sum(1,'km',100,'m')

def other_to_mm(value, unit):
    if unit == "km":
        return value * 10**6
    elif unit == "m":
        return value * 10**3
    elif unit == "cm": #1 cm = 100 mm -> 10^2
        return value * 10**2
    elif unit == "cm":
        return value * 10
    elif unit == "mm":
        return value
    elif unit == "nm":
        return value * 10
    elif unit == ""
