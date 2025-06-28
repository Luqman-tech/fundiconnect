'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      role: {
        type: Sequelize.ENUM('client', 'provider', 'admin'),
        defaultValue: 'client',
      },
      lastSeen: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      preferences: {
        type: Sequelize.JSON,
        defaultValue: {},
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });

    // Add indexes
    await queryInterface.addIndex('users', ['phoneNumber']);
    await queryInterface.addIndex('users', ['email']);
    await queryInterface.addIndex('users', ['role']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};