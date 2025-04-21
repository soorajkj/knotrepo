import { createFactory } from "hono/factory";
import { AppBindings } from "~types/app";
import { auth } from "~lib/auth";
import { prisma } from "~lib/prisma";

export const factory = createFactory<AppBindings>({
  initApp: (app) => {
    app.use(async (c, next) => {
      c.set("db", prisma);
      await next();
    });
    app.use(async (c, next) => {
      c.set("auth", auth);
      await next();
    });
  },
});
