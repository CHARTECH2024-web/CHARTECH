#!/bin/bash

echo "🚀 CHARTECH - Installation automatique"
echo "======================================"

# Vérifier Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez installer Docker d'abord."
    exit 1
fi

echo "✅ Docker détecté"

# Créer les fichiers .env s'ils n'existent pas
if [ ! -f "frontend/.env.local" ]; then
    cp frontend/.env.example frontend/.env.local
    echo "✅ frontend/.env.local créé"
fi

if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo "✅ backend/.env créé"
fi

# Construire et démarrer les services
echo "🔨 Construction des services..."
docker-compose build

echo "✅ Installation complète!"
echo ""
echo "Pour démarrer les services, exécutez:"
echo "  docker-compose up"
echo ""
echo "URLs:"
echo "  Frontend: http://localhost:3000"
echo "  Backend: http://localhost:3001"
echo "  MongoDB: mongodb://root:chartech123@localhost:27017"
echo "  Redis: redis://localhost:6379"
