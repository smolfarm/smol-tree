# smol tree

Self-hosted app designed to replace centrally hosted link sharing services like Linktree with something that can be deployed and maintained by the end user themselves. Built using Nextjs. Can easily be deployed to Vercel.

# How to Use

Fork the [repo on GitHub](https://github.com/smolfarm/smol-tree) to create a version of the repository you can deploy where you like.

Edit the `linkconfg.json` file, and deploy it wherever you like. The one in the repository is used by our website, [smoltree.xyz](https://smoltree.xyz).

To run it locally, run the following with your favorite package manager (we like pnpm):
```bash
pnpm install
pnpm run dev
```

# Configuration

Currently, smol tree can only be configured by JSON, though we may offer more user-friendly ways to do it in the future.

## Styles

Configuration uses [Tailwind classes](https://tailwindcss.com/) for styling.

## Icons

Each link can optionally have an icon displayed before it, which is specified in the `icon` field. The following values are supported:

* android
* apple
* appstore
* bluesky
* cashapp
* discord
* duolingo
* farcaster
* gamepad
* github
* googledrive
* home
* instagram
* lastfm
* linkedin
* medium
* npm
* opensea
* patreon
* react
* reddit
* spotify
* steam
* substack
* twitch
* ubisoft
* wikipedia
* x
* youtube