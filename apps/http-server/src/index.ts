import express from 'express'
import jwt from 'jsonwebtoken'
import { middleware } from './middleware';

const app = express();

const port = 3010;

app.post('/signup', (req, res) => {
  res.json({
    userId: 123
  })
})

app.post('/signin', (req, res) => {
  // db calls

  const userId = 1;

  const token = jwt.sign({
    userId
  }, process.env.JWT_SECRET!);

  res.json({
    token,
  })
})

app.post('/room', middleware, (req, res) => {

})

app.listen(port, () => {
  console.log(`express start at ${port}`);
})

