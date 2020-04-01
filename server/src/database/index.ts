import mongoose from 'mongoose';
import 'dotenv/config';

class Database {
  mongoConnection: Promise<typeof mongoose>;

  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_SERVER, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
