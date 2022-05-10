# Backtracking algo
# TC: O(b^d), b is branching factor, d is depth of recursion
# Used to solve game playing strategies like TicTacToe

import math


def MinMax(curr, i, maxTurn, scores, target):
    if curr == target:
        return scores[i]

    if maxTurn:
        return max(MinMax(curr+1, i*2, False, scores, target), MinMax(curr+1, i*2 + 1, False, scores, target))
    else:
        return min(MinMax(curr+1, i*2, True, scores, target), MinMax(curr+1, i*2 + 1, True, scores, target))


scores = [-1, 8, -1, -3, 1, 2, -3, 4]
depth = math.log(len(scores), 2)
print('The optimal value = ', MinMax(0, 0, True, scores, depth))
