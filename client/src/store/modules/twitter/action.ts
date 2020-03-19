import { action } from 'typesafe-actions';
import { TwitterTypes, TwitterState } from './types';

export const loadTweetsRequest = (subject: string) =>
  action(TwitterTypes.LOAD_TWEETS_REQUEST, { subject });

export const loadTweetsSuccess = (data: TwitterState[]) =>
  action(TwitterTypes.LOAD_TWEETS_SUCCESS, { data });
