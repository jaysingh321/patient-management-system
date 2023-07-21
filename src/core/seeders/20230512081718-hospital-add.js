"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Hospitals", [
      {
        hospitalName: "PMS-1 Hospital",
      },
      {
        hospitalName: "PMS-2 Hospital",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hospitals", null, {});
  },
};
