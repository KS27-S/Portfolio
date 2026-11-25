(() => {
  const CLE_STOCKAGE = "monitoring-student:theme";
  const CLE_AUTO_SOMBRE = "monitoring-student:auto-sombre";
  const DEBUT_SOMBRE_MINUTES = 18 * 60 + 30;
  const INTERVALLE_VERIFICATION = 30000;

  const PREFERENCES = ["auto", "clair", "sombre"];

  let dernierThemeApplique = null;
  let minuteur = null;

  function lirePreference() {
    try {
      const valeur = window.localStorage.getItem(CLE_STOCKAGE);
      if (PREFERENCES.includes(valeur)) return valeur;
    } catch (erreur) {
      console.warn("Préférence de thème illisible.", erreur);
    }
    return "auto";
  }

  function enregistrerPreference(preference) {
    if (!PREFERENCES.includes(preference)) return;
    try {
      window.localStorage.setItem(CLE_STOCKAGE, preference);
    } catch (erreur) {
      console.warn("Impossible d'enregistrer la préférence de thème.", erreur);
    }
  }

  function lireFlagAutoSombre() {
    try {
      return window.localStorage.getItem(CLE_AUTO_SOMBRE) === "1";
    } catch (erreur) {
      console.warn("État du thème automatique illisible.", erreur);
      return false;
    }
  }

  function enregistrerFlagAutoSombre(actif) {
    try {
      if (actif) {
        window.localStorage.setItem(CLE_AUTO_SOMBRE, "1");
      } else {
        window.localStorage.removeItem(CLE_AUTO_SOMBRE);
      }
    } catch (erreur) {
      console.warn("Impossible d'enregistrer l'état du thème automatique.", erreur);
    }
  }

  function minutesActuelles() {
    const maintenant = new Date();
    return maintenant.getHours() * 60 + maintenant.getMinutes();
  }

  function estNuit() {
    if (lireFlagAutoSombre()) return true;
    return minutesActuelles() >= DEBUT_SOMBRE_MINUTES;
  }

  function resoudre(preference) {
    if (preference === "sombre") return "sombre";
    if (preference === "clair") return "clair";
    return estNuit() ? "sombre" : "clair";
  }

  function themeCourant() {
    return document.documentElement.dataset.theme === "sombre" ? "sombre" : "clair";
  }

  function appliquer(force = false) {
    const preference = lirePreference();
    if (preference === "auto" && minutesActuelles() >= DEBUT_SOMBRE_MINUTES) {
      enregistrerFlagAutoSombre(true);
    }
    const theme = resoudre(preference);
    const racine = document.documentElement;

    if (!force && theme === dernierThemeApplique) {
      return theme;
    }

    dernierThemeApplique = theme;
    racine.dataset.theme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      if (!meta.dataset.couleurClaire) {
        meta.dataset.couleurClaire =
          racine.dataset.themeLightColor || meta.getAttribute("content") || "#1d4ed8";
      }
      meta.setAttribute(
        "content",
        theme === "sombre" ? "#0b1220" : meta.dataset.couleurClaire
      );
    }

    window.dispatchEvent(
      new CustomEvent("themechange", {
        detail: { theme, preference, automatique: preference === "auto" }
      })
    );

    return theme;
  }

  function definirPreference(preference) {
    if (!PREFERENCES.includes(preference)) return;
    const ancienne = lirePreference();
    enregistrerPreference(preference);
    if (preference === "auto") {
      if (ancienne !== "auto") {
        enregistrerFlagAutoSombre(minutesActuelles() >= DEBUT_SOMBRE_MINUTES);
      }
    } else {
      enregistrerFlagAutoSombre(false);
    }
    appliquer(true);
  }

  function basculer() {
    definirPreference(themeCourant() === "sombre" ? "clair" : "sombre");
  }

  function libelle(preference = lirePreference()) {
    if (preference === "clair") return "Clair";
    if (preference === "sombre") return "Sombre";
    return "Automatique (dès 18h30)";
  }

  function demarrer() {
    appliquer(true);
    if (minuteur) window.clearInterval(minuteur);
    minuteur = window.setInterval(() => appliquer(false), INTERVALLE_VERIFICATION);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") appliquer(false);
    });

    window.addEventListener("storage", (evenement) => {
      if (evenement.key === CLE_STOCKAGE || evenement.key === CLE_AUTO_SOMBRE) {
        appliquer(true);
      }
    });
  }

  window.Theme = {
    CLE_STOCKAGE,
    CLE_AUTO_SOMBRE,
    DEBUT_SOMBRE_MINUTES,
    lirePreference,
    enregistrerPreference,
    lireFlagAutoSombre,
    enregistrerFlagAutoSombre,
    definirPreference,
    resoudre,
    estNuit,
    themeCourant,
    appliquer,
    basculer,
    libelle,
    demarrer
  };

  demarrer();
})();
