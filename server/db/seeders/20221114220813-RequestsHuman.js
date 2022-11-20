/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HumanRequests', [{
      hunter_id: 5,
      owner_id: 6,
      status: 'pending',
      hunter_reply: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 6,
      owner_id: 7,
      status: 'pending',
      hunter_reply: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 7,
      owner_id: 8,
      status: 'pending',
      hunter_reply: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 8,
      owner_id: 9,
      status: 'pending',
      hunter_reply: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hunter_id: 9,
      owner_id: 6,
      status: 'pending',
      hunter_reply: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      hunter_id: 10,
      owner_id: 6,
      status: 'pending',
      hunter_reply: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HumanRequests', null, {});
  },
};
