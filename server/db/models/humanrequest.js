const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HumanRequest extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'hunter_id' });
      this.belongsTo(models.User, { foreignKey: 'owner_id' });
    }
  }
  HumanRequest.init({
    owner_id: DataTypes.INTEGER,
    hunter_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    hunter_reply: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'HumanRequest',
  });
  return HumanRequest;
};
