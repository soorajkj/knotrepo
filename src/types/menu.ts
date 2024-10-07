import { IconTypes } from "@/components/core/icon";

export type Node = {
  key: string;
  label: string;
  icon?: IconTypes;
  nodes?: Node[];
  href?: string;
  group?: boolean;
};
