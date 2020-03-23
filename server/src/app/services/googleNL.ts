import language from "@google-cloud/language";

class GoogleNL {
  public client;
  constructor() {
    this.client = new language.LanguageServiceClient();
  }

  analize(tweets: Array<string>) {
    tweets.forEach(async tweet => {
      const document = {
        content: tweet,
        type: "PLAIN_TEXT"
      };

      console.log("ANALIZE", document);
      const [results] = await this.client.analyzeSentiment({
        document: document
      });

      console.log("results", results);
    });
  }
}

export default new GoogleNL();
