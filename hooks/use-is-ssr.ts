import * as React from "react";

export default function useIsSSR() {
  const [isSSR, setIsSSR] = React.useState(true);

  React.useEffect(() => {
    setIsSSR(false);
  }, []);

  return { isSSR };
}
