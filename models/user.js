'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};




///////////////////////////////////////////

// exports.getCourses = async (req, res) => {
//   try {
//     const data = await course.findAll({
//       include: {
//         model: db.plan,
//         as: 'plan'
//       },
//       order:[["updatedAt","DESC"]]
//     });
//     res.status(200).json({ data: data });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };