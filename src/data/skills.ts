import {
    Layout, Code, Globe, Server, Database, Brain,
    Terminal, PenTool, Layers, Binary, Cpu, Laptop, Sparkles, Flame,
    Palette
} from 'lucide-vue-next'

export const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', level: 'Advance', icon: Layout, color: 'from-orange-400 to-red-500' },
            { name: 'CSS', level: 'Advance', icon: Code, color: 'from-blue-400 to-indigo-500' },
            { name: 'Vue.js', level: 'Proficient', icon: Globe, color: 'from-emerald-400 to-teal-500' },
            { name: 'Tailwind', level: 'Proficient', icon: Palette, color: 'from-sky-400 to-blue-400' },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Laravel', level: 'Proficient', icon: Server, color: 'from-red-500 to-rose-600' },
            { name: 'PHP', level: 'Proficient', icon: Code, color: 'from-indigo-400 to-indigo-600' },
            { name: 'Python', level: 'Proficient', icon: Terminal, color: 'from-yellow-400 to-blue-500' },
        ]
    },
    {
        title: 'Database',
        skills: [
            { name: 'MySQL', level: 'Proficient', icon: Database, color: 'from-blue-400 to-orange-400' },
            { name: 'PostgreSQL', level: 'Competent', icon: Database, color: 'from-indigo-500 to-blue-600' },
        ]
    },
    {
        title: 'AI Tools',
        skills: [
            { name: 'Gemini', level: 'Proficient', icon: Brain, color: 'from-blue-400 to-purple-500' },
            { name: 'Claude', level: 'Proficient', icon: Sparkles, color: 'from-orange-200 to-orange-400' },
        ]
    },
    {
        title: 'IDE',
        skills: [
            { name: 'VS Code', level: 'Proficient', icon: Laptop, color: 'from-blue-500 to-sky-400' },
            { name: 'Antigravity', level: 'Novice', icon: Cpu, color: 'from-slate-700 to-slate-900' },
        ]
    },
    {
        title: 'Design',
        skills: [
            { name: 'Figma', level: 'Proficient', icon: PenTool, color: 'from-purple-500 to-pink-500' },
            { name: 'Affinity', level: 'Competent', icon: Layers, color: 'from-cyan-400 to-blue-500' },
            { name: 'Photoshop', level: 'Proficient', icon: Palette, color: 'from-blue-600 to-sky-500' },
            { name: 'Illustrator', level: 'Proficient', icon: PenTool, color: 'from-orange-600 to-yellow-600' },
        ]
    },
    {
        title: 'Other',
        skills: [
            { name: 'Supabase', level: 'Competent', icon: Server, color: 'from-emerald-500 to-emerald-700' },
            { name: 'Firebase', level: 'Competent', icon: Flame, color: 'from-orange-400 to-yellow-500' },
        ]
    }
]