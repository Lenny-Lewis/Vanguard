export interface Project {
  id: string
  title: string
  client: string
  category: string
  year: string
  image: string
  description: string
  stats?: string
}

export const projects: Project[] = [
  {
    id: 'aura-kinetics',
    title: 'AURA KINETICS',
    client: 'Aura Robotics Group',
    category: 'Immersive Web / 3D',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    description: 'Autonomous kinetic systems platform redefining human-machine physical interfaces.',
    stats: '+180% Engagement',
  },
  {
    id: 'valkyrie-motorsports',
    title: 'VALKYRIE MOTORSPORTS',
    client: 'Valkyrie Global',
    category: 'Brand Identity & Film',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    description: 'Electric hypercar branding, cinematic reveal campaign, and bespoke typography system.',
    stats: 'Global Red Dot Winner',
  },
  {
    id: 'neo-synthetic',
    title: 'NEO-SYNTHETIC',
    client: 'Synthetic Intelligence Co',
    category: 'Digital Product Design',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    description: 'A revolutionary spatial computing workspace built for autonomous neural architectures.',
    stats: '$42M Series A Raised',
  },
  {
    id: 'chrono-vault',
    title: 'CHRONO VAULT',
    client: 'Atelier de Geneve',
    category: 'Editorial & Packaging',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    description: 'Exclusive luxury timepiece archive with tactile micro-interactions and tactile unboxing.',
    stats: 'Sold Out in 4 Hours',
  },
  {
    id: 'solaris-sound',
    title: 'SOLARIS AUDIO',
    client: 'Solaris Systems',
    category: 'Spatial Interaction',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    description: 'Bespoke hardware sound synthesis interface tailored for world-class producers.',
    stats: 'Best Sound Design 2025',
  },
  {
    id: 'vortex-archives',
    title: 'VORTEX ARCHIVES',
    client: 'Maison Vortex Paris',
    category: 'Brutalist Fashion Editorial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    description: 'High-contrast monochrome digital runway experience with dynamic viewport typography.',
    stats: '4.8M Impressions',
  },
  {
    id: 'hyperion-labs',
    title: 'HYPERION LABS',
    client: 'Orbital Dynamics',
    category: 'Deep-Tech Visual Identity',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    description: 'Brand identity system engineered for deep-space commercial payloads and telemetries.',
    stats: 'Enterprise Contract Award',
  },
  {
    id: 'obsidian-kin',
    title: 'OBSIDIAN KIN',
    client: 'Obsidian Atelier',
    category: 'High Jewelry & 3D Art',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    description: 'Monolithic digital showroom showcasing rare meteorite and platinum ring collections.',
    stats: 'FWA of the Day',
  },
]
