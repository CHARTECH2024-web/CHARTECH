# 🔒 CHARTECH Security & CHARLES AI Configuration

## ⚠️ CRITICAL: API Keys Removed

All hardcoded API keys have been removed from the repository for security.

### Previously Exposed Keys (NOW REMOVED):
- ❌ Firebase API Key
- ❌ Firebase Project ID
- ❌ MongoDB credentials
- ❌ All authentication tokens

## ✅ Security Best Practices

### 1. Environment Variables
All sensitive data is now managed via `.env` files:

```bash
cp .env.example .env
# Edit .env and add your actual credentials
```

### 2. CHARLES AI Configuration

**Option A: Using OpenAI API (Recommended)**
```env
VITE_CHARLES_API_KEY=sk-your-openai-key-here
VITE_CHARLES_MODEL=gpt-4-turbo
```

**Option B: Using Claude API**
```env
VITE_CHARLES_API_KEY=sk-ant-your-claude-key
VITE_CHARLES_MODEL=claude-3-opus
```

### 3. Firebase Setup (Secure)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project or use existing
3. Get API keys from Project Settings
4. Add to `.env`:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. MongoDB Security

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chartech
MONGODB_USER=admin_username
MONGODB_PASSWORD=strong_password_here
```

### 5. Redis Security

```env
REDIS_URL=redis://:password@localhost:6379
REDIS_PASSWORD=strong_redis_password
```

## 🛡️ Security Checklist

- [x] Removed hardcoded API keys
- [x] Created `.env.example` template
- [x] Added `.gitignore` for sensitive files
- [x] Implemented environment variable loading
- [x] CHARLES AI uses secure API endpoints
- [x] All credentials are read from environment
- [ ] Add rate limiting (TODO)
- [ ] Implement CORS properly (TODO)
- [ ] Add request validation (TODO)
- [ ] Setup HTTPS only (TODO)

## 🚀 Deploying Safely

### GitHub Pages (Frontend Only)
```bash
# Never commit .env file
# Use environment secrets in GitHub Actions
```

### Vercel
```bash
# Add environment variables in Vercel dashboard:
vercel env add VITE_CHARLES_API_KEY
vercel env add VITE_FIREBASE_API_KEY
```

### Heroku (Backend)
```bash
heroku config:set VITE_CHARLES_API_KEY=sk-...
heroku config:set MONGODB_URI=mongodb+srv://...
```

## 📋 Files to NEVER Commit

```
.env
.env.local
.env.*.local
*.key
*.pem
secrets/
credentials.json
```

## 🔐 CHARLES AI Security

CHARLES AI (`charles-ai.js`) includes:
- ✅ Safe API key handling
- ✅ Conversation history encryption ready
- ✅ Input validation
- ✅ Rate limiting support
- ✅ Error handling without exposing keys

## 📞 Incident Response

If you accidentally commit a secret:

```bash
# 1. Immediately invalidate the key
# 2. Remove from git history:
git filter-branch --tree-filter 'rm -f .env' HEAD
# 3. Force push
git push origin --force-with-lease
# 4. Regenerate all keys
```

## 🎯 Next Steps

1. Configure `.env` with your actual keys
2. Test CHARLES AI locally
3. Deploy with environment variables
4. Monitor API usage
5. Rotate keys quarterly

---

**Security is everyone's responsibility!** 🔒
