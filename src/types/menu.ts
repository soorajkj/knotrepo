interface BaseNode {
  key: string;
  label: string;
}

interface NodeLevel extends BaseNode {
  href: string;
  nodes?: Node[];
}

export interface Node extends BaseNode {
  nodes?: NodeLevel[];
}
