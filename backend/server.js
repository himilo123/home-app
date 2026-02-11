
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import serviceRoutes from './routes/services.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/services', serviceRoutes);

app.get('/', (req, res) => {
  res.send('HOME Maintenance API running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server is live on port ${PORT}`);
});
