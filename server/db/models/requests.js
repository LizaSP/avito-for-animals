const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'hunter_id' });
      this.belongsTo(models.Animal, { foreignKey: 'animal_id' });
    }
  }
  Request.init({
    hunter_id: DataTypes.INTEGER,
    animal_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    hunter_reply: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};
