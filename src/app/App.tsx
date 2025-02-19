import './App.css'
import { benchmarks } from '../data/benchmarks';
import { BenchmarkWall } from '../components/BenchmarkWall';
import { BenchmarkCard } from '../components/BenchmarkCard';

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Find the Right Benchmark</h1>
      <BenchmarkWall benchmarks={benchmarks} />
      <BenchmarkCard {...benchmarks.find(b => b.id === 'mle-bench')!} />
    </div>
  );
}

export default App
