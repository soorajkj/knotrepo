import React, { HTMLAttributes } from "react";

interface AppProviderProps extends HTMLAttributes<HTMLDivElement> {}

export default function AppProvider(props: AppProviderProps) {
  return <>{props.children}</>;
}
