import { Benchmark } from '../../types';
import './index.css';

export function ExpandedCard({ name, description, organization }: Benchmark) {
  return (
    <div className="benchmark-card expanded">
      <div>{name}</div>
      {description && <div className="description">{description}</div>}
      {organization && (
        <div className="organization">
          <span>{organization.name}</span>
          <a 
            href={organization.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="org-icon"
          >
            <img 
              src={organization.iconUrl} 
              alt={`${organization.name} logo`} 
              width="24" 
              height="24"
            />
          </a>
        </div>
      )}
    </div>
  );
} 