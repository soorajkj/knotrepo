"use client";

import * as React from "react";
import _ from "lodash";
import { useWindowSize } from "usehooks-ts";
import { cn } from "@/utils/cn";

type Breakpoints = Record<number, number>;
type Columns = number | Breakpoints;

const DEFAULT_COLUMNS = 3;

const columnCount = (breakpoints: Breakpoints, width: number): number => {
  const sortedBreakPoints = Object.entries(breakpoints)
    .map(([breakpoint, column]) => ({ breakpoint, column }))
    .sort((a, b) => parseInt(a.breakpoint) - parseInt(b.breakpoint));

  let count = sortedBreakPoints[0].column;
  for (let i = 0; i < sortedBreakPoints.length; i++) {
    if (width >= parseInt(sortedBreakPoints[i].breakpoint)) {
      count = sortedBreakPoints[i].column;
    }
  }

  return count;
};

const useColumnsCount = (columns: Columns) => {
  const { width } = useWindowSize();

  const columnsCount = React.useMemo(() => {
    if (!_.isObject(columns)) return columns;
    return columnCount(columns as Breakpoints, width);
  }, [columns, width]);

  return columnsCount;
};

const useMasonry = (children: React.ReactNode, columns: Columns) => {
  const count = useColumnsCount(columns);

  const columnData = React.useMemo(() => {
    const group = _.times(count, () => [] as React.ReactNode[]);
    React.Children.toArray(children).forEach((child, index) => {
      return group[index % count].push(child);
    });

    return group;
  }, [children, count]);
  return columnData;
};

const Masonry = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    columns?: Columns;
    gap?: number;
  }
>((props, ref) => {
  const {
    children,
    columns = DEFAULT_COLUMNS,
    gap = 16,
    className,
    style,
    ...rest
  } = props;

  const columnData = useMasonry(children, columns);

  return (
    <div
      ref={ref}
      className={cn("grid grid-flow-col", className)}
      style={{
        gridTemplateColumns: `repeat(${useColumnsCount(columns)}, minmax(0, 1fr))`,
        gap: `${gap}px`,
        ...style,
      }}
      {...rest}
    >
      {columnData.map((column, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col"
          style={{ gap: `${gap}px` }}
        >
          {column.map((child, childIndex) => (
            <React.Fragment key={childIndex}>{child}</React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
});

Masonry.displayName = "Masonry";
export default Masonry;
