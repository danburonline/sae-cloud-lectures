import { Injectable } from '@nestjs/common';
import pool from './lib/postgres';

@Injectable()
export class AppService {
  async getRandomData(): Promise<{
    version: number;
    timestamp: string;
    randomWords: string;
  }> {
    const query = 'SELECT word FROM words ORDER BY RANDOM() LIMIT 4'; // Adjust 'words' and 'word' if your table/column names differ
    try {
      const { rows } = await pool.query(query);
      const randomWords = rows.map((row) => row.word).join(' ');

      console.info('Generated random data: ', randomWords);

      return {
        version: 1.0,
        timestamp: new Date().toISOString(),
        randomWords,
      };
    } catch (error) {
      console.error('Failed to fetch random words from database: ', error);
      throw new Error('Failed to fetch random words');
    }
  }

  getHealth(): string {
    // Shallow health check, no deep health check needed
    return 'OK';
  }
}
