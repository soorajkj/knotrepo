import React from "react";
import * as NextSession from "next-auth/react";

interface SessionProviderProps extends NextSession.SessionProviderProps {}

export default function SessionProvider(props: SessionProviderProps) {
  const { children, session } = props;

  return (
    <NextSession.SessionProvider session={session}>
      {children}
    </NextSession.SessionProvider>
  );
}
