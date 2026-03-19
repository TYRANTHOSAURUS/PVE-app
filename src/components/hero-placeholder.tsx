import { ExternalLinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroPlaceholder() {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          This app is built by you.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Share your feature ideas on Twitter and vote. The most popular idea
          gets built next. This app starts blank — the community decides what it
          becomes.
        </p>
        <Button
          className="mt-6"
          size="lg"
          render={
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          Share an idea
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
