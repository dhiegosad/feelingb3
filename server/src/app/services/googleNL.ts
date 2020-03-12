import language from '@google-cloud/language';

class GoogleNL {
  public client;
  constructor() {
    // Instantiates a client
    this.client = new language.LanguageServiceClient();
  }
}

export default new GoogleNL();
