# Deployment Guide

This guide explains how to deploy your 3D Portfolio website to various hosting platforms.

## Prerequisites

Before deploying, make sure:
- All dependencies are installed: `npm install`
- The project builds successfully: `npm run build`
- The `dist` folder is generated

## Deployment Options

### 1. Vercel (Recommended)

**Via Vercel CLI:**
```bash
npm install -g vercel
vercel
```

**Via Git Integration:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite and deploy

**Configuration:** No additional config needed - Vercel auto-detects Vite projects.

### 2. Netlify

**Via Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

**Via Git Integration:**
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

**Configuration file** (optional - create `netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Steps:**
1. Install gh-pages: `npm install -g gh-pages`
2. Update `vite.config.ts` with base path:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```
3. Build: `npm run build`
4. Deploy: `gh-pages -d dist`

**Or use GitHub Actions** (create `.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. Cloudflare Pages

1. Push your code to GitHub
2. Visit [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`

### 5. Manual Deployment (Any Static Host)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server

3. Configure your web server to:
   - Serve `index.html` for all routes (SPA routing)
   - Set proper MIME types for `.js`, `.css`, `.html` files

**Example Nginx configuration:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Environment Variables

This project doesn't require environment variables by default, but if you add any:
- Create `.env` file for local development
- Add environment variables in your hosting platform's dashboard
- Prefix variables with `VITE_` to expose them to the client

## Post-Deployment Checklist

- ✅ All pages load correctly
- ✅ 3D models render properly
- ✅ Navigation works (home, gallery, individual models)
- ✅ Mobile responsiveness verified
- ✅ Browser console has no errors
- ✅ Performance is acceptable (check with Lighthouse)

## Troubleshooting

**Issue: Blank page after deployment**
- Check browser console for errors
- Verify `base` path in `vite.config.ts` is correct
- Ensure all routes redirect to `index.html`

**Issue: 3D models not rendering**
- Check that Three.js dependencies loaded correctly
- Verify WebGL is supported in the browser
- Check for Content Security Policy (CSP) issues

**Issue: 404 on page refresh**
- Configure server to serve `index.html` for all routes
- Add redirect rules (see platform-specific configs above)

## Performance Optimization

For production, consider:
1. Lazy load routes: `const Gallery = lazy(() => import('./pages/Gallery'))`
2. Code splitting for Three.js: Use dynamic imports
3. Enable compression (gzip/brotli) on your server
4. Use CDN for assets
5. Add caching headers for static assets
