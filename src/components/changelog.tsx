import { ExternalLinkIcon } from "lucide-react"
import { type ChangelogEntry } from "@/lib/types"

export function Changelog({ entries }: { entries: ChangelogEntry[] }) {
  if (entries.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <p className="text-lg text-muted-foreground">
          No features shipped yet. Be the first to suggest one!
        </p>
      </div>
    )
  }

  const sorted = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold tracking-tight">Changelog</h2>
      <div className="space-y-6">
        {sorted.map((entry) => (
          <div key={entry.id} className="border-l-2 border-border pl-4">
            <time className="text-sm text-muted-foreground">{entry.date}</time>
            <h3 className="text-lg font-semibold">{entry.title}</h3>
            <p className="text-muted-foreground">{entry.description}</p>
            <a
              href={entry.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center text-sm text-primary hover:underline"
            >
              View winning tweet
              <ExternalLinkIcon className="ml-1 h-3 w-3" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
