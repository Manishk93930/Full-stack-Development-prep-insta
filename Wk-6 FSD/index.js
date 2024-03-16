const express = require('express');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/foodRoutes');
const db = require('./config/db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/food', foodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
