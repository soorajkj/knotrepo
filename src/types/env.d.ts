/* eslint-disable no-unused-vars */

import { envSchemaType } from "@/schemas/env";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends envSchemaType {}
  }
}
