# Shaithilyog Website

## Project info

This is the official website for Shaithilyog, built with React, TypeScript, and Vite.

## How can I edit this code?

**Use your preferred IDE**

Clone this repository and start making changes locally.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

# Shaithilyog Website

## Project info

This is the official website for Shaithilyog, built with React, TypeScript, and Vite.

## Features
- ⚡ Fast development with Vite
- 🎨 Modern UI with Tailwind CSS and Radix UI
- 📱 Responsive design
- 🚀 Optimized for production
- 📦 Ready for GitHub Pages deployment

## How can I edit this code?

**Use your preferred IDE**

Clone this repository and start making changes locally.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the dependencies.
npm install

# Step 4: Start the development server.
npm run dev
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Push to GitHub**: Push your code to the `main` branch of your GitHub repository
2. **Enable GitHub Pages**: 
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
3. **Automatic Deploy**: The workflow will automatically build and deploy your site on every push to main

Your site will be available at: `https://<username>.github.io/Shaithilyog/`

### Manual Deployment

If you prefer manual deployment:

```sh
# Build and deploy to gh-pages branch
npm run deploy
```

## How can I deploy this project?

### GitHub Pages (Recommended)
- Automatic deployment via GitHub Actions
- Custom domain support available

### Other Options
- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Static hosting**: Upload the `dist` folder to any static hosting service

## Build for Production

```sh
npm run build
```

The built files will be in the `dist` directory.

## Can I connect a custom domain?

Yes! Most hosting platforms support custom domains:

- **GitHub Pages**: Add a `CNAME` file to your repository or configure in repository settings
- **Vercel/Netlify**: Configure in their respective dashboards

## Performance Notes

The current build produces a large JavaScript bundle (~648KB). Consider:
- Code splitting for better performance
- Lazy loading of components
- Bundle analysis and optimization

## Troubleshooting

If you encounter issues:
1. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
2. Clear build cache: `rm -rf dist && npm run build`
3. Check that your base URL is correctly set for your hosting environment

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project to various hosting platforms like Vercel, Netlify, or GitHub Pages.

For Vercel:
1. Connect your GitHub repository to Vercel
2. Configure the build settings (should auto-detect)
3. Deploy

## Can I connect a custom domain?

Yes, most hosting platforms support custom domains. Check your hosting provider's documentation for specific instructions on domain configuration.
