# Vercel Environment Variables Configuration Guide

## 🚀 Setting up Environment Variables in Vercel

### Step 1: Go to your Vercel dashboard
1. Visit https://vercel.com/dashboard
2. Select your "upay" project
3. Go to "Settings" tab
4. Click "Environment Variables" in the left sidebar

### Step 2: Add these environment variables

#### VITE_CLERK_PUBLISHABLE_KEY
- **Key**: `VITE_CLERK_PUBLISHABLE_KEY`
- **Value**: `pk_test_ZXZvbHZpbmctcGlwZWZpc2gtMTYuY2xlcmsuYWNjb3VudHMuZGV2JA`
- **Environment**: All Environments (Production, Preview, Development)

#### VITE_GEMINI_API_KEY
- **Key**: `VITE_GEMINI_API_KEY`
- **Value**: `AIzaSyCNHvgQj893Bc7rGiKZKYijllKnZwMTM00`
- **Environment**: All Environments (Production, Preview, Development)

### Step 3: Redeploy
After adding the environment variables:
1. Go to "Deployments" tab
2. Click "..." on the latest deployment
3. Click "Redeploy"

## 🔧 Alternative: Deploy via Git Push

You can also trigger a redeploy by pushing a new commit:

```bash
git add .
git commit -m "Fix Vercel deployment issues"
git push origin main
```

## ✅ What's Fixed

1. **Environment Variables**: Added configuration guide for Vercel
2. **PWA Icons**: Updated manifest.json to use SVG files instead of PNG
3. **Meta Tags**: Fixed deprecated apple-mobile-web-app-capable
4. **404 Errors**: Fixed icon paths in manifest

## 🎯 After Following These Steps

Your Vercel deployment should work correctly with:
- ✅ Clerk authentication working
- ✅ No PWA icon errors
- ✅ No deprecated meta tag warnings
- ✅ Gemini AI chat functioning