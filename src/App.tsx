import './App.css'

interface BenchmarkItem {
  name: string;
  isLight?: boolean;
  description?: string;
  organization?: string;
}

function BenchmarkCard({ name, description, organization }: BenchmarkItem) {
  return (
    <div className="benchmark-card">
      <div>{name}</div>
      {description && <div className="description">{description}</div>}
      {organization && <div className="organization">{organization}</div>}
    </div>
  );
}

function App() {
  const benchmarks: BenchmarkItem[] = [
    { name: "MLE-bench", description: "A benchmark for measuring how well AI agents perform at machine learning engineering." },
    { name: "SWE-bench Multimodal" },
    { name: "SuperGLUE", isLight: true },
    { name: "LegalBench" },
    { name: "Stanford HELM" }
  ];

  return (
    <div className="app-container">
      <div className="title">Find the Right Benchmark</div>
      
      <div className="benchmark-wall">
        {benchmarks.map((benchmark, index) => (
          <div 
            key={index}
            className={`benchmark-item ${benchmark.isLight ? 'light' : ''}`}
          >
            {benchmark.name}
          </div>
        ))}
      </div>

      <BenchmarkCard 
        name="MLE-bench"
        description="A benchmark for measuring how well AI agents perform at machine learning engineering."
        organization="Organization"
      />
    </div>
  );
}

export default App
