'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      attendance.belongsTo(models.users,{
        foreignKey:'userId',
        as:'user'
      })
    }
  }
  attendance.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    status: DataTypes.STRING,
    present: DataTypes.STRING,
    absent: DataTypes.STRING,
    address:DataTypes.STRING,
    userId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'attendance',
  });
  return attendance;
};