'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locations', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('county', 'city', 'town', 'estate', 'area'),
        allowNull: false,
      },
      parentId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      coordinates: {
        type: Sequelize.TEXT, // Store as JSON string for SQLite compatibility
        allowNull: true,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.addIndex('locations', ['name']);
    await queryInterface.addIndex('locations', ['type']);
    await queryInterface.addIndex('locations', ['parentId']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locations');
  }
};