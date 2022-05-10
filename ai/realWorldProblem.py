# Travelling Salesman Problem


ans = []


def tsp(graph, visited, curr, n, count, cost):
    if count == n and graph[curr][0]:
        ans.append(cost+graph[curr][0])
    for i in range(n):
        if visited[i] == False and graph[curr][i]:
            visited[i] = True
            tsp(graph, visited, i, n, count+1, cost+graph[curr][i])
            visited[i] = False


n = 4
graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

vis = [False for i in range(n)]
vis[0] = True
tsp(graph, vis, 0, n, 1, 0)
print(min(ans))
