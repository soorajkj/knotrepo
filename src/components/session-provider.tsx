"use client";

import * as React from "react";
import { Session } from "~lib/auth";

export type SessionContextType = {
  session: Session;
};

export const SessionContext = React.createContext<SessionContextType>({
  session: null,
});

interface SessionProviderProps {
  children: React.ReactNode;
  session: Session;
}

export default function SessionProvider(props: SessionProviderProps) {
  const { children, session } = props;

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
}
