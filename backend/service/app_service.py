import time
from random import randrange

from dao import graphDao
from model.graph_node import GraphNode


class AppService:
    def create_graph_data(self):
        while True:
            # populate graph
            if len(graphDao.get_graphs('1')) == 720:
                graphDao.delete_from_graph_by_index('1', 0)
            graph = GraphNode(timestamp=time.time(), price=randrange(1, 10))
            graphDao.add_to_graph(graph)
            # populate graph2
            if len(graphDao.get_graphs('2')) == 720:
                graphDao.delete_from_graph_by_index('2', 0)
            graph2 = GraphNode(timestamp=time.time(), price=randrange(5, 15))
            graphDao.add_to_graph2(graph2)
            time.sleep(0.25)
