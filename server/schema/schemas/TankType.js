const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
} = graphql;

const StatTypeModel = require("../models/StatTypeModel");

const TankType = (types) =>
  new GraphQLObjectType({
    name: "Tank",
    fields: () => ({
      id: { type: GraphQLString },
      tank_id: { type: GraphQLString },
      name: { type: GraphQLString },
      short_name: { type: GraphQLString },
      slug: { type: GraphQLString },
      type: { type: GraphQLString },
      tier: { type: GraphQLInt },
      price: { type: GraphQLFloat },
      gold_price: { type: GraphQLFloat },
      not_in_shop: { type: GraphQLBoolean },
      nation: { type: GraphQLString },
      tags: { type: GraphQLString },
      stats: {
        type: new GraphQLList(types.StatType),
        async resolve(parent) {
          const stats = await StatTypeModel.find({ tank_id: parent.tank_id });
          return stats;
        },
      },
    }),
  });

module.exports = TankType;
