import { Injectable, Logger } from '@nestjs/common';
import pool from './lib/postgres';
import { redisClient } from './lib/redis';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

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

    this.logger.log(
      `Current random words: ${currentRandomWords}, previous random words: ${previousRandomWords}`,
    );

    return {
      version: 1.0,
      timestamp: new Date().toISOString(),
      currentRandomWords,
      previousRandomWords:
        previousRandomWords || 'No previously generated words',
    };
  }

  getHealth(): string {
    this.logger.log('Health check performed');
    // TODO Check if both databases are connected
    return 'OK';
  }
}
