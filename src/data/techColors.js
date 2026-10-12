// Single source of truth for tech accent colors across the site.
//
// Category = color:
//   accent (cyan)  -> Infrastructure & DevOps
//   green          -> Cloud & Data
//   orange         -> Languages & Frontend
//   ''  (neutral)  -> ambiguous / doesn't fit a single bucket
//
// Only "obvious" technologies get an accent. Anything not listed here
// intentionally falls back to the neutral grey pill.

const TECH_CATEGORY = {
  // ── Infra & DevOps (cyan / accent) ──
  Kubernetes: 'accent',
  K8s: 'accent',
  Helm: 'accent',
  'Helm Charts': 'accent',
  Docker: 'accent',
  Terraform: 'accent',
  Jenkins: 'accent',
  'GitHub Actions': 'accent',
  'CI/CD': 'accent',
  'Shell Scripts': 'accent',
  Git: 'accent',

  // ── Cloud & Data (green) ──
  GCP: 'green',
  AWS: 'green',
  'GCP Cloud Functions': 'green',
  Firebase: 'green',
  Firestore: 'green',
  Kafka: 'green',
  PostgreSQL: 'green',
  'Graph DBs': 'green',
  Hadoop: 'green',

  // ── Languages & Frontend (orange) ──
  Java: 'orange',
  'C#': 'orange',
  '.NET': 'orange',
  'Node.js': 'orange',
  Python: 'orange',
  'C++': 'orange',
  Swift: 'orange',
  TypeScript: 'orange',
  React: 'orange',
  Angular: 'orange',
  Vue: 'orange',
  Flutter: 'orange',
  SwiftUI: 'orange',
  Spring: 'orange',
  Django: 'orange',
};

// Combined labels used on the homepage hero (each side shares one category).
const COMBINED_LABELS = {
  'GCP / AWS': 'green',
  'TypeScript / Java / C#': 'orange',
};

export function getPillClass(label) {
  if (label in COMBINED_LABELS) return COMBINED_LABELS[label];
  return TECH_CATEGORY[label] ?? '';
}

export { TECH_CATEGORY };
