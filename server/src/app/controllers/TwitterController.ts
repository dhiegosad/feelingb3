import twitterAuth from '../services/twitterAuth';
import googleNL from '../services/googleNL';
import { IncomingMessage } from 'http';
import { Request, Response } from 'express';

interface ITwitters {
  statuses: ITwitterStatuses[];
}

interface ITwitterStatuses {
  text: string;
}

const getTwitters = async (key: string, callback: Function) => {
  await twitterAuth.oauth.get(
    twitterAuth.buildSearchUrl(key, 'recent'),
    twitterAuth.access_token_key,
    twitterAuth.access_token_secret,
    callback
  );
};

const callbackTwitterResponse = () => {};

class TwitterController {
  async request(req: Request, res: Response) {
    const { key } = req.params;

    await getTwitters(
      key,
      (error: object, data: string, response: IncomingMessage) => {
        if (error) res.status(400).json({ error: 'Error Twitter Api' });
        res.status(200).json(JSON.parse(data));
      }
    );
  }

  async analyze(req: Request, res: Response) {
    const { key } = req.params;

    let twitters: ITwitters;
    var sentiments: Array<string> = [];

    await getTwitters(
      key,
      (error: object, data: string, response: IncomingMessage) => {
        if (error) res.status(400).json({ error: 'Error Twitter Api' });
        twitters = JSON.parse(data);

        twitters?.statuses.forEach(async twitter => {
          const document = {
            content: twitter.text,
            type: 'PLAIN_TEXT',
          };

          // Detects the sentiment of the text
          const [result] = await googleNL.client.analyzeSentiment({
            document: document,
          });

          sentiments.push(result.sentiment);

        });
        console.log('sentiments', sentiments);
      }
    );


    //console.log(`Text: ${text}`);
    //console.log(`Sentiment score: ${sentiment.score}`);
    //console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  }
}

export default new TwitterController();
