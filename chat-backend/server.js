const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');
require("dotenv").config()
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/messages', messageRoutes);
app.use('/api', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});