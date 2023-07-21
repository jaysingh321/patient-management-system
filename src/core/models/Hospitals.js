"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hospitals extends Model {
    static associate(models) {
      Hospitals.hasMany(models.Patients, { foreignKey: "hospitalId" });
    }
  }
  Hospitals.init(
    {
      hospitalId: DataTypes.INTEGER,
      hospitalName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hospitals",
    }
  );
  return Hospitals;
};
