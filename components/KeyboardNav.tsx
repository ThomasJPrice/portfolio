'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const NavLinks = [
  { href: '/lab', label: 'Lab', key: 'l' },
  { href: '/now', label: 'Now', key: 'n' },
  { href: '/vault', label: 'Vault', key: 'v' },
  { href: '/blog', label: 'Blog', key: 'b' },
  { href: '/', label: 'Home', key: 'h' },
  { href: '/cv', label: 'cv', key: 'c' },
]

export default function KeyboardNav() {
  const router = useRouter()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Ignore inputs or textareas
      if (
        (e.target instanceof HTMLInputElement) ||
        (e.target instanceof HTMLTextAreaElement) ||
        (e.metaKey || e.ctrlKey || e.altKey)
      ) return

      const match = NavLinks.find(link => link.key === e.key.toLowerCase())
      if (match) router.push(match.href)
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [router])

  return null
}
