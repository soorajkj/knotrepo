import { factory } from "~server/factory";

export const sessionMiddleware = factory.createMiddleware(async (c, next) => {
  const auth = c.get("auth");

  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  c.set("user", session.user);
  c.set("session", session.session);
  await next();
});
