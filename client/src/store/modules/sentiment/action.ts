import { action } from 'typesafe-actions';
import { SentimentsTypes, ISentiment } from './types';

export const loadSentimentsRequest = (subject: string) =>
  action(SentimentsTypes.LOAD_SENTIMENTS_REQUEST);

export const loadSentimentsSuccess = (data: ISentiment[]) =>
  action(SentimentsTypes.LOAD_SENTIMENTS_SUCCESS, { data: data });
