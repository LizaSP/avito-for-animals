const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Request, { foreignKey: 'animal_id' });
      this.hasMany(models.Favourite, { foreignKey: 'animal_id' });
    }
  }
  Animal.init({
    name: DataTypes.STRING,
    animal_type: DataTypes.STRING,
    breed: DataTypes.STRING,
    color: DataTypes.STRING,
    age: DataTypes.STRING,
    med_info: DataTypes.TEXT,
    about: DataTypes.TEXT,
    images: DataTypes.TEXT,
    price_category: DataTypes.STRING,
    price: DataTypes.STRING,
    period_category: DataTypes.STRING,
    period: DataTypes.STRING,
    gender: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
