import { 
  LayoutDashboard, 
  ShoppingBag, 
  ShieldCheck, 
  Zap 
} from 'lucide-vue-next'
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nebula Dashboard',
    description: 'Platform analitik real-time dengan visualisasi data yang mendalam untuk perusahaan SaaS.',
    category: 'Web App',
    tags: ['Vue 3', 'TypeScript', 'D3.js'],
    icon: LayoutDashboard,
    link: '#'
  },
  {
    id: 2,
    title: 'Lumina Store',
    description: 'Etalase e-commerce headless yang dioptimalkan untuk performa maksimal dan konversi tinggi.',
    category: 'E-Commerce',
    tags: ['Nuxt', 'Tailwind', 'Shopify'],
    icon: ShoppingBag,
    link: '#'
  },
  {
    id: 3,
    title: 'Sentinel Guard',
    description: 'Middleware autentikasi tingkat lanjut dengan dukungan multi-faktor dan audit logging.',
    category: 'Web App',
    tags: ['Go', 'Redis', 'PostgreSQL'],
    icon: ShieldCheck,
    link: '#'
  }
]