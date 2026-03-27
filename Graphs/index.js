// Traversing a graph

function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return
  console.log(start)

  visited.add(start)

  for (let neighbor of graph[start]) {
    dfs(graph, neighbor, visited)
  }
}

// Example
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: []
}

dfs(graph, 'A')

//Traverse a graph level by level

function bfs(graph, start) {
  const queue = [start]
  const visited = new Set([start])

  while (queue.length) {
    const node = queue.shift()
    console.log(node)

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
  }
}

// Check if an undirected graph has a cycle.

function hasCycle(graph) {
  const visited = new Set()

  function dfs(node, parent) {
    visited.add(node)

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true
      } else if (neighbor !== parent) {
        return true
      }
    }

    return false
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true
    }
  }

  return false
}

//Count disconnected groups in a graph.

function countComponents(graph) {
  const visited = new Set()
  let count = 0

  function dfs(node) {
    if (visited.has(node)) return
    visited.add(node)

    for (let neighbor of graph[node]) {
      dfs(neighbor)
    }
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node)
      count++
    }
  }

  return count
}