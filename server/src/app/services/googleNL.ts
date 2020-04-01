import language from '@google-cloud/language';
import { Tweet } from '../models/Tweet';
import { Sentence } from '../models/Sentence';
import SentimentSchema from '../schemas/SentimentSchema';

class GoogleNL {
  private client;

  constructor() {
    this.client = new language.LanguageServiceClient();
  }

  buildAndSaveSentiments(analizedTweets: Array<object>): Array<Sentence> {
    let sentences: Array<Sentence> = [];

    analizedTweets.forEach(analizedTweet => {
      analizedTweet[0].sentences.forEach(async (sentence: Sentence) => {
        await SentimentSchema.create({
          tweet: sentence.text.content,
          score: sentence.sentiment.score,
          magnitude: sentence.sentiment.magnitude,
        });

        sentences.push(sentence);
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
    this.buildAndSaveSentiments(results);
  }
}

export default new GoogleNL();
