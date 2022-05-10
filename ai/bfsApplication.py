# Check if there is a cycle in directed graph using BFS.
# TC: O(V+E)

import math
import sys
from collections import defaultdict

# Class to represent a graph


class Graph:
    def __init__(self, vertices):
        self.graph = defaultdict(list)
        self.V = vertices  # No. of vertices

    def addEdge(self, u, v):
        self.graph[u].append(v)


def isCycleExist(n, graph):

    # Create a vector to store indegrees of all
    # vertices. Initialize all indegrees as 0.
    in_degree = [0]*n

    # Traverse adjacency lists to fill indegrees of vertices.
    for i in range(n):
        for j in graph[i]:
            in_degree[j] += 1

    # Create an queue and enqueue all vertices with indegree 0
    queue = []
    for i in range(len(in_degree)):
        if in_degree[i] == 0:
            queue.append(i)

    # Initialize count of visited vertices
    cnt = 0

    # One by one dequeue vertices from queue and enqueue adjacents if indegree of adjacent becomes 0
    while(queue):
        nu = queue.pop(0)

        for v in graph[nu]:
            in_degree[v] -= 1

            # If in-degree becomes zero, add it to queue
            if in_degree[v] == 0:
                queue.append(v)
        cnt += 1

    # Check if there was a cycle
    if cnt == n:
        return False
    else:
        return True


if __name__ == '__main__':
    g = Graph(6)
    g.addEdge(0, 1)
    g.addEdge(1, 2)
    g.addEdge(2, 0)
    g.addEdge(3, 4)
    g.addEdge(4, 5)

    if isCycleExist(g.V, g.graph):
        print("Yes cycle exists")
    else:
        print("No cycle doesn't exist")
