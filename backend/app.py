from ariadne import QueryType, make_executable_schema, load_schema_from_path, snake_case_fallback_resolvers
from ariadne.asgi import GraphQL
from db.subscription_handler import subscription
type_defs = load_schema_from_path("schema.graphql")

query = QueryType()


schema = make_executable_schema(
    type_defs, query, subscription,   snake_case_fallback_resolvers)

app = GraphQL(schema, debug=True,context_value={})


