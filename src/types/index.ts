import type { Component } from 'vue'

export interface Project {
  id: number
  title: string
  description: string
  category: 'Web App' | 'Mobile' | 'Design' | 'E-Commerce'
  tags: string[]
  icon: Component
  link?: string
}

export interface NavLink {
  name: string
  path: string
}