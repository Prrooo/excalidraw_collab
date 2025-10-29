import { z } from "zod"

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string(),
  name: z.string()
})

export const SignUpSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string()
})

export const CreateRoomSchema = z.object({
  username: z.string(),
  roomId: z.number()
})
