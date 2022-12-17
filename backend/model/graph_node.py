from json import JSONEncoder
import time
from random import randrange

class GraphNode:
    def __init__(self, x, y):
        self.x = int(x * 1000.0)
        self.y = y


class GraphEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, GraphNode):
            return {
                "x": obj.x,
                "y": obj.y
            }
        return super(GraphEncoder, self).default(obj)
    
    def generateInitialValues():
        result = []
        for x in range(720):
            result.insert(GraphNode(x=time.time() - 1750, y=randrange(1, 10)))
            
        return result
