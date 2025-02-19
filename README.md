# Benchflow

## 在线体验

[Benchflow](http://195.35.9.126/)

## 交互流程

1. 初始状态：
- 显示所有 benchmark tags
- 有一些 tag 是高亮状态（黑色背景白字）
- 只有这些高亮状态的 tag 才能展开成卡片
- 其他 tag 是模糊的普通状态

2. 当鼠标移动到高亮 tag 时：
- 该 tag 展开成卡片
- **相关联**的 tag 也会变成灰色状态
- 其他不相关的 tag 保持模糊状态

3. 当鼠标移动时：
- 靠近鼠标的区域的模糊 tag 会变清晰
- 但它们不会展开成卡片（因为不是高亮状态）

## 修改数据

在 `src/types.ts` 中定义数据类型
在 `src/data/benchmarks.ts` 中修改数据

修改关联关系：修改categories
修改高亮状态：修改isHighlighted

## 项目结构

```
src/
├── components/          # React components
│   ├── BenchmarkWall/  # Main wall display
│   ├── BenchmarkCard/  # Individual benchmark cards
│   └── ExpandedCard/   # Expanded view component
├── types/              # TypeScript definitions
├── data/              # Benchmark data
├── styles/            # Global styles
└── app/               # Core application files
```

## 开始

### 前提条件

- Node.js (v14 或更高版本)
- npm 或 yarn

### 安装

1. 克隆仓库:
```bash
git clone https://github.com/xbhk/benchflow.git
```

2. 安装依赖:
```bash
npm install
# or
yarn install
```

3. 启动开发服务器:
```bash
npm run dev
# or
yarn dev
```


