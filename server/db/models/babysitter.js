const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Babysitter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Babysitter.init({
    user_id: DataTypes.INTEGER,
    animal_type: DataTypes.STRING,
    period_category: DataTypes.STRING,
    price_category: DataTypes.STRING,
    experience: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Babysitter',
  });
  return Babysitter;
};
