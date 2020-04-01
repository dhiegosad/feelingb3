import SentimentSchema from '../schemas/SentimentSchema';
import { ISentiment } from '../models/Sentiment';

class SentimentController {
  async index(req, res) {
    const sentiments: Array<ISentiment> = await SentimentSchema.find();
    res.status(200).json(sentiments);
  }
}

export default new SentimentController();
