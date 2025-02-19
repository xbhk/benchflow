import { Organization, Benchmark } from '../types';

// Organizations
export const organizations: { [key: string]: Organization } = {
  anthropic: {
    name: "Anthropic",
    url: "https://www.anthropic.com",
    iconUrl: "/icons/anthropic.svg"
  },
  stanford: {
    name: "Stanford University",
    url: "https://stanford.edu",
    iconUrl: "/icons/stanford.svg"
  },
  microsoft: {
    name: "Microsoft Research",
    url: "https://www.microsoft.com/research/",
    iconUrl: "/icons/microsoft.svg"
  }
};

// Benchmarks data
export const benchmarks: Benchmark[] = [
  {
    id: "webarena",
    name: "WebArena",
    description: "A benchmark for evaluating LLMs on web-based tasks",
    categories: ["web", "interaction", "agent"],
    isHighlighted: false
  },
  {
    id: "mle-bench",
    name: "MLE-bench",
    description: "A benchmark for measuring how well AI agents perform at machine learning engineering.",
    organization: organizations.anthropic,
    categories: ["machine-learning", "engineering", "agent"],
    isHighlighted: true
  },
  {
    id: "swe-bench",
    name: "SWE-bench",
    description: "Software engineering capabilities benchmark",
    categories: ["software-engineering", "coding"],
    isHighlighted: false
  },
  {
    id: "swe-bench-multimodal",
    name: "SWE-bench Multimodal",
    description: "Multimodal extension of SWE-bench for code understanding",
    categories: ["software-engineering", "coding", "multimodal"],
    isHighlighted: true
  },
  {
    id: "agentbench",
    name: "Agentbench",
    description: "Comprehensive benchmark for AI agent capabilities",
    categories: ["agent", "reasoning"],
    isHighlighted: false
  },
  {
    id: "tau-bench",
    name: "Tau (𝜏)-Bench",
    description: "Time-aware understanding benchmark",
    categories: ["reasoning", "temporal"],
    isHighlighted: false
  },
  {
    id: "bird-sql",
    name: "BIRD-SQL",
    description: "Benchmark for SQL generation and understanding",
    categories: ["database", "sql"],
    isHighlighted: false
  },
  {
    id: "legalbench",
    name: "LegalBench",
    description: "Comprehensive benchmark for legal reasoning and understanding",
    organization: organizations.stanford,
    categories: ["legal", "reasoning"],
    isHighlighted: true
  },
  {
    id: "sts",
    name: "Semantic Textual Similarity",
    description: "Benchmark for measuring semantic similarity between texts",
    categories: ["nlp", "similarity"],
    isHighlighted: false
  },
  {
    id: "ms-marco",
    name: "GLUE MS Marco",
    description: "Large scale machine reading comprehension benchmark",
    organization: organizations.microsoft,
    categories: ["nlp", "reading-comprehension"],
    isHighlighted: false
  },
  {
    id: "helm",
    name: "Stanford HELM",
    description: "Holistic evaluation of language models",
    organization: organizations.stanford,
    categories: ["language-models", "evaluation"],
    isHighlighted: true
  }
]; 