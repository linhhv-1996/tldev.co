import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'TL;Dev',
  description: `TL;Dev is where I personally curate and summarize case studies—from wins to failures—plus sharp ideas and strategies from YouTube, Reddit, Facebook, and X, all distilled into short, easy-to-read notes so devs and indie builders can grasp the core quickly.`,
  href: 'https://www.tldev.co',
  author: 'TL;Dev',
  locale: 'en-US',
  location: 'Vietnam',
  email: 'linhhv.work@gmail.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
    {
    href: 'https://buymeacoffee.com/maxslashwang',
    label: 'Keep TL;Dev Thriving →',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'mailto:linhhv.work@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://x.com/MaxSlashWang',
    label: 'Twitter',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Twitter: 'lucide:twitter',
}

export interface Category {
  text: string
  logo: string
}

