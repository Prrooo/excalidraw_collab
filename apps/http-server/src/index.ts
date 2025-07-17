import express from 'express'
const app = express();

const port = 3010;

app.listen(port, () => {
  console.log(`express start at ${port}`);
})

