'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const todosArr = [
      'Buy groceries',
      'Walk the dog',
      'Do laundry',
      'Wash dishes',
      'Clean the house',
      'Water the plants',
      'Mow the lawn',
      'Take out the trash',
      'Vacuum the floor',
      'Wash the car',
      'Clean the bathroom',
    ];
    await queryInterface.bulkInsert(
      'Todos',
      todosArr.map((todo) => ({
        todo,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
