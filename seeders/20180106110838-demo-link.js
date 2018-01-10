'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('links', [{
      url: 'http://www.google.com',
      title: 'Google',
      isShared: false,
      tags: ['search engine', 'google', 'web'],
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      url: 'http://laravel.com',
      title: 'Laravel',
      isShared: true,
      tags: ['laravel', 'php', 'web'],
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      url: 'http://hk.yahoo.com',
      title: 'Yahoo!',
      isShared: true,
      tags: ['search engine', 'yahoo'],
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('links', null, {});
  }
};
