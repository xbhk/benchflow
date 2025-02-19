import './App.css'
import { Benchmark } from '../types';
import { benchmarks } from '../data/benchmarks';

function BenchmarkCard({ name, description, organization }: Benchmark) {
  return (
    <div className="benchmark-card">
      <div>{name}</div>
      {description && <div className="description">{description}</div>}
      {organization && <div className="organization">{organization.name}</div>}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Find the Right Benchmark</h1>
      
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

      <BenchmarkCard {...benchmarks.find(b => b.id === 'mle-bench')!} />
    </div>
  );
}

export default App
