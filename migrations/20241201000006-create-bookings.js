'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      clientId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'services',
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
      scheduledDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      estimatedDuration: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      location: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('pending', 'confirmed', 'in_progress', 'completed', 'cancelled', 'disputed'),
        defaultValue: 'pending',
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      paymentStatus: {
        type: Sequelize.ENUM('pending', 'paid', 'refunded', 'failed'),
        defaultValue: 'pending',
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      completedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cancelledAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cancellationReason: {
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
    await queryInterface.addIndex('bookings', ['clientId']);
    await queryInterface.addIndex('bookings', ['providerId']);
    await queryInterface.addIndex('bookings', ['serviceId']);
    await queryInterface.addIndex('bookings', ['status']);
    await queryInterface.addIndex('bookings', ['scheduledDate']);
    await queryInterface.addIndex('bookings', ['paymentStatus']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookings');
  }
};