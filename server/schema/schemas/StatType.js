const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} = graphql;

const TankTypeModel = require("../models/TankTypeModel");

const StatType = (types) =>
  new GraphQLObjectType({
    name: "Stat",
    fields: () => ({
      id: { type: GraphQLString },
      stat_id: { type: GraphQLInt },
      name: { type: GraphQLString },
      short_name: { type: GraphQLString },
      slug: { type: GraphQLString },
      type: { type: GraphQLString },
      tier: { type: GraphQLInt },
      price: { type: GraphQLFloat },
      gold_price: { type: GraphQLFloat },
      not_in_shop: { type: GraphQLBoolean },
      nation: { type: GraphQLString },
      tank_id: { type: GraphQLString },
      forward_speed: { type: GraphQLFloat },
      reverse_speed: { type: GraphQLFloat },
      hull_armor_front: { type: GraphQLFloat },
      hull_armor_side: { type: GraphQLFloat },
      hull_armor_rear: { type: GraphQLFloat },
      turret_armor_front: { type: GraphQLFloat },
      turret_armor_side: { type: GraphQLFloat },
      turret_armor_rear: { type: GraphQLFloat },
      chassis_rotation_speed: { type: GraphQLFloat },
      turret_rotation_speed: { type: GraphQLFloat },
      view_range: { type: GraphQLFloat },
      gun_name: { type: GraphQLString },
      elevation: { type: GraphQLFloat },
      depression: { type: GraphQLFloat },
      max_ammo: { type: GraphQLInt },
      reload_time: { type: GraphQLFloat },
      aim_time: { type: GraphQLFloat },
      dispersion: { type: GraphQLFloat },
      clip_size: { type: GraphQLInt },
      burst_size: { type: GraphQLFloat },
      shell_icon: { type: GraphQLString },
      shell_type: { type: GraphQLString },
      caliber: { type: GraphQLFloat },
      explosion_radius: { type: GraphQLFloat },
      damage: { type: GraphQLFloat },
      module_damage: { type: GraphQLFloat },
      speed: { type: GraphQLFloat },
      penetration: { type: GraphQLFloat },
      power: { type: GraphQLFloat },
      fire_chance: { type: GraphQLFloat },
      radio_range: { type: GraphQLFloat },
      health: { type: GraphQLInt },
      weight: { type: GraphQLFloat },
      potential_damage: { type: GraphQLFloat },
      dpm: { type: GraphQLFloat },
      pwr: { type: GraphQLFloat },
      stationary_camo: { type: GraphQLFloat },
      moving_camo: { type: GraphQLFloat },
      chassis: { type: GraphQLFloat },
      turret: { type: GraphQLFloat },
      gun: { type: GraphQLFloat },
      shell: { type: GraphQLFloat },
      engine: { type: GraphQLFloat },
      radio: { type: GraphQLFloat },
      tank: {
        type: types.TankType,
        async resolve(parent, _args) {
          const tank = await TankTypeModel.findOne({ tank_id: parent.tank_id });
          return tank;
        },
      },
    }),
  });

module.exports = StatType;
