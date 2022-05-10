# Constraint Satisfaction Problem (sudoku)

def isValid(grid, row, col, num):
    for i in range(9):
        if(grid[row][i] == num):
            return False
    for i in range(9):
        if(grid[i][col] == num):
            return False

    cornerRow = row-row % 3
    cornerCol = col-col % 3

    for i in range(3):
        for j in range(3):
            if(grid[cornerRow+i][cornerCol+j] == num):
                return False

    return True


def solve(grid, row, col):
    if(col == 9):
        if(row == 8):
            return True
        else:
            row = row+1
            col = 0

    if(grid[row][col] > 0):
        return solve(grid, row, col+1)

    for i in range(1, 10):
        if(isValid(grid, row, col, i)):
            grid[row][col] = i
            if(solve(grid, row, col+1)):
                return True
        grid[row][col] = 0

    return False


def Print(grid):
    for i in range(9):
        for j in range(9):
            print(grid[i][j], end=" ")
        print()


grid = [[2, 5, 0, 0, 3, 0, 9, 0, 1],
        [0, 1, 0, 0, 0, 4, 0, 0, 0],
        [4, 0, 7, 0, 0, 0, 2, 0, 8],
        [0, 0, 5, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 9, 8, 1, 0, 0],
        [0, 4, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0, 7, 2],
        [0, 7, 0, 0, 0, 0, 0, 0, 3],
        [9, 0, 3, 0, 0, 0, 6, 0, 4]]

if(solve(grid, 0, 0)):
    Print(grid)
else:
    print("Solution doesn't exist")
