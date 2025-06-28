'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      bookingId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'bookings',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      currency: {
        type: Sequelize.STRING(3),
        defaultValue: 'KES',
      },
      method: {
        type: Sequelize.ENUM('mpesa', 'card', 'bank_transfer', 'cash'),
        defaultValue: 'mpesa',
      },
      status: {
        type: Sequelize.ENUM('pending', 'processing', 'completed', 'failed', 'refunded'),
        defaultValue: 'pending',
      },
      transactionId: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      mpesaReceiptNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      providerAmount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      platformFee: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      processedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      failureReason: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      metadata: {
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
    await queryInterface.addIndex('payments', ['bookingId']);
    await queryInterface.addIndex('payments', ['transactionId']);
    await queryInterface.addIndex('payments', ['status']);
    await queryInterface.addIndex('payments', ['method']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payments');
  }
};