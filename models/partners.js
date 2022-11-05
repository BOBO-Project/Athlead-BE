"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Partners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partners.init(
    {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venueName: DataTypes.STRING,
      academyName: DataTypes.STRING,
      sportsDetail: DataTypes.STRING,
      sportsSpecification: DataTypes.STRING,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      website: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Partners",
    }
  );
  return Partners;
};
