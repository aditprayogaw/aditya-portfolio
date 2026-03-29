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
    title: 'TimeClip AI',
    description: 'Platform clipping video yang terintegrasi dengan AI Gemini untuk mempermudah user dalam membuat konten video pendek dari video durasi panjang.',
    category: 'Web App',
    tags: ['Front-End', 'Vue 3', 'Tailwind CSS', 'Inertia'],
    icon: Zap,
    link: '#'
  },
  {
    id: 2,
    title: 'KodyaKost',
    description: 'Platform pencarian kost yang terintegrasi dengan Budaya Lokal untuk mempermudah user dalam mencari informasi terkait kegiatan keagamaan di daerah tertentu.',
    category: 'Web App',
    tags: ['Back-End', 'Laravel 12', 'MySQL'],
    icon: LayoutDashboard,
    link: '#'
  },
  {
    id: 3,
    title: 'Analisis Deteksi Wazuh',
    description: 'Sistem deteksi intrusi yang terintegrasi dengan Wazuh untuk mempermudah Tim IT dalam mendeteksi intrusi pada sistem.',
    category: 'Security',
    tags: ['Wazuh', 'SIEM', 'Security', 'Linux'],
    icon: ShieldCheck,
    link: '#'
  },
  {
    id: 4,
    title: 'Vintage Marketplace',
    description: 'Platform marketplace yang memiliki fitur dasar seperti Ratings, Review, Transaksi, dan lain sebagainya.',
    category: 'E-Commerce',
    tags: ['Front-End', 'Vue 3', 'CSS', 'Firebase'],
    icon: ShoppingBag,
    link: '#'
  }
]