import language from '@google-cloud/language';
import { Tweet } from '../models/Tweet';
import { Sentence } from '../models/Sentence';
import { toSentiment } from '../models/SentimentEnum';

class GoogleNL {
  private client;

  constructor() {
    this.client = new language.LanguageServiceClient();
  }

  computeTotalSentiment(sentences: Array<Sentence>) {
    let totalScore: number = 0;
    let totalSentences: number = 0;
    sentences.forEach(sentence => {
      if (sentence.sentiment.score != 0) {
        console.log('sentence.sentiment.score', sentence.sentiment.score);
        totalScore += sentence.sentiment.score;
        totalSentences++;
      }
    });

    console.log(
      'SENTIMENTO:',
      totalScore,
      totalSentences,
      totalScore / totalSentences,
      toSentiment(totalScore / totalSentences)
    );
  }

  convertScore(sentence: Sentence) {
    const enhancedSentiment = { ...sentence };
    enhancedSentiment.sentiment.value = toSentiment(sentence.sentiment.score);
    return sentence;
  }

  buildAndGetSentiments(analizedTweets: Array<object>): Array<Sentence> {
    let sentences: Array<Sentence> = [];

    analizedTweets.forEach(analizedTweet => {
      analizedTweet[0].sentences.forEach((sentence: Sentence) => {
        sentences.push(this.convertScore(sentence));
      });
    });

    return sentences;
  }

  async analize(tweet: Tweet) {
    let results: Array<object> = [];

    for (const value of tweet?.statuses) {
      const document = {
        content: value.text,
        type: 'PLAIN_TEXT',
      };

      results.push(
        await this.client.analyzeSentiment({
          document: document,
        })
      );
    }
    this.computeTotalSentiment(this.buildAndGetSentiments(results));
  }
}

export default new GoogleNL();
