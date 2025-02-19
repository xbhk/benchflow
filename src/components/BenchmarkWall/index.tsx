import { Benchmark } from '../../types';

interface BenchmarkWallProps {
  benchmarks: Benchmark[];
}

export function BenchmarkWall({ benchmarks }: BenchmarkWallProps) {
  return (
    <div className="benchmark-wall">
      {benchmarks.map((benchmark) => (
        <div 
          key={benchmark.id}
          className={`benchmark-item ${benchmark.isHighlighted ? 'highlighted' : ''}`}
        >
          {benchmark.name}
        </div>
      ))}
    </div>
  );
} 