import type { Component } from 'vue'

// Tipe data untuk Proyek
export interface Project {
  id: number
  title: string
  /** Translation key for the project description (e.g., 'projects.timeclip.desc') */
  description: string
  category: 'Web App' | 'Mobile' | 'Design' | 'E-Commerce' | 'Security'
  tags: string[]
  icon: Component | string // Bisa berupa Komponen Lucide atau String SVG
  link?: string
}

// Tipe data untuk Pengalaman Kerja
export interface Experience {
  /** Unique ID to match i18n keys (e.g., 'timedoor', 'instiki') */
  id: string
  company: string
  period: string
  // Role dan Description tidak perlu di sini karena diambil via i18n menggunakan ID
}

// Tipe data untuk Navigasi
export interface NavLink {
  /** Translation key for the nav name (e.g., 'nav.home') */
  name: string
  path: string
}

// Tipe data untuk Skill (Bento Grid)
export interface Skill {
  name: string
  level: 'Basic' | 'Intermediate' | 'Advance'
  icon: Component | string
  color?: string // Tailwind gradient classes
}

export interface SkillCategory {
  title: string // Translation key atau string kategori
  skills: Skill[]
}