# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/adivadena1/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/adivadena1/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A short vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty. The clip opens on the most spectacular moment of Rockstar's Grand Theft Auto VI Trailer 2 — a car exploding in front of police cars, the wreck, and the getaway truck speeding into the night — then pitches make.fun: make clips like this with AI and earn money on make.fun. The video is the entry; places go by its YouTube views, the most first, and the top 20 share $500.

The clip was cut and rendered by an AI agent in its own session with ffmpeg: the footage is Rockstar's official Trailer 2, trimmed to the explosion aftermath (trailer time 118.4–122.4), blur-filled to vertical 1080x1920, with make.fun's pitch as on-screen text over the end card. The video is published public on YouTube as a Short, with the bounty's line and the entrant's play code in its description.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. The program copies `VIDEO.json` from the repository root to `/output/VIDEO.json`; that is all it has to do.

## The video

`VIDEO.json` holds the video's address, as YouTube's Share button gives it. Replace the placeholder with the real address before submitting — the placeholder as it stands is no video's address, so the gate refuses it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3txr3dna&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
