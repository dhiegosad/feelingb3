import { request, response, Router } from 'express';
import TwitterController from '../app/controllers/TwitterController';

const routes = Router();

routes.get('/search/:key', TwitterController.request);
routes.get('/google/analyze/:key', TwitterController.analyze);

export default routes;
