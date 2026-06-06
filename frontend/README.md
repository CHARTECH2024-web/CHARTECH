# 🎨 CHARTECH Frontend - React with Vite

Modern React frontend with admin dashboard for CHARTECH portfolio.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Accessible at http://localhost:5173

### Production Build

```bash
npm run build
npm run preview
```

## 📊 Features

✅ **Responsive Design**
- Mobile-first approach
- Smooth animations with Framer Motion
- Modern UI components

✅ **Admin Dashboard**
- Secure login system
- Gallery management (upload photos/videos)
- Real-time updates

✅ **Public Pages**
- Hero section
- Skills showcase
- Projects portfolio
- Gallery
- Contact form

✅ **State Management**
- Zustand for global state
- Persistent authentication
- Portfolio data caching

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
��   │   ├── Projects.jsx
│   │   └── Gallery.jsx
│   ├── pages/           # Pages
│   │   ├── Home.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Admin.jsx
│   │   └── AdminGallery.jsx
│   ├── services/        # API services
│   │   └── api.js
│   ├── store.js         # Zustand stores
│   ├── styles/          # CSS files
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── Dockerfile
```

## 🔐 Authentication

```javascript
// Login
POST /api/auth/login/
{
  "email": "admin@example.com",
  "password": "password"
}

// Response
{
  "access": "jwt_token_here",
  "user": { ... }
}
```

Token is automatically added to all authenticated requests.

## 🎨 Pages

- **`/`** - Home page (Hero + Skills + Projects)
- **`/gallery`** - Public gallery
- **`/contact`** - Contact form
- **`/login`** - Admin login
- **`/admin`** - Admin dashboard (protected)

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - DOM rendering
- `react-router-dom` - Routing

### State & API
- `zustand` - State management
- `axios` - HTTP client

### UI/UX
- `framer-motion` - Animations
- `react-hot-toast` - Notifications
- `react-icons` - Icon library

### File Upload
- `react-dropzone` - Drag-and-drop uploads

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```
VITE_API_URL=http://localhost:8000
```

### Vite Configuration

Proxy API requests to Django backend during development.

## 🐳 Docker

```bash
docker build -t chartech-frontend .
docker run -p 5173:5173 chartech-frontend
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Netlify

```bash
npm run build
# Deploy 'dist' folder
```

### Static Server

```bash
npm run build
# Serve 'dist' folder with any static server
```

## 🆘 Troubleshooting

**API not responding?**
Check VITE_API_URL in .env.local and backend is running.

**CORS issues?**
Ensure backend has CORS_ALLOWED_ORIGINS set correctly.

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

## 📝 Performance Tips

- Images are lazy-loaded
- Components use React.memo where needed
- Zustand prevents unnecessary re-renders
- CSS is minified in production

## 🔗 Links

- Backend API: http://localhost:8000
- Frontend: http://localhost:5173
- Admin: http://localhost:5173/admin

---

**Questions?** Check the code comments or consult the API documentation! 🎯
