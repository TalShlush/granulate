import asyncio
from ariadne import convert_kwargs_to_snake_case, SubscriptionType
import time
from random import randrange

from model.graph_node import GraphNode

subscription = SubscriptionType()

@subscription.source("newPoints")
@convert_kwargs_to_snake_case
async def generatePoints(obj, info, id):
    try:
        while True:
            print('listen')
            result = []
            for index in range(720):
                result.append(GraphNode(x=time.time() - index * 250, y=randrange(1, 10)))
            yield result
            
            while True:

                time.sleep(2)
                
                yield [GraphNode(x=time.time() - 1750, y=randrange(1, 10)),
                   GraphNode(x=time.time() - 1500, y=randrange(1, 10)),
                   GraphNode(x=time.time() - 1250, y=randrange(1, 10)),
                   GraphNode(x=time.time() - 1000, y=randrange(1, 10)),
                   GraphNode(x=time.time() - 750, y=randrange(1, 10)),
                   GraphNode(x=time.time() - 500, y=randrange(1, 10)),
                   GraphNode(x=time.time() - 250, y=randrange(1, 10)),
                   GraphNode(x=time.time(), y=randrange(1, 10))]
                   
    except asyncio.CancelledError:
        raise


@subscription.field("newPoints")
@convert_kwargs_to_snake_case
async def messages_resolver(points, info, id):
    return points
