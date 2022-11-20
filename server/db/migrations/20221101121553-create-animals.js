/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Не указано',
      },
      animal_type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Не выбрано',
      },
      breed: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Не выбрано',
      },
      age: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Не указано',
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Не выбрано',
      },
      med_info: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Не указано',
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '',
      },
      images: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '',
      },
      price_category: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Бесплатно',
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '-',
      },
      period_category: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Забрать',
      },
      period: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '-',
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Не выбрано',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
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
    await queryInterface.dropTable('Animals');
  },
};
