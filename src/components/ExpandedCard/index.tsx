import { Benchmark } from '../../types';

export function ExpandedCard({ name, description, organization }: Benchmark) {
  return (
    <div className="benchmark-card expanded">
      <div>{name}</div>
      {description && <div className="description">{description}</div>}
      {organization && <div className="organization">{organization.name}</div>}
    </div>
  );
} 