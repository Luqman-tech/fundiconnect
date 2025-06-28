'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('service_providers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      businessName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      hourlyRate: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      availability: {
        type: Sequelize.JSON,
        defaultValue: {},
      },
      skills: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      portfolio: {
        type: Sequelize.JSON,
        defaultValue: [],
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      rating: {
        type: Sequelize.DECIMAL(3, 2),
        defaultValue: 0,
      },
      totalReviews: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      completedJobs: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      responseTime: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      locationId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.addIndex('service_providers', ['userId']);
    await queryInterface.addIndex('service_providers', ['isVerified']);
    await queryInterface.addIndex('service_providers', ['isActive']);
    await queryInterface.addIndex('service_providers', ['rating']);
    await queryInterface.addIndex('service_providers', ['locationId']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('service_providers');
  }
};