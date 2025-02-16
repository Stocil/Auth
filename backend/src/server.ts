import { apiRouter } from 'api/routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { PORT, frontEndUrl } from 'constants/index';

const app = express();
const corsOptions = {
  origin: [frontEndUrl],
};

app.use(cors(corsOptions), express.json(), cookieParser());

// Роуты
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
