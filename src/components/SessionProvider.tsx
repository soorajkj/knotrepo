"use client";

import * as React from "react";
import { Session } from "~types/auth";

interface SessionProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  session: Session | null;
}

export const SessionContext = React.createContext<Session | null>(null);

export default function SessionProvider(props: SessionProviderProps) {
  const { session, children } = props;

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
