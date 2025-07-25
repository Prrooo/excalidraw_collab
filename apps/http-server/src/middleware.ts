import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from 'jsonwebtoken'

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token: string = req.headers['authorization'] ?? "";
  if (!token) {
    res.status(401).json({
      message: "missing token"
    })
  }
  const decode: any = jwt.verify(token, JWT_SECRET)

  if (decode) {
    //@ts-ignore  1.17)
    req.userId = decode.userId;
    next();
  } else {
    res.status(403).json({
      message: "unauthorized"
    })
  }
}
