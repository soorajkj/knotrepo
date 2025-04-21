import { factory } from "~server/factory";
import { sessionMiddleware } from "~server/middlewares/session";
import { auth } from "~lib/auth";

const app = factory
  .createApp()
  .basePath("/api")
  .use(sessionMiddleware)
  .on(["POST", "GET"], "/auth/**", (c) => {
    return auth.handler(c.req.raw);
  });

export type HonoApp = typeof app;
export default app;
