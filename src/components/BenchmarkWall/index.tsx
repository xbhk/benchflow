import { useState, useCallback, useRef } from 'react';
import { Benchmark } from '../../types';
import { ExpandedCard } from '../ExpandedCard';

interface BenchmarkWallProps {
  benchmarks: Benchmark[];
  position?: 'top' | 'bottom';
}

function hasCommonCategory(benchmark1: Benchmark, benchmark2: Benchmark): boolean {
  return benchmark1.categories.some(category => benchmark2.categories.includes(category));
}

export function BenchmarkWall({ benchmarks, position }: BenchmarkWallProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const getRelatedBenchmarks = useCallback((currentBenchmark: Benchmark) => {
    return benchmarks.filter(b => 
      b.id !== currentBenchmark.id && 
      hasCommonCategory(b, currentBenchmark)
    );
  }, [benchmarks]);

  const handleMouseEnter = (benchmark: Benchmark) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (benchmark.isHighlighted) {
      setHoveredId(benchmark.id);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const relatedTarget = e.relatedTarget as HTMLElement;
    
    // Check if we're moving between the item and its expanded card
    if (target.contains(relatedTarget) || 
        (relatedTarget && relatedTarget.closest('.interactive-area') === target)) {
      return;
    }

    if (!timeoutRef.current) {
      timeoutRef.current = window.setTimeout(() => {
        setHoveredId(null);
        timeoutRef.current = null;
      }, 100);
    }
  };

  const hoveredBenchmark = hoveredId ? benchmarks.find(b => b.id === hoveredId) : null;
  const relatedBenchmarks = hoveredBenchmark ? getRelatedBenchmarks(hoveredBenchmark) : [];

  return (
    <div className={`benchmark-wall ${position || ''}`}>
      {benchmarks.map((benchmark) => {
        const isHovered = benchmark.id === hoveredId;
        const isRelated = relatedBenchmarks.some(b => b.id === benchmark.id);
        
        return (
          <div 
            key={benchmark.id} 
            className={`benchmark-container ${isHovered && benchmark.isHighlighted ? 'interactive-area' : ''}`}
            onMouseEnter={() => handleMouseEnter(benchmark)}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`benchmark-item ${benchmark.isHighlighted ? 'highlighted' : ''} 
                         ${isRelated ? 'related' : ''} ${isHovered ? 'hovered' : ''}`}
            >
              {benchmark.name}
            </div>
            {isHovered && benchmark.isHighlighted && (
              <div className="expanded-container">
                <ExpandedCard {...benchmark} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
} 