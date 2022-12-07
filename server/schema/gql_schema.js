const graphql = require("graphql");
const TankTypeModel = require("./models/TankTypeModel");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;

const TankType = new GraphQLObjectType({
  name: "Tank",
  fields: () => ({
    id: { type: GraphQLString },
    tank_id: { type: GraphQLString },
    name: { type: GraphQLString },
    short_name: { type: GraphQLString },
    slug: { type: GraphQLString },
    type: { type: GraphQLString },
    tier: { type: GraphQLInt },
    price: { type: GraphQLInt },
    gold_price: { type: GraphQLInt },
    not_in_shop: { type: GraphQLBoolean },
    nation: { type: GraphQLString },
    tags: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tank: {
      type: TankType,
      args: { id: { type: GraphQLString } },
      async resolve(parent, args) {
        const tank = await TankTypeModel.findOne({ tank_id: args.id });
        return tank;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});