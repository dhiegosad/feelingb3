import twitterAuth from '../services/twitterAuth';
import { IncomingMessage } from 'http';
import { Request, Response } from 'express';
import kafkaProducer, { KafkaProducerRequest } from '../services/kafkaProducer';

class TwitterController {
  private URL_SEARCH_TWITTER = process.env.URL_SEARCH_TWITTER;

  buildSearchUrl = (key: string, resultType = 'recent'): string => {
    return `${this.URL_SEARCH_TWITTER}?q=${key}&result_type=${resultType}&lang=pt&count=50`;
  };

  getTwitters = async (key: string, callback: Function) => {
    await twitterAuth.oauth.get(
      this.buildSearchUrl(key, 'recent'),
      twitterAuth.access_token_key,
      twitterAuth.access_token_secret,
      callback
    );
  };

  request = async (req: Request, res: Response) => {
    const { key } = req.query;

    await this.getTwitters(
      key,
      (error: object, data: string, response: IncomingMessage) => {
        if (error) res.status(400).json({ error: 'Error Twitter Api' });

        const responseData = JSON.parse(data);

        const payload: KafkaProducerRequest = {
          topic: kafkaProducer.KAFKA_TOPIC_NAME,
          messages: data,
        };

        kafkaProducer.publish(payload);

        res.status(200).json(responseData);
      }
    );
  };
}

export default new TwitterController();
