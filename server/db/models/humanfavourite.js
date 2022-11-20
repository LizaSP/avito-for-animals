const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HumanFavourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'owner_id' });
      this.belongsTo(models.User, { foreignKey: 'hunter_id' });
    }
  }
  HumanFavourite.init({
    owner_id: DataTypes.INTEGER,
    hunter_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'HumanFavourite',
  });
  return HumanFavourite;
};
