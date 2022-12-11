const graphql = require("graphql");
const TankTypeModel = require("./models/TankTypeModel");
const StatTypeModel = require("./models/StatTypeModel");
const TankTypeInj = require("./schemas/TankType");
const StatTypeInj = require("./schemas/StatType");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} = graphql;

const types = {};
types.TankType = TankTypeInj(types);
types.StatType = StatTypeInj(types);

const { TankType, StatType } = types;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tank: {
      type: TankType,
      args: { id: { type: GraphQLString } },
      async resolve(_parent, args) {
        const tank = await TankTypeModel.findOne({ _id: args.id });
        return tank;
      },
    },
    tanks: {
      type: new GraphQLList(TankType),
      async resolve(_parent) {
        const tanks = await TankTypeModel.find({});
        return tanks;
      },
    },
    stat: {
      type: StatType,
      args: { id: { type: GraphQLString } },
      async resolve(_parent, args) {
        const stat = await StatTypeModel.findOne({ _id: args.id });
        return stat;
      },
    },
    stats: {
      type: new GraphQLList(StatType),
      async resolve(_parent) {
        const stats = await StatTypeModel.find({});
        return stats;
      },
    },
  },
});
const x = {
  tank_id: "A01_T1_Cunningham",
  name: "T1 Cunningham",
  short_name: "T1",
  slug: "t1",
  type: "light",
  tier: 1,
  price: 0,
  gold_price: 0,
  not_in_shop: false,
  nation: "usa",
  tags: "lightTank,HD",
};

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTank: {
      type: TankType,
      args: {
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
      },
      async resolve(_parent, args) {
        const tank = new TankTypeModel(args);
        tank.save();

        return tank;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
