"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Patients", [
      {
        hospitalId: 1,
        fullName: "Tom",
        age: 23,
        dateOfBirth: new Date("1999-05-20"),
        email: "tom@example.com",
        contactNumber: "1234567890",
        nationality: "INDIAN",
      },
      {
        hospitalId: 2,
        fullName: "Johny",
        age: 25,
        dateOfBirth: new Date("1997-08-10"),
        email: "johny@example.com",
        contactNumber: "3642475623",
        nationality: "INDIAN",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Patients", null, {});
  },
};
