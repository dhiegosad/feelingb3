import language from '@google-cloud/language';
import { Tweet } from '../models/Tweet';
import { Sentiment } from '../models/Sentiment';

class GoogleNL {
  private client;

  constructor() {
    this.client = new language.LanguageServiceClient();
  }

  async analize(tweet: Tweet) {
    let results: Array<any> = [];
    let sentiments: Array<Sentiment> = [];

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

    results.forEach(result => {
      console.log('AKI', result[0].sentences);
      // sentiments.push({
      //   text: result[0]?.sentences?.text?.content,
      //   sentiment: result[0]?.sentences?.sentiment,
      // });
    });

    //console.log('result', sentiments);
  }
}

export default new GoogleNL();
