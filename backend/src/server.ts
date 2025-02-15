import { apiRouter } from 'api/routes';
import cors from 'cors';
import express from 'express';

import { PORT, frontEndUrl } from 'constants/index';

const app = express();
const corsOptions = {
  origin: [frontEndUrl],
};

app.use(cors(corsOptions));
app.use(express.json());

// Роуты
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
