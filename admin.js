const ADMIN_SUPABASE_URL = "https://wyaquvthawgmjmybevka.supabase.co";
const ADMIN_SUPABASE_ANON_KEY = "sb_publishable_JobwM33J91_KGYrRgxHLoA_zURW80-F";

const ADMIN_STORAGE_KEY = "monitoring-student-admin-auth";
const ADMIN_NOMBRE_ACTIVITES = 60;

const etatAdmin = {
  client: null,
  session: null,
  utilisateur: null,
  resume: null,
  encadreurs: [],
  activites: [],
  niveaux: [],
  filtre: "tous",
  recherche: "",
  tri: "eleves",
  chargement: false,
  derniereMaj: null,
  ecouteurDemarre: false,
  apercuRole: "encadreur"
};

const ICONES_ADMIN = {
  utilisateurs:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  encadreurs:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/></svg>',
  eleves:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
  travaux:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',
  corrections:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  exercices:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/></svg>',
  travail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>',
  correction:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  inscription:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M16 11h6"/></svg>',
  encadreur:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/></svg>',
  lune:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  soleil:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
};

const LIBELLES_ACTIVITE = {
  travail: "Travail envoyé",
  correction: "Correction",
  inscription: "Inscription",
  encadreur: "Nouvel encadreur"
};

function element(selecteur) {
  return document.querySelector(selecteur);
}

function echapper(valeur) {
  return String(valeur ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nombre(valeur) {
  return Number(valeur) || 0;
}

function formaterNombre(valeur) {
  return new Intl.NumberFormat("fr-FR").format(nombre(valeur));
}

function normaliserTexte(valeur) {
  return String(valeur ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function dateCourte(valeur) {
  const date = valeur instanceof Date ? valeur : new Date(valeur);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

function tempsRelatif(valeur) {
  const date = valeur instanceof Date ? valeur : new Date(valeur);
  if (Number.isNaN(date.getTime())) return "—";

  const difference = date.getTime() - Date.now();
  const absolu = Math.abs(difference);
  const format = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });

  if (absolu < 60 * 1000) return "à l'instant";
  if (absolu < 60 * 60 * 1000) return format.format(Math.round(difference / (60 * 1000)), "minute");
  if (absolu < 24 * 60 * 60 * 1000) return format.format(Math.round(difference / (60 * 60 * 1000)), "hour");
  if (absolu < 7 * 24 * 60 * 60 * 1000) return format.format(Math.round(difference / (24 * 60 * 60 * 1000)), "day");
  return dateCourte(date);
}

function initiales(prenom, nom) {
  const lettres = `${prenom || ""} ${nom || ""}`
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((mot) => mot.charAt(0).toUpperCase())
    .join("");
  return lettres || "?";
}

function estRecent(valeur, jours = 7) {
  const date = new Date(valeur);
  if (Number.isNaN(date.getTime())) return false;
  return Date.now() - date.getTime() <= jours * 24 * 60 * 60 * 1000;
}

function masquerDemarrage() {
  const demarrage = element("#admin-boot");
  if (demarrage) demarrage.hidden = true;
}

function afficherToast(message, type = "info") {
  const toast = element("#admin-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.toggle("admin-toast--error", type === "error");
  toast.hidden = false;
  window.clearTimeout(afficherToast.minuteur);
  afficherToast.minuteur = window.setTimeout(() => {
    toast.hidden = true;
  }, 3800);
}

function afficherErreurConnexion(message) {
  const zone = element("#admin-login-error");
  if (!zone) return;
  if (!message) {
    zone.hidden = true;
    zone.textContent = "";
    return;
  }
  zone.textContent = message;
  zone.hidden = false;
}

function afficherErreurTableauDeBord(message) {
  const zone = element("#admin-dashboard-error");
  if (!zone) return;
  if (!message) {
    zone.hidden = true;
    zone.textContent = "";
    return;
  }
  zone.textContent = message;
  zone.hidden = false;
}

function afficherConnexion(message, options = {}) {
  masquerDemarrage();
  const connexion = element("#admin-login");
  const tableau = element("#admin-dashboard");
  if (connexion) connexion.hidden = false;
  if (tableau) tableau.hidden = true;
  afficherErreurConnexion(message || "");

  if (!options.conserverEmail) {
    const motDePasse = element("#admin-password");
    if (motDePasse) motDePasse.value = "";
    const champEmail = element("#admin-email");
    if (champEmail && !champEmail.value) champEmail.focus();
  }
}

function afficherTableauDeBord() {
  masquerDemarrage();
  const connexion = element("#admin-login");
  const tableau = element("#admin-dashboard");
  if (connexion) connexion.hidden = true;
  if (tableau) tableau.hidden = false;
  afficherErreurTableauDeBord("");

  const utilisateur = etatAdmin.utilisateur;
  const email = utilisateur?.email || "—";
  const nomMetadonnees =
    utilisateur?.user_metadata?.full_name ||
    utilisateur?.user_metadata?.nom ||
    utilisateur?.user_metadata?.prenom ||
    "";
  const nom = nomMetadonnees || email.split("@")[0] || "Administrateur";

  const nomElement = element("#admin-user-name");
  const emailElement = element("#admin-user-email");
  const avatarElement = element("#admin-user-avatar");
  if (nomElement) nomElement.textContent = nom;
  if (emailElement) emailElement.textContent = email;
  if (avatarElement) {
    const morceaux = nom.trim().split(/\s+/).filter(Boolean);
    avatarElement.textContent = initiales(morceaux[0], morceaux[1] || "");
  }

  afficherSquelettes();
}

function afficherSquelettes() {
  const kpis = element("#admin-kpis");
  if (kpis) {
    kpis.innerHTML = Array.from({ length: 6 })
      .map(() => '<div class="admin-skeleton"></div>')
      .join("");
  }
  ["#admin-niveaux", "#admin-activites-apercu", "#admin-encadreurs-liste", "#admin-activites-liste"].forEach(
    (selecteur) => {
      const conteneur = element(selecteur);
      if (conteneur) conteneur.innerHTML = '<div class="admin-skeleton"></div>';
    }
  );
}

function arreterSquelettes() {
  ["#admin-kpis", "#admin-niveaux", "#admin-activites-apercu", "#admin-encadreurs-liste", "#admin-activites-liste"].forEach(
    (selecteur) => {
      const conteneur = element(selecteur);
      if (conteneur?.querySelector(".admin-skeleton")) {
        conteneur.innerHTML = '<div class="admin-empty">Données indisponibles pour le moment.</div>';
      }
    }
  );
}

async function chargerScriptSupabase() {
  if (window.supabase) return;

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

async function obtenirClientAdmin() {
  if (etatAdmin.client) return etatAdmin.client;
  if (!ADMIN_SUPABASE_URL || !ADMIN_SUPABASE_ANON_KEY) {
    throw new Error("Configuration Supabase manquante pour l'administration.");
  }

  await chargerScriptSupabase();

  etatAdmin.client = window.supabase.createClient(
    ADMIN_SUPABASE_URL,
    ADMIN_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: ADMIN_STORAGE_KEY
      }
    }
  );

  return etatAdmin.client;
}

function messageErreurAdmin(erreur) {
  const message = String(erreur?.message || erreur || "");
  const code = String(erreur?.code || "");

  if (code === "42501" || /acc[eè]s administrateur requis/i.test(message)) {
    return "Ce compte n'a pas les droits d'administration.";
  }
  if (/jwt|token|session/i.test(message) && /expired|invalid|missing/i.test(message)) {
    return "Votre session a expiré. Reconnectez-vous.";
  }
  if (
    code === "PGRST202" ||
    /could not find the function|schema cache|does not exist/i.test(message)
  ) {
    return "La migration supabase/admin.sql n'a pas encore été appliquée sur ce projet.";
  }
  return message || "Une erreur inattendue est survenue.";
}

async function verifierConfigurationAdmin() {
  const note = element("#admin-setup-note");
  if (!note) return;

  try {
    const client = await obtenirClientAdmin();
    const { data, error } = await client.rpc("admin_existe");
    if (error) {
      note.hidden = false;
    } else {
      note.hidden = data !== false;
    }
  } catch {
    note.hidden = false;
  }
}

async function verifierDroitsAdmin(client) {
  const { data, error } = await client.rpc("est_admin");
  if (error) throw error;
  return data === true;
}

async function appliquerSession(session) {
  etatAdmin.session = session;
  etatAdmin.utilisateur = session?.user ?? null;

  if (!session?.user) {
    afficherConnexion("");
    await verifierConfigurationAdmin();
    return;
  }

  const client = etatAdmin.client;
  try {
    const administrateur = await verifierDroitsAdmin(client);
    if (!administrateur) {
      await client.auth.signOut();
      etatAdmin.session = null;
      etatAdmin.utilisateur = null;
      afficherConnexion("Ce compte n'a pas les droits d'administration.");
      return;
    }

    afficherTableauDeBord();
    await chargerDonnees();
  } catch (erreur) {
    const message = messageErreurAdmin(erreur);
    if (String(erreur?.code || "") === "42501" || /acc[eè]s administrateur requis/i.test(String(erreur?.message || ""))) {
      await client.auth.signOut();
      afficherConnexion("Ce compte n'a pas les droits d'administration.");
      return;
    }
    if (/migration supabase\/admin\.sql/i.test(message) || /session a expiré/i.test(message)) {
      await client.auth.signOut();
      afficherConnexion(message);
      return;
    }
    afficherTableauDeBord();
    arreterSquelettes();
    afficherErreurTableauDeBord(message);
  }
}

async function chargerDonnees(options = {}) {
  if (!etatAdmin.client || etatAdmin.chargement) return;
  etatAdmin.chargement = true;

  const bouton = element("#admin-refresh");
  const texteBouton = bouton?.querySelector("span");
  const texteInitial = texteBouton?.textContent || "Actualiser";
  if (bouton) bouton.disabled = true;
  if (texteBouton) texteBouton.textContent = "Actualisation…";

  afficherErreurTableauDeBord("");

  try {
    const client = etatAdmin.client;
    const [resume, encadreurs, activites, niveaux] = await Promise.all([
      client.rpc("admin_resume"),
      client.rpc("admin_encadreurs"),
      client.rpc("admin_activites", { p_limit: ADMIN_NOMBRE_ACTIVITES }),
      client.rpc("admin_repartition_niveaux")
    ]);

    const premiereErreur = [resume, encadreurs, activites, niveaux].find((reponse) => reponse.error);
    if (premiereErreur) throw premiereErreur.error;

    etatAdmin.resume = resume.data && typeof resume.data === "object" ? resume.data : {};
    etatAdmin.encadreurs = Array.isArray(encadreurs.data) ? encadreurs.data : [];
    etatAdmin.activites = Array.isArray(activites.data) ? activites.data : [];
    etatAdmin.niveaux = Array.isArray(niveaux.data) ? niveaux.data : [];
    etatAdmin.derniereMaj = new Date();

    rendreTout();

    if (options.notifier) afficherToast("Données actualisées.");
  } catch (erreur) {
    const message = messageErreurAdmin(erreur);
    arreterSquelettes();
    afficherErreurTableauDeBord(message);

    if (
      String(erreur?.code || "") === "42501" ||
      /acc[eè]s administrateur requis/i.test(String(erreur?.message || "")) ||
      /session a expiré/i.test(message)
    ) {
      const client = etatAdmin.client;
      if (client) await client.auth.signOut();
      afficherConnexion(message);
    }
  } finally {
    etatAdmin.chargement = false;
    if (bouton) bouton.disabled = false;
    if (texteBouton) texteBouton.textContent = texteInitial;
  }
}

function mettreAJourHorodatage() {
  const zone = element("#admin-updated");
  if (!zone) return;
  if (!etatAdmin.derniereMaj) {
    zone.textContent = "—";
    return;
  }
  const heure = new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(etatAdmin.derniereMaj);
  zone.textContent = `Mis à jour à ${heure}`;
}

function rendreTout() {
  rendreKpis();
  rendreNiveaux();
  rendreActivitesApercu();
  rendreEncadreurs();
  rendreActivites();
  mettreAJourHorodatage();
}

function rendreKpis() {
  const conteneur = element("#admin-kpis");
  if (!conteneur) return;

  const resume = etatAdmin.resume || {};
  const cartes = [
    {
      label: "Utilisateurs",
      valeur: resume.utilisateurs,
      meta: `${formaterNombre(resume.encadreurs)} encadreur(s) · ${formaterNombre(resume.eleves)} élève(s)`,
      icone: "utilisateurs",
      accent: "blue"
    },
    {
      label: "Encadreurs",
      valeur: resume.encadreurs,
      meta: "Comptes encadreurs enregistrés",
      icone: "encadreurs",
      accent: "violet"
    },
    {
      label: "Élèves",
      valeur: resume.eleves,
      meta: `${formaterNombre(resume.eleves_actifs)} actif(s) · ${formaterNombre(resume.eleves_en_attente)} en attente`,
      icone: "eleves",
      accent: "teal"
    },
    {
      label: "Travaux",
      valeur: resume.travaux,
      meta: `${formaterNombre(resume.travaux_en_attente)} à corriger · ${formaterNombre(resume.travaux_corriges)} corrigé(s)`,
      icone: "travaux",
      accent: "amber"
    },
    {
      label: "Corrections",
      valeur: resume.corrections,
      meta: `${formaterNombre(resume.travaux_a_refaire)} travail(x) à refaire`,
      icone: "corrections",
      accent: "rose"
    },
    {
      label: "Exercices",
      valeur: resume.exercices,
      meta: `${formaterNombre(resume.chapitres)} chapitre(s) · ${formaterNombre(resume.progression_terminee)} progression(s) terminée(s)`,
      icone: "exercices",
      accent: "slate"
    }
  ];

  conteneur.innerHTML = cartes
    .map(
      (carte, index) => `
        <article class="admin-kpi admin-kpi--${carte.accent}" style="animation-delay:${index * 45}ms">
          <div class="admin-kpi-top">
            <span class="admin-kpi-label">${echapper(carte.label)}</span>
            <span class="admin-kpi-icon">${ICONES_ADMIN[carte.icone]}</span>
          </div>
          <strong class="admin-kpi-value">${formaterNombre(carte.valeur)}</strong>
          <span class="admin-kpi-meta">${echapper(carte.meta)}</span>
        </article>
      `
    )
    .join("");
}

function rendreNiveaux() {
  const conteneur = element("#admin-niveaux");
  const badge = element("#admin-niveaux-total");
  if (!conteneur) return;

  const niveaux = etatAdmin.niveaux || [];
  const total = niveaux.reduce((somme, niveau) => somme + nombre(niveau.total), 0);
  if (badge) badge.textContent = `${formaterNombre(total)} élève(s)`;

  if (!niveaux.length) {
    conteneur.innerHTML =
      '<div class="admin-empty">Aucun élève inscrit pour le moment. La répartition par niveau apparaîtra ici.</div>';
    return;
  }

  const maximum = Math.max(...niveaux.map((niveau) => nombre(niveau.total)), 1);

  conteneur.innerHTML = niveaux
    .map((niveau) => {
      const totalNiveau = nombre(niveau.total);
      const actifs = nombre(niveau.actifs);
      const attente = nombre(niveau.en_attente);
      const largeur = Math.max(4, Math.round((totalNiveau / maximum) * 100));
      return `
        <div class="admin-niveau">
          <div class="admin-niveau-head">
            <strong>${echapper(niveau.classe || "Non renseigné")}</strong>
            <span>${formaterNombre(totalNiveau)} élève(s) · ${formaterNombre(actifs)} actif(s)${
              attente ? ` · ${formaterNombre(attente)} en attente` : ""
            }</span>
          </div>
          <div class="admin-niveau-bar">
            <span class="admin-niveau-fill" style="width:${largeur}%"></span>
          </div>
        </div>
      `;
    })
    .join("");
}

function htmlEvenement(activite) {
  const type = ["travail", "correction", "inscription", "encadreur"].includes(activite.type)
    ? activite.type
    : "travail";
  const libelle = LIBELLES_ACTIVITE[type] || "Activité";
  const titre = activite.titre ? `${libelle} · ${activite.titre}` : libelle;
  const description = activite.description ? String(activite.description) : "";
  const meta = [];
  if (activite.encadreur) meta.push(`Encadreur : ${activite.encadreur}`);
  if (activite.eleve) meta.push(`Élève : ${activite.eleve}`);

  return `
    <article class="admin-event admin-event--${type}">
      <span class="admin-event-icon">${ICONES_ADMIN[type]}</span>
      <div class="admin-event-body">
        <div class="admin-event-top">
          <span class="admin-event-title">${echapper(titre)}</span>
          <time class="admin-event-time" datetime="${echapper(activite.quand || "")}">${echapper(
            tempsRelatif(activite.quand)
          )}</time>
        </div>
        ${description ? `<p class="admin-event-desc">${echapper(description)}</p>` : ""}
        ${meta.length ? `<p class="admin-event-meta">${echapper(meta.join(" · "))}</p>` : ""}
      </div>
    </article>
  `;
}

function rendreActivitesApercu() {
  const conteneur = element("#admin-activites-apercu");
  if (!conteneur) return;

  const activites = etatAdmin.activites.slice(0, 6);
  if (!activites.length) {
    conteneur.innerHTML = '<div class="admin-empty">Aucune activité enregistrée pour le moment.</div>';
    return;
  }

  conteneur.innerHTML = activites.map(htmlEvenement).join("");
}

function rendreActivites() {
  const conteneur = element("#admin-activites-liste");
  if (!conteneur) return;

  const activites =
    etatAdmin.filtre === "tous"
      ? etatAdmin.activites
      : etatAdmin.activites.filter((activite) => activite.type === etatAdmin.filtre);

  if (!etatAdmin.activites.length) {
    conteneur.innerHTML = '<div class="admin-empty">Aucune activité enregistrée pour le moment.</div>';
    return;
  }

  if (!activites.length) {
    conteneur.innerHTML = '<div class="admin-empty">Aucune activité ne correspond à ce filtre.</div>';
    return;
  }

  conteneur.innerHTML = activites.map(htmlEvenement).join("");
}

function rendreEncadreurs() {
  const conteneur = element("#admin-encadreurs-liste");
  if (!conteneur) return;

  const recherche = normaliserTexte(etatAdmin.recherche);
  let encadreurs = etatAdmin.encadreurs.slice();

  if (recherche) {
    encadreurs = encadreurs.filter((encadreur) => {
      const contenu = normaliserTexte(
        [encadreur.prenom, encadreur.nom, encadreur.pays, encadreur.code_encadreur].join(" ")
      );
      return contenu.includes(recherche);
    });
  }

  encadreurs.sort((a, b) => {
    if (etatAdmin.tri === "recent") {
      return new Date(b.created_at || 0) - new Date(a.created_at || 0);
    }
    if (etatAdmin.tri === "activite") {
      return new Date(b.derniere_activite || 0) - new Date(a.derniere_activite || 0);
    }
    if (etatAdmin.tri === "nom") {
      return `${a.prenom || ""} ${a.nom || ""}`.localeCompare(`${b.prenom || ""} ${b.nom || ""}`, "fr");
    }
    return nombre(b.eleves_total) - nombre(a.eleves_total);
  });

  if (!etatAdmin.encadreurs.length) {
    conteneur.innerHTML =
      '<div class="admin-empty">Aucun encadreur enregistré. Les comptes créés apparaîtront ici.</div>';
    return;
  }

  if (!encadreurs.length) {
    conteneur.innerHTML = `<div class="admin-empty">Aucun encadreur ne correspond à « ${echapper(
      etatAdmin.recherche
    )} ».</div>`;
    return;
  }

  conteneur.innerHTML = encadreurs
    .map((encadreur, index) => {
      const recent = estRecent(encadreur.derniere_activite);
      const elevesTotal = nombre(encadreur.eleves_total);
      const elevesActifs = nombre(encadreur.eleves_actifs);
      const elevesAttente = nombre(encadreur.eleves_en_attente);
      const travaux = nombre(encadreur.travaux_total);
      const travauxAttente = nombre(encadreur.travaux_en_attente);
      const travauxCorriges = nombre(encadreur.travaux_corriges);
      const corrections = nombre(encadreur.corrections_total);
      const identite = [encadreur.pays || "Pays non renseigné"];
      identite.push(encadreur.code_encadreur ? `Code ${encadreur.code_encadreur}` : "Sans code");

      return `
        <article class="admin-encadreur${recent ? " is-recent" : ""}" style="animation-delay:${Math.min(
          index * 35,
          280
        )}ms">
          <div class="admin-enc-identity">
            <span class="admin-enc-avatar">${echapper(initiales(encadreur.prenom, encadreur.nom))}</span>
            <div class="admin-enc-who">
              <strong>${echapper(`${encadreur.prenom || ""} ${encadreur.nom || ""}`.trim() || "Encadreur")}</strong>
              <span>${echapper(identite.join(" · "))}</span>
            </div>
          </div>
          <div class="admin-enc-stat">
            <span class="admin-enc-label">Élèves</span>
            <strong>${formaterNombre(elevesTotal)}</strong>
            <small>${formaterNombre(elevesActifs)} actif(s) · ${formaterNombre(elevesAttente)} en attente</small>
          </div>
          <div class="admin-enc-stat">
            <span class="admin-enc-label">Travaux</span>
            <strong>${formaterNombre(travaux)}</strong>
            <small>${formaterNombre(travauxAttente)} à corriger</small>
          </div>
          <div class="admin-enc-stat">
            <span class="admin-enc-label">Corrections</span>
            <strong>${formaterNombre(corrections)}</strong>
            <small>${formaterNombre(travauxCorriges)} travail(x) corrigé(s)</small>
          </div>
          <div class="admin-enc-last">
            <span class="admin-enc-label">Dernière activité</span>
            <strong>${
              encadreur.derniere_activite
                ? echapper(tempsRelatif(encadreur.derniere_activite))
                : "Aucune activité"
            }</strong>
            <small>Inscrit le ${echapper(dateCourte(encadreur.created_at))}</small>
          </div>
        </article>
      `;
    })
    .join("");
}

function configurerNavigation() {
  const liens = Array.from(document.querySelectorAll(".admin-nav-item"));
  if (!liens.length) return;

  const activer = (id) => {
    liens.forEach((lien) => {
      lien.classList.toggle("is-active", lien.getAttribute("href") === `#${id}`);
    });
  };

  liens.forEach((lien) => {
    lien.addEventListener("click", () => {
      const cible = (lien.getAttribute("href") || "").replace("#", "");
      if (cible) activer(cible);
    });
  });

  if (!("IntersectionObserver" in window)) return;

  const sections = ["apercu", "encadreurs", "plateforme", "activites"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach((entree) => {
        if (entree.isIntersecting) activer(entree.target.id);
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observateur.observe(section));
}

function libelleApercu(role) {
  return role === "eleve" ? "Espace élève" : "Espace encadreur";
}

function urlApercu(role) {
  return `monitoring-student.html?apercu=${encodeURIComponent(role)}#/suivi`;
}

function mettreAJourApercu() {
  const role = etatAdmin.apercuRole;
  const libelle = element("#admin-preview-label");
  if (libelle) libelle.textContent = libelleApercu(role);

  const lienExterne = element("#admin-preview-external");
  if (lienExterne) lienExterne.href = urlApercu(role);

  document.querySelectorAll(".admin-preview-tab").forEach((onglet) => {
    const actif = onglet.dataset.apercu === role;
    onglet.classList.toggle("is-active", actif);
    onglet.setAttribute("aria-selected", actif ? "true" : "false");
  });
}

function ouvrirApercu(role) {
  if (role !== "encadreur" && role !== "eleve") return;

  const modale = element("#admin-preview");
  const iframe = element("#admin-preview-iframe");
  if (!modale || !iframe) return;

  etatAdmin.apercuRole = role;
  mettreAJourApercu();
  iframe.src = urlApercu(role);
  modale.hidden = false;
  modale.setAttribute("aria-hidden", "false");
  document.body.classList.add("admin-preview-open");
  element("#admin-preview-close")?.focus();
}

function fermerApercu() {
  const modale = element("#admin-preview");
  const iframe = element("#admin-preview-iframe");
  if (!modale) return;

  modale.hidden = true;
  modale.setAttribute("aria-hidden", "true");
  if (iframe) iframe.src = "about:blank";
  document.body.classList.remove("admin-preview-open");
}

function rechargerApercu() {
  const iframe = element("#admin-preview-iframe");
  if (!iframe) return;

  if (iframe.getAttribute("src") === "about:blank") {
    iframe.src = urlApercu(etatAdmin.apercuRole);
    return;
  }

  const url = new URL(iframe.src, window.location.href);
  url.searchParams.set("rafraichir", String(Date.now()));
  iframe.src = url.href;
}

function configurerApercu() {
  mettreAJourApercu();

  document.addEventListener("click", (evenement) => {
    const bouton = evenement.target.closest("[data-apercu]");
    if (!bouton) return;

    const role = bouton.dataset.apercu;
    if (role !== "encadreur" && role !== "eleve") return;

    evenement.preventDefault();
    ouvrirApercu(role);
  });

  element("#admin-preview-close")?.addEventListener("click", fermerApercu);
  element("#admin-preview-reload")?.addEventListener("click", rechargerApercu);
  element("#admin-preview")?.addEventListener("click", (evenement) => {
    if (evenement.target === evenement.currentTarget) fermerApercu();
  });

  document.addEventListener("keydown", (evenement) => {
    if (evenement.key !== "Escape") return;
    const modale = element("#admin-preview");
    if (!modale || modale.hidden) return;
    evenement.preventDefault();
    fermerApercu();
  });
}

function actualiserBoutonThemeAdmin() {
  const bouton = element("#admin-theme-toggle");
  if (!bouton) return;
  const sombre = window.Theme ? window.Theme.themeCourant() === "sombre" : false;
  bouton.innerHTML = sombre ? ICONES_ADMIN.soleil : ICONES_ADMIN.lune;
  const libelle = sombre ? "Activer le mode clair" : "Activer le mode sombre";
  bouton.setAttribute("aria-label", libelle);
  bouton.setAttribute("title", libelle);
}

function configurerTheme() {
  actualiserBoutonThemeAdmin();
  element("#admin-theme-toggle")?.addEventListener("click", () => {
    window.Theme?.basculer();
    actualiserBoutonThemeAdmin();
  });
  window.addEventListener("themechange", actualiserBoutonThemeAdmin);
}

function configurerEvenements() {
  const formulaire = element("#admin-login-form");
  if (formulaire) {
    formulaire.addEventListener("submit", async (evenement) => {
      evenement.preventDefault();
      afficherErreurConnexion("");

      const email = element("#admin-email")?.value.trim() || "";
      const motDePasse = element("#admin-password")?.value || "";
      if (!email || !motDePasse) {
        afficherErreurConnexion("Renseignez votre adresse e-mail et votre mot de passe.");
        return;
      }

      const bouton = element("#admin-login-submit");
      const texte = bouton?.querySelector("span");
      const texteInitial = texte?.textContent || "Se connecter";
      if (bouton) bouton.disabled = true;
      if (texte) texte.textContent = "Connexion…";

      try {
        const client = await obtenirClientAdmin();
        const { data, error } = await client.auth.signInWithPassword({
          email,
          password: motDePasse
        });
        if (error) throw error;
        await appliquerSession(data.session);
      } catch (erreur) {
        const message = messageErreurAdmin(erreur);
        afficherErreurConnexion(
          /invalid login credentials/i.test(String(erreur?.message || ""))
            ? "Adresse e-mail ou mot de passe incorrect."
            : message
        );
      } finally {
        if (bouton) bouton.disabled = false;
        if (texte) texte.textContent = texteInitial;
      }
    });
  }

  const boutonMotDePasse = element("#admin-toggle-password");
  if (boutonMotDePasse) {
    boutonMotDePasse.addEventListener("click", () => {
      const champ = element("#admin-password");
      if (!champ) return;
      const afficher = champ.type === "password";
      champ.type = afficher ? "text" : "password";
      boutonMotDePasse.setAttribute(
        "aria-label",
        afficher ? "Masquer le mot de passe" : "Afficher le mot de passe"
      );
      champ.focus();
    });
  }

  const boutonDeconnexion = element("#admin-logout");
  if (boutonDeconnexion) {
    boutonDeconnexion.addEventListener("click", async () => {
      boutonDeconnexion.disabled = true;
      try {
        if (etatAdmin.client) await etatAdmin.client.auth.signOut();
      } catch {
        /* la session locale est nettoyée par Supabase */
      } finally {
        etatAdmin.session = null;
        etatAdmin.utilisateur = null;
        etatAdmin.resume = null;
        etatAdmin.encadreurs = [];
        etatAdmin.activites = [];
        etatAdmin.niveaux = [];
        boutonDeconnexion.disabled = false;
        fermerApercu();
        afficherConnexion("Vous êtes déconnecté.");
      }
    });
  }

  const boutonActualiser = element("#admin-refresh");
  if (boutonActualiser) {
    boutonActualiser.addEventListener("click", () => {
      chargerDonnees({ notifier: true });
    });
  }

  const champRecherche = element("#admin-search-encadreurs");
  if (champRecherche) {
    champRecherche.addEventListener("input", () => {
      etatAdmin.recherche = champRecherche.value;
      rendreEncadreurs();
    });
  }

  const tri = element("#admin-sort-encadreurs");
  if (tri) {
    tri.addEventListener("change", () => {
      etatAdmin.tri = tri.value;
      rendreEncadreurs();
    });
  }

  const filtres = element("#admin-activites-filtres");
  if (filtres) {
    filtres.addEventListener("click", (evenement) => {
      const bouton = evenement.target.closest("[data-filtre]");
      if (!bouton) return;
      etatAdmin.filtre = bouton.dataset.filtre || "tous";
      filtres.querySelectorAll("[data-filtre]").forEach((chip) => {
        chip.classList.toggle("is-active", chip === bouton);
      });
      rendreActivites();
    });
  }

  configurerTheme();
  configurerNavigation();
  configurerApercu();
}

async function demarrerAdmin() {
  configurerEvenements();

  try {
    const client = await obtenirClientAdmin();

    const { data, error } = await client.auth.getSession();
    if (error) throw error;

    if (!etatAdmin.ecouteurDemarre) {
      etatAdmin.ecouteurDemarre = true;
      client.auth.onAuthStateChange((evenement) => {
        if (evenement === "SIGNED_OUT") {
          etatAdmin.session = null;
          etatAdmin.utilisateur = null;
          fermerApercu();
          const tableau = element("#admin-dashboard");
          if (tableau && !tableau.hidden) afficherConnexion("");
        }
      });
    }

    await appliquerSession(data.session);
  } catch (erreur) {
    afficherConnexion(
      /configuration supabase manquante/i.test(String(erreur?.message || ""))
        ? "Configuration Supabase manquante. Vérifiez admin.js."
        : messageErreurAdmin(erreur)
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", demarrerAdmin, { once: true });
} else {
  demarrerAdmin();
}
