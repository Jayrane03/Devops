const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello, Jenkins!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
