const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Animal, { foreignKey: 'userId' });
      this.hasMany(models.Message, { foreignKey: 'user_id' });
      this.hasMany(models.Request, { foreignKey: 'hunter_id' });
      this.hasMany(models.Babysitter, { foreignKey: 'user_id' });
      this.hasMany(models.Favourite, { foreignKey: 'user_id' });
      this.hasMany(models.HumanFavourite, { foreignKey: 'hunter_id' });
      this.hasMany(models.HumanFavourite, { foreignKey: 'owner_id' });
      this.hasMany(models.HumanRequest, { foreignKey: 'hunter_id' });
      this.hasMany(models.HumanRequest, { foreignKey: 'owner_id' });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    role: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    info: DataTypes.TEXT,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    websites: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
