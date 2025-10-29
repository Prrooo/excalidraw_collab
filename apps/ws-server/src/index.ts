import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config"
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket, req) => {
  const url: string | undefined = req.url;
  if (!url) return;
  const query = new URLSearchParams(url.split('?')[1]);
  const token = query.get("token") ?? "";

  console.log(token, " ", JWT_SECRET);

  // const decode: JwtPayload | string = jwt.verify(token, JWT_SECRET)


  // if (typeof decode == "string") {
  //   socket.close();
  //   return;
  // }
  //
  // if (!decode || !decode.userId) {
  //   socket.close();
  //   return;
  // }

  socket.on("message", (mess) => {
    const message = mess.toString();
    if (message === "ping") {
      socket.send("pong");
    }
  })
})
