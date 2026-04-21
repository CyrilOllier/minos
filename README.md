# Minos

Base de projet pour **Minos**, jeu web de labyrinthe/plateforme inspiré du mythe du roi Minos.

## Blocs inclus
- `client-game` : prototype Canvas/TypeScript du jeu
- `server-api` : API Node/Express/TypeScript pour auth/sauvegardes
- `admin-panel` : base React/TypeScript pour l'administration
- `shared` : types et constantes partagés

## Démarrage visé
```bash
npm install
npm run dev:game
npm run dev:api
npm run dev:admin
```

## État actuel
- intro avec héros endormi sous le trou d'arrivée
- salle de départ visuelle
- transitions de salles simples
- barre de vie
- barre de progression visible
- base d'API et admin à compléter
