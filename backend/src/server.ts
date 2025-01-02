import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/UserRoutes';

dotenv.config();

const app = express();
connectDB();

app.use(
    cors({
      origin: "http://localhost:5173", // Your frontend URL
      credentials: true, // Allow cookies and credentials
    })
  );
  
app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
