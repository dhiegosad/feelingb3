// Sentiments Types
export enum SentimentsTypes {
  LOAD_SENTIMENTS_REQUEST = "@sentiment/LOAD_SENTIMENTS_REQUEST",
  LOAD_SENTIMENTS_SUCCESS = "@sentiment/LOAD_SENTIMENTS_SUCCESS"
}

export interface LoadSentimentsRequestAction {
  type: typeof SentimentsTypes.LOAD_SENTIMENTS_REQUEST;
}

export interface LoadSentimentsSuccessAction {
  type: typeof SentimentsTypes.LOAD_SENTIMENTS_SUCCESS;
  payload: { data: Array<ISentiment> };
}

export type SentimentsActionTypes =
  | LoadSentimentsRequestAction
  | LoadSentimentsSuccessAction;

export interface ISentiment {
  id: string;
  tweet: string;
  score: number;
  magnitude: number;
}

export enum SentimentEnum {
  "Péssimo",
  "Ruim",
  "Neutro",
  "Bom",
  "Ótimo"
}

// State Type
export interface SentimentState {
  readonly data: Array<ISentiment>;
  loading: boolean;
}
