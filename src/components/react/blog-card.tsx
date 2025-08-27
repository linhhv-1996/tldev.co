import { Badge } from '@/components/ui/badge'
import { Hash } from 'lucide-react'
import type { CollectionEntry } from 'astro:content'
import { useEffect } from 'react'
import { formatDate } from '@/lib/utils'

const BlogCardJSX = ({ entry }: { entry: CollectionEntry<'blog'> }) => {
  
  const dateStr = formatDate(entry.data.date)
  
  return (
    <div className="hover:bg-secondary/50 rounded-xl border p-4 transition-colors duration-300 ease-in-out">
      <a
        href={`/${entry.collection}/${entry.id}`}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <div className="grow">
          <h3 className="mb-1 text-lg font-medium">{entry.data.title}</h3>
          <p className="text-muted-foreground mb-2 text-sm">
            {entry.data.description}
          </p>

          <time dateTime={new Date(entry.data.date as any).toISOString()} className="text-xs text-muted-foreground">
            {dateStr}
          </time>

        </div>
      </a>
    </div>
  )
}

export default BlogCardJSX
