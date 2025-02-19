import { Benchmark } from '../../types';

export function BenchmarkCard({ name, description, organization }: Benchmark) {
  return (
    <div className="benchmark-card">
      <div>{name}</div>
      {description && <div className="description">{description}</div>}
      {organization && <div className="organization">{organization.name}</div>}
    </div>
  );
} 