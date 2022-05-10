def towerOfHanoi(n, src, dest, aux):
    if n == 0:
        return
    towerOfHanoi(n-1, src, aux, dest)
    print('Moving disk ', n, 'from', src, '->', dest)
    towerOfHanoi(n-1, aux, dest, src)


n = 3
towerOfHanoi(n, 'A', 'C', 'B')
