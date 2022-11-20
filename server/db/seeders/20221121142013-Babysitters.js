/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Babysitters', [{
      user_id: 5,
      animal_type: 'cats,dogs,wolves',
      price_category: 'Бесплатно',
      period_category: 'На передержку',
      experience: 'Есть опыт',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      animal_type: 'cats,wolves',
      price_category: 'Бесплатно',
      period_category: 'На передержку',
      experience: 'Отсутствует',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 7,
      animal_type: 'wolves,dogs,cats',
      price_category: 'Бесплатно',
      period_category: 'На передержку',
      experience: 'Отсутствует',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 8,
      animal_type: 'foxes,wolves',
      price_category: 'Платно',
      period_category: 'На передержку',
      experience: 'Есть опыт',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 9,
      animal_type: 'cats,dogs',
      price_category: 'Бесплатно',
      period_category: 'Забрать',
      experience: 'Есть опыт',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
      animal_type: 'wolves,dogs',
      price_category: 'Бесплатно',
      period_category: 'Забрать',
      experience: 'Есть опыт',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Babysitters', null, {});
  },
};
