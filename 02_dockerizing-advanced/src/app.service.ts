import { Injectable } from '@nestjs/common';

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

  getRandomData(): { timestamp: string; randomWords: string } {
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

    return {
      timestamp: new Date().toISOString(),
      randomWords: result.join(' '),
    };
  }
}
