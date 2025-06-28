const redis = require('redis');
const logger = require('../utils/logger');

// Create a mock Redis client for development if Redis is not available
const createMockRedisClient = () => {
  return {
    ping: async () => 'PONG',
    get: async () => null,
    set: async () => 'OK',
    setEx: async () => 'OK',
    quit: async () => 'OK',
    connect: async () => {},
    on: () => {},
  };
};

let redisClient;

try {
  redisClient = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  });

  redisClient.on('error', (err) => {
    logger.error('Redis Client Error:', err);
    // In development, fall back to mock client
    if (process.env.NODE_ENV === 'development') {
      logger.info('Falling back to mock Redis client for development');
      redisClient = createMockRedisClient();
    }
  });

  redisClient.on('connect', () => {
    logger.info('Redis Client Connected');
  });

  redisClient.on('ready', () => {
    logger.info('Redis Client Ready');
  });

  redisClient.connect().catch((err) => {
    logger.error('Redis Connection Error:', err);
    // In development, fall back to mock client
    if (process.env.NODE_ENV === 'development') {
      logger.info('Falling back to mock Redis client for development');
      redisClient = createMockRedisClient();
    }
  });
} catch (error) {
  logger.error('Redis initialization error:', error);
  if (process.env.NODE_ENV === 'development') {
    logger.info('Using mock Redis client for development');
    redisClient = createMockRedisClient();
  }
}

module.exports = { redisClient };