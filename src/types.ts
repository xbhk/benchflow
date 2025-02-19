export interface Organization {
  name: string;
  url: string;
  iconUrl: string;
}

export interface Benchmark {
  id: string;
  name: string;
  description: string;
  organization?: Organization;
  isHighlighted: boolean;
  categories: string[];
} 