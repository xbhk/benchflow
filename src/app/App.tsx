import './App.css'
import { benchmarks } from '../data/benchmarks';
import { BenchmarkWall } from '../components/BenchmarkWall';

function App() {
  // Split benchmarks into two halves
  const midPoint = Math.ceil(benchmarks.length / 2);
  const topBenchmarks = benchmarks.slice(0, midPoint);
  const bottomBenchmarks = benchmarks.slice(midPoint);

  return (
    <div className="app-container">
      <BenchmarkWall benchmarks={topBenchmarks} position="top" />
      <h1 className="title">Find the Right Benchmark</h1>
      <BenchmarkWall benchmarks={bottomBenchmarks} position="bottom" />
      {/*<BenchmarkCard {...benchmarks.find(b => b.id === 'mle-bench')!} />*/}
    </div>
  );
}

export default App
