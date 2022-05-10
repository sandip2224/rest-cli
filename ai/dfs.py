import collections
visited = set()


def dfs(visited, graph, root):
    if root not in visited:
        print(root)
        visited.add(root)
        for i in graph[root]:
            dfs(visited, graph, i)


if __name__ == '__main__':
    graph = {
        0: [1, 2, 3],
        1: [0, 2],
        2: [0, 1, 4],
        3: [0],
        4: [2]
    }

    dfs(visited, graph, 0)
