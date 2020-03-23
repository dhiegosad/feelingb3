import 'dotenv/config';
import app from './app';
import kafkaConsumer from './app/services/kafkaConsumer';

const port = process.env.PORT;

app.listen(port, () => {
  new kafkaConsumer();
  console.log(`Inicializando servidor na porta ${port}`);
});
