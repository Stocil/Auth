import cors from 'cors';
import express from 'express';

import { userRouter } from './api/router.js';

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173'],
};
app.use(cors(corsOptions));
app.use(express.json());

// Роуты
app.use('/api', userRouter);

app.listen(8081, () => {
  console.log('Server started on port 8081');
});
