interface Organization {
  name: string;
  url: string;
  iconUrl: string;  // 手动管理的图标URL
}

interface Benchmark {
  id: string;
  name: string;
  description: string;
  organization?: Organization;
  isHighlighted: boolean;
  categories: string[];  // 用于判断标签之间是否相关（通过类别交集）
}