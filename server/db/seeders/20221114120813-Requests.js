/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Requests', [{
      hunter_id: 10,
      animal_id: 11,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 11,
      animal_id: 11,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 5,
      animal_id: 12,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      hunter_id: 6,
      animal_id: 12,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      hunter_id: 10,
      animal_id: 12,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 10,
      animal_id: 13,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 5,
      animal_id: 13,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      hunter_id: 7,
      animal_id: 7,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Requests', null, {});
  },
};
