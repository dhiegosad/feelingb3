import twitterAuth from '../services/twitterAuth';
import googleNL from '../services/googleNL';
import { IncomingMessage } from 'http';
import { Request, Response } from 'express';

class TwitterController {
  async request(req: Request, res: Response) {
    const { key } = req.params;

    twitterAuth.oauth.get(
      twitterAuth.buildSearchUrl(key, 'recent'),
      twitterAuth.access_token_key,
      twitterAuth.access_token_secret,
      function(error: object, data: string, response: IncomingMessage) {
        if (error) res.status(400).json({ error: 'Error Twitter Api' });
        res.status(200).json(JSON.parse(data));
      }
    );
  }

  async analyze(req: Request, res: Response) {
    console.log('AKIII');
    // The text to analyze
    const text = 'Minha maior paixão é o Vasco da Gama';

    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the text
    const [result] = await googleNL.client.analyzeSentiment({
      document: document,
    });
    const sentiment = result.documentSentiment;

    res.status(200).json(sentiment);

    console.log(`Text: ${text}`);
    console.log(`Sentiment: ${sentiment}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  }
}

export default new TwitterController();
