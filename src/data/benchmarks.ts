import { Organization, Benchmark } from '../types';

// Organizations
export const organizations: { [key: string]: Organization } = {
  anthropic: {
    name: "Anthropic",
    url: "https://www.anthropic.com",
    iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAbFBMVEXRm3X///8lJSXQmHHlybchIyTVnncpKCctKii5imrFk3DZoXkAERoeISMXHSCfeF3OlWvoz74AFRyRblYNGB5CODHy5NrToHyYc1mwhGV/Yk1pUkJURDk5Mi0AChczLit1WkhdSj1KPTQAABXFdhFSAAAFm0lEQVR4nO2cDZOaPBDHKXeJkghUQc931H7/7/igd+3tf02AyioP02w7085E735s2Jf/hiH6MQKLhgboYgFSygKklAVIKQuQUhYgpcwPuZq/v9Tmq7+GXH28vdw+fJgeyPnPaAD7Of8byNUgjDWl25duyI9hGKPoozvk6m0oyMjpSifkfDDGyHlXOiHfB/Pk23uADJABMkAGyAAZIANkgAyQATJADgapLTUNaw1Lr4TUJkeji2Zd3Gx9tTw3g0Fuf82olRvqsHK2+LTb2rqbL5+w3cs0ppZtCYnelnRp1+0nikPqfAGMsTqQTdXJhK6lSSdXikPafYaQcbm2ZP1Ml8ut9f6gJ0JqwxxZu2tJSPSaQqrJIJ60J+7IOD7Cpk4VdWXexZXSkGap7iCzEyGxJxo66bmLK4UhdX7vyGvofKPohEKqatOBUhpy54CMs4KSQGRBgnoNpDbZ/W7XJGf6mQL2e9nOKAxpIVeT+CCbqs2BXsisQ+gIb3flcmQNuaNZCG6JdP9iSOsKm0+jobOZ0RXVXnVkPXn2QULoWKju2emlkDqZunf7uqnkc7agVSm9tDZsopAYNgCc0nxo4GKyvM2VopDwu9VhSkl2lARqZ7Z/IaTeHKnvJmtaIZWiDVsOXp6ZFkpBSLun8ZBeMGnOCppqLtBlnFqykBxkHTbUPYvCJtSzUFosVB1oi58MWUD+KY3GVKOg6kDXmbaEjhykYdnP1g2uV9BYyKhQ258JqXPIP9nVbwmt0qpKvJ9uqTpikKht0v31NtOQakoaOuZC/d6idaQgtYH8k96AMNWkFe0ytqB1spd4kjdpX/sHXdmRhk4C6nzR2LBJQaK2yb5aM0TPqKDht0eTK4UgeQ358pk24N+KxIfOoWGbNmkdKU9iI/uduDHVgNaZgO+btI4MpE4wkf+BQfUIVQd7JlU1eEAG0m4X8Av/bKvGe3VBQ2cDY6FZQ9UR8iQ0aSlpy3CikZ1pEPOG5LmQbCQA2jDhFf2bn9Uof9WR8SSEjZpSn9gDxgddA/6G0JGA1Ako2QWANAgai9e29DZsIpAFdgvYaJuJT9DoDbrSO5wWgTxAk8ZnzOAv1Do4FvJO2AQgLWobxXKJzqFKl7TqwESVzTGFIc/QgC+5rMJUSbsyNhbyap3+kEzb1PGr0Sx2ZQf6XQydyiMbBSC3OFuBOnIzuIg4JXN+NhbC2i4JiT321SHccBkCi8WcR+v0htQb90jSayom8YFZ1Heu0xvSeidpPgNBg3XAEzp9IXV09NJ4XUndhaFTPgXSN4BusiMRNLylX7soe2+349ymzfDwBlKlW+v0hGSO6GhU0GC/HE9cWqevJ53nNm1GuzJtsOE8yXvSPIBYbyqcLqOGc03Y+kGyNFcHbv3n8+/vf3//Fz63gNABV7pCpx8kaptYTfwGmCBosGTBwbMEJHNCtk38xmQQbdiw+Du0Tj9IDJvMaL/hWIWeLrPQcZzr9IFk2gb16t0FrUGa067TXpob0n6QqG2a5H3UdHij19iw3WmdXtsNfVbbeJ49bUOPyPAHZRf+1R6QrGMtW84I9SaGj/tDZ8ZDpwckb9JaH1SAsQrtyvQGmve7hu1xSP4c0t0mcbNw66mY3h3AH09Z6PSALFCqdngOCcpTRub8yF/LIClIpm2ObQeEfKwCp8sRPLuRMq3zMCSrNq5qxo3JIXq6bHfepT6Q6JZ45lGjYOzwBkIHIFnoPAqpzS+V3uymWtOqy/OatsiI0k0XEbmwPV1SR/jeo5C2mC4/rTocDtXk1IHxWkcn02+jpUUXdGWKVUdmiGo6PvdafxCs49I/+3R0gAyQATJABsgAGSADZIAMkAEyQI4AchSv4hnFS41G8XqocbxoaxSvLBvHy99+jOI1ev8rC5BSFiClLEBKWYCUsgApZaOA/A8au4l7+VB+9AAAAABJRU5ErkJggg=="
  },
  stanford: {
    name: "Stanford University",
    url: "https://stanford.edu",
    iconUrl: "data:image/png;base64,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"
  },
  microsoft: {
    name: "Microsoft Research",
    url: "https://www.microsoft.com/research/",
    iconUrl: "data:image/png;base64,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"
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
    id: "webarena-v2",
    name: "WebArena V2",
    description: "Enhanced version of WebArena with more complex web interaction scenarios",
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
    id: "mle-bench-pro",
    name: "MLE-bench Pro",
    description: "Advanced version of MLE-bench with focus on production ML systems",
    organization: organizations.anthropic,
    categories: ["machine-learning", "engineering", "agent", "production"],
    isHighlighted: false
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
    organization: organizations.microsoft,
    categories: ["software-engineering", "coding", "multimodal"],
    isHighlighted: true
  },
  {
    id: "swe-bench-enterprise",
    name: "SWE-bench Enterprise",
    description: "Enterprise-focused version of SWE-bench for large-scale systems",
    categories: ["software-engineering", "coding", "enterprise"],
    isHighlighted: false
  },
  {
    id: "agentbench",
    name: "Agentbench",
    description: "Comprehensive benchmark for AI agent capabilities",
    categories: ["agent", "reasoning"],
    isHighlighted: false
  },
  {
    id: "agentbench-pro",
    name: "Agentbench Pro",
    description: "Extended version of Agentbench with complex multi-agent scenarios",
    categories: ["agent", "reasoning", "multi-agent"],
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
    id: "tau-bench-extended",
    name: "Tau (𝜏)-Bench Extended",
    description: "Extended version of Tau-bench with complex temporal reasoning tasks",
    categories: ["reasoning", "temporal", "advanced"],
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
    id: "bird-sql-advanced",
    name: "BIRD-SQL Advanced",
    description: "Advanced SQL benchmark with complex query optimization tasks",
    categories: ["database", "sql", "optimization"],
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
    id: "legalbench-international",
    name: "LegalBench International",
    description: "International version of LegalBench covering multiple jurisdictions",
    organization: organizations.stanford,
    categories: ["legal", "reasoning", "international"],
    isHighlighted: false
  },
  {
    id: "sts",
    name: "Semantic Textual Similarity",
    description: "Benchmark for measuring semantic similarity between texts",
    categories: ["nlp", "similarity"],
    isHighlighted: false
  },
  {
    id: "sts-multilingual",
    name: "Semantic Textual Similarity Multilingual",
    description: "Multilingual extension of STS benchmark",
    categories: ["nlp", "similarity", "multilingual"],
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
    id: "ms-marco-v2",
    name: "GLUE MS Marco V2",
    description: "Enhanced version of MS Marco with more diverse question types",
    organization: organizations.microsoft,
    categories: ["nlp", "reading-comprehension", "qa"],
    isHighlighted: false
  },
  {
    id: "helm",
    name: "Stanford HELM",
    description: "Holistic evaluation of language models",
    organization: organizations.stanford,
    categories: ["language-models", "evaluation"],
    isHighlighted: true
  },
  {
    id: "helm-extended",
    name: "Stanford HELM Extended",
    description: "Extended version of HELM with additional evaluation metrics",
    organization: organizations.stanford,
    categories: ["language-models", "evaluation", "metrics"],
    isHighlighted: false
  }
]; 