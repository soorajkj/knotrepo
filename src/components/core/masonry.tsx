import * as React from "react";
import _ from "lodash";
import { cn } from "@/utils/classnames";

interface MesonryProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
}

export default function Masonry(props: MesonryProps) {
  const { children, count = 3, className } = props;

  const data = React.useMemo(() => {
    const group = _.times(count, () => [] as React.ReactNode[]);
    React.Children.toArray(children).forEach((child, index) => {
      return group[index % count].push(child);
    });

    return group;
  }, [children, count]);

  return (
    <div
      className={cn("grid grid-flow-col gap-6", className)}
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {data.map((column, index) => (
        <div key={index} className="flex flex-1 flex-col gap-6">
          {column.map((child, childIndex) => (
            <React.Fragment key={childIndex}>{child}</React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
