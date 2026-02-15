# Living At Altitude 🌙✨

> *"Some people were never meant to live at sea level."*

A premium, cinematic, romantic website built with Next.js, TailwindCSS, and Framer Motion. Elegant, mysterious, and crafted with intention.

## 🎨 Features

- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered interactions
- **Glassmorphism Design** - Modern blur and transparency effects
- **Parallax Scrolling** - Cinematic depth and movement
- **Interactive Elements** - Hidden reveals and hover effects
- **Zero Backend** - Pure static site, blazing fast
- **Production Ready** - Optimized and deployment ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized static export in the `/out` directory.

## 📦 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Login to your Vercel account
   - Select your project settings
   - Done! Your site is live

#### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js
6. Click "Deploy"
7. Done! Your site is live

**Custom Domain**: Add your custom domain in Project Settings → Domains

### Deploy to Netlify

#### Method 1: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=out
   ```

#### Method 2: Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
5. Click "Deploy"
6. Done! Your site is live

**Custom Domain**: Add your custom domain in Site Settings → Domain Management

### Deploy to GitHub Pages

1. **Update `next.config.js`** (add your repo name):
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',  // Add this line
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build and export**
   ```bash
   npm run build
   ```

3. **Deploy the `out` folder** to GitHub Pages using GitHub Actions or manually

## 🎯 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion 11
- **Language**: TypeScript
- **Fonts**: Playfair Display, Inter, Dancing Script

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── HeroSection.tsx       # Hero with stars
│   ├── ImageShowcase.tsx     # Gallery section
│   ├── StorySection.tsx      # Story with animated text
│   ├── PlayfulSection.tsx    # Circular image section
│   ├── InvitationSection.tsx # Interactive button
│   └── Footer.tsx            # Minimal footer
├── public/
│   └── love/
│       ├── image1.jpeg       # Air hostess images
│       ├── image2.jpeg
│       └── image3.jpeg
├── love/                     # Original images
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Color Palette

- **Background**: Deep Midnight Blue (`#0B0F1A`)
- **Accent**: Gold (`#D4AF37`)
- **Text**: Off-white (`#F5F5F5`)
- **Secondary**: Soft Rose (`#CFA5A5`)

## ✨ Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  midnight: '#0B0F1A',  // Your color here
  gold: '#D4AF37',       // Your color here
  offwhite: '#F5F5F5',   // Your color here
  rose: '#CFA5A5',       // Your color here
},
```

### Change Images

Replace images in `public/love/` directory:
- `image1.jpeg` - Used in showcase section
- `image2.jpeg` - Used in story section
- `image3.jpeg` - Used in playful section (circular)

### Change Text Content

Edit the component files in `components/` directory. All text is clearly visible in the JSX.

## 🐛 Troubleshooting

### Images not loading?

Make sure images are in `public/love/` and named correctly:
- `image1.jpeg`
- `image2.jpeg`
- `image3.jpeg`

### Build fails?

1. Delete `.next` and `out` folders
2. Delete `node_modules`
3. Run `npm install`
4. Run `npm run build`

### Animations not smooth?

Check if hardware acceleration is enabled in your browser.

## 📝 License

This is a personal romantic project. Use it as inspiration for your own creative expressions.

## 💝 Credits

Built at ground level. Inspired by altitude.

---

*Crafted with intention and a touch of romance* ✨
