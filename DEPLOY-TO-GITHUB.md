# How to Put This Website on the Internet (GitHub Pages)

GitHub Pages is a free service that turns a folder of HTML files into a live website. This guide walks you through the whole process.

## What you'll need
- A free GitHub account (github.com — sign up if you don't have one)
- Your website folder (the one containing index.html, css/, js/, etc.)

---

## Step 1 — Download GitHub Desktop
GitHub Desktop is a free app that makes uploading files to GitHub easy — no command line needed.

1. Go to desktop.github.com
2. Download and install GitHub Desktop
3. Sign in with your GitHub account

---

## Step 2 — Create a new repository
A "repository" (or "repo") is just a project folder on GitHub.

1. Open GitHub Desktop
2. Click File → New Repository
3. Name it: chatbot-smith-website (no spaces — use hyphens)
4. Leave all other settings as-is
5. Click Create Repository

---

## Step 3 — Add your website files
1. In GitHub Desktop, you'll see your new empty repository
2. Click "Show in Finder" (Mac) or "Show in Explorer" (Windows) to open the folder
3. Copy all your website files into this folder:
   - index.html
   - pricing.html, demo.html, how-it-works.html, book-a-call.html, about.html
   - The css/ folder
   - The js/ folder
   - The demos/ folder
   - README.md, EDITING-GUIDE.md, DEPLOY-TO-GITHUB.md
4. Switch back to GitHub Desktop — you'll see all the files listed as "changes"

---

## Step 4 — Commit your files
"Committing" means saving a snapshot of your files.

1. At the bottom-left of GitHub Desktop, you'll see a Summary box
2. Type: "Initial website upload"
3. Click "Commit to main"

---

## Step 5 — Publish to GitHub
1. Click "Publish repository" at the top of GitHub Desktop
2. Make sure "Keep this code private" is UNCHECKED (GitHub Pages requires public repos on the free plan)
3. Click "Publish Repository"

Your files are now on GitHub.

---

## Step 6 — Turn on GitHub Pages
1. Go to github.com in your browser
2. Click your profile photo → Your repositories
3. Click your chatbot-smith-website repository
4. Click Settings (near the top of the page)
5. In the left sidebar, click Pages
6. Under "Branch", change it from "None" to "main"
7. Make sure the folder is set to "/ (root)"
8. Click Save

---

## Step 7 — Get your live URL
After saving, GitHub will show you a message: "Your site is live at https://[your-username].github.io/chatbot-smith-website/"

It may take 1–3 minutes to go live. Refresh the page if you don't see it yet.

That URL is your live website. Share it, add it to your Instagram bio, send it to clients.

---

## How to update the website after making changes

Every time you edit files and want the live site to update:

1. Make your changes in the files on your computer
2. Open GitHub Desktop — it will show the changed files
3. Write a short summary of what you changed (e.g. "Updated pricing")
4. Click "Commit to main"
5. Click "Push origin" (top bar)

The live site will update within a minute or two.

---

## Custom domain (optional)
If you have a domain name (like chatbotsmith.com) and want to use it instead of the github.io URL:

1. In your repository on GitHub, go to Settings → Pages
2. Under "Custom domain", enter your domain name and click Save
3. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add a CNAME record pointing to [your-username].github.io
4. GitHub will handle the HTTPS certificate automatically

Domain setup varies by registrar — search "[your registrar name] + GitHub Pages CNAME" for step-by-step instructions specific to your provider.
