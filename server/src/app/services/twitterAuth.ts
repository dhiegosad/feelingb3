import 'dotenv/config';
import OAuth from 'oauth';

class TwitterAuth {
  public oauth;
  public access_token_key = process.env.ACCESS_TOKEN_KEY;
  public access_token_secret = process.env.ACCESS_TOKEN_SECRET;
  private consumer_key = process.env.CONSUMER_KEY;
  private consumer_secret = process.env.CONSUMER_SECRET;
  private URL_REQUEST_TOKEN = process.env.URL_REQUEST_TOKEN;
  private URL_ACCESS_TOKEN = process.env.URL_ACCESS_TOKEN;

  constructor() {
    this.oauth = new OAuth.OAuth(
      this.URL_REQUEST_TOKEN,
      this.URL_ACCESS_TOKEN,
      this.consumer_key,
      this.consumer_secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
  }
}

export default new TwitterAuth();
