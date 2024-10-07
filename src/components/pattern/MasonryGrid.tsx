"use client";

import * as React from "react";
import _ from "lodash";
import { useWindowSize } from "usehooks-ts";
import { cn } from "@/utils/cn";
import useTailwind from "@/hooks/use-tailwind";

function splitColumns<T>(data: T[], numberOfColumns: number): T[][] {
  const columnsArray = _.times(numberOfColumns, () => [] as T[]);
  _.forEach(data, (item, index) => {
    columnsArray[index % numberOfColumns].push(item);
  });
  return columnsArray;
}

type SpacingKey = keyof ReturnType<typeof useTailwind>["spacing"];

interface MasonryGridProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items?: T[];
  gap?: SpacingKey;
  breakpoints?: Record<number, number>;
  defaultColumns?: number;
}

export default function MasonryGrid<T>(props: MasonryGridProps<T>) {
  const {
    children,
    breakpoints,
    defaultColumns = 3,
    className,
    style,
    ...rest
  } = props;
  const [columns, setColumns] = React.useState(defaultColumns);
  const { width } = useWindowSize();

  React.useEffect(() => {
    if (!breakpoints) {
      setColumns(defaultColumns);
      return;
    }

    const sortedBreakpoints = Object.keys(breakpoints)
      .map(Number)
      .sort((a, b) => a - b);

    for (let i = 0; i < sortedBreakpoints.length; i++) {
      const breakpoint = sortedBreakpoints[i];
      if (width < breakpoint) {
        setColumns(breakpoints[sortedBreakpoints[i - 1]] || defaultColumns);
        return;
      }
    }

    setColumns(
      breakpoints[sortedBreakpoints[sortedBreakpoints.length - 1]] ||
        defaultColumns
    );
  }, [width, breakpoints, defaultColumns]);

  const columnData = React.useMemo(
    () => splitColumns(React.Children.toArray(children), columns),
    [children, columns]
  );

  return (
    <div
      className={cn("grid gap-4", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        ...style,
      }}
      {...rest}
    >
      {columnData.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {column.map((child, childIndex) => (
            <React.Fragment key={childIndex}>{child}</React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
