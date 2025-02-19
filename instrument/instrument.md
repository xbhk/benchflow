# Project Design Review: Benchmark Wall Interactive Display

## Core Requirements
1. **Dynamic Island 风格交互**
   - 卡片 hover 时类似 Dynamic Island 的展开效果
   - 平滑的动画过渡
   - 展开时显示更多 benchmark 详情

2. **视觉效果**
   - 背景渐变效果
   - 非焦点卡片的模糊效果
   - 鼠标移动时动态取消模糊

## Project Structure
```
src/
  components/     
    BenchmarkWall/        # 整体布局容器
      index.tsx           # 处理网格布局和背景渐变
      styles.ts   
    BenchmarkCard/        # 基础卡片组件
      index.tsx           # 处理基础展示和 hover 状态
      styles.ts
    ExpandedCard/         # 展开状态组件
      index.tsx           # 处理 Dynamic Island 展开效果
      styles.ts
  data/
    benchmarks.ts         # benchmark 数据配置(接口和具体的benchmark数据)
  hooks/
    useMousePosition.ts   # 处理鼠标位置和模糊效果
```


完整的交互流程：

1. 初始状态：
- 显示所有 benchmark tags
- 有一些 tag 是高亮状态（深色背景白字，如图中的 LegalBench, Stanford HELM）
- 只有这些高亮状态的 tag 才能展开成卡片
- 其他 tag 是模糊的普通状态

2. 当鼠标移动到高亮 tag 时：
- 该 tag 展开成卡片（像 MLE-bench 那样）
- 相关联的 tag 会变成白背景黑字样式（如图中的 SuperGLUE, STS）
（是否相关联我们使用  categories: string[];  使用类别标签来判断，如果类别标签有交集，则认为相关联）
- 其他不相关的 tag 保持模糊状态

3. 当鼠标移动时：
- 靠近鼠标的区域的模糊 tag 会变清晰
- 但它们不会展开成卡片（因为不是高亮状态）

所以关键是：
- 只有预设为高亮状态的 tag 才有完整的展开卡片交互
- 其他 tag 只有模糊/清晰的状态变化
- 相关联的 tag 会用不同样式（白底黑字）标示出来


