<div align="center">

# Gifz

**AI-powered animated GIF generator using Google Gemini**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Gemini](https://img.shields.io/badge/Gemini-2.5_Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

[Live Demo](https://ai.studio/apps/drive/1L7DkDbypjXGyDGauYTZAR0KmretZW6Sl)

</div>

---

## Overview

Gifz turns photos and text prompts into animated GIFs using Google Gemini image generation. Snap a photo with your camera or upload an image, describe the animation you want, and Gemini generates a 9-frame sprite sheet that plays back as a smooth loop.

## Features

- **Camera capture** -- take a photo directly from your device camera
- **Image upload** -- or upload any image from your gallery
- **Text prompts** -- describe the animation style (stop-motion, claymation, comic book, etc.)
- **Emoji presets** -- one-tap animation style suggestions
- **Sprite sheet generation** -- Gemini creates a 3x3 grid of animation frames
- **Smooth playback** -- animated player with configurable frame rate
- **Regenerate** -- re-roll with a different random prompt
- **Mobile-first** -- responsive design optimized for phones

## How It Works

1. **Capture or upload** an image (or use text-only mode)
2. **Choose a style** via emoji presets or type a custom prompt
3. **Gemini generates** a 1024x1024 sprite sheet with 9 animation frames
4. **The player** renders frames sequentially as a looping animation

## Quick Start

```bash
git clone https://github.com/ExpertVagabond/gifz.git
cd gifz
npm install
echo "VITE_GEMINI_API_KEY=your-key-here" > .env.local
npm run dev
```

Open http://localhost:5173 in your browser.

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build | Vite 6 |
| AI Model | Google Gemini 2.5 Flash (image generation) |
| Styling | Tailwind CSS |

## Project Structure

```
gifz/
  App.tsx              -- Main application component
  types.ts             -- TypeScript type definitions
  prompts.ts           -- Animation prompt templates and suggestions
  components/
    AnimationPlayer.tsx -- Sprite sheet animation renderer
    CameraView.tsx     -- Camera capture component
    LoadingOverlay.tsx  -- Generation progress indicator
    BanamimatorButton  -- Primary action button
    icons.tsx          -- SVG icon components
  services/
    geminiService.ts   -- Gemini API integration
```

## Configuration

| Variable | Description |
|----------|-------------|
| VITE_GEMINI_API_KEY | Your Google Gemini API key |
| REQUIRE_IMAGE_FOR_ANIMATION | Set to false in App.tsx for text-only generation |
| ALLOW_MULTIPLE_EMOJI_SELECTION | Set to true to combine multiple style prompts |

## License

[Apache License 2.0](LICENSE)
