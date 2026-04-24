# ANTIGRAVITY - BTP CONCEPT

Application web moderne (Next.js 16) pour une entreprise de BTP en Côte d'Ivoire.
Inclus :
- Site vitrine responsive & animé (Framer Motion).
- Espace Administration hyper-complet (Dashboard, gestion des projets, équipe, messagerie, devis).

## Stack Technique

- **Framework**: Next.js (App Router)
- **Design System**: shadcn/ui + Tailwind CSS (v4)
- **Base de données**: PostgreSQL (via Supabase) + Prisma ORM (v5)
- **Authentification**: NextAuth.js
- **Uploads**: UploadThing
- **Validation Formulaires**: Zod + React Hook Form

## Prérequis

- Node.js >= 18.17.0
- Compte Supabase
- Compte UploadThing

## Installation Locale

1. Clonez le projet et installez les dépendances :
```bash
npm install
```

2. Dupliquez et configurez les variables d'environnement :
```bash
cp .env.example .env
```

3. Configuration Supabase :
- Créez un nouveau projet sur Supabase.
- Allez dans `Project Settings > Database` et copiez `Connection string` (URI).
- Modifiez `DATABASE_URL` dans votre fichier `.env`.

4. Générer le client Prisma et créer la base de données :
```bash
npx prisma generate
npx prisma db push
```

5. Initialiser les données pour le compte Admin :
```bash
npx prisma db seed
```
*(Le compte par défaut sera : **admin@btpconcept.ci** / mot de passe : **admin123**)*

6. Lancez le serveur de développement :
```bash
npm run dev
```

## Déploiement Vercel

1. Poussez votre code sur GitHub.
2. Créez un projet sur Vercel et importez le repository.
3. Configurez les **Environment Variables** dans l'interface Vercel :
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET` (utilisez `openssl rand -base64 32` dans votre terminal pour en générer une)
   - `NEXTAUTH_URL` (votre domaine Vercel, ex: `https://btp-concept.vercel.app`)
   - `UPLOADTHING_SECRET` et `UPLOADTHING_APP_ID`
4. Dans `Build & Development Settings`, modifiez la commande de build :
   - Build Command : `npm run build`
   - Si vous voulez automatiser Prisma : `npx prisma generate && npx prisma db push && npm run build`
5. Cliquez sur **Deploy**.

## Architecture & Contributions

L'architecture est centralisée autour de `src/app`.
- Les composants d'UI (shadcn) se trouvent dans `src/components/ui/`.
- Les vues de l'admin sont protégées et isolées dans `src/app/(admin)`.
- Les actions backend (mutations de base de données) doivent être effectuées dans les `Server Actions`, idéalement définies dans `src/actions`.
