interface Sentiment {
  score: number;
  maginitude: number;
  value: string;
}

export interface Sentence {
  text: object;
  sentiment: Sentiment;
}
