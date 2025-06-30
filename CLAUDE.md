# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional photography portfolio website for Guto Bordoni, built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The site showcases 11 photography categories with a minimalist, Instagram-inspired design.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build  

# Start production server
npm start

# Run linting
npm run lint
```

## Project Architecture

**Tech Stack:**
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Turbopack for development

**Key Design Requirements:**
- Font: Montserrat (replace current Geist fonts)
- Color scheme: Brown background (#6c605b), white text (#FFFFFF), accent (#0eebea)
- Responsive design: Mobile-first with card layouts
- Image optimization for professional photography

**Photography Categories (11 total):**
1. FOTOGRAFIAS + inteligência artificial (main highlight)
2. FOOD STYLING
3. PRODUTO  
4. ENSAIO
5. MODA
6. BOUDOIR & LINGERIE
7. PUBLICIDADE
8. AGRO
9. ENSAIO SENSUAL
10. RETRATOS
11. GALERIA

**Image Organization:**
- Category thumbnails: `public/imgs/fotografo-cat-[category].webp`
- Gallery images: `public/imgs/fotografo-[category]-[01-99].webp`
- All images are in WebP format for optimization

**Performance Requirements:**
- < 3 second load time
- 90+ PageSpeed score
- Progressive image loading
- Core Web Vitals compliance

## File Structure

- `src/app/` - Next.js App Router pages
- `public/imgs/` - Photography portfolio images (200+ professional photos)
- `docs/` - Project requirements and specifications
- Root config files for Next.js, TypeScript, ESLint, Tailwind

## Implementation Status

✅ **COMPLETED** - Full photography portfolio website implemented with:
- Homepage with 11 photography categories in responsive grid
- Individual gallery pages for each category with lightbox
- About photographer and studio pages
- SEO optimized for "fotógrafo Campinas" + categories
- Framer Motion animations throughout
- WhatsApp integration for contact
- Mobile-first responsive design

## Development Commands

Run `npm run lint` and `npm run build` before deployment to ensure code quality.