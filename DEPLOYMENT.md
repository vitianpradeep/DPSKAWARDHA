# 🚀 DEPLOYMENT GUIDE - School Magazine Flipbook Website

Complete step-by-step instructions for deploying your magazine website.

## Table of Contents
1. [GitHub Pages Deployment (Recommended)](#github-pages-deployment)
2. [School Server Deployment](#school-server-deployment)
3. [Local Network Deployment](#local-network-deployment)
4. [Cloud Hosting Options](#cloud-hosting-options)

---

## 1️⃣ GitHub Pages Deployment (RECOMMENDED)

Perfect for: Public access, free hosting, easy updates

### Step-by-Step Instructions

#### A. Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create your account (free)

#### B. Create Repository
1. Click the "+" icon → "New repository"
2. Repository name: `school-magazines`
3. Make it **Public**
4. ✅ Check "Add a README file"
5. Click "Create repository"

#### C. Upload Files
1. Click "Add file" → "Upload files"
2. Drag and drop ALL files and folders:
   - `index.html`
   - `viewer.html`
   - `css/` folder
   - `js/` folder
   - `README.md`
3. Scroll down → Click "Commit changes"

#### D. Enable GitHub Pages
1. Go to "Settings" tab
2. Scroll to "Pages" in left sidebar
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"
5. Wait 2-3 minutes

#### E. Access Your Website
Your website will be available at:
```
https://YOUR-USERNAME.github.io/school-magazines/
```

Example: `https://johnsmith.github.io/school-magazines/`

#### F. Share Links
Each magazine link will be:
```
https://YOUR-USERNAME.github.io/school-magazines/viewer.html?id=mag-xxxxx
```

### ✅ Advantages
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Easy updates (just upload new files)
- ✅ Reliable hosting
- ✅ No server management

### ⚠️ Limitations
- Storage limit: Limited by localStorage (~10MB)
- Not suitable for very large PDFs
- Public repository (anyone can see files)

---

## 2️⃣ School Server Deployment

Perfect for: Internal use, larger files, private hosting

### Prerequisites
- Access to school web server
- FTP/SFTP credentials or file manager access

### Step-by-Step Instructions

#### A. Prepare Files
1. Download all website files
2. Keep folder structure intact
3. Test locally first (open `index.html` in browser)

#### B. Upload via FTP
Using FileZilla (or similar FTP client):

1. **Connect to server**:
   - Host: `ftp.yourschool.edu`
   - Username: [your FTP username]
   - Password: [your FTP password]
   - Port: 21 (or 22 for SFTP)

2. **Navigate to web directory**:
   - Usually: `/public_html/` or `/www/`
   - Create folder: `magazines/`

3. **Upload files**:
   - Drag all files to the `magazines/` folder
   - Preserve folder structure

#### C. Upload via cPanel
If your school uses cPanel:

1. Log in to cPanel
2. Open "File Manager"
3. Navigate to `public_html`
4. Create folder: `magazines`
5. Upload all files (use "Upload" button)
6. Extract if uploaded as ZIP

#### D. Set Permissions
Ensure correct file permissions:
- Folders: `755`
- Files: `644`

#### E. Access Your Website
```
http://yourschool.edu/magazines/
```

or

```
https://yourschool.edu/magazines/
```

### Configure for HTTPS
If your school has SSL certificate:
1. Ensure all CDN links use HTTPS
2. Access site via `https://`

---

## 3️⃣ Local Network Deployment

Perfect for: School intranet, offline access, testing

### Using XAMPP (Windows/Mac/Linux)

#### A. Install XAMPP
1. Download from [apachefriends.org](https://www.apachefriends.org)
2. Install XAMPP
3. Start Apache server

#### B. Deploy Files
1. Navigate to XAMPP folder:
   - Windows: `C:\xampp\htdocs\`
   - Mac: `/Applications/XAMPP/htdocs/`
   - Linux: `/opt/lampp/htdocs/`

2. Create folder: `magazines`
3. Copy all website files into `magazines/`

#### C. Access Website
On the server computer:
```
http://localhost/magazines/
```

From other computers on network:
```
http://[SERVER-IP]/magazines/
```

To find server IP:
- Windows: Open CMD → type `ipconfig`
- Mac/Linux: Open Terminal → type `ifconfig`

### Using Python Simple Server

Quick and easy for testing:

1. Open terminal/command prompt
2. Navigate to website folder:
   ```bash
   cd /path/to/flipbook-website
   ```

3. Start server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

4. Access at: `http://localhost:8000`

---

## 4️⃣ Cloud Hosting Options

### A. Netlify (Free & Easy)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag & drop your website folder
4. Get instant URL: `https://your-site.netlify.app`

**Advantages**:
- Free SSL certificate
- Custom domain support
- Automatic deployment
- Fast CDN

### B. Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import repository
4. Auto-deploy on changes

### C. Firebase Hosting (Free)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Deploy:
   ```bash
   firebase deploy
   ```

### D. AWS S3 + CloudFront

For larger scale:
1. Create S3 bucket
2. Upload files
3. Enable static website hosting
4. Configure CloudFront CDN
5. Set up custom domain

---

## 🔒 Security Checklist

Before deployment:

- [ ] Change admin password in `js/app.js`
- [ ] Test all functionality locally
- [ ] Check mobile responsiveness
- [ ] Verify PDF rendering quality
- [ ] Test share links
- [ ] Enable HTTPS (if possible)
- [ ] Backup website files

---

## 📊 Post-Deployment Tasks

### 1. Test Everything
- [ ] Upload a test magazine
- [ ] View the magazine
- [ ] Test on mobile
- [ ] Share link and test from another device
- [ ] Test search and filter

### 2. Share with Team
- Homepage URL: `___________________`
- Admin password: `___________________`
- FTP/Server access: `___________________`

### 3. Create Documentation
- How to upload magazines
- How to share links
- Troubleshooting guide
- Contact person for issues

---

## 🔄 Updating the Website

### GitHub Pages
1. Make changes to files locally
2. Upload to GitHub (replace old files)
3. Changes appear in 2-3 minutes

### FTP/Server
1. Make changes locally
2. Upload changed files via FTP
3. Clear browser cache to see changes

### Netlify/Vercel
1. Push changes to GitHub
2. Automatic deployment
3. Changes live in seconds

---

## 🆘 Common Deployment Issues

### Issue: Website shows blank page
**Solution**:
- Check browser console for errors
- Ensure all files uploaded correctly
- Check file permissions (644 for files, 755 for folders)

### Issue: PDFs not loading
**Solution**:
- Check internet connection (PDF.js loaded from CDN)
- Verify PDF file format
- Check browser compatibility

### Issue: "Not Found" error
**Solution**:
- Check file paths are correct
- Ensure `index.html` is in root directory
- Verify server configuration

### Issue: Can't access from other devices
**Solution**:
- Check firewall settings
- Verify network connectivity
- Ensure server is running
- Use correct IP address/URL

---

## 📞 Need Help?

1. Check the [README.md](README.md) for general information
2. Review troubleshooting section
3. Check browser console for error messages
4. Verify all files are uploaded correctly

---

## ✅ Deployment Checklist

- [ ] Website files prepared
- [ ] Hosting platform chosen
- [ ] Files uploaded correctly
- [ ] Website accessible
- [ ] Admin password changed
- [ ] Test magazine uploaded
- [ ] Mobile tested
- [ ] Share links working
- [ ] Team informed
- [ ] Documentation created
- [ ] Backup created

---

**Your magazine website is now live! 🎉**

Share the URL with your school community and start publishing beautiful digital magazines!