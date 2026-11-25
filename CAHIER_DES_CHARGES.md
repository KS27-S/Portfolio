# Cahier des charges : Monitoring Student

> Document de référence du projet. Toute modification du code, de la base Supabase ou de l'interface doit respecter ce document. En cas de doute ou de contradiction, demander avant d'agir.

---

## 1. Présentation

### 1.1 But du projet
Monitoring Student est une plateforme de suivi scolaire. Des **encadreurs** (enseignants ou tuteurs) suivent des **élèves** du premier cycle (6ème à 3ème) : ils leur proposent un programme, reçoivent leurs travaux sous forme de photos, les corrigent et suivent leur progression. Un **administrateur** supervise l'ensemble de la plateforme.

### 1.2 Public visé
- Élèves du collège (6ème, 5ème, 4ème, 3ème), donc des **mineurs** : la protection des données est prioritaire.
- Encadreurs (adultes), souvent sur mobile.
- Un administrateur de la plateforme.

### 1.3 Contraintes générales
- Utilisable sur **téléphone** en priorité (écran étroit, connexion parfois faible).
- Interface en **français**.
- Simple à utiliser : un élève de 11 ans doit pouvoir s'en servir.

---

## 2. Technologies imposées

| Élément | Choix |
|---|---|
| Interface | HTML, CSS, JavaScript (sans framework lourd) |
| Fichiers de la plateforme principale | `monitoring-student.html`, `monitoring-student.css`, `monitoring-student.js` |
| Fichiers de la plateforme admin | `admin.html`, `admin.css`, `admin.js` |
| Base de données et authentification | Supabase (PostgreSQL, Auth, Storage) |
| Schéma de base | `supabase/schema.sql` (réexécutable) |
| Données de démonstration | `supabase/demo.sql` (réexécutable, lié au compte `sene@monitoring-student.app`) |
| Activation de l'admin | `supabase/admin.sql` |
| Assistant IA | Fonction Edge Supabase `assistant-ia` (`supabase/functions/assistant-ia/index.ts`) appelant OpenAI |
| Secrets | `OPENAI_API_KEY` (et `OPENAI_MODEL` facultatif) uniquement dans les secrets Supabase |

**Règle :** aucune clé secrète dans le code ni dans les fichiers du projet. Seule la clé publique (anon) de Supabase peut figurer côté navigateur.

---

## 3. Rôles et accès

### 3.1 Élève
- Se connecte avec le **code de son encadreur**, son profil et un **PIN à 4 chiffres**.
- Un élève créé par lui-même est en statut `en_attente` tant que l'encadreur ne l'a pas activé.
- Ne voit que **ses propres** travaux, corrections, progression et messages d'assistant, ainsi que les cours et questions d'entraide de **son encadreur et de sa classe**.

### 3.2 Encadreur
- S'inscrit avec e-mail et mot de passe (confirmation par e-mail activée).
- Reçoit automatiquement un **code encadreur** unique et non devinable.
- Gère uniquement **ses** élèves, niveaux, matières, chapitres, exercices, cours et corrections.

### 3.3 Administrateur
- Compte Supabase Auth présent dans la table `admins`.
- Accède à `admin.html` pour consulter des **statistiques globales** (lecture seule via fonctions sécurisées).
- Ne modifie pas les données des encadreurs depuis l'interface admin.

---

## 4. Fonctionnalités

### 4.1 Inscription et connexion

**Encadreur**
- Inscription : prénom, nom, pays, e-mail, mot de passe.
- Acceptation des conditions d'utilisation (consentement enregistré dans `consentements`, type `cgu_encadreur`).
- Création automatique des niveaux par défaut (6ème, 5ème, 4ème, 3ème) et des matières par défaut (Mathématiques, Français, Sciences, Histoire-Géographie).
- Possibilité d'enregistrer un numéro WhatsApp (`telephone_whatsapp`).

**Élève**
- Saisie du code encadreur, choix du profil dans la liste des élèves actifs, saisie du PIN.
- Inscription possible via le code encadreur (statut `en_attente`).
- Limitation du nombre de tentatives (protection anti-force brute).

### 4.2 Espace encadreur
1. **Élèves** : créer, modifier, activer, supprimer un élève ; réinitialiser son PIN ; renseigner un téléphone de contact.
2. **Niveaux** : ajouter, renommer, supprimer. Renommer un niveau met à jour les élèves et chapitres concernés.
3. **Matières** : nom et couleur.
4. **Chapitres** : titre, description, niveau, ordre, matière.
5. **Exercices** : titre, énoncé, difficulté (`facile`, `moyen`, `difficile`), fichiers joints.
6. **Cours** : titre, description, niveau, matière, chapitre facultatif, fichiers joints.
7. **Travaux reçus** : ouvrir le détail d'un travail, voir la photo, changer le statut.
8. **Corrections** : commentaire/appréciation, note entière de 0 à 20, audio facultatif. Modifier la dernière correction d'un travail sans créer de doublon.
9. **Suivi de progression** par élève et par chapitre.
10. **Entraide** : lire et répondre aux questions des élèves, supprimer une réponse inappropriée, voir les signalements.
11. **Demandes de suppression** de données faites par les familles : consulter et marquer comme traitée.
12. **Suppression définitive** d'un élève et de ses données.
13. **Suppression de son propre compte** et de toutes ses données.

### 4.3 Espace élève
1. **Programme** : voir les matières, chapitres, exercices et cours de sa classe.
2. **Envoi d'un travail** : titre, message, photo (JPEG, PNG, WebP ou PDF, 10 Mo maximum). Modifiable ou supprimable tant que le statut est `en_attente`.
3. **Résultats** : ouvrir le détail d'un travail pour voir la correction complète (note, appréciation, audio, date).
4. **Statuts d'un travail** : `en_attente`, `corrige`, `a_refaire`.
5. **Progression** : marquer un chapitre `a_faire`, `en_cours` ou `termine`.
6. **Assistant IA** (voir 4.5).
7. **Entraide** : poser une question (avec photo facultative), répondre, marquer une réponse comme utile, signaler une réponse.
8. **Information élève** : message d'information affiché une fois (`info_eleve_vue`).
9. **Demande de suppression de ses données**.

### 4.4 Espace administrateur
- Connexion par e-mail et mot de passe.
- Si aucun admin n'est configuré, un message l'indique.
- Tableaux de bord alimentés par les fonctions SQL `admin_resume`, `admin_encadreurs`, `admin_activites` et `admin_repartition_niveaux` :
  - nombre d'utilisateurs, d'encadreurs, d'élèves (actifs / en attente) ;
  - nombre de travaux (en attente, corrigés, à refaire), de corrections, d'exercices, de chapitres ;
  - chapitres terminés ;
  - détail par encadreur et dernière activité ;
  - fil d'activités récentes ;
  - répartition des élèves par classe.
- Accès refusé à toute personne absente de la table `admins`.

### 4.5 Assistant IA
- Réservé aux élèves actifs et connectés.
- Passe **exclusivement** par la fonction Edge `assistant-ia` (le navigateur n'appelle jamais OpenAI directement).
- Messages enregistrés dans `assistant_messages` (`role` = `eleve` ou `ia`, contenu de 1 à 12 000 caractères), éventuellement liés à un travail.
- L'encadreur peut **consulter** les échanges de ses élèves (lecture seule).
- Ton pédagogique : l'assistant **guide** l'élève, il ne donne pas simplement la réponse.
- Contenu adapté à des enfants ; refus des sujets inappropriés.
- **Limite d'usage** par élève pour maîtriser le coût (à confirmer dans `index.ts`).
- Gestion claire des erreurs : session expirée, quota dépassé, clé absente.

---

## 5. Modèle de données

| Table | Rôle |
|---|---|
| `encadreurs` | Profil encadreur, code unique, téléphone WhatsApp |
| `niveaux` | Classes d'un encadreur (nom, ordre) |
| `eleves` | Élèves : classe, statut (`en_attente` / `actif`), PIN haché, lien avec le compte auth, téléphone de contact, `info_eleve_vue` |
| `matieres` | Matières d'un encadreur (nom, couleur) |
| `chapitres` | Chapitres par matière et niveau |
| `exercices` | Exercices d'un chapitre |
| `exercice_fichiers` | Fichiers joints aux exercices |
| `travaux` | Travaux envoyés par les élèves (photo, statut, date) |
| `corrections` | Corrections des travaux (commentaire/appréciation, note entière de 0 à 20, audio) |
| `progression` | Avancement d'un élève par chapitre |
| `cours` | Cours publiés par un encadreur pour un niveau et une matière |
| `cours_fichiers` | Fichiers joints aux cours |
| `entraide_questions` | Questions des élèves |
| `entraide_reponses` | Réponses (élèves ou encadreur) |
| `entraide_utiles` | Réponses marquées utiles |
| `entraide_signalements` | Réponses signalées |
| `assistant_messages` | Historique de l'assistant IA |
| `conversations_ia` | Réservée, non accessible aux utilisateurs |
| `consentements` | Consentements des encadreurs et des parents |
| `demandes_suppression` | Demandes de suppression de données |
| `tentatives_acces` | Journal anti-abus (aucun accès utilisateur) |
| `admins` | Comptes administrateurs |

**Stockage (privé) :**
- Bucket `travaux` : photos des travaux, rangées par identifiant d'élève.
- Bucket `ressources` : fichiers d'exercices, de cours et d'entraide.

**Données de démonstration :** `supabase/demo.sql` recrée le jeu de données fictif (élèves, chapitres, exercices, cours, travaux, corrections, progression, entraide, assistant) uniquement pour le compte de démonstration `sene@monitoring-student.app`. Il est **réexécutable** et ne modifie pas les données des autres encadreurs. Les élèves de démonstration utilisent le PIN `1234` (démonstration uniquement).

**Corrections :** l'appréciation de l'encadreur est stockée dans `corrections.commentaire`. Lorsqu'une correction existe déjà, la plus récente est mise à jour au lieu de créer un doublon. L'élève peut consulter la correction complète en lecture seule.

**Règle :** toute évolution de la base passe par `supabase/schema.sql`, qui doit rester **réexécutable sans erreur et sans perte de données**.

---

## 6. Sécurité et confidentialité

### 6.1 Principes
- **Row Level Security** activée sur toutes les tables : un utilisateur ne voit que ses données.
- Les droits sur la table `eleves` sont accordés **colonne par colonne** ; le PIN haché n'est jamais lisible par le navigateur.
- Les PIN sont **hachés** (bcrypt) et jamais stockés en clair.
- Les codes encadreur sont **aléatoires** (par exemple `SENE-1A2B3C4D`) ; les anciens codes devinables (`ENC-1234`) doivent être régénérés.
- **Limitation des tentatives** sur la saisie du code et du PIN.
- Les fonctions sensibles vérifient `auth.uid()` et appartiennent à `security definer` avec un `search_path` fixé.
- Les buckets de stockage sont **privés**.

### 6.2 Protection des mineurs
- Le **consentement parental** est obligatoire avant l'activation d'un élève.
- Les familles peuvent demander la **suppression** des données de l'élève.
- Les données des élèves ne sont jamais publiques.
- L'IA ne doit pas demander ni stocker d'informations personnelles inutiles.

### 6.3 Réglages Supabase Auth à activer
- Confirmation de l'e-mail.
- Longueur minimale du mot de passe (12 recommandé).
- Protection contre les mots de passe compromis (selon l'offre Supabase).

### 6.4 Hébergement
- En-têtes anti-clickjacking (`X-Frame-Options: DENY` et `Content-Security-Policy: frame-ancestors 'none'`) à définir côté hébergeur.
- HTTPS obligatoire.
- Dépôt Git **privé**.

---

## 7. Exigences d'interface

- Mobile d'abord, utilisable aussi sur ordinateur.
- La correction d'un travail s'effectue dans une fenêtre modale adaptée au mobile, avec note, appréciation et statut.
- Messages d'erreur clairs, en français, sans jargon technique.
- Indicateurs de chargement pendant les requêtes.
- Couleurs des matières cohérentes dans toute l'application.
- Texte lisible : taille suffisante, bon contraste.
- Aucune information confidentielle affichée dans la console ni dans les messages d'erreur.

---

## 8. Hors périmètre (à ne pas ajouter sans accord)

- Paiement en ligne.
- Vidéoconférence.
- Application mobile native.
- Publicité ou suivi par des services tiers.
- Partage public des travaux d'élèves.
- Appel direct à OpenAI depuis le navigateur.

---

## 9. Règles de travail pour l'IA (opencode)

1. Lire ce document avant toute modification.
2. **Ne jamais** inventer de table, de colonne ou de fonction : vérifier d'abord `supabase/schema.sql`.
3. Quand le code utilise une table ou une colonne nouvelle, **ajouter la migration correspondante dans `schema.sql`** et dire explicitement qu'il faut la rejouer dans Supabase.
4. Ne jamais écrire de clé secrète dans un fichier.
5. Ne pas toucher à Git (commit, push) sans demande explicite.
6. Ne pas supprimer ni modifier `admin.sql` sans demande.
7. Après chaque changement, indiquer la liste des fichiers modifiés et ce que l'utilisateur doit exécuter ou déployer.
8. Si une demande contredit ce cahier des charges, **poser la question** avant d'agir.
9. Supprimer les fichiers de test (`__test-assistant*`) avant la mise en production.

---

## 10. Points à vérifier

- [ ] `schema.sql` exécuté sans erreur sur le projet Supabase.
- [ ] Sauvegarde Supabase restaurée si des données réelles ont été perdues.
- [ ] `demo.sql` exécuté si le jeu de données de démonstration est souhaité.
- [ ] Correction d'un travail testée : ouverture, note de 0 à 20, appréciation, statut et lecture élève.
- [ ] `admin.sql` exécuté et `select * from public.admins;` renvoie une ligne.
- [ ] Fonction `assistant-ia` déployée et secret `OPENAI_API_KEY` défini.
- [ ] Limite d'usage de l'assistant confirmée dans `index.ts`.
- [ ] Fonctions `supprimer_eleve_definitivement` et `supprimer_mon_compte` testées (la suppression directe dans les tables de stockage peut être refusée par Supabase ; il faudra alors passer par l'API Storage).
- [ ] Anciens codes encadreur régénérés.
- [ ] Réglages Auth activés.
- [ ] En-têtes de sécurité configurés chez l'hébergeur.
- [ ] Fichiers de test supprimés.
- [ ] Dépôt Git privé.

---

## 11. Restauration des données

1. **Données réelles** : dans Supabase, ouvrir `Database > Backups`, choisir une sauvegarde antérieure à la perte puis restaurer. La restauration remplace l'état complet de la base : les données créées après la sauvegarde seront perdues.
2. Exécuter ensuite `supabase/schema.sql` pour remettre le schéma à jour **sans perte de données**.
3. Exécuter `supabase/admin.sql` si les fonctions d'administration manquent.
4. Exécuter `supabase/demo.sql` pour remettre le jeu de démonstration (compte `sene@monitoring-student.app`, PIN des élèves de démonstration : `1234`).
5. Vérifier dans le SQL Editor :
   - `select count(*) from public.eleves;`
   - `select count(*) from public.travaux;`
   - `select count(*) from public.corrections;`
   - `select count(*) from public.progression;`
