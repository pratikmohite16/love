# Deployment Guide 🚀

Complete deployment instructions for **Living At Altitude**

---

## 🌟 Vercel (Easiest & Recommended)

### Why Vercel?
- Built by Next.js creators
- Zero configuration needed
- Automatic SSL
- Global CDN
- Free tier available

### Option 1: Deploy with Git (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Living at Altitude"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Click "New Project"**

4. **Import your Git repository**
   - Authorize Vercel to access your repository
   - Select the repository

5. **Configure (Auto-detected)**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `next build` (auto-detected)
   - Output Directory: (auto-detected)

6. **Click "Deploy"**

7. **Done!** 🎉
   - Your site is live at `https://your-project.vercel.app`
   - Auto-deploys on every push to main branch

### Option 2: Deploy with CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? living-at-altitude
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Add Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Update DNS records at your domain provider
5. Done! SSL is automatic

---

## 🎯 Netlify

### Option 1: Deploy with Git

1. **Push code to GitHub/GitLab/Bitbucket**

2. **Go to [netlify.com](https://netlify.com)**

3. **Click "Add new site" → "Import an existing project"**

4. **Connect your Git repository**

5. **Configure build settings:**
   ```
   Build command: npm run build
   Publish directory: out
   ```

6. **Click "Deploy site"**

7. **Done!** 🎉
   - Site live at `https://your-site-name.netlify.app`

### Option 2: Deploy with CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Login to Netlify
netlify login

# Deploy to draft URL
netlify deploy --dir=out

# Deploy to production
netlify deploy --prod --dir=out
```

### Add Custom Domain

1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS
4. SSL is automatic

---

## 🐙 GitHub Pages

### Step 1: Update Configuration

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // ADD THIS LINE
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
```

Replace `your-repo-name` with your actual GitHub repository name.

### Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: GitHub Actions
4. Save

### Step 4: Push and Deploy

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

Your site will be live at: `https://your-username.github.io/your-repo-name`

---

## 🔧 Manual Deployment (Any Static Host)

### Build the static site:

```bash
npm run build
```

This creates an `out/` directory with all static files.

### Upload the `out/` folder to:

- **AWS S3** + CloudFront
- **Google Firebase Hosting**
- **Cloudflare Pages**
- **Render**
- **Railway**
- Any static file hosting service

### Example: AWS S3

```bash
# Install AWS CLI
aws configure

# Sync to S3 bucket
aws s3 sync out/ s3://your-bucket-name --delete

# Enable static website hosting in S3 settings
# Add CloudFront for HTTPS and global CDN
```

---

## 🎨 Environment-Specific Settings

### Production Optimizations

The site is already optimized for production:
- ✅ Static export (no server needed)
- ✅ Image optimization disabled (required for static export)
- ✅ Minified CSS/JS
- ✅ Tree-shaking enabled
- ✅ SEO metadata included

### Performance Tips

1. **Enable Compression**
   - Vercel/Netlify do this automatically
   - For manual hosting, enable gzip/brotli

2. **CDN**
   - Use Vercel/Netlify's global CDN
   - Or add CloudFront/Cloudflare

3. **Caching**
   - Static assets cached automatically
   - Cache-Control headers set properly

---

## 🔒 Custom Domain + SSL

### Vercel
- Add domain in dashboard
- Update DNS records
- SSL automatic ✅

### Netlify
- Add domain in site settings
- Update DNS records
- SSL automatic ✅

### GitHub Pages
- Add CNAME file to `public/` directory
- Update DNS records
- Enable HTTPS in settings

### Cloudflare (Universal)
- Add your site to Cloudflare
- Update nameservers
- Enable SSL (Free)
- Works with any hosting

---

## 📊 Deployment Checklist

Before deploying, verify:

- [ ] Images in `public/love/` directory
- [ ] `npm run build` works locally
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Test on multiple browsers
- [ ] SEO metadata set
- [ ] Favicon added (optional)
- [ ] Custom domain DNS configured (if applicable)

---

## 🐛 Common Issues

### Build fails on Vercel/Netlify

**Solution**: Check Node.js version
- Set Node version to 18+ in build settings

### Images not showing after deployment

**Solution**: Verify images are in `public/love/` directory
- Path should be `/love/image1.jpeg` etc.
- Not `love/image1.jpeg` (no leading slash)

### Routing issues on GitHub Pages

**Solution**: Add `basePath` to `next.config.js`
```javascript
basePath: '/your-repo-name'
```

### White screen after deployment

**Solution**: Check browser console for errors
- Usually a path or image loading issue
- Verify all paths are correct

---

## 🎉 You're Live!

Once deployed, share your beautiful romantic website:

```
https://your-domain.com
```

Built at ground level. Inspired by altitude. ✨

---

**Need help?** Check the main [README.md](README.md) for more details.
