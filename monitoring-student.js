window.__SUPABASE_URL__ = "https://wyaquvthawgmjmybevka.supabase.co";
window.__SUPABASE_ANON_KEY__ = "sb_publishable_JobwM33J91_KGYrRgxHLoA_zURW80-F";

const CLE_PROFIL = "monitoring-student:profil";

const SUPABASE_URL = window.__SUPABASE_URL__ ?? "";
const SUPABASE_ANON_KEY = window.__SUPABASE_ANON_KEY__ ?? "";

const PARAMETRES_APERCU = new URLSearchParams(window.location.search);
const ROLE_APERCU = PARAMETRES_APERCU.get("apercu");
const MODE_APERCU = ROLE_APERCU === "encadreur" || ROLE_APERCU === "eleve";
const CONTACT_PLATEFORME = "contact@monitoring-student.app";
const VERSION_TEXTE_CONSENTEMENT = "v1-2026-11-05";
const ASSISTANT_IA_DISPONIBLE = true;

const ELEVES_EXEMPLE = [
  { id: "awa-diop", prenom: "Awa", nom: "Diop", classe: "3ème", telephone_contact: "+221 77 123 45 67" },
  { id: "moussa-ndiaye", prenom: "Moussa", nom: "Ndiaye", classe: "3ème", telephone_contact: "+221 76 234 56 78" },
  { id: "fatou-sow", prenom: "Fatou", nom: "Sow", classe: "4ème", telephone_contact: "+221 78 345 67 89" },
  { id: "cheikh-fall", prenom: "Cheikh", nom: "Fall", classe: "4ème", telephone_contact: "+221 70 456 78 90" },
  { id: "aminata-ba", prenom: "Aminata", nom: "Ba", classe: "5ème" },
  { id: "ibrahima-sarr", prenom: "Ibrahima", nom: "Sarr", classe: "5ème", telephone_contact: "+221 77 567 89 01" },
  { id: "mariama-diallo", prenom: "Mariama", nom: "Diallo", classe: "6ème", telephone_contact: "+221 76 678 90 12" },
  { id: "abdou-gueye", prenom: "Abdou", nom: "Gueye", classe: "6ème" }
];

const ORDRE_CLASSES = { "6ème": 1, "5ème": 2, "4ème": 3, "3ème": 4 };

const CLE_EXERCICES_LOCAL = "monitoring-student-sene:exercices-demo-v1";
const CLE_CHAPITRES_PROGRAMME_LOCAL = "monitoring-student-sene:chapitres-demo-v1";
const CLE_PROGRESSION_LOCAL = "monitoring-student-sene:progression-demo-v1";
const CLE_PREFILL_TRAVAIL = "monitoring-student-sene:prefill-travail";

const NIVEAUX = ["6ème", "5ème", "4ème", "3ème"];

const MATIERES_EXERCICES = [
  { id: "maths", nom: "Mathématiques", couleur: "#1D4ED8" },
  { id: "physique-chimie", nom: "Physique-Chimie", couleur: "#0EA5E9" },
  { id: "francais", nom: "Français", couleur: "#7C3AED" },
  { id: "svt", nom: "SVT", couleur: "#0F766E" }
];

const CHAPITRES_EXERCICES = [
  {
    id: "maths-3-thales",
    matiere_id: "maths",
    niveau: "3ème",
    ordre: 1,
    titre: "Théorème de Thalès",
    description: "Utiliser la propriété de Thalès pour calculer des longueurs."
  },
  {
    id: "maths-3-equations",
    matiere_id: "maths",
    niveau: "3ème",
    ordre: 2,
    titre: "Équations et inéquations",
    description: "Résoudre des équations et des inéquations du premier degré."
  },
  {
    id: "maths-3-systemes",
    matiere_id: "maths",
    niveau: "3ème",
    ordre: 3,
    titre: "Systèmes d'équations",
    description: "Résoudre un système de deux équations à deux inconnues."
  },
  {
    id: "maths-4-pythagore",
    matiere_id: "maths",
    niveau: "4ème",
    ordre: 1,
    titre: "Théorème de Pythagore",
    description: "Calculer des longueurs dans un triangle rectangle."
  },
  {
    id: "maths-4-calcul-litteral",
    matiere_id: "maths",
    niveau: "4ème",
    ordre: 2,
    titre: "Calcul littéral",
    description: "Développer, factoriser et réduire des expressions."
  },
  {
    id: "maths-6-decimaux",
    matiere_id: "maths",
    niveau: "6ème",
    ordre: 1,
    titre: "Les nombres décimaux",
    description: "Lire, écrire et comparer les nombres décimaux."
  },
  {
    id: "pc-3-lentilles",
    matiere_id: "physique-chimie",
    niveau: "3ème",
    ordre: 1,
    titre: "Les lentilles minces",
    description: "Étudier l'image d'un objet donnée par une lentille convergente."
  },
  {
    id: "pc-3-alcanes",
    matiere_id: "physique-chimie",
    niveau: "3ème",
    ordre: 2,
    titre: "Les alcanes",
    description: "Reconnaître et nommer les alcanes."
  },
  {
    id: "francais-3-argumentatif",
    matiere_id: "francais",
    niveau: "3ème",
    ordre: 1,
    titre: "Le texte argumentatif",
    description: "Construire un paragraphe avec une thèse et des arguments."
  },
  {
    id: "francais-3-subjonctif",
    matiere_id: "francais",
    niveau: "3ème",
    ordre: 2,
    titre: "Le subjonctif",
    description: "Former et employer le subjonctif présent."
  },
  {
    id: "francais-5-recit",
    matiere_id: "francais",
    niveau: "5ème",
    ordre: 1,
    titre: "Le récit au passé",
    description: "Raconter un souvenir avec l'imparfait et le passé composé."
  },
  {
    id: "svt-3-reproduction",
    matiere_id: "svt",
    niveau: "3ème",
    ordre: 1,
    titre: "La reproduction humaine",
    description: "Comprendre le fonctionnement de l'appareil reproducteur."
  },
  {
    id: "svt-3-heredite",
    matiere_id: "svt",
    niveau: "3ème",
    ordre: 2,
    titre: "L'hérédité",
    description: "Découvrir comment les caractères se transmettent."
  }
];

const EXERCICES_EXEMPLE = [
  {
    id: "ex-thales",
    chapitre_id: "maths-3-thales",
    titre: "Calculer une longueur avec Thalès",
    enonce:
      "Dans le triangle ABC, la droite (MN) est parallèle à (BC). On donne AM = 3 cm, AB = 7,5 cm et MN = 4 cm. Calcule la longueur BC.",
    difficulte: "moyen",
    created_at: "2026-09-10T08:00:00.000Z"
  },
  {
    id: "ex-systeme-substitution",
    chapitre_id: "maths-3-systemes",
    titre: "Résoudre un système par substitution",
    enonce: "Résous le système suivant : x + y = 12 et 2x - y = 3.",
    difficulte: "moyen",
    created_at: "2026-09-12T08:00:00.000Z"
  },
  {
    id: "ex-equation",
    chapitre_id: "maths-3-equations",
    titre: "Trouver la valeur de x",
    enonce: "Résous l'équation 3x + 5 = 20.",
    difficulte: "facile",
    created_at: "2026-09-14T08:00:00.000Z"
  },
  {
    id: "ex-paragraphe-argumente",
    chapitre_id: "francais-3-argumentatif",
    titre: "Rédiger un paragraphe argumenté",
    enonce:
      "Penses-tu que les téléphones portables devraient être interdits au collège ? Rédige un paragraphe argumenté de dix lignes.",
    difficulte: "moyen",
    created_at: "2026-09-16T08:00:00.000Z"
  },
  {
    id: "ex-subjonctif",
    chapitre_id: "francais-3-subjonctif",
    titre: "Conjuguer au subjonctif présent",
    enonce:
      "Conjugue les verbes entre parenthèses au subjonctif présent : Il faut que tu (faire) tes devoirs et que tu (être) attentif.",
    difficulte: "facile",
    created_at: "2026-09-18T08:00:00.000Z"
  },
  {
    id: "ex-pythagore",
    chapitre_id: "maths-4-pythagore",
    titre: "Calculer une longueur avec Pythagore",
    enonce:
      "ABC est un triangle rectangle en A avec AB = 6 cm et AC = 8 cm. Calcule la longueur BC.",
    difficulte: "facile",
    created_at: "2026-09-20T08:00:00.000Z"
  },
  {
    id: "ex-lentilles",
    chapitre_id: "pc-3-lentilles",
    titre: "Image d'un objet par une lentille mince",
    enonce:
      "Un objet est placé à 30 cm d'une lentille convergente de distance focale 10 cm. Détermine la position de l'image.",
    difficulte: "difficile",
    created_at: "2026-09-22T08:00:00.000Z"
  },
  {
    id: "ex-alcanes",
    chapitre_id: "pc-3-alcanes",
    titre: "Reconnaître un alcane",
    enonce:
      "Parmi les formules suivantes, lesquelles représentent des alcanes ? Justifie ta réponse.",
    difficulte: "moyen",
    created_at: "2026-09-24T08:00:00.000Z"
  }
];

const LIBELLES_DIFFICULTE = {
  facile: "Facile",
  moyen: "Moyen",
  difficile: "Difficile"
};

const CLE_SUIVI_LOCAL = "monitoring-student-sene:suivi-demo-v1";

const LIBELLES_STATUT = {
  en_attente: "En attente",
  corrige: "Corrigé",
  a_refaire: "À refaire"
};

const LIBELLES_PROGRESSION = {
  a_faire: "À faire",
  en_cours: "En cours",
  termine: "Terminé"
};

const PROGRESSIONS_EXEMPLE = [
  {
    id: "progression-1",
    eleve_id: "awa-diop",
    chapitre_id: "maths-3-thales",
    statut: "termine",
    updated_at: "2026-10-26T17:30:00.000Z"
  },
  {
    id: "progression-2",
    eleve_id: "awa-diop",
    chapitre_id: "maths-3-equations",
    statut: "en_cours",
    updated_at: "2026-10-29T17:30:00.000Z"
  },
  {
    id: "progression-3",
    eleve_id: "awa-diop",
    chapitre_id: "maths-3-systemes",
    statut: "a_faire",
    updated_at: "2026-10-29T17:30:00.000Z"
  },
  {
    id: "progression-4",
    eleve_id: "moussa-ndiaye",
    chapitre_id: "maths-3-thales",
    statut: "termine",
    updated_at: "2026-10-25T17:30:00.000Z"
  },
  {
    id: "progression-5",
    eleve_id: "moussa-ndiaye",
    chapitre_id: "maths-3-equations",
    statut: "termine",
    updated_at: "2026-10-27T17:30:00.000Z"
  },
  {
    id: "progression-6",
    eleve_id: "moussa-ndiaye",
    chapitre_id: "maths-3-systemes",
    statut: "en_cours",
    updated_at: "2026-10-29T17:30:00.000Z"
  },
  {
    id: "progression-7",
    eleve_id: "fatou-sow",
    chapitre_id: "maths-4-pythagore",
    statut: "termine",
    updated_at: "2026-10-28T17:30:00.000Z"
  },
  {
    id: "progression-8",
    eleve_id: "cheikh-fall",
    chapitre_id: "maths-4-pythagore",
    statut: "en_cours",
    updated_at: "2026-10-29T17:30:00.000Z"
  },
  {
    id: "progression-9",
    eleve_id: "aminata-ba",
    chapitre_id: "francais-5-recit",
    statut: "termine",
    updated_at: "2026-10-24T17:30:00.000Z"
  },
  {
    id: "progression-10",
    eleve_id: "mariama-diallo",
    chapitre_id: "maths-6-decimaux",
    statut: "en_cours",
    updated_at: "2026-10-29T17:30:00.000Z"
  },
  {
    id: "progression-11",
    eleve_id: "abdou-gueye",
    chapitre_id: "maths-6-decimaux",
    statut: "termine",
    updated_at: "2026-10-28T17:30:00.000Z"
  }
];

const TRAVAUX_EXEMPLE = [
  {
    id: "travail-1",
    eleve_id: "awa-diop",
    matiere_id: "maths",
    chapitre_id: "maths-3-thales",
    exercice_id: "ex-thales",
    titre: "Exercice 12 page 45",
    message_eleve:
      "Bonjour Monsieur, j'ai fait l'exercice sur Thalès. Pouvez-vous me dire si la rédaction est correcte ?",
    photo_url: null,
    statut: "corrige",
    date_envoi: "2026-10-26T17:30:00.000Z"
  },
  {
    id: "travail-2",
    eleve_id: "moussa-ndiaye",
    matiere_id: "maths",
    chapitre_id: "maths-3-systemes",
    exercice_id: "ex-systeme-substitution",
    titre: "Devoir : système par substitution",
    message_eleve:
      "Voici ma résolution du système. Je ne suis pas sûr de la dernière étape.",
    photo_url: null,
    statut: "en_attente",
    date_envoi: "2026-10-30T18:10:00.000Z"
  },
  {
    id: "travail-3",
    eleve_id: "fatou-sow",
    matiere_id: "maths",
    chapitre_id: "maths-4-pythagore",
    exercice_id: "ex-pythagore",
    titre: "Devoir maison n°3",
    message_eleve: "Bonjour, voici mon exercice sur Pythagore.",
    photo_url: null,
    statut: "en_attente",
    date_envoi: "2026-10-31T16:45:00.000Z"
  },
  {
    id: "travail-4",
    eleve_id: "cheikh-fall",
    matiere_id: "maths",
    chapitre_id: "maths-4-calcul-litteral",
    exercice_id: null,
    titre: "Exercice de calcul littéral",
    message_eleve:
      "J'ai essayé de réduire les expressions. Je voudrais savoir si mes calculs sont justes.",
    photo_url: null,
    statut: "en_attente",
    date_envoi: "2026-10-31T20:20:00.000Z"
  },
  {
    id: "travail-5",
    eleve_id: "aminata-ba",
    matiere_id: "francais",
    chapitre_id: "francais-5-recit",
    exercice_id: null,
    titre: "Rédaction : un souvenir d'enfance",
    message_eleve: "Voici ma rédaction sur un souvenir de vacances.",
    photo_url: null,
    statut: "corrige",
    date_envoi: "2026-10-21T14:00:00.000Z"
  },
  {
    id: "travail-6",
    eleve_id: "ibrahima-sarr",
    matiere_id: "physique-chimie",
    chapitre_id: "pc-3-lentilles",
    exercice_id: "ex-lentilles",
    titre: "Exercice sur les lentilles",
    message_eleve: "Voici mon schéma et mes calculs pour l'image obtenue.",
    photo_url: null,
    statut: "a_refaire",
    date_envoi: "2026-10-23T09:15:00.000Z"
  },
  {
    id: "travail-7",
    eleve_id: "awa-diop",
    matiere_id: "francais",
    chapitre_id: "francais-3-argumentatif",
    exercice_id: "ex-paragraphe-argumente",
    titre: "Les téléphones portables au collège",
    message_eleve:
      "Voici mon paragraphe argumenté. J'ai essayé d'utiliser des exemples concrets.",
    photo_url: null,
    statut: "corrige",
    date_envoi: "2026-10-23T18:05:00.000Z"
  }
];

const CORRECTIONS_EXEMPLE = [
  {
    id: "correction-1",
    travail_id: "travail-1",
    commentaire:
      "Bien joué ! Attention à l'étape 2 : revois la propriété de Thalès.",
    note: 14,
    date_correction: "2026-10-27T08:00:00.000Z"
  },
  {
    id: "correction-2",
    travail_id: "travail-5",
    commentaire:
      "Ta rédaction est agréable à lire. Pense à utiliser plus de connecteurs logiques.",
    note: 15,
    date_correction: "2026-10-22T08:00:00.000Z"
  },
  {
    id: "correction-3",
    travail_id: "travail-6",
    commentaire:
      "Les calculs sont justes, mais le schéma manque de précision. À refaire en indiquant bien la distance focale.",
    note: 8,
    date_correction: "2026-10-24T08:00:00.000Z"
  },
  {
    id: "correction-4",
    travail_id: "travail-7",
    commentaire:
      "Paragraphe clair et bien organisé. Ta thèse est convaincante et tes exemples sont pertinents.",
    note: 16,
    date_correction: "2026-10-24T09:30:00.000Z"
  }
];

const PAGES_VIDES = {
  "/suivi": { titre: "Suivi du travail", icone: "chart-no-axes-column" },
  "/exercices": { titre: "Exercices", icone: "notebook-pen" },
  "/programme": { titre: "Programme", icone: "book-open" },
  "/plus/assistant": { titre: "Assistant IA", icone: "sparkles" }
};

const NAVIGATION = [
  { chemin: "/", libelle: "Accueil", icone: "home" },
  { chemin: "/suivi", libelle: "Suivi", icone: "chart-no-axes-column" },
  { chemin: "/exercices", libelle: "Exercices", icone: "notebook-pen" },
  { chemin: "/programme", libelle: "Programme", icone: "book-open" }
];

const ROUTES = new Set([
  "/",
  "/suivi",
  "/exercices",
  "/programme",
  "/plus",
  "/plus/cours",
  "/plus/entraide",
  "/plus/assistant",
  "/eleves",
  "/profil",
  "/connexion",
  "/connexion/encadreur",
  "/inscription",
  "/mot-de-passe-oublie",
  "/reinitialiser-mot-de-passe",
  "/eleve",
  "/confidentialite",
  "/conditions",
  "/informations"
]);

const ROUTES_PROTEGEES = new Set([
  "/suivi",
  "/exercices",
  "/programme",
  "/plus",
  "/plus/cours",
  "/plus/entraide",
  "/plus/assistant",
  "/eleves",
  "/profil",
  "/informations"
]);

const TITRES_ROUTES = {
  "/": "Accueil",
  "/suivi": "Suivi du travail",
  "/exercices": "Exercices",
  "/programme": "Programme",
  "/plus": "Plus",
  "/plus/cours": "Cours",
  "/plus/entraide": "Entraide",
  "/plus/assistant": "Assistant IA",
  "/eleves": "Mes élèves",
  "/profil": "Mon profil",
  "/connexion": "Connexion",
  "/connexion/encadreur": "Connexion encadreur",
  "/inscription": "Créer un compte",
  "/mot-de-passe-oublie": "Mot de passe oublié",
  "/reinitialiser-mot-de-passe": "Nouveau mot de passe",
  "/eleve": "Espace élève",
  "/confidentialite": "Confidentialité",
  "/conditions": "Conditions d'utilisation",
  "/informations": "Informations élève"
};

const ICONES = {
  "graduation-cap":
    '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  "user-round-check":
    '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/>',
  home:
    '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  "chart-no-axes-column":
    '<path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/>',
  "notebook-pen":
    '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>',
  "book-open":
    '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  "refresh-cw":
    '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "check-circle":
    '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  image:
    '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  pencil:
    '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  trash:
    '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  send:
    '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  "alert-circle":
    '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "log-out":
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  copy:
    '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  share:
    '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  "key-round":
    '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
  "user-plus":
    '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>',
  clock:
    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "shield-check":
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  mail:
    '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  lock:
    '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  globe:
    '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "arrow-left":
    '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "external-link":
    '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  file:
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
  "file-text":
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  "file-plus":
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/>',
  "file-archive":
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12v-1"/><path d="M10 18v-2"/><path d="M10 7V6"/>',
  video:
    '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  music:
    '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  "layout-grid":
    '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  "messages-square":
    '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
  sparkles:
    '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  "thumbs-up":
    '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
  flag:
    '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  sun:
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
};

let eleves = [];
let profil = null;
let encadreurCourant = null;
let niveauxEspace = NIVEAUX.map((nom, index) => ({ id: null, nom, ordre: index + 1 }));
let choixEleveOuvert = false;
let dernierChemin = null;
let authInitialisee = false;
let authEnCours = false;
let chargementEspace = false;

const etatAuth = {
  session: null,
  utilisateur: null,
  chargement: true,
  erreur: "",
  succes: "",
  configManquante: false,
  eleveEtape: "code",
  code: "",
  encadreur: null,
  elevesDisponibles: [],
  eleveSelectionne: null,
  niveaux: [],
  eleveEnAttente: null,
  actionEnCours: false,
  erreurAction: "",
  reinitialisationMotDePasse: false,
  suppressionCompteOuvert: false,
  demandeSuppressionEleveOuverte: false
};

const etatEleves = {
  chargement: false,
  erreur: "",
  succes: "",
  formulaire: null,
  suppressionId: null,
  suppressionMode: null,
  suppressionConfirmee: false,
  reinitialisationPinId: null,
  validationId: null,
  validationNomParent: "",
  validationConsentement: false,
  erreurFormulaire: "",
  formulaireNiveau: null,
  suppressionNiveauId: null,
  erreurNiveau: "",
  rappelsOuvert: false,
  demandesSuppression: []
};

const donneesExercices = {
  matieres: [],
  chapitres: [],
  exercices: [],
  source: "supabase"
};

const etatExercices = {
  filtreNiveau: "tous",
  filtreMatiere: "toutes",
  chargement: false,
  erreur: "",
  exerciceOuvertId: null,
  formulaire: null,
  suppressionId: null,
  erreurFormulaire: "",
  fichiersFormulaire: [],
  fichiersEnCours: {},
  fichiersErreur: "",
  fichiersListe: {}
};

const donneesSuivi = {
  travaux: [],
  corrections: [],
  source: "supabase"
};

const etatSuivi = {
  chargement: false,
  erreur: "",
  filtreStatut: "tous",
  succes: "",
  travailOuvertId: null,
  erreurCorrection: "",
  brouillon: null,
  photo: null,
  photoEnCours: false,
  photoErreur: "",
  photoJeton: 0,
  dernierTravail: null
};

const donneesProgramme = {
  progression: [],
  source: "supabase"
};

const etatProgramme = {
  filtreNiveau: NIVEAUX[NIVEAUX.length - 1],
  filtreMatiere: "toutes",
  eleveSelectionneId: null,
  chargement: false,
  erreur: "",
  erreurAction: "",
  succes: "",
  progressionEnCours: null,
  chapitreOuvertId: null,
  formulaireChapitre: null,
  suppressionChapitreId: null,
  erreurFormulaire: ""
};

const donneesCours = {
  cours: [],
  fichiers: {},
  source: "supabase"
};

const etatCours = {
  charge: false,
  chargement: false,
  erreur: "",
  erreurAction: "",
  succes: "",
  filtreNiveau: "tous",
  filtreMatiere: "toutes",
  coursOuvertId: null,
  formulaire: null,
  suppressionId: null,
  erreurFormulaire: "",
  fichiersFormulaire: [],
  fichiersEnCours: {},
  fichiersErreur: ""
};

const donneesEntraide = {
  questions: [],
  reponses: [],
  utiles: [],
  signalements: [],
  source: "supabase"
};

const etatEntraide = {
  charge: false,
  chargement: false,
  erreur: "",
  erreurAction: "",
  succes: "",
  filtreMatiere: "toutes",
  questionOuverteId: null,
  formulaireQuestion: false,
  suppressionQuestionId: null,
  suppressionReponseId: null,
  erreurFormulaire: "",
  photo: null,
  photoEnCours: false,
  photoErreur: "",
  photoJeton: 0
};

const etatAssistant = {
  charge: false,
  chargement: false,
  erreur: "",
  erreurAction: "",
  succes: "",
  messages: [],
  travailId: null,
  demarrage: true,
  enonce: "",
  photo: null,
  photoEnCours: false,
  photoErreur: "",
  photoJeton: 0,
  envoiEnCours: false,
  erreurEnvoi: "",
  limiteAtteinte: false,
  utilisees: 0,
  derniereDemande: null
};

const ASSISTANT_LIMITE_JOUR = 10;
const ACTIONS_RAPIDES_ASSISTANT = {
  autre_indice: {
    action: "autre_indice",
    libelle: "Donne-moi un autre indice",
    message: "Donne-moi un autre indice, sans me donner la réponse."
  },
  incompris: {
    action: "incompris",
    libelle: "Je ne comprends pas",
    message: "Je ne comprends pas. Peux-tu expliquer plus simplement ?"
  },
  verifier: {
    action: "verifier",
    libelle: "Vérifie ma démarche",
    message: "Vérifie ma démarche et dis-moi où je me trompe, sans donner le résultat."
  }
};

let clientSupabaseExercices = null;
let promesseClientSupabase = null;

function icone(nom, taille = 24, classe = "") {
  const contenu = ICONES[nom];
  if (!contenu) return "";
  return `<svg class="icon ${classe}" width="${taille}" height="${taille}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${contenu}</svg>`;
}

function echapper(valeur) {
  return String(valeur ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initiales(prenom, nom) {
  const lettres = `${String(prenom ?? "").trim().charAt(0)}${String(nom ?? "").trim().charAt(0)}`;
  return lettres.toUpperCase() || "?";
}

function lireProfil() {
  try {
    const brut = window.localStorage.getItem(CLE_PROFIL);
    if (!brut) return null;
    const valeur = JSON.parse(brut);
    if (valeur?.role === "encadreur") return { role: "encadreur" };
    if (
      valeur?.role === "eleve" &&
      typeof valeur.eleveId === "string" &&
      typeof valeur.prenom === "string" &&
      typeof valeur.nom === "string"
    ) {
      return {
        role: "eleve",
        eleveId: valeur.eleveId,
        prenom: valeur.prenom,
        nom: valeur.nom,
        classe: typeof valeur.classe === "string" ? valeur.classe : ""
      };
    }
    return null;
  } catch {
    return null;
  }
}

function enregistrerProfil(valeur) {
  profil = valeur;
  if (MODE_APERCU) return;
  try {
    if (valeur) {
      window.localStorage.setItem(CLE_PROFIL, JSON.stringify(valeur));
    } else {
      window.localStorage.removeItem(CLE_PROFIL);
    }
  } catch {
    return;
  }
}

function nomComplet(personne) {
  return `${personne.prenom ?? ""} ${personne.nom ?? ""}`.trim();
}

function libelleProfil() {
  if (!profil) return "";
  return profil.role === "eleve" ? `Élève : ${nomComplet(profil)}` : nomComplet(profil) || "Encadreur";
}

function niveauxTries() {
  return [...niveauxEspace].sort(
    (a, b) =>
      (a.ordre ?? 99) - (b.ordre ?? 99) ||
      String(a.nom ?? "").localeCompare(String(b.nom ?? ""), "fr")
  );
}

function nomsNiveaux() {
  return niveauxTries().map((niveau) => niveau.nom);
}

function ordreNiveau(nom) {
  const index = niveauxTries().findIndex((niveau) => niveau.nom === nom);
  return index === -1 ? (ORDRE_CLASSES[nom] ?? 99) : index;
}

function elevesTries(inclureEnAttente = false) {
  return [...eleves]
    .filter(
      (eleve) =>
        inclureEnAttente || (eleve.statut ?? "actif") === "actif"
    )
    .sort((a, b) => {
      const ordreA = ordreNiveau(a.classe);
      const ordreB = ordreNiveau(b.classe);
      if (ordreA !== ordreB) return ordreA - ordreB;
      return nomComplet(a).localeCompare(nomComplet(b), "fr");
    });
}

function cheminActuel() {
  const brut = window.location.hash.replace(/^#/, "");
  return ROUTES.has(brut) ? brut : "/";
}

function supabaseConfigure() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

function allerA(chemin) {
  if (cheminActuel() === chemin && window.location.hash === `#${chemin}`) {
    rendre();
    return;
  }
  if (window.location.hash === `#${chemin}`) {
    rendre();
    return;
  }
  window.location.hash = `#${chemin}`;
}

function preferenceTheme() {
  return window.Theme ? window.Theme.lirePreference() : "auto";
}

function themeCourant() {
  return window.Theme ? window.Theme.themeCourant() : "clair";
}

function boutonThemeHeader() {
  const sombre = themeCourant() === "sombre";
  const libelle = sombre ? "Passer en mode clair" : "Passer en mode sombre";
  return `<button class="icon-btn header-theme" type="button" data-action="basculer-theme" aria-label="${libelle}" title="${libelle}">
    ${icone(sombre ? "sun" : "moon", 19)}
  </button>`;
}

function entete() {
  const marque = `
    <a class="brand" href="#/" aria-label="Monitoring Student, retour à l'accueil">
      <span class="brand-mark">${icone("graduation-cap", 21)}</span>
      <span class="brand-name">Monitoring Student</span>
    </a>`;

  if (!profil) {
    return `<header class="app-header"><div class="header-inner header-inner--simple">${marque}${boutonThemeHeader()}</div></header>`;
  }

  const iconeProfil = profil.role === "eleve" ? "graduation-cap" : "user-round-check";
  const actionsEncadreur =
    profil.role === "encadreur"
      ? `<a class="change-btn header-students" href="#/eleves" aria-label="Mes élèves">
          ${icone("users", 15)}
          <span>Mes élèves</span>
        </a>`
      : "";

  return `
    <header class="app-header">
      <div class="header-inner">
        ${marque}
        <div class="profile-row header-actions">
          ${actionsEncadreur}
          ${boutonThemeHeader()}
          <a class="icon-btn header-plus" href="#/plus" aria-label="Ouvrir le menu Plus" title="Plus">
            ${icone("layout-grid", 20)}
          </a>
          <a class="profile-chip profile-link" href="#/profil" title="${echapper(libelleProfil())}">
            ${icone(iconeProfil, 15)}
            <span class="profile-text">${echapper(profil.prenom || libelleProfil())}</span>
          </a>
          ${
            MODE_APERCU
              ? `<span class="apercu-chip">${icone("shield-check", 15)} Aperçu</span>`
              : `<button class="icon-btn header-logout" type="button" data-action="deconnexion" aria-label="Se déconnecter">
            ${icone("log-out", 19)}
          </button>`
          }
        </div>
      </div>
    </header>`;
}

function normaliserTelephoneWhatsApp(valeur) {
  const compact = String(valeur ?? "")
    .trim()
    .replace(/[\s().-]/g, "");
  if (!/^(?:\+|00)[0-9]{8,15}$/.test(compact)) return "";
  return compact.replace(/^00/, "").replace(/^\+/, "");
}

function telephoneInternational(valeur) {
  const numero = normaliserTelephoneWhatsApp(valeur);
  return numero ? `+${numero}` : "";
}

function lienWhatsApp(numero, texte) {
  const destinataire = normaliserTelephoneWhatsApp(numero);
  if (!destinataire) return "";
  return `https://wa.me/${destinataire}?text=${encodeURIComponent(texte)}`;
}

function boutonWhatsApp(numero, texte, libelle, options = {}) {
  const lien = lienWhatsApp(numero, texte);
  const classe = options.classe ?? "btn btn-secondary";
  if (!lien) {
    if (!options.afficherSiAbsent) return "";
    return `
      <div class="whatsapp-action">
        <button class="${classe}" type="button" disabled>
          ${icone("share", 17)} ${echapper(libelle)}
        </button>
        <span class="whatsapp-hint">Numéro non renseigné</span>
      </div>`;
  }
  return `
    <a class="${classe}" href="${lien}" target="_blank" rel="noopener noreferrer">
      ${icone("share", 17)} ${echapper(libelle)}
    </a>`;
}

function lienWhatsAppCode() {
  if (!encadreurCourant?.code_encadreur) return "#";
  const texte = `Rejoins mon espace Monitoring Student. Mon code encadreur : ${encadreurCourant.code_encadreur}. Ouvre l'application, choisis « Je suis élève » puis saisis ce code.`;
  return `https://wa.me/?text=${encodeURIComponent(texte)}`;
}

function carteCodeEncadreur() {
  if (!encadreurCourant?.code_encadreur) return "";
  return `
    <section class="code-card" aria-labelledby="titre-code-encadreur">
      <div class="code-card-head">
        <span class="code-card-icon">${icone("key-round", 20)}</span>
        <div>
          <p class="code-card-kicker">Code encadreur</p>
          <h2 id="titre-code-encadreur">${echapper(encadreurCourant.code_encadreur)}</h2>
        </div>
      </div>
      <p class="code-card-text">Partage ce code avec tes élèves. Ils l'utilisent pour rejoindre ton espace.</p>
      <div class="code-card-actions">
        <button class="btn btn-secondary" type="button" data-action="copier-code">
          ${icone("copy", 17)} Copier
        </button>
        <a class="btn btn-primary" href="${lienWhatsAppCode()}" target="_blank" rel="noopener noreferrer" aria-label="Partager sur WhatsApp">
          ${icone("share", 17)} Partager sur WhatsApp
        </a>
      </div>
    </section>`;
}

function accueil() {
  if (!profil) {
    return `
      <section class="welcome-page" aria-labelledby="titre-application">
        <div class="welcome-hero">
          <span class="welcome-orbe welcome-orbe--un" aria-hidden="true"></span>
          <span class="welcome-orbe welcome-orbe--deux" aria-hidden="true"></span>
          <div class="welcome-logo welcome-reveal">${icone("graduation-cap", 32)}</div>
          <p class="welcome-eyebrow welcome-reveal">Plateforme de suivi scolaire</p>
          <h1 class="welcome-title welcome-reveal" id="titre-application">
            Bienvenue sur
            <span>Monitoring Student</span>
          </h1>
          <p class="welcome-tagline welcome-reveal">Suivez, encadrez et faites progresser vos élèves en toute simplicité.</p>
          <a class="welcome-access welcome-reveal" href="#/connexion">
            Accéder à la plateforme
            ${icone("chevron-right", 18)}
          </a>
        </div>

        ${
          etatAuth.configManquante
            ? `<section class="auth-card auth-card--warning" aria-labelledby="titre-config">
                <span class="auth-card-icon">${icone("alert-circle", 24)}</span>
                <div>
                  <h2 id="titre-config">Configuration requise</h2>
                  <p>Renseigne l'URL et la clé publique Supabase dans <strong>monitoring-student.html</strong>, puis exécute le fichier <strong>supabase/schema.sql</strong>.</p>
                </div>
              </section>`
            : ""
        }

        ${piedPageLegal()}
      </section>`;
  }

  if (profil.role === "encadreur") {
    const enAttente = eleves.filter((eleve) => eleve.statut === "en_attente");
    return `
      <section class="hero hero--compact" aria-labelledby="titre-application">
        <div class="hero-logo">${icone("graduation-cap", 32)}</div>
        <p class="hero-eyebrow">Espace encadreur</p>
        <h1 class="hero-title" id="titre-application">Bonjour ${echapper(profil.prenom || "")}</h1>
        <p class="hero-tagline">Gère tes élèves et partage ton code pour les accueillir.</p>
      </section>
      ${carteCodeEncadreur()}
      <section class="home-actions" aria-labelledby="titre-actions-encadreur">
        <div class="section-head">
          <h2 id="titre-actions-encadreur">Ton espace</h2>
          <p>${eleves.length} élève${eleves.length > 1 ? "s" : ""} · ${enAttente.length} demande${enAttente.length > 1 ? "s" : ""} en attente</p>
        </div>
        <div class="quick-grid">
          <a class="quick-link" href="#/eleves">${icone("users", 21)}<span>Mes élèves</span></a>
          <a class="quick-link" href="#/suivi">${icone("chart-no-axes-column", 21)}<span>Suivi</span></a>
          <a class="quick-link" href="#/programme">${icone("book-open", 21)}<span>Programme</span></a>
          <a class="quick-link" href="#/exercices">${icone("notebook-pen", 21)}<span>Exercices</span></a>
        </div>
      </section>
      ${piedPageLegal()}`;
  }

  return `
    <section class="hero hero--compact" aria-labelledby="titre-application">
      <div class="hero-logo">${icone("graduation-cap", 32)}</div>
      <p class="hero-eyebrow">Espace élève</p>
      <h1 class="hero-title" id="titre-application">${echapper(nomComplet(profil))}</h1>
      <p class="hero-tagline">${echapper(profil.classe || "")} · Continue ton travail et consulte ta progression.</p>
    </section>
    <section class="home-actions" aria-labelledby="titre-actions-eleve">
      <div class="section-head">
        <h2 id="titre-actions-eleve">Mon espace</h2>
        <p>Retrouve tes travaux, tes exercices et ton programme.</p>
      </div>
      <div class="quick-grid">
        <a class="quick-link" href="#/suivi">${icone("chart-no-axes-column", 21)}<span>Mon suivi</span></a>
        <a class="quick-link" href="#/exercices">${icone("notebook-pen", 21)}<span>Exercices</span></a>
        <a class="quick-link" href="#/programme">${icone("book-open", 21)}<span>Programme</span></a>
        <a class="quick-link" href="#/profil">${icone("user-round-check", 21)}<span>Mon profil</span></a>
      </div>
    </section>
    ${piedPageLegal()}`;
}

function pageVide(chemin) {
  const page = PAGES_VIDES[chemin];
  return `
    <section class="empty-state" aria-labelledby="titre-page">
      <div class="empty-icon">${icone(page.icone, 36)}</div>
      <h1 id="titre-page">${echapper(page.titre)}</h1>
      <p class="empty-message">Bientôt disponible</p>
    </section>`;
}

function messageErreurAuth(erreur) {
  const message = String(erreur?.message ?? erreur ?? "").toLowerCase();
  if (message.includes("invalid login credentials")) {
    return "E-mail ou mot de passe incorrect.";
  }
  if (message.includes("email not confirmed")) {
    return "Confirme d'abord ton e-mail, puis reconnecte-toi.";
  }
  if (
    message.includes("user already registered") ||
    message.includes("already been registered")
  ) {
    return "Cet e-mail est déjà utilisé. Connecte-toi ou utilise un autre e-mail.";
  }
  if (message.includes("password should be at least")) {
    return "Le mot de passe doit contenir au moins 8 caractères.";
  }
  if (message.includes("unable to validate email")) {
    return "Cette adresse e-mail n'est pas valide.";
  }
  if (
    message.includes("auth session missing") ||
    message.includes("session missing") ||
    message.includes("session not found") ||
    message.includes("invalid or expired token") ||
    message.includes("token has expired")
  ) {
    return "Le lien de réinitialisation a expiré. Demande un nouveau lien.";
  }
  if (
    message.includes("should be different from the old password") ||
    message.includes("same password")
  ) {
    return "Choisis un mot de passe différent de l'ancien.";
  }
  if (message.includes("email rate limit") || message.includes("too many requests")) {
    return "Trop de tentatives. Attends quelques minutes avant de réessayer.";
  }
  if (
    message.includes("anonymous sign-ins are disabled") ||
    message.includes("anonymous signins are disabled") ||
    message.includes("anonymous")
  ) {
    return "La connexion élève est désactivée. Active les connexions anonymes dans Supabase.";
  }
  return "L'opération n'a pas pu aboutir. Vérifie ta connexion et réessaie.";
}

function messageErreurRpc(erreur) {
  if (MODE_APERCU) return MESSAGE_APERCU_ACTION;
  const message = String(erreur?.message ?? erreur ?? "");
  if (/anonymous.*disabled/i.test(message)) {
    return "La connexion élève est désactivée. Active les connexions anonymes dans Supabase.";
  }
  if (/code encadreur invalide/i.test(message)) return "Code encadreur invalide.";
  if (/pin incorrect/i.test(message)) return "PIN incorrect. Réessaie.";
  if (/pin doit contenir 4 chiffres/i.test(message)) {
    return "Le PIN doit contenir exactement 4 chiffres.";
  }
  if (/profil élève introuvable/i.test(message)) {
    return "Ce profil élève n'existe plus.";
  }
  if (/classe/i.test(message)) return "Choisis une classe valide.";
  if (/trop de tentatives/i.test(message)) {
    return "Trop de tentatives. Réessaie dans quelques minutes.";
  }
  if (/déjà/i.test(message)) return message;
  return "L'opération n'a pas pu aboutir. Vérifie les informations et réessaie.";
}

function blocErreurAuth() {
  if (!etatAuth.erreurAction) return "";
  return `<p class="form-error" role="alert">${echapper(etatAuth.erreurAction)}</p>`;
}

function blocSuccesAuth() {
  if (!etatAuth.succes) return "";
  return `<p class="form-success" role="status">${echapper(etatAuth.succes)}</p>`;
}

function ecranChargement() {
  return `
    <section class="empty-state" aria-live="polite">
      <span class="spinner" aria-hidden="true"></span>
      <p class="empty-message">Chargement de ton espace…</p>
    </section>`;
}

function ecranConnexion() {
  return `
    <section class="auth-shell" aria-labelledby="titre-roles">
      <section class="welcome-choice" aria-labelledby="titre-roles">
        <div class="welcome-choice-head">
          <h2 id="titre-roles">Qui es-tu ?</h2>
          <p>Choisis ton statut pour accéder à ta connexion.</p>
        </div>
        <div class="role-choice">
          <a class="role-option role-option--encadreur" href="#/connexion/encadreur">
            <span class="role-option-icon">${icone("user-round-check", 26)}</span>
            <span class="role-option-body">
              <span class="role-option-title">Je suis encadreur</span>
              <span class="role-option-desc">Gère tes élèves, ton programme et leurs travaux.</span>
            </span>
            <span class="role-option-arrow">${icone("chevron-right", 20)}</span>
          </a>
          <a class="role-option role-option--eleve" href="#/eleve">
            <span class="role-option-icon">${icone("graduation-cap", 26)}</span>
            <span class="role-option-body">
              <span class="role-option-title">Je suis élève</span>
              <span class="role-option-desc">Entre le code de ton encadreur pour retrouver ton espace.</span>
            </span>
            <span class="role-option-arrow">${icone("chevron-right", 20)}</span>
          </a>
        </div>
        <p class="welcome-note">${icone("shield-check", 15)} Accès sécurisé et personnel.</p>
      </section>
    </section>`;
}

function ecranConnexionEncadreur() {
  return `
    <section class="auth-shell" aria-labelledby="titre-connexion">
      <a class="auth-back" href="#/connexion">${icone("arrow-left", 18)} Qui es-tu ?</a>
      <div class="welcome-progress" aria-hidden="true">
        <span class="welcome-progress-step"><b>1</b> Ton statut</span>
        <span class="welcome-progress-line"></span>
        <span class="welcome-progress-step welcome-progress-step--active"><b>2</b> Connexion</span>
      </div>
      <div class="auth-panel">
        <p class="auth-kicker">Encadreur</p>
        <h1 id="titre-connexion">Se connecter</h1>
        <p class="auth-lead">Retrouve ton espace, tes élèves et ton programme.</p>
        ${blocErreurAuth()}
        ${blocSuccesAuth()}
        <form class="auth-form" data-form-connexion>
          <label class="form-field">
            <span>E-mail</span>
            <input type="email" name="email" autocomplete="email" inputmode="email" required />
          </label>
          <label class="form-field">
            <span>Mot de passe</span>
            <input type="password" name="password" autocomplete="current-password" required />
          </label>
          <button class="btn btn-primary btn-block" type="submit">Se connecter</button>
        </form>
        <div class="auth-links">
          <a href="#/mot-de-passe-oublie">Mot de passe oublié</a>
          <a href="#/inscription">Créer un compte</a>
        </div>
      </div>
    </section>`;
}

function ecranInscription() {
  return `
    <section class="auth-shell" aria-labelledby="titre-inscription">
      <a class="auth-back" href="#/">${icone("arrow-left", 18)} Accueil</a>
      <div class="auth-panel">
        <p class="auth-kicker">Nouvel encadreur</p>
        <h1 id="titre-inscription">Créer mon compte</h1>
        <p class="auth-lead">Un code encadreur unique sera généré automatiquement.</p>
        ${blocErreurAuth()}
        ${blocSuccesAuth()}
        <form class="auth-form" data-form-inscription>
          <div class="form-grid">
            <label class="form-field">
              <span>Prénom</span>
              <input type="text" name="prenom" autocomplete="given-name" required />
            </label>
            <label class="form-field">
              <span>Nom</span>
              <input type="text" name="nom" autocomplete="family-name" required />
            </label>
          </div>
          <label class="form-field">
            <span>Pays</span>
            <input type="text" name="pays" autocomplete="country-name" required />
          </label>
          <label class="form-field">
            <span>E-mail</span>
            <input type="email" name="email" autocomplete="email" inputmode="email" required />
          </label>
          <label class="form-field">
            <span>Mot de passe</span>
            <input type="password" name="password" autocomplete="new-password" minlength="8" required />
          </label>
          <label class="consent-field">
            <input type="checkbox" name="consentement_cgu" required />
            <span>J'accepte les <a href="#/conditions" target="_blank" rel="noopener">conditions d'utilisation</a> et la <a href="#/confidentialite" target="_blank" rel="noopener">politique de confidentialité</a>.</span>
          </label>
          <label class="consent-field">
            <input type="checkbox" name="consentement_parent" required />
            <span>Je m'engage à avoir obtenu l'accord des parents ou tuteurs de chaque élève que j'inscris.</span>
          </label>
          <button class="btn btn-primary btn-block" type="submit">Créer mon compte</button>
        </form>
        <div class="auth-links">
          <a href="#/connexion">J'ai déjà un compte</a>
        </div>
      </div>
    </section>`;
}

function ecranMotDePasseOublie() {
  return `
    <section class="auth-shell" aria-labelledby="titre-oubli">
      <a class="auth-back" href="#/connexion">${icone("arrow-left", 18)} Connexion</a>
      <div class="auth-panel">
        <p class="auth-kicker">Encadreur</p>
        <h1 id="titre-oubli">Mot de passe oublié</h1>
        <p class="auth-lead">Indique ton e-mail. Tu recevras un lien pour choisir un nouveau mot de passe.</p>
        ${blocErreurAuth()}
        ${blocSuccesAuth()}
        <form class="auth-form" data-form-oubli>
          <label class="form-field">
            <span>E-mail</span>
            <input type="email" name="email" autocomplete="email" inputmode="email" required />
          </label>
          <button class="btn btn-primary btn-block" type="submit">Envoyer le lien</button>
        </form>
      </div>
    </section>`;
}

function ecranReinitialiserMotDePasse() {
  return `
    <section class="auth-shell" aria-labelledby="titre-reset">
      <a class="auth-back" href="#/connexion">${icone("arrow-left", 18)} Connexion</a>
      <div class="auth-panel">
        <p class="auth-kicker">Sécurité</p>
        <h1 id="titre-reset">Nouveau mot de passe</h1>
        <p class="auth-lead">Choisis un mot de passe d'au moins 8 caractères.</p>
        ${blocErreurAuth()}
        ${blocSuccesAuth()}
        ${
          etatAuth.reinitialisationMotDePasse
            ? `<form class="auth-form" data-form-nouveau-mot-de-passe>
                <label class="form-field">
                  <span>Nouveau mot de passe</span>
                  <input type="password" name="password" autocomplete="new-password" minlength="8" required />
                </label>
                <button class="btn btn-primary btn-block" type="submit">Enregistrer</button>
              </form>`
            : `<p class="auth-empty">Ouvre le lien reçu par e-mail pour réinitialiser ton mot de passe.</p>`
        }
      </div>
    </section>`;
}

function piedPageLegal() {
  return `
    <footer class="home-footer">
      <a href="#/conditions">Conditions d'utilisation</a>
      <span aria-hidden="true">·</span>
      <a href="#/confidentialite">Confidentialité</a>
    </footer>`;
}

function ecranInformationsEleve() {
  return `
    <section class="legal-page" aria-labelledby="titre-informations-eleve">
      ${profil?.infoEleveVue ? `<a class="auth-back" href="#/profil">${icone("arrow-left", 18)} Mon profil</a>` : ""}
      <header class="legal-head">
        <p class="legal-kicker">Avant de commencer</p>
        <h1 id="titre-informations-eleve">Tes données, tes droits</h1>
        <p>Ton espace sert uniquement à suivre ton travail scolaire avec ton encadreur.</p>
      </header>
      <section class="legal-card">
        <h2>Ce que ton encadreur peut voir</h2>
        <ul>
          <li>Ton prénom, ton nom et ta classe.</li>
          <li>Tes travaux envoyés, leurs photos et les corrections.</li>
          <li>Ta progression dans le programme.</li>
          <li>Tes questions et réponses dans l'espace entraide de ta classe.</li>
        </ul>
      </section>
      <section class="legal-card">
        <h2>L'assistant IA peut se tromper</h2>
        <p>L'assistant IA donne des pistes pour t'aider à réfléchir, mais il peut faire des erreurs. Vérifie toujours avec ton cours et demande à ton encadreur en cas de doute. Ne lui écris jamais ton nom de famille ni d'autres informations personnelles.</p>
      </section>
      <section class="legal-card">
        <h2>Ce que nous ne faisons pas</h2>
        <ul>
          <li>Pas de publicité, pas de pistage publicitaire.</li>
          <li>Pas de collecte de date de naissance, d'adresse ou de numéro de carte.</li>
          <li>Ton nom de famille n'est pas transmis aux services d'intelligence artificielle.</li>
          <li>Tes photos de travaux sont privées et accessibles par liens temporaires.</li>
        </ul>
      </section>
      <section class="legal-card">
        <h2>Tes droits</h2>
        <p>Tu peux consulter ton profil, demander une copie de tes données ou demander leur suppression depuis ton profil. Ton encadreur reçoit la demande et traite la suppression.</p>
        <p>Pour toute question : <a href="mailto:${CONTACT_PLATEFORME}">${CONTACT_PLATEFORME}</a>.</p>
      </section>
      <button class="btn btn-primary btn-block" type="button" data-action="compris-informations-eleve">
        J'ai compris
      </button>
    </section>`;
}

function ecranConfidentialite() {
  return `
    <section class="legal-page" aria-labelledby="titre-confidentialite">
      <a class="auth-back" href="#/">${icone("arrow-left", 18)} Accueil</a>
      <header class="legal-head">
        <p class="legal-kicker">Protection des données</p>
        <h1 id="titre-confidentialite">Politique de confidentialité</h1>
        <p>Dernière mise à jour : 5 novembre 2026. Ce texte est un modèle à adapter au cadre juridique de ton pays avant publication.</p>
      </header>

      <section class="legal-card">
        <h2>1. Responsable du traitement</h2>
        <p>Monitoring Student est une application de suivi scolaire. Le responsable du traitement est l'éditeur de la plateforme. Contact : <a href="mailto:${CONTACT_PLATEFORME}">${CONTACT_PLATEFORME}</a>.</p>
        <p>Chaque encadreur est responsable des données de ses élèves qu'il saisit dans son espace.</p>
      </section>

      <section class="legal-card">
        <h2>2. Données collectées</h2>
        <ul>
          <li><strong>Compte encadreur :</strong> prénom, nom, pays, adresse e-mail, mot de passe chiffré, code encadreur et numéro WhatsApp facultatif.</li>
          <li><strong>Profil élève :</strong> prénom, nom, classe, statut du profil et PIN chiffré. Aucune date de naissance ni adresse ne sont demandées.</li>
          <li><strong>Travail scolaire :</strong> travaux envoyés, photos, corrections, notes et progression.</li>
          <li><strong>Entraide :</strong> questions, réponses, photos et signalements dans l'espace de la classe.</li>
          <li><strong>Assistant IA :</strong> messages échangés, sans nom de famille transmis au service externe.</li>
          <li><strong>Consentements :</strong> type de consentement, date, version du texte et nom facultatif du parent.</li>
        </ul>
      </section>

      <section class="legal-card">
        <h2>3. Finalités et bases légales</h2>
        <p>Les données servent à créer et sécuriser les comptes, suivre le travail des élèves, corriger les exercices, afficher la progression, permettre l'entraide et répondre aux demandes de suppression.</p>
        <p>Le traitement repose sur l'exécution du service, l'intérêt légitime à sécuriser la plateforme et, pour les élèves mineurs, sur le consentement parental recueilli par l'encadreur avant l'activation du profil.</p>
      </section>

      <section class="legal-card">
        <h2>4. Destinataires et sous-traitants</h2>
        <p>Seul l'encadreur de l'élève peut voir les données scolaires de ses élèves (travaux, corrections, progression, entraide). L'élève connecté peut voir ses propres données. Elles sont hébergées par Supabase, qui fournit la base de données, l'authentification et le stockage des fichiers.</p>
        <p>Les échanges avec l'assistant IA sont transmis à un service d'intelligence artificielle externe (OpenAI) pour produire une réponse. Aucun nom de famille d'élève ne lui est transmis. Aucun accès n'est vendu à des tiers et aucune publicité n'est affichée.</p>
      </section>

      <section class="legal-card">
        <h2>5. Durées de conservation</h2>
        <p>Les données sont conservées pendant la durée d'utilisation de l'espace encadreur. Un élève retiré ou supprimé entraîne la suppression de son profil et des données liées. Les demandes de suppression sont traitées dans un délai raisonnable.</p>
        <p>Les fichiers de travaux et les photos d'entraide sont supprimés en même temps que le profil correspondant.</p>
      </section>

      <section class="legal-card">
        <h2>6. Sécurité</h2>
        <p>Les mots de passe et PIN sont chiffrés. L'accès aux tables est limité par des règles de sécurité au niveau des lignes. Les photos de travaux sont privées et servies par des liens temporaires. Aucun système n'étant parfaitement sûr, une faille doit être signalée immédiatement à l'adresse de contact.</p>
      </section>

      <section class="legal-card">
        <h2>7. Droits des personnes</h2>
        <p>Chaque personne peut demander l'accès à ses données, leur rectification, leur export ou leur suppression. L'élève peut envoyer une demande depuis son profil. L'encadreur peut exporter ou supprimer les données d'un élève depuis « Mes élèves », et supprimer son propre compte depuis son profil.</p>
        <p>Pour exercer un droit ou contester un traitement : <a href="mailto:${CONTACT_PLATEFORME}">${CONTACT_PLATEFORME}</a>.</p>
      </section>

      <section class="legal-card">
        <h2>8. Cookies et mesure d'audience</h2>
        <p>L'application utilise uniquement le stockage local nécessaire à la session et aux préférences d'affichage. Elle n'utilise pas de cookie publicitaire ni de traceur de réseaux sociaux.</p>
      </section>

      <section class="legal-card">
        <h2>9. Mineurs</h2>
        <p>Les profils d'élèves mineurs ne doivent être activés qu'après information et accord du parent ou du responsable légal. L'encadreur conserve la trace de cet accord dans son espace.</p>
      </section>

      <p class="legal-note">Ce document est fourni à titre de modèle et ne remplace pas un avis juridique.</p>
      ${piedPageLegal()}
    </section>`;
}

function ecranConditions() {
  return `
    <section class="legal-page" aria-labelledby="titre-conditions">
      <a class="auth-back" href="#/">${icone("arrow-left", 18)} Accueil</a>
      <header class="legal-head">
        <p class="legal-kicker">Cadre d'utilisation</p>
        <h1 id="titre-conditions">Conditions d'utilisation</h1>
        <p>Dernière mise à jour : 5 novembre 2026. Ce texte est un modèle à adapter au cadre juridique de ton pays avant publication.</p>
      </header>

      <section class="legal-card">
        <h2>1. Objet</h2>
        <p>Monitoring Student permet à un encadreur de suivre le travail d'élèves, de corriger des exercices, de partager des cours et d'animer un espace d'entraide.</p>
      </section>

      <section class="legal-card">
        <h2>2. Compte encadreur</h2>
        <p>L'encadreur fournit des informations exactes, protège son mot de passe et son code encadreur, et ne partage pas son compte. Il est interdit de partager le code encadreur publiquement (réseaux sociaux, affichage public, groupes ouverts).</p>
        <p>L'encadreur est responsable des élèves qu'il ajoute et des consentements parentaux qu'il recueille. Il les accompagne avec respect et bienveillance, corrige leurs travaux de façon constructive et ne diffuse jamais leurs travaux ou photos en dehors de la plateforme sans autorisation.</p>
      </section>

      <section class="legal-card">
        <h2>3. Élèves et accord parental</h2>
        <p>Un profil élève ne doit être activé qu'avec l'accord d'un parent ou du responsable légal. L'encadreur confirme cet accord lors de l'ajout ou de la validation. Un élève peut demander la suppression de ses données depuis son profil.</p>
      </section>

      <section class="legal-card">
        <h2>4. Contenus et comportement</h2>
        <ul>
          <li>Respect obligatoire entre élèves et encadreurs.</li>
          <li>Aucun contenu haineux, harcelant, violent, sexuel ou illégal.</li>
          <li>Aucun partage de données personnelles sensibles dans l'entraide.</li>
          <li>Les signalements abusifs ou répétés peuvent entraîner une suspension.</li>
        </ul>
      </section>

      <section class="legal-card">
        <h2>5. Travaux et corrections</h2>
        <p>L'élève reste propriétaire de ses travaux. L'encadreur les utilise uniquement pour corriger et accompagner l'élève. Les photos sont privées et ne doivent pas être diffusées hors de la plateforme sans accord.</p>
      </section>

      <section class="legal-card">
        <h2>6. Assistant IA</h2>
        <p>L'assistant IA fournit une aide pédagogique et peut se tromper. Il ne remplace ni le cours ni la correction de l'encadreur. Il est interdit d'y saisir des données personnelles sensibles ou le nom complet d'un élève.</p>
      </section>

      <section class="legal-card">
        <h2>7. Suspension et suppression</h2>
        <p>Un compte peut être suspendu en cas de violation grave, de comportement dangereux ou d'usage frauduleux. L'encadreur peut supprimer son compte à tout moment. La suppression entraîne la perte des données associées, après confirmation.</p>
      </section>

      <section class="legal-card">
        <h2>8. Disponibilité et responsabilité</h2>
        <p>Le service est fourni avec un objectif de disponibilité et de sécurité, sans garantie d'absence totale d'erreur ou d'interruption. L'encadreur conserve ses documents scolaires importants en dehors de la plateforme.</p>
      </section>

      <section class="legal-card">
        <h2>9. Droit applicable et contact</h2>
        <p>Les présentes conditions sont régies par le droit applicable au lieu d'établissement de l'éditeur. Pour toute question : <a href="mailto:${CONTACT_PLATEFORME}">${CONTACT_PLATEFORME}</a>.</p>
      </section>

      <p class="legal-note">Ce document est fourni à titre de modèle et ne remplace pas un avis juridique.</p>
      ${piedPageLegal()}
    </section>`;
}

function listeElevesCode() {
  if (etatAuth.elevesDisponibles.length === 0) {
    return `<p class="auth-empty">Aucun élève actif pour le moment. Tu peux créer ton profil.</p>`;
  }
  return `
    <div class="student-list">
      ${etatAuth.elevesDisponibles
        .map(
          (eleve) => `
            <button class="student-row" type="button" data-eleve-code-id="${echapper(eleve.id)}">
              <span class="avatar" aria-hidden="true">${echapper(initiales(eleve.prenom, eleve.nom))}</span>
              <span class="student-copy">
                <span class="student-name">${echapper(nomComplet(eleve))}</span>
                <span class="student-classe">${echapper(eleve.classe)}</span>
              </span>
              ${icone("chevron-right", 18, "student-arrow")}
            </button>`
        )
        .join("")}
    </div>`;
}

function ecranEleve() {
  if (etatAuth.eleveEtape === "attente") {
    return ecranAttenteValidation();
  }

  const retour =
    etatAuth.eleveEtape === "code"
      ? `<a class="auth-back" href="#/">${icone("arrow-left", 18)} Accueil</a>`
      : `<button class="auth-back" type="button" data-action="eleve-changer-code">${icone("arrow-left", 18)} Changer de code</button>`;

  if (etatAuth.eleveEtape === "code") {
    return `
      <section class="auth-shell" aria-labelledby="titre-eleve">
        ${retour}
        <div class="auth-panel">
          <p class="auth-kicker">Élève</p>
          <h1 id="titre-eleve">Entrer mon code encadreur</h1>
          <p class="auth-lead">Demande le code à ton encadreur, puis saisis-le ici.</p>
          ${blocErreurAuth()}
          <form class="auth-form" data-form-code-eleve>
            <label class="form-field">
              <span>Code encadreur</span>
              <input type="text" name="code" autocomplete="off" autocapitalize="characters" placeholder="SENE-4821" required />
            </label>
            <button class="btn btn-primary btn-block" type="submit">Continuer</button>
          </form>
        </div>
      </section>`;
  }

  if (etatAuth.eleveEtape === "choix") {
    return `
      <section class="auth-shell" aria-labelledby="titre-choix-eleve-auth">
        ${retour}
        <div class="auth-panel">
          <p class="auth-kicker">Espace de ${echapper(nomComplet(etatAuth.encadreur ?? {}))}</p>
          <h1 id="titre-choix-eleve-auth">Choisis ton profil</h1>
          <p class="auth-lead">Sélectionne ton nom pour entrer ton PIN.</p>
          ${blocErreurAuth()}
          ${listeElevesCode()}
          <button class="btn btn-secondary btn-block auth-create-btn" type="button" data-action="eleve-creer-profil">
            ${icone("user-plus", 18)} Je crée mon profil
          </button>
        </div>
      </section>`;
  }

  if (etatAuth.eleveEtape === "pin") {
    const eleve = etatAuth.eleveSelectionne;
    return `
      <section class="auth-shell" aria-labelledby="titre-pin">
        ${retour}
        <div class="auth-panel">
          <p class="auth-kicker">${echapper(nomComplet(eleve ?? {}))}</p>
          <h1 id="titre-pin">Entre ton PIN</h1>
          <p class="auth-lead">Ton PIN à 4 chiffres te permet de retrouver ton profil sur un autre téléphone.</p>
          ${blocErreurAuth()}
          <form class="auth-form" data-form-pin-eleve>
            <label class="form-field">
              <span>PIN à 4 chiffres</span>
              <input type="password" name="pin" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{4}" maxlength="4" required />
            </label>
            <button class="btn btn-primary btn-block" type="submit">Ouvrir mon espace</button>
          </form>
        </div>
      </section>`;
  }

  return `
    <section class="auth-shell" aria-labelledby="titre-creation-eleve">
      ${retour}
      <div class="auth-panel">
        <p class="auth-kicker">Espace de ${echapper(nomComplet(etatAuth.encadreur ?? {}))}</p>
        <h1 id="titre-creation-eleve">Créer mon profil</h1>
        <p class="auth-lead">Ton encadreur devra valider ton inscription avant que tu puisses commencer.</p>
        ${blocErreurAuth()}
        <form class="auth-form" data-form-creation-eleve>
          <div class="form-grid">
            <label class="form-field">
              <span>Prénom</span>
              <input type="text" name="prenom" autocomplete="given-name" required />
            </label>
            <label class="form-field">
              <span>Nom</span>
              <input type="text" name="nom" autocomplete="family-name" required />
            </label>
          </div>
          <label class="form-field">
            <span>Classe</span>
            <select name="classe" required>
              <option value="">Choisir une classe</option>
              ${etatAuth.niveaux
                .map(
                  (niveau) =>
                    `<option value="${echapper(niveau.nom)}">${echapper(niveau.nom)}</option>`
                )
                .join("")}
            </select>
          </label>
          <label class="form-field">
            <span>Choisis un PIN à 4 chiffres</span>
            <input type="password" name="pin" inputmode="numeric" autocomplete="new-password" pattern="[0-9]{4}" maxlength="4" required />
          </label>
          <label class="form-field">
            <span>Confirme ton PIN</span>
            <input type="password" name="pin_confirm" inputmode="numeric" autocomplete="new-password" pattern="[0-9]{4}" maxlength="4" required />
          </label>
          <button class="btn btn-primary btn-block" type="submit">Envoyer ma demande</button>
        </form>
      </div>
    </section>`;
}

function ecranAttenteValidation() {
  const eleve = etatAuth.eleveEnAttente;
  return `
    <section class="auth-shell" aria-labelledby="titre-attente">
      <div class="auth-panel auth-panel--center">
        <span class="auth-status-icon">${icone("clock", 28)}</span>
        <p class="auth-kicker">Inscription reçue</p>
        <h1 id="titre-attente">En attente de validation</h1>
        <p class="auth-lead">
          ${eleve ? `${echapper(nomComplet(eleve))}, ton` : "Ton"} encadreur doit valider ton profil avant que tu puisses accéder à ton espace.
        </p>
        ${blocErreurAuth()}
        ${blocSuccesAuth()}
        <div class="auth-form">
          <button class="btn btn-primary btn-block" type="button" data-action="actualiser-statut-eleve">Actualiser mon statut</button>
          <button class="btn btn-secondary btn-block" type="button" data-action="deconnexion">Se déconnecter</button>
        </div>
      </div>
    </section>`;
}

function modaleSuppressionCompte() {
  if (!etatAuth.suppressionCompteOuvert) return "";
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-sheet modal-sheet--confirm" role="dialog" aria-modal="true" aria-labelledby="titre-suppression-compte">
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-donnees" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Suppression définitive</p>
          <h2 id="titre-suppression-compte">Supprimer mon compte encadreur ?</h2>
          <p>Ton compte, tes élèves, leurs travaux, les corrections, les cours, l'entraide et les consentements seront supprimés. Cette action est irréversible.</p>
          <form class="exercise-form" data-form-suppression-compte>
            <label class="consent-field">
              <input type="checkbox" required />
              <span>Je comprends que toutes les données de mon espace seront définitivement supprimées.</span>
            </label>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-donnees">Annuler</button>
              <button class="btn btn-danger" type="submit">Supprimer mon compte</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleDemandeSuppressionEleve() {
  if (!etatAuth.demandeSuppressionEleveOuverte) return "";
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-sheet modal-sheet--confirm" role="dialog" aria-modal="true" aria-labelledby="titre-demande-suppression-eleve">
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-donnees" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Mes données</p>
          <h2 id="titre-demande-suppression-eleve">Demander la suppression de mes données</h2>
          <p>Ton encadreur recevra une demande et pourra supprimer ton profil, tes travaux, tes corrections et ta progression.</p>
          <form class="exercise-form" data-form-demande-suppression-eleve>
            <label class="form-field">
              <span>Message pour ton encadreur (facultatif)</span>
              <textarea name="message" rows="3" maxlength="500"></textarea>
            </label>
            <label class="consent-field">
              <input type="checkbox" required />
              <span>Je confirme vouloir demander la suppression de mes données.</span>
            </label>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-donnees">Annuler</button>
              <button class="btn btn-danger" type="submit">Envoyer la demande</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function ecranProfil() {
  if (!profil) return "";
  if (profil.role === "encadreur") {
    return `
      <section class="profile-page" aria-labelledby="titre-profil">
        <div class="section-head">
          <h1 id="titre-profil">Mon profil</h1>
          <p>Ton compte encadreur et ton code de partage.</p>
        </div>
        ${blocSuccesAuth()}
        ${blocErreurAuth()}
        <section class="profile-card" aria-labelledby="titre-infos-profil">
          <span class="avatar avatar--large">${echapper(initiales(profil.prenom, profil.nom))}</span>
          <div>
            <h2 id="titre-infos-profil">${echapper(nomComplet(profil))}</h2>
            <p>${echapper(etatAuth.utilisateur?.email ?? "")}</p>
            <p>${echapper(profil.pays ?? "")}</p>
            <p>WhatsApp : ${echapper(profil.telephoneWhatsapp || "Non renseigné")}</p>
          </div>
        </section>
        <section class="profile-card profile-card--form" aria-label="Numéro WhatsApp">
          <form class="exercise-form" data-form-telephone-encadreur>
            <label class="form-field">
              <span>Numéro WhatsApp (facultatif)</span>
              <input
                type="tel"
                name="telephone_whatsapp"
                value="${echapper(profil.telephoneWhatsapp ?? encadreurCourant?.telephone_whatsapp ?? "")}"
                inputmode="tel"
                autocomplete="tel"
                maxlength="24"
                placeholder="+221 77 123 45 67"
              />
              <span class="field-hint">Tes élèves pourront te prévenir sur WhatsApp après l'envoi d'un travail.</span>
            </label>
            <button class="btn btn-secondary btn-block" type="submit">Enregistrer mon numéro</button>
          </form>
        </section>
        ${carteCodeEncadreur()}
        <section class="data-rights-card" aria-labelledby="titre-donnees-encadreur">
          <h2 id="titre-donnees-encadreur">Mes données et celles de mes élèves</h2>
          <p>Chaque élève peut être exporté ou supprimé depuis « Mes élèves ». La suppression d'un élève efface aussi ses photos et ses fichiers.</p>
          <div class="data-rights-links">
            <a href="#/confidentialite">Politique de confidentialité</a>
            <a href="#/conditions">Conditions d'utilisation</a>
          </div>
        </section>
        <div class="profile-actions">
          <a class="btn btn-secondary btn-block" href="#/eleves">${icone("users", 18)} Mes élèves</a>
          ${
            MODE_APERCU
              ? ""
              : `<button class="btn btn-outline-danger btn-block" type="button" data-action="demander-suppression-compte">
            ${icone("trash", 18)} Supprimer mon compte et mes données
          </button>
          <button class="btn btn-danger btn-block" type="button" data-action="deconnexion">
            ${icone("log-out", 18)} Se déconnecter
          </button>`
          }
        </div>
        ${modaleSuppressionCompte()}
      </section>`;
  }

  return `
    <section class="profile-page" aria-labelledby="titre-profil">
      <div class="section-head">
        <h1 id="titre-profil">Mon profil</h1>
        <p>Ton espace élève.</p>
      </div>
      ${blocSuccesAuth()}
      <section class="profile-card" aria-labelledby="titre-infos-profil">
        <span class="avatar avatar--large">${echapper(initiales(profil.prenom, profil.nom))}</span>
        <div>
          <h2 id="titre-infos-profil">${echapper(nomComplet(profil))}</h2>
          <p>${echapper(profil.classe ?? "")}</p>
          <p>Encadreur : ${echapper(profil.encadreurNom ?? "")}</p>
        </div>
      </section>
      <section class="data-rights-card" aria-labelledby="titre-donnees-eleve">
        <h2 id="titre-donnees-eleve">Mes données</h2>
        <p>Ton encadreur peut exporter ou supprimer tes données. Tu peux aussi lui envoyer une demande de suppression depuis cet écran.</p>
        <div class="data-rights-links">
          <a href="#/informations">Comment mes données sont utilisées</a>
          <a href="#/confidentialite">Politique de confidentialité</a>
        </div>
      </section>
      <div class="profile-actions">
        ${
          MODE_APERCU
            ? ""
            : `<button class="btn btn-outline-danger btn-block" type="button" data-action="demander-suppression-donnees-eleve">
          ${icone("trash", 18)} Demander la suppression de mes données
        </button>
        <button class="btn btn-danger btn-block" type="button" data-action="deconnexion">
          ${icone("log-out", 18)} Se déconnecter
        </button>`
        }
      </div>
      ${modaleDemandeSuppressionEleve()}
    </section>`;
}

function statutEleveLibelle(statut) {
  return statut === "actif" ? "Actif" : "En attente";
}

function travauxEnAttenteEleve(eleveId) {
  return donneesSuivi.travaux.filter(
    (travail) =>
      travail.eleve_id === eleveId && travail.statut === "en_attente"
  ).length;
}

function eleveParId(id) {
  return eleves.find((eleve) => eleve.id === id) ?? null;
}

function chapitresEnRetardEleve(eleve) {
  return donneesExercices.chapitres.filter(
    (chapitre) =>
      chapitre.niveau === eleve.classe &&
      statutProgressionProgramme(eleve.id, chapitre.id) !== "termine"
  );
}

function elevesAvecChapitresEnRetard() {
  return elevesTries().filter(
    (eleve) => chapitresEnRetardEleve(eleve).length > 0
  );
}

function messageRappelEleve(eleve) {
  return `Bonjour ${eleve.prenom}, tu as des chapitres en retard sur Monitoring Student. Connecte-toi pour voir ce qu'il te reste à terminer.`;
}

function boutonRappelEleve(eleve, classe = "btn btn-secondary") {
  return boutonWhatsApp(eleve.telephone_contact, messageRappelEleve(eleve), "Envoyer un rappel", {
    afficherSiAbsent: true,
    classe
  });
}

function carteEleveAdmin(eleve) {
  const enAttente = travauxEnAttenteEleve(eleve.id);
  const estEnAttente = eleve.statut === "en_attente";
  return `
    <article class="student-admin-card" data-eleve-admin="${echapper(eleve.id)}">
      <div class="student-admin-head">
        <span class="avatar" aria-hidden="true">${echapper(initiales(eleve.prenom, eleve.nom))}</span>
        <div class="student-admin-copy">
          <h3>${echapper(nomComplet(eleve))}</h3>
          <p>${echapper(eleve.classe)} · ${enAttente} travail${enAttente > 1 ? "x" : ""} en attente</p>
        </div>
        <span class="status-badge status-badge--${estEnAttente ? "pending" : "active"}">
          ${statutEleveLibelle(eleve.statut)}
        </span>
      </div>
      <div class="student-admin-actions">
        ${
          estEnAttente
            ? `<button class="btn btn-primary" type="button" data-action="valider-eleve" data-id="${echapper(eleve.id)}">
                ${icone("check", 17)} Valider
              </button>
              <button class="btn btn-danger" type="button" data-action="refuser-eleve" data-id="${echapper(eleve.id)}">
                ${icone("x", 17)} Refuser
              </button>`
            : `<button class="btn btn-secondary" type="button" data-action="modifier-eleve" data-id="${echapper(eleve.id)}">
                ${icone("pencil", 17)} Modifier
              </button>
              <button class="btn btn-secondary" type="button" data-action="reinitialiser-pin" data-id="${echapper(eleve.id)}">
                ${icone("key-round", 17)} PIN
              </button>
              <button class="btn btn-secondary" type="button" data-action="exporter-eleve" data-id="${echapper(eleve.id)}">
                ${icone("file-text", 17)} Données
              </button>
              <button class="btn btn-danger" type="button" data-action="retirer-eleve" data-id="${echapper(eleve.id)}">
                ${icone("trash", 17)} Supprimer
              </button>`
        }
      </div>
      ${
        estEnAttente
          ? ""
          : `<div class="student-admin-actions student-admin-actions--whatsapp">
              ${boutonRappelEleve(eleve)}
            </div>`
      }
    </article>`;
}

function modaleFormulaireEleve() {
  const formulaire = etatEleves.formulaire;
  if (!formulaire) return "";
  const edition = formulaire.mode === "modifier";
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-sheet" role="dialog" aria-modal="true" aria-labelledby="titre-formulaire-eleve">
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-eleves" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Mes élèves</p>
          <h2 id="titre-formulaire-eleve">${edition ? "Modifier l'élève" : "Ajouter un élève"}</h2>
          ${etatEleves.erreurFormulaire ? `<p class="form-error" role="alert">${echapper(etatEleves.erreurFormulaire)}</p>` : ""}
          <form class="exercise-form" data-form-eleve-encadreur data-id="${edition ? echapper(formulaire.id) : ""}">
            <div class="form-grid">
              <label class="form-field">
                <span>Prénom</span>
                <input type="text" name="prenom" value="${echapper(formulaire.prenom ?? "")}" required />
              </label>
              <label class="form-field">
                <span>Nom</span>
                <input type="text" name="nom" value="${echapper(formulaire.nom ?? "")}" required />
              </label>
            </div>
            <label class="form-field">
              <span>Classe</span>
              <select name="classe" required>
                <option value="">Choisir une classe</option>
                ${nomsNiveaux()
                  .map(
                    (niveau) =>
                      `<option value="${echapper(niveau)}" ${formulaire.classe === niveau ? "selected" : ""}>${echapper(niveau)}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <label class="form-field">
              <span>Numéro WhatsApp (facultatif)</span>
              <input
                type="tel"
                name="telephone_contact"
                value="${echapper(formulaire.telephone_contact ?? "")}"
                inputmode="tel"
                autocomplete="tel"
                maxlength="24"
                placeholder="+221 77 123 45 67"
              />
              <span class="field-hint">Utilisé uniquement pour t'envoyer des rappels, avec l'accord du parent.</span>
            </label>
            ${
              edition
                ? ""
                : `<label class="form-field">
                    <span>Nom du parent ou du responsable légal (facultatif)</span>
                    <input type="text" name="nom_parent" value="${echapper(formulaire.nom_parent ?? "")}" autocomplete="name" />
                  </label>
                  <label class="consent-field">
                    <input type="checkbox" name="consentement_parent" ${formulaire.consentement_parent ? "checked" : ""} required />
                    <span>Je confirme avoir informé un parent ou le responsable légal et obtenu son accord pour créer ce profil et traiter les travaux de l'élève.</span>
                  </label>
                  <label class="form-field">
                    <span>PIN à 4 chiffres</span>
                    <input type="password" name="pin" inputmode="numeric" autocomplete="new-password" pattern="[0-9]{4}" maxlength="4" required />
                  </label>`
            }
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-eleves">Annuler</button>
              <button class="btn btn-primary" type="submit">${edition ? "Enregistrer" : "Ajouter"}</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleSuppressionEleve() {
  const eleve = eleves.find((item) => item.id === etatEleves.suppressionId);
  if (!eleve) return "";
  const refus = etatEleves.suppressionMode === "refuser";
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-sheet modal-sheet--confirm" role="dialog" aria-modal="true" aria-labelledby="titre-suppression-eleve">
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-eleves" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Suppression définitive</p>
          <h2 id="titre-suppression-eleve">${refus ? "Refuser la demande de" : "Supprimer définitivement"} ${echapper(nomComplet(eleve))} ?</h2>
          <p>${refus ? "Sa demande d'inscription et ses données seront supprimées." : "Son profil, ses travaux, ses corrections, sa progression, ses photos et ses messages d'entraide seront supprimés. Cette action est irréversible."}</p>
          <p class="field-hint">Pense à exporter ses données avant de confirmer si tu en as besoin.</p>
          ${etatEleves.erreur ? `<p class="form-error" role="alert">${echapper(etatEleves.erreur)}</p>` : ""}
          <label class="consent-field">
            <input type="checkbox" data-confirmation-suppression-eleve />
            <span>Je comprends que cette suppression est définitive.</span>
          </label>
          <div class="form-actions">
            <button class="btn btn-secondary" type="button" data-action="fermer-modale-eleves">Annuler</button>
            <button class="btn btn-danger" type="button" data-action="confirmer-suppression-eleve" disabled>${refus ? "Refuser" : "Supprimer définitivement"}</button>
          </div>
        </div>
      </section>
    </div>`;
}

function modaleValidationEleve() {
  const eleve = eleves.find((item) => item.id === etatEleves.validationId);
  if (!eleve) return "";
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-sheet" role="dialog" aria-modal="true" aria-labelledby="titre-validation-eleve">
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-eleves" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Accord parental</p>
          <h2 id="titre-validation-eleve">Valider ${echapper(nomComplet(eleve))}</h2>
          <p>Avant d'activer ce profil, confirme que le parent ou le responsable légal a été informé et a donné son accord.</p>
          ${etatEleves.erreurFormulaire ? `<p class="form-error" role="alert">${echapper(etatEleves.erreurFormulaire)}</p>` : ""}
          <form class="exercise-form" data-form-validation-eleve data-id="${echapper(eleve.id)}">
            <label class="form-field">
              <span>Nom du parent ou du responsable légal (facultatif)</span>
              <input type="text" name="nom_parent" autocomplete="name" />
            </label>
            <label class="consent-field">
              <input type="checkbox" name="consentement_parent" required />
              <span>Je confirme avoir obtenu l'accord parental pour activer ce profil et traiter les travaux de l'élève.</span>
            </label>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-eleves">Annuler</button>
              <button class="btn btn-primary" type="submit">Valider l'élève</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleReinitialisationPin() {
  const eleve = eleves.find((item) => item.id === etatEleves.reinitialisationPinId);
  if (!eleve) return "";
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-sheet" role="dialog" aria-modal="true" aria-labelledby="titre-pin-eleve">
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-eleves" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Mes élèves</p>
          <h2 id="titre-pin-eleve">Réinitialiser le PIN</h2>
          <p class="auth-lead">${echapper(nomComplet(eleve))} devra utiliser ce nouveau PIN pour retrouver son profil.</p>
          ${etatEleves.erreurFormulaire ? `<p class="form-error" role="alert">${echapper(etatEleves.erreurFormulaire)}</p>` : ""}
          <form class="exercise-form" data-form-pin-reset data-id="${echapper(eleve.id)}">
            <label class="form-field">
              <span>Nouveau PIN à 4 chiffres</span>
              <input type="password" name="pin" inputmode="numeric" autocomplete="new-password" pattern="[0-9]{4}" maxlength="4" required />
            </label>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-eleves">Annuler</button>
              <button class="btn btn-primary" type="submit">Enregistrer</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function niveauParId(id) {
  return niveauxEspace.find((niveau) => niveau.id === id) ?? null;
}

function compterElevesNiveau(nom) {
  return eleves.filter((eleve) => eleve.classe === nom).length;
}

function compterChapitresNiveau(nom) {
  return donneesExercices.chapitres.filter(
    (chapitre) => chapitre.niveau === nom
  ).length;
}

function blocNiveauxEleves() {
  const niveaux = niveauxTries();
  return `
    <section class="levels-section" aria-labelledby="titre-niveaux">
      <div class="levels-head">
        <div>
          <h2 id="titre-niveaux">Niveaux et classes</h2>
          <p>Ajoute les classes de ton programme pour y ranger tes élèves et tes chapitres.</p>
        </div>
        <span class="levels-count">${niveaux.length}</span>
      </div>
      <div class="levels-list">
        ${
          niveaux.length
            ? niveaux
                .map((niveau, index) => {
                  const elevesNiveau = compterElevesNiveau(niveau.nom);
                  const chapitresNiveau = compterChapitresNiveau(niveau.nom);
                  return `
                    <article class="level-row">
                      <span class="level-order" aria-hidden="true">${String(
                        niveau.ordre ?? index + 1
                      ).padStart(2, "0")}</span>
                      <div class="level-copy">
                        <strong>${echapper(niveau.nom)}</strong>
                        <span>${elevesNiveau} élève${elevesNiveau > 1 ? "s" : ""} · ${chapitresNiveau} chapitre${chapitresNiveau > 1 ? "s" : ""}</span>
                      </div>
                      <div class="level-actions">
                        <button
                          class="icon-btn"
                          type="button"
                          data-action="modifier-niveau"
                          data-id="${echapper(niveau.id ?? "")}"
                          aria-label="Modifier ${echapper(niveau.nom)}"
                        >${icone("pencil", 17)}</button>
                        <button
                          class="icon-btn icon-btn--danger"
                          type="button"
                          data-action="supprimer-niveau"
                          data-id="${echapper(niveau.id ?? "")}"
                          aria-label="Supprimer ${echapper(niveau.nom)}"
                        >${icone("trash", 17)}</button>
                      </div>
                    </article>`;
                })
                .join("")
            : `<p class="auth-empty">Ajoute un premier niveau pour classer tes élèves.</p>`
        }
      </div>
      <button class="btn btn-secondary btn-block levels-add" type="button" data-action="nouveau-niveau">
        ${icone("plus", 17)} Ajouter un niveau
      </button>
    </section>`;
}

function modaleFormulaireNiveau() {
  const formulaire = etatEleves.formulaireNiveau;
  if (!formulaire) return "";
  const edition = formulaire.mode === "modifier";
  return `
    <div class="modal-backdrop" role="presentation">
      <section
        class="modal-sheet modal-sheet--form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-formulaire-niveau"
      >
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-eleves" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Niveaux et classes</p>
          <h2 id="titre-formulaire-niveau">${edition ? "Modifier le niveau" : "Ajouter un niveau"}</h2>
          <p class="auth-lead">Ce niveau sera disponible pour tes élèves et pour ton programme.</p>
          ${etatEleves.erreurNiveau ? `<p class="form-error" role="alert">${echapper(etatEleves.erreurNiveau)}</p>` : ""}
          <form class="exercise-form" data-form-niveau data-id="${echapper(formulaire.id ?? "")}">
            <div class="form-grid">
              <label class="form-field">
                <span>Nom du niveau</span>
                <input
                  id="niveau-nom"
                  type="text"
                  name="nom"
                  value="${echapper(formulaire.nom ?? "")}"
                  maxlength="40"
                  placeholder="Ex. Terminale, CM2, 1ère"
                  required
                />
              </label>
              <label class="form-field">
                <span>Ordre</span>
                <input
                  type="number"
                  name="ordre"
                  value="${echapper(formulaire.ordre ?? "")}"
                  min="1"
                  max="99"
                  inputmode="numeric"
                  required
                />
              </label>
            </div>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-eleves">Annuler</button>
              <button class="btn btn-primary" type="submit">${edition ? "Enregistrer" : "Ajouter"}</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleSuppressionNiveau() {
  const niveau = niveauParId(etatEleves.suppressionNiveauId);
  if (!niveau) return "";
  const elevesNiveau = compterElevesNiveau(niveau.nom);
  const chapitresNiveau = compterChapitresNiveau(niveau.nom);
  return `
    <div class="modal-backdrop" role="presentation">
      <section
        class="modal-sheet modal-sheet--confirm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-suppression-niveau"
      >
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-eleves" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <span class="confirm-icon">${icone("trash", 24)}</span>
          <h2 id="titre-suppression-niveau">Supprimer ${echapper(niveau.nom)} ?</h2>
          <p>
            ${
              elevesNiveau || chapitresNiveau
                ? `Ce niveau est utilisé par ${elevesNiveau} élève${elevesNiveau > 1 ? "s" : ""} et ${chapitresNiveau} chapitre${chapitresNiveau > 1 ? "s" : ""}. Déplace-les avant de le supprimer.`
                : "Ce niveau n'est utilisé par aucun élève ni aucun chapitre."
            }
          </p>
          ${etatEleves.erreurNiveau ? `<p class="form-error" role="alert">${echapper(etatEleves.erreurNiveau)}</p>` : ""}
          <div class="form-actions">
            <button class="btn btn-secondary" type="button" data-action="fermer-modale-eleves">Annuler</button>
            <button class="btn btn-danger" type="button" data-action="confirmer-suppression-niveau">Supprimer</button>
          </div>
        </div>
      </section>
    </div>`;
}

function modaleRappelsEleves() {
  if (!etatEleves.rappelsOuvert) return "";
  const concernes = elevesAvecChapitresEnRetard();
  return `
    <div class="modal-backdrop" role="presentation">
      <section class="modal-sheet" role="dialog" aria-modal="true" aria-labelledby="titre-rappels-eleves">
        <div class="modal-top">
          <span class="sheet-handle"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-eleves" aria-label="Fermer">
            ${icone("x", 22)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Mes élèves</p>
          <h2 id="titre-rappels-eleves">Rappel aux élèves en retard</h2>
          <p class="auth-lead">WhatsApp n'autorise pas l'envoi groupé automatique. Ouvre la conversation de chaque élève pour envoyer son rappel individuel.</p>
          <div class="reminder-list">
            ${
              concernes.length
                ? concernes
                    .map((eleve) => {
                      const retard = chapitresEnRetardEleve(eleve).length;
                      return `
                        <article class="reminder-row">
                          <div class="reminder-row-copy">
                            <strong>${echapper(nomComplet(eleve))}</strong>
                            <span>${echapper(eleve.classe)} · ${retard} chapitre${retard > 1 ? "s" : ""} à terminer</span>
                          </div>
                          ${boutonWhatsApp(
                            eleve.telephone_contact,
                            messageRappelEleve(eleve),
                            "WhatsApp",
                            { afficherSiAbsent: true }
                          )}
                        </article>`;
                    })
                    .join("")
                : `<p class="auth-empty">Aucun élève actif n'a de chapitre en retard pour le moment.</p>`
            }
          </div>
          <div class="form-actions">
            <button class="btn btn-secondary" type="button" data-action="fermer-modale-eleves">Fermer</button>
          </div>
        </div>
      </section>
    </div>`;
}

function demandesSuppressionActives() {
  return etatEleves.demandesSuppression.filter(
    (demande) => demande.statut === "en_attente"
  );
}

function blocDemandesSuppression() {
  const demandes = demandesSuppressionActives();
  if (demandes.length === 0) return "";
  return `
    <section class="deletion-requests" aria-labelledby="titre-demandes-suppression">
      <h2 id="titre-demandes-suppression">Demandes de suppression</h2>
      <p>${demandes.length} élève${demandes.length > 1 ? "s" : ""} demande${demandes.length > 1 ? "nt" : ""} la suppression de ses données.</p>
      <div class="deletion-request-list">
        ${demandes
          .map((demande) => {
            const eleve = eleves.find((item) => item.id === demande.eleve_id);
            if (!eleve) return "";
            return `
              <article class="deletion-request-row">
                <div>
                  <strong>${echapper(nomComplet(eleve))}</strong>
                  <span>${echapper(eleve.classe)}${demande.message ? ` · ${echapper(demande.message)}` : ""}</span>
                </div>
                <div class="deletion-request-actions">
                  <button class="btn btn-secondary" type="button" data-action="ignorer-demande-suppression" data-id="${echapper(demande.id)}">
                    Marquer traitée
                  </button>
                  <button class="btn btn-danger" type="button" data-action="retirer-eleve" data-id="${echapper(eleve.id)}">
                    Supprimer les données
                  </button>
                </div>
              </article>`;
          })
          .join("")}
      </div>
    </section>`;
}

function ecranMesEleves() {
  const liste = elevesTries(true);
  const enAttente = liste.filter((eleve) => eleve.statut === "en_attente").length;
  return `
    <section class="students-page" aria-labelledby="titre-mes-eleves">
      <div class="section-head">
        <h1 id="titre-mes-eleves">Mes élèves</h1>
        <p>${liste.length} élève${liste.length > 1 ? "s" : ""} · ${enAttente} demande${enAttente > 1 ? "s" : ""} en attente</p>
      </div>
      ${etatEleves.succes ? `<p class="form-success" role="status">${echapper(etatEleves.succes)}</p>` : ""}
      ${etatEleves.erreur ? `<p class="form-error" role="alert">${echapper(etatEleves.erreur)}</p>` : ""}
      ${blocDemandesSuppression()}
      ${carteCodeEncadreur()}
      ${blocNiveauxEleves()}
      <button class="btn btn-secondary btn-block students-reminder-btn" type="button" data-action="ouvrir-rappels-eleves">
        ${icone("messages-square", 18)} Rappel aux élèves en retard
      </button>
      <button class="btn btn-primary btn-block students-add-btn" type="button" data-action="nouvel-eleve">
        ${icone("user-plus", 18)} Ajouter un élève
      </button>
      <div class="students-admin-list">
        ${
          liste.length
            ? liste.map(carteEleveAdmin).join("")
            : `<p class="auth-empty">Aucun élève pour le moment. Ajoute ton premier élève ou partage ton code.</p>`
        }
      </div>
      ${modaleFormulaireEleve()}
      ${modaleValidationEleve()}
      ${modaleSuppressionEleve()}
      ${modaleReinitialisationPin()}
      ${modaleFormulaireNiveau()}
      ${modaleSuppressionNiveau()}
      ${modaleRappelsEleves()}
    </section>`;
}

function exerciceParId(id) {
  return donneesExercices.exercices.find((exercice) => exercice.id === id) ?? null;
}

function chapitreParId(id) {
  return donneesExercices.chapitres.find((chapitre) => chapitre.id === id) ?? null;
}

function matiereParId(id) {
  return donneesExercices.matieres.find((matiere) => matiere.id === id) ?? null;
}

function ordreMatiere(id) {
  const index = donneesExercices.matieres.findIndex((matiere) => matiere.id === id);
  return index === -1 ? 99 : index;
}

function nombreExercices(nombre) {
  return `${nombre} exercice${nombre > 1 ? "s" : ""}`;
}

function exercicesFiltres() {
  return donneesExercices.exercices.filter((exercice) => {
    const chapitre = chapitreParId(exercice.chapitre_id);
    if (!chapitre) return false;
    if (etatExercices.filtreNiveau !== "tous" && chapitre.niveau !== etatExercices.filtreNiveau) {
      return false;
    }
    if (
      etatExercices.filtreMatiere !== "toutes" &&
      chapitre.matiere_id !== etatExercices.filtreMatiere
    ) {
      return false;
    }
    return true;
  });
}

function chapitresTries() {
  return [...donneesExercices.chapitres].sort((a, b) => {
    const ordreMatiereA = ordreMatiere(a.matiere_id);
    const ordreMatiereB = ordreMatiere(b.matiere_id);
    if (ordreMatiereA !== ordreMatiereB) return ordreMatiereA - ordreMatiereB;
    const ordreNiveauA = ordreNiveau(a.niveau);
    const ordreNiveauB = ordreNiveau(b.niveau);
    if (ordreNiveauA !== ordreNiveauB) return ordreNiveauA - ordreNiveauB;
    return (a.ordre ?? 99) - (b.ordre ?? 99) || a.titre.localeCompare(b.titre, "fr");
  });
}

function groupesExercices() {
  const groupes = new Map();

  for (const exercice of exercicesFiltres()) {
    const chapitre = chapitreParId(exercice.chapitre_id);
    if (!chapitre) continue;

    if (!groupes.has(chapitre.id)) {
      groupes.set(chapitre.id, { chapitre, exercices: [] });
    }
    groupes.get(chapitre.id).exercices.push(exercice);
  }

  return [...groupes.values()]
    .map((groupe) => ({
      ...groupe,
      exercices: [...groupe.exercices].sort(
        (a, b) =>
          String(a.created_at ?? "").localeCompare(String(b.created_at ?? "")) ||
          a.titre.localeCompare(b.titre, "fr")
      )
    }))
    .sort((a, b) => {
      const ordreNiveauA = ordreNiveau(a.chapitre.niveau);
      const ordreNiveauB = ordreNiveau(b.chapitre.niveau);
      if (ordreNiveauA !== ordreNiveauB) return ordreNiveauA - ordreNiveauB;
      const ordreMatiereA = ordreMatiere(a.chapitre.matiere_id);
      const ordreMatiereB = ordreMatiere(b.chapitre.matiere_id);
      if (ordreMatiereA !== ordreMatiereB) return ordreMatiereA - ordreMatiereB;
      return (
        (a.chapitre.ordre ?? 99) - (b.chapitre.ordre ?? 99) ||
        a.chapitre.titre.localeCompare(b.chapitre.titre, "fr")
      );
    });
}

function filtresExercices() {
  return `
    <section class="exercise-filters" aria-label="Filtrer les exercices">
      <div class="filter-line">
        <span class="filter-label">Niveau</span>
        <div class="filter-chips" role="group" aria-label="Niveau">
          <button
            class="filter-chip"
            type="button"
            data-filtre-niveau="tous"
            aria-pressed="${etatExercices.filtreNiveau === "tous"}"
          >Tous</button>
          ${nomsNiveaux().map(
            (niveau) => `
              <button
                class="filter-chip"
                type="button"
                data-filtre-niveau="${echapper(niveau)}"
                aria-pressed="${etatExercices.filtreNiveau === niveau}"
              >${echapper(niveau)}</button>`
          ).join("")}
        </div>
      </div>
      <label class="filter-select" for="filtre-matiere">
        <span class="filter-label">Matière</span>
        <select id="filtre-matiere" data-filtre-matiere>
          <option value="toutes" ${etatExercices.filtreMatiere === "toutes" ? "selected" : ""}>
            Toutes les matières
          </option>
          ${donneesExercices.matieres
            .map(
              (matiere) => `
                <option
                  value="${echapper(matiere.id)}"
                  ${etatExercices.filtreMatiere === matiere.id ? "selected" : ""}
                >${echapper(matiere.nom)}</option>`
            )
            .join("")}
        </select>
      </label>
    </section>`;
}

function carteExercice(exercice, index) {
  const difficulte = LIBELLES_DIFFICULTE[exercice.difficulte] ?? "Moyen";
  const niveauDifficulte = LIBELLES_DIFFICULTE[exercice.difficulte] ? exercice.difficulte : "moyen";
  const apercu = String(exercice.enonce ?? "").replace(/\s+/g, " ").trim();

  return `
    <button
      class="exercise-card"
      type="button"
      data-action="ouvrir-exercice"
      data-id="${echapper(exercice.id)}"
      aria-label="Ouvrir l'exercice ${echapper(exercice.titre)}"
    >
      <span class="exercise-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <span class="exercise-copy">
        <span class="exercise-title">${echapper(exercice.titre)}</span>
        <span class="exercise-preview">${echapper(apercu)}</span>
        <span class="exercise-meta">
          <span class="difficulty difficulty--${niveauDifficulte}">${echapper(difficulte)}</span>
        </span>
      </span>
      ${icone("chevron-right", 18, "exercise-arrow")}
    </button>`;
}

function blocChapitre(groupe) {
  const chapitre = groupe.chapitre;
  const matiere = matiereParId(chapitre.matiere_id);
  const couleur = matiere?.couleur ?? "#1D4ED8";

  return `
    <article class="chapter-block">
      <header class="chapter-head">
        <span class="chapter-mark" style="--matiere-couleur:${echapper(couleur)}" aria-hidden="true"></span>
        <div class="chapter-copy">
          <p class="chapter-meta">${echapper(matiere?.nom ?? "Matière")} · ${echapper(chapitre.niveau)}</p>
          <h3>${echapper(chapitre.titre)}</h3>
          ${chapitre.description ? `<p class="chapter-desc">${echapper(chapitre.description)}</p>` : ""}
        </div>
        <span class="chapter-count">${nombreExercices(groupe.exercices.length)}</span>
      </header>
      <div class="exercise-list">
        ${groupe.exercices.map((exercice, index) => carteExercice(exercice, index)).join("")}
      </div>
    </article>`;
}

function etatExercicesContenu(groupes) {
  if (etatExercices.chargement) {
    return `
      <div class="exercise-status" role="status">
        <span class="loading-ring" aria-hidden="true"></span>
        <p>Chargement des exercices…</p>
      </div>`;
  }

  if (etatExercices.erreur) {
    return `
      <div class="exercise-status exercise-status--error" role="alert">
        <span class="status-icon">${icone("alert-circle", 25)}</span>
        <h2>Les exercices n'ont pas pu être chargés</h2>
        <p>${echapper(etatExercices.erreur)}</p>
        <button class="btn btn-secondary" type="button" data-action="recharger-exercices">
          ${icone("refresh-cw", 17)} Réessayer
        </button>
      </div>`;
  }

  if (groupes.length === 0) {
    const aucunExercice = donneesExercices.exercices.length === 0;
    return `
      <div class="exercise-status">
        <span class="status-icon">${icone("notebook-pen", 25)}</span>
        <h2>${aucunExercice ? "Aucun exercice pour le moment" : "Aucun exercice pour ces filtres"}</h2>
        <p>${
          aucunExercice
            ? "Les exercices ajoutés par l'encadreur apparaîtront ici."
            : "Essaie un autre niveau ou une autre matière."
        }</p>
        ${
          aucunExercice
            ? ""
            : `<button class="btn btn-secondary" type="button" data-action="reinitialiser-filtres">
                Afficher tous les exercices
              </button>`
        }
      </div>`;
  }

  return groupes.map((groupe) => blocChapitre(groupe)).join("");
}

function iconeFichier(typeMime, nom) {
  const type = (typeMime || "").toLowerCase();
  const nomLower = (nom || "").toLowerCase();
  if (type.includes("pdf") || nomLower.endsWith(".pdf")) return icone("file-text", 18);
  if (type.includes("image")) return icone("image", 18);
  if (type.includes("video")) return icone("video", 18);
  if (type.includes("audio")) return icone("music", 18);
  if (type.includes("zip") || nomLower.endsWith(".zip") || type.includes("compressed")) return icone("file-archive", 18);
  if (type.includes("word") || nomLower.endsWith(".doc") || nomLower.endsWith(".docx")) return icone("file-text", 18);
  if (type.includes("powerpoint") || nomLower.endsWith(".ppt") || nomLower.endsWith(".pptx")) return icone("file-text", 18);
  if (type.includes("excel") || nomLower.endsWith(".xls") || nomLower.endsWith(".xlsx") || type.includes("spreadsheet")) return icone("file-text", 18);
  return icone("file", 18);
}

function formaterTailleFichier(taille) {
  if (taille === null || taille === undefined || taille === "") return "";
  const valeur = Number(taille);
  if (!Number.isFinite(valeur) || valeur < 0) return "";
  if (valeur < 1024) return valeur + " o";
  if (valeur < 1024 * 1024) return Math.round(valeur / 1024) + " Ko";
  return (valeur / (1024 * 1024)).toFixed(2) + " Mo";
}

function modaleDetailExercice() {
  const exercice = exerciceParId(etatExercices.exerciceOuvertId);
  if (!exercice) return "";

  const chapitre = chapitreParId(exercice.chapitre_id);
  const matiere = chapitre ? matiereParId(chapitre.matiere_id) : null;
  const difficulte = LIBELLES_DIFFICULTE[exercice.difficulte] ?? "Moyen";
  const niveauDifficulte = LIBELLES_DIFFICULTE[exercice.difficulte] ? exercice.difficulte : "moyen";
  const estEncadreur = profil?.role === "encadreur";
  const estEleve = profil?.role === "eleve";

  const fichiers = etatExercices.fichiersListe[exercice.id] || [];

  const actions = estEleve
    ? `<button class="btn btn-primary btn-block" type="button" data-action="envoyer-exercice">
        ${icone("send", 18)} Envoyer mon travail sur cet exercice
      </button>`
    : estEncadreur
      ? `<div class="detail-action-row">
          <button class="btn btn-secondary" type="button" data-action="modifier-exercice">
            ${icone("pencil", 17)} Modifier
          </button>
          <button class="btn btn-danger" type="button" data-action="demander-suppression">
            ${icone("trash", 17)} Supprimer
          </button>
        </div>`
      : `<div class="detail-note">
          <p>Choisis ton profil pour envoyer un travail sur cet exercice.</p>
          <button class="btn btn-primary btn-block" type="button" data-action="aller-accueil">
            Choisir mon profil
          </button>
        </div>`;

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section
        class="modal-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-detail-exercice"
      >
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <div class="detail-badges">
            <span class="subject-label" style="--matiere-couleur:${echapper(matiere?.couleur ?? "#1D4ED8")}">
              ${echapper(matiere?.nom ?? "Matière")} · ${echapper(chapitre?.niveau ?? "")}
            </span>
            <span class="difficulty difficulty--${niveauDifficulte}">${echapper(difficulte)}</span>
          </div>
          <h2 id="titre-detail-exercice">${echapper(exercice.titre)}</h2>
          <p class="detail-chapter">
            ${icone("book-open", 16)}
            <span>${echapper(chapitre?.titre ?? "Chapitre")}</span>
          </p>
          <div class="statement-box">
            <p class="statement-label">Énoncé</p>
            <p class="statement-text">${echapper(exercice.enonce)}</p>
          </div>
          ${
            fichiers.length > 0
              ? `<div class="exercice-documents">
                  <p class="statement-label">Documents de l'exercice</p>
                  <div class="exercice-fichiers-liste">
                    ${fichiers
                      .map((fichier) => {
                        const nom = fichier.nom_fichier || fichier.nom || "Fichier";
                        const typeMime = fichier.type_mime || "";
                        const taille = formaterTailleFichier(fichier.taille);
                        const meta = [typeMime || "", taille].filter(Boolean).join(" · ");
                        return `
                          <button class="exercice-fichier-item exercice-fichier-item--bouton" type="button" data-action="ouvrir-fichier-exercice" data-fichier-id="${echapper(fichier.id || "")}" data-fichier-chemin="${echapper(fichier.chemin_stockage || "")}" data-fichier-nom="${echapper(nom)}" data-fichier-type="${echapper(typeMime)}">
                            <div class="exercice-fichier-info">
                              <span class="exercice-fichier-icone">${iconeFichier(typeMime, nom)}</span>
                              <div>
                                <span class="exercice-fichier-nom">${echapper(nom)}</span>
                                ${meta ? `<span class="exercice-fichier-meta">${echapper(meta)}</span>` : ""}
                              </div>
                            </div>
                            <span class="exercice-fichier-action">${icone("external-link", 16)}</span>
                          </button>
                        `;
                      })
                      .join("")}
                  </div>
                </div>`
              : ""
          }
          <p class="form-error" data-detail-error role="alert" hidden></p>
          <div class="detail-actions">${actions}</div>
        </div>
      </section>
    </div>`;
}

function modaleFormulaireExercice() {
  if (!etatExercices.formulaire) return "";

  const estNouveau = etatExercices.formulaire === "nouveau";
  const exercice = estNouveau ? null : exerciceParId(etatExercices.formulaire);
  if (!estNouveau && !exercice) return "";

  const chapitres = chapitresTries();
  const premierChapitreFiltre =
    chapitres.find((chapitre) => {
      if (
        etatExercices.filtreNiveau !== "tous" &&
        chapitre.niveau !== etatExercices.filtreNiveau
      ) {
        return false;
      }
      return (
        etatExercices.filtreMatiere === "toutes" ||
        chapitre.matiere_id === etatExercices.filtreMatiere
      );
    }) ?? chapitres[0];

  const chapitreSelectionne = exercice?.chapitre_id ?? premierChapitreFiltre?.id ?? "";

  const optionsChapitres = donneesExercices.matieres
    .map((matiere) => {
      const chapitresMatiere = chapitres.filter(
        (chapitre) => chapitre.matiere_id === matiere.id
      );
      if (chapitresMatiere.length === 0) return "";

      return `
        <optgroup label="${echapper(matiere.nom)}">
          ${chapitresMatiere
            .map(
              (chapitre) => `
                <option
                  value="${echapper(chapitre.id)}"
                  ${chapitre.id === chapitreSelectionne ? "selected" : ""}
                >${echapper(chapitre.niveau)} · ${echapper(chapitre.titre)}</option>`
            )
            .join("")}
        </optgroup>`;
    })
    .join("");

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section
        class="modal-sheet modal-sheet--form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-formulaire-exercice"
      >
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">${estNouveau ? "Nouvel exercice" : "Modifier l'exercice"}</p>
          <h2 id="titre-formulaire-exercice">
            ${estNouveau ? "Ajouter un exercice" : "Modifier cet exercice"}
          </h2>
          <form class="exercise-form" data-form-exercice data-id="${echapper(exercice?.id ?? "")}">
            <label class="form-field" for="exercice-titre">
              <span>Titre</span>
              <input
                id="exercice-titre"
                name="titre"
                type="text"
                value="${echapper(exercice?.titre ?? "")}"
                maxlength="120"
                placeholder="Ex. Calculer une longueur avec Thalès"
                required
              />
            </label>
            <label class="form-field" for="exercice-chapitre">
              <span>Chapitre</span>
              <select id="exercice-chapitre" name="chapitre_id" required>
                ${optionsChapitres}
              </select>
            </label>
            <label class="form-field" for="exercice-difficulte">
              <span>Difficulté</span>
              <select id="exercice-difficulte" name="difficulte" required>
                ${Object.entries(LIBELLES_DIFFICULTE)
                  .map(
                    ([valeur, libelle]) => `
                      <option
                        value="${valeur}"
                        ${(exercice?.difficulte ?? "moyen") === valeur ? "selected" : ""}
                      >${libelle}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <label class="form-field" for="exercice-enonce">
              <span>Énoncé</span>
              <textarea
                id="exercice-enonce"
                name="enonce"
                rows="6"
                placeholder="Écris ici la consigne de l'exercice…"
                required
              >${echapper(exercice?.enonce ?? "")}</textarea>
            </label>
            <div class="form-field">
              <span>Pièces jointes</span>
              <input
                class="file-input"
                id="exercice-fichiers"
                type="file"
                multiple
                accept="*/*"
                data-exercice-fichiers
              />
              <label class="photo-picker" for="exercice-fichiers">
                ${icone("file-plus", 17)}
                <span>Ajouter des fichiers</span>
              </label>
              <p class="field-hint">Tous types de fichiers acceptés · 50 Mo maximum par fichier</p>
              <p class="field-hint">Les vidéos consomment beaucoup de données mobiles pour vos élèves</p>
              <p class="form-error" data-exercice-fichiers-erreur role="alert" ${etatExercices.fichiersErreur ? "" : "hidden"}>${echapper(etatExercices.fichiersErreur || "")}</p>
              <div class="exercice-fichiers-liste">
                ${etatExercices.fichiersFormulaire
                  .map((fichier) => {
                    const enCours = etatExercices.fichiersEnCours[fichier.id];
                    const tailleAffiche = formaterTailleFichier(fichier.taille);
                    const metaFichier = [fichier.typeMime || "Fichier", tailleAffiche].filter(Boolean).join(" · ");
                    return `
                      <div class="exercice-fichier-item">
                        <span class="exercice-fichier-icone">${iconeFichier(fichier.typeMime, fichier.nom)}</span>
                        <div class="exercice-fichier-info">
                          <span class="exercice-fichier-nom">${echapper(fichier.nom)}</span>
                          <span class="exercice-fichier-meta">${echapper(metaFichier)}</span>
                          ${enCours && enCours.progression !== undefined
                            ? `<div class="exercice-fichier-progress"><div class="exercice-fichier-progress-bar" style="width:${enCours.progression}%"></div></div>`
                            : ""}
                          ${enCours && enCours.erreur
                            ? `<p class="form-error" role="alert">${echapper(enCours.erreur)}</p>`
                            : ""}
                        </div>
                        <div class="exercice-fichier-actions">
                          ${enCours && enCours.envoi
                            ? `<button class="text-btn" type="button" data-action="annuler-envoi-fichier" data-fichier-id="${echapper(fichier.id)}">Annuler</button>`
                            : `<button class="text-btn" type="button" data-action="supprimer-fichier-exercice" data-fichier-id="${echapper(fichier.id)}">Supprimer</button>`}
                        </div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>
            <p class="form-error" data-form-error role="alert" hidden></p>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale">
                Annuler
              </button>
              <button class="btn btn-primary" type="submit">
                ${estNouveau ? "Ajouter" : "Enregistrer"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleSuppressionExercice() {
  const exercice = exerciceParId(etatExercices.suppressionId);
  if (!exercice) return "";

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section
        class="modal-sheet modal-sheet--confirm"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="titre-suppression-exercice"
        aria-describedby="texte-suppression-exercice"
      >
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <span class="confirm-icon">${icone("trash", 24)}</span>
          <h2 id="titre-suppression-exercice">Supprimer cet exercice ?</h2>
          <p id="texte-suppression-exercice">
            « ${echapper(exercice.titre)} » sera supprimé définitivement.
          </p>
          <p class="form-error" data-suppression-error role="alert" hidden></p>
          <div class="form-actions">
            <button class="btn btn-secondary" type="button" data-action="fermer-modale">
              Annuler
            </button>
            <button class="btn btn-danger" type="button" data-action="confirmer-suppression">
              Supprimer
            </button>
          </div>
        </div>
      </section>
    </div>`;
}

function ecranExercices() {
  if (etatExercices.exerciceOuvertId && !exerciceParId(etatExercices.exerciceOuvertId)) {
    etatExercices.exerciceOuvertId = null;
  }
  if (
    etatExercices.formulaire &&
    etatExercices.formulaire !== "nouveau" &&
    !exerciceParId(etatExercices.formulaire)
  ) {
    etatExercices.formulaire = null;
  }
  if (etatExercices.suppressionId && !exerciceParId(etatExercices.suppressionId)) {
    etatExercices.suppressionId = null;
  }

  const groupes = etatExercices.chargement || etatExercices.erreur ? [] : groupesExercices();
  const total = groupes.reduce((somme, groupe) => somme + groupe.exercices.length, 0);

  return `
    <section class="exercise-page" aria-labelledby="titre-exercices">
      <header class="page-head">
        <p class="page-kicker">Cours et entraînement</p>
        <h1 id="titre-exercices">Exercices</h1>
        <p>Choisis un chapitre et entraîne-toi à ton rythme.</p>
      </header>

      ${filtresExercices()}

      ${
        profil?.role === "encadreur"
          ? `<button class="btn btn-primary btn-block add-exercise-btn" type="button" data-action="nouvel-exercice">
              ${icone("plus", 18)} Ajouter un exercice
            </button>`
          : ""
      }

      <div class="results-head">
        <h2>Chapitres et exercices</h2>
        <span>${etatExercices.chargement ? "…" : nombreExercices(total)}</span>
      </div>

      <div class="chapters-list">
        ${etatExercicesContenu(groupes)}
      </div>
    </section>
    ${modaleDetailExercice()}
    ${modaleFormulaireExercice()}
    ${modaleSuppressionExercice()}`;
}

function fermerModalesExercices() {
  etatExercices.exerciceOuvertId = null;
  etatExercices.formulaire = null;
  etatExercices.suppressionId = null;
  etatExercices.erreurFormulaire = "";
  etatExercices.fichiersFormulaire = [];
  etatExercices.fichiersEnCours = {};
  etatExercices.fichiersErreur = "";
}

function ouvrirDetailExercice(id) {
  if (!exerciceParId(id)) return;
  etatExercices.exerciceOuvertId = id;
  etatExercices.formulaire = null;
  etatExercices.suppressionId = null;
  rendre();
  window.setTimeout(() => {
    document.querySelector(".modal-sheet .icon-btn")?.focus();
  }, 30);
}

function ouvrirFormulaireExercice(id = null) {
  if (id && !exerciceParId(id)) return;
  etatExercices.formulaire = id ?? "nouveau";
  etatExercices.exerciceOuvertId = null;
  etatExercices.suppressionId = null;
  etatExercices.erreurFormulaire = "";
  etatExercices.fichiersFormulaire = id ? (etatExercices.fichiersListe[id] || []).map((f) => ({ ...f })) : [];
  etatExercices.fichiersEnCours = {};
  etatExercices.fichiersErreur = "";
  if (id && (!etatExercices.fichiersFormulaire || etatExercices.fichiersFormulaire.length === 0)) {
    chargerFichiersExercice(id);
  }
  rendre();
  window.setTimeout(() => {
    document.getElementById("exercice-titre")?.focus();
  }, 30);
}

function demanderSuppressionExercice(id) {
  if (!exerciceParId(id)) return;
  etatExercices.suppressionId = id;
  etatExercices.exerciceOuvertId = null;
  etatExercices.formulaire = null;
  rendre();
  window.setTimeout(() => {
    document.querySelector(".modal-sheet .btn-secondary")?.focus();
  }, 30);
}

function afficherErreurFormulaire(message) {
  const zone = document.querySelector("[data-form-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function afficherErreurDetail(message) {
  const zones = document.querySelectorAll(
    "[data-detail-error], [data-cours-detail-error]"
  );
  if (zones.length === 0) return;
  zones.forEach((zone) => {
    zone.textContent = message;
    zone.hidden = false;
  });
}

function afficherErreurSuppression(message) {
  const zone = document.querySelector("[data-suppression-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function afficherErreurFichiersExercice(message) {
  etatExercices.fichiersErreur = message || "";
  const zone = document.querySelector("[data-exercice-fichiers-erreur]");
  if (!zone) return;
  zone.textContent = message || "";
  zone.hidden = !message;
}

async function chargerFichiersExercice(exerciceId) {
  if (!exerciceId) return;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    etatExercices.fichiersFormulaire = etatExercices.fichiersListe[exerciceId] || [];
    rendre();
    return;
  }
  try {
    const client = await obtenirClientSupabaseExercices();
    if (!client) return;
    const { data, error } = await client
      .from("exercice_fichiers")
      .select("id, exercice_id, encadreur_id, nom_fichier, type_mime, taille, chemin_stockage, created_at")
      .eq("exercice_id", exerciceId)
      .order("created_at", { ascending: true });
    if (error) throw error;
    etatExercices.fichiersFormulaire = data || [];
    etatExercices.fichiersListe[exerciceId] = data || [];
    rendre();
  } catch (erreur) {
    console.warn("Les pièces jointes n'ont pas pu être chargées.", erreur);
    etatExercices.fichiersFormulaire = etatExercices.fichiersListe[exerciceId] || [];
    rendre();
  }
}

async function ajouterFichierExercice(fichier) {
  if (!fichier) return;
  if (fichier.size > 50 * 1024 * 1024) {
    afficherErreurFichiersExercice("Taille maximale 50 Mo par fichier.");
    return;
  }
  const idLocal = `tmp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const estImage = fichier.type?.startsWith("image/");

  etatExercices.fichiersFormulaire.push({
    id: idLocal,
    nom_fichier: fichier.name,
    nom: fichier.name,
    type_mime: fichier.type,
    taille: fichier.size,
    temporaire: true
  });
  etatExercices.fichiersEnCours[idLocal] = { envoi: true, progression: 0 };
  rendre();

  try {
    let fichierAEnvoyer = fichier;
    if (estImage) {
      try {
        fichierAEnvoyer = await compresserImagePourExercice(fichier);
      } catch (erreur) {
        etatExercices.fichiersFormulaire = etatExercices.fichiersFormulaire.filter(
          (f) => f.id !== idLocal
        );
        delete etatExercices.fichiersEnCours[idLocal];
        afficherErreurFichiersExercice(
          erreur?.message || "Échec de compression de l'image."
        );
        rendre();
        return;
      }
    }

    const client = await obtenirClientSupabaseExercices();
    if (!client || !profil?.id) throw new Error("Impossible d'envoyer le fichier.");
    const extension = fichierAEnvoyer.name.includes(".") ? fichierAEnvoyer.name.split(".").pop() : (fichier.type?.split("/")[1] || "bin");
    const chemin = `${profil.id}/${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${extension}`;

    const { error } = await client.storage
      .from("ressources")
      .upload(chemin, fichierAEnvoyer, { contentType: fichierAEnvoyer.type || fichier.type || "application/octet-stream", upsert: false });
    if (error) throw error;

    etatExercices.fichiersEnCours[idLocal] = { envoi: true, progression: 100 };
    // attach pending info to be saved on exercise submit
    const idx = etatExercices.fichiersFormulaire.findIndex((f) => f.id === idLocal);
    if (idx !== -1) {
      etatExercices.fichiersFormulaire[idx] = {
        ...etatExercices.fichiersFormulaire[idx],
        chemin_stockage: chemin,
        nom_fichier: fichier.name,
        type_mime: fichierAEnvoyer.type || fichier.type,
        taille: fichierAEnvoyer.size || fichier.size,
        temporaire: true,
        enAttenteEnregistrement: true
      };
    }
    delete etatExercices.fichiersEnCours[idLocal];
    rendre();
  } catch (erreur) {
    etatExercices.fichiersFormulaire = etatExercices.fichiersFormulaire.filter(
      (f) => f.id !== idLocal
    );
    delete etatExercices.fichiersEnCours[idLocal];
    afficherErreurFichiersExercice(
      erreur?.message || "Échec d'envoi du fichier. Réessaie."
    );
    rendre();
  }
}

function retirerFichierExerciceLocal(fichierId) {
  etatExercices.fichiersFormulaire = etatExercices.fichiersFormulaire.filter(
    (f) => f.id !== fichierId
  );
  delete etatExercices.fichiersEnCours[fichierId];
  for (const [exerciceId, fichiers] of Object.entries(
    etatExercices.fichiersListe || {}
  )) {
    etatExercices.fichiersListe[exerciceId] = (fichiers || []).filter(
      (f) => f.id !== fichierId
    );
  }
}

function annulerEnvoiFichierExercice(fichierId) {
  retirerFichierExerciceLocal(fichierId);
  rendre();
}

async function supprimerFichierExercice(fichierId) {
  const fichier = etatExercices.fichiersFormulaire.find((f) => f.id === fichierId) || (Object.values(etatExercices.fichiersListe).flat().find((f) => f.id === fichierId));
  if (!fichier) return;
  if (fichier.enAttenteEnregistrement && fichier.chemin_stockage) {
    try {
      const client = await obtenirClientSupabaseExercices();
      if (client) {
        await client.storage.from("ressources").remove([fichier.chemin_stockage]);
      }
    } catch (erreur) {
      console.warn("Le fichier n'a pas pu être supprimé du stockage.", erreur);
    }
    retirerFichierExerciceLocal(fichierId);
    rendre();
    return;
  }
  if (fichier.id && !fichier.temporaire) {
    try {
      const client = await obtenirClientSupabaseExercices();
      if (client) {
        await client.from("exercice_fichiers").delete().eq("id", fichier.id);
        if (fichier.chemin_stockage) {
          await client.storage.from("ressources").remove([fichier.chemin_stockage]);
        }
      }
    } catch (erreur) {
      console.warn("Le fichier n'a pas pu être supprimé.", erreur);
      afficherErreurFichiersExercice(erreur?.message || "Le fichier n'a pas pu être supprimé. Réessaie.");
      return;
    }
  }
  retirerFichierExerciceLocal(fichierId);
  rendre();
}

function reinitialiserFiltresExercices() {
  etatExercices.filtreNiveau = "tous";
  etatExercices.filtreMatiere = "toutes";
  rendre();
}

function ajusterFiltresExercicesAuProfil() {
  etatExercices.filtreNiveau =
    profil?.role === "eleve" && nomsNiveaux().includes(profil.classe) ? profil.classe : "tous";
  etatExercices.filtreMatiere = "toutes";
}

function preparerEnvoiExercice(id) {
  if (profil?.role !== "eleve") return;
  const exercice = exerciceParId(id);
  const chapitre = exercice ? chapitreParId(exercice.chapitre_id) : null;
  if (!exercice || !chapitre) return;

  const matiere = matiereParId(chapitre.matiere_id);
  const prefill = {
    eleve_id: profil.eleveId,
    exercice_id: exercice.id,
    chapitre_id: chapitre.id,
    matiere_id: chapitre.matiere_id,
    titre: exercice.titre,
    enonce: exercice.enonce,
    difficulte: exercice.difficulte,
    matiere: matiere?.nom ?? "",
    chapitre: chapitre.titre,
    niveau: chapitre.niveau,
    cree_le: new Date().toISOString()
  };

  if (!MODE_APERCU) {
    try {
      window.localStorage.setItem(CLE_PREFILL_TRAVAIL, JSON.stringify(prefill));
    } catch {
      afficherErreurDetail(
        "Le préremplissage du formulaire n'a pas pu être enregistré."
      );
      return;
    }
  }

  reinitialiserSuiviPourProfil();
  fermerModalesExercices();
  allerA("/suivi");
}

function initialiserExercicesLocaux() {
  try {
    const brut = window.localStorage.getItem(CLE_EXERCICES_LOCAL);
    if (!brut) return;
    const valeur = JSON.parse(brut);
    if (Array.isArray(valeur)) {
      donneesExercices.exercices = valeur.filter(
        (exercice) =>
          exercice &&
          typeof exercice.id === "string" &&
          typeof exercice.chapitre_id === "string" &&
          typeof exercice.titre === "string" &&
          typeof exercice.enonce === "string"
      );
    }
  } catch {
    donneesExercices.exercices = [...EXERCICES_EXEMPLE];
  }
}

function sauvegarderExercicesLocaux() {
  if (MODE_APERCU) return;
  try {
    window.localStorage.setItem(
      CLE_EXERCICES_LOCAL,
      JSON.stringify(donneesExercices.exercices)
    );
  } catch {
    throw new Error("Les modifications n'ont pas pu être enregistrées dans ce navigateur.");
  }
}

const MESSAGE_APERCU_ACTION =
  "Mode aperçu : les modifications sont désactivées. Ouvre l'application sans « ?apercu » pour agir sur tes vraies données.";

function exigerClientActif(client) {
  if (!client) {
    throw new Error(
      MODE_APERCU ? MESSAGE_APERCU_ACTION : "Supabase n'est pas configuré."
    );
  }
  return client;
}

async function obtenirClientSupabaseExercices() {
  if (MODE_APERCU) return null;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;

  if (!promesseClientSupabase) {
    promesseClientSupabase = (async () => {
      if (!window.supabase) {
        await new Promise((resoudre, rejeter) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.js";
          script.integrity = "sha384-TcHRA3zBbn+Lexh5n+Oil4guNPOS3rjNDpGRAN46u/s/mB2IZ50ceC6TYDU2yvgK";
          script.crossOrigin = "anonymous";
          script.onload = resoudre;
          script.onerror = () => rejeter(new Error("Le client Supabase n'a pas pu être chargé."));
          document.head.appendChild(script);
        });
      }
      clientSupabaseExercices = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        }
      );
      return clientSupabaseExercices;
    })().catch((erreur) => {
      promesseClientSupabase = null;
      throw erreur;
    });
  }

  return promesseClientSupabase;
}

function boutonEnCours(formulaire, texte) {
  const bouton = formulaire?.querySelector('button[type="submit"]');
  if (!bouton) return () => {};
  const contenuInitial = bouton.innerHTML;
  bouton.disabled = true;
  bouton.textContent = texte;
  return () => {
    bouton.disabled = false;
    bouton.innerHTML = contenuInitial;
  };
}

function reinitialiserEspace() {
  profil = null;
  eleves = [];
  niveauxEspace = NIVEAUX.map((nom, index) => ({ id: null, nom, ordre: index + 1 }));
  donneesExercices.matieres = [];
  donneesExercices.chapitres = [];
  donneesExercices.exercices = [];
  donneesSuivi.travaux = [];
  donneesSuivi.corrections = [];
  donneesProgramme.progression = [];
  etatExercices.filtreNiveau = "tous";
  etatExercices.filtreMatiere = "toutes";
  etatExercices.exerciceOuvertId = null;
  etatExercices.formulaire = null;
  etatExercices.suppressionId = null;
  etatProgramme.filtreNiveau = NIVEAUX[NIVEAUX.length - 1];
  etatProgramme.filtreMatiere = "toutes";
  etatProgramme.eleveSelectionneId = null;
  etatProgramme.chapitreOuvertId = null;
  etatProgramme.formulaireChapitre = null;
  etatProgramme.suppressionChapitreId = null;
  donneesCours.cours = [];
  donneesCours.fichiers = {};
  etatCours.charge = false;
  etatCours.chargement = false;
  etatCours.erreur = "";
  etatCours.erreurAction = "";
  etatCours.succes = "";
  etatCours.filtreNiveau = "tous";
  etatCours.filtreMatiere = "toutes";
  etatCours.coursOuvertId = null;
  etatCours.formulaire = null;
  etatCours.suppressionId = null;
  etatCours.fichiersFormulaire = [];
  etatCours.fichiersEnCours = {};
  etatCours.fichiersErreur = "";
  donneesEntraide.questions = [];
  donneesEntraide.reponses = [];
  donneesEntraide.utiles = [];
  donneesEntraide.signalements = [];
  etatEntraide.charge = false;
  etatEntraide.chargement = false;
  etatEntraide.erreur = "";
  etatEntraide.erreurAction = "";
  etatEntraide.succes = "";
  etatEntraide.filtreMatiere = "toutes";
  etatEntraide.questionOuverteId = null;
  etatEntraide.formulaireQuestion = false;
  etatEntraide.suppressionQuestionId = null;
  etatEntraide.suppressionReponseId = null;
  etatEntraide.photo = null;
  etatEntraide.photoErreur = "";
  etatEntraide.photoEnCours = false;
  etatEntraide.photoJeton = 0;
  etatSuivi.filtreStatut = "tous";
  etatSuivi.succes = "";
  etatSuivi.travailOuvertId = null;
  etatSuivi.erreurCorrection = "";
  etatSuivi.dernierTravail = null;
  etatEleves.formulaire = null;
  etatEleves.rappelsOuvert = false;
  etatEleves.suppressionId = null;
  etatEleves.suppressionMode = null;
  etatEleves.suppressionConfirmee = false;
  etatEleves.reinitialisationPinId = null;
  etatEleves.validationId = null;
  etatEleves.validationNomParent = "";
  etatEleves.validationConsentement = false;
  etatEleves.formulaireNiveau = null;
  etatEleves.suppressionNiveauId = null;
  etatEleves.erreurNiveau = "";
  reinitialiserEtatAssistant();
  etatAuth.eleveEnAttente = null;
  etatAuth.eleveSelectionne = null;
  etatAuth.elevesDisponibles = [];
  etatAuth.encadreur = null;
  etatAuth.niveaux = [];
  etatAuth.code = "";
  etatAuth.eleveEtape = "code";
  etatAuth.suppressionCompteOuvert = false;
  etatAuth.demandeSuppressionEleveOuverte = false;
}

async function resoudrePhotosTravaux(client, travaux) {
  return Promise.all(
    travaux.map(async (travail) => {
      const chemin = travail.photo_url;
      if (!chemin || /^https?:\/\//i.test(chemin)) return travail;
      const { data } = await client.storage
        .from("travaux")
        .createSignedUrl(chemin, 3600);
      return {
        ...travail,
        photo_chemin: chemin,
        photo_url: data?.signedUrl ?? ""
      };
    })
  );
}

async function chargerEspace() {
  if (!profil) return;
  const client = await obtenirClientSupabaseExercices();
  if (!client) return;

  chargementEspace = true;
  if (["/suivi", "/exercices", "/programme", "/eleves"].includes(cheminActuel())) {
    rendre();
  }

  try {
    const [
      reponseEleves,
      reponseNiveaux,
      reponseMatieres,
      reponseChapitres,
      reponseExercices,
      reponseTravaux,
      reponseCorrections,
      reponseProgression,
      reponseDemandesSuppression
    ] = await Promise.all([
      client
        .from("eleves")
        .select(
          "id, prenom, nom, classe, telephone_contact, statut, encadreur_id, info_eleve_vue, created_at"
        )
        .order("created_at", { ascending: true }),
      client.from("niveaux").select("id, nom, ordre").order("ordre"),
      client.from("matieres").select("id, nom, couleur, encadreur_id").order("nom"),
      client
        .from("chapitres")
        .select("id, matiere_id, niveau, ordre, titre, description, encadreur_id")
        .order("ordre"),
      client
        .from("exercices")
        .select("id, chapitre_id, titre, enonce, difficulte, created_at, encadreur_id")
        .order("created_at", { ascending: true }),
      client
        .from("travaux")
        .select(
          "id, eleve_id, matiere_id, chapitre_id, exercice_id, titre, message_eleve, photo_url, statut, date_envoi"
        )
        .order("date_envoi", { ascending: false }),
      client
        .from("corrections")
        .select("id, travail_id, commentaire, note, audio_url, date_correction")
        .order("date_correction", { ascending: true }),
      client
        .from("progression")
        .select("id, eleve_id, chapitre_id, statut, updated_at"),
      client
        .from("demandes_suppression")
        .select("id, eleve_id, statut, message, created_at")
        .order("created_at", { ascending: false })
    ]);

    const erreur =
      reponseEleves.error ??
      reponseNiveaux.error ??
      reponseMatieres.error ??
      reponseChapitres.error ??
      reponseExercices.error ??
      reponseTravaux.error ??
      reponseCorrections.error ??
      reponseProgression.error ??
      reponseDemandesSuppression.error;
    if (erreur) throw erreur;

    eleves = reponseEleves.data ?? [];
    etatEleves.demandesSuppression =
      profil?.role === "encadreur" ? reponseDemandesSuppression.data ?? [] : [];
    niveauxEspace =
      (reponseNiveaux.data ?? []).length > 0
        ? reponseNiveaux.data.map((niveau) => ({
            id: niveau.id,
            nom: niveau.nom,
            ordre: niveau.ordre
          }))
        : NIVEAUX.map((nom, index) => ({ id: null, nom, ordre: index + 1 }));
    donneesExercices.matieres = reponseMatieres.data ?? [];
    donneesExercices.chapitres = reponseChapitres.data ?? [];
    donneesExercices.exercices = reponseExercices.data ?? [];
    donneesExercices.source = "supabase";
    try {
      const { data: fichiersExercices } = await client
        .from("exercice_fichiers")
        .select("id, exercice_id, encadreur_id, nom_fichier, type_mime, taille, chemin_stockage, created_at");
      if (Array.isArray(fichiersExercices)) {
        etatExercices.fichiersListe = {};
        for (const f of fichiersExercices) {
          if (!etatExercices.fichiersListe[f.exercice_id]) etatExercices.fichiersListe[f.exercice_id] = [];
          etatExercices.fichiersListe[f.exercice_id].push(f);
        }
      }
    } catch (erreurFichiers) {
      console.warn("Les pièces jointes n'ont pas pu être chargées.", erreurFichiers);
    }
    donneesSuivi.travaux = await resoudrePhotosTravaux(
      client,
      reponseTravaux.data ?? []
    );
    donneesSuivi.corrections = reponseCorrections.data ?? [];
    donneesSuivi.source = "supabase";
    donneesProgramme.progression = reponseProgression.data ?? [];
    donneesProgramme.source = "supabase";

    if (profil.role === "eleve") {
      const eleve = eleves.find((item) => item.id === profil.eleveId);
      if (eleve) {
        profil = {
          ...profil,
          prenom: eleve.prenom,
          nom: eleve.nom,
          classe: eleve.classe,
          statut: eleve.statut,
          infoEleveVue: Boolean(eleve.info_eleve_vue)
        };
        enregistrerProfil(profil);
        etatProgramme.eleveSelectionneId = eleve.id;
        etatExercices.filtreNiveau = nomsNiveaux().includes(eleve.classe)
          ? eleve.classe
          : "tous";
        etatProgramme.filtreNiveau = nomsNiveaux().includes(eleve.classe)
          ? eleve.classe
          : nomsNiveaux()[nomsNiveaux().length - 1] ?? "";
      }
    } else {
      etatProgramme.eleveSelectionneId = null;
      if (!nomsNiveaux().includes(etatProgramme.filtreNiveau)) {
        etatProgramme.filtreNiveau =
          nomsNiveaux()[nomsNiveaux().length - 1] ?? "";
      }
      if (
        etatExercices.filtreNiveau !== "tous" &&
        !nomsNiveaux().includes(etatExercices.filtreNiveau)
      ) {
        etatExercices.filtreNiveau = "tous";
      }
    }

    etatEleves.erreur = "";
    etatExercices.erreur = "";
    etatSuivi.erreur = "";
    etatProgramme.erreur = "";
  } catch (erreur) {
    console.warn("L'espace n'a pas pu être chargé.", erreur);
    const message =
      "Tes données n'ont pas pu être chargées. Vérifie ta connexion puis réessaie.";
    etatEleves.erreur = message;
    etatExercices.erreur = message;
    etatSuivi.erreur = message;
    etatProgramme.erreur = message;
    etatAuth.erreurAction = message;
  } finally {
    chargementEspace = false;
    rendre();
  }
}

async function appliquerSession(session) {
  const client = await obtenirClientSupabaseExercices();
  if (!client) return;

  etatAuth.session = session;
  etatAuth.utilisateur = session?.user ?? null;

  if (!session?.user) {
    etatAuth.reinitialisationMotDePasse = false;
    enregistrerProfil(null);
    encadreurCourant = null;
    reinitialiserEspace();
    rendre();
    return;
  }

  if (etatAuth.reinitialisationMotDePasse) {
    profil = null;
    encadreurCourant = null;
    enregistrerProfil(null);
    reinitialiserEspace();
    etatAuth.erreurAction = "";
    etatAuth.succes = "";
    if (cheminActuel() !== "/reinitialiser-mot-de-passe") {
      allerA("/reinitialiser-mot-de-passe");
    } else {
      rendre();
    }
    return;
  }

  try {
    if (session.user.is_anonymous) {
      const { data: eleve, error } = await client
        .from("eleves")
        .select("id, prenom, nom, classe, statut, encadreur_id, info_eleve_vue")
        .eq("auth_user_id", session.user.id)
        .maybeSingle();
      if (error) throw error;
      if (!eleve) {
        await client.auth.signOut();
        etatAuth.erreurAction =
          "Ce profil élève n'est plus relié à cet appareil. Entre à nouveau ton code encadreur.";
        allerA("/eleve");
        return;
      }

      profil = {
        role: "eleve",
        eleveId: eleve.id,
        prenom: eleve.prenom,
        nom: eleve.nom,
        classe: eleve.classe,
        statut: eleve.statut,
        encadreurId: eleve.encadreur_id,
        infoEleveVue: Boolean(eleve.info_eleve_vue)
      };

      const { data: encadreur } = await client
        .from("encadreurs")
        .select("id, prenom, nom, pays, code_encadreur, telephone_whatsapp")
        .eq("id", eleve.encadreur_id)
        .maybeSingle();
      if (encadreur) {
        profil.encadreurNom = nomComplet(encadreur);
        profil.encadreurCode = encadreur.code_encadreur;
        profil.encadreurTelephone = encadreur.telephone_whatsapp ?? "";
      }
      enregistrerProfil(profil);

      if (eleve.statut !== "actif") {
        etatAuth.eleveEnAttente = eleve;
        etatAuth.eleveEtape = "attente";
        etatAuth.erreurAction = "";
        if (cheminActuel() !== "/profil") allerA("/eleve");
        else rendre();
        return;
      }

      etatAuth.eleveEnAttente = null;
      etatAuth.eleveEtape = "code";
      await chargerEspace();
      if (!profil?.infoEleveVue) {
        if (cheminActuel() !== "/informations") allerA("/informations");
        else rendre();
        return;
      }
      if (
        ["/eleve", "/connexion", "/inscription", "/mot-de-passe-oublie"].includes(
          cheminActuel()
        )
      ) {
        allerA("/suivi");
      } else {
        rendre();
      }
      return;
    }

    const { data: encadreur, error } = await client
      .from("encadreurs")
      .select(
        "id, prenom, nom, pays, code_encadreur, telephone_whatsapp, created_at"
      )
      .eq("id", session.user.id)
      .maybeSingle();
    if (error) throw error;
    if (!encadreur) {
      await client.auth.signOut();
      etatAuth.erreurAction =
        "Aucun espace encadreur n'est associé à ce compte. Contacte le support.";
      allerA("/connexion");
      return;
    }

    encadreurCourant = encadreur;
    profil = {
      role: "encadreur",
      id: encadreur.id,
      prenom: encadreur.prenom,
      nom: encadreur.nom,
      pays: encadreur.pays,
      code_encadreur: encadreur.code_encadreur,
      telephoneWhatsapp: encadreur.telephone_whatsapp ?? ""
    };
    enregistrerProfil(profil);
    await chargerEspace();
    if (
      ["/connexion", "/connexion/encadreur", "/inscription", "/mot-de-passe-oublie", "/eleve"].includes(
        cheminActuel()
      )
    ) {
      allerA("/suivi");
    } else {
      rendre();
    }
  } catch (erreur) {
    console.warn("La session n'a pas pu être chargée.", erreur);
    etatAuth.erreurAction = messageErreurAuth(erreur);
    rendre();
  }
}

async function initialiserAuth() {
  const lienRecuperation =
    /(?:[#?&])type=recovery(?:[&=]|$)/.test(window.location.hash) ||
    /(?:[?&])type=recovery(?:[&=]|$)/.test(window.location.search);
  try {
    const client = await obtenirClientSupabaseExercices();
    if (!client) {
      etatAuth.configManquante = true;
      etatAuth.chargement = false;
      authInitialisee = true;
      rendre();
      return;
    }

    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    if (lienRecuperation && data.session?.user) {
      etatAuth.reinitialisationMotDePasse = true;
    }
    await appliquerSession(data.session);
    if (lienRecuperation && !data.session?.user) {
      etatAuth.reinitialisationMotDePasse = false;
      etatAuth.erreurAction =
        "Le lien de réinitialisation est invalide ou expiré. Demande un nouveau lien.";
      allerA("/reinitialiser-mot-de-passe");
    }

    client.auth.onAuthStateChange((evenement, session) => {
      if (authEnCours) return;
      if (evenement === "PASSWORD_RECOVERY") {
        etatAuth.reinitialisationMotDePasse = true;
        etatAuth.erreurAction = "";
        reinitialiserEspace();
        enregistrerProfil(null);
        allerA("/reinitialiser-mot-de-passe");
        return;
      }
      if (evenement === "INITIAL_SESSION") return;
      window.setTimeout(() => {
        appliquerSession(session);
      }, 0);
    });
  } catch (erreur) {
    console.warn("L'authentification n'a pas pu être initialisée.", erreur);
    etatAuth.erreurAction =
      "L'authentification n'a pas pu être initialisée. Vérifie la configuration Supabase.";
  } finally {
    etatAuth.chargement = false;
    authInitialisee = true;
    rendre();
  }
}

async function connecterEncadreur(formulaire) {
  const donnees = new FormData(formulaire);
  const email = String(donnees.get("email") ?? "").trim().toLowerCase();
  const password = String(donnees.get("password") ?? "");
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  etatAuth.reinitialisationMotDePasse = false;

  if (!email || !password) {
    etatAuth.erreurAction = "Renseigne ton e-mail et ton mot de passe.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Connexion…");
  authEnCours = true;
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    if (!data.session) {
      throw new Error("Confirme d'abord ton e-mail, puis reconnecte-toi.");
    }
    etatAuth.succes = "Connexion réussie.";
    await appliquerSession(data.session);
  } catch (erreur) {
    etatAuth.erreurAction = messageErreurAuth(erreur);
    rendre();
  } finally {
    authEnCours = false;
    restaurerBouton();
  }
}

async function inscrireEncadreur(formulaire) {
  const donnees = new FormData(formulaire);
  const prenom = String(donnees.get("prenom") ?? "").trim();
  const nom = String(donnees.get("nom") ?? "").trim();
  const pays = String(donnees.get("pays") ?? "").trim();
  const email = String(donnees.get("email") ?? "").trim().toLowerCase();
  const password = String(donnees.get("password") ?? "");
  const consentementCgu = donnees.get("consentement_cgu") === "on";
  const consentementParent = donnees.get("consentement_parent") === "on";
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  etatAuth.reinitialisationMotDePasse = false;

  if (!prenom || !nom || !pays || !email) {
    etatAuth.erreurAction = "Remplis tous les champs obligatoires.";
    rendre();
    return;
  }
  if (password.length < 8) {
    etatAuth.erreurAction = "Le mot de passe doit contenir au moins 8 caractères.";
    rendre();
    return;
  }
  if (!consentementCgu || !consentementParent) {
    etatAuth.erreurAction =
      "Pour créer un compte, accepte les conditions et confirme ton engagement parental.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Création…");
  authEnCours = true;
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "encadreur",
          prenom,
          nom,
          pays,
          version_consentement: VERSION_TEXTE_CONSENTEMENT
        }
      }
    });
    if (error) throw error;
    if (
      data.user &&
      Array.isArray(data.user.identities) &&
      data.user.identities.length === 0
    ) {
      throw new Error("User already registered");
    }

    if (data.session) {
      await appliquerSession(data.session);
      etatAuth.succes = "Ton compte encadreur est créé.";
      allerA("/suivi");
    } else {
      etatAuth.succes =
        "Compte créé. Vérifie ta boîte e-mail pour confirmer ton adresse, puis connecte-toi.";
      allerA("/connexion");
    }
  } catch (erreur) {
    etatAuth.erreurAction = messageErreurAuth(erreur);
    rendre();
  } finally {
    authEnCours = false;
    restaurerBouton();
  }
}

async function demanderReinitialisationMotDePasse(formulaire) {
  const donnees = new FormData(formulaire);
  const email = String(donnees.get("email") ?? "").trim().toLowerCase();
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  if (!email) {
    etatAuth.erreurAction = "Renseigne ton adresse e-mail.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Envoi…");
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const redirection =
      window.location.protocol === "file:"
        ? undefined
        : `${window.location.origin}${window.location.pathname}`;
    const { error } = await client.auth.resetPasswordForEmail(
      email,
      redirection ? { redirectTo: redirection } : undefined
    );
    if (error) throw error;
    etatAuth.succes =
      "Si un compte existe avec cet e-mail, un lien de réinitialisation vient d'être envoyé.";
  } catch (erreur) {
    etatAuth.erreurAction = messageErreurAuth(erreur);
  } finally {
    restaurerBouton();
    rendre();
  }
}

async function enregistrerNouveauMotDePasse(formulaire) {
  const donnees = new FormData(formulaire);
  const password = String(donnees.get("password") ?? "");
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  if (password.length < 8) {
    etatAuth.erreurAction = "Le mot de passe doit contenir au moins 8 caractères.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Enregistrement…");
  authEnCours = true;
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client.auth.updateUser({ password });
    if (error) throw error;
    await client.auth.signOut();
    etatAuth.reinitialisationMotDePasse = false;
    etatAuth.succes = "Ton mot de passe a été mis à jour. Connecte-toi.";
    allerA("/connexion");
  } catch (erreur) {
    etatAuth.erreurAction = messageErreurAuth(erreur);
    rendre();
  } finally {
    authEnCours = false;
    restaurerBouton();
  }
}

async function rechercherCodeEleve(formulaire) {
  const donnees = new FormData(formulaire);
  const code = String(donnees.get("code") ?? "").trim().toUpperCase();
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  if (!code) {
    etatAuth.erreurAction = "Saisis le code de ton encadreur.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Recherche…");
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { data, error } = await client.rpc("trouver_encadreur_par_code", {
      p_code: code
    });
    if (error) throw error;
    const encadreur = Array.isArray(data) ? data[0] : data;
    if (!encadreur) {
      etatAuth.erreurAction = "Code encadreur invalide.";
      return;
    }

    const [reponseEleves, reponseNiveaux] = await Promise.all([
      client.rpc("lister_eleves_par_code", { p_code: code }),
      client.rpc("lister_niveaux_par_code", { p_code: code })
    ]);
    if (reponseEleves.error) throw reponseEleves.error;
    if (reponseNiveaux.error) throw reponseNiveaux.error;

    etatAuth.code = encadreur.code_encadreur;
    etatAuth.encadreur = encadreur;
    etatAuth.elevesDisponibles = reponseEleves.data ?? [];
    etatAuth.niveaux = reponseNiveaux.data ?? [];
    etatAuth.eleveSelectionne = null;
    etatAuth.eleveEtape = "choix";
  } catch (erreur) {
    etatAuth.erreurAction = messageErreurRpc(erreur);
  } finally {
    restaurerBouton();
    rendre();
  }
}

async function choisirEleveParCode(id) {
  const eleve = etatAuth.elevesDisponibles.find((item) => item.id === id);
  if (!eleve) return;
  etatAuth.eleveSelectionne = eleve;
  etatAuth.eleveEtape = "pin";
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  rendre();
}

function ouvrirCreationEleve() {
  etatAuth.eleveEtape = "creation";
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  rendre();
}

function changerCodeEleve() {
  etatAuth.eleveEtape = "code";
  etatAuth.eleveSelectionne = null;
  etatAuth.elevesDisponibles = [];
  etatAuth.encadreur = null;
  etatAuth.niveaux = [];
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  rendre();
}

async function connecterEleveAvecPin(formulaire) {
  const donnees = new FormData(formulaire);
  const pin = String(donnees.get("pin") ?? "").trim();
  const eleve = etatAuth.eleveSelectionne;
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  if (!eleve) {
    etatAuth.eleveEtape = "choix";
    rendre();
    return;
  }
  if (!/^[0-9]{4}$/.test(pin)) {
    etatAuth.erreurAction = "Le PIN doit contenir exactement 4 chiffres.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Connexion…");
  authEnCours = true;
  let client = null;
  try {
    client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    await client.auth.signOut();
    const { error: erreurAnonyme } = await client.auth.signInAnonymously();
    if (erreurAnonyme) throw erreurAnonyme;
    const { error } = await client.rpc("reclamer_eleve", {
      p_code: etatAuth.code,
      p_eleve_id: eleve.id,
      p_pin: pin
    });
    if (error) throw error;
    const { data: sessionData } = await client.auth.getSession();
    etatAuth.succes = "Profil retrouvé.";
    await appliquerSession(sessionData.session);
  } catch (erreur) {
    if (client) await client.auth.signOut();
    etatAuth.erreurAction = messageErreurRpc(erreur);
    rendre();
  } finally {
    authEnCours = false;
    restaurerBouton();
  }
}

async function creerElevePublic(formulaire) {
  const donnees = new FormData(formulaire);
  const prenom = String(donnees.get("prenom") ?? "").trim();
  const nom = String(donnees.get("nom") ?? "").trim();
  const classe = String(donnees.get("classe") ?? "").trim();
  const pin = String(donnees.get("pin") ?? "").trim();
  const pinConfirm = String(donnees.get("pin_confirm") ?? "").trim();
  etatAuth.erreurAction = "";
  etatAuth.succes = "";

  if (!prenom || !nom || !classe) {
    etatAuth.erreurAction = "Renseigne ton prénom, ton nom et ta classe.";
    rendre();
    return;
  }
  if (!etatAuth.niveaux.some((niveau) => niveau.nom === classe)) {
    etatAuth.erreurAction = "Choisis une classe proposée par ton encadreur.";
    rendre();
    return;
  }
  if (!/^[0-9]{4}$/.test(pin) || pin !== pinConfirm) {
    etatAuth.erreurAction = "Choisis un PIN à 4 chiffres et confirme-le correctement.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Envoi…");
  authEnCours = true;
  let client = null;
  try {
    client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    await client.auth.signOut();
    const { error: erreurAnonyme } = await client.auth.signInAnonymously();
    if (erreurAnonyme) throw erreurAnonyme;
    const { error } = await client.rpc("creer_eleve_public", {
      p_code: etatAuth.code,
      p_prenom: prenom,
      p_nom: nom,
      p_classe: classe,
      p_pin: pin
    });
    if (error) throw error;
    const { data: sessionData } = await client.auth.getSession();
    etatAuth.succes =
      "Ta demande a été envoyée. Ton encadreur doit maintenant valider ton profil.";
    await appliquerSession(sessionData.session);
  } catch (erreur) {
    if (client) await client.auth.signOut();
    etatAuth.erreurAction = messageErreurRpc(erreur);
    rendre();
  } finally {
    authEnCours = false;
    restaurerBouton();
  }
}

async function actualiserStatutEleve() {
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { data, error } = await client
      .from("eleves")
      .select("id, prenom, nom, classe, statut, encadreur_id")
      .eq("auth_user_id", etatAuth.utilisateur?.id ?? "")
      .maybeSingle();
    if (error) throw error;
    if (!data) {
      await client.auth.signOut();
      etatAuth.eleveEnAttente = null;
      etatAuth.eleveEtape = "code";
      etatAuth.erreurAction =
        "Ton profil n'existe plus. Entre à nouveau le code de ton encadreur.";
      allerA("/eleve");
      return;
    }
    if (data.statut === "actif") {
      const { data: sessionData } = await client.auth.getSession();
      etatAuth.succes = "Ton profil est validé. Bienvenue !";
      await appliquerSession(sessionData.session);
      allerA("/suivi");
    } else {
      etatAuth.eleveEnAttente = data;
      etatAuth.succes = "Ton profil est toujours en attente de validation.";
      rendre();
    }
  } catch (erreur) {
    etatAuth.erreurAction = messageErreurRpc(erreur);
    rendre();
  }
}

async function deconnecter() {
  if (MODE_APERCU) {
    window.location.href = window.location.pathname;
    return;
  }
  try {
    const client = await obtenirClientSupabaseExercices();
    if (client) {
      if (profil?.role === "eleve") {
        try {
          await client.rpc("detacher_eleve_appareil");
        } catch (erreur) {
          console.warn("Le profil élève n'a pas pu être détaché.", erreur);
        }
      }
      await client.auth.signOut();
    }
  } catch (erreur) {
    console.warn("La déconnexion a échoué.", erreur);
  }
  enregistrerProfil(null);
  encadreurCourant = null;
  etatAuth.session = null;
  etatAuth.utilisateur = null;
  etatAuth.succes = "";
  etatAuth.erreurAction = "";
  etatAuth.reinitialisationMotDePasse = false;
  reinitialiserEspace();
  allerA("/");
}

async function marquerInformationsEleveVues() {
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  if (MODE_APERCU) {
    profil = { ...(profil ?? {}), infoEleveVue: true };
    enregistrerProfil(profil);
    allerA("/suivi");
    return;
  }

  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client.rpc("marquer_info_eleve_vue");
    if (error) throw error;
    profil = { ...(profil ?? {}), infoEleveVue: true };
    enregistrerProfil(profil);
    allerA("/suivi");
  } catch (erreur) {
    etatAuth.erreurAction =
      erreur?.message || "L'information n'a pas pu être enregistrée.";
    rendre();
  }
}

async function envoyerDemandeSuppressionEleve(formulaire) {
  const donnees = new FormData(formulaire);
  const message = String(donnees.get("message") ?? "").trim();
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  const restaurerBouton = boutonEnCours(formulaire, "Envoi…");
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client.rpc("demander_suppression_donnees", {
      p_message: message || null
    });
    if (error) throw error;
    etatAuth.demandeSuppressionEleveOuverte = false;
    etatAuth.succes =
      "Ta demande a été envoyée à ton encadreur. Il peut maintenant la traiter.";
    rendre();
  } catch (erreur) {
    etatAuth.erreurAction =
      erreur?.message || "La demande n'a pas pu être envoyée.";
    rendre();
  } finally {
    restaurerBouton();
  }
}

async function supprimerMonCompte() {
  if (MODE_APERCU) {
    etatAuth.erreurAction = MESSAGE_APERCU_ACTION;
    rendre();
    return;
  }
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const utilisateurId = etatAuth.utilisateur?.id ?? profil?.id;
    if (!utilisateurId) throw new Error("Session encadreur introuvable.");

    await supprimerDossierStockage(client, "ressources", utilisateurId);
    for (const eleve of eleves) {
      await supprimerDossierStockage(client, "travaux", eleve.id);
    }

    const { error } = await client.rpc("supprimer_mon_compte");
    if (error) throw error;

    try {
      await client.auth.signOut();
    } catch {
      // La session est déjà invalidée par la suppression du compte.
    }

    etatAuth.suppressionCompteOuvert = false;
    enregistrerProfil(null);
    encadreurCourant = null;
    etatAuth.session = null;
    etatAuth.utilisateur = null;
    reinitialiserEspace();
    allerA("/");
  } catch (erreur) {
    etatAuth.erreurAction =
      erreur?.message || "Le compte n'a pas pu être supprimé.";
    rendre();
  }
}

async function copierCodeEncadreur() {
  const code = encadreurCourant?.code_encadreur;
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code);
    etatAuth.succes = "Code copié.";
    etatEleves.succes = "Code copié.";
    etatEleves.erreur = "";
  } catch {
    etatAuth.erreurAction =
      "Le code n'a pas pu être copié automatiquement. Note-le manuellement.";
    etatEleves.erreur =
      "Le code n'a pas pu être copié automatiquement. Note-le manuellement.";
  }
  rendre();
}

async function enregistrerTelephoneEncadreur(formulaire) {
  const donnees = new FormData(formulaire);
  const saisi = String(donnees.get("telephone_whatsapp") ?? "").trim();
  const telephone = saisi ? telephoneInternational(saisi) : "";
  etatAuth.erreurAction = "";
  etatAuth.succes = "";

  if (saisi && !telephone) {
    etatAuth.erreurAction =
      "Saisis ton numéro WhatsApp au format international, par exemple +221 77 123 45 67.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Enregistrement…");
  try {
    if (!MODE_APERCU) {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);
      const { error } = await client
        .from("encadreurs")
        .update({ telephone_whatsapp: telephone || null })
        .eq("id", profil?.id);
      if (error) throw error;
    }

    encadreurCourant = {
      ...(encadreurCourant ?? {}),
      telephone_whatsapp: telephone || null
    };
    profil = { ...profil, telephoneWhatsapp: telephone };
    enregistrerProfil(profil);
    etatAuth.succes = telephone
      ? "Numéro WhatsApp enregistré."
      : "Numéro WhatsApp retiré.";
    rendre();
  } catch (erreur) {
    etatAuth.erreurAction = messageErreurRpc(erreur);
    rendre();
  } finally {
    restaurerBouton();
  }
}

function ouvrirFormulaireEleve(id = null) {
  const eleve = id ? eleves.find((item) => item.id === id) : null;
  etatEleves.formulaire = {
    mode: id ? "modifier" : "ajouter",
    id: id ?? null,
    prenom: eleve?.prenom ?? "",
    nom: eleve?.nom ?? "",
    classe: eleve?.classe ?? nomsNiveaux()[0] ?? "",
    telephone_contact: eleve?.telephone_contact ?? "",
    nom_parent: "",
    consentement_parent: false
  };
  etatEleves.formulaireNiveau = null;
  etatEleves.suppressionNiveauId = null;
  etatEleves.erreurNiveau = "";
  etatEleves.erreurFormulaire = "";
  etatEleves.succes = "";
  rendre();
}

function ouvrirFormulaireNiveau(id = null) {
  const niveau = id ? niveauParId(id) : null;
  if (id && !niveau) return;
  const ordreMax = niveauxTries().reduce(
    (maximum, item) => Math.max(maximum, Number(item.ordre) || 0),
    0
  );
  etatEleves.formulaire = null;
  etatEleves.suppressionId = null;
  etatEleves.reinitialisationPinId = null;
  etatEleves.suppressionNiveauId = null;
  etatEleves.erreurFormulaire = "";
  etatEleves.erreurNiveau = "";
  etatEleves.succes = "";
  etatEleves.formulaireNiveau = {
    mode: id ? "modifier" : "ajouter",
    id: id ?? null,
    nom: niveau?.nom ?? "",
    ordre: String(niveau?.ordre ?? ordreMax + 1)
  };
  rendre();
  window.setTimeout(() => {
    document.getElementById("niveau-nom")?.focus();
  }, 30);
}

function ouvrirSuppressionNiveau(id) {
  if (!niveauParId(id)) return;
  etatEleves.formulaire = null;
  etatEleves.suppressionId = null;
  etatEleves.reinitialisationPinId = null;
  etatEleves.formulaireNiveau = null;
  etatEleves.suppressionNiveauId = id;
  etatEleves.erreurFormulaire = "";
  etatEleves.erreurNiveau = "";
  etatEleves.succes = "";
  rendre();
  window.setTimeout(() => {
    document.querySelector(".modal-sheet .btn-secondary")?.focus();
  }, 30);
}

function fermerModalesEleves() {
  etatEleves.formulaire = null;
  etatEleves.suppressionId = null;
  etatEleves.suppressionMode = null;
  etatEleves.suppressionConfirmee = false;
  etatEleves.validationId = null;
  etatEleves.validationNomParent = "";
  etatEleves.validationConsentement = false;
  etatEleves.reinitialisationPinId = null;
  etatEleves.formulaireNiveau = null;
  etatEleves.suppressionNiveauId = null;
  etatEleves.erreurNiveau = "";
  etatEleves.erreurFormulaire = "";
  etatEleves.rappelsOuvert = false;
}

async function enregistrerEleveEncadreur(formulaire) {
  const donnees = new FormData(formulaire);
  const prenom = String(donnees.get("prenom") ?? "").trim();
  const nom = String(donnees.get("nom") ?? "").trim();
  const classe = String(donnees.get("classe") ?? "").trim();
  const pin = String(donnees.get("pin") ?? "").trim();
  const telephoneSaisi = String(donnees.get("telephone_contact") ?? "").trim();
  const telephoneContact = telephoneSaisi ? telephoneInternational(telephoneSaisi) : "";
  const nomParent = String(donnees.get("nom_parent") ?? "").trim();
  const consentementParent = donnees.get("consentement_parent") === "on";
  const id = formulaire.dataset.id || null;
  etatEleves.erreurFormulaire = "";

  if (!id) {
    etatEleves.formulaire = {
      ...(etatEleves.formulaire ?? {}),
      prenom,
      nom,
      classe,
      telephone_contact: telephoneSaisi,
      nom_parent: nomParent,
      consentement_parent: consentementParent
    };
  }

  if (!prenom || !nom || !classe) {
    etatEleves.erreurFormulaire = "Renseigne le prénom, le nom et la classe.";
    rendre();
    return;
  }
  if (!id && !consentementParent) {
    etatEleves.erreurFormulaire =
      "Confirme l'accord d'un parent ou du responsable légal avant d'ajouter cet élève.";
    rendre();
    return;
  }
  if (!nomsNiveaux().includes(classe)) {
    etatEleves.erreurFormulaire = "Choisis une classe valide.";
    rendre();
    return;
  }
  if (telephoneSaisi && !telephoneContact) {
    etatEleves.erreurFormulaire =
      "Saisis le numéro WhatsApp au format international, par exemple +221 77 123 45 67.";
    rendre();
    return;
  }
  if (!id && !/^[0-9]{4}$/.test(pin)) {
    etatEleves.erreurFormulaire = "Choisis un PIN à 4 chiffres.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Enregistrement…");
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    if (id) {
      const { error } = await client
        .from("eleves")
        .update({
          prenom,
          nom,
          classe,
          telephone_contact: telephoneContact || null
        })
        .eq("id", id);
      if (error) throw error;
    } else {
      const { data: nouvelId, error } = await client.rpc(
        "creer_eleve_encadreur",
        {
          p_prenom: prenom,
          p_nom: nom,
          p_classe: classe,
          p_pin: pin
        }
      );
      if (error) throw error;
      if (!nouvelId) throw new Error("L'élève n'a pas pu être créé.");
      const { data: consentementCree, error: erreurConsentement } = await client
        .from("consentements")
        .insert({
          encadreur_id: profil.id,
          eleve_id: nouvelId,
          type: "parent_eleve",
          nom_parent: nomParent || null,
          version_texte: VERSION_TEXTE_CONSENTEMENT
        })
        .select("id")
        .single();
      if (erreurConsentement) {
        await client.from("eleves").delete().eq("id", nouvelId);
        throw erreurConsentement;
      }

      const { error: erreurActivation } = await client
        .from("eleves")
        .update({
          statut: "actif",
          telephone_contact: telephoneContact || null
        })
        .eq("id", nouvelId);
      if (erreurActivation) {
        if (consentementCree?.id) {
          await client
            .from("consentements")
            .delete()
            .eq("id", consentementCree.id);
        }
        await client.from("eleves").delete().eq("id", nouvelId);
        throw erreurActivation;
      }
    }
    fermerModalesEleves();
    await chargerEspace();
    etatEleves.succes = id ? "Élève modifié." : "Élève ajouté.";
    rendre();
  } catch (erreur) {
    etatEleves.erreurFormulaire = messageErreurRpc(erreur);
    rendre();
  } finally {
    restaurerBouton();
  }
}

async function enregistrerNiveau(formulaire) {
  const donnees = new FormData(formulaire);
  const nom = String(donnees.get("nom") ?? "").trim();
  const ordre = Number(donnees.get("ordre"));
  const id = formulaire.dataset.id || null;
  etatEleves.erreurNiveau = "";

  if (!nom) {
    etatEleves.erreurNiveau = "Renseigne le nom du niveau.";
    rendre();
    document.getElementById("niveau-nom")?.focus();
    return;
  }
  if (!Number.isInteger(ordre) || ordre < 1 || ordre > 99) {
    etatEleves.erreurNiveau = "Choisis un ordre entre 1 et 99.";
    rendre();
    return;
  }
  const doublon = niveauxEspace.some(
    (niveau) =>
      niveau.id !== id &&
      String(niveau.nom).toLocaleLowerCase("fr") === nom.toLocaleLowerCase("fr")
  );
  if (doublon) {
    etatEleves.erreurNiveau = "Ce niveau existe déjà.";
    rendre();
    document.getElementById("niveau-nom")?.focus();
    return;
  }
  if (!profil?.id) {
    etatEleves.erreurNiveau = "Ton espace encadreur n'est pas disponible.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Enregistrement.");
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const valeurs = { nom, ordre, encadreur_id: profil.id };
    const requete = id
      ? client.from("niveaux").update(valeurs).eq("id", id)
      : client.from("niveaux").insert(valeurs);
    const { error } = await requete;
    if (error) throw error;
    fermerModalesEleves();
    await chargerEspace();
    etatEleves.succes = id ? "Niveau modifié." : "Niveau ajouté.";
    rendre();
  } catch (erreur) {
    etatEleves.erreurNiveau =
      erreur?.code === "23505"
        ? "Ce niveau existe déjà."
        : messageErreurRpc(erreur);
    rendre();
  } finally {
    restaurerBouton();
  }
}

async function confirmerSuppressionNiveau() {
  const id = etatEleves.suppressionNiveauId;
  const niveau = niveauParId(id);
  if (!id || !niveau) return;
  const elevesNiveau = compterElevesNiveau(niveau.nom);
  const chapitresNiveau = compterChapitresNiveau(niveau.nom);

  if (elevesNiveau || chapitresNiveau) {
    etatEleves.erreurNiveau =
      `Ce niveau est encore utilisé par ${elevesNiveau} élève${elevesNiveau > 1 ? "s" : ""} et ${chapitresNiveau} chapitre${chapitresNiveau > 1 ? "s" : ""}. Déplace-les avant de le supprimer.`;
    rendre();
    return;
  }

  etatEleves.erreurNiveau = "";
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client.from("niveaux").delete().eq("id", id);
    if (error) throw error;
    fermerModalesEleves();
    await chargerEspace();
    etatEleves.succes = "Niveau supprimé.";
    rendre();
  } catch (erreur) {
    etatEleves.erreurNiveau =
      erreur?.code === "23503"
        ? "Ce niveau est encore utilisé. Déplace les élèves et les chapitres avant de le supprimer."
        : messageErreurRpc(erreur);
    rendre();
  }
}

function validerEleve(id) {
  etatEleves.validationId = id;
  etatEleves.validationNomParent = "";
  etatEleves.validationConsentement = false;
  etatEleves.formulaire = null;
  etatEleves.suppressionId = null;
  etatEleves.reinitialisationPinId = null;
  etatEleves.erreurFormulaire = "";
  etatEleves.erreur = "";
  etatEleves.succes = "";
  rendre();
}

async function confirmerValidationEleve(formulaire) {
  const id = formulaire.dataset.id;
  const donnees = new FormData(formulaire);
  const nomParent = String(donnees.get("nom_parent") ?? "").trim();
  const consentement = donnees.get("consentement_parent") === "on";
  etatEleves.erreurFormulaire = "";

  if (!id) return;
  if (!consentement) {
    etatEleves.erreurFormulaire =
      "Confirme l'accord parental avant d'activer ce profil.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Validation…");
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);

    const { data: consentementCree, error: erreurConsentement } = await client
      .from("consentements")
      .insert({
        encadreur_id: profil.id,
        eleve_id: id,
        type: "parent_eleve",
        nom_parent: nomParent || null,
        version_texte: VERSION_TEXTE_CONSENTEMENT
      })
      .select("id")
      .single();
    if (erreurConsentement) throw erreurConsentement;

    const { error } = await client
      .from("eleves")
      .update({ statut: "actif" })
      .eq("id", id);
    if (error) {
      if (consentementCree?.id) {
        await client.from("consentements").delete().eq("id", consentementCree.id);
      }
      throw error;
    }

    fermerModalesEleves();
    await chargerEspace();
    etatEleves.succes = "Élève validé avec l'accord parental.";
    rendre();
  } catch (erreur) {
    etatEleves.erreurFormulaire =
      erreur?.message || "L'élève n'a pas pu être validé.";
    rendre();
  } finally {
    restaurerBouton();
  }
}

async function listerFichiersStockage(client, bucket, prefixe) {
  const fichiers = [];
  let offset = 0;
  const limite = 100;

  while (true) {
    const { data, error } = await client.storage
      .from(bucket)
      .list(prefixe, { limit: limite, offset });
    if (error) throw error;
    const elements = Array.isArray(data) ? data : [];
    for (const element of elements) {
      const chemin = prefixe ? `${prefixe}/${element.name}` : element.name;
      if (element.id) {
        fichiers.push(chemin);
      } else {
        fichiers.push(...(await listerFichiersStockage(client, bucket, chemin)));
      }
    }
    if (elements.length < limite) break;
    offset += limite;
  }

  return fichiers;
}

async function supprimerDossierStockage(client, bucket, prefixe) {
  if (!prefixe) return;
  const fichiers = await listerFichiersStockage(client, bucket, prefixe);
  if (fichiers.length === 0) return;
  const { error } = await client.storage.from(bucket).remove(fichiers);
  if (error) throw error;
}

function telechargerJson(nomFichier, contenu) {
  const blob = new Blob([JSON.stringify(contenu, null, 2)], {
    type: "application/json;charset=utf-8"
  });
  const url = URL.createObjectURL(blob);
  const lien = document.createElement("a");
  lien.href = url;
  lien.download = nomFichier;
  document.body.appendChild(lien);
  lien.click();
  lien.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function exporterDonneesEleve(id) {
  const eleve = eleves.find((item) => item.id === id);
  if (!eleve) return;
  etatEleves.erreur = "";
  etatEleves.succes = "";

  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);

    const travaux = donneesSuivi.travaux.filter(
      (travail) => travail.eleve_id === id
    );
    const idsTravaux = new Set(travaux.map((travail) => travail.id));
    const corrections = donneesSuivi.corrections.filter((correction) =>
      idsTravaux.has(correction.travail_id)
    );
    const progression = donneesProgramme.progression.filter(
      (entree) => entree.eleve_id === id
    );

    const { data: consentements, error: erreurConsentements } = await client
      .from("consentements")
      .select("type, nom_parent, date_consentement, version_texte")
      .eq("eleve_id", id);
    if (erreurConsentements) throw erreurConsentements;

    const { data: demandes, error: erreurDemandes } = await client
      .from("demandes_suppression")
      .select("statut, message, created_at, traitee_le")
      .eq("eleve_id", id);
    if (erreurDemandes) throw erreurDemandes;

    const { data: messagesAssistant, error: erreurMessagesAssistant } =
      await client
        .from("assistant_messages")
        .select("role, contenu, travail_id, created_at")
        .eq("eleve_id", id)
        .order("created_at", { ascending: true });
    if (erreurMessagesAssistant) throw erreurMessagesAssistant;

    const { data: questionsEntraide, error: erreurQuestionsEntraide } =
      await client
        .from("entraide_questions")
        .select(
          "id, matiere_id, titre, message, auteur_nom, photo_url, created_at"
        )
        .eq("eleve_id", id)
        .order("created_at", { ascending: true });
    if (erreurQuestionsEntraide) throw erreurQuestionsEntraide;

    const idsQuestions = (questionsEntraide ?? []).map((question) => question.id);
    let reponsesEntraide = [];
    if (idsQuestions.length > 0) {
      const { data: reponses, error: erreurReponsesEntraide } = await client
        .from("entraide_reponses")
        .select("id, question_id, auteur_type, auteur_nom, message, created_at")
        .in("question_id", idsQuestions)
        .order("created_at", { ascending: true });
      if (erreurReponsesEntraide) throw erreurReponsesEntraide;
      reponsesEntraide = reponses ?? [];
    }

    const donnees = {
      exporte_le: new Date().toISOString(),
      eleve: {
        id: eleve.id,
        prenom: eleve.prenom,
        nom: eleve.nom,
        classe: eleve.classe,
        statut: eleve.statut,
        created_at: eleve.created_at
      },
      travaux,
      corrections,
      progression,
      consentements: consentements ?? [],
      demandes_suppression: demandes ?? [],
      assistant_messages: messagesAssistant ?? [],
      entraide_questions: questionsEntraide ?? [],
      entraide_reponses: reponsesEntraide
    };

    const nomFichier = `donnees-${eleve.prenom}-${eleve.nom}-${new Date()
      .toISOString()
      .slice(0, 10)}.json`
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9.-]+/g, "-")
      .toLowerCase();

    telechargerJson(nomFichier, donnees);
    etatEleves.succes = `Les données de ${nomComplet(eleve)} ont été exportées.`;
    rendre();
  } catch (erreur) {
    etatEleves.erreur =
      erreur?.message || "Les données n'ont pas pu être exportées.";
    rendre();
  }
}

function demanderSuppressionEleve(id, mode = "retirer") {
  etatEleves.suppressionId = id;
  etatEleves.suppressionMode = mode;
  etatEleves.suppressionConfirmee = false;
  etatEleves.erreurFormulaire = "";
  rendre();
}

async function marquerDemandeSuppressionTraitee(id) {
  if (!id) return;
  etatEleves.erreur = "";
  etatEleves.succes = "";
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client
      .from("demandes_suppression")
      .update({ statut: "traitee", traitee_le: new Date().toISOString() })
      .eq("id", id);
    if (error) throw error;
    await chargerEspace();
    etatEleves.succes = "Demande marquée comme traitée.";
    rendre();
  } catch (erreur) {
    etatEleves.erreur =
      erreur?.message || "La demande n'a pas pu être mise à jour.";
    rendre();
  }
}

async function confirmerSuppressionEleve() {
  const id = etatEleves.suppressionId;
  const mode = etatEleves.suppressionMode;
  if (!id) return;
  etatEleves.erreur = "";
  etatEleves.succes = "";
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);

    await supprimerDossierStockage(client, "travaux", id);
    if (profil?.id) {
      await supprimerDossierStockage(
        client,
        "ressources",
        `entraide/${profil.id}/${id}`
      );
    }

    const { error } = await client.rpc("supprimer_eleve_definitivement", {
      p_eleve_id: id
    });
    if (error) throw error;

    fermerModalesEleves();
    await chargerEspace();
    etatEleves.succes =
      mode === "refuser" ? "Demande refusée." : "Élève supprimé définitivement.";
    rendre();
  } catch (erreur) {
    etatEleves.erreur =
      erreur?.message || "La suppression de l'élève a échoué.";
    rendre();
  }
}

function ouvrirReinitialisationPin(id) {
  etatEleves.reinitialisationPinId = id;
  etatEleves.formulaireNiveau = null;
  etatEleves.suppressionNiveauId = null;
  etatEleves.erreurNiveau = "";
  etatEleves.erreurFormulaire = "";
  rendre();
}

async function enregistrerNouveauPin(formulaire) {
  const donnees = new FormData(formulaire);
  const pin = String(donnees.get("pin") ?? "").trim();
  const id = formulaire.dataset.id;
  etatEleves.erreurFormulaire = "";
  if (!/^[0-9]{4}$/.test(pin)) {
    etatEleves.erreurFormulaire = "Choisis un PIN à 4 chiffres.";
    rendre();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Enregistrement…");
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client.rpc("reinitialiser_pin_eleve", {
      p_eleve_id: id,
      p_pin: pin
    });
    if (error) throw error;
    fermerModalesEleves();
    etatEleves.succes = "PIN réinitialisé. L'élève devra se reconnecter avec ce PIN.";
    rendre();
  } catch (erreur) {
    etatEleves.erreurFormulaire = messageErreurRpc(erreur);
    rendre();
  } finally {
    restaurerBouton();
  }
}

async function chargerExercicesDepuisSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

  etatExercices.chargement = true;
  etatExercices.erreur = "";
  if (cheminActuel() === "/exercices") rendre();

  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const [reponseMatieres, reponseChapitres, reponseExercices] = await Promise.all([
      client.from("matieres").select("id, nom, couleur").order("nom"),
      client
        .from("chapitres")
        .select("id, matiere_id, niveau, ordre, titre, description")
        .order("ordre"),
      client
        .from("exercices")
        .select("id, chapitre_id, titre, enonce, difficulte, created_at")
        .order("created_at", { ascending: true })
    ]);

    const erreur =
      reponseMatieres.error ?? reponseChapitres.error ?? reponseExercices.error;
    if (erreur) throw erreur;
    if (
      !Array.isArray(reponseMatieres.data) ||
      !Array.isArray(reponseChapitres.data) ||
      !Array.isArray(reponseExercices.data)
    ) {
      throw new Error("Les données reçues sont incomplètes.");
    }
    if (reponseMatieres.data.length === 0 || reponseChapitres.data.length === 0) {
      throw new Error("Les matières ou les chapitres ne sont pas encore configurés.");
    }

    donneesExercices.matieres = reponseMatieres.data;
    donneesExercices.chapitres = reponseChapitres.data;
    donneesExercices.exercices = reponseExercices.data;
    donneesExercices.source = "supabase";
    etatExercices.erreur = "";
    try {
      const { data: fichiersExercices } = await client
        .from("exercice_fichiers")
        .select("id, exercice_id, encadreur_id, nom_fichier, type_mime, taille, chemin_stockage, created_at");
      if (Array.isArray(fichiersExercices)) {
        etatExercices.fichiersListe = {};
        for (const f of fichiersExercices) {
          if (!etatExercices.fichiersListe[f.exercice_id]) etatExercices.fichiersListe[f.exercice_id] = [];
          etatExercices.fichiersListe[f.exercice_id].push(f);
        }
      }
    } catch (erreurFichiers) {
      console.warn("Les pièces jointes n'ont pas pu être chargées.", erreurFichiers);
    }
  } catch (erreur) {
    console.warn("Les exercices n'ont pas pu être chargés depuis Supabase.", erreur);
    etatExercices.erreur =
      "Vérifie la connexion et la configuration Supabase, puis réessaie.";
  } finally {
    etatExercices.chargement = false;
    if (cheminActuel() === "/exercices") rendre();
  }
}

async function enregistrerExercice(valeurs, idExistant = null) {
  if (donneesExercices.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const valeursDistantes = profil?.id
      ? { ...valeurs, encadreur_id: profil.id }
      : valeurs;

    let exerciceEnregistre = null;
    if (idExistant) {
      const { data, error } = await client
        .from("exercices")
        .update(valeursDistantes)
        .eq("id", idExistant)
        .select("id, chapitre_id, titre, enonce, difficulte, created_at, encadreur_id")
        .single();
      if (error) throw error;
      const index = donneesExercices.exercices.findIndex(
        (exercice) => exercice.id === idExistant
      );
      if (index !== -1) donneesExercices.exercices[index] = data;
      exerciceEnregistre = data;
    } else {
      const { data, error } = await client
        .from("exercices")
        .insert(valeursDistantes)
        .select("id, chapitre_id, titre, enonce, difficulte, created_at, encadreur_id")
        .single();
      if (error) throw error;
      donneesExercices.exercices.push(data);
      exerciceEnregistre = data;
    }

    if (exerciceEnregistre && profil?.id) {
      const fichiersFormulaire = etatExercices.fichiersFormulaire || [];
      const dejaEnregistres = fichiersFormulaire.filter(
        (f) =>
          !f.enAttenteEnregistrement &&
          f.id &&
          !String(f.id).startsWith("tmp-")
      );
      const aEnregistrer = fichiersFormulaire.filter(
        (f) => f.enAttenteEnregistrement && f.chemin_stockage
      );
      const nouveauxFichiers = [];
      for (const f of aEnregistrer) {
        const { data: fichierCree, error: erreurFichier } = await client
          .from("exercice_fichiers")
          .insert({
            exercice_id: exerciceEnregistre.id,
            encadreur_id: profil.id,
            nom_fichier: f.nom_fichier || f.nom,
            type_mime: f.type_mime || null,
            taille: f.taille || null,
            chemin_stockage: f.chemin_stockage
          })
          .select(
            "id, exercice_id, encadreur_id, nom_fichier, type_mime, taille, chemin_stockage, created_at"
          )
          .single();
        if (erreurFichier) {
          console.warn("Le fichier n'a pas pu être enregistré.", erreurFichier);
          if (!idExistant) erreurFichier.exerciceId = exerciceEnregistre.id;
          throw erreurFichier;
        }
        nouveauxFichiers.push(fichierCree);
        const indexFichier = etatExercices.fichiersFormulaire.findIndex(
          (item) => item.id === f.id
        );
        if (indexFichier !== -1) {
          etatExercices.fichiersFormulaire[indexFichier] = {
            ...etatExercices.fichiersFormulaire[indexFichier],
            ...fichierCree,
            enAttenteEnregistrement: false
          };
        }
      }
      const fichiersFinaux = [...dejaEnregistres, ...nouveauxFichiers];
      const cible = idExistant || exerciceEnregistre.id;
      etatExercices.fichiersListe[cible] = fichiersFinaux;
      etatExercices.fichiersFormulaire = fichiersFinaux.map((f) => ({ ...f }));
    }
    return exerciceEnregistre;
  }

  if (idExistant) {
    const index = donneesExercices.exercices.findIndex(
      (exercice) => exercice.id === idExistant
    );
    if (index === -1) throw new Error("Cet exercice n'existe plus.");
    const exercice = {
      ...donneesExercices.exercices[index],
      ...valeurs
    };
    donneesExercices.exercices[index] = exercice;
    sauvegarderExercicesLocaux();
    return exercice;
  }

  const exercice = {
    id: `ex-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    ...valeurs,
    created_at: new Date().toISOString()
  };
  donneesExercices.exercices.push(exercice);
  sauvegarderExercicesLocaux();
  return exercice;
}

async function supprimerExercice(id) {
  const exercice = exerciceParId(id);
  if (!exercice) return;

  if (donneesExercices.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    try {
      const { data: fichiers } = await client.from("exercice_fichiers").select("chemin_stockage").eq("exercice_id", id);
      const chemins = (fichiers || []).map((f) => f.chemin_stockage).filter(Boolean);
      if (chemins.length > 0) {
        await client.storage.from("ressources").remove(chemins);
      }
      await client.from("exercice_fichiers").delete().eq("exercice_id", id);
    } catch (erreur) {
      console.warn("Les pièces jointes n'ont pas pu être supprimées.", erreur);
    }
    const { error } = await client.from("exercices").delete().eq("id", id);
    if (error) throw error;
  }

  donneesExercices.exercices = donneesExercices.exercices.filter(
    (item) => item.id !== id
  );
  if (etatExercices.fichiersListe[id]) delete etatExercices.fichiersListe[id];
  if (donneesExercices.source !== "supabase") sauvegarderExercicesLocaux();
}

function formaterDate(valeur) {
  const date = new Date(valeur);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function formaterNote(note) {
  if (note === null || note === undefined || note === "") return "";
  const valeur = Number(note);
  if (!Number.isFinite(valeur)) return "";
  return valeur.toLocaleString("fr-FR", { maximumFractionDigits: 2 });
}

function libelleStatut(statut) {
  return LIBELLES_STATUT[statut] ?? LIBELLES_STATUT.en_attente;
}

function nombreTravaux(nombre) {
  return `${nombre} ${nombre > 1 ? "travaux" : "travail"}`;
}

function travailSuiviParId(id) {
  return donneesSuivi.travaux.find((travail) => travail.id === id) ?? null;
}

function derniereCorrection(travailId) {
  const corrections = donneesSuivi.corrections
    .filter((correction) => correction.travail_id === travailId)
    .sort((a, b) =>
      String(a.date_correction ?? "").localeCompare(String(b.date_correction ?? ""))
    );
  return corrections[corrections.length - 1] ?? null;
}

function travauxTriesSuivi() {
  return [...donneesSuivi.travaux].sort((a, b) =>
    String(b.date_envoi ?? "").localeCompare(String(a.date_envoi ?? ""))
  );
}

function travauxAffichesSuivi() {
  if (!profil) return [];

  let travaux =
    profil.role === "eleve"
      ? travauxTriesSuivi().filter((travail) => travail.eleve_id === profil.eleveId)
      : travauxTriesSuivi();

  if (profil.role === "encadreur" && etatSuivi.filtreStatut !== "tous") {
    travaux = travaux.filter((travail) => travail.statut === etatSuivi.filtreStatut);
  }

  return travaux;
}

function compterStatutsSuivi() {
  return donneesSuivi.travaux.reduce(
    (compteurs, travail) => {
      compteurs.tous += 1;
      if (Object.hasOwn(LIBELLES_STATUT, travail.statut)) {
        compteurs[travail.statut] += 1;
      } else {
        compteurs.en_attente += 1;
      }
      return compteurs;
    },
    { tous: 0, en_attente: 0, corrige: 0, a_refaire: 0 }
  );
}

function lirePrefillTravail() {
  if (MODE_APERCU || profil?.role !== "eleve") return null;

  try {
    const brut = window.localStorage.getItem(CLE_PREFILL_TRAVAIL);
    if (!brut) return null;
    const valeur = JSON.parse(brut);
    if (!valeur || typeof valeur.titre !== "string") return null;

    if (valeur.eleve_id && valeur.eleve_id !== profil.eleveId) {
      window.localStorage.removeItem(CLE_PREFILL_TRAVAIL);
      return null;
    }

    let matiereId = valeur.matiere_id;
    if (!matiereId && valeur.chapitre_id) {
      matiereId = chapitreParId(valeur.chapitre_id)?.matiere_id ?? null;
    }
    if (!matiereId) return null;

    return { ...valeur, matiere_id: matiereId };
  } catch {
    return null;
  }
}

function effacerPrefillTravail() {
  if (MODE_APERCU) return;
  try {
    window.localStorage.removeItem(CLE_PREFILL_TRAVAIL);
  } catch {
    return;
  }
}

function capturerBrouillonSuivi() {
  const formulaire = document.querySelector("[data-form-travail]");
  if (!formulaire) return etatSuivi.brouillon;

  const donnees = new FormData(formulaire);
  return {
    titre: String(donnees.get("titre") ?? ""),
    message_eleve: String(donnees.get("message_eleve") ?? ""),
    matiere_id: String(donnees.get("matiere_id") ?? "")
  };
}

function filtresStatutSuivi() {
  const compteurs = compterStatutsSuivi();
  const filtres = [
    { id: "tous", libelle: "Tous" },
    { id: "en_attente", libelle: "En attente" },
    { id: "corrige", libelle: "Corrigés" },
    { id: "a_refaire", libelle: "À refaire" }
  ];

  return `
    <div class="suivi-filters" role="group" aria-label="Filtrer les travaux par statut">
      ${filtres
        .map(
          (filtre) => `
            <button
              class="filter-chip filter-chip--count"
              type="button"
              data-filtre-statut="${filtre.id}"
              aria-pressed="${etatSuivi.filtreStatut === filtre.id}"
            >
              ${filtre.libelle}
              <span class="chip-count">${compteurs[filtre.id] ?? 0}</span>
            </button>`
        )
        .join("")}
    </div>`;
}

function statsSuivi() {
  const compteurs = compterStatutsSuivi();

  return `
    <div class="suivi-stats" aria-label="Résumé des travaux">
      <div class="suivi-stat">
        <strong>${compteurs.tous}</strong>
        <span>Travaux</span>
      </div>
      <div class="suivi-stat suivi-stat--attente">
        <strong>${compteurs.en_attente}</strong>
        <span>En attente</span>
      </div>
      <div class="suivi-stat suivi-stat--corrige">
        <strong>${compteurs.corrige}</strong>
        <span>Corrigés</span>
      </div>
    </div>`;
}

function blocSoumissionSuivi(prefill) {
  const brouillon = etatSuivi.brouillon;
  const exerciceLie = prefill?.exercice_id ? exerciceParId(prefill.exercice_id) : null;
  const chapitreLie = prefill?.chapitre_id ? chapitreParId(prefill.chapitre_id) : null;
  const matiereLiee = prefill?.matiere_id ? matiereParId(prefill.matiere_id) : null;

  const titre = brouillon?.titre ?? prefill?.titre ?? "";
  const message = brouillon?.message_eleve ?? "";
  const matiereSelectionnee =
    brouillon?.matiere_id ??
    prefill?.matiere_id ??
    donneesExercices.matieres[0]?.id ??
    "";

  const chapitrePrefill =
    chapitreLie?.titre ??
    (typeof prefill?.chapitre === "string" ? prefill.chapitre : "");
  const lienDetails = [matiereLiee?.nom, chapitrePrefill, chapitreLie?.niveau]
    .filter(Boolean)
    .map((valeur) => echapper(valeur))
    .join(" · ");

  const photo = etatSuivi.photo;

  return `
    <section class="suivi-submit-card" aria-labelledby="titre-soumission">
      <div class="suivi-card-head">
        <span class="suivi-card-icon">${icone("send", 22)}</span>
        <div>
          <p class="modal-kicker">Nouveau travail</p>
          <h2 id="titre-soumission">Envoyer un travail</h2>
          <p>Ajoute un message ou une photo pour expliquer ta démarche.</p>
        </div>
      </div>

      ${
        prefill
          ? `<div class="linked-exercise">
              <span class="linked-exercise-icon">${icone("notebook-pen", 19)}</span>
              <div class="linked-exercise-copy">
                <span>Exercice lié</span>
                <strong>${echapper(exerciceLie?.titre ?? prefill.titre)}</strong>
                ${lienDetails ? `<small>${lienDetails}</small>` : ""}
              </div>
              <button
                class="icon-btn"
                type="button"
                data-action="retirer-prefill"
                aria-label="Retirer l'exercice lié"
              >${icone("x", 18)}</button>
            </div>`
          : ""
      }

      <form class="exercise-form suivi-form" data-form-travail>
        ${
          prefill
            ? `<input type="hidden" name="matiere_id" value="${echapper(matiereSelectionnee)}" />
               <input type="hidden" name="chapitre_id" value="${echapper(prefill.chapitre_id ?? "")}" />
               <input type="hidden" name="exercice_id" value="${echapper(prefill.exercice_id ?? "")}" />`
            : `<label class="form-field" for="travail-matiere">
                <span>Matière</span>
                <select id="travail-matiere" name="matiere_id" required>
                  ${donneesExercices.matieres
                    .map(
                      (matiere) => `
                        <option
                          value="${echapper(matiere.id)}"
                          ${matiere.id === matiereSelectionnee ? "selected" : ""}
                        >${echapper(matiere.nom)}</option>`
                    )
                    .join("")}
                </select>
              </label>`
        }

        <label class="form-field" for="travail-titre">
          <span>Titre du travail</span>
          <input
            id="travail-titre"
            name="titre"
            type="text"
            value="${echapper(titre)}"
            maxlength="120"
            placeholder="Ex. Exercice 12 page 45"
            required
          />
        </label>

        <label class="form-field" for="travail-message">
          <span>Message</span>
          <textarea
            id="travail-message"
            name="message_eleve"
            rows="5"
            placeholder="Explique ce que tu as fait, ce qui te bloque ou ce que tu veux vérifier…"
          >${echapper(message)}</textarea>
        </label>

        <div class="photo-field">
          <span class="form-label">Photo</span>
          ${
            photo
              ? `<div class="photo-preview">
                  <img src="${echapper(photo.dataUrl)}" alt="Aperçu de la photo du travail" />
                  <div class="photo-preview-copy">
                    <span>${echapper(photo.nom)}</span>
                    <button class="text-btn" type="button" data-action="retirer-photo">
                      Retirer la photo
                    </button>
                  </div>
                </div>`
              : ""
          }
          ${
            etatSuivi.photoEnCours
              ? `<p class="field-hint" data-photo-status>Préparation de la photo…</p>`
              : ""
          }
          ${
            etatSuivi.photoErreur
              ? `<p class="form-error" data-photo-error role="alert">${echapper(etatSuivi.photoErreur)}</p>`
              : ""
          }
          <input
            class="file-input"
            id="travail-photo"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            data-photo-travail
            ${etatSuivi.photoEnCours ? "disabled" : ""}
          />
          <label class="photo-picker ${etatSuivi.photoEnCours ? "photo-picker--disabled" : ""}" for="travail-photo">
            ${icone("image", 17)}
            <span>${photo ? "Changer la photo" : "Ajouter une photo"}</span>
          </label>
          <p class="field-hint">JPG, PNG ou WebP · 5 Mo maximum. La photo est allégée automatiquement.</p>
        </div>

        <p class="form-error" data-travail-error role="alert" hidden></p>
        <button class="btn btn-primary btn-block" type="submit">
          ${icone("send", 18)} Envoyer le travail
        </button>
      </form>
    </section>`;
}

function carteTravailSuivi(travail) {
  const statut = Object.hasOwn(LIBELLES_STATUT, travail.statut)
    ? travail.statut
    : "en_attente";
  const eleve = eleves.find((item) => item.id === travail.eleve_id);
  const matiere = matiereParId(travail.matiere_id);
  const chapitre = travail.chapitre_id ? chapitreParId(travail.chapitre_id) : null;
  const correction = derniereCorrection(travail.id);
  const note = formaterNote(correction?.note);
  const date = formaterDate(travail.date_envoi);
  const aidesIa =
    profil?.role === "encadreur" ? aidesIaDuTravail(travail.id) : [];
  const whatsappCorrection =
    profil?.role === "encadreur" && eleve && ["corrige", "a_refaire"].includes(statut)
      ? boutonWhatsApp(
          eleve.telephone_contact,
          statut === "a_refaire"
            ? `Bonjour ${eleve.prenom}, merci de reprendre ton travail « ${travail.titre} » et de le renvoyer sur Monitoring Student.`
            : `Bonjour ${eleve.prenom}, j'ai corrigé ton travail « ${travail.titre} » sur Monitoring Student. Connecte-toi pour voir ma correction.`,
          "Prévenir l'élève sur WhatsApp",
          { afficherSiAbsent: true, classe: "btn btn-secondary btn-block" }
        )
      : "";

  const morceaux = [];
  if (profil?.role === "encadreur") {
    morceaux.push(eleve ? nomComplet(eleve) : "Élève");
  }
  if (matiere) morceaux.push(matiere.nom);
  if (chapitre) morceaux.push(chapitre.titre);
  if (date) morceaux.push(date);

  return `
    <article class="work-card">
      <header class="work-card-head">
        <span
          class="work-mark"
          style="--matiere-couleur:${echapper(matiere?.couleur ?? "#1D4ED8")}"
          aria-hidden="true"
        ></span>
        <div class="work-title-wrap">
          <h3>${echapper(travail.titre)}</h3>
          <p class="work-meta">${morceaux.map((valeur) => echapper(valeur)).join(" · ")}</p>
        </div>
        <span class="status-badge status-badge--${statut}">${libelleStatut(statut)}</span>
      </header>

      ${
        travail.message_eleve
          ? `<p class="work-message">${echapper(travail.message_eleve)}</p>`
          : ""
      }

      ${
        travail.photo_url
          ? `<img
              class="work-photo"
              src="${echapper(travail.photo_url)}"
              alt="Photo jointe au travail ${echapper(travail.titre)}"
              loading="lazy"
            />`
          : ""
      }

      ${
        correction
          ? `<div class="work-correction work-correction--${statut}">
              <div class="correction-head">
                <span>Correction</span>
                ${note !== "" ? `<strong>${note}/20</strong>` : ""}
              </div>
              <p>${echapper(correction.commentaire)}</p>
            </div>`
          : ""
      }

      ${
        aidesIa.length > 0
          ? `<div class="work-aides-ia">
              <div class="work-aides-ia-head">
                ${icone("sparkles", 15)}
                <span>Aides IA utilisées</span>
                <span class="work-aides-ia-count">${aidesIa.length}</span>
              </div>
              <details class="assistant-conv-details">
                <summary>Voir les échanges</summary>
                <div class="assistant-thread assistant-thread--lecture">
                  ${aidesIa.map(bulleMessageAssistant).join("")}
                </div>
              </details>
            </div>`
          : ""
      }

      <div class="work-actions">
        <button
          class="btn btn-secondary btn-block"
          type="button"
          data-action="ouvrir-travail"
          data-id="${echapper(travail.id)}"
        >
          ${icone(profil?.role === "encadreur" ? "pencil" : "check-circle", 17)}
          ${
            profil?.role === "encadreur"
              ? correction
                ? "Modifier la correction"
                : "Corriger le travail"
              : correction
                ? "Voir la correction"
                : "Voir le détail"
          }
        </button>
      </div>

      ${whatsappCorrection ? `<div class="work-whatsapp">${whatsappCorrection}</div>` : ""}
    </article>`;
}

function afficherErreurCorrection(message) {
  etatSuivi.erreurCorrection = message;
  const zone = document.querySelector("[data-correction-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function appliquerCorrectionLocale(correction, travailId, statut) {
  const index = donneesSuivi.corrections.findIndex(
    (item) => item.id === correction.id
  );
  if (index >= 0) {
    donneesSuivi.corrections[index] = correction;
  } else {
    donneesSuivi.corrections.push(correction);
  }

  const travail = travailSuiviParId(travailId);
  if (travail) travail.statut = statut;
}

function fermerModalesSuivi() {
  etatSuivi.travailOuvertId = null;
  etatSuivi.erreurCorrection = "";
}

function ouvrirTravailSuivi(id) {
  if (!travailSuiviParId(id)) return;
  etatSuivi.travailOuvertId = id;
  etatSuivi.erreurCorrection = "";
  etatSuivi.succes = "";
  rendre();
  window.setTimeout(() => {
    document.querySelector(".modal-sheet .icon-btn")?.focus();
  }, 30);
}

function modaleTravailSuivi() {
  const travail = travailSuiviParId(etatSuivi.travailOuvertId);
  if (!travail) return "";

  const statut = Object.hasOwn(LIBELLES_STATUT, travail.statut)
    ? travail.statut
    : "en_attente";
  const eleve = eleves.find((item) => item.id === travail.eleve_id);
  const matiere = matiereParId(travail.matiere_id);
  const chapitre = travail.chapitre_id ? chapitreParId(travail.chapitre_id) : null;
  const correction = derniereCorrection(travail.id);
  const note = formaterNote(correction?.note);
  const appreciation = correction?.commentaire ?? "";
  const dateEnvoi = formaterDate(travail.date_envoi);
  const dateCorrection = correction
    ? formaterDate(correction.date_correction)
    : "";
  const statutCorrection = ["corrige", "a_refaire"].includes(statut)
    ? statut
    : "corrige";
  const estEncadreur = profil?.role === "encadreur";

  const morceaux = [];
  if (estEncadreur && eleve) morceaux.push(nomComplet(eleve));
  if (matiere) morceaux.push(matiere.nom);
  if (chapitre) morceaux.push(chapitre.titre);
  if (dateEnvoi) morceaux.push(dateEnvoi);

  const correctionBloc = correction
    ? `<div class="work-correction work-correction--${statutCorrection}">
        <div class="correction-head">
          <span>Correction</span>
          ${note !== "" ? `<strong>${note}/20</strong>` : ""}
        </div>
        <p>${echapper(correction.commentaire)}</p>
        ${
          dateCorrection
            ? `<p class="correction-date">Corrigé le ${echapper(dateCorrection)}</p>`
            : ""
        }
      </div>`
    : `<div class="detail-note correction-readonly">
        <p>${
          estEncadreur
            ? "Aucune correction enregistrée pour ce travail."
            : "Aucune correction pour le moment. Ton encadreur doit encore corriger ce travail."
        }</p>
      </div>`;

  const formulaire = estEncadreur
    ? `<form
        class="exercise-form correction-form"
        data-form-correction-travail
        data-id="${echapper(travail.id)}"
      >
        <div class="correction-form-head">
          <h3>${correction ? "Modifier la correction" : "Corriger le travail"}</h3>
          <p>Attribue une note sur 20 et rédige une appréciation.</p>
        </div>

        <label class="form-field" for="correction-note">
          <span>Note sur 20</span>
          <input
            id="correction-note"
            name="note"
            type="number"
            min="0"
            max="20"
            step="1"
            inputmode="numeric"
            required
            value="${echapper(note)}"
          />
        </label>

        <label class="form-field" for="correction-commentaire">
          <span>Appréciation</span>
          <textarea
            id="correction-commentaire"
            name="commentaire"
            rows="5"
            required
            placeholder="Explique à l'élève ce qui est réussi et ce qu'il doit revoir."
          >${echapper(appreciation)}</textarea>
        </label>

        <label class="form-field" for="correction-statut">
          <span>Statut du travail</span>
          <select id="correction-statut" name="statut">
            <option value="corrige" ${statutCorrection === "corrige" ? "selected" : ""}>
              Corrigé
            </option>
            <option value="a_refaire" ${statutCorrection === "a_refaire" ? "selected" : ""}>
              À refaire
            </option>
          </select>
        </label>

        <p class="form-error" data-correction-error role="alert" ${etatSuivi.erreurCorrection ? "" : "hidden"}>
          ${echapper(etatSuivi.erreurCorrection)}
        </p>

        <div class="form-actions">
          <button class="btn btn-secondary" type="button" data-action="fermer-modale">
            Annuler
          </button>
          <button class="btn btn-primary" type="submit">
            ${icone("check-circle", 18)} Enregistrer la correction
          </button>
        </div>
      </form>`
    : "";

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section
        class="modal-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-detail-travail"
      >
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <div class="detail-badges">
            <span class="status-badge status-badge--${statut}">${libelleStatut(statut)}</span>
            ${
              matiere
                ? `<span class="subject-label" style="--matiere-couleur:${echapper(matiere.couleur ?? "#1D4ED8")}">${echapper(matiere.nom)}</span>`
                : ""
            }
            ${chapitre ? `<span class="subject-label">${echapper(chapitre.titre)}</span>` : ""}
          </div>

          <h2 id="titre-detail-travail">${echapper(travail.titre)}</h2>
          <p class="work-meta">${morceaux.map((valeur) => echapper(valeur)).join(" · ")}</p>

          ${
            travail.message_eleve
              ? `<p class="work-message">${echapper(travail.message_eleve)}</p>`
              : ""
          }

          ${
            travail.photo_url
              ? `<img
                  class="work-photo"
                  src="${echapper(travail.photo_url)}"
                  alt="Photo jointe au travail ${echapper(travail.titre)}"
                />`
              : ""
          }

          ${correctionBloc}
          ${formulaire}
        </div>
      </section>
    </div>`;
}

async function enregistrerCorrectionTravail(formulaire) {
  if (profil?.role !== "encadreur") return;

  const travailId = formulaire.dataset.id;
  const travail = travailSuiviParId(travailId);
  if (!travail) {
    afficherErreurCorrection("Ce travail est introuvable.");
    return;
  }

  const donnees = new FormData(formulaire);
  const noteBrute = String(donnees.get("note") ?? "").trim();
  const commentaire = String(donnees.get("commentaire") ?? "").trim();
  const statut = String(donnees.get("statut") ?? "");
  const note = Number(noteBrute);

  if (!noteBrute || !Number.isInteger(note) || note < 0 || note > 20) {
    afficherErreurCorrection("La note doit être un nombre entier entre 0 et 20.");
    document.getElementById("correction-note")?.focus();
    return;
  }
  if (!commentaire) {
    afficherErreurCorrection("L'appréciation est obligatoire.");
    document.getElementById("correction-commentaire")?.focus();
    return;
  }
  if (!["corrige", "a_refaire"].includes(statut)) {
    afficherErreurCorrection("Choisis le statut du travail.");
    document.getElementById("correction-statut")?.focus();
    return;
  }
  if (
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !["supabase", "demo"].includes(donneesSuivi.source)
  ) {
    afficherErreurCorrection(
      "Le suivi n'est pas encore connecté. Réessaie dans quelques instants."
    );
    return;
  }

  const correctionExistante = derniereCorrection(travailId);
  const restaurerBouton = boutonEnCours(formulaire, "Enregistrement…");

  try {
    let correctionEnregistree;

    if (donneesSuivi.source === "supabase") {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);

      if (correctionExistante) {
        const { data, error } = await client
          .from("corrections")
          .update({
            commentaire,
            note,
            date_correction: new Date().toISOString()
          })
          .eq("id", correctionExistante.id)
          .select(
            "id, travail_id, commentaire, note, audio_url, date_correction"
          )
          .single();

        if (error) throw error;
        if (!data) {
          throw new Error("La correction enregistrée est introuvable.");
        }
        correctionEnregistree = data;
      } else {
        const { data, error } = await client
          .from("corrections")
          .insert({ travail_id: travailId, commentaire, note })
          .select(
            "id, travail_id, commentaire, note, audio_url, date_correction"
          )
          .single();

        if (error) throw error;
        if (!data) {
          throw new Error("La correction enregistrée est introuvable.");
        }
        correctionEnregistree = data;
      }

      const { data: travailMisAJour, error: erreurStatut } = await client
        .from("travaux")
        .update({ statut })
        .eq("id", travailId)
        .select("id, statut")
        .single();

      if (erreurStatut || !travailMisAJour) {
        if (correctionExistante) {
          const { error: erreurRestauration } = await client
            .from("corrections")
            .update({
              commentaire: correctionExistante.commentaire,
              note: correctionExistante.note,
              date_correction: correctionExistante.date_correction
            })
            .eq("id", correctionExistante.id);
          if (erreurRestauration) {
            console.warn(
              "L'ancienne correction n'a pas pu être restaurée.",
              erreurRestauration
            );
          }
        } else {
          const { error: erreurSuppression } = await client
            .from("corrections")
            .delete()
            .eq("id", correctionEnregistree.id);
          if (erreurSuppression) {
            console.warn(
              "La correction partielle n'a pas pu être supprimée.",
              erreurSuppression
            );
          }
        }

        throw (
          erreurStatut ??
          new Error("Le statut du travail n'a pas pu être mis à jour.")
        );
      }
    } else {
      correctionEnregistree = {
        id:
          correctionExistante?.id ??
          `correction-${Date.now().toString(36)}-${Math.random()
            .toString(36)
            .slice(2, 8)}`,
        travail_id: travailId,
        commentaire,
        note,
        audio_url: correctionExistante?.audio_url ?? null,
        date_correction: new Date().toISOString()
      };
    }

    appliquerCorrectionLocale(correctionEnregistree, travailId, statut);
    if (donneesSuivi.source !== "supabase") persisterSuiviLocal();

    etatSuivi.erreurCorrection = "";
    etatSuivi.travailOuvertId = null;
    etatSuivi.succes = "La correction a bien été enregistrée.";
    rendre();
    window.setTimeout(() => {
      document
        .querySelector(".suivi-success")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  } catch (erreur) {
    console.warn("La correction n'a pas pu être enregistrée.", erreur);
    restaurerBouton();
    const message =
      erreur && !erreur.code && !erreur.details && !erreur.hint
        ? erreur.message
        : "";
    afficherErreurCorrection(
      message || "La correction n'a pas pu être enregistrée. Réessaie."
    );
  }
}

function contenuTravauxSuivi() {
  if (etatSuivi.chargement) {
    return `
      <div class="exercise-status" role="status">
        <span class="loading-ring" aria-hidden="true"></span>
        <p>Chargement des travaux…</p>
      </div>`;
  }

  if (etatSuivi.erreur) {
    return `
      <div class="exercise-status exercise-status--error" role="alert">
        <span class="status-icon">${icone("alert-circle", 25)}</span>
        <h2>Les travaux n'ont pas pu être chargés</h2>
        <p>${echapper(etatSuivi.erreur)}</p>
        <button class="btn btn-secondary" type="button" data-action="recharger-suivi">
          ${icone("refresh-cw", 17)} Réessayer
        </button>
      </div>`;
  }

  const travaux = travauxAffichesSuivi();
  if (travaux.length === 0) {
    const message =
      profil?.role === "eleve"
        ? "Tu n'as pas encore envoyé de travail."
        : etatSuivi.filtreStatut === "tous"
          ? "Aucun travail n'a encore été envoyé."
          : "Aucun travail ne correspond à ce statut.";

    return `
      <div class="exercise-status">
        <span class="status-icon">${icone("chart-no-axes-column", 25)}</span>
        <h2>${message}</h2>
        <p>${
          profil?.role === "eleve"
            ? "Choisis un exercice puis envoie ton travail pour recevoir une correction."
            : "Les travaux envoyés par les élèves apparaîtront ici."
        }</p>
      </div>`;
  }

  return `<div class="work-list">${travaux.map((travail) => carteTravailSuivi(travail)).join("")}</div>`;
}

function ecranSuivi() {
  const prefill = lirePrefillTravail();
  const entetePage = `
    <header class="page-head">
      <p class="page-kicker">Mon suivi</p>
      <h1 id="titre-suivi">Suivi du travail</h1>
      <p>${
        profil?.role === "encadreur"
          ? "Retrouve les travaux envoyés et leur état de correction."
          : "Envoie tes travaux et consulte les corrections de l'encadreur."
      }</p>
    </header>`;

  if (!profil) {
    return `
      <section class="suivi-page" aria-labelledby="titre-suivi">
        ${entetePage}
        <div class="exercise-status">
          <span class="status-icon">${icone("graduation-cap", 25)}</span>
          <h2>Choisis ton profil</h2>
          <p>Il faut choisir un profil pour consulter et envoyer des travaux.</p>
          <button class="btn btn-primary" type="button" data-action="aller-accueil">
            Choisir mon profil
          </button>
        </div>
      </section>`;
  }

  if (profil.role === "eleve") {
    const travauxEleve = travauxAffichesSuivi();
    const pretASoumettre = !etatSuivi.chargement && !etatSuivi.erreur;

    return `
      <section class="suivi-page" aria-labelledby="titre-suivi">
        ${entetePage}
        ${
          etatSuivi.succes
            ? `<div class="suivi-success" role="status">
                <span class="suivi-success-icon">${icone("check-circle", 20)}</span>
                <div class="suivi-success-body">
                  <p>${echapper(etatSuivi.succes)}</p>
                  ${
                    etatSuivi.dernierTravail && profil.encadreurTelephone
                      ? boutonWhatsApp(
                          profil.encadreurTelephone,
                          `Bonjour, j'ai envoyé un nouveau travail sur Monitoring Student : « ${etatSuivi.dernierTravail.titre} ».`,
                          "Prévenir mon encadreur sur WhatsApp"
                        )
                      : ""
                  }
                </div>
              </div>`
            : ""
        }
        ${pretASoumettre ? blocSoumissionSuivi(prefill) : ""}
        <div class="results-head">
          <h2>Mes travaux</h2>
          <span>${etatSuivi.chargement ? "…" : nombreTravaux(travauxEleve.length)}</span>
        </div>
        ${contenuTravauxSuivi()}
      </section>
      ${modaleTravailSuivi()}`;
  }

  const travauxEncadreur = travauxAffichesSuivi();

  return `
    <section class="suivi-page" aria-labelledby="titre-suivi">
      ${entetePage}
      ${
        etatSuivi.succes
          ? `<div class="suivi-success" role="status">
              <span class="suivi-success-icon">${icone("check-circle", 20)}</span>
              <div class="suivi-success-body">
                <p>${echapper(etatSuivi.succes)}</p>
              </div>
            </div>`
          : ""
      }
      ${statsSuivi()}
      ${filtresStatutSuivi()}
      <div class="results-head">
        <h2>Travaux des élèves</h2>
        <span>${etatSuivi.chargement ? "…" : nombreTravaux(travauxEncadreur.length)}</span>
      </div>
      ${contenuTravauxSuivi()}
    </section>
    ${modaleTravailSuivi()}`;
}

function afficherErreurFormulaireTravail(message) {
  const zone = document.querySelector("[data-travail-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function initialiserSuiviLocal() {
  try {
    const brut = window.localStorage.getItem(CLE_SUIVI_LOCAL);
    if (!brut) return;
    const valeur = JSON.parse(brut);
    if (!Array.isArray(valeur?.travaux) || !Array.isArray(valeur?.corrections)) {
      return;
    }

    donneesSuivi.travaux = valeur.travaux.filter(
      (travail) =>
        travail &&
        typeof travail.id === "string" &&
        typeof travail.eleve_id === "string" &&
        typeof travail.matiere_id === "string" &&
        typeof travail.titre === "string"
    );
    donneesSuivi.corrections = valeur.corrections.filter(
      (correction) =>
        correction &&
        typeof correction.id === "string" &&
        typeof correction.travail_id === "string" &&
        typeof correction.commentaire === "string"
    );
  } catch {
    donneesSuivi.travaux = [...TRAVAUX_EXEMPLE];
    donneesSuivi.corrections = [...CORRECTIONS_EXEMPLE];
  }
}

function persisterSuiviLocal(
  travaux = donneesSuivi.travaux,
  corrections = donneesSuivi.corrections
) {
  if (MODE_APERCU) return;
  try {
    window.localStorage.setItem(
      CLE_SUIVI_LOCAL,
      JSON.stringify({ travaux, corrections })
    );
  } catch {
    throw new Error(
      "Le travail n'a pas pu être enregistré dans ce navigateur. Essaie sans photo."
    );
  }
}

function compresserImagePourExercice(fichier) {
  return new Promise((resoudre, rejeter) => {
    if (!fichier.type?.startsWith("image/")) {
      rejeter(new Error("Ce fichier n'est pas une image."));
      return;
    }
    if (fichier.size > 50 * 1024 * 1024) {
      rejeter(new Error("Le fichier dépasse la taille maximale de 50 Mo."));
      return;
    }

    const lecteur = new FileReader();
    lecteur.onerror = () => rejeter(new Error("L'image n'a pas pu être lue."));
    lecteur.onload = () => {
      const image = new Image();
      image.onerror = () => rejeter(new Error("Ce fichier image n'est pas valide."));
      image.onload = () => {
        try {
          const echelle = Math.min(1, 1600 / Math.max(image.width, image.height));
          const largeur = Math.max(1, Math.round(image.width * echelle));
          const hauteur = Math.max(1, Math.round(image.height * echelle));
          const canvas = document.createElement("canvas");
          canvas.width = largeur;
          canvas.height = hauteur;
          const contexte = canvas.getContext("2d");
          contexte.drawImage(image, 0, 0, largeur, hauteur);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.75);
          fetch(dataUrl)
            .then((r) => r.blob())
            .then((blob) => {
              const fichierCompresse = new File([blob], fichier.name.replace(/\.[^/.]+$/, "") + ".jpg", { type: "image/jpeg" });
              resoudre(fichierCompresse);
            })
            .catch((erreur) => rejeter(erreur));
        } catch (erreur) {
          rejeter(erreur);
        }
      };
      image.src = String(lecteur.result);
    };
    lecteur.readAsDataURL(fichier);
  });
}

function compresserImage(fichier) {
  return new Promise((resoudre, rejeter) => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(fichier.type)) {
      rejeter(new Error("Choisis une image au format JPG, PNG ou WebP."));
      return;
    }
    if (fichier.size > 5 * 1024 * 1024) {
      rejeter(new Error("La photo ne doit pas dépasser 5 Mo."));
      return;
    }

    const lecteur = new FileReader();
    lecteur.onerror = () => rejeter(new Error("La photo n'a pas pu être lue."));
    lecteur.onload = () => {
      const image = new Image();
      image.onerror = () => rejeter(new Error("Ce fichier image n'est pas valide."));
      image.onload = () => {
        try {
          const echelle = Math.min(1, 1200 / Math.max(image.width, image.height));
          const largeur = Math.max(1, Math.round(image.width * echelle));
          const hauteur = Math.max(1, Math.round(image.height * echelle));
          const canvas = document.createElement("canvas");
          canvas.width = largeur;
          canvas.height = hauteur;

          const contexte = canvas.getContext("2d");
          if (!contexte) throw new Error("La photo n'a pas pu être préparée.");

          contexte.fillStyle = "#ffffff";
          contexte.fillRect(0, 0, largeur, hauteur);
          contexte.drawImage(image, 0, 0, largeur, hauteur);

          const dataUrl = canvas.toDataURL("image/jpeg", 0.78);
          if (dataUrl.length > 2500000) {
            throw new Error("La photo est encore trop lourde. Choisis une image plus légère.");
          }

          resoudre({ dataUrl, nom: fichier.name, type: "image/jpeg" });
        } catch (erreur) {
          rejeter(erreur);
        }
      };
      image.src = String(lecteur.result);
    };
    lecteur.readAsDataURL(fichier);
  });
}

async function envoyerPhotoVersSupabase(client, photo) {
  const reponse = await fetch(photo.dataUrl);
  const blob = await reponse.blob();
  const extension = blob.type === "image/png" ? "png" : blob.type === "image/webp" ? "webp" : "jpg";
  const chemin = `${profil.eleveId}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}.${extension}`;

  const { error } = await client.storage
    .from("travaux")
    .upload(chemin, blob, { contentType: blob.type, upsert: false });
  if (error) throw error;

  return { chemin };
}

function creerTravailLocal(valeurs) {
  const travail = {
    id: `travail-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    eleve_id: profil.eleveId,
    matiere_id: valeurs.matiere_id,
    chapitre_id: valeurs.chapitre_id,
    exercice_id: valeurs.exercice_id,
    titre: valeurs.titre,
    message_eleve: valeurs.message_eleve,
    photo_url: etatSuivi.photo?.dataUrl ?? null,
    statut: "en_attente",
    date_envoi: new Date().toISOString()
  };

  const travaux = [travail, ...donneesSuivi.travaux];
  persisterSuiviLocal(travaux, donneesSuivi.corrections);
  donneesSuivi.travaux = travaux;
  return travail;
}

async function envoyerTravail(formulaire) {
  if (profil?.role !== "eleve") return;

  const donnees = new FormData(formulaire);
  const titre = String(donnees.get("titre") ?? "").trim();
  const message = String(donnees.get("message_eleve") ?? "").trim();
  const matiereId = String(donnees.get("matiere_id") ?? "");
  const chapitreIdDemande = String(donnees.get("chapitre_id") ?? "");
  const exerciceIdDemande = String(donnees.get("exercice_id") ?? "");
  const chapitre = chapitreParId(chapitreIdDemande);
  const exercice = exerciceParId(exerciceIdDemande);

  if (!titre) {
    afficherErreurFormulaireTravail("Le titre du travail est obligatoire.");
    document.getElementById("travail-titre")?.focus();
    return;
  }
  if (!matiereParId(matiereId)) {
    afficherErreurFormulaireTravail("Choisis une matière.");
    document.getElementById("travail-matiere")?.focus();
    return;
  }
  if (!message && !etatSuivi.photo) {
    afficherErreurFormulaireTravail(
      "Ajoute un message ou une photo pour expliquer ton travail."
    );
    document.getElementById("travail-message")?.focus();
    return;
  }
  if (etatSuivi.photoEnCours) {
    afficherErreurFormulaireTravail("Attends la fin de la préparation de la photo.");
    return;
  }
  if (SUPABASE_URL && SUPABASE_ANON_KEY && donneesSuivi.source !== "supabase") {
    afficherErreurFormulaireTravail(
      "Le suivi n'est pas encore connecté. Réessaie dans quelques instants."
    );
    return;
  }

  const valeurs = {
    titre,
    message_eleve: message || null,
    matiere_id: matiereId,
    chapitre_id: chapitre?.id ?? null,
    exercice_id: exercice?.id ?? null
  };

  const bouton = formulaire.querySelector('button[type="submit"]');
  const contenuInitial = bouton?.innerHTML ?? "";
  if (bouton) {
    bouton.disabled = true;
    bouton.textContent = "Envoi en cours…";
  }

  try {
    if (donneesSuivi.source === "supabase") {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);

      let photo = null;
      if (etatSuivi.photo) {
        photo = await envoyerPhotoVersSupabase(client, etatSuivi.photo);
      }

      const { data, error } = await client
        .from("travaux")
        .insert({
          eleve_id: profil.eleveId,
          matiere_id: valeurs.matiere_id,
          chapitre_id: valeurs.chapitre_id,
          exercice_id: valeurs.exercice_id,
          titre: valeurs.titre,
          message_eleve: valeurs.message_eleve,
          photo_url: photo?.chemin ?? null,
          statut: "en_attente"
        })
        .select(
          "id, eleve_id, matiere_id, chapitre_id, exercice_id, titre, message_eleve, photo_url, statut, date_envoi"
        )
        .single();

      if (error) {
        if (photo?.chemin) {
          await client.storage.from("travaux").remove([photo.chemin]);
        }
        throw error;
      }
      if (!data) {
        throw new Error("Le travail a été enregistré, mais sa confirmation est introuvable.");
      }

      const [travailAvecPhoto] = await resoudrePhotosTravaux(client, [data]);
      donneesSuivi.travaux = [
        travailAvecPhoto ?? data,
        ...donneesSuivi.travaux
      ];
    } else {
      creerTravailLocal(valeurs);
    }

    etatSuivi.dernierTravail = { titre: valeurs.titre };
    etatSuivi.brouillon = null;
    etatSuivi.photo = null;
    etatSuivi.photoEnCours = false;
    etatSuivi.photoErreur = "";
    etatSuivi.succes =
      "Ton travail a bien été envoyé. Tu peux suivre sa correction dans la liste ci-dessous.";
    effacerPrefillTravail();
    rendre();
    window.setTimeout(() => {
      document
        .querySelector(".suivi-success")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  } catch (erreur) {
    console.warn("Le travail n'a pas pu être envoyé.", erreur);
    if (bouton) {
      bouton.disabled = false;
      bouton.innerHTML = contenuInitial;
    }
    afficherErreurFormulaireTravail(
      erreur?.message || "Le travail n'a pas pu être envoyé. Réessaie."
    );
  }
}

async function ouvrirFichierExercice(fichier) {
  if (!fichier?.chemin_stockage) return;
  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { data, error } = await client.storage
      .from("ressources")
      .createSignedUrl(fichier.chemin_stockage, 3600);
    if (error) throw error;
    const url = data?.signedUrl;
    if (!url) throw new Error("Impossible d'ouvrir le fichier.");
    const type = (fichier.type_mime || "").toLowerCase();
    const nom = fichier.nom_fichier || "";
    if (type.startsWith("video/") || nom.toLowerCase().endsWith(".mp4") || nom.toLowerCase().endsWith(".webm") || nom.toLowerCase().endsWith(".mov")) {
      ouvrirLecteurMedia(url, { type: "video", titre: nom });
      return;
    }
    if (type.startsWith("audio/") || nom.toLowerCase().endsWith(".mp3") || nom.toLowerCase().endsWith(".wav") || nom.toLowerCase().endsWith(".ogg")) {
      ouvrirLecteurMedia(url, { type: "audio", titre: nom });
      return;
    }
    if (type.includes("image") || nom.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp|bmp)$/)) {
      ouvrirApercuImage(url, nom);
      return;
    }
    if (type.includes("pdf") || nom.toLowerCase().endsWith(".pdf")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  } catch (erreur) {
    console.warn("Le fichier n'a pas pu être ouvert.", erreur);
    afficherErreurDetail(erreur?.message || "Le fichier n'a pas pu être ouvert. Réessaie.");
  }
}

function ouvrirApercuImage(url, nom) {
  const ancien = document.getElementById("apercu-image-exercice");
  if (ancien) ancien.remove();
  const overlay = document.createElement("div");
  overlay.id = "apercu-image-exercice";
  overlay.className = "apercu-image-overlay";
  overlay.innerHTML = `
    <div class="apercu-image-backdrop" data-fermer-apercu></div>
    <div class="apercu-image-contenu">
      <button class="icon-btn apercu-image-fermer" type="button" data-fermer-apercu aria-label="Fermer">${icone("x", 22)}</button>
      <img src="${echapper(url)}" alt="${echapper(nom)}" />
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-fermer-apercu")) overlay.remove();
  });
}

function ouvrirLecteurMedia(url, options) {
  const ancien = document.getElementById("lecteur-media-exercice");
  if (ancien) ancien.remove();
  const overlay = document.createElement("div");
  overlay.id = "lecteur-media-exercice";
  overlay.className = "lecteur-media-overlay";
  const type = options?.type || "video";
  overlay.innerHTML = `
    <div class="lecteur-media-backdrop" data-fermer-media></div>
    <div class="lecteur-media-contenu">
      <div class="lecteur-media-entete">
        <span>${echapper(options?.titre || "")}</span>
        <button class="icon-btn" type="button" data-fermer-media aria-label="Fermer">${icone("x", 20)}</button>
      </div>
      <div class="lecteur-media-corps">
        ${
          type === "video"
            ? `<video src="${echapper(url)}" controls preload="metadata"></video>`
            : `<audio src="${echapper(url)}" controls preload="metadata"></audio>`
        }
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-fermer-media")) overlay.remove();
  });
}

async function chargerSuiviDepuisSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

  etatSuivi.chargement = true;
  etatSuivi.erreur = "";
  if (cheminActuel() === "/suivi") rendre();

  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const [reponseTravaux, reponseCorrections] = await Promise.all([
      client
        .from("travaux")
        .select(
          "id, eleve_id, matiere_id, chapitre_id, exercice_id, titre, message_eleve, photo_url, statut, date_envoi"
        )
        .order("date_envoi", { ascending: false }),
      client
        .from("corrections")
        .select("id, travail_id, commentaire, note, audio_url, date_correction")
        .order("date_correction", { ascending: true })
    ]);

    const erreur = reponseTravaux.error ?? reponseCorrections.error;
    if (erreur) throw erreur;
    if (
      !Array.isArray(reponseTravaux.data) ||
      !Array.isArray(reponseCorrections.data)
    ) {
      throw new Error("Les données reçues sont incomplètes.");
    }

    donneesSuivi.travaux = reponseTravaux.data;
    donneesSuivi.corrections = reponseCorrections.data;
    donneesSuivi.source = "supabase";
    etatSuivi.erreur = "";
  } catch (erreur) {
    console.warn("Les travaux n'ont pas pu être chargés depuis Supabase.", erreur);
    etatSuivi.erreur =
      "Vérifie la connexion et la configuration Supabase, puis réessaie.";
  } finally {
    etatSuivi.chargement = false;
    if (cheminActuel() === "/suivi") rendre();
  }
}

function reinitialiserSuiviPourProfil() {
  etatSuivi.filtreStatut = "tous";
  etatSuivi.succes = "";
  etatSuivi.travailOuvertId = null;
  etatSuivi.erreurCorrection = "";
  etatSuivi.brouillon = null;
  etatSuivi.photo = null;
  etatSuivi.photoEnCours = false;
  etatSuivi.photoErreur = "";
  etatSuivi.photoJeton += 1;
}

function libelleNiveau(niveau) {
  const chiffre = String(niveau ?? "").match(/[1-6]/)?.[0];
  return chiffre ? `${chiffre}e` : String(niveau ?? "");
}

function exercicesDuChapitre(chapitreId) {
  return donneesExercices.exercices.filter(
    (exercice) => exercice.chapitre_id === chapitreId
  );
}

function chapitresDuNiveauProgramme(niveau) {
  return donneesExercices.chapitres.filter(
    (chapitre) => chapitre.niveau === niveau
  );
}

function eleveProgrammeCourant() {
  if (!profil) return null;

  if (profil.role === "eleve") {
    return (
      eleves.find((eleve) => eleve.id === profil.eleveId) ?? {
        id: profil.eleveId,
        prenom: profil.prenom,
        nom: profil.nom,
        classe: profil.classe
      }
    );
  }

  let eleve = eleves.find(
    (item) => item.id === etatProgramme.eleveSelectionneId
  );

  if (!eleve || eleve.classe !== etatProgramme.filtreNiveau) {
    eleve =
      elevesTries().find(
        (item) => item.classe === etatProgramme.filtreNiveau
      ) ?? null;
    etatProgramme.eleveSelectionneId = eleve?.id ?? null;
  }

  return eleve;
}

function statutProgressionProgramme(eleveId, chapitreId) {
  if (!eleveId || !chapitreId) return "a_faire";

  const entree = donneesProgramme.progression.find(
    (item) =>
      item.eleve_id === eleveId && item.chapitre_id === chapitreId
  );

  return Object.hasOwn(LIBELLES_PROGRESSION, entree?.statut)
    ? entree.statut
    : "a_faire";
}

function statistiquesProgressionProgramme(eleveId, niveau) {
  const chapitres = chapitresDuNiveauProgramme(niveau);
  let termine = 0;
  let enCours = 0;

  chapitres.forEach((chapitre) => {
    const statut = statutProgressionProgramme(eleveId, chapitre.id);
    if (statut === "termine") termine += 1;
    if (statut === "en_cours") enCours += 1;
  });

  const total = chapitres.length;
  const aFaire = Math.max(total - termine - enCours, 0);
  const pourcentage = total > 0 ? Math.round((termine / total) * 100) : 0;

  return { total, termine, enCours, aFaire, pourcentage };
}

function chapitresProgrammeAffiches() {
  if (
    etatProgramme.filtreMatiere !== "toutes" &&
    !matiereParId(etatProgramme.filtreMatiere)
  ) {
    etatProgramme.filtreMatiere = "toutes";
  }

  return chapitresTries()
    .filter((chapitre) => chapitre.niveau === etatProgramme.filtreNiveau)
    .filter(
      (chapitre) =>
        etatProgramme.filtreMatiere === "toutes" ||
        chapitre.matiere_id === etatProgramme.filtreMatiere
    );
}

function groupesProgramme() {
  const chapitres = chapitresProgrammeAffiches();
  const matieres =
    etatProgramme.filtreMatiere === "toutes"
      ? [...donneesExercices.matieres]
      : [matiereParId(etatProgramme.filtreMatiere)].filter(Boolean);

  const groupes = matieres
    .map((matiere) => ({
      matiere,
      chapitres: chapitres.filter(
        (chapitre) => chapitre.matiere_id === matiere.id
      )
    }))
    .filter((groupe) => groupe.chapitres.length > 0);

  const idsConnus = new Set(matieres.map((matiere) => matiere.id));
  const autres = chapitres.filter(
    (chapitre) => !idsConnus.has(chapitre.matiere_id)
  );

  if (autres.length > 0) {
    groupes.push({
      matiere: { id: "autres", nom: "Autres", couleur: "#64748B" },
      chapitres: autres
    });
  }

  return groupes;
}

function initialiserChapitresProgrammeLocaux() {
  try {
    const brut = window.localStorage.getItem(CLE_CHAPITRES_PROGRAMME_LOCAL);
    if (!brut) return;
    const valeur = JSON.parse(brut);
    if (!Array.isArray(valeur)) return;

    donneesExercices.chapitres = valeur
      .filter(
        (chapitre) =>
          chapitre &&
          typeof chapitre.id === "string" &&
          typeof chapitre.matiere_id === "string" &&
          typeof chapitre.niveau === "string" &&
          typeof chapitre.titre === "string"
      )
      .map((chapitre) => ({
        ...chapitre,
        ordre: Number.isFinite(Number(chapitre.ordre))
          ? Number(chapitre.ordre)
          : 1,
        description:
          typeof chapitre.description === "string"
            ? chapitre.description
            : ""
      }));
  } catch {
    return;
  }
}

function sauvegarderChapitresProgrammeLocaux() {
  if (MODE_APERCU) return;
  try {
    window.localStorage.setItem(
      CLE_CHAPITRES_PROGRAMME_LOCAL,
      JSON.stringify(donneesExercices.chapitres)
    );
  } catch {
    throw new Error(
      "Les chapitres n'ont pas pu être enregistrés dans ce navigateur."
    );
  }
}

function initialiserProgressionProgrammeLocale() {
  try {
    const brut = window.localStorage.getItem(CLE_PROGRESSION_LOCAL);
    if (!brut) return;
    const valeur = JSON.parse(brut);
    if (Array.isArray(valeur)) {
      donneesProgramme.progression = valeur.filter(
        (item) =>
          item &&
          typeof item.eleve_id === "string" &&
          typeof item.chapitre_id === "string" &&
          Object.hasOwn(LIBELLES_PROGRESSION, item.statut)
      );
    }
  } catch {
    donneesProgramme.progression = [...PROGRESSIONS_EXEMPLE];
  }
}

function sauvegarderProgressionProgrammeLocale() {
  if (MODE_APERCU) return;
  try {
    window.localStorage.setItem(
      CLE_PROGRESSION_LOCAL,
      JSON.stringify(donneesProgramme.progression)
    );
  } catch {
    throw new Error(
      "La progression n'a pas pu être enregistrée dans ce navigateur."
    );
  }
}

function reinitialiserProgrammePourProfil() {
  const niveaux = nomsNiveaux();
  etatProgramme.filtreNiveau =
    profil?.role === "eleve" && niveaux.includes(profil.classe)
      ? profil.classe
      : (niveaux[niveaux.length - 1] ?? NIVEAUX[NIVEAUX.length - 1]);
  etatProgramme.filtreMatiere = "toutes";
  etatProgramme.eleveSelectionneId =
    profil?.role === "eleve" ? profil.eleveId : null;
  etatProgramme.erreurAction = "";
  etatProgramme.succes = "";
  etatProgramme.progressionEnCours = null;
  fermerModalesProgramme();
}

function fermerModalesProgramme() {
  etatProgramme.chapitreOuvertId = null;
  etatProgramme.formulaireChapitre = null;
  etatProgramme.suppressionChapitreId = null;
  etatProgramme.erreurFormulaire = "";
}

function ouvrirChapitreProgramme(id) {
  if (!chapitreParId(id)) return;
  etatProgramme.chapitreOuvertId = id;
  etatProgramme.formulaireChapitre = null;
  etatProgramme.suppressionChapitreId = null;
  rendre();
}

function ouvrirFormulaireChapitreProgramme(id = null) {
  if (id && !chapitreParId(id)) return;
  etatProgramme.formulaireChapitre = id ?? "nouveau";
  etatProgramme.chapitreOuvertId = null;
  etatProgramme.suppressionChapitreId = null;
  etatProgramme.erreurFormulaire = "";
  rendre();
}

function demanderSuppressionChapitreProgramme(id) {
  if (!chapitreParId(id)) return;
  etatProgramme.suppressionChapitreId = id;
  etatProgramme.chapitreOuvertId = null;
  etatProgramme.formulaireChapitre = null;
  rendre();
}

function afficherErreurFormulaireChapitre(message) {
  const zone = document.querySelector("[data-chapitre-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function afficherErreurSuppressionChapitre(message) {
  const zone = document.querySelector("[data-chapitre-delete-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function blocInvitationProfilProgramme() {
  return `
    <div class="programme-profile-note">
      <span class="programme-note-icon">${icone("graduation-cap", 22)}</span>
      <div>
        <strong>Choisis ton profil</strong>
        <p>Connecte-toi comme élève ou encadreur pour suivre la progression.</p>
      </div>
      <button class="btn btn-secondary" type="button" data-action="aller-accueil">
        Choisir
      </button>
    </div>`;
}

function selecteurNiveauProgramme() {
  return `
    <div class="programme-levels" role="group" aria-label="Niveau scolaire">
      ${nomsNiveaux().map(
        (niveau) => `
          <button
            class="programme-level"
            type="button"
            data-niveau-programme="${echapper(niveau)}"
            aria-pressed="${etatProgramme.filtreNiveau === niveau}"
          >${echapper(libelleNiveau(niveau))}</button>`
      ).join("")}
    </div>`;
}

function ongletsMatiereProgramme() {
  const matieres = [
    { id: "toutes", nom: "Toutes", couleur: "#1D4ED8" },
    ...donneesExercices.matieres
  ];

  return `
    <div class="programme-subjects" role="group" aria-label="Matière">
      ${matieres
        .map(
          (matiere) => `
            <button
              class="programme-subject"
              type="button"
              data-matiere-programme="${echapper(matiere.id)}"
              aria-pressed="${etatProgramme.filtreMatiere === matiere.id}"
              style="--matiere-couleur:${echapper(matiere.couleur ?? "#1D4ED8")}"
            >${echapper(matiere.nom)}</button>`
        )
        .join("")}
    </div>`;
}

function blocEleveProgramme(eleveCourant) {
  const options = elevesTries()
    .map(
      (eleve) => `
        <option
          value="${echapper(eleve.id)}"
          ${eleve.id === eleveCourant?.id ? "selected" : ""}
        >${echapper(nomComplet(eleve))} — ${echapper(libelleNiveau(eleve.classe))}</option>`
    )
    .join("");

  return `
    <section class="programme-student-card" aria-labelledby="titre-eleve-programme">
      <div class="programme-student-copy">
        <span class="programme-student-icon">${icone("graduation-cap", 20)}</span>
        <div>
          <p class="modal-kicker">Élève suivi</p>
          <h2 id="titre-eleve-programme">${echapper(
            eleveCourant ? nomComplet(eleveCourant) : "Aucun élève"
          )}</h2>
          <p>${
            eleveCourant
              ? `Classe de ${echapper(libelleNiveau(eleveCourant.classe))}`
              : "Aucun élève dans ce niveau."
          }</p>
        </div>
      </div>
      <label class="programme-student-select" for="programme-eleve">
        <span>Changer d'élève</span>
        <select id="programme-eleve" data-eleve-programme>
          ${
            options ||
            `<option value="">Aucun élève disponible</option>`
          }
        </select>
      </label>
    </section>`;
}

function blocProgressionProgramme(eleveCourant) {
  if (!profil) return "";
  if (!eleveCourant) {
    return `
      <div class="exercise-status programme-empty-level">
        <span class="status-icon">${icone("graduation-cap", 25)}</span>
        <h2>Aucun élève dans ce niveau</h2>
        <p>Choisis un autre niveau pour consulter une progression.</p>
      </div>`;
  }

  const stats = statistiquesProgressionProgramme(
    eleveCourant.id,
    etatProgramme.filtreNiveau
  );

  return `
    <section class="programme-progress-card" aria-labelledby="titre-progression-programme">
      <div class="programme-progress-head">
        <div>
          <p class="modal-kicker">Progression en ${echapper(libelleNiveau(etatProgramme.filtreNiveau))}</p>
          <h2 id="titre-progression-programme">${echapper(nomComplet(eleveCourant))}</h2>
          <p>${stats.termine} sur ${stats.total} chapitre${
            stats.total > 1 ? "s" : ""
          } terminé${stats.termine > 1 ? "s" : ""}</p>
        </div>
        <strong class="programme-progress-value">${stats.pourcentage}%</strong>
      </div>
      <div
        class="programme-progress-track"
        role="progressbar"
        aria-label="Progression de ${echapper(nomComplet(eleveCourant))} en ${echapper(libelleNiveau(etatProgramme.filtreNiveau))}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${stats.pourcentage}"
      >
        <span style="width:${stats.pourcentage}%"></span>
      </div>
      <div class="programme-progress-stats">
        <span><strong>${stats.termine}</strong> Terminés</span>
        <span><strong>${stats.enCours}</strong> En cours</span>
        <span><strong>${stats.aFaire}</strong> À faire</span>
      </div>
    </section>`;
}

function badgeStatutProgramme(statut) {
  const valeur = Object.hasOwn(LIBELLES_PROGRESSION, statut)
    ? statut
    : "a_faire";
  return `<span class="programme-badge programme-badge--${valeur}">${LIBELLES_PROGRESSION[valeur]}</span>`;
}

function controlesStatutProgramme(chapitre, eleveId) {
  const statut = statutProgressionProgramme(eleveId, chapitre.id);
  const enCours = etatProgramme.progressionEnCours === chapitre.id;

  return `
    <div class="programme-status-control" role="group" aria-label="Statut de ${echapper(
      chapitre.titre
    )}">
      ${Object.entries(LIBELLES_PROGRESSION)
        .map(
          ([valeur, libelle]) => `
            <button
              class="programme-status-btn ${statut === valeur ? "is-active" : ""}"
              type="button"
              data-action="changer-progression"
              data-chapitre-id="${echapper(chapitre.id)}"
              data-eleve-id="${echapper(eleveId)}"
              data-statut="${valeur}"
              aria-pressed="${statut === valeur}"
              ${enCours ? "disabled" : ""}
            >${libelle}</button>`
        )
        .join("")}
    </div>`;
}

function carteChapitreProgramme(chapitre) {
  const eleveCourant = eleveProgrammeCourant();
  const exercices = exercicesDuChapitre(chapitre.id);
  const estEncadreur = profil?.role === "encadreur";
  const statut = eleveCourant
    ? statutProgressionProgramme(eleveCourant.id, chapitre.id)
    : null;
  const description = String(chapitre.description ?? "").trim();

  return `
    <article class="programme-chapter-card" data-chapitre-card="${echapper(
      chapitre.id
    )}">
      <div class="programme-chapter-top">
        <span class="programme-chapter-order">${echapper(chapitre.ordre ?? 1)}</span>
        <div class="programme-chapter-copy">
          <div class="programme-chapter-title-row">
            <h3>${echapper(chapitre.titre)}</h3>
            ${statut ? badgeStatutProgramme(statut) : ""}
          </div>
          <p class="programme-chapter-description">${
            description
              ? echapper(description)
              : "Description à venir."
          }</p>
          <p class="programme-chapter-meta">
            ${icone("notebook-pen", 14)}
            <span>${nombreExercices(exercices.length)}</span>
          </p>
        </div>
      </div>

      ${
        estEncadreur && eleveCourant
          ? controlesStatutProgramme(chapitre, eleveCourant.id)
          : ""
      }

      <div class="programme-chapter-actions">
        <button
          class="programme-detail-btn"
          type="button"
          data-action="ouvrir-chapitre"
          data-id="${echapper(chapitre.id)}"
        >
          <span>Voir le détail</span>
          ${icone("chevron-right", 16)}
        </button>
        ${
          estEncadreur
            ? `<div class="programme-chapter-tools">
                <button
                  class="icon-btn"
                  type="button"
                  data-action="modifier-chapitre"
                  data-id="${echapper(chapitre.id)}"
                  aria-label="Modifier ${echapper(chapitre.titre)}"
                >${icone("pencil", 17)}</button>
                <button
                  class="icon-btn icon-btn--danger"
                  type="button"
                  data-action="supprimer-chapitre"
                  data-id="${echapper(chapitre.id)}"
                  aria-label="Supprimer ${echapper(chapitre.titre)}"
                >${icone("trash", 17)}</button>
              </div>`
            : ""
        }
      </div>
    </article>`;
}

function contenuProgramme() {
  if (etatProgramme.chargement) {
    return `
      <div class="exercise-status" role="status">
        <span class="loading-ring" aria-hidden="true"></span>
        <p>Chargement du programme.</p>
      </div>`;
  }

  if (etatProgramme.erreur) {
    return `
      <div class="exercise-status exercise-status--error" role="alert">
        <span class="status-icon">${icone("alert-circle", 25)}</span>
        <h2>Le programme n'a pas pu être chargé</h2>
        <p>${echapper(etatProgramme.erreur)}</p>
        <button class="btn btn-secondary" type="button" data-action="recharger-programme">
          ${icone("refresh-cw", 17)} Réessayer
        </button>
      </div>`;
  }

  const groupes = groupesProgramme();
  if (groupes.length === 0) {
    const aucunChapitre = chapitresDuNiveauProgramme(
      etatProgramme.filtreNiveau
    ).length === 0;
    return `
      <div class="exercise-status">
        <span class="status-icon">${icone("book-open", 25)}</span>
        <h2>${
          aucunChapitre
            ? "Aucun chapitre pour ce niveau"
            : "Aucun chapitre pour cette matière"
        }</h2>
        <p>${
          aucunChapitre
            ? "Les chapitres de ce niveau seront bientôt disponibles."
            : "Choisis une autre matière ou ajoute un chapitre."
        }</p>
      </div>`;
  }

  return groupes
    .map(
      (groupe) => `
        <section
          class="programme-group"
          aria-labelledby="programme-groupe-${echapper(groupe.matiere.id)}"
        >
          <header class="programme-group-head">
            <span
              class="programme-group-dot"
              style="--matiere-couleur:${echapper(
                groupe.matiere.couleur ?? "#1D4ED8"
              )}"
              aria-hidden="true"
            ></span>
            <h2 id="programme-groupe-${echapper(groupe.matiere.id)}">${echapper(
              groupe.matiere.nom
            )}</h2>
            <span>${groupe.chapitres.length} chapitre${
              groupe.chapitres.length > 1 ? "s" : ""
            }</span>
          </header>
          <div class="programme-chapter-list">
            ${groupe.chapitres.map((chapitre) => carteChapitreProgramme(chapitre)).join("")}
          </div>
        </section>`
    )
    .join("");
}

function modaleChapitreProgramme() {
  const chapitre = chapitreParId(etatProgramme.chapitreOuvertId);
  if (!chapitre) return "";

  const matiere = matiereParId(chapitre.matiere_id);
  const exercices = exercicesDuChapitre(chapitre.id);
  const eleveCourant = eleveProgrammeCourant();
  const estEncadreur = profil?.role === "encadreur";
  const statut = eleveCourant
    ? statutProgressionProgramme(eleveCourant.id, chapitre.id)
    : null;
  const description = String(chapitre.description ?? "").trim();

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section
        class="modal-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-detail-chapitre"
      >
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <div class="detail-badges">
            <span
              class="subject-label"
              style="--matiere-couleur:${echapper(matiere?.couleur ?? "#1D4ED8")}"
            >${echapper(matiere?.nom ?? "Matière")} · ${echapper(libelleNiveau(chapitre.niveau))}</span>
            ${statut ? badgeStatutProgramme(statut) : ""}
          </div>
          <h2 id="titre-detail-chapitre">${echapper(chapitre.titre)}</h2>
          <p class="detail-chapter">
            ${icone("book-open", 16)}
            <span>${nombreExercices(exercices.length)} lié${
              exercices.length > 1 ? "s" : ""
            }</span>
          </p>

          <div class="programme-detail-description">
            <p class="statement-label">Description</p>
            <p>${description ? echapper(description) : "Description à venir."}</p>
          </div>

          <div class="programme-detail-exercises">
            <div class="programme-detail-section-head">
              <h3>Exercices liés</h3>
              <span>${exercices.length}</span>
            </div>
            ${
              exercices.length > 0
                ? `<div class="programme-exercise-list">
                    ${exercices
                      .map(
                        (exercice) => `
                          <button
                            class="programme-exercise-item"
                            type="button"
                            data-action="ouvrir-exercice-programme"
                            data-id="${echapper(exercice.id)}"
                          >
                            <span class="programme-exercise-icon">${icone(
                              "notebook-pen",
                              16
                            )}</span>
                            <span class="programme-exercise-copy">
                              <strong>${echapper(exercice.titre)}</strong>
                              <small>${echapper(
                                LIBELLES_DIFFICULTE[exercice.difficulte] ??
                                  "Moyen"
                              )}</small>
                            </span>
                            ${icone("chevron-right", 16)}
                          </button>`
                      )
                      .join("")}
                  </div>`
                : `<p class="programme-empty-note">Aucun exercice n'est encore lié à ce chapitre.</p>`
            }
          </div>

          <div class="detail-actions">
            ${
              exercices.length > 0
                ? `<button
                    class="btn btn-primary btn-block"
                    type="button"
                    data-action="voir-exercices-chapitre"
                    data-id="${echapper(chapitre.id)}"
                  >
                    ${icone("notebook-pen", 18)} Ouvrir dans Exercices
                  </button>`
                : ""
            }
            ${
              estEncadreur
                ? `<div class="detail-action-row programme-modal-tools">
                    <button
                      class="btn btn-secondary"
                      type="button"
                      data-action="modifier-chapitre"
                      data-id="${echapper(chapitre.id)}"
                    >${icone("pencil", 17)} Modifier</button>
                    <button
                      class="btn btn-danger"
                      type="button"
                      data-action="supprimer-chapitre"
                      data-id="${echapper(chapitre.id)}"
                    >${icone("trash", 17)} Supprimer</button>
                  </div>`
                : ""
            }
          </div>
        </div>
      </section>
    </div>`;
}

function modaleFormulaireChapitreProgramme() {
  if (!etatProgramme.formulaireChapitre) return "";

  const estNouveau = etatProgramme.formulaireChapitre === "nouveau";
  const chapitre = estNouveau
    ? null
    : chapitreParId(etatProgramme.formulaireChapitre);
  if (!estNouveau && !chapitre) return "";

  const matiereDefaut =
    etatProgramme.filtreMatiere !== "toutes"
      ? etatProgramme.filtreMatiere
      : donneesExercices.matieres[0]?.id ?? "";
  const niveauxDisponibles = nomsNiveaux();
  const niveauDefaut = niveauxDisponibles.includes(etatProgramme.filtreNiveau)
    ? etatProgramme.filtreNiveau
    : (niveauxDisponibles[niveauxDisponibles.length - 1] ??
      NIVEAUX[NIVEAUX.length - 1]);
  const ordreDefaut = estNouveau
    ? Math.max(
        0,
        ...donneesExercices.chapitres
          .filter(
            (item) =>
              item.matiere_id === matiereDefaut &&
              item.niveau === niveauDefaut
          )
          .map((item) => Number(item.ordre) || 0)
      ) + 1
    : chapitre.ordre ?? 1;

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section
        class="modal-sheet modal-sheet--form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-formulaire-chapitre"
      >
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">${estNouveau ? "Nouveau chapitre" : "Modifier le chapitre"}</p>
          <h2 id="titre-formulaire-chapitre">${
            estNouveau ? "Ajouter un chapitre" : "Modifier ce chapitre"
          }</h2>

          <form
            class="exercise-form programme-chapter-form"
            data-form-chapitre
            ${chapitre ? `data-id="${echapper(chapitre.id)}"` : ""}
          >
            <label class="form-field" for="chapitre-titre">
              <span>Titre du chapitre</span>
              <input
                id="chapitre-titre"
                name="titre"
                type="text"
                maxlength="120"
                value="${echapper(chapitre?.titre ?? "")}"
                placeholder="Ex. Théorème de Thalès"
                required
              />
            </label>

            <div class="form-grid">
              <label class="form-field" for="chapitre-niveau">
                <span>Niveau</span>
                <select id="chapitre-niveau" name="niveau" required>
                  ${nomsNiveaux().map(
                    (niveau) => `
                      <option
                        value="${echapper(niveau)}"
                        ${(chapitre?.niveau ?? niveauDefaut) === niveau ? "selected" : ""}
                      >${echapper(libelleNiveau(niveau))}</option>`
                  ).join("")}
                </select>
              </label>

              <label class="form-field" for="chapitre-matiere">
                <span>Matière</span>
                <select id="chapitre-matiere" name="matiere_id" required>
                  ${donneesExercices.matieres
                    .map(
                      (matiere) => `
                        <option
                          value="${echapper(matiere.id)}"
                          ${(chapitre?.matiere_id ?? matiereDefaut) === matiere.id ? "selected" : ""}
                        >${echapper(matiere.nom)}</option>`
                    )
                    .join("")}
                </select>
              </label>
            </div>

            <label class="form-field" for="chapitre-ordre">
              <span>Ordre dans la matière</span>
              <input
                id="chapitre-ordre"
                name="ordre"
                type="number"
                min="1"
                max="99"
                step="1"
                value="${echapper(ordreDefaut)}"
                required
              />
            </label>

            <label class="form-field" for="chapitre-description">
              <span>Description</span>
              <textarea
                id="chapitre-description"
                name="description"
                rows="5"
                maxlength="500"
                placeholder="Explique ce que l'élève va apprendre dans ce chapitre."
              >${echapper(chapitre?.description ?? "")}</textarea>
            </label>

            <p class="form-error" data-chapitre-error role="alert" hidden></p>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale">
                Annuler
              </button>
              <button class="btn btn-primary" type="submit">
                ${estNouveau ? "Ajouter" : "Enregistrer"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleSuppressionChapitreProgramme() {
  const chapitre = chapitreParId(etatProgramme.suppressionChapitreId);
  if (!chapitre) return "";

  const exercices = exercicesDuChapitre(chapitre.id);

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section
        class="modal-sheet modal-sheet--confirm"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="titre-suppression-chapitre"
        aria-describedby="texte-suppression-chapitre"
      >
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <span class="confirm-icon">${icone("trash", 24)}</span>
          <h2 id="titre-suppression-chapitre">Supprimer ce chapitre ?</h2>
          <p id="texte-suppression-chapitre">
            « ${echapper(chapitre.titre)} » sera supprimé définitivement.
            ${
              exercices.length > 0
                ? `${exercices.length} exercice${
                    exercices.length > 1 ? "s" : ""
                  } lié${exercices.length > 1 ? "s" : ""} sera${
                    exercices.length > 1 ? "ont" : ""
                  } aussi supprimé${exercices.length > 1 ? "s" : ""}.`
                : ""
            }
          </p>
          <p class="form-error" data-chapitre-delete-error role="alert" hidden></p>
          <div class="form-actions">
            <button class="btn btn-secondary" type="button" data-action="fermer-modale">
              Annuler
            </button>
            <button class="btn btn-danger" type="button" data-action="confirmer-suppression-chapitre">
              Supprimer
            </button>
          </div>
        </div>
      </section>
    </div>`;
}

function ecranProgramme() {
  const eleveCourant = eleveProgrammeCourant();
  const estEncadreur = profil?.role === "encadreur";
  const chapitres = chapitresProgrammeAffiches();

  return `
    <section class="programme-page" aria-labelledby="titre-programme">
      <header class="page-head">
        <p class="page-kicker">Parcours scolaire</p>
        <h1 id="titre-programme">Programme</h1>
        <p>${
          estEncadreur
            ? "Suis la progression d'un élève et organise les chapitres."
            : "Retrouve les chapitres de ton niveau et leur avancement."
        }</p>
      </header>

      ${!profil ? blocInvitationProfilProgramme() : ""}
      ${estEncadreur ? blocEleveProgramme(eleveCourant) : ""}
      ${blocProgressionProgramme(eleveCourant)}

      <div class="programme-controls">
        ${selecteurNiveauProgramme()}
        ${ongletsMatiereProgramme()}
      </div>

      ${
        etatProgramme.succes
          ? `<div class="programme-banner programme-banner--success" role="status">
              ${icone("check-circle", 18)}
              <p>${echapper(etatProgramme.succes)}</p>
            </div>`
          : ""
      }
      ${
        etatProgramme.erreurAction
          ? `<div class="programme-banner programme-banner--error" role="alert">
              ${icone("alert-circle", 18)}
              <p>${echapper(etatProgramme.erreurAction)}</p>
            </div>`
          : ""
      }

      <div class="results-head programme-results-head">
        <h2>${
          etatProgramme.filtreMatiere === "toutes"
            ? "Tous les chapitres"
            : "Chapitres"
        }</h2>
        <span>${etatProgramme.chargement ? "." : `${chapitres.length} chapitre${
          chapitres.length > 1 ? "s" : ""
        }`}</span>
      </div>

      ${
        estEncadreur
          ? `<button
              class="btn btn-secondary btn-block programme-add-btn"
              type="button"
              data-action="nouveau-chapitre"
            >${icone("plus", 18)} Ajouter un chapitre</button>`
          : ""
      }

      ${contenuProgramme()}

      ${modaleChapitreProgramme()}
      ${modaleFormulaireChapitreProgramme()}
      ${modaleSuppressionChapitreProgramme()}
    </section>`;
}

async function chargerProgrammeDepuisSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

  etatProgramme.chargement = true;
  etatProgramme.erreur = "";
  if (cheminActuel() === "/programme") rendre();

  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);

    const [
      reponseMatieres,
      reponseChapitres,
      reponseExercices,
      reponseEleves,
      reponseProgression
    ] = await Promise.all([
      client.from("matieres").select("id, nom, couleur").order("nom"),
      client
        .from("chapitres")
        .select("id, matiere_id, niveau, ordre, titre, description")
        .order("ordre"),
      client
        .from("exercices")
        .select("id, chapitre_id, titre, enonce, difficulte, created_at")
        .order("created_at", { ascending: false }),
      client.from("eleves").select("id, prenom, nom, classe"),
      client
        .from("progression")
        .select("id, eleve_id, chapitre_id, statut, updated_at")
    ]);

    const erreur =
      reponseMatieres.error ??
      reponseChapitres.error ??
      reponseExercices.error ??
      reponseEleves.error ??
      reponseProgression.error;
    if (erreur) throw erreur;

    if (
      !Array.isArray(reponseMatieres.data) ||
      !Array.isArray(reponseChapitres.data) ||
      !Array.isArray(reponseExercices.data) ||
      !Array.isArray(reponseEleves.data) ||
      !Array.isArray(reponseProgression.data)
    ) {
      throw new Error("Les données reçues sont incomplètes.");
    }

    donneesExercices.matieres = reponseMatieres.data;
    donneesExercices.chapitres = reponseChapitres.data;
    donneesExercices.exercices = reponseExercices.data;
    donneesExercices.source = "supabase";
    donneesProgramme.progression = reponseProgression.data;
    donneesProgramme.source = "supabase";
    eleves = reponseEleves.data;

    if (profil?.role === "eleve") {
      const aJour =
        eleves.find((eleve) => eleve.id === profil.eleveId) ??
        eleves.find(
          (eleve) =>
            eleve.prenom === profil.prenom &&
            eleve.nom === profil.nom &&
            eleve.classe === profil.classe
        );

      if (aJour) {
        enregistrerProfil({
          role: "eleve",
          eleveId: aJour.id,
          prenom: aJour.prenom,
          nom: aJour.nom,
          classe: aJour.classe
        });
        ajusterFiltresExercicesAuProfil();
        etatProgramme.eleveSelectionneId = aJour.id;
        if (nomsNiveaux().includes(aJour.classe)) {
          etatProgramme.filtreNiveau = aJour.classe;
        }
      }
    }

    etatProgramme.erreur = "";
  } catch (erreur) {
    console.warn("Le programme n'a pas pu être chargé depuis Supabase.", erreur);
    etatProgramme.erreur =
      "Vérifie la connexion et la configuration Supabase, puis réessaie.";
  } finally {
    etatProgramme.chargement = false;
    if (cheminActuel() === "/programme") rendre();
  }
}

async function enregistrerChapitreProgramme(valeurs, idExistant = null) {
  if (donneesExercices.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const valeursDistantes = profil?.id
      ? { ...valeurs, encadreur_id: profil.id }
      : valeurs;

    if (idExistant) {
      const { data, error } = await client
        .from("chapitres")
        .update(valeursDistantes)
        .eq("id", idExistant)
        .select("id, matiere_id, niveau, ordre, titre, description, encadreur_id")
        .single();
      if (error) throw error;
      const index = donneesExercices.chapitres.findIndex(
        (chapitre) => chapitre.id === idExistant
      );
      if (index !== -1) donneesExercices.chapitres[index] = data;
      return data;
    }

    const { data, error } = await client
      .from("chapitres")
      .insert(valeursDistantes)
      .select("id, matiere_id, niveau, ordre, titre, description, encadreur_id")
      .single();
    if (error) throw error;
    donneesExercices.chapitres.push(data);
    return data;
  }

  if (idExistant) {
    const index = donneesExercices.chapitres.findIndex(
      (chapitre) => chapitre.id === idExistant
    );
    if (index === -1) throw new Error("Ce chapitre n'existe plus.");
    const chapitre = {
      ...donneesExercices.chapitres[index],
      ...valeurs
    };
    donneesExercices.chapitres[index] = chapitre;
    sauvegarderChapitresProgrammeLocaux();
    return chapitre;
  }

  const chapitre = {
    id: `chap-${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .slice(2, 8)}`,
    ...valeurs
  };
  donneesExercices.chapitres.push(chapitre);
  sauvegarderChapitresProgrammeLocaux();
  return chapitre;
}

async function supprimerChapitreProgramme(id) {
  const chapitre = chapitreParId(id);
  if (!chapitre) return;

  if (donneesExercices.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client.from("chapitres").delete().eq("id", id);
    if (error) throw error;
  }

  donneesExercices.chapitres = donneesExercices.chapitres.filter(
    (item) => item.id !== id
  );
  donneesExercices.exercices = donneesExercices.exercices.filter(
    (exercice) => exercice.chapitre_id !== id
  );
  donneesProgramme.progression = donneesProgramme.progression.filter(
    (item) => item.chapitre_id !== id
  );

  if (donneesExercices.source !== "supabase") {
    sauvegarderChapitresProgrammeLocaux();
    sauvegarderExercicesLocaux();
  }
  if (donneesProgramme.source !== "supabase") {
    sauvegarderProgressionProgrammeLocale();
  }
}

async function changerStatutProgressionProgramme(
  eleveId,
  chapitreId,
  statut
) {
  if (!eleveId || !chapitreId) return;
  if (!Object.hasOwn(LIBELLES_PROGRESSION, statut)) return;
  if (statutProgressionProgramme(eleveId, chapitreId) === statut) return;

  etatProgramme.progressionEnCours = chapitreId;
  etatProgramme.erreurAction = "";
  etatProgramme.succes = "";
  if (cheminActuel() === "/programme") rendre();

  const progressionPrecedente = [...donneesProgramme.progression];

  try {
    if (donneesProgramme.source === "supabase") {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);

      const { data, error } = await client
        .from("progression")
        .upsert(
          {
            eleve_id: eleveId,
            chapitre_id: chapitreId,
            statut,
            updated_at: new Date().toISOString()
          },
          { onConflict: "eleve_id,chapitre_id" }
        )
        .select("id, eleve_id, chapitre_id, statut, updated_at")
        .single();
      if (error) throw error;

      const index = donneesProgramme.progression.findIndex(
        (item) =>
          item.eleve_id === eleveId && item.chapitre_id === chapitreId
      );
      if (index === -1) {
        donneesProgramme.progression.push(data);
      } else {
        donneesProgramme.progression[index] = data;
      }
    } else {
      const index = donneesProgramme.progression.findIndex(
        (item) =>
          item.eleve_id === eleveId && item.chapitre_id === chapitreId
      );
      const entree = {
        id:
          index === -1
            ? `prog-${Date.now().toString(36)}-${Math.random()
                .toString(36)
                .slice(2, 8)}`
            : donneesProgramme.progression[index].id,
        eleve_id: eleveId,
        chapitre_id: chapitreId,
        statut,
        updated_at: new Date().toISOString()
      };

      if (index === -1) {
        donneesProgramme.progression.push(entree);
      } else {
        donneesProgramme.progression[index] = entree;
      }
      sauvegarderProgressionProgrammeLocale();
    }

    etatProgramme.succes = "Progression mise à jour.";
    etatProgramme.erreurAction = "";
  } catch (erreur) {
    donneesProgramme.progression = progressionPrecedente;
    console.warn("La progression n'a pas pu être enregistrée.", erreur);
    etatProgramme.erreurAction =
      "La progression n'a pas pu être enregistrée. Réessaie.";
  } finally {
    etatProgramme.progressionEnCours = null;
    if (cheminActuel() === "/programme") rendre();
  }
}

function ouvrirExerciceDepuisProgramme(id) {
  const exercice = donneesExercices.exercices.find(
    (item) => item.id === id
  );
  if (!exercice) return;

  const chapitre = chapitreParId(exercice.chapitre_id);
  if (chapitre) {
    etatExercices.filtreNiveau = chapitre.niveau;
    etatExercices.filtreMatiere = chapitre.matiere_id;
  }
  etatExercices.exerciceOuvertId = exercice.id;
  etatExercices.formulaire = null;
  etatExercices.suppressionId = null;
  etatExercices.erreur = "";
  fermerModalesProgramme();
  allerA("/exercices");
}

function barreNavigation(chemin) {
  return `
    <nav class="bottom-nav" aria-label="Navigation principale">
      <div class="nav-inner">
        ${NAVIGATION.map(
          (lien) => `
            <a
              class="nav-item"
              href="#${lien.chemin}"
              ${chemin === lien.chemin ? 'aria-current="page"' : ""}
            >
              <span class="nav-icon">${icone(lien.icone, 21)}</span>
              <span>${lien.libelle}</span>
            </a>`
        ).join("")}
      </div>
    </nav>`;
}

function rendre() {
  let chemin = cheminActuel();
  const routesAuth = [
    "/connexion",
    "/connexion/encadreur",
    "/inscription",
    "/mot-de-passe-oublie",
    "/reinitialiser-mot-de-passe",
    "/eleve"
  ];
  const eleveEnAttente =
    profil?.role === "eleve" && profil.statut && profil.statut !== "actif";

  if (authInitialisee && !profil && ROUTES_PROTEGEES.has(chemin)) {
    window.location.hash = "#/connexion";
    chemin = "/connexion";
  } else if (authInitialisee && eleveEnAttente && chemin !== "/eleve" && chemin !== "/profil") {
    window.location.hash = "#/eleve";
    chemin = "/eleve";
  } else if (
    authInitialisee &&
    profil &&
    !eleveEnAttente &&
    routesAuth.includes(chemin) &&
    chemin !== "/reinitialiser-mot-de-passe"
  ) {
    window.location.hash = "#/suivi";
    chemin = "/suivi";
  } else if (
    authInitialisee &&
    profil?.role === "eleve" &&
    chemin === "/eleves"
  ) {
    window.location.hash = "#/suivi";
    chemin = "/suivi";
  } else if (
    authInitialisee &&
    profil?.role === "encadreur" &&
    chemin === "/eleve"
  ) {
    window.location.hash = "#/suivi";
    chemin = "/suivi";
  }

  const infosEleveAFaire =
    profil?.role === "eleve" &&
    profil.statut === "actif" &&
    !profil.infoEleveVue;
  if (
    authInitialisee &&
    infosEleveAFaire &&
    chemin !== "/informations" &&
    chemin !== "/profil" &&
    chemin !== "/confidentialite" &&
    chemin !== "/conditions"
  ) {
    window.location.hash = "#/informations";
    chemin = "/informations";
  } else if (
    authInitialisee &&
    chemin === "/informations" &&
    (!profil || profil.role !== "eleve")
  ) {
    window.location.hash = profil ? "#/suivi" : "#/connexion";
    chemin = profil ? "/suivi" : "/connexion";
  }

  if (chemin !== "/exercices") fermerModalesExercices();
  if (chemin !== "/programme") fermerModalesProgramme();
  if (chemin !== "/eleves") fermerModalesEleves();
  if (chemin !== "/plus/cours") fermerModalesCours();
  if (chemin !== "/plus/entraide") fermerModalesEntraide();

  const chargementRoute =
    ["/suivi", "/exercices", "/programme", "/eleves"].includes(chemin) ||
    (ASSISTANT_IA_DISPONIBLE && chemin === "/plus/assistant");
  let contenu;

  if (!authInitialisee || etatAuth.chargement) {
    contenu = ecranChargement();
  } else if (chargementRoute && (chargementEspace || !profil)) {
    contenu = ecranChargement();
  } else {
    contenu =
      chemin === "/"
        ? accueil()
        : chemin === "/connexion"
          ? ecranConnexion()
          : chemin === "/connexion/encadreur"
            ? ecranConnexionEncadreur()
            : chemin === "/inscription"
              ? ecranInscription()
              : chemin === "/mot-de-passe-oublie"
                ? ecranMotDePasseOublie()
                : chemin === "/reinitialiser-mot-de-passe"
                  ? ecranReinitialiserMotDePasse()
                : chemin === "/eleve"
                  ? ecranEleve()
                  : chemin === "/confidentialite"
                    ? ecranConfidentialite()
                    : chemin === "/conditions"
                      ? ecranConditions()
                      : chemin === "/informations"
                        ? ecranInformationsEleve()
                        : chemin === "/eleves"
                      ? ecranMesEleves()
                      : chemin === "/profil"
                        ? ecranProfil()
                        : chemin === "/exercices"
                          ? ecranExercices()
                          : chemin === "/suivi"
                            ? ecranSuivi()
                            : chemin === "/programme"
                              ? ecranProgramme()
                              : chemin === "/plus"
                                ? ecranPlus()
                                : chemin === "/plus/cours"
                                  ? ecranCours()
                                  : chemin === "/plus/entraide"
                                    ? ecranEntraide()
                                    : chemin === "/plus/assistant"
                                      ? ASSISTANT_IA_DISPONIBLE
                                        ? ecranAssistant()
                                        : pageVide("/plus/assistant")
                                      : pageVide(chemin);
  }

  const afficherNavigation = Boolean(profil) && !routesAuth.includes(chemin);
  const banniereApercu = MODE_APERCU
    ? `<div class="apercu-banner" role="status">${icone("shield-check", 16)}<span><strong>Mode aperçu</strong> · Données de démonstration, aucune modification réelle.</span></div>`
    : "";
  document.title = `${TITRES_ROUTES[chemin] ?? "Monitoring Student"} - Monitoring Student`;
  document.getElementById("app").innerHTML = `
    ${entete()}
    ${banniereApercu}
    <main class="app-main" id="main" tabindex="-1">${contenu}</main>
    ${afficherNavigation ? barreNavigation(chemin) : ""}`;

  document.body.classList.toggle(
    "modale-ouverte",
    Boolean(
      etatExercices.exerciceOuvertId ||
        etatExercices.formulaire ||
        etatExercices.suppressionId ||
        etatProgramme.chapitreOuvertId ||
        etatProgramme.formulaireChapitre ||
        etatProgramme.suppressionChapitreId ||
        etatEleves.formulaire ||
        etatEleves.suppressionId ||
        etatEleves.reinitialisationPinId ||
        etatEleves.formulaireNiveau ||
        etatEleves.suppressionNiveauId ||
        etatEleves.rappelsOuvert ||
        etatCours.coursOuvertId ||
        etatCours.formulaire ||
        etatCours.suppressionId ||
        etatEntraide.questionOuverteId ||
        etatEntraide.formulaireQuestion ||
        etatEntraide.suppressionQuestionId ||
        etatEntraide.suppressionReponseId ||
        (etatSuivi.travailOuvertId &&
          travailSuiviParId(etatSuivi.travailOuvertId)) ||
        etatAuth.suppressionCompteOuvert ||
        etatAuth.demandeSuppressionEleveOuverte
    )
  );

  planifierChargementRouteSecondaire(chemin);

  if (dernierChemin !== null && dernierChemin !== chemin) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  dernierChemin = chemin;
}

function ouvrirChoixEleve() {
  choixEleveOuvert = true;
  rendre();
  window.setTimeout(() => {
    document.getElementById("choix-eleve")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function choisirEncadreur() {
  enregistrerProfil({ role: "encadreur" });
  ajusterFiltresExercicesAuProfil();
  reinitialiserSuiviPourProfil();
  reinitialiserProgrammePourProfil();
  choixEleveOuvert = false;
  allerA("/suivi");
}

function choisirEleve(id) {
  const eleve = eleves.find((item) => item.id === id);
  if (!eleve) return;
  enregistrerProfil({
    role: "eleve",
    eleveId: eleve.id,
    prenom: eleve.prenom,
    nom: eleve.nom,
    classe: eleve.classe
  });
  ajusterFiltresExercicesAuProfil();
  reinitialiserSuiviPourProfil();
  reinitialiserProgrammePourProfil();
  choixEleveOuvert = false;
  allerA("/suivi");
}

function changerProfil() {
  enregistrerProfil(null);
  ajusterFiltresExercicesAuProfil();
  reinitialiserSuiviPourProfil();
  reinitialiserProgrammePourProfil();
  choixEleveOuvert = false;
  allerA("/");
}

async function chargerElevesDepuisSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

  try {
    const client = await obtenirClientSupabaseExercices();
    if (!client) return;

    const { data, error } = await client
      .from("eleves")
      .select("id, prenom, nom, classe, telephone_contact, info_eleve_vue");

    if (error) throw error;
    if (!Array.isArray(data) || data.length === 0) return;

    eleves = data;

    if (profil?.role === "eleve") {
      const aJour =
        eleves.find((eleve) => eleve.id === profil.eleveId) ??
        eleves.find(
          (eleve) =>
            eleve.prenom === profil.prenom &&
            eleve.nom === profil.nom &&
            eleve.classe === profil.classe
        );
      if (aJour) {
        enregistrerProfil({
          role: "eleve",
          eleveId: aJour.id,
          prenom: aJour.prenom,
          nom: aJour.nom,
          classe: aJour.classe,
          infoEleveVue: Boolean(aJour.info_eleve_vue)
        });
        ajusterFiltresExercicesAuProfil();
      }
    }

    rendre();
  } catch (erreur) {
    console.warn("Les élèves n'ont pas pu être chargés depuis Supabase.", erreur);
  }
}

document.addEventListener("click", (evenement) => {
  if (evenement.target.matches("[data-fermer-modale]")) {
    fermerModalesExercices();
    fermerModalesProgramme();
    fermerModalesEleves();
    fermerModalesCours();
    fermerModalesEntraide();
    fermerModalesSuivi();
    rendre();
    return;
  }

  const boutonFiltreStatut = evenement.target.closest("[data-filtre-statut]");
  if (boutonFiltreStatut) {
    etatSuivi.filtreStatut = boutonFiltreStatut.dataset.filtreStatut;
    rendre();
    return;
  }

  const boutonFiltre = evenement.target.closest("[data-filtre-niveau]");
  if (boutonFiltre) {
    etatExercices.filtreNiveau = boutonFiltre.dataset.filtreNiveau;
    rendre();
    return;
  }

  const boutonNiveauProgramme = evenement.target.closest(
    "[data-niveau-programme]"
  );
  if (boutonNiveauProgramme) {
    etatProgramme.filtreNiveau = boutonNiveauProgramme.dataset.niveauProgramme;
    etatProgramme.succes = "";
    etatProgramme.erreurAction = "";
    rendre();
    return;
  }

  const boutonMatiereProgramme = evenement.target.closest(
    "[data-matiere-programme]"
  );
  if (boutonMatiereProgramme) {
    etatProgramme.filtreMatiere =
      boutonMatiereProgramme.dataset.matiereProgramme;
    etatProgramme.succes = "";
    etatProgramme.erreurAction = "";
    rendre();
    return;
  }

  const elementAction = evenement.target.closest("[data-action]");
  if (elementAction) {
    const action = elementAction.dataset.action;

    if (action === "basculer-theme") {
      window.Theme?.basculer();
      rendre();
    } else if (action === "choisir-theme") {
      window.Theme?.definirPreference(elementAction.dataset.themePref);
      rendre();
    } else if (action === "deconnexion") {
      deconnecter();
    } else if (action === "fermer-modale-cours") {
      fermerModalesCours();
      rendre();
    } else if (action === "nouveau-cours") {
      if (profil?.role === "encadreur") ouvrirFormulaireCours();
    } else if (action === "ouvrir-cours") {
      ouvrirDetailCours(elementAction.dataset.id);
    } else if (action === "modifier-cours") {
      ouvrirFormulaireCours(etatCours.coursOuvertId);
    } else if (action === "demander-suppression-cours") {
      demanderSuppressionCours(etatCours.coursOuvertId);
    } else if (action === "confirmer-suppression-cours") {
      const id = etatCours.suppressionId;
      const contenuInitial = elementAction.innerHTML;
      elementAction.disabled = true;
      elementAction.textContent = "Suppression…";
      supprimerCours(id)
        .then(() => {
          fermerModalesCours();
          etatCours.succes = "Cours supprimé.";
          etatCours.erreurAction = "";
          rendre();
        })
        .catch((erreur) => {
          console.warn("Le cours n'a pas pu être supprimé.", erreur);
          elementAction.disabled = false;
          elementAction.innerHTML = contenuInitial;
          const zone = document.querySelector("[data-cours-delete-error]");
          if (zone) {
            zone.textContent =
              erreur?.message || "Le cours n'a pas pu être supprimé. Réessaie.";
            zone.hidden = false;
          }
        });
    } else if (action === "supprimer-fichier-cours") {
      supprimerFichierCours(elementAction.dataset.fichierId);
    } else if (action === "annuler-envoi-fichier-cours") {
      annulerEnvoiFichierCours(elementAction.dataset.fichierId);
    } else if (action === "recharger-cours") {
      etatCours.charge = false;
      etatCours.erreur = "";
      etatCours.erreurAction = "";
      chargerCours();
    } else if (action === "filtre-cours-niveau") {
      etatCours.filtreNiveau = elementAction.dataset.niveau || "tous";
      etatCours.succes = "";
      etatCours.erreurAction = "";
      rendre();
    } else if (action === "filtre-cours-matiere") {
      etatCours.filtreMatiere = elementAction.dataset.matiere || "toutes";
      etatCours.succes = "";
      etatCours.erreurAction = "";
      rendre();
    } else if (action === "ouvrir-fichier-cours") {
      ouvrirFichierExercice({
        chemin_stockage: elementAction.dataset.fichierChemin,
        nom_fichier: elementAction.dataset.fichierNom || "fichier",
        type_mime: elementAction.dataset.fichierType || ""
      });
    } else if (action === "nouvelle-question-entraide") {
      ouvrirFormulaireQuestionEntraide();
    } else if (action === "ouvrir-question-entraide") {
      ouvrirQuestionEntraide(elementAction.dataset.id);
    } else if (action === "fermer-modale-entraide") {
      fermerModalesEntraide();
      rendre();
    } else if (action === "retirer-photo-entraide") {
      etatEntraide.photo = null;
      etatEntraide.photoErreur = "";
      rendre();
    } else if (action === "marquer-utile-entraide") {
      basculerUtileEntraide(elementAction.dataset.id);
    } else if (action === "signaler-reponse-entraide") {
      signalerReponseEntraide(elementAction.dataset.id);
    } else if (action === "demander-suppression-question-entraide") {
      demanderSuppressionQuestionEntraide(elementAction.dataset.id);
    } else if (action === "supprimer-reponse-entraide") {
      demanderSuppressionReponseEntraide(elementAction.dataset.id);
    } else if (action === "confirmer-suppression-entraide") {
      const questionId = etatEntraide.suppressionQuestionId;
      const reponseId = etatEntraide.suppressionReponseId;
      const contenuInitial = elementAction.innerHTML;
      elementAction.disabled = true;
      elementAction.textContent = "Suppression…";
      const suppression = questionId
        ? supprimerQuestionEntraide(questionId)
        : supprimerReponseEntraide(reponseId);
      suppression
        .then(() => {
          fermerModalesEntraide();
          etatEntraide.succes = questionId
            ? "Question supprimée."
            : "Réponse supprimée.";
          etatEntraide.erreurAction = "";
          rendre();
        })
        .catch((erreur) => {
          console.warn("La suppression a échoué.", erreur);
          elementAction.disabled = false;
          elementAction.innerHTML = contenuInitial;
          const zone = document.querySelector("[data-entraide-delete-error]");
          if (zone) {
            zone.textContent =
              erreur?.message || "La suppression a échoué. Réessaie.";
            zone.hidden = false;
          }
        });
    } else if (action === "recharger-entraide") {
      etatEntraide.charge = false;
      etatEntraide.erreur = "";
      etatEntraide.erreurAction = "";
      chargerEntraide();
    } else if (action === "filtre-entraide-matiere") {
      etatEntraide.filtreMatiere = elementAction.dataset.matiere || "toutes";
      etatEntraide.succes = "";
      etatEntraide.erreurAction = "";
      rendre();
    } else if (action === "ouvrir-photo-entraide") {
      ouvrirApercuImage(
        elementAction.dataset.url,
        elementAction.dataset.nom || "Photo"
      );
    } else if (action === "assistant-recharger") {
      etatAssistant.charge = false;
      etatAssistant.erreur = "";
      chargerAssistant(true);
    } else if (action === "assistant-nouvelle-aide") {
      reinitialiserConversationAssistant();
    } else if (action === "assistant-retirer-photo") {
      etatAssistant.photoJeton += 1;
      etatAssistant.photo = null;
      etatAssistant.photoEnCours = false;
      etatAssistant.photoErreur = "";
      rendre();
    } else if (action === "assistant-action-rapide") {
      const rapide = ACTIONS_RAPIDES_ASSISTANT[elementAction.dataset.rapide];
      if (rapide) {
        envoyerDemandeAssistant({
          message: rapide.message,
          action: rapide.action
        });
      }
    } else if (action === "assistant-reessayer-envoi") {
      if (etatAssistant.derniereDemande) {
        const demande = etatAssistant.derniereDemande;
        etatAssistant.derniereDemande = null;
        envoyerDemandeAssistant(demande);
      }
    } else if (action === "copier-code") {
      copierCodeEncadreur();
    } else if (action === "fermer-modale-eleves") {
      fermerModalesEleves();
      rendre();
    } else if (action === "nouvel-eleve") {
      ouvrirFormulaireEleve();
    } else if (action === "ouvrir-rappels-eleves") {
      etatEleves.rappelsOuvert = true;
      etatEleves.formulaire = null;
      etatEleves.suppressionId = null;
      etatEleves.reinitialisationPinId = null;
      etatEleves.formulaireNiveau = null;
      etatEleves.suppressionNiveauId = null;
      etatEleves.erreurFormulaire = "";
      etatEleves.erreurNiveau = "";
      rendre();
    } else if (action === "modifier-eleve") {
      ouvrirFormulaireEleve(elementAction.dataset.id);
    } else if (action === "nouveau-niveau") {
      ouvrirFormulaireNiveau();
    } else if (action === "modifier-niveau") {
      ouvrirFormulaireNiveau(elementAction.dataset.id);
    } else if (action === "supprimer-niveau") {
      ouvrirSuppressionNiveau(elementAction.dataset.id);
    } else if (action === "confirmer-suppression-niveau") {
      confirmerSuppressionNiveau();
    } else if (action === "valider-eleve") {
      validerEleve(elementAction.dataset.id);
    } else if (action === "refuser-eleve") {
      demanderSuppressionEleve(elementAction.dataset.id, "refuser");
    } else if (action === "retirer-eleve") {
      demanderSuppressionEleve(elementAction.dataset.id, "retirer");
    } else if (action === "exporter-eleve") {
      exporterDonneesEleve(elementAction.dataset.id);
    } else if (action === "ignorer-demande-suppression") {
      marquerDemandeSuppressionTraitee(elementAction.dataset.id);
    } else if (action === "confirmer-suppression-eleve") {
      const confirmation = document.querySelector(
        "[data-confirmation-suppression-eleve]"
      );
      if (!confirmation?.checked) {
        etatEleves.erreur = "Coche la case de confirmation avant de supprimer.";
        rendre();
        return;
      }
      confirmerSuppressionEleve();
    } else if (action === "demander-suppression-compte") {
      etatAuth.suppressionCompteOuvert = true;
      etatAuth.erreurAction = "";
      rendre();
    } else if (action === "demander-suppression-donnees-eleve") {
      etatAuth.demandeSuppressionEleveOuverte = true;
      etatAuth.erreurAction = "";
      rendre();
    } else if (action === "fermer-modale-donnees") {
      etatAuth.suppressionCompteOuvert = false;
      etatAuth.demandeSuppressionEleveOuverte = false;
      rendre();
    } else if (action === "compris-informations-eleve") {
      marquerInformationsEleveVues();
    } else if (action === "reinitialiser-pin") {
      ouvrirReinitialisationPin(elementAction.dataset.id);
    } else if (action === "eleve-creer-profil") {
      ouvrirCreationEleve();
    } else if (action === "eleve-changer-code") {
      changerCodeEleve();
    } else if (action === "actualiser-statut-eleve") {
      actualiserStatutEleve();
    } else if (action === "retirer-prefill") {
      const brouillon = capturerBrouillonSuivi();
      etatSuivi.brouillon = brouillon
        ? {
            titre: brouillon.titre,
            message_eleve: brouillon.message_eleve,
            matiere_id: brouillon.matiere_id
          }
        : null;
      etatSuivi.succes = "";
      effacerPrefillTravail();
      rendre();
      return;
    } else if (action === "retirer-photo") {
      etatSuivi.brouillon = capturerBrouillonSuivi();
      etatSuivi.photoJeton += 1;
      etatSuivi.photo = null;
      etatSuivi.photoEnCours = false;
      etatSuivi.photoErreur = "";
      rendre();
      return;
    } else if (action === "recharger-suivi") {
      etatSuivi.erreur = "";
      chargerEspace();
      return;
    } else if (action === "recharger-programme") {
      etatProgramme.erreur = "";
      chargerEspace();
      return;
    } else if (action === "changer-profil") {
      changerProfil();
    } else if (action === "ouvrir-travail") {
      ouvrirTravailSuivi(elementAction.dataset.id);
    } else if (action === "fermer-modale") {
      fermerModalesExercices();
      fermerModalesProgramme();
      fermerModalesSuivi();
      rendre();
    } else if (action === "ouvrir-chapitre") {
      ouvrirChapitreProgramme(elementAction.dataset.id);
    } else if (action === "nouveau-chapitre") {
      if (profil?.role === "encadreur") ouvrirFormulaireChapitreProgramme();
    } else if (action === "modifier-chapitre") {
      if (profil?.role === "encadreur") {
        ouvrirFormulaireChapitreProgramme(elementAction.dataset.id);
      }
    } else if (action === "supprimer-chapitre") {
      if (profil?.role === "encadreur") {
        demanderSuppressionChapitreProgramme(elementAction.dataset.id);
      }
    } else if (action === "changer-progression") {
      if (profil?.role === "encadreur") {
        changerStatutProgressionProgramme(
          elementAction.dataset.eleveId,
          elementAction.dataset.chapitreId,
          elementAction.dataset.statut
        );
      }
    } else if (action === "confirmer-suppression-chapitre") {
      const id = etatProgramme.suppressionChapitreId;
      const contenuInitial = elementAction.innerHTML;
      elementAction.disabled = true;
      elementAction.textContent = "Suppression…";

      supprimerChapitreProgramme(id)
        .then(() => {
          fermerModalesProgramme();
          etatProgramme.succes = "Chapitre supprimé.";
          etatProgramme.erreurAction = "";
          rendre();
        })
        .catch((erreur) => {
          console.warn("Le chapitre n'a pas pu être supprimé.", erreur);
          elementAction.disabled = false;
          elementAction.innerHTML = contenuInitial;
          afficherErreurSuppressionChapitre(
            erreur?.message ||
              "Le chapitre n'a pas pu être supprimé. Réessaie."
          );
        });
    } else if (action === "ouvrir-exercice-programme") {
      ouvrirExerciceDepuisProgramme(elementAction.dataset.id);
    } else if (action === "voir-exercices-chapitre") {
      const chapitre = chapitreParId(elementAction.dataset.id);
      const exercice = chapitre
        ? exercicesDuChapitre(chapitre.id)[0]
        : null;
      if (exercice) {
        ouvrirExerciceDepuisProgramme(exercice.id);
      } else if (chapitre) {
        etatExercices.filtreNiveau = chapitre.niveau;
        etatExercices.filtreMatiere = chapitre.matiere_id;
        etatExercices.exerciceOuvertId = null;
        fermerModalesProgramme();
        allerA("/exercices");
      }
    } else if (action === "ouvrir-exercice") {
      ouvrirDetailExercice(elementAction.dataset.id);
    } else if (action === "nouvel-exercice") {
      ouvrirFormulaireExercice();
    } else if (action === "modifier-exercice") {
      const exId = etatExercices.exerciceOuvertId;
      ouvrirFormulaireExercice(exId);
      if (exId && !etatExercices.fichiersFormulaire?.length && !etatExercices.fichiersListe[exId]?.length) {
        chargerFichiersExercice(exId);
      }
      return;
    } else if (action === "demander-suppression") {
      demanderSuppressionExercice(etatExercices.exerciceOuvertId);
    } else if (action === "envoyer-exercice") {
      preparerEnvoiExercice(etatExercices.exerciceOuvertId);
    } else if (action === "reinitialiser-filtres") {
      reinitialiserFiltresExercices();
    } else if (action === "recharger-exercices") {
      etatExercices.erreur = "";
      chargerEspace();
    } else if (action === "supprimer-fichier-exercice") {
      const fichierId = elementAction.dataset.fichierId;
      if (!fichierId) return;
      supprimerFichierExercice(fichierId);
    } else if (action === "annuler-envoi-fichier") {
      const fichierId = elementAction.dataset.fichierId;
      if (!fichierId) return;
      annulerEnvoiFichierExercice(fichierId);
    } else if (action === "aller-accueil") {
      fermerModalesExercices();
      fermerModalesProgramme();
      allerA("/");
    } else if (action === "ouvrir-fichier-exercice") {
      const chemin = elementAction.dataset.fichierChemin;
      const nom = elementAction.dataset.fichierNom || "fichier";
      const typeMime = elementAction.dataset.fichierType || "";
      ouvrirFichierExercice({ chemin_stockage: chemin, nom_fichier: nom, type_mime: typeMime });
      return;
    } else if (action === "confirmer-suppression") {
      const id = etatExercices.suppressionId;
      const contenuInitial = elementAction.innerHTML;
      elementAction.disabled = true;
      elementAction.textContent = "Suppression…";

      supprimerExercice(id)
        .then(() => {
          fermerModalesExercices();
          rendre();
        })
        .catch((erreur) => {
          console.warn("L'exercice n'a pas pu être supprimé.", erreur);
          elementAction.disabled = false;
          elementAction.innerHTML = contenuInitial;
          afficherErreurSuppression(
            erreur?.message || "L'exercice n'a pas pu être supprimé. Réessaie."
          );
        });
    }
    return;
  }

  const carteRole = evenement.target.closest("[data-role]");
  if (carteRole) {
    if (carteRole.dataset.role === "eleve") {
      ouvrirChoixEleve();
    } else if (carteRole.dataset.role === "encadreur") {
      choisirEncadreur();
    }
    return;
  }

  const eleveCode = evenement.target.closest("[data-eleve-code-id]");
  if (eleveCode) {
    choisirEleveParCode(eleveCode.dataset.eleveCodeId);
    return;
  }

  const ligneEleve = evenement.target.closest("[data-eleve-id]");
  if (ligneEleve) {
    choisirEleve(ligneEleve.dataset.eleveId);
  }
});

document.addEventListener("change", async (evenement) => {
  const confirmationSuppressionEleve = evenement.target.closest(
    "[data-confirmation-suppression-eleve]"
  );
  if (confirmationSuppressionEleve) {
    const bouton = document.querySelector(
      '[data-action="confirmer-suppression-eleve"]'
    );
    if (bouton) bouton.disabled = !confirmationSuppressionEleve.checked;
    return;
  }

  const selectAssistant = evenement.target.closest("[data-assistant-travail]");
  if (selectAssistant) {
    etatAssistant.travailId = selectAssistant.value || null;
    etatAssistant.erreurAction = "";
    rendre();
    return;
  }

  const entreePhotoAssistant = evenement.target.closest("[data-photo-assistant]");
  if (entreePhotoAssistant) {
    const fichier = entreePhotoAssistant.files?.[0];
    if (!fichier) return;

    const jeton = etatAssistant.photoJeton + 1;
    etatAssistant.photoJeton = jeton;
    etatAssistant.photoEnCours = true;
    etatAssistant.photoErreur = "";
    rendre();

    try {
      const photo = await compresserImage(fichier);
      if (etatAssistant.photoJeton !== jeton) return;
      etatAssistant.photo = photo;
      etatAssistant.photoErreur = "";
    } catch (erreur) {
      if (etatAssistant.photoJeton !== jeton) return;
      etatAssistant.photo = null;
      etatAssistant.photoErreur =
        erreur?.message || "La photo n'a pas pu être préparée. Réessaie.";
    } finally {
      if (etatAssistant.photoJeton === jeton) {
        etatAssistant.photoEnCours = false;
        entreePhotoAssistant.value = "";
        rendre();
      }
    }
    return;
  }

  const entreeFichierCours = evenement.target.closest("[data-cours-fichiers]");
  if (entreeFichierCours) {
    const fichiers = Array.from(entreeFichierCours.files || []);
    if (fichiers.length === 0) {
      entreeFichierCours.value = "";
      return;
    }
    etatCours.fichiersErreur = "";
    const zoneErreur = document.querySelector("[data-cours-fichiers-erreur]");
    if (zoneErreur) {
      zoneErreur.hidden = true;
      zoneErreur.textContent = "";
    }
    for (const fichier of fichiers) {
      await ajouterFichierCours(fichier);
    }
    entreeFichierCours.value = "";
    rendre();
    return;
  }

  const entreePhotoEntraide = evenement.target.closest("[data-photo-entraide]");
  if (entreePhotoEntraide) {
    const fichier = entreePhotoEntraide.files?.[0];
    if (!fichier) return;

    const jeton = etatEntraide.photoJeton + 1;
    etatEntraide.photoJeton = jeton;
    etatEntraide.photoEnCours = true;
    etatEntraide.photoErreur = "";
    rendre();

    try {
      const photo = await compresserImage(fichier);
      if (etatEntraide.photoJeton !== jeton) return;
      etatEntraide.photo = photo;
      etatEntraide.photoErreur = "";
    } catch (erreur) {
      if (etatEntraide.photoJeton !== jeton) return;
      etatEntraide.photo = null;
      etatEntraide.photoErreur =
        erreur?.message || "La photo n'a pas pu être préparée. Réessaie.";
    } finally {
      if (etatEntraide.photoJeton === jeton) {
        etatEntraide.photoEnCours = false;
        entreePhotoEntraide.value = "";
        rendre();
      }
    }
    return;
  }

  const entreeFichierExercice = evenement.target.closest("[data-exercice-fichiers]");
  if (entreeFichierExercice) {
    const fichiers = Array.from(entreeFichierExercice.files || []);
    if (fichiers.length === 0) {
      entreeFichierExercice.value = "";
      return;
    }
    etatExercices.fichiersErreur = "";
    const zoneErreur = document.querySelector("[data-exercice-fichiers-erreur]");
    if (zoneErreur) {
      zoneErreur.hidden = true;
      zoneErreur.textContent = "";
    }
    for (const fichier of fichiers) {
      await ajouterFichierExercice(fichier);
    }
    entreeFichierExercice.value = "";
    rendre();
    return;
  }

  const entreePhoto = evenement.target.closest("[data-photo-travail]");
  if (entreePhoto) {
    const fichier = entreePhoto.files?.[0];
    if (!fichier) return;

    const photoPrecedente = etatSuivi.photo;
    const jeton = etatSuivi.photoJeton + 1;
    etatSuivi.photoJeton = jeton;
    etatSuivi.brouillon = capturerBrouillonSuivi();
    etatSuivi.photoEnCours = true;
    etatSuivi.photoErreur = "";
    rendre();

    try {
      const photo = await compresserImage(fichier);
      if (etatSuivi.photoJeton !== jeton) return;
      etatSuivi.photo = photo;
      etatSuivi.photoErreur = "";
    } catch (erreur) {
      if (etatSuivi.photoJeton !== jeton) return;
      etatSuivi.photo = photoPrecedente;
      etatSuivi.photoErreur =
        erreur?.message || "La photo n'a pas pu être préparée. Réessaie.";
    } finally {
      if (etatSuivi.photoJeton === jeton) {
        etatSuivi.photoEnCours = false;
        rendre();
      }
    }
    return;
  }

  const selectEleveProgramme = evenement.target.closest(
    "[data-eleve-programme]"
  );
  if (selectEleveProgramme) {
    const eleve = eleves.find(
      (item) => item.id === selectEleveProgramme.value
    );
    if (!eleve) return;
    etatProgramme.eleveSelectionneId = eleve.id;
    if (nomsNiveaux().includes(eleve.classe)) {
      etatProgramme.filtreNiveau = eleve.classe;
    }
    etatProgramme.succes = "";
    etatProgramme.erreurAction = "";
    rendre();
    return;
  }

  const filtreMatiere = evenement.target.closest("[data-filtre-matiere]");
  if (!filtreMatiere) return;
  etatExercices.filtreMatiere = filtreMatiere.value;
  rendre();
});

document.addEventListener("submit", async (evenement) => {
  const formulaireValidationEleve = evenement.target.closest(
    "[data-form-validation-eleve]"
  );
  if (formulaireValidationEleve) {
    evenement.preventDefault();
    await confirmerValidationEleve(formulaireValidationEleve);
    return;
  }

  const formulaireDemandeSuppressionEleve = evenement.target.closest(
    "[data-form-demande-suppression-eleve]"
  );
  if (formulaireDemandeSuppressionEleve) {
    evenement.preventDefault();
    await envoyerDemandeSuppressionEleve(formulaireDemandeSuppressionEleve);
    return;
  }

  const formulaireSuppressionCompte = evenement.target.closest(
    "[data-form-suppression-compte]"
  );
  if (formulaireSuppressionCompte) {
    evenement.preventDefault();
    await supprimerMonCompte();
    return;
  }

  const formulaireAssistantDemarrage = evenement.target.closest(
    "[data-form-assistant-start]"
  );
  if (formulaireAssistantDemarrage) {
    evenement.preventDefault();
    await demarrerAideAssistant(formulaireAssistantDemarrage);
    return;
  }

  const formulaireAssistantMessage = evenement.target.closest(
    "[data-form-assistant-message]"
  );
  if (formulaireAssistantMessage) {
    evenement.preventDefault();
    const champ = formulaireAssistantMessage.querySelector(
      'textarea[name="message"]'
    );
    const message = String(champ?.value ?? "").trim();
    if (!message) {
      champ?.focus();
      return;
    }
    if (champ) champ.value = "";
    await envoyerDemandeAssistant({ message, action: "message" });
    return;
  }

  const formulaireCours = evenement.target.closest("[data-form-cours]");
  if (formulaireCours) {
    evenement.preventDefault();
    const donnees = new FormData(formulaireCours);
    const valeurs = {
      titre: String(donnees.get("titre") ?? "").trim(),
      niveau_id: String(donnees.get("niveau_id") ?? ""),
      matiere_id: String(donnees.get("matiere_id") ?? ""),
      chapitre_id: String(donnees.get("chapitre_id") ?? "") || null,
      description: String(donnees.get("description") ?? "").trim()
    };

    if (!valeurs.titre) {
      afficherErreurFormulaireCours("Le titre du cours est obligatoire.");
      document.getElementById("cours-titre")?.focus();
      return;
    }
    if (!niveauParId(valeurs.niveau_id)) {
      afficherErreurFormulaireCours("Choisis un niveau.");
      return;
    }
    if (!matiereParId(valeurs.matiere_id)) {
      afficherErreurFormulaireCours("Choisis une matière.");
      return;
    }
    if (valeurs.chapitre_id && !chapitreParId(valeurs.chapitre_id)) {
      afficherErreurFormulaireCours("Le chapitre sélectionné est introuvable.");
      return;
    }

    const idExistant = formulaireCours.dataset.id || null;
    const bouton = formulaireCours.querySelector('button[type="submit"]');
    const contenuInitial = bouton?.innerHTML ?? "";
    if (bouton) {
      bouton.disabled = true;
      bouton.textContent = "Enregistrement…";
    }

    enregistrerCours(valeurs, idExistant)
      .then(() => {
        fermerModalesCours();
        etatCours.succes = idExistant ? "Cours modifié." : "Cours ajouté.";
        etatCours.erreurAction = "";
        rendre();
      })
      .catch((erreur) => {
        console.warn("Le cours n'a pas pu être enregistré.", erreur);
        if (erreur?.coursId && !formulaireCours.dataset.id) {
          formulaireCours.dataset.id = erreur.coursId;
        }
        if (bouton) {
          bouton.disabled = false;
          bouton.innerHTML = contenuInitial;
        }
        afficherErreurFormulaireCours(
          erreur?.message || "Le cours n'a pas pu être enregistré. Réessaie."
        );
      });
    return;
  }

  const formulaireQuestionEntraide = evenement.target.closest(
    "[data-form-question-entraide]"
  );
  if (formulaireQuestionEntraide) {
    evenement.preventDefault();
    await creerQuestionEntraide(formulaireQuestionEntraide);
    return;
  }

  const formulaireReponseEntraide = evenement.target.closest(
    "[data-form-reponse-entraide]"
  );
  if (formulaireReponseEntraide) {
    evenement.preventDefault();
    await ajouterReponseEntraide(
      formulaireReponseEntraide,
      formulaireReponseEntraide.dataset.questionId
    );
    return;
  }

  const formulaireConnexion = evenement.target.closest("[data-form-connexion]");
  if (formulaireConnexion) {
    evenement.preventDefault();
    await connecterEncadreur(formulaireConnexion);
    return;
  }

  const formulaireInscription = evenement.target.closest(
    "[data-form-inscription]"
  );
  if (formulaireInscription) {
    evenement.preventDefault();
    await inscrireEncadreur(formulaireInscription);
    return;
  }

  const formulaireOubli = evenement.target.closest("[data-form-oubli]");
  if (formulaireOubli) {
    evenement.preventDefault();
    await demanderReinitialisationMotDePasse(formulaireOubli);
    return;
  }

  const formulaireNouveauMotDePasse = evenement.target.closest(
    "[data-form-nouveau-mot-de-passe]"
  );
  if (formulaireNouveauMotDePasse) {
    evenement.preventDefault();
    await enregistrerNouveauMotDePasse(formulaireNouveauMotDePasse);
    return;
  }

  const formulaireCodeEleve = evenement.target.closest(
    "[data-form-code-eleve]"
  );
  if (formulaireCodeEleve) {
    evenement.preventDefault();
    await rechercherCodeEleve(formulaireCodeEleve);
    return;
  }

  const formulairePinEleve = evenement.target.closest("[data-form-pin-eleve]");
  if (formulairePinEleve) {
    evenement.preventDefault();
    await connecterEleveAvecPin(formulairePinEleve);
    return;
  }

  const formulaireCreationEleve = evenement.target.closest(
    "[data-form-creation-eleve]"
  );
  if (formulaireCreationEleve) {
    evenement.preventDefault();
    await creerElevePublic(formulaireCreationEleve);
    return;
  }

  const formulaireTelephoneEncadreur = evenement.target.closest(
    "[data-form-telephone-encadreur]"
  );
  if (formulaireTelephoneEncadreur) {
    evenement.preventDefault();
    await enregistrerTelephoneEncadreur(formulaireTelephoneEncadreur);
    return;
  }

  const formulaireEleveEncadreur = evenement.target.closest(
    "[data-form-eleve-encadreur]"
  );
  if (formulaireEleveEncadreur) {
    evenement.preventDefault();
    await enregistrerEleveEncadreur(formulaireEleveEncadreur);
    return;
  }

  const formulairePinReset = evenement.target.closest("[data-form-pin-reset]");
  if (formulairePinReset) {
    evenement.preventDefault();
    await enregistrerNouveauPin(formulairePinReset);
    return;
  }

  const formulaireNiveau = evenement.target.closest("[data-form-niveau]");
  if (formulaireNiveau) {
    evenement.preventDefault();
    await enregistrerNiveau(formulaireNiveau);
    return;
  }

  const formulaireCorrectionTravail = evenement.target.closest(
    "[data-form-correction-travail]"
  );
  if (formulaireCorrectionTravail) {
    evenement.preventDefault();
    await enregistrerCorrectionTravail(formulaireCorrectionTravail);
    return;
  }

  const formulaireTravail = evenement.target.closest("[data-form-travail]");
  if (formulaireTravail) {
    evenement.preventDefault();
    await envoyerTravail(formulaireTravail);
    return;
  }

  const formulaireChapitre = evenement.target.closest(
    "[data-form-chapitre]"
  );
  if (formulaireChapitre) {
    evenement.preventDefault();

    const donnees = new FormData(formulaireChapitre);
    const valeurs = {
      titre: String(donnees.get("titre") ?? "").trim(),
      niveau: String(donnees.get("niveau") ?? ""),
      matiere_id: String(donnees.get("matiere_id") ?? ""),
      ordre: Number.parseInt(String(donnees.get("ordre") ?? ""), 10),
      description: String(donnees.get("description") ?? "").trim()
    };

    if (!valeurs.titre) {
      afficherErreurFormulaireChapitre(
        "Le titre du chapitre est obligatoire."
      );
      document.getElementById("chapitre-titre")?.focus();
      return;
    }
    if (!nomsNiveaux().includes(valeurs.niveau)) {
      afficherErreurFormulaireChapitre("Choisis un niveau.");
      document.getElementById("chapitre-niveau")?.focus();
      return;
    }
    if (!matiereParId(valeurs.matiere_id)) {
      afficherErreurFormulaireChapitre("Choisis une matière.");
      document.getElementById("chapitre-matiere")?.focus();
      return;
    }
    if (
      !Number.isInteger(valeurs.ordre) ||
      valeurs.ordre < 1 ||
      valeurs.ordre > 99
    ) {
      afficherErreurFormulaireChapitre(
        "Choisis un ordre entre 1 et 99."
      );
      document.getElementById("chapitre-ordre")?.focus();
      return;
    }

    const idExistant = formulaireChapitre.dataset.id || null;
    const bouton = formulaireChapitre.querySelector(
      'button[type="submit"]'
    );
    const contenuInitial = bouton?.innerHTML ?? "";
    if (bouton) {
      bouton.disabled = true;
      bouton.textContent = "Enregistrement…";
    }

    enregistrerChapitreProgramme(valeurs, idExistant)
      .then(() => {
        etatProgramme.filtreNiveau = valeurs.niveau;
        etatProgramme.filtreMatiere = valeurs.matiere_id;
        etatProgramme.succes = idExistant
          ? "Chapitre modifié."
          : "Chapitre ajouté.";
        etatProgramme.erreurAction = "";
        fermerModalesProgramme();
        rendre();
      })
      .catch((erreur) => {
        console.warn("Le chapitre n'a pas pu être enregistré.", erreur);
        if (bouton) {
          bouton.disabled = false;
          bouton.innerHTML = contenuInitial;
        }
        afficherErreurFormulaireChapitre(
          erreur?.message ||
            "Le chapitre n'a pas pu être enregistré. Réessaie."
        );
      });
    return;
  }

  const formulaire = evenement.target.closest("[data-form-exercice]");
  if (!formulaire) return;
  evenement.preventDefault();

  const donnees = new FormData(formulaire);
  const valeurs = {
    titre: String(donnees.get("titre") ?? "").trim(),
    chapitre_id: String(donnees.get("chapitre_id") ?? ""),
    enonce: String(donnees.get("enonce") ?? "").trim(),
    difficulte: String(donnees.get("difficulte") ?? "")
  };

  if (!valeurs.titre) {
    afficherErreurFormulaire("Le titre de l'exercice est obligatoire.");
    document.getElementById("exercice-titre")?.focus();
    return;
  }
  if (!chapitreParId(valeurs.chapitre_id)) {
    afficherErreurFormulaire("Choisis un chapitre pour cet exercice.");
    document.getElementById("exercice-chapitre")?.focus();
    return;
  }
  if (!["facile", "moyen", "difficile"].includes(valeurs.difficulte)) {
    afficherErreurFormulaire("Choisis une difficulté.");
    return;
  }
  if (!valeurs.enonce) {
    afficherErreurFormulaire("L'énoncé de l'exercice est obligatoire.");
    document.getElementById("exercice-enonce")?.focus();
    return;
  }

  const idExistant = formulaire.dataset.id || null;
  const bouton = formulaire.querySelector('button[type="submit"]');
  const contenuInitial = bouton?.innerHTML ?? "";
  if (bouton) {
    bouton.disabled = true;
    bouton.textContent = "Enregistrement…";
  }

  enregistrerExercice(valeurs, idExistant)
    .then(() => {
      if (!idExistant) {
        const chapitre = chapitreParId(valeurs.chapitre_id);
        if (chapitre) {
          etatExercices.filtreNiveau = chapitre.niveau;
          etatExercices.filtreMatiere = chapitre.matiere_id;
        }
      }
      fermerModalesExercices();
      rendre();
    })
    .catch((erreur) => {
      console.warn("L'exercice n'a pas pu être enregistré.", erreur);
      if (erreur?.exerciceId && !formulaire.dataset.id) {
        formulaire.dataset.id = erreur.exerciceId;
      }
      if (bouton) {
        bouton.disabled = false;
        bouton.innerHTML = contenuInitial;
      }
      afficherErreurFormulaire(
        erreur?.message || "L'exercice n'a pas pu être enregistré. Réessaie."
      );
    });
});

document.addEventListener("keydown", (evenement) => {
  if (evenement.key !== "Escape") return;
  if (
    !etatExercices.exerciceOuvertId &&
    !etatExercices.formulaire &&
    !etatExercices.suppressionId &&
    !etatProgramme.chapitreOuvertId &&
    !etatProgramme.formulaireChapitre &&
    !etatProgramme.suppressionChapitreId &&
    !etatEleves.formulaire &&
    !etatEleves.suppressionId &&
    !etatEleves.reinitialisationPinId &&
    !etatEleves.formulaireNiveau &&
    !etatEleves.suppressionNiveauId &&
    !etatCours.coursOuvertId &&
    !etatCours.formulaire &&
    !etatCours.suppressionId &&
    !etatEntraide.questionOuverteId &&
    !etatEntraide.formulaireQuestion &&
    !etatEntraide.suppressionQuestionId &&
    !etatEntraide.suppressionReponseId &&
    !etatAuth.suppressionCompteOuvert &&
    !etatAuth.demandeSuppressionEleveOuverte
  ) {
    return;
  }
  fermerModalesExercices();
  fermerModalesProgramme();
  fermerModalesEleves();
  fermerModalesCours();
  fermerModalesEntraide();
  etatAuth.suppressionCompteOuvert = false;
  etatAuth.demandeSuppressionEleveOuverte = false;
  rendre();
});

function planifierChargementRouteSecondaire(chemin) {
  if (!profil) return;
  if (chemin === "/plus/cours" && !etatCours.charge && !etatCours.chargement) {
    chargerCours();
  }
  if (
    chemin === "/plus/entraide" &&
    !etatEntraide.charge &&
    !etatEntraide.chargement
  ) {
    chargerEntraide();
  }
  if (
    ASSISTANT_IA_DISPONIBLE &&
    (chemin === "/plus/assistant" ||
      (profil?.role === "encadreur" && chemin === "/suivi")) &&
    !chargementEspace &&
    !etatAssistant.charge &&
    !etatAssistant.chargement &&
    !etatAssistant.erreur
  ) {
    chargerAssistant();
  }
}

function monIdentifiantAuth() {
  return etatAuth.utilisateur?.id ?? profil?.id ?? profil?.eleveId ?? null;
}

function ecranPlus() {
  const estEncadreur = profil?.role === "encadreur";

  return `
    <section class="plus-page" aria-labelledby="titre-plus">
      <header class="page-head">
        <p class="page-kicker">Tout ton espace</p>
        <h1 id="titre-plus">Plus</h1>
        <p>Retrouve les cours, l'entraide et les outils de ton espace.</p>
      </header>

      <div class="plus-grid">
        <a class="plus-card" href="#/plus/cours">
          <span class="plus-card-icon">${icone("book-open", 23)}</span>
          <span class="plus-card-body">
            <strong>Cours</strong>
            <span>Fiches, documents et ressources classés par matière.</span>
          </span>
          <span class="plus-card-arrow">${icone("chevron-right", 19)}</span>
        </a>

        <a class="plus-card" href="#/plus/entraide">
          <span class="plus-card-icon plus-card-icon--vert">${icone("messages-square", 23)}</span>
          <span class="plus-card-body">
            <strong>Entraide</strong>
            <span>Pose tes questions et aide tes camarades de classe.</span>
          </span>
          <span class="plus-card-arrow">${icone("chevron-right", 19)}</span>
        </a>

        ${
          ASSISTANT_IA_DISPONIBLE
            ? `<a class="plus-card" href="#/plus/assistant">
                <span class="plus-card-icon plus-card-icon--violet">${icone("sparkles", 23)}</span>
                <span class="plus-card-body">
                  <strong>Assistant IA</strong>
                  <span>${estEncadreur ? "Retrouve les aides IA demandées par tes élèves." : "Un coup de pouce pour vérifier ton exercice, sans la solution."}</span>
                </span>
                <span class="plus-card-arrow">${icone("chevron-right", 19)}</span>
              </a>`
            : `<div class="plus-card plus-card--disabled" aria-disabled="true">
                <span class="plus-card-icon plus-card-icon--violet">${icone("sparkles", 23)}</span>
                <span class="plus-card-body">
                  <strong>Assistant IA</strong>
                  <span>Bientôt disponible</span>
                </span>
                <span class="plus-card-badge">Bientôt</span>
              </div>`
        }

        ${
          estEncadreur
            ? `<a class="plus-card" href="#/eleves">
                <span class="plus-card-icon plus-card-icon--orange">${icone("users", 23)}</span>
                <span class="plus-card-body">
                  <strong>Mes élèves</strong>
                  <span>Gère ta classe et les demandes d'inscription.</span>
                </span>
                <span class="plus-card-arrow">${icone("chevron-right", 19)}</span>
              </a>`
            : ""
        }

        <a class="plus-card" href="#/profil">
          <span class="plus-card-icon plus-card-icon--gris">${icone("user-round-check", 23)}</span>
          <span class="plus-card-body">
            <strong>${estEncadreur ? "Mon profil / Code encadreur" : "Mon profil"}</strong>
            <span>${estEncadreur ? "Ton compte et ton code encadreur." : "Tes informations et ton encadreur."}</span>
          </span>
          <span class="plus-card-arrow">${icone("chevron-right", 19)}</span>
        </a>
      </div>

      <section class="plus-appearance" aria-labelledby="titre-apparence">
        <div class="plus-appearance-head">
          <span class="plus-appearance-icon">${icone("moon", 22)}</span>
          <div>
            <h2 id="titre-apparence">Apparence</h2>
            <p>Choisis ton thème. Le mode automatique active le sombre dès 18h30 et le garde jusqu'à ton prochain choix.</p>
          </div>
        </div>
        <div class="appearance-options" role="group" aria-label="Choix du thème">
          <button class="appearance-option" type="button" data-action="choisir-theme" data-theme-pref="auto" aria-pressed="${preferenceTheme() === "auto"}">
            ${icone("refresh-cw", 18)}<span>Auto</span>
          </button>
          <button class="appearance-option" type="button" data-action="choisir-theme" data-theme-pref="clair" aria-pressed="${preferenceTheme() === "clair"}">
            ${icone("sun", 18)}<span>Clair</span>
          </button>
          <button class="appearance-option" type="button" data-action="choisir-theme" data-theme-pref="sombre" aria-pressed="${preferenceTheme() === "sombre"}">
            ${icone("moon", 18)}<span>Sombre</span>
          </button>
        </div>
      </section>

      <div class="plus-legal-links">
        <a href="#/conditions">Conditions d'utilisation</a>
        <span aria-hidden="true">·</span>
        <a href="#/confidentialite">Confidentialité</a>
      </div>

      ${
        estEncadreur
          ? `<button class="btn btn-secondary btn-block plus-logout" type="button" data-action="changer-profil">
              ${icone("users", 17)} Changer de profil
            </button>`
          : ""
      }

      <button class="btn btn-secondary btn-block plus-logout" type="button" data-action="deconnexion">
        ${icone("log-out", 17)} Se déconnecter
      </button>
    </section>`;
}

function niveauIdPourClasse(classe) {
  return niveauxEspace.find((niveau) => niveau.nom === classe)?.id ?? null;
}

function niveauCours(cours) {
  return niveauParId(cours?.niveau_id)?.nom ?? "";
}

function coursParId(id) {
  return donneesCours.cours.find((cours) => cours.id === id) ?? null;
}

function fichiersCours(coursId) {
  return donneesCours.fichiers[coursId] || [];
}

function coursTries() {
  return [...donneesCours.cours].sort((a, b) => {
    const dateA = new Date(a.created_at || 0).getTime();
    const dateB = new Date(b.created_at || 0).getTime();
    return dateB - dateA;
  });
}

function coursAffiches() {
  return coursTries().filter((cours) => {
    if (profil?.role === "eleve" && niveauCours(cours) !== profil.classe) {
      return false;
    }
    if (
      profil?.role === "encadreur" &&
      etatCours.filtreNiveau !== "tous" &&
      niveauCours(cours) !== etatCours.filtreNiveau
    ) {
      return false;
    }
    if (
      etatCours.filtreMatiere !== "toutes" &&
      cours.matiere_id !== etatCours.filtreMatiere
    ) {
      return false;
    }
    return true;
  });
}

function etatVideSecondaire(message, action, libelleAction) {
  return `
    <div class="empty-state secondary-empty">
      <div class="empty-icon">${icone("book-open", 32)}</div>
      <p class="empty-message">${echapper(message)}</p>
      ${
        action
          ? `<button class="btn btn-secondary" type="button" data-action="${action}">${echapper(libelleAction)}</button>`
          : ""
      }
    </div>`;
}

function ecranCours() {
  const estEncadreur = profil?.role === "encadreur";
  const liste = coursAffiches();
  const enChargement = !etatCours.charge || etatCours.chargement;

  return `
    <section class="exercise-page cours-page" aria-labelledby="titre-cours">
      <header class="page-head">
        <a class="retour-lien" href="#/plus">${icone("arrow-left", 16)} Plus</a>
        <p class="page-kicker">Ressources de cours</p>
        <h1 id="titre-cours">Cours</h1>
        <p>${
          estEncadreur
            ? "Partage tes fiches et documents avec tes élèves."
            : "Retrouve les cours et documents de ton niveau."
        }</p>
      </header>

      ${
        estEncadreur
          ? `<button class="btn btn-primary btn-block add-exercise-btn" type="button" data-action="nouveau-cours">
              ${icone("plus", 18)} Ajouter un cours
            </button>`
          : ""
      }

      <div class="cours-filtres">
        ${
          estEncadreur
            ? `<div class="filter-line">
                <span class="filter-label">Niveau</span>
                <div class="filter-chips">
                  <button class="filter-chip" type="button" data-action="filtre-cours-niveau" data-niveau="tous" aria-pressed="${etatCours.filtreNiveau === "tous"}">Tous</button>
                  ${nomsNiveaux()
                    .map(
                      (niveau) => `
                        <button class="filter-chip" type="button" data-action="filtre-cours-niveau" data-niveau="${echapper(niveau)}" aria-pressed="${etatCours.filtreNiveau === niveau}">${echapper(niveau)}</button>`
                    )
                    .join("")}
                </div>
              </div>`
            : ""
        }
        <div class="filter-line">
          <span class="filter-label">Matière</span>
          <div class="filter-chips">
            <button class="filter-chip" type="button" data-action="filtre-cours-matiere" data-matiere="toutes" aria-pressed="${etatCours.filtreMatiere === "toutes"}">Toutes</button>
            ${donneesExercices.matieres
              .map(
                (matiere) => `
                  <button class="filter-chip" type="button" data-action="filtre-cours-matiere" data-matiere="${echapper(matiere.id)}" aria-pressed="${etatCours.filtreMatiere === matiere.id}">${echapper(matiere.nom)}</button>`
              )
              .join("")}
          </div>
        </div>
      </div>

      ${
        etatCours.succes
          ? `<div class="programme-banner programme-banner--success" role="status">${icone("check-circle", 18)}<p>${echapper(etatCours.succes)}</p></div>`
          : ""
      }
      ${
        etatCours.erreurAction
          ? `<div class="programme-banner programme-banner--error" role="alert">${icone("alert-circle", 18)}<p>${echapper(etatCours.erreurAction)}</p></div>`
          : ""
      }

      <div class="results-head">
        <h2>Les cours</h2>
        <span>${enChargement ? "…" : `${liste.length} cours`}</span>
      </div>

      ${
        enChargement
          ? `<div class="exercise-status"><span class="status-icon">${icone("clock", 22)}</span><h2>Chargement des cours</h2><p>Un instant, on prépare tes ressources.</p></div>`
          : etatCours.erreur
            ? `<div class="exercise-status exercise-status--error"><span class="status-icon">${icone("alert-circle", 22)}</span><h2>Cours indisponibles</h2><p>${echapper(etatCours.erreur)}</p><button class="btn btn-secondary" type="button" data-action="recharger-cours">Réessayer</button></div>`
            : liste.length === 0
              ? etatVideSecondaire(
                  estEncadreur
                    ? "Aucun cours pour le moment. Ajoute ta première fiche."
                    : "Aucun cours n'est encore disponible pour ton niveau.",
                  "",
                  ""
                )
              : `<div class="cours-liste">${liste.map(carteCours).join("")}</div>`
      }

      ${modaleDetailCours()}
      ${modaleFormulaireCours()}
      ${modaleSuppressionCours()}
    </section>`;
}

function carteCours(cours) {
  const matiere = matiereParId(cours.matiere_id);
  const niveau = niveauCours(cours);
  const fichiers = fichiersCours(cours.id);
  const description = String(cours.description ?? "").trim();

  return `
    <article class="cours-card">
      <div class="cours-card-head">
        <span class="subject-label" style="--matiere-couleur:${echapper(matiere?.couleur ?? "#1D4ED8")}">
          ${echapper(matiere?.nom ?? "Cours")}${niveau ? ` · ${echapper(niveau)}` : ""}
        </span>
        <span class="cours-card-date">${echapper(formaterDate(cours.created_at))}</span>
      </div>
      <h2>${echapper(cours.titre)}</h2>
      ${description ? `<p class="cours-card-desc">${echapper(description)}</p>` : ""}
      <div class="cours-card-foot">
        <span class="cours-card-files">${icone("file", 15)} ${fichiers.length} document${fichiers.length > 1 ? "s" : ""}</span>
        <button class="btn btn-secondary cours-open-btn" type="button" data-action="ouvrir-cours" data-id="${echapper(cours.id)}">
          Voir le cours ${icone("chevron-right", 16)}
        </button>
      </div>
    </article>`;
}

function modaleDetailCours() {
  const cours = coursParId(etatCours.coursOuvertId);
  if (!cours) return "";

  const matiere = matiereParId(cours.matiere_id);
  const niveau = niveauCours(cours);
  const chapitre = chapitreParId(cours.chapitre_id);
  const fichiers = fichiersCours(cours.id);
  const estEncadreur = profil?.role === "encadreur";

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section class="modal-sheet" role="dialog" aria-modal="true" aria-labelledby="titre-detail-cours">
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-cours" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <div class="detail-badges">
            <span class="subject-label" style="--matiere-couleur:${echapper(matiere?.couleur ?? "#1D4ED8")}">
              ${echapper(matiere?.nom ?? "Cours")}${niveau ? ` · ${echapper(niveau)}` : ""}
            </span>
            ${chapitre ? `<span class="cours-chapter-badge">${icone("book-open", 14)} ${echapper(chapitre.titre)}</span>` : ""}
          </div>
          <h2 id="titre-detail-cours">${echapper(cours.titre)}</h2>
          ${
            cours.description
              ? `<div class="statement-box">
                  <p class="statement-label">Contenu du cours</p>
                  <p class="statement-text">${echapper(cours.description)}</p>
                </div>`
              : ""
          }
          ${
            fichiers.length > 0
              ? `<div class="exercice-documents">
                  <p class="statement-label">Documents du cours</p>
                  <div class="exercice-fichiers-liste">
                    ${fichiers
                      .map((fichier) => {
                        const nom = fichier.nom_fichier || "Fichier";
                        const typeMime = fichier.type_mime || "";
                        const taille = formaterTailleFichier(fichier.taille);
                        const meta = [typeMime, taille].filter(Boolean).join(" · ");
                        return `
                          <button class="exercice-fichier-item exercice-fichier-item--bouton" type="button" data-action="ouvrir-fichier-cours" data-fichier-chemin="${echapper(fichier.chemin_stockage || "")}" data-fichier-nom="${echapper(nom)}" data-fichier-type="${echapper(typeMime)}">
                            <div class="exercice-fichier-info">
                              <span class="exercice-fichier-icone">${iconeFichier(typeMime, nom)}</span>
                              <div>
                                <span class="exercice-fichier-nom">${echapper(nom)}</span>
                                ${meta ? `<span class="exercice-fichier-meta">${echapper(meta)}</span>` : ""}
                              </div>
                            </div>
                            <span class="exercice-fichier-action">${icone("external-link", 16)}</span>
                          </button>`;
                      })
                      .join("")}
                  </div>
                </div>`
              : `<p class="cours-no-file">Aucun document joint pour ce cours.</p>`
          }
          <p class="form-error" data-cours-detail-error role="alert" hidden></p>
          ${
            estEncadreur
              ? `<div class="detail-action-row">
                  <button class="btn btn-secondary" type="button" data-action="modifier-cours">
                    ${icone("pencil", 17)} Modifier
                  </button>
                  <button class="btn btn-danger" type="button" data-action="demander-suppression-cours">
                    ${icone("trash", 17)} Supprimer
                  </button>
                </div>`
              : ""
          }
        </div>
      </section>
    </div>`;
}

function modaleFormulaireCours() {
  if (!etatCours.formulaire) return "";

  const estNouveau = etatCours.formulaire === "nouveau";
  const cours = estNouveau ? null : coursParId(etatCours.formulaire);
  if (!estNouveau && !cours) return "";

  const niveauSelectionne =
    cours?.niveau_id ?? niveauIdPourClasse(profil?.classe) ?? niveauxEspace[0]?.id ?? "";
  const matiereSelectionnee = cours?.matiere_id ?? donneesExercices.matieres[0]?.id ?? "";

  const optionsChapitres = chapitresTries()
    .map(
      (chapitre) => `
        <option value="${echapper(chapitre.id)}" ${chapitre.id === cours?.chapitre_id ? "selected" : ""}>
          ${echapper(chapitre.niveau)} · ${echapper(chapitre.titre)}
        </option>`
    )
    .join("");

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section class="modal-sheet modal-sheet--form" role="dialog" aria-modal="true" aria-labelledby="titre-formulaire-cours">
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-cours" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">${estNouveau ? "Nouveau cours" : "Modifier le cours"}</p>
          <h2 id="titre-formulaire-cours">${estNouveau ? "Ajouter un cours" : "Modifier ce cours"}</h2>
          <form class="exercise-form" data-form-cours data-id="${echapper(cours?.id ?? "")}">
            <label class="form-field" for="cours-titre">
              <span>Titre</span>
              <input id="cours-titre" name="titre" type="text" value="${echapper(cours?.titre ?? "")}" maxlength="140" placeholder="Ex. Fiche méthode : le théorème de Thalès" required />
            </label>
            <div class="form-grid-2">
              <label class="form-field" for="cours-niveau">
                <span>Niveau</span>
                <select id="cours-niveau" name="niveau_id" required>
                  ${niveauxEspace
                    .map(
                      (niveau) => `<option value="${echapper(niveau.id ?? "")}" ${niveau.id === niveauSelectionne ? "selected" : ""}>${echapper(niveau.nom)}</option>`
                    )
                    .join("")}
                </select>
              </label>
              <label class="form-field" for="cours-matiere">
                <span>Matière</span>
                <select id="cours-matiere" name="matiere_id" required>
                  ${donneesExercices.matieres
                    .map(
                      (matiere) => `<option value="${echapper(matiere.id)}" ${matiere.id === matiereSelectionnee ? "selected" : ""}>${echapper(matiere.nom)}</option>`
                    )
                    .join("")}
                </select>
              </label>
            </div>
            <label class="form-field" for="cours-chapitre">
              <span>Chapitre (facultatif)</span>
              <select id="cours-chapitre" name="chapitre_id">
                <option value="">Aucun chapitre</option>
                ${optionsChapitres}
              </select>
            </label>
            <label class="form-field" for="cours-description">
              <span>Description</span>
              <textarea id="cours-description" name="description" rows="5" maxlength="1200" placeholder="Résume le contenu du cours et ce que l'élève va apprendre.">${echapper(cours?.description ?? "")}</textarea>
            </label>
            <div class="form-field">
              <span>Documents</span>
              <input class="file-input" id="cours-fichiers" type="file" multiple accept="*/*" data-cours-fichiers />
              <label class="photo-picker" for="cours-fichiers">
                ${icone("file-plus", 17)}
                <span>Ajouter des fichiers</span>
              </label>
              <p class="field-hint">Tous types de fichiers acceptés · 50 Mo maximum par fichier</p>
              <p class="form-error" data-cours-fichiers-erreur role="alert" ${etatCours.fichiersErreur ? "" : "hidden"}>${echapper(etatCours.fichiersErreur || "")}</p>
              <div class="exercice-fichiers-liste">
                ${etatCours.fichiersFormulaire
                  .map((fichier) => {
                    const enCours = etatCours.fichiersEnCours[fichier.id];
                    const nom = fichier.nom_fichier || fichier.nom || "Fichier";
                    const typeMime = fichier.type_mime || fichier.typeMime || "";
                    const meta = [typeMime || "Fichier", formaterTailleFichier(fichier.taille)].filter(Boolean).join(" · ");
                    return `
                      <div class="exercice-fichier-item">
                        <span class="exercice-fichier-icone">${iconeFichier(typeMime, nom)}</span>
                        <div class="exercice-fichier-info">
                          <span class="exercice-fichier-nom">${echapper(nom)}</span>
                          <span class="exercice-fichier-meta">${echapper(meta)}</span>
                          ${enCours && enCours.progression !== undefined ? `<div class="exercice-fichier-progress"><div class="exercice-fichier-progress-bar" style="width:${enCours.progression}%"></div></div>` : ""}
                          ${enCours && enCours.erreur ? `<p class="form-error" role="alert">${echapper(enCours.erreur)}</p>` : ""}
                        </div>
                        <div class="exercice-fichier-actions">
                          ${
                            enCours && enCours.envoi
                              ? `<button class="text-btn" type="button" data-action="annuler-envoi-fichier-cours" data-fichier-id="${echapper(fichier.id)}">Annuler</button>`
                              : `<button class="text-btn" type="button" data-action="supprimer-fichier-cours" data-fichier-id="${echapper(fichier.id)}">Supprimer</button>`
                          }
                        </div>
                      </div>`;
                  })
                  .join("")}
              </div>
            </div>
            <p class="form-error" data-cours-error role="alert" hidden></p>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-cours">Annuler</button>
              <button class="btn btn-primary" type="submit">${estNouveau ? "Ajouter" : "Enregistrer"}</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleSuppressionCours() {
  const cours = coursParId(etatCours.suppressionId);
  if (!cours) return "";

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section class="modal-sheet modal-sheet--confirm" role="alertdialog" aria-modal="true" aria-labelledby="titre-suppression-cours" aria-describedby="texte-suppression-cours">
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-cours" aria-label="Fermer">${icone("x", 20)}</button>
        </div>
        <div class="modal-body">
          <span class="confirm-icon">${icone("trash", 24)}</span>
          <h2 id="titre-suppression-cours">Supprimer ce cours ?</h2>
          <p id="texte-suppression-cours">« ${echapper(cours.titre)} » et ses documents seront supprimés définitivement.</p>
          <p class="form-error" data-cours-delete-error role="alert" hidden></p>
          <div class="form-actions">
            <button class="btn btn-secondary" type="button" data-action="fermer-modale-cours">Annuler</button>
            <button class="btn btn-danger" type="button" data-action="confirmer-suppression-cours">Supprimer</button>
          </div>
        </div>
      </section>
    </div>`;
}

function fermerModalesCours() {
  etatCours.coursOuvertId = null;
  etatCours.formulaire = null;
  etatCours.suppressionId = null;
  etatCours.erreurFormulaire = "";
  etatCours.fichiersFormulaire = [];
  etatCours.fichiersEnCours = {};
  etatCours.fichiersErreur = "";
}

function ouvrirDetailCours(id) {
  if (!coursParId(id)) return;
  etatCours.coursOuvertId = id;
  etatCours.formulaire = null;
  etatCours.suppressionId = null;
  rendre();
  window.setTimeout(() => {
    document.querySelector(".modal-sheet .icon-btn")?.focus();
  }, 30);
}

function ouvrirFormulaireCours(id = null) {
  if (id && !coursParId(id)) return;
  etatCours.formulaire = id ?? "nouveau";
  etatCours.coursOuvertId = null;
  etatCours.suppressionId = null;
  etatCours.erreurFormulaire = "";
  etatCours.fichiersFormulaire = id ? fichiersCours(id).map((fichier) => ({ ...fichier })) : [];
  etatCours.fichiersEnCours = {};
  etatCours.fichiersErreur = "";
  rendre();
  window.setTimeout(() => {
    document.getElementById("cours-titre")?.focus();
  }, 30);
}

function demanderSuppressionCours(id) {
  if (!coursParId(id)) return;
  etatCours.suppressionId = id;
  etatCours.coursOuvertId = null;
  etatCours.formulaire = null;
  rendre();
}

function afficherErreurFormulaireCours(message) {
  const zone = document.querySelector("[data-cours-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function afficherErreurFichiersCours(message) {
  etatCours.fichiersErreur = message || "";
  const zone = document.querySelector("[data-cours-fichiers-erreur]");
  if (!zone) return;
  zone.textContent = message || "";
  zone.hidden = !message;
}

async function chargerCours() {
  if (etatCours.chargement) return;
  if (donneesCours.source === "demo") {
    etatCours.charge = true;
    rendre();
    return;
  }

  etatCours.chargement = true;
  etatCours.erreur = "";
  if (cheminActuel() === "/plus/cours") rendre();

  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);

    const [reponseCours, reponseFichiers] = await Promise.all([
      client
        .from("cours")
        .select("id, encadreur_id, niveau_id, matiere_id, chapitre_id, titre, description, created_at")
        .order("created_at", { ascending: false }),
      client
        .from("cours_fichiers")
        .select("id, cours_id, encadreur_id, nom_fichier, type_mime, taille, chemin_stockage, created_at")
        .order("created_at", { ascending: true })
    ]);
    const erreur = reponseCours.error ?? reponseFichiers.error;
    if (erreur) throw erreur;

    donneesCours.cours = reponseCours.data ?? [];
    donneesCours.fichiers = {};
    for (const fichier of reponseFichiers.data ?? []) {
      if (!donneesCours.fichiers[fichier.cours_id]) {
        donneesCours.fichiers[fichier.cours_id] = [];
      }
      donneesCours.fichiers[fichier.cours_id].push(fichier);
    }
    donneesCours.source = "supabase";
    etatCours.erreur = "";
  } catch (erreur) {
    console.warn("Les cours n'ont pas pu être chargés.", erreur);
    etatCours.erreur =
      "Les cours n'ont pas pu être chargés. Vérifie ta connexion puis réessaie.";
  } finally {
    etatCours.chargement = false;
    etatCours.charge = true;
    if (cheminActuel() === "/plus/cours") rendre();
  }
}

async function ajouterFichierCours(fichier) {
  if (!fichier) return;
  if (fichier.size > 50 * 1024 * 1024) {
    afficherErreurFichiersCours("Taille maximale 50 Mo par fichier.");
    return;
  }

  const idLocal = `tmp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const estImage = fichier.type?.startsWith("image/");
  etatCours.fichiersFormulaire.push({
    id: idLocal,
    nom_fichier: fichier.name,
    nom: fichier.name,
    type_mime: fichier.type,
    taille: fichier.size,
    temporaire: true
  });
  etatCours.fichiersEnCours[idLocal] = { envoi: true, progression: 0 };
  rendre();

  try {
    let fichierAEnvoyer = fichier;
    if (estImage) {
      fichierAEnvoyer = await compresserImagePourExercice(fichier);
    }

    const client = await obtenirClientSupabaseExercices();
    if (!client || !profil?.id) throw new Error("Impossible d'envoyer le fichier.");
    const extension = fichierAEnvoyer.name.includes(".")
      ? fichierAEnvoyer.name.split(".").pop()
      : fichier.type?.split("/")[1] || "bin";
    const chemin = `${profil.id}/${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${extension}`;

    const { error } = await client.storage
      .from("ressources")
      .upload(chemin, fichierAEnvoyer, {
        contentType: fichierAEnvoyer.type || fichier.type || "application/octet-stream",
        upsert: false
      });
    if (error) throw error;

    const index = etatCours.fichiersFormulaire.findIndex((item) => item.id === idLocal);
    if (index !== -1) {
      etatCours.fichiersFormulaire[index] = {
        ...etatCours.fichiersFormulaire[index],
        chemin_stockage: chemin,
        nom_fichier: fichier.name,
        type_mime: fichierAEnvoyer.type || fichier.type,
        taille: fichierAEnvoyer.size || fichier.size,
        temporaire: true,
        enAttenteEnregistrement: true
      };
    }
    delete etatCours.fichiersEnCours[idLocal];
    rendre();
  } catch (erreur) {
    etatCours.fichiersEnCours[idLocal] = {
      envoi: true,
      erreur: erreur?.message || "Échec d'envoi du fichier. Réessaie."
    };
    rendre();
  }
}

function annulerEnvoiFichierCours(fichierId) {
  etatCours.fichiersFormulaire = etatCours.fichiersFormulaire.filter(
    (fichier) => fichier.id !== fichierId
  );
  delete etatCours.fichiersEnCours[fichierId];
  rendre();
}

async function supprimerFichierCours(fichierId) {
  const fichier = etatCours.fichiersFormulaire.find(
    (item) => item.id === fichierId
  );
  if (!fichier) return;

  if (fichier.enAttenteEnregistrement && fichier.chemin_stockage) {
    try {
      const client = await obtenirClientSupabaseExercices();
      if (client) {
        await client.storage.from("ressources").remove([fichier.chemin_stockage]);
      }
    } catch (erreur) {
      console.warn("Le fichier n'a pas pu être supprimé du stockage.", erreur);
    }
  } else if (fichier.id && !fichier.temporaire) {
    try {
      const client = await obtenirClientSupabaseExercices();
      if (client) {
        await client.from("cours_fichiers").delete().eq("id", fichier.id);
        if (fichier.chemin_stockage) {
          await client.storage.from("ressources").remove([fichier.chemin_stockage]);
        }
      }
    } catch (erreur) {
      console.warn("Le fichier n'a pas pu être supprimé.", erreur);
      afficherErreurFichiersCours(
        erreur?.message || "Le fichier n'a pas pu être supprimé. Réessaie."
      );
      return;
    }
  }

  etatCours.fichiersFormulaire = etatCours.fichiersFormulaire.filter(
    (item) => item.id !== fichierId
  );
  delete etatCours.fichiersEnCours[fichierId];
  rendre();
}

async function enregistrerCours(valeurs, idExistant = null) {
  if (donneesCours.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const valeursDistantes = profil?.id
      ? { ...valeurs, encadreur_id: profil.id }
      : valeurs;

    let coursEnregistre = null;
    if (idExistant) {
      const { data, error } = await client
        .from("cours")
        .update(valeursDistantes)
        .eq("id", idExistant)
        .select("id, encadreur_id, niveau_id, matiere_id, chapitre_id, titre, description, created_at")
        .single();
      if (error) throw error;
      coursEnregistre = data;
      const index = donneesCours.cours.findIndex((item) => item.id === idExistant);
      if (index !== -1) donneesCours.cours[index] = data;
    } else {
      const { data, error } = await client
        .from("cours")
        .insert(valeursDistantes)
        .select("id, encadreur_id, niveau_id, matiere_id, chapitre_id, titre, description, created_at")
        .single();
      if (error) throw error;
      coursEnregistre = data;
      donneesCours.cours.unshift(data);
    }

    if (coursEnregistre && profil?.id) {
      const fichiersExistants = etatCours.fichiersFormulaire.filter(
        (fichier) => fichier.id && !fichier.temporaire
      );
      const aEnregistrer = etatCours.fichiersFormulaire.filter(
        (fichier) => fichier.enAttenteEnregistrement && fichier.chemin_stockage
      );
      const fichiersEnregistres = [];
      for (const fichier of aEnregistrer) {
        const { data, error } = await client
          .from("cours_fichiers")
          .insert({
            cours_id: coursEnregistre.id,
            encadreur_id: profil.id,
            nom_fichier: fichier.nom_fichier || fichier.nom,
            type_mime: fichier.type_mime || null,
            taille: fichier.taille || null,
            chemin_stockage: fichier.chemin_stockage
          })
          .select("id, cours_id, encadreur_id, nom_fichier, type_mime, taille, chemin_stockage, created_at")
          .single();
        if (error) {
          if (!idExistant) error.coursId = coursEnregistre.id;
          throw error;
        }
        fichiersEnregistres.push(data);
        const indexFichier = etatCours.fichiersFormulaire.findIndex(
          (item) => item.id === fichier.id
        );
        if (indexFichier !== -1) {
          etatCours.fichiersFormulaire[indexFichier] = {
            ...etatCours.fichiersFormulaire[indexFichier],
            ...data,
            temporaire: false,
            enAttenteEnregistrement: false
          };
        }
      }

      donneesCours.fichiers[coursEnregistre.id] = [
        ...fichiersExistants,
        ...fichiersEnregistres
      ];
    }
    return coursEnregistre;
  }

  if (idExistant) {
    const index = donneesCours.cours.findIndex((item) => item.id === idExistant);
    if (index === -1) throw new Error("Ce cours n'existe plus.");
    donneesCours.cours[index] = {
      ...donneesCours.cours[index],
      ...valeurs
    };
    return donneesCours.cours[index];
  }

  const cours = {
    id: `cours-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    ...valeurs,
    created_at: new Date().toISOString()
  };
  donneesCours.cours.unshift(cours);
  donneesCours.fichiers[cours.id] = [];
  return cours;
}

async function supprimerCours(id) {
  const cours = coursParId(id);
  if (!cours) return;

  if (donneesCours.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    try {
      const fichiers = fichiersCours(id);
      const chemins = fichiers.map((fichier) => fichier.chemin_stockage).filter(Boolean);
      if (chemins.length > 0) {
        await client.storage.from("ressources").remove(chemins);
      }
      await client.from("cours_fichiers").delete().eq("cours_id", id);
    } catch (erreur) {
      console.warn("Les documents du cours n'ont pas pu être supprimés.", erreur);
    }
    const { error } = await client.from("cours").delete().eq("id", id);
    if (error) throw error;
  }

  donneesCours.cours = donneesCours.cours.filter((item) => item.id !== id);
  delete donneesCours.fichiers[id];
}

function questionEntraideParId(id) {
  return donneesEntraide.questions.find((question) => question.id === id) ?? null;
}

function reponsesEntraideQuestion(questionId) {
  return donneesEntraide.reponses
    .filter((reponse) => reponse.question_id === questionId)
    .sort(
      (a, b) =>
        new Date(a.created_at || 0).getTime() -
        new Date(b.created_at || 0).getTime()
    );
}

function questionsEntraideAffichees() {
  return [...donneesEntraide.questions]
    .filter(
      (question) =>
        etatEntraide.filtreMatiere === "toutes" ||
        question.matiere_id === etatEntraide.filtreMatiere
    )
    .sort(
      (a, b) =>
        new Date(b.created_at || 0).getTime() -
        new Date(a.created_at || 0).getTime()
    );
}

function nombreUtilesReponse(reponseId) {
  return donneesEntraide.utiles.filter(
    (utile) => utile.reponse_id === reponseId
  ).length;
}

function reponseUtileParMoi(reponseId) {
  const utilisateurId = monIdentifiantAuth();
  return donneesEntraide.utiles.some(
    (utile) =>
      utile.reponse_id === reponseId &&
      utile.utilisateur_id === utilisateurId
  );
}

function reponseEstSignalee(reponseId) {
  const utilisateurId = monIdentifiantAuth();
  return donneesEntraide.signalements.some(
    (signalement) =>
      signalement.reponse_id === reponseId &&
      signalement.signale_par === utilisateurId
  );
}

function peutSupprimerQuestionEntraide(question) {
  if (!question) return false;
  if (profil?.role === "encadreur") return true;
  return (
    profil?.role === "eleve" &&
    String(question.eleve_id) === String(profil.eleveId)
  );
}

function peutSupprimerReponseEntraide(reponse, question) {
  if (!reponse) return false;
  if (profil?.role === "encadreur") return true;
  return String(reponse.auteur_id) === String(monIdentifiantAuth());
}

function blocStatutEntraide() {
  return `
    ${
      etatEntraide.succes
        ? `<div class="programme-banner programme-banner--success" role="status">${icone("check-circle", 18)}<p>${echapper(etatEntraide.succes)}</p></div>`
        : ""
    }
    ${
      etatEntraide.erreurAction
        ? `<div class="programme-banner programme-banner--error" role="alert">${icone("alert-circle", 18)}<p>${echapper(etatEntraide.erreurAction)}</p></div>`
        : ""
    }`;
}

function ecranEntraide() {
  const estEleve = profil?.role === "eleve";
  const questions = questionsEntraideAffichees();
  const enChargement = !etatEntraide.charge || etatEntraide.chargement;

  return `
    <section class="exercise-page entraide-page" aria-labelledby="titre-entraide">
      <header class="page-head">
        <a class="retour-lien" href="#/plus">${icone("arrow-left", 16)} Plus</a>
        <p class="page-kicker">Entre élèves</p>
        <h1 id="titre-entraide">Entraide</h1>
        <p>Pose tes questions et aide tes camarades de classe à progresser.</p>
      </header>

      <div class="entraide-rappel">
        ${icone("messages-square", 19)}
        <p>Aide tes camarades, ne donne pas juste la réponse : explique !</p>
      </div>

      ${
        estEleve
          ? `<button class="btn btn-primary btn-block add-exercise-btn" type="button" data-action="nouvelle-question-entraide">
              ${icone("plus", 18)} Poser une question
            </button>`
          : ""
      }

      <div class="filter-line">
        <span class="filter-label">Matière</span>
        <div class="filter-chips">
          <button class="filter-chip" type="button" data-action="filtre-entraide-matiere" data-matiere="toutes" aria-pressed="${etatEntraide.filtreMatiere === "toutes"}">Toutes</button>
          ${donneesExercices.matieres
            .map(
              (matiere) => `
                <button class="filter-chip" type="button" data-action="filtre-entraide-matiere" data-matiere="${echapper(matiere.id)}" aria-pressed="${etatEntraide.filtreMatiere === matiere.id}">${echapper(matiere.nom)}</button>`
            )
            .join("")}
        </div>
      </div>

      ${blocStatutEntraide()}

      <div class="results-head">
        <h2>Questions des élèves</h2>
        <span>${enChargement ? "…" : `${questions.length} question${questions.length > 1 ? "s" : ""}`}</span>
      </div>

      ${
        enChargement
          ? `<div class="exercise-status"><span class="status-icon">${icone("clock", 22)}</span><h2>Chargement de l'entraide</h2><p>Un instant, on retrouve les discussions.</p></div>`
          : etatEntraide.erreur
            ? `<div class="exercise-status exercise-status--error"><span class="status-icon">${icone("alert-circle", 22)}</span><h2>Entraide indisponible</h2><p>${echapper(etatEntraide.erreur)}</p><button class="btn btn-secondary" type="button" data-action="recharger-entraide">Réessayer</button></div>`
            : questions.length === 0
              ? `<div class="empty-state secondary-empty">
                  <div class="empty-icon">${icone("messages-square", 32)}</div>
                  <p class="empty-message">${
                    estEleve
                      ? "Aucune question pour le moment. Lance la première !"
                      : "Aucune question pour le moment dans ta classe."
                  }</p>
                </div>`
              : `<div class="entraide-liste">${questions.map(carteQuestionEntraide).join("")}</div>`
      }

      ${modaleDetailEntraide()}
      ${modaleFormulaireQuestionEntraide()}
      ${modaleSuppressionEntraide()}
    </section>`;
}

function carteQuestionEntraide(question) {
  const matiere = matiereParId(question.matiere_id);
  const reponses = reponsesEntraideQuestion(question.id);
  const message = String(question.message ?? "").replace(/\s+/g, " ").trim();

  return `
    <article class="entraide-card">
      <div class="cours-card-head">
        <span class="subject-label" style="--matiere-couleur:${echapper(matiere?.couleur ?? "#1D4ED8")}">
          ${echapper(matiere?.nom ?? "Question")}
        </span>
        <span class="cours-card-date">${echapper(formaterDate(question.created_at))}</span>
      </div>
      <h2>${echapper(question.titre)}</h2>
      <p class="entraide-auteur">${icone("graduation-cap", 14)} ${echapper(question.auteur_nom || "Un élève")}</p>
      ${message ? `<p class="cours-card-desc">${echapper(message)}</p>` : ""}
      <div class="cours-card-foot">
        <span class="cours-card-files">${icone("messages-square", 15)} ${reponses.length} réponse${reponses.length > 1 ? "s" : ""}</span>
        <button class="btn btn-secondary cours-open-btn" type="button" data-action="ouvrir-question-entraide" data-id="${echapper(question.id)}">
          Voir la discussion ${icone("chevron-right", 16)}
        </button>
      </div>
    </article>`;
}

function modaleDetailEntraide() {
  if (etatEntraide.suppressionQuestionId || etatEntraide.suppressionReponseId) {
    return "";
  }
  const question = questionEntraideParId(etatEntraide.questionOuverteId);
  if (!question) return "";

  const matiere = matiereParId(question.matiere_id);
  const reponses = reponsesEntraideQuestion(question.id);
  const utilisateurId = monIdentifiantAuth();

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section class="modal-sheet" role="dialog" aria-modal="true" aria-labelledby="titre-detail-entraide">
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-entraide" aria-label="Fermer">
            ${icone("x", 20)}
          </button>
        </div>
        <div class="modal-body">
          <div class="detail-badges">
            <span class="subject-label" style="--matiere-couleur:${echapper(matiere?.couleur ?? "#1D4ED8")}">
              ${echapper(matiere?.nom ?? "Question")}
            </span>
            <span class="cours-chapter-badge">${icone("graduation-cap", 14)} ${echapper(question.auteur_nom || "Un élève")}</span>
          </div>
          <h2 id="titre-detail-entraide">${echapper(question.titre)}</h2>
          <p class="entraide-date">${echapper(formaterDate(question.created_at))}</p>

          <div class="statement-box">
            <p class="statement-label">Question</p>
            <p class="statement-text">${echapper(question.message)}</p>
          </div>

          ${
            question.photo_signed
              ? `<button class="entraide-photo" type="button" data-action="ouvrir-photo-entraide" data-url="${echapper(question.photo_signed)}" data-nom="Photo de la question">
                  ${icone("image", 17)} Voir la photo jointe
                </button>`
              : ""
          }

          ${blocStatutEntraide()}

          <div class="entraide-reponses">
            <p class="statement-label">${reponses.length} réponse${reponses.length > 1 ? "s" : ""}</p>
            ${
              reponses.length === 0
                ? `<p class="entraide-empty">Personne n'a encore répondu. Sois le premier à aider !</p>`
                : reponses
                    .map((reponse) => {
                      const dejaUtile = reponseUtileParMoi(reponse.id);
                      const dejaSignalee = reponseEstSignalee(reponse.id);
                      const estMoi = String(reponse.auteur_id) === String(utilisateurId);
                      const peutSupprimer = peutSupprimerReponseEntraide(reponse, question);
                      return `
                        <div class="entraide-reponse ${dejaUtile ? "entraide-reponse--utile" : ""}">
                          <div class="entraide-reponse-head">
                            <span class="entraide-reponse-auteur">${reponse.auteur_type === "encadreur" ? icone("user-round-check", 14) : icone("graduation-cap", 14)} ${echapper(reponse.auteur_nom || "Utilisateur")}</span>
                            <span class="entraide-reponse-date">${echapper(formaterDate(reponse.created_at))}</span>
                          </div>
                          <p class="entraide-reponse-texte">${echapper(reponse.message)}</p>
                          <div class="entraide-reponse-actions">
                            <button class="entraide-action ${dejaUtile ? "entraide-action--active" : ""}" type="button" data-action="marquer-utile-entraide" data-id="${echapper(reponse.id)}" aria-pressed="${dejaUtile}">
                              ${icone("thumbs-up", 15)} Utile · ${nombreUtilesReponse(reponse.id)}
                            </button>
                            ${
                              estMoi || dejaSignalee
                                ? ""
                                : `<button class="entraide-action" type="button" data-action="signaler-reponse-entraide" data-id="${echapper(reponse.id)}">
                                    ${icone("flag", 15)} Signaler
                                  </button>`
                            }
                            ${
                              dejaSignalee
                                ? `<span class="entraide-signale">${icone("check", 14)} Signalé</span>`
                                : ""
                            }
                            ${
                              peutSupprimer
                                ? `<button class="entraide-action entraide-action--danger" type="button" data-action="supprimer-reponse-entraide" data-id="${echapper(reponse.id)}">
                                    ${icone("trash", 15)} Supprimer
                                  </button>`
                                : ""
                            }
                          </div>
                        </div>`;
                    })
                    .join("")
            }
          </div>

          <form class="entraide-reponse-form" data-form-reponse-entraide data-question-id="${echapper(question.id)}">
            <label class="form-field" for="entraide-reponse-texte">
              <span>Ta réponse</span>
              <textarea id="entraide-reponse-texte" name="message" rows="4" maxlength="2000" placeholder="Explique simplement, étape par étape…" required></textarea>
            </label>
            <p class="form-error" data-entraide-reponse-error role="alert" hidden></p>
            <button class="btn btn-primary btn-block" type="submit">
              ${icone("send", 17)} Publier ma réponse
            </button>
          </form>

          ${
            peutSupprimerQuestionEntraide(question)
              ? `<button class="btn btn-danger btn-block entraide-delete-question" type="button" data-action="demander-suppression-question-entraide" data-id="${echapper(question.id)}">
                  ${icone("trash", 17)} Supprimer cette question
                </button>`
              : ""
          }
        </div>
      </section>
    </div>`;
}

function modaleFormulaireQuestionEntraide() {
  if (!etatEntraide.formulaireQuestion) return "";

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section class="modal-sheet modal-sheet--form" role="dialog" aria-modal="true" aria-labelledby="titre-formulaire-entraide">
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-entraide" aria-label="Fermer">${icone("x", 20)}</button>
        </div>
        <div class="modal-body">
          <p class="modal-kicker">Nouvelle question</p>
          <h2 id="titre-formulaire-entraide">Demander de l'aide</h2>
          <form class="exercise-form" data-form-question-entraide>
            <label class="form-field" for="entraide-matiere">
              <span>Matière</span>
              <select id="entraide-matiere" name="matiere_id" required>
                ${donneesExercices.matieres
                  .map(
                    (matiere) => `<option value="${echapper(matiere.id)}">${echapper(matiere.nom)}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <label class="form-field" for="entraide-titre">
              <span>Titre</span>
              <input id="entraide-titre" name="titre" type="text" maxlength="140" placeholder="Ex. Je ne comprends pas l'étape 2 de Thalès" required />
            </label>
            <label class="form-field" for="entraide-message">
              <span>Ta question</span>
              <textarea id="entraide-message" name="message" rows="6" maxlength="2000" placeholder="Explique ce que tu as essayé et ce qui te bloque…" required></textarea>
            </label>
            <div class="photo-field">
              <span class="form-label">Photo (facultatif)</span>
              ${
                etatEntraide.photo?.dataUrl
                  ? `<div class="photo-preview">
                      <img src="${echapper(etatEntraide.photo.dataUrl)}" alt="Aperçu de la photo" />
                      <div class="photo-preview-copy">
                        <span>${echapper(etatEntraide.photo.nom || "Photo")}</span>
                        <button class="text-btn" type="button" data-action="retirer-photo-entraide">Retirer</button>
                      </div>
                    </div>`
                  : ""
              }
              <input class="file-input" id="entraide-photo" type="file" accept="image/jpeg,image/png,image/webp" data-photo-entraide ${etatEntraide.photoEnCours ? "disabled" : ""} />
              <label class="photo-picker ${etatEntraide.photoEnCours ? "photo-picker--disabled" : ""}" for="entraide-photo">
                ${icone("image", 17)}
                <span>${etatEntraide.photoEnCours ? "Préparation…" : "Ajouter une photo"}</span>
              </label>
              <p class="field-hint">JPG, PNG ou WebP · 5 Mo maximum</p>
              ${etatEntraide.photoErreur ? `<p class="form-error" role="alert">${echapper(etatEntraide.photoErreur)}</p>` : ""}
            </div>
            <p class="form-error" data-entraide-error role="alert" hidden></p>
            <div class="form-actions">
              <button class="btn btn-secondary" type="button" data-action="fermer-modale-entraide">Annuler</button>
              <button class="btn btn-primary" type="submit">Publier</button>
            </div>
          </form>
        </div>
      </section>
    </div>`;
}

function modaleSuppressionEntraide() {
  const question = questionEntraideParId(etatEntraide.suppressionQuestionId);
  const reponse =
    donneesEntraide.reponses.find(
      (item) => item.id === etatEntraide.suppressionReponseId
    ) ?? null;
  if (!question && !reponse) return "";

  return `
    <div class="modal-backdrop" data-fermer-modale>
      <section class="modal-sheet modal-sheet--confirm" role="alertdialog" aria-modal="true" aria-labelledby="titre-suppression-entraide">
        <div class="modal-top">
          <span class="sheet-handle" aria-hidden="true"></span>
          <button class="icon-btn" type="button" data-action="fermer-modale-entraide" aria-label="Fermer">${icone("x", 20)}</button>
        </div>
        <div class="modal-body">
          <span class="confirm-icon">${icone("trash", 24)}</span>
          <h2 id="titre-suppression-entraide">${question ? "Supprimer cette question ?" : "Supprimer cette réponse ?"}</h2>
          <p>${question ? `« ${echapper(question.titre)} » et toutes ses réponses seront supprimées.` : "Cette réponse sera supprimée définitivement."}</p>
          <p class="form-error" data-entraide-delete-error role="alert" hidden></p>
          <div class="form-actions">
            <button class="btn btn-secondary" type="button" data-action="fermer-modale-entraide">Annuler</button>
            <button class="btn btn-danger" type="button" data-action="confirmer-suppression-entraide">Supprimer</button>
          </div>
        </div>
      </section>
    </div>`;
}

function fermerModalesEntraide() {
  etatEntraide.questionOuverteId = null;
  etatEntraide.formulaireQuestion = false;
  etatEntraide.suppressionQuestionId = null;
  etatEntraide.suppressionReponseId = null;
  etatEntraide.erreurFormulaire = "";
  etatEntraide.photo = null;
  etatEntraide.photoEnCours = false;
  etatEntraide.photoErreur = "";
}

function ouvrirQuestionEntraide(id) {
  if (!questionEntraideParId(id)) return;
  etatEntraide.questionOuverteId = id;
  etatEntraide.formulaireQuestion = false;
  etatEntraide.erreurAction = "";
  etatEntraide.succes = "";
  rendre();
}

function ouvrirFormulaireQuestionEntraide() {
  if (profil?.role !== "eleve") return;
  etatEntraide.formulaireQuestion = true;
  etatEntraide.questionOuverteId = null;
  etatEntraide.erreurFormulaire = "";
  etatEntraide.photo = null;
  etatEntraide.photoErreur = "";
  rendre();
  window.setTimeout(() => {
    document.getElementById("entraide-titre")?.focus();
  }, 30);
}

function demanderSuppressionQuestionEntraide(id) {
  if (!questionEntraideParId(id)) return;
  etatEntraide.suppressionQuestionId = id;
  etatEntraide.suppressionReponseId = null;
  etatEntraide.questionOuverteId = null;
  rendre();
}

function demanderSuppressionReponseEntraide(id) {
  if (!donneesEntraide.reponses.some((reponse) => reponse.id === id)) return;
  etatEntraide.suppressionReponseId = id;
  etatEntraide.suppressionQuestionId = null;
  etatEntraide.questionOuverteId = null;
  rendre();
}

function afficherErreurFormulaireEntraide(message) {
  const zone = document.querySelector("[data-entraide-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

function afficherErreurReponseEntraide(message) {
  const zone = document.querySelector("[data-entraide-reponse-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

async function resoudrePhotosEntraide(client, questions) {
  return Promise.all(
    questions.map(async (question) => {
      const chemin = question.photo_url;
      if (!chemin || /^(https?:|data:)/i.test(chemin)) {
        return { ...question, photo_signed: chemin || "" };
      }
      const { data } = await client.storage
        .from("ressources")
        .createSignedUrl(chemin, 3600);
      return { ...question, photo_signed: data?.signedUrl ?? "" };
    })
  );
}

async function chargerEntraide() {
  if (etatEntraide.chargement) return;
  if (donneesEntraide.source === "demo") {
    etatEntraide.charge = true;
    rendre();
    return;
  }

  etatEntraide.chargement = true;
  etatEntraide.erreur = "";
  if (cheminActuel() === "/plus/entraide") rendre();

  try {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);

    const [reponseQuestions, reponseReponses, reponseUtiles, reponseSignalements] =
      await Promise.all([
        client
          .from("entraide_questions")
          .select("id, encadreur_id, eleve_id, matiere_id, titre, message, auteur_nom, photo_url, created_at")
          .order("created_at", { ascending: false }),
        client
          .from("entraide_reponses")
          .select("id, question_id, auteur_type, auteur_id, auteur_nom, message, created_at")
          .order("created_at", { ascending: true }),
        client.from("entraide_utiles").select("reponse_id, utilisateur_id"),
        client.from("entraide_signalements").select("id, reponse_id, signale_par, created_at")
      ]);

    const erreur =
      reponseQuestions.error ??
      reponseReponses.error ??
      reponseUtiles.error ??
      reponseSignalements.error;
    if (erreur) throw erreur;

    donneesEntraide.questions = await resoudrePhotosEntraide(
      client,
      reponseQuestions.data ?? []
    );
    donneesEntraide.reponses = reponseReponses.data ?? [];
    donneesEntraide.utiles = reponseUtiles.data ?? [];
    donneesEntraide.signalements = reponseSignalements.data ?? [];
    donneesEntraide.source = "supabase";
    etatEntraide.erreur = "";
  } catch (erreur) {
    console.warn("L'entraide n'a pas pu être chargée.", erreur);
    etatEntraide.erreur =
      "L'entraide n'a pas pu être chargée. Vérifie ta connexion puis réessaie.";
  } finally {
    etatEntraide.chargement = false;
    etatEntraide.charge = true;
    if (cheminActuel() === "/plus/entraide") rendre();
  }
}

async function televerserPhotoEntraide(client, photo) {
  const reponse = await fetch(photo.dataUrl);
  const blob = await reponse.blob();
  const extension = blob.type === "image/png" ? "png" : blob.type === "image/webp" ? "webp" : "jpg";
  const chemin = `entraide/${profil.encadreurId}/${profil.eleveId}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}.${extension}`;
  const { error } = await client.storage
    .from("ressources")
    .upload(chemin, blob, { contentType: blob.type, upsert: false });
  if (error) throw error;
  return chemin;
}

async function creerQuestionEntraide(formulaire) {
  if (profil?.role !== "eleve") return;

  const donnees = new FormData(formulaire);
  const titre = String(donnees.get("titre") ?? "").trim();
  const message = String(donnees.get("message") ?? "").trim();
  const matiereId = String(donnees.get("matiere_id") ?? "");

  if (!titre) {
    afficherErreurFormulaireEntraide("Le titre de la question est obligatoire.");
    document.getElementById("entraide-titre")?.focus();
    return;
  }
  if (!message) {
    afficherErreurFormulaireEntraide("Explique ce qui te bloque.");
    document.getElementById("entraide-message")?.focus();
    return;
  }
  if (!matiereParId(matiereId)) {
    afficherErreurFormulaireEntraide("Choisis une matière.");
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Publication…");
  try {
    let question = null;
    if (donneesEntraide.source === "supabase") {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);

      let photoChemin = null;
      if (etatEntraide.photo?.dataUrl) {
        photoChemin = await televerserPhotoEntraide(client, etatEntraide.photo);
      }

      const { data, error } = await client
        .from("entraide_questions")
        .insert({
          encadreur_id: profil.encadreurId,
          eleve_id: profil.eleveId,
          matiere_id: matiereId,
          titre,
          message,
          auteur_nom: profil.prenom || "Élève",
          photo_url: photoChemin
        })
        .select("id, encadreur_id, eleve_id, matiere_id, titre, message, auteur_nom, photo_url, created_at")
        .single();
      if (error) throw error;
      question = {
        ...data,
        photo_signed: etatEntraide.photo?.dataUrl || ""
      };
      donneesEntraide.questions.unshift(question);
    } else {
      question = {
        id: `entraide-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        encadreur_id: profil.encadreurId,
        eleve_id: profil.eleveId,
        matiere_id: matiereId,
        titre,
        message,
        auteur_nom: profil.prenom || "Élève",
        photo_url: null,
        photo_signed: etatEntraide.photo?.dataUrl || "",
        created_at: new Date().toISOString()
      };
      donneesEntraide.questions.unshift(question);
    }

    etatEntraide.photo = null;
    etatEntraide.photoErreur = "";
    etatEntraide.formulaireQuestion = false;
    etatEntraide.succes = "Ta question a été publiée.";
    etatEntraide.erreurAction = "";
    etatEntraide.questionOuverteId = question?.id ?? null;
  } catch (erreur) {
    console.warn("La question n'a pas pu être publiée.", erreur);
    afficherErreurFormulaireEntraide(
      erreur?.message || "La question n'a pas pu être publiée. Réessaie."
    );
  } finally {
    restaurerBouton();
    rendre();
  }
}

async function ajouterReponseEntraide(formulaire, questionId) {
  const question = questionEntraideParId(questionId);
  if (!question || !profil) return;

  const donnees = new FormData(formulaire);
  const message = String(donnees.get("message") ?? "").trim();
  if (!message) {
    afficherErreurReponseEntraide("Écris ta réponse avant de publier.");
    document.getElementById("entraide-reponse-texte")?.focus();
    return;
  }

  const restaurerBouton = boutonEnCours(formulaire, "Publication…");
  try {
    const reponse = {
      question_id: questionId,
      auteur_type: profil.role,
      auteur_id: monIdentifiantAuth(),
      auteur_nom: profil.prenom || "Utilisateur",
      message
    };

    if (donneesEntraide.source === "supabase") {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);
      const { data, error } = await client
        .from("entraide_reponses")
        .insert(reponse)
        .select("id, question_id, auteur_type, auteur_id, auteur_nom, message, created_at")
        .single();
      if (error) throw error;
      donneesEntraide.reponses.push(data);
    } else {
      donneesEntraide.reponses.push({
        ...reponse,
        id: `reponse-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        created_at: new Date().toISOString()
      });
    }

    etatEntraide.succes = "Ta réponse a été publiée.";
    etatEntraide.erreurAction = "";
  } catch (erreur) {
    console.warn("La réponse n'a pas pu être publiée.", erreur);
    afficherErreurReponseEntraide(
      erreur?.message || "La réponse n'a pas pu être publiée. Réessaie."
    );
  } finally {
    restaurerBouton();
    rendre();
  }
}

async function basculerUtileEntraide(reponseId) {
  if (!reponseId) return;
  const utilisateurId = monIdentifiantAuth();
  const dejaUtile = reponseUtileParMoi(reponseId);
  etatEntraide.erreurAction = "";
  etatEntraide.succes = "";

  try {
    if (donneesEntraide.source === "supabase") {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);
      if (dejaUtile) {
        const { error } = await client
          .from("entraide_utiles")
          .delete()
          .eq("reponse_id", reponseId)
          .eq("utilisateur_id", utilisateurId);
        if (error) throw error;
        donneesEntraide.utiles = donneesEntraide.utiles.filter(
          (utile) =>
            !(
              utile.reponse_id === reponseId &&
              utile.utilisateur_id === utilisateurId
            )
        );
      } else {
        const { error } = await client
          .from("entraide_utiles")
          .insert({ reponse_id: reponseId, utilisateur_id: utilisateurId });
        if (error) throw error;
        donneesEntraide.utiles.push({
          reponse_id: reponseId,
          utilisateur_id: utilisateurId
        });
      }
    } else if (dejaUtile) {
      donneesEntraide.utiles = donneesEntraide.utiles.filter(
        (utile) =>
          !(
            utile.reponse_id === reponseId &&
            utile.utilisateur_id === utilisateurId
          )
      );
    } else {
      donneesEntraide.utiles.push({
        reponse_id: reponseId,
        utilisateur_id: utilisateurId
      });
    }

    etatEntraide.succes = dejaUtile
      ? "Ta marque « Utile » a été retirée."
      : "Réponse marquée comme utile.";
  } catch (erreur) {
    console.warn("La réponse n'a pas pu être marquée comme utile.", erreur);
    etatEntraide.erreurAction =
      "Impossible de marquer cette réponse. Réessaie.";
  } finally {
    rendre();
  }
}

async function signalerReponseEntraide(reponseId) {
  if (!reponseId || reponseEstSignalee(reponseId)) return;
  const utilisateurId = monIdentifiantAuth();
  etatEntraide.erreurAction = "";
  etatEntraide.succes = "";

  try {
    if (donneesEntraide.source === "supabase") {
      const client = await obtenirClientSupabaseExercices();
      exigerClientActif(client);
      const { error } = await client
        .from("entraide_signalements")
        .insert({ reponse_id: reponseId, signale_par: utilisateurId });
      if (error) throw error;
    }
    donneesEntraide.signalements.push({
      id: `signal-${Date.now().toString(36)}`,
      reponse_id: reponseId,
      signale_par: utilisateurId,
      created_at: new Date().toISOString()
    });
    etatEntraide.succes =
      "Merci, ton signalement a été transmis à l'encadreur.";
  } catch (erreur) {
    console.warn("Le signalement n'a pas pu être envoyé.", erreur);
    etatEntraide.erreurAction =
      "Le signalement n'a pas pu être envoyé. Réessaie.";
  } finally {
    rendre();
  }
}

async function supprimerQuestionEntraide(id) {
  const question = questionEntraideParId(id);
  if (!question) return;

  if (donneesEntraide.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    if (question.photo_url && !/^(https?:|data:)/i.test(question.photo_url)) {
      try {
        await client.storage.from("ressources").remove([question.photo_url]);
      } catch (erreur) {
        console.warn("La photo de la question n'a pas pu être supprimée.", erreur);
      }
    }
    const { error } = await client
      .from("entraide_questions")
      .delete()
      .eq("id", id);
    if (error) throw error;
  }

  donneesEntraide.questions = donneesEntraide.questions.filter(
    (item) => item.id !== id
  );
  const idsReponses = donneesEntraide.reponses
    .filter((reponse) => reponse.question_id === id)
    .map((reponse) => reponse.id);
  donneesEntraide.reponses = donneesEntraide.reponses.filter(
    (reponse) => reponse.question_id !== id
  );
  donneesEntraide.utiles = donneesEntraide.utiles.filter(
    (utile) => !idsReponses.includes(utile.reponse_id)
  );
  donneesEntraide.signalements = donneesEntraide.signalements.filter(
    (signalement) => !idsReponses.includes(signalement.reponse_id)
  );
}

async function supprimerReponseEntraide(id) {
  if (!donneesEntraide.reponses.some((reponse) => reponse.id === id)) return;

  if (donneesEntraide.source === "supabase") {
    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);
    const { error } = await client
      .from("entraide_reponses")
      .delete()
      .eq("id", id);
    if (error) throw error;
  }

  donneesEntraide.reponses = donneesEntraide.reponses.filter(
    (reponse) => reponse.id !== id
  );
  donneesEntraide.utiles = donneesEntraide.utiles.filter(
    (utile) => utile.reponse_id !== id
  );
  donneesEntraide.signalements = donneesEntraide.signalements.filter(
    (signalement) => signalement.reponse_id !== id
  );
}

function travailAssistantParId(id) {
  return donneesSuivi.travaux.find((travail) => travail.id === id) ?? null;
}

function aidesIaDuTravail(travailId) {
  if (profil?.role !== "encadreur") return [];
  return etatAssistant.messages.filter(
    (message) => message.travail_id === travailId
  );
}

function travauxAssistantEleve() {
  if (profil?.role !== "eleve") return [];
  return donneesSuivi.travaux.filter(
    (travail) => travail.eleve_id === profil.eleveId
  );
}

function messagesAssistantConversation(travailId = etatAssistant.travailId) {
  const cible = travailId ?? null;
  return etatAssistant.messages.filter(
    (message) => (message.travail_id ?? null) === cible
  );
}

function compterDemandesAssistantAujourdhui() {
  const debutJour = new Date();
  debutJour.setUTCHours(0, 0, 0, 0);
  return etatAssistant.messages.filter((message) => {
    if (message.role !== "eleve") return false;
    const date = new Date(message.created_at);
    return !Number.isNaN(date.getTime()) && date >= debutJour;
  }).length;
}

function reinitialiserEtatAssistant() {
  etatAssistant.charge = false;
  etatAssistant.chargement = false;
  etatAssistant.erreur = "";
  etatAssistant.erreurAction = "";
  etatAssistant.succes = "";
  etatAssistant.messages = [];
  etatAssistant.travailId = null;
  etatAssistant.demarrage = true;
  etatAssistant.enonce = "";
  etatAssistant.photo = null;
  etatAssistant.photoEnCours = false;
  etatAssistant.photoErreur = "";
  etatAssistant.photoJeton = 0;
  etatAssistant.envoiEnCours = false;
  etatAssistant.erreurEnvoi = "";
  etatAssistant.limiteAtteinte = false;
  etatAssistant.utilisees = 0;
  etatAssistant.derniereDemande = null;
}

async function chargerAssistant(forcer = false) {
  if (!profil || etatAssistant.chargement) return;
  if (etatAssistant.charge && !forcer) return;

  etatAssistant.chargement = true;
  etatAssistant.erreur = "";
  if (cheminActuel() === "/plus/assistant") rendre();

  try {
    if (MODE_APERCU || donneesSuivi.source === "demo") {
      etatAssistant.charge = true;
      etatAssistant.utilisees = compterDemandesAssistantAujourdhui();
      etatAssistant.limiteAtteinte = etatAssistant.utilisees >= ASSISTANT_LIMITE_JOUR;
      return;
    }

    const client = await obtenirClientSupabaseExercices();
    exigerClientActif(client);

    let requete = client
      .from("assistant_messages")
      .select("id, eleve_id, travail_id, role, contenu, created_at")
      .order("created_at", { ascending: false })
      .limit(300);
    if (profil.role === "eleve") {
      requete = requete.eq("eleve_id", profil.eleveId);
    }

    const { data, error } = await requete;
    if (error) throw error;

    etatAssistant.messages = [...(data ?? [])].reverse();
    etatAssistant.charge = true;
    etatAssistant.utilisees =
      profil.role === "eleve" ? compterDemandesAssistantAujourdhui() : 0;
    etatAssistant.limiteAtteinte =
      profil.role === "eleve" &&
      etatAssistant.utilisees >= ASSISTANT_LIMITE_JOUR;
  } catch (erreur) {
    console.warn("Les aides IA n'ont pas pu être chargées.", erreur);
    etatAssistant.erreur =
      "Les aides IA n'ont pas pu être chargées. Vérifie ta connexion puis réessaie.";
  } finally {
    etatAssistant.chargement = false;
    const rendreSuiviEncadreur =
      profil?.role === "encadreur" && cheminActuel() === "/suivi";
    if (cheminActuel() === "/plus/assistant" || rendreSuiviEncadreur) rendre();
  }
}

function reinitialiserConversationAssistant() {
  etatAssistant.travailId = null;
  etatAssistant.demarrage = true;
  etatAssistant.enonce = "";
  etatAssistant.photo = null;
  etatAssistant.photoEnCours = false;
  etatAssistant.photoErreur = "";
  etatAssistant.erreurEnvoi = "";
  etatAssistant.derniereDemande = null;
  const utilisees = compterDemandesAssistantAujourdhui();
  etatAssistant.utilisees = utilisees;
  etatAssistant.limiteAtteinte = utilisees >= ASSISTANT_LIMITE_JOUR;
  rendre();
  window.setTimeout(() => {
    document.getElementById("assistant-travail")?.focus();
  }, 60);
}

function blocStatutAssistant() {
  return `
    ${
      etatAssistant.erreurAction
        ? `<div class="programme-banner programme-banner--error" role="alert">${icone("alert-circle", 18)}<p>${echapper(etatAssistant.erreurAction)}</p></div>`
        : ""
    }
    ${
      etatAssistant.succes
        ? `<div class="programme-banner programme-banner--success" role="status">${icone("check-circle", 18)}<p>${echapper(etatAssistant.succes)}</p></div>`
        : ""
    }`;
}

function ecranAssistant() {
  const estEleve = profil?.role === "eleve";

  return `
    <section class="exercise-page assistant-page" aria-labelledby="titre-assistant">
      <header class="page-head">
        <a class="retour-lien" href="#/plus">${icone("arrow-left", 16)} Plus</a>
        <p class="page-kicker">${estEleve ? "Un coup de pouce" : "Suivi des aides"}</p>
        <h1 id="titre-assistant">Assistant IA</h1>
        <p>${estEleve ? "Vérifie ton exercice avec des indices, sans recevoir la solution complète." : "Retrouve les conversations IA de tes élèves, en lecture seule."}</p>
      </header>

      ${
        estEleve
          ? `<div class="assistant-rappel">
              ${icone("sparkles", 20)}
              <p><strong>L'IA peut se tromper.</strong> Montre toujours ton travail à ton encadreur.</p>
            </div>`
          : ""
      }

      ${blocStatutAssistant()}

      ${
        estEleve
          ? contenuAssistantEleve()
          : contenuAssistantEncadreur()
      }
    </section>`;
}

function formulaireDemarrageAssistant() {
  const travaux = travauxAssistantEleve();
  const travailSelectionne = etatAssistant.travailId
    ? travailAssistantParId(etatAssistant.travailId)
    : null;

  return `
    <div class="assistant-setup">
      <h2>Sur quel travail veux-tu de l'aide ?</h2>
      <p class="assistant-setup-lead">Choisis un travail déjà envoyé, ou ajoute une photo de ton exercice.</p>

      <form class="assistant-form" data-form-assistant-start>
        <label class="form-field" for="assistant-travail">
          <span>Un de tes travaux déjà envoyés</span>
          <select id="assistant-travail" name="travail_id" data-assistant-travail>
            <option value="">Choisir un travail</option>
            ${travaux
              .map(
                (travail) => `<option value="${echapper(travail.id)}" ${etatAssistant.travailId === travail.id ? "selected" : ""}>${echapper(travail.titre)}${travail.date_envoi ? ` · ${echapper(formaterDate(travail.date_envoi))}` : ""}</option>`
              )
              .join("")}
          </select>
        </label>

        ${
          travaux.length === 0
            ? `<p class="assistant-empty-hint">Tu n'as pas encore envoyé de travail. Tu peux quand même envoyer une photo de ton exercice.</p>`
            : ""
        }

        ${
          travailSelectionne
            ? `<div class="assistant-work-preview">
                <span class="assistant-work-icon">${icone("notebook-pen", 18)}</span>
                <span>
                  <strong>${echapper(travailSelectionne.titre)}</strong>
                  <small>${echapper(matiereParId(travailSelectionne.matiere_id)?.nom ?? "Travail envoyé")}</small>
                </span>
              </div>`
            : ""
        }

        <div class="assistant-separateur"><span>ou</span></div>

        <div class="photo-field">
          <span class="form-field-label">Une photo de ton exercice</span>
          ${
            etatAssistant.photo?.dataUrl
              ? `<div class="photo-preview">
                  <img src="${echapper(etatAssistant.photo.dataUrl)}" alt="Aperçu de la photo de l'exercice" />
                  <div class="photo-preview-info">
                    <span>${echapper(etatAssistant.photo.nom || "Photo")}</span>
                    <button class="entraide-action entraide-action--danger" type="button" data-action="assistant-retirer-photo">
                      ${icone("x", 14)} Retirer
                    </button>
                  </div>
                </div>`
              : ""
          }
          <input class="file-input" id="assistant-photo" type="file" accept="image/jpeg,image/png,image/webp" data-photo-assistant ${etatAssistant.photoEnCours ? "disabled" : ""} />
          <label class="photo-picker ${etatAssistant.photoEnCours ? "photo-picker--disabled" : ""}" for="assistant-photo">
            ${icone("image", 17)}
            <span>${etatAssistant.photoEnCours ? "Préparation…" : etatAssistant.photo ? "Changer la photo" : "Ajouter une photo"}</span>
          </label>
          <p class="field-hint">JPG, PNG ou WebP · 5 Mo maximum. La photo est compressée avant l'envoi.</p>
          ${etatAssistant.photoErreur ? `<p class="form-error" role="alert">${echapper(etatAssistant.photoErreur)}</p>` : ""}
        </div>

        <label class="form-field" for="assistant-enonce">
          <span>L'énoncé de l'exercice ${etatAssistant.photo ? "(obligatoire avec une photo)" : "(facultatif)"}</span>
          <textarea id="assistant-enonce" name="enonce" rows="3" maxlength="2000" data-assistant-enonce placeholder="Recopie ou résume l'énoncé de ton exercice…">${echapper(etatAssistant.enonce)}</textarea>
        </label>

        <p class="assistant-privacy">${icone("shield-check", 15)} N'écris pas ton nom de famille ni d'autres informations personnelles.</p>
        <p class="form-error" data-assistant-error role="alert" hidden></p>

        <button class="btn btn-primary btn-block" type="submit" ${etatAssistant.photoEnCours ? "disabled" : ""}>
          ${icone("sparkles", 18)} Demander de l'aide
        </button>
      </form>
    </div>`;
}

function bulleMessageAssistant(message) {
  const estIa = message.role === "ia";
  const auteurEleve = profil?.role === "encadreur" ? "Élève" : "Toi";
  return `
    <article class="assistant-message assistant-message--${estIa ? "ia" : "eleve"}">
      <div class="assistant-message-head">
        <span class="assistant-message-auteur">
          ${estIa ? icone("sparkles", 14) : icone("graduation-cap", 14)}
          ${estIa ? "Indice IA" : auteurEleve}
        </span>
        ${!message.pending && message.created_at ? `<span class="assistant-message-date">${echapper(formaterDate(message.created_at))}</span>` : ""}
      </div>
      <p class="assistant-message-text">${echapper(message.contenu)}</p>
      ${
        estIa
          ? `<p class="assistant-message-note">${icone("alert-circle", 13)} L'IA peut se tromper. Montre ton travail à ton encadreur.</p>`
          : ""
      }
    </article>`;
}

function blocErreurEnvoiAssistant() {
  if (!etatAssistant.erreurEnvoi) return "";
  const reessayer =
    !etatAssistant.limiteAtteinte && etatAssistant.derniereDemande
      ? `<button class="btn btn-secondary" type="button" data-action="assistant-reessayer-envoi">${icone("refresh-cw", 16)} Réessayer</button>`
      : "";
  return `
    <div class="assistant-error" role="alert">
      ${icone("alert-circle", 18)}
      <div>
        <p>${echapper(etatAssistant.erreurEnvoi)}</p>
        ${reessayer}
      </div>
    </div>`;
}

function conversationAssistant() {
  const travail = etatAssistant.travailId
    ? travailAssistantParId(etatAssistant.travailId)
    : null;
  const messages = messagesAssistantConversation();
  const afficherActions = messages.some((message) => message.role === "ia");
  const peutEnvoyer = !etatAssistant.envoiEnCours && !etatAssistant.limiteAtteinte;

  return `
    <div class="assistant-context">
      <div class="assistant-context-main">
        <span class="assistant-work-icon">${icone("sparkles", 18)}</span>
        <div>
          <p class="assistant-context-label">${travail ? "Travail choisi" : "Exercice envoyé en photo"}</p>
          <strong>${echapper(travail?.titre ?? "Ton exercice")}</strong>
          <small>${etatAssistant.utilisees}/${ASSISTANT_LIMITE_JOUR} demande${etatAssistant.utilisees > 1 ? "s" : ""} aujourd'hui</small>
        </div>
      </div>
      <button class="entraide-action" type="button" data-action="assistant-nouvelle-aide">
        ${icone("refresh-cw", 14)} Changer
      </button>
    </div>

    ${
      etatAssistant.photo?.dataUrl
        ? `<div class="assistant-photo-jointe">
            <img src="${echapper(etatAssistant.photo.dataUrl)}" alt="Photo de l'exercice envoyée à l'assistant" />
            <span>${icone("image", 15)} Photo jointe</span>
          </div>`
        : ""
    }

    <div class="assistant-thread" role="log" aria-live="polite" aria-label="Conversation avec l'assistant">
      ${
        messages.length === 0 && !etatAssistant.envoiEnCours
          ? `<div class="assistant-empty">
              <span class="assistant-empty-icon">${icone("sparkles", 26)}</span>
              <p>L'assistant va analyser ton travail et te donner un premier indice.</p>
            </div>`
          : messages.map(bulleMessageAssistant).join("")
      }
      ${
        etatAssistant.envoiEnCours
          ? `<div class="assistant-thinking" role="status">
              <span class="loading-ring" aria-hidden="true"></span>
              <span>L'assistant réfléchit…</span>
            </div>`
          : ""
      }
    </div>

    ${blocErreurEnvoiAssistant()}

    ${
      etatAssistant.limiteAtteinte
        ? `<div class="assistant-limite" role="status">
            ${icone("clock", 18)}
            <p>Tu as atteint ta limite du jour, reviens demain ou demande à ton encadreur.</p>
          </div>`
        : ""
    }

    ${
      afficherActions && peutEnvoyer
        ? `<div class="assistant-quick-actions">
            ${Object.values(ACTIONS_RAPIDES_ASSISTANT)
              .map(
                (action) => `<button class="assistant-quick-btn" type="button" data-action="assistant-action-rapide" data-rapide="${echapper(action.action)}">${echapper(action.libelle)}</button>`
              )
              .join("")}
          </div>`
        : ""
    }

    ${
      peutEnvoyer
        ? `<form class="assistant-composer" data-form-assistant-message>
            <label class="sr-only" for="assistant-message">Ta réponse</label>
            <textarea id="assistant-message" name="message" rows="2" maxlength="1200" placeholder="Écris ta réponse ou pose ta question…"></textarea>
            <button class="btn btn-primary assistant-send" type="submit" aria-label="Envoyer ma réponse">
              ${icone("send", 18)}
            </button>
          </form>`
        : ""
    }

    <p class="assistant-disclaimer">${icone("shield-check", 14)} L'assistant donne des indices. Il ne remplace pas la correction de ton encadreur.</p>`;
}

function contenuAssistantEleve() {
  if (etatAssistant.chargement && !etatAssistant.charge) {
    return `<div class="exercise-status" role="status">
      <span class="loading-ring" aria-hidden="true"></span>
      <p>Chargement de l'assistant…</p>
    </div>`;
  }

  if (etatAssistant.erreur) {
    return `<div class="exercise-status exercise-status--error" role="alert">
      <span class="status-icon">${icone("alert-circle", 24)}</span>
      <h2>Assistant indisponible</h2>
      <p>${echapper(etatAssistant.erreur)}</p>
      <button class="btn btn-secondary" type="button" data-action="assistant-recharger">${icone("refresh-cw", 17)} Réessayer</button>
    </div>`;
  }

  return etatAssistant.demarrage
    ? formulaireDemarrageAssistant()
    : conversationAssistant();
}

function conversationsAssistantEncadreur() {
  const groupes = new Map();

  for (const message of etatAssistant.messages) {
    const cle = `${message.eleve_id ?? "inconnu"}::${message.travail_id ?? "libre"}`;
    if (!groupes.has(cle)) {
      groupes.set(cle, {
        eleveId: message.eleve_id,
        travailId: message.travail_id,
        messages: []
      });
    }
    groupes.get(cle).messages.push(message);
  }

  return [...groupes.values()]
    .map((groupe) => {
      const eleve = eleves.find((item) => item.id === groupe.eleveId);
      const travail = groupe.travailId
        ? travailAssistantParId(groupe.travailId)
        : null;
      const dernier = groupe.messages[groupe.messages.length - 1];
      return { ...groupe, eleve, travail, dernier };
    })
    .sort(
      (a, b) =>
        new Date(b.dernier?.created_at ?? 0) -
        new Date(a.dernier?.created_at ?? 0)
    );
}

function contenuAssistantEncadreur() {
  if (etatAssistant.chargement && !etatAssistant.charge) {
    return `<div class="exercise-status" role="status">
      <span class="loading-ring" aria-hidden="true"></span>
      <p>Chargement des aides IA…</p>
    </div>`;
  }

  if (etatAssistant.erreur) {
    return `<div class="exercise-status exercise-status--error" role="alert">
      <span class="status-icon">${icone("alert-circle", 24)}</span>
      <h2>Aides IA indisponibles</h2>
      <p>${echapper(etatAssistant.erreur)}</p>
      <button class="btn btn-secondary" type="button" data-action="assistant-recharger">${icone("refresh-cw", 17)} Réessayer</button>
    </div>`;
  }

  const conversations = conversationsAssistantEncadreur();
  if (conversations.length === 0) {
    return `<div class="empty-state secondary-empty">
      <div class="empty-icon">${icone("sparkles", 30)}</div>
      <p class="empty-message">Aucune aide IA utilisée pour le moment.</p>
    </div>`;
  }

  return `
    <div class="assistant-supervision-head">
      <h2>Aides IA utilisées</h2>
      <span>${conversations.length} conversation${conversations.length > 1 ? "s" : ""}</span>
    </div>
    <p class="assistant-supervision-lead">Retrouve les indices demandés par tes élèves. Ces échanges sont en lecture seule.</p>
    <div class="assistant-conv-list">
      ${conversations
        .map((conversation) => {
          const nomEleve = conversation.eleve
            ? nomComplet(conversation.eleve)
            : "Élève";
          const titreTravail =
            conversation.travail?.titre || "Exercice envoyé en photo";
          return `<article class="assistant-conv-card">
            <header class="assistant-conv-head">
              <div>
                <strong>${echapper(nomEleve)}</strong>
                <p>${echapper(titreTravail)}</p>
              </div>
              <span class="assistant-conv-count">${conversation.messages.length} message${conversation.messages.length > 1 ? "s" : ""}</span>
            </header>
            <p class="assistant-conv-date">Dernière aide : ${echapper(formaterDate(conversation.dernier?.created_at))}</p>
            <details class="assistant-conv-details">
              <summary>Voir la conversation</summary>
              <div class="assistant-thread assistant-thread--lecture">
                ${conversation.messages.map(bulleMessageAssistant).join("")}
              </div>
            </details>
          </article>`;
        })
        .join("")}
    </div>`;
}

function afficherErreurDemarrageAssistant(message) {
  etatAssistant.erreurAction = "";
  const zone = document.querySelector("[data-assistant-error]");
  if (!zone) return;
  zone.textContent = message;
  zone.hidden = false;
}

async function demarrerAideAssistant(formulaire) {
  if (profil?.role !== "eleve" || etatAssistant.envoiEnCours) return;

  const donnees = new FormData(formulaire);
  const travailId = String(donnees.get("travail_id") ?? "");
  const enonce = String(donnees.get("enonce") ?? "").trim();
  const travail = travailId ? travailAssistantParId(travailId) : null;

  if (travailId && !travail) {
    afficherErreurDemarrageAssistant("Ce travail est introuvable. Choisis-en un autre.");
    return;
  }
  if (!travailId && !etatAssistant.photo) {
    afficherErreurDemarrageAssistant(
      "Choisis un travail ou ajoute une photo de ton exercice."
    );
    return;
  }
  if (etatAssistant.photo && !enonce) {
    afficherErreurDemarrageAssistant(
      "Avec une photo, recopie aussi l'énoncé pour que l'assistant comprenne l'exercice."
    );
    document.getElementById("assistant-enonce")?.focus();
    return;
  }
  if (etatAssistant.photoEnCours) {
    afficherErreurDemarrageAssistant(
      "Attends la fin de la préparation de la photo."
    );
    return;
  }
  if (etatAssistant.limiteAtteinte) {
    afficherErreurDemarrageAssistant(
      "Tu as atteint ta limite du jour, reviens demain ou demande à ton encadreur."
    );
    return;
  }

  etatAssistant.travailId = travailId || null;
  etatAssistant.enonce = enonce;
  etatAssistant.demarrage = false;
  etatAssistant.erreurAction = "";
  etatAssistant.erreurEnvoi = "";

  await envoyerDemandeAssistant({
    message: travailId
      ? "Je viens de faire ce travail. Peux-tu m'aider à vérifier ma démarche et me donner un indice ?"
      : "Voici mon exercice. Peux-tu m'aider à vérifier ma démarche et me donner un indice ?",
    action: "demarrer"
  });
}

async function envoyerDemandeAssistant({ message, action = "message" }) {
  if (profil?.role !== "eleve" || etatAssistant.envoiEnCours) return;
  const texte = String(message ?? "").trim();
  if (!texte) return;

  if (etatAssistant.limiteAtteinte) {
    etatAssistant.erreurEnvoi =
      "Tu as atteint ta limite du jour, reviens demain ou demande à ton encadreur.";
    rendre();
    return;
  }

  etatAssistant.envoiEnCours = true;
  etatAssistant.erreurEnvoi = "";
  etatAssistant.derniereDemande = { message: texte, action };

  const messageLocal = {
    id: `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    eleve_id: profil.eleveId,
    travail_id: etatAssistant.travailId,
    role: "eleve",
    contenu: texte,
    created_at: new Date().toISOString(),
    pending: true
  };
  etatAssistant.messages.push(messageLocal);
  rendre();

  try {
    const reponse = await demanderReponseAssistant({ message: texte, action });
    const messageIa = {
      id: reponse?.message?.id ?? `ia-${Date.now().toString(36)}`,
      eleve_id: profil.eleveId,
      travail_id: etatAssistant.travailId,
      role: "ia",
      contenu: String(reponse?.message?.contenu ?? "").trim(),
      created_at: reponse?.message?.created_at ?? new Date().toISOString()
    };
    if (!messageIa.contenu) {
      throw new Error("L'assistant n'a pas renvoyé de réponse. Réessaie.");
    }
    etatAssistant.messages.push(messageIa);
    messageLocal.pending = false;
    etatAssistant.utilisees = Number(
      reponse?.limite?.utilisees ?? compterDemandesAssistantAujourdhui()
    );
    etatAssistant.limiteAtteinte =
      etatAssistant.utilisees >= ASSISTANT_LIMITE_JOUR;
    etatAssistant.derniereDemande = null;
  } catch (erreur) {
    etatAssistant.messages = etatAssistant.messages.filter(
      (item) => item.id !== messageLocal.id
    );
    const limite =
      erreur?.code === "limite_atteinte" || erreur?.statut === 429;
    etatAssistant.limiteAtteinte = limite || etatAssistant.limiteAtteinte;
    etatAssistant.erreurEnvoi = limite
      ? "Tu as atteint ta limite du jour, reviens demain ou demande à ton encadreur."
      : erreur?.message ||
        "L'assistant n'a pas pu répondre. Vérifie ta connexion puis réessaie.";
    if (limite) {
      etatAssistant.utilisees = ASSISTANT_LIMITE_JOUR;
      etatAssistant.derniereDemande = null;
    }
  } finally {
    etatAssistant.envoiEnCours = false;
    rendre();
    window.setTimeout(() => {
      const fil = document.querySelector(".assistant-thread");
      if (fil) fil.scrollTop = fil.scrollHeight;
    }, 60);
  }
}

async function demanderReponseAssistant({ message, action }) {
  if (MODE_APERCU || donneesSuivi.source === "demo") {
    return reponseAssistantDemo(message, action);
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("L'assistant n'est pas configuré sur cet appareil.");
  }

  const client = await obtenirClientSupabaseExercices();
  exigerClientActif(client);
  const { data, error } = await client.auth.getSession();
  if (error) throw error;
  const jeton = data?.session?.access_token;
  if (!jeton) {
    throw new Error("Reconnecte-toi pour utiliser l'assistant.");
  }

  let reponseHttp;
  try {
    reponseHttp = await fetch(`${SUPABASE_URL}/functions/v1/assistant-ia`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${jeton}`
      },
      body: JSON.stringify({
        travail_id: etatAssistant.travailId || null,
        enonce: etatAssistant.enonce.trim(),
        photo: etatAssistant.photo?.dataUrl ?? null,
        message,
        action
      })
    });
  } catch {
    throw new Error(
      "La connexion a échoué. Vérifie ton réseau puis réessaie."
    );
  }

  let donnees = {};
  try {
    donnees = await reponseHttp.json();
  } catch {
    donnees = {};
  }

  if (!reponseHttp.ok) {
    const erreur = new Error(
      donnees?.message ||
        "L'assistant n'est pas disponible pour le moment. Réessaie."
    );
    erreur.statut = reponseHttp.status;
    erreur.code = donnees?.code;
    erreur.limite = donnees?.limite;
    throw erreur;
  }

  return donnees;
}

async function reponseAssistantDemo(message, action) {
  await new Promise((resoudre) => window.setTimeout(resoudre, 900));
  const utilisees = compterDemandesAssistantAujourdhui();
  if (utilisees > ASSISTANT_LIMITE_JOUR) {
    const erreur = new Error(
      "Tu as atteint ta limite du jour, reviens demain ou demande à ton encadreur."
    );
    erreur.code = "limite_atteinte";
    erreur.statut = 429;
    throw erreur;
  }

  const travail = etatAssistant.travailId
    ? travailAssistantParId(etatAssistant.travailId)
    : null;
  const sujet = travail?.titre ?? "ton exercice";
  const contenu =
    action === "autre_indice"
      ? `Voici un autre indice pour ${sujet}. Repère d'abord les données utiles de l'énoncé, puis écris la relation qui les relie.\n\nQuestion : quelle grandeur cherches-tu exactement ?`
      : action === "incompris"
        ? `Je reformule plus simplement. Commence par écrire ce que tu sais et ce que tu cherches pour ${sujet}.\n\nQuestion : quelle est la première étape que tu peux faire sans calcul ?`
        : action === "verifier"
          ? `Je regarde ta démarche sur ${sujet}. Elle semble commencer correctement. Vérifie surtout l'étape où tu appliques la règle du cours.\n\nQuestion : peux-tu me montrer le calcul de cette étape ?`
          : `Je vois que tu as travaillé sur ${sujet}. La démarche semble plausible, mais je veux vérifier une étape avec toi.\n\nRappel : appuie-toi sur la règle ou la formule du cours avant de calculer.\n\nQuestion : quelle étape te semble la plus difficile ?`;

  return {
    message: {
      id: `ia-demo-${Date.now().toString(36)}`,
      role: "ia",
      contenu,
      created_at: new Date().toISOString()
    },
    limite: { utilisees, max: ASSISTANT_LIMITE_JOUR }
  };
}

function demarrerApercu(role) {
  const estEleve = role === "eleve";

  authInitialisee = true;
  chargementEspace = false;
  etatAuth.chargement = false;
  etatAuth.configManquante = false;
  etatAuth.utilisateur = { email: "apercu@monitoring-student.app" };
  etatAuth.erreurAction = "";
  etatAuth.succes = "";
  etatAuth.eleveEnAttente = null;
  etatAuth.eleveEtape = "code";
  choixEleveOuvert = false;
  reinitialiserEtatAssistant();

  eleves = ELEVES_EXEMPLE.map((eleve, index) => ({
    ...eleve,
    statut: eleve.id === "abdou-gueye" ? "en_attente" : "actif",
    encadreur_id: "encadreur-demo",
    created_at: new Date(Date.now() - (index + 1) * 86400000).toISOString()
  }));

  niveauxEspace = NIVEAUX.map((nom, index) => ({
    id: `niveau-demo-${index + 1}`,
    nom,
    ordre: index + 1
  }));

  donneesExercices.matieres = MATIERES_EXERCICES.map((matiere) => ({
    ...matiere,
    encadreur_id: "encadreur-demo"
  }));
  donneesExercices.chapitres = CHAPITRES_EXERCICES.map((chapitre) => ({
    ...chapitre,
    encadreur_id: "encadreur-demo"
  }));
  donneesExercices.exercices = EXERCICES_EXEMPLE.map((exercice) => ({
    ...exercice,
    encadreur_id: "encadreur-demo"
  }));
  donneesExercices.source = "demo";
  etatExercices.fichiersListe = {};

  donneesSuivi.travaux = TRAVAUX_EXEMPLE.map((travail) => ({ ...travail }));
  donneesSuivi.corrections = CORRECTIONS_EXEMPLE.map((correction) => ({
    ...correction
  }));
  donneesSuivi.source = "demo";

  if (!estEleve) {
    etatAssistant.messages = [
      {
        id: "assistant-demo-1",
        eleve_id: "awa-diop",
        travail_id: "travail-1",
        role: "eleve",
        contenu:
          "J'ai trouvé que les rapports sont égaux. Est-ce que ma rédaction est correcte ?",
        created_at: new Date(Date.now() - 2 * 3600000).toISOString()
      },
      {
        id: "assistant-demo-2",
        eleve_id: "awa-diop",
        travail_id: "travail-1",
        role: "ia",
        contenu:
          "Ta démarche part du bon principe. Vérifie que tu cites bien les droites parallèles avant d'écrire l'égalité des rapports.\n\nQuestion : as-tu précisé pourquoi les triangles sont semblables ?",
        created_at: new Date(Date.now() - 2 * 3600000 + 60000).toISOString()
      },
      {
        id: "assistant-demo-3",
        eleve_id: "moussa-ndiaye",
        travail_id: "travail-2",
        role: "eleve",
        contenu:
          "Je ne suis pas sûr de l'étape où on remplace y dans la première équation.",
        created_at: new Date(Date.now() - 26 * 3600000).toISOString()
      },
      {
        id: "assistant-demo-4",
        eleve_id: "moussa-ndiaye",
        travail_id: "travail-2",
        role: "ia",
        contenu:
          "Cette étape consiste à remplacer une inconnue par son expression. Écris d'abord l'expression de y, puis remplace-la dans l'autre équation.\n\nQuestion : quelle expression as-tu trouvée pour y ?",
        created_at: new Date(Date.now() - 26 * 3600000 + 60000).toISOString()
      }
    ];
    etatAssistant.charge = true;
  }
  etatSuivi.erreur = "";
  etatSuivi.succes = "";
  etatSuivi.filtreStatut = "tous";

  donneesProgramme.progression = PROGRESSIONS_EXEMPLE.map((progression) => ({
    ...progression
  }));
  donneesProgramme.source = "demo";
  etatProgramme.erreur = "";
  etatProgramme.erreurAction = "";
  etatProgramme.succes = "";
  etatProgramme.filtreMatiere = "toutes";

  donneesCours.cours = [
    {
      id: "cours-demo-1",
      encadreur_id: "encadreur-demo",
      niveau_id: "niveau-demo-4",
      matiere_id: "maths",
      chapitre_id: "maths-3-thales",
      titre: "Fiche méthode : le théorème de Thalès",
      description:
        "Une fiche claire avec la propriété, un schéma et deux exemples corrigés pas à pas.",
      created_at: new Date(Date.now() - 2 * 86400000).toISOString()
    },
    {
      id: "cours-demo-2",
      encadreur_id: "encadreur-demo",
      niveau_id: "niveau-demo-4",
      matiere_id: "francais",
      chapitre_id: null,
      titre: "Les connecteurs logiques",
      description:
        "Liste des connecteurs à utiliser dans une rédaction, classés par usage.",
      created_at: new Date(Date.now() - 5 * 86400000).toISOString()
    }
  ];
  donneesCours.fichiers = {};
  donneesCours.source = "demo";
  etatCours.charge = true;
  etatCours.chargement = false;
  etatCours.erreur = "";
  etatCours.erreurAction = "";
  etatCours.succes = "";
  etatCours.coursOuvertId = null;
  etatCours.formulaire = null;
  etatCours.suppressionId = null;

  donneesEntraide.questions = [
    {
      id: "entraide-demo-1",
      encadreur_id: "encadreur-demo",
      eleve_id: "awa-diop",
      matiere_id: "maths",
      titre: "Je ne comprends pas l'étape 2 de Thalès",
      message:
        "Dans l'exercice 3, je ne vois pas pourquoi on peut écrire AM/AB = AN/AC. Quelqu'un peut m'expliquer ?",
      auteur_nom: "Awa",
      photo_url: null,
      created_at: new Date(Date.now() - 3 * 3600000).toISOString()
    }
  ];
  donneesEntraide.reponses = [
    {
      id: "entraide-reponse-demo-1",
      question_id: "entraide-demo-1",
      auteur_type: "eleve",
      auteur_id: "eleve-demo-2",
      auteur_nom: "Moussa",
      message:
        "Regarde les droites parallèles : les rapports sont égaux parce que les triangles sont semblables.",
      created_at: new Date(Date.now() - 2 * 3600000).toISOString()
    }
  ];
  donneesEntraide.utiles = [];
  donneesEntraide.signalements = [];
  donneesEntraide.source = "demo";
  etatEntraide.charge = true;
  etatEntraide.chargement = false;
  etatEntraide.erreur = "";
  etatEntraide.erreurAction = "";
  etatEntraide.succes = "";
  etatEntraide.questionOuverteId = null;
  etatEntraide.formulaireQuestion = false;
  etatEntraide.suppressionQuestionId = null;
  etatEntraide.suppressionReponseId = null;
  etatEntraide.photo = null;
  etatEntraide.photoErreur = "";

  encadreurCourant = {
    id: "encadreur-demo",
    prenom: "Awa",
    nom: "Diop",
    pays: "Sénégal",
    code_encadreur: "MS-DEMO",
    telephone_whatsapp: "+221 77 123 45 67",
    created_at: new Date().toISOString()
  };

  if (estEleve) {
    profil = {
      role: "eleve",
      eleveId: "awa-diop",
      prenom: "Awa",
      nom: "Diop",
      classe: "3ème",
      statut: "actif",
      infoEleveVue: true,
      encadreurId: "encadreur-demo",
      encadreurNom: "Awa Diop",
      encadreurCode: "MS-DEMO",
      encadreurTelephone: "+221 77 123 45 67"
    };
    etatExercices.filtreNiveau = "3ème";
    etatExercices.filtreMatiere = "toutes";
    etatProgramme.eleveSelectionneId = "awa-diop";
    etatProgramme.filtreNiveau = "3ème";
  } else {
    profil = {
      role: "encadreur",
      id: "encadreur-demo",
      prenom: "Awa",
      nom: "Diop",
      pays: "Sénégal",
      code_encadreur: "MS-DEMO",
      telephoneWhatsapp: "+221 77 123 45 67"
    };
    etatExercices.filtreNiveau = "tous";
    etatExercices.filtreMatiere = "toutes";
    etatProgramme.eleveSelectionneId = null;
    etatProgramme.filtreNiveau = nomsNiveaux()[nomsNiveaux().length - 1] ?? "3ème";
  }

  if (!window.location.hash || window.location.hash === "#/") {
    window.location.hash = "#/suivi";
  }
  rendre();
}

window.addEventListener("hashchange", () => {
  const chemin = cheminActuel();
  if (chemin !== "/") {
    choixEleveOuvert = false;
  }
  if (chemin !== "/suivi") {
    etatSuivi.succes = "";
    fermerModalesSuivi();
  }
  if (chemin !== "/programme") {
    etatProgramme.succes = "";
    etatProgramme.erreurAction = "";
  }
  rendre();
});

window.addEventListener("themechange", () => {
  const sombre = themeCourant() === "sombre";
  const libelle = sombre ? "Passer en mode clair" : "Passer en mode sombre";
  document.querySelectorAll('[data-action="basculer-theme"]').forEach((bouton) => {
    bouton.innerHTML = icone(sombre ? "sun" : "moon", 19);
    bouton.setAttribute("aria-label", libelle);
    bouton.setAttribute("title", libelle);
  });
  document.querySelectorAll("[data-theme-pref]").forEach((bouton) => {
    bouton.setAttribute(
      "aria-pressed",
      String(bouton.dataset.themePref === preferenceTheme())
    );
  });
});

if (MODE_APERCU) {
  demarrerApercu(ROLE_APERCU);
} else {
  initialiserAuth();
}
