module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
'prayers',
    [{
      prayer_whom: 'Pelo conselho da Igreja',
      prayer_reason: 'Reunião mensal do Conselho com assusntos importantes para igreja',
    },
    {
      prayer_whom: 'Pelos pastores da Igreja',
      prayer_reason: 'Lidam com o cuidado da vida espiritual dos irmãos',
    },
    ],

{ timestamps: false, underscored: true, tableName: 'prayers' },
);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
