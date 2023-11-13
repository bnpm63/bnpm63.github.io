def draw_triangle(h):
    for i in range(h):
        print(" " * (h - i - 1) + "*" * (i*2 + 1))

if __name__ == '__main__':
    done = False  
    while not done:
        height = int(input("Please enter the height of a triangle: "))  
        draw_triangle(height)
        ans = input("Do you want to quit? [Y/N]: ").upper()
        if ans == "Y":
            done = True  
