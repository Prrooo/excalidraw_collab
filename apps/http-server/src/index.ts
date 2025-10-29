import express from 'express'
import jwt from 'jsonwebtoken'
import { CreateRoomSchema, CreateUserSchema, SignUpSchema } from "@repo/common/types"
import { middleware } from './middleware';
import { JWT_SECRET } from '@repo/backend-common/config';

const app = express();

const port = 3010;

app.post('/signup', (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Invalid Input"
    })
    return;
  }
  res.json({
    userId: 123
  })
})

app.post('/signin', (req, res) => {

  const data = SignUpSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Invalid Input"
    })
    return;
  }

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

  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Invalid Input"
    })
    return;
  }

})

app.listen(port, () => {
  console.log(`express start at ${port}`);
})

