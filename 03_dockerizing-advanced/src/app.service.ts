import { Injectable } from '@nestjs/common';
// import * as fs from 'fs';

@Injectable()
export class AppService {
  private randomWords = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'honeydew',
    'jackfruit',
    'kiwi',
    'lemon',
  ];

  getRandomData(): {
    version: number;
    timestamp: string;
    randomWords: string;
  } {
    const result = [];
    let lastWord = '';

    for (let i = 0; i < 4; i++) {
      let word = '';
      do {
        word =
          this.randomWords[Math.floor(Math.random() * this.randomWords.length)];
      } while (word === lastWord);

      result.push(word);
      lastWord = word;
    }

    // // Constructing the file name
    // const fileName = `${new Date().toISOString()}.json`;

    // // Writing data to a file
    // fs.writeFile(fileName, JSON.stringify(result), (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.info(`Random data written to ${fileName}`);
    // });

    console.info('Generated random data: ', result.join(' '));

    return {
      version: 1.0,
      timestamp: new Date().toISOString(),
      randomWords: result.join(' '),
    };
  }

  getHealth(): string {
    // Shallow health check, no deep health check needed
    return 'OK';
  }
}
