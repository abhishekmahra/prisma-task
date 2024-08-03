import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import toyRoutes from './routes/toyRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api', toyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

