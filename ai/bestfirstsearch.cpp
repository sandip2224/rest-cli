// Informed, heuristic search algo

// C++ program to implement Best First Search using priority queue

// Let OPEN be a pq containing initial state
// LOOP
// 	If OPEN is empty return failure
// 	Node<-Remove top node from OPEN
// 	If node is goal node, return path from initial to goal node
// 	Else generate all successors of node and put newly generated nodes in OPEN in ascending order of heuristic values
// END LOOP

#include <bits/stdc++.h>
using namespace std;
typedef pair<int, int> pi;

vector<vector<pi>> graph;

void addedge(int x, int y, int cost)
{
	graph[x].push_back({cost, y});
	graph[y].push_back({cost, x});
}

// Gives output path having lowest cost
void best_first_search(int source, int target, int n)
{
	vector<bool> visited(n, false);
	// MIN HEAP priority queue
	priority_queue<pi, vector<pi>, greater<pi>> pq;
	pq.push({0, source});
	int s = source;
	visited[s] = true;
	while (!pq.empty())
	{
		int x = pq.top().second;
		// Displaying the path having lowest cost
		cout << x << " ";
		pq.pop();
		if (x == target)
			break;

		for (int i = 0; i < graph[x].size(); i++)
		{
			if (!visited[graph[x][i].second])
			{
				visited[graph[x][i].second] = true;
				pq.push({graph[x][i].first, graph[x][i].second});
			}
		}
	}
}

int main()
{
	// No. of Nodes
	int v = 14;
	graph.resize(v);
	addedge(0, 1, 3);
	addedge(0, 2, 6);
	addedge(0, 3, 5);
	addedge(1, 4, 9);
	addedge(1, 5, 8);
	addedge(2, 6, 12);
	addedge(2, 7, 14);
	addedge(3, 8, 7);
	addedge(8, 9, 5);
	addedge(8, 10, 6);
	addedge(9, 11, 1);
	addedge(9, 12, 10);
	addedge(9, 13, 2);

	int source = 0;
	int target = 9;

	best_first_search(source, target, v);

	return 0;
}