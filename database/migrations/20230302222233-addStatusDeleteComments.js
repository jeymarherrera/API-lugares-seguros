'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //nombreTabla, nombreCampo, {tipoDato}
    return queryInterface.addColumn('comments','statusDelete',{
      type:Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('comments','statusDelete');
  }
};
