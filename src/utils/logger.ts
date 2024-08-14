import { config, createLogger, format, transports } from "winston";

export const logger = createLogger({
  format: format.combine(
    format.colorize({ all: true }),
    format.timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
    format.json(),
    format.align(),
    format.printf((i: any) => `[${i.level}]: ${i.timestamp} ${i.message}`)
  ),
  level: "info",
  levels: config.npm.levels,
  transports: [new transports.Console()],
});
