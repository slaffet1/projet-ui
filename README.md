# COVOI+ - Plateforme de Covoiturage Intelligent

## Équipe de développement
- Ahmed Drira
- Lyess Zormati
- Mohamed Said Leffat
- Emir Djebbi
- Seif Eddin Ben Fraj
- Anas Moncer

---

## Missions et Responsabilités

### Mohamed Said Leffat et Anas Moncer
Mission : Éliminer l'incertitude et permettre à l'utilisateur de construire son emploi du temps en s'appuyant sur un service fiable.

Responsabilités :
- Développement des interfaces utilisateur principales
- Intégration des maquettes Figma en HTML/CSS
- Assurance de la cohérence visuelle sur toutes les pages
- Mise en place de la structure responsive

### Seif Eddin Ben Fraj et Emir Djebbi
Mission : Établir une relation de confiance financière en supprimant toute mauvaise surprise et en permettant une gestion de budget précise.

Responsabilités :
- Architecture de la gestion des paiements et remboursements
- Développement du système de calcul automatique des frais
- Intégration des simulateurs de coûts
- Sécurisation des transactions

### Ahmed Drira et Lyess Zormati
Mission : Rassurer l'utilisateur en lui prouvant que sa sécurité et la ponctualité du service sont la priorité absolue.

Responsabilités :
- Implémentation du système de suivi GPS en temps réel
- Développement des fonctionnalités de sécurité (contacts d'urgence)
- Mise en place des notifications et alertes
- Optimisation des performances et temps de réponse

---

## Description du projet

COVOI+ est une plateforme innovante de covoiturage qui intègre une gestion automatique des frais et remboursements. L'application offre un suivi en temps réel des trajets, un système de sécurité avancé avec partage de position, et une interface utilisateur intuitive.

### Interfaces développées

#### 1. Page de Suivi de Trajet en Direct
Fonctionnalités :
- Visualisation du trajet en temps réel sur carte interactive
- Informations détaillées du conducteur (Ahmed Bensalah)
- Système de partage de position avec contacts d'urgence
- Boutons d'action : Appeler, Message, Alerte d'urgence
- Interface responsive avec design moderne

#### 2. Page Mes Réservations
Fonctionnalités :
- Vue d'ensemble des trajets en cours et à venir
- Section "Trajet en cours" avec itinéraire visuel
- Onglets "À venir" / "Historique" pour navigation
- Cartes de réservation avec détails complets
- Boutons d'action : Suivre en direct, Contacter, Annuler
- Prix et statistiques clairement affichés

#### 3. Composants Communs
- Navbar : Navigation principale avec 7 liens, profil utilisateur
- Footer : 4 colonnes (Logo, Fonctionnalités, Ressources, Contact)

---

## Instructions pour exécuter le projet

### Prérequis
- Navigateur web moderne (Chrome 90+, Firefox 88+, Safari 14+)
- Connexion Internet pour les CDN (Tailwind CSS, FontAwesome)

### Installation locale

1. Cloner le projet
git clone https://github.com/slaffet1/projet-ui.git
cd projet-ui

2. Structure des fichiers
src/
├── alltemplates/
│   └── said/
│       ├── trajetdirect.html      
│       └── mes-reservations.html  
├── common/
│   ├── navbar.html               
│   └── footer.html               
├── index.html                    
└── README.md                     

3. Ouvrir les pages

   Méthode 1 : Double-cliquer sur les fichiers HTML
   
   Méthode 2 : Servir avec un serveur local
   
   Avec Python
   python -m http.server 8000
   
   Avec Node.js
   npx serve src

4. Accès aux pages
   - Page suivi : src/alltemplates/said/trajetdirect.html
   - Page réservations : src/alltemplates/said/mes-reservations.html
   - Page d'accueil : src/index.html

### Déploiement rapide
Le projet utilise uniquement des CDN externes, aucune installation de dépendances n'est nécessaire.

---

## Problèmes rencontrés et solutions

### Problème 1 : Chargement dynamique des composants
Problème : Les pages doivent charger la navbar et le footer dynamiquement depuis des fichiers séparés.

Solution :
- Implémentation d'un script JavaScript avec fetch()
- Gestion des erreurs avec try-catch
- Chemins relatifs adaptés à la structure du projet

### Problème 2 : Responsive Design strict
Problème : Les contraintes imposent l'utilisation exclusive de Tailwind CSS sans CSS personnalisé.

Solution :
- Utilisation intensive des utilitaires Tailwind (grid, flex, breakpoints)
- Classes conditionnelles pour mobile/tablette/desktop
- Approche "mobile-first" avec préfixes md: et lg:

### Problème 3 : Cohérence des couleurs
Problème : Maintenir exactement les mêmes couleurs (#3A208F, #9E95CF, #3D9C10) sur tous les composants.

Solution :
- Création d'une palette de couleurs documentée
- Utilisation de bg-[#CODE] pour les couleurs spécifiques
- Variables CSS personnalisées dans Tailwind (si configuré)

### Problème 4 : Navigation entre pages
Problème : Les boutons "Suivre en direct" doivent rediriger vers la page de suivi.

Solution :
- Liens relatifs entre les pages du dossier said/
- Structure de dossiers cohérente
- Tests de navigation sur serveur local

### Problème 5 : Compatibilité navigateur
Problème : Assurer le fonctionnement sur tous les navigateurs modernes.

Solution :
- Utilisation de CDN stables (Tailwind v3, FontAwesome 6)
- Préfixes CSS automatiques via Tailwind
- Tests sur Chrome, Firefox, Safari

---

## Structure technique

### Technologies utilisées
- HTML5 : Structure sémantique
- Tailwind CSS 3 : Styling utilitaire
- JavaScript Vanilla : Interactivité minimale
- FontAwesome 6 : Icônes
- Google Fonts : Police Inter

### Conventions de code
1. HTML : Indentation de 2 espaces, balises fermantes explicites
2. Classes Tailwind : Ordonnées par catégorie (layout, flex, spacing, etc.)
3. Responsive : Classes sm:, md:, lg: systématiques
4. Accessibilité : Attributs aria-label sur les icônes

### Points forts du projet
- 100% Tailwind CSS - Aucun CSS personnalisé  
- Design responsive - Adapté à tous les écrans  
- Navigation fluide - Liens entre pages fonctionnels  
- Performance optimale - Chargement rapide via CDN  
- Code maintenable - Structure claire et documentée  

---

## Perspectives d'amélioration

### Court terme
- Ajout de pages manquantes (simulateur, historique, messages)
- Intégration avec une API backend
- Validation des formulaires

### Moyen terme
- Système d'authentification utilisateur
- Paiements en ligne sécurisés
- Application mobile Progressive Web App

### Long terme
- Intelligence artificielle pour suggestions de trajets
- Intégration avec services de cartographie (Google Maps, OpenStreetMap)
- Communauté d'utilisateurs avec système de notation

---

## Support

Pour toute question concernant le projet :
- Repository : github.com/votre-equipe/covoi-plus
- Email : contact@covoiplus.com
- Équipe : Ahmed Drira, Lyess Zormati, Mohamed Said Leffat, Emir Djebbi, Seif Eddin Ben Fraj, Anas Moncer

---

Dernière mise à jour : Décembre 2024
Version du projet : 1.1.0
