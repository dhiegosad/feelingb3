// Twitter Types
export enum TwitterTypes {
  LOAD_TWEETS_REQUEST = '@twitter/LOAD_TWEETS_REQUEST',
  LOAD_TWEETS_SUCCESS = '@twitter/LOAD_TWEETS_SUCCESS',
}

export interface LoadTweetsRequestAction {
  type: typeof TwitterTypes.LOAD_TWEETS_REQUEST;
  payload: { subject: string };
}

export interface LoadTweetsSuccessAction {
  type: typeof TwitterTypes.LOAD_TWEETS_SUCCESS;
  payload: { data: { statuses: [] } };
}

export type TwitterActionTypes =
  | LoadTweetsRequestAction
  | LoadTweetsSuccessAction;

export interface ITwitterSearchUser {
  statuses: Array<ITwitterStatus>;
}

export interface ITwitterUser {
  id: number;
  name: string;
  status?: ITwitterStatus;
}

export interface ITwitterStatus {
  id: number;
  text: string;
}

// State Type
export interface TwitterState {
  readonly data: ITwitterSearchUser;
  loading: boolean;
}
