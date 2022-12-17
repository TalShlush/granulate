from db.in_memory_db import InMemoryDB


class GraphDao:
    def get_graphs(self, id):
        if id not in InMemoryDB.graph:
            raise RuntimeError('Could not find graph with id {0}'.format(id))
        return InMemoryDB.graph[id]

    def add_to_graph(self, graph):
        InMemoryDB.graph.get('1').append(graph)
        return graph

    def add_to_graph2(self, graph):
        InMemoryDB.graph.get('2').append(graph)
        return graph

    def delete_from_graph_by_index(self, graph_id, idx):
        if id not in InMemoryDB.graph:
            raise RuntimeError('Could not find graph with id {0}'.format(graph_id))
        InMemoryDB.graph[graph_id].pop(idx)
