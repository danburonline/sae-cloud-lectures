import { Injectable } from '@nestjs/common';
import pool from './lib/postgres';
import { redisClient } from './lib/redis';

@Injectable()
export class AppService {
  async getRandomData(): Promise<{
    version: number;
    timestamp: string;
    currentRandomWords: string;
    previousRandomWords: string | null;
  }> {
    // Fetch 4 random words from the PostgreSQL database
    const query = 'SELECT word FROM words ORDER BY RANDOM() LIMIT 4';
    const { rows } = await pool.query(query);
    const currentRandomWords = rows.map((row) => row.word).join(' ');

    // Fetch the previously stored random words from Redis
    const previousRandomWords = await redisClient.get('previousRandomWords');

    // Store the current random words in Redis for future retrieval
    await redisClient.set('previousRandomWords', currentRandomWords);

    return {
      version: 1.0,
      timestamp: new Date().toISOString(),
      currentRandomWords,
      previousRandomWords:
        previousRandomWords || 'No previously generated words',
    };
  }

  getHealth(): string {
    return 'OK';
  }
}
