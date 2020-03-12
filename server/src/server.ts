import 'dotenv/config';
import app from './app';

const port = process.env.PORT;

app.listen(port, () => console.log(`Inicializando servidor na porta ${port}`));
