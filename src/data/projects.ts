import {
  Zap,
  LayoutDashboard,
  ShieldCheck,
  ShoppingBag
} from 'lucide-vue-next'
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 5,
    title: 'KanjiFlow',
    description: 'projects.kanjiflow.desc', // Gunakan key i18n
    category: 'Web App',
    tags: ['Front-End', 'Vue 3', 'Tailwind CSS'],
    icon: LayoutDashboard,
    link: 'https://kanjiflow-sigma.vercel.app/'
  },
  {
    id: 1,
    title: 'TimeClip AI',
    description: 'projects.timeclip.desc', // Gunakan key i18n
    category: 'Web App',
    tags: ['Front-End', 'Vue 3', 'Tailwind CSS', 'Inertia'],
    icon: Zap,
    link: '#'
  },
  {
    id: 2,
    title: 'KodyaKost',
    description: 'projects.kodyakost.desc', // Gunakan key i18n
    category: 'Web App',
    tags: ['Back-End', 'Laravel 12', 'MySQL'],
    icon: LayoutDashboard,
    link: 'https://github.com/aditprayogaw/kodyakost-api'
  },
  // {
  //   id: 3,
  //   title: 'Analisis Deteksi Wazuh',
  //   description: 'projects.wazuh.desc', // Gunakan key i18n
  //   category: 'Security',
  //   tags: ['Wazuh', 'SIEM', 'Security', 'Linux'],
  //   icon: ShieldCheck,
  //   link: '#'
  // },
  {
    id: 4,
    title: 'Vintage Marketplace',
    description: 'projects.vintage.desc', // Gunakan key i18n
    category: 'E-Commerce',
    tags: ['Front-End', 'Vue 3', 'CSS', 'Firebase'],
    icon: ShoppingBag,
    link: 'https://vintage-marketplace-aditya-prayogas-projects-59874c81.vercel.app/'
  },
  
]