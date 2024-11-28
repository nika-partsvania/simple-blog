import { z } from "zod";

export const loginFormSchema = z.object({
  username: z.string().min(5).email({ message: "invalid-email" }),
  password: z.string(),
  tag: z.array(z.string()).min(1),
});
