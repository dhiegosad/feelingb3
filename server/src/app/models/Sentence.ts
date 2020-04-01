import { ISentiment } from './Sentiment';

interface ITweetValue {
  content: string;
}

export interface Sentence {
  text: ITweetValue;
  sentiment: ISentiment;
}
