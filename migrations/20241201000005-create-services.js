'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('services', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      providerId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'service_providers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      priceType: {
        type: Sequelize.ENUM('fixed', 'hourly', 'negotiable'),
        defaultValue: 'fixed',
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      images: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      tags: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      requirements: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    await queryInterface.addIndex('services', ['providerId']);
    await queryInterface.addIndex('services', ['categoryId']);
    await queryInterface.addIndex('services', ['isActive']);
    await queryInterface.addIndex('services', ['price']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('services');
  }
};