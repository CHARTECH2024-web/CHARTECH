```
# 🔧 CHARTECH Backend - Django API

Backend Django pour la gestion du portfolio CHARTECH avec système d'authentification admin.

## 🚀 Démarrage Rapide

### Option 1: Installation locale

```bash
# Créer un environnement virtuel
python -m venv venv

# Activer l'environnement
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows

# Installer les dépendances
pip install -r requirements.txt

# Créer un fichier .env
cp .env.example .env

# Appliquer les migrations
python manage.py migrate

# Créer un superadmin
python manage.py createsuperuser

# Démarrer le serveur
python manage.py runserver
```

### Option 2: Avec Docker

```bash
docker build -t chartech-backend .
docker run -p 8000:8000 chartech-backend
```

## 📊 API Endpoints

### 🔐 Authentification (`/api/auth/`)
- `POST /api/auth/register/` - Créer un compte
- `POST /api/auth/login/` - Se connecter (JWT)
- `GET /api/auth/me/` - Données de l'utilisateur (authentifié)
- `PUT /api/auth/update_profile/` - Mettre à jour le profil

### 📱 Portfolio (`/api/portfolio/`)
- `GET /api/portfolio/portfolio/current/` - Données du portfolio
- `PUT /api/portfolio/portfolio/{id}/` - Modifier (admin)

### 🎨 Projets (`/api/portfolio/projects/`)
- `GET /api/portfolio/projects/` - Lister les projets
- `POST /api/portfolio/projects/` - Créer (admin)
- `PUT /api/portfolio/projects/{id}/` - Modifier (admin)
- `DELETE /api/portfolio/projects/{id}/` - Supprimer (admin)

### 💡 Compétences (`/api/portfolio/skills/`)
- `GET /api/portfolio/skills/` - Lister les compétences
- `POST /api/portfolio/skills/` - Créer (admin)
- `PUT /api/portfolio/skills/{id}/` - Modifier (admin)
- `DELETE /api/portfolio/skills/{id}/` - Supprimer (admin)

### 🖼️ Galerie (`/api/portfolio/gallery/`)
- `GET /api/portfolio/gallery/` - Lister la galerie (public)
- `GET /api/portfolio/gallery/by_category/` - Grouper par catégorie
- `POST /api/portfolio/gallery/` - Ajouter (admin)
- `PUT /api/portfolio/gallery/{id}/` - Modifier (admin)
- `DELETE /api/portfolio/gallery/{id}/` - Supprimer (admin)

### 📧 Contact (`/api/portfolio/contact/`)
- `POST /api/portfolio/contact/create_message/` - Envoyer un message
- `GET /api/portfolio/contact/list_messages/` - Lister (admin)
- `PATCH /api/portfolio/contact/mark_as_read/` - Marquer comme lu (admin)

### 🏥 Santé (`/api/health/`)
- `GET /api/health/` - État du serveur

## 🗄️ Modèles de Données

### CustomUser
- Email unique
- Authentification par email
- Rôle portfolio_admin

### Portfolio
- Données principales du site
- Réseaux sociaux
- Informations de contact

### Project
- Titre, description
- Images et vidéos
- Technologies utilisées
- URLs GitHub/Live

### Skill
- Nom, catégorie
- Niveau de maîtrise (0-100)
- Icône URL

### Gallery
- Support images et vidéos
- Catégories
- Publication/archivage

### Contact
- Stockage des messages
- Marque comme lu

## 🔒 Authentification

L'API utilise **JWT (JSON Web Tokens)** pour l'authentification.

### Flow de connexion:

```javascript
// 1. POST /api/auth/login/
{
  "email": "admin@chartech.com",
  "password": "password123"
}

// Réponse
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": 1,
    "email": "admin@chartech.com",
    "username": "admin",
    "is_portfolio_admin": true
  }
}

// 2. Utiliser le token dans les headers
Authorization: Bearer <access_token>
```

## 📝 Configuration

Voir `.env.example` pour toutes les variables d'environnement.

Essentiellement:
- `DATABASE_*` - Configuration PostgreSQL
- `CORS_ALLOWED_ORIGINS` - Domaines autorisés
- `JWT_SECRET` - Clé secrète JWT
- `DEBUG` - Mode développement

## 🐳 Docker Compose

Un `docker-compose.yml` à la racine orchestrera:
- Backend Django (port 8000)
- PostgreSQL (port 5432)
- Redis (port 6379)

```bash
docker-compose up
```

## 📦 Dépendances Clés

- `Django 4.2` - Framework web
- `DRF` - REST API framework
- `django-cors-headers` - CORS middleware
- `Pillow` - Image processing
- `psycopg2` - PostgreSQL adapter
- `djangorestframework-jwt` - JWT auth

## 🆘 Troubleshooting

**Erreur de migration?**
```bash
python manage.py migrate --fake-initial
```

**Port 8000 déjà utilisé?**
```bash
python manage.py runserver 8001
```

**Erreur CORS?**
Vérifier `.env` → `CORS_ALLOWED_ORIGINS`

## 🚀 Prochaines Étapes

- [ ] Tests unitaires
- [ ] Caching avancé
- [ ] Webhooks
- [ ] Logs structurés
- [ ] Monitoring (Sentry)

---

**Questions?** Consultez les modèles et les permissions dans le code! 🎯
```
