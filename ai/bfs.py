import collections


def bfs(graph, root):
    visited = set()
    q = collections.deque([root])

    while q:
        node = q.popleft()
        visited.add(node)
        for i in graph[node]:
            if i not in visited:
                q.append(i)
    print(visited)


if __name__ == '__main__':
    graph = {
        0: [1, 2, 3],
        1: [0, 2],
        2: [0, 1, 4],
        3: [0],
        4: [2]
    }

    bfs(graph, 0)
