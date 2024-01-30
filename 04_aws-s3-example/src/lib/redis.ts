import Redis from 'ioredis';

export const redisClient = new Redis({
  host: process.env.REDIS_HOST ? process.env.REDIS_HOST : 'localhost',
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
}).on('connect', () => {
  // Event listener for Redis connection
  console.log('Connected to Redis database');
});
