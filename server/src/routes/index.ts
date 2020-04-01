import { request, response, Router } from 'express';
import TwitterController from '../app/controllers/TwitterController';
import SentimentController from '../app/controllers/SentimentController';

const routes = Router();

routes.get('/search', TwitterController.request);
routes.get('/sentiments', SentimentController.index);

export default routes;
