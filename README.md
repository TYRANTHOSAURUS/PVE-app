# PVE — Project Vote Everything

An app built entirely by the community. You decide what gets built.

## How It Works

PVE starts as a blank app. The community shares feature ideas on X (Twitter) and votes by liking posts. An autonomous agent monitors X for the most popular feature requests, and when a winner emerges, it uses Claude Code to implement the feature, push the code, and deploy — all automatically.

The cycle repeats: vote, build, ship. The community decides what this app becomes.

## The Loop

1. Share a feature idea on X
2. The community votes (likes)
3. The agent picks up the winning idea
4. Claude Code implements the feature
5. Auto-deployed to production
6. Repeat

## Live

**https://pve-beta.vercel.app**

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- shadcn/ui + Tailwind CSS
- Vercel (auto-deploy on push)

## Contributing

Don't open PRs — share your ideas on X and let the community vote. The most popular idea wins.
