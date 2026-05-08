
# 🚀 CHARTECH - Portfolio Moderne avec IA

Architecture complète **Frontend + Backend + Database** avec IA performante.

## 📊 Architecture

```
CHARTECH/
├── frontend/           # React 18 + Vite + Zustand
├── backend/            # Express.js + IA
├── database/           # MongoDB + PostgreSQL + Redis
├── docker-compose.yml  # Orchestration
├── setup.sh           # Script d'installation
└── README.md
```

## 🎯 Fonctionnalités

### Frontend ⚛️
- ✅ React 18 + Vite (ultra-rapide)
- ✅ Zustand pour l'état global
- ✅ Chat IA en temps réel
- ✅ Thème dark/light persistant
- ✅ Multilingue FR/EN
- ✅ Design responsive & moderne
- ✅ Animations Framer Motion

### Backend 🔧
- ✅ Express.js sécurisé
- ✅ API REST complète
- ✅ IA avec calculs mathématiques avancés
- ✅ Historique de conversation
- ✅ Rate limiting & CORS
- ✅ Validation des entrées

### Database 🗄️
- ✅ MongoDB (conversations)
- ✅ PostgreSQL (données structurées)
- ✅ Redis (caching)
- ✅ Docker Compose (déploiement facile)

## 🚀 Démarrage Rapide

### Option 1: Sans Docker

**Terminal 1 - Frontend:**
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd backend
npm install
npm run dev
# → http://localhost:3000
```

### Option 2: Avec Docker (Recommandé)

```bash
chmod +x setup.sh
./setup.sh

# Puis
docker-compose up
```

L'application démarre automatiquement sur:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000

## 📁 Structure Détaillée

### Frontend
```
frontend/
├── src/
│   ├── components/          # 5 composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── AiChat.jsx
│   │   └── Footer.jsx
│   ├── services/
│   │   └── api.js          # Client Axios
│   ├── store/
│   │   └── store.js        # Zustand store
│   ├── styles/
│   │   ├── global.css
│   │   ├── app.css
│   │   └── components/     # Styles modulaires
│   ├── main.jsx
│   └── App.jsx
├── index.html
├── vite.config.js
├── package.json
└── Dockerfile
```

### Backend
```
backend/
├── src/
│   ├── routes/
│   │   ├── ai.js          # Routes IA
│   │   └── portfolio.js   # Routes portfolio
│   ├── controllers/
│   │   └── aiController.js # Logique IA
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   ├── validation.js
│   │   └── logger.js
│   └── server.js
├── package.json
└── Dockerfile
```

### Database
```
database/
├── mongo-init.js      # Schéma MongoDB
└── postgres-init.sql  # Schéma PostgreSQL
```

## 🤖 API Endpoints

### AI Endpoints
```
POST   /api/ai/chat           # Chat avec IA
POST   /api/ai/calculate      # Calculs mathématiques
GET    /api/ai/history        # Historique
POST   /api/ai/history/clear  # Effacer historique
```

### Portfolio Endpoints
```
GET    /api/portfolio/skills      # Compétences
GET    /api/portfolio/contact     # Contact
GET    /api/portfolio/data        # Toutes données
```

### Health Check
```
GET    /api/health              # État du serveur
```

## 🔒 Sécurité

- ✅ Helmet.js (headers HTTP sécurisés)
- ✅ CORS configuré
- ✅ Rate limiting
- ✅ Validation des entrées
- ✅ Gestion d'erreurs centralisée

## 🎨 Personnalisation

### Changer les données
Modifiez `/backend/src/routes/portfolio.js`

### Ajouter des compétences
Modifiez le store Zustand dans `/frontend/src/components/Skills.jsx`

### Intégrer OpenAI
Dans `.env`:
```
OPENAI_API_KEY=sk-...
```

Puis dans `/backend/src/controllers/aiController.js`:
```javascript
const response = await openai.chat.completions.create({...})
```

## 📦 Dépendances Clés

**Frontend:**
- react 18.2.0
- vite 5.0.0
- zustand 4.4.0
- axios 1.6.0

**Backend:**
- express 4.18.2
- mathjs 11.11.0
- mongoose 7.5.0
- redis 4.6.11

## 🐳 Commandes Docker

```bash
# Démarrer tous les services
docker-compose up

# Arrêter tous les services
docker-compose down

# Voir les logs
docker-compose logs -f

# Redémarrer
docker-compose restart

# Reconstruire
docker-compose up --build
```

## 📊 Variables d'Environnement

### Backend (.env)
```
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://mongodb:27017/chartech
REDIS_URL=redis://redis:6379
JWT_SECRET=your-secret-key
OPENAI_API_KEY=
LOG_LEVEL=debug
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:3000
VITE_OPENAI_KEY=
```

## 🚀 Déploiement

### Vercel (Frontend)
```bash
vercel deploy
```

### Heroku (Backend)
```bash
heroku create chartech-api
git push heroku main
```

### Docker Hub
```bash
docker build -t chartech-frontend ./frontend
docker push username/chartech-frontend

docker build -t chartech-backend ./backend
docker push username/chartech-backend
```

## 📈 Performance

- **Vite**: Démarrage instant en dev
- **Code Splitting**: Optimisation bundle
- **Caching**: Redis pour les requêtes fréquentes
- **Rate Limiting**: Protection DDoS
- **Gzip**: Compression automatique

## 🆘 Troubleshooting

**Port 5173 déjà utilisé?**
```bash
lsof -i :5173
kill -9 <PID>
```

**MongoDB ne démarre pas?**
```bash
docker-compose down -v  # Nettoyer volumes
docker-compose up --build
```

**Erreur CORS?**
Vérifier `.env` → `CORS_ORIGIN=http://localhost:5173`

## 📚 Prochaines Étapes

- [ ] Authentification JWT
- [ ] Dashboard Admin
- [ ] Intégration OpenAI/Claude
- [ ] Webhooks
- [ ] Tests automatisés
- [ ] CI/CD GitHub Actions
- [ ] Monitoring (Sentry)
- [ ] Analytics (Plausible)

## 👨‍💻 Auteur

**Charles Technology** - Innovons ensemble

## 📄 Licence

MIT

---

**Questions?** Consultez les commentaires de code ou ouvrez une issue! 🎯
