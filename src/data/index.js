import { LayoutDashboard } from "lucide-react"
import dharithriIcon from '../assets/projects/dharithri.svg';


export const projectsData = [  
  {
    id: 1,
    title: 'DHARITHRI — Postnatal Care',
    description:
      'A modern, responsive postnatal care platform featuring a specialized pink-themed UI, interactive facility galleries, and mobile-first architecture for maternal wellness.',
    imageSrc: dharithriIcon,
    gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 50%, #f06292 100%)',
    accentColor: '#e91e63',
    tags: ['React', 'CSS3', 'Mobile-First', 'Responsive Design'],
    liveLink: 'https://dharithri-bwezvno0g-abhinand-vs-projects.vercel.app/', // Replace with your deployment URL (e.g., Netlify/Vercel link)
    solution: 'Postnatal Wellness Web App',
},
{
  id: 2,
  title: 'LOKWEDDING — Creative Studio',
  description:
    'A high-end photography portfolio featuring masonry grid layouts, lazy-loading image optimization, and a seamless client booking system for professional shoots.',
  imagePlaceholder: '📸', // You can replace this with an imported SVG later
  gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 50%, #000000 100%)',
  accentColor: '#fab1a0',
  tags: ['Next.js', 'Framer Motion', 'Cloudinary', 'Tailwind CSS'],
  liveLink: '#',
  solution: 'Digital Portfolio Website',
},
{
  id: 3,
  title: 'Project Alpha — E-Commerce',
  description:
    'Apple-inspired product showcase with fluid transitions, 3D product views, and a conversion-optimized checkout. Delivered $12M in year-one revenue for our client.',
  imagePlaceholder: '🛍️',
  gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
  accentColor: '#3b82f6',
  tags: ['React', 'Node.js', 'AWS', 'Stripe', 'Redis'],
  liveLink: '#',
  solution: 'Full-Stack E-Commerce Platform',
}
]

export const servicesData = [
  {
    id: '01',
    icon: '⚡',
    title: 'Web Architecture',
    description:
      'Hyper-performant web platforms built with React, Next.js, and modern JAMstack — optimized for speed, SEO, and conversion at scale.',
  },
  {
    id: '02',
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description:
      'AWS, GCP, and Azure solutions designed for infinite scalability. We architect systems that handle millions of users without breaking a sweat.',
  },
  {
    id: '03',
    icon: '🤖',
    title: 'AI Integration',
    description:
      'Embed cutting-edge AI and ML pipelines into your product — from intelligent search to predictive analytics and LLM-powered workflows.',
  },
  {
    id: '04',
    icon: '📱',
    title: 'Mobile Engineering',
    description:
      'Native and cross-platform mobile apps that deliver pixel-perfect UI with native performance on iOS and Android.',
  },
  {
    id: '05',
    icon: '🔐',
    title: 'Security & DevOps',
    description:
      'Zero-trust architecture, CI/CD pipelines, and penetration testing — we make your infrastructure bulletproof from day one.',
  },
  {
    id: '06',
    icon: '📊',
    title: 'Data & Analytics',
    description:
      'Real-time dashboards, data warehousing, and business intelligence that transform raw data into your sharpest competitive advantage.',
  },
]

export const statsData = [
  { value: 150, suffix: '+', label: 'Projects Shipped' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 40, suffix: '+', label: 'Expert Engineers' },
  { value: 6, suffix: '+', label: 'Years of Excellence' },
]

export const bentoData = [
  {
    id: 'main',
    span: 'featured',
    bigNum: '10+',
    title: 'Years of Combined Expertise',
    description:
      "Our engineers have shipped products for Fortune 500 companies, VC-backed startups, and groundbreaking non-profits. We don't just build — we obsess over every detail until it's perfect.",
    cta: '→ Meet the Team',
  },
  {
    id: 'speed',
    bigNum: '48h',
    title: 'Rapid Prototyping',
    description: 'From idea to interactive prototype in under 48 hours. We move at startup speed.',
  },
  {
    id: 'scale',
    bigNum: '∞',
    title: 'Infinite Scale',
    description: 'Architecture designed from day one to handle whatever growth comes your way.',
  },
  {
    id: 'stack',
    title: 'Tech Stack Agnostic',
    description:
      'React, Vue, Python, Go, Rust — we meet you where you are and pick the right tool for the right job.',
  },
  {
    id: 'support',
    title: 'Post-Launch Support',
    description:
      '24/7 monitoring, SLA guarantees, and dedicated engineering bandwidth long after go-live.',
  },
]
