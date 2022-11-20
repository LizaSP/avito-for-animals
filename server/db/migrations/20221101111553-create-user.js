/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: 'avatar.png',
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      gender: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      phone: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      info: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      location: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      status: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      websites: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
