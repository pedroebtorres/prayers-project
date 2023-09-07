/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prayers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prayerWhom: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'prayer_whom',
      },
      prayerReason: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'prayer_reason',
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('prayers');
  },
};