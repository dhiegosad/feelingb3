import { request, response, Router } from 'express';
import TwitterController from '../app/controllers/TwitterController';

const routes = Router();

routes.get('/search', TwitterController.request);

export default routes;
