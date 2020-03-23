import twitterAuth from "../services/twitterAuth";
import { IncomingMessage } from "http";
import { Request, Response } from "express";
import kafkaProducer, { KafkaProducerRequest } from "../services/kafkaProducer";

interface ITwitters {
  statuses: ITwitterStatuses[];
}

interface ITwitterStatuses {
  text: string;
}

const getTwitters = async (key: string, callback: Function) => {
  await twitterAuth.oauth.get(
    twitterAuth.buildSearchUrl(key, "recent"),
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
        if (error) res.status(400).json({ error: "Error Twitter Api" });

        const responseData = JSON.parse(data);

        const payload: KafkaProducerRequest = {
          topic: kafkaProducer.KAFKA_TOPIC_NAME,
          messages: data
        };

        kafkaProducer.publish(payload);

        res.status(200).json(responseData);
      }
    );
  }
}

export default new TwitterController();
