import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';

class App {
  server: Application;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes(): void {
    this.server.use('/api', routes);
  }
}

export default new App().server;
