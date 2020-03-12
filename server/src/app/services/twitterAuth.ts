import 'dotenv/config';
import OAuth from 'oauth';

const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret = process.env.CONSUMER_SECRET;
const URL_REQUEST_TOKEN = process.env.URL_REQUEST_TOKEN;
const URL_ACCESS_TOKEN = process.env.URL_ACCESS_TOKEN;

class TwitterAuth {
  public oauth;
  public access_token_key = process.env.ACCESS_TOKEN_KEY;
  public access_token_secret = process.env.ACCESS_TOKEN_SECRET;
  private URL_SEARCH_TWITTER = process.env.URL_SEARCH_TWITTER;

  constructor() {
    this.oauth = new OAuth.OAuth(
      URL_REQUEST_TOKEN,
      URL_ACCESS_TOKEN,
      consumer_key,
      consumer_secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
  }

  buildSearchUrl(key: string, resultType = 'recent'): string {
    return `${this.URL_SEARCH_TWITTER}?q=${key}&result_type=${resultType}`;
  }
}

export default new TwitterAuth();
