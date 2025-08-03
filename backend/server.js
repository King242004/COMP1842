const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect = require('./db/dbConnect');
require('dotenv').config();

require('./api/models/productModel');
const productRoutes = require('./api/routes/productRoutes');

// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/products', productRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Vocab Builder API' });
});

// Connect to DB
dbConnect();

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
