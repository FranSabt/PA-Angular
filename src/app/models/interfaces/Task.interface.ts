export enum Levels {
  "info",
  "urgent",
  "block"
}

export interface Task {
  title: string;
  description: string;
  completed: boolean;
  level: Levels,
}
