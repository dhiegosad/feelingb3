import mongoose from 'mongoose';
import { ISentiment } from '../models/Sentiment';

const SentimentSchema = new mongoose.Schema<ISentiment>(
  {
    tweet: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    magnitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Sentiment', SentimentSchema);
