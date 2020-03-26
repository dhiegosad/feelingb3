enum SentimentEnum {
  'Péssimo',
  'Ruim',
  'Neutro',
  'Bom',
  'Ótimo',
}

export function toSentiment(score: number): string {
  switch (true) {
    case -1.0 <= score && score < -0.6:
      return SentimentEnum[0];
      break;
    case -0.6 <= score && score < -0.2:
      return SentimentEnum[1];
      break;
    case -0.2 <= score && score < 0.2:
      return SentimentEnum[2];
      break;
    case 0.2 <= score && score < 0.6:
      return SentimentEnum[3];
      break;
    case 0.6 <= score && score <= 1:
      return SentimentEnum[4];
      break;
  }
}
