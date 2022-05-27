import { DateDuration } from "./BaseModels";

export interface ProjectDetail {
  name: string;
  category: string;
  description: string;
  duration: DateDuration;
  images: string[];
  skills: string[];
}
