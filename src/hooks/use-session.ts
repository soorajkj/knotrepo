import * as React from "react";
import { SessionContext } from "~components/SessionProvider";

export const useSession = () => {
  const context = React.useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
};
