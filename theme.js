/* =========================================================
   FAN2CLOTAIRE 3.0 — GESTION DES THÈMES
   ========================================================= */

(() => {

    /* =====================================================
       SUPABASE
       ===================================================== */

    const themeSupabaseUrl =
        "https://snnclgjspwninjxnimza.supabase.co";

    const themeSupabaseKey =
        "sb_publishable_9lcVcbpeH8b64j2jD9w7Xw_xzfshZk2";

    const themeClient =
        window.supabase.createClient(
            themeSupabaseUrl,
            themeSupabaseKey
        );


    /* =====================================================
       COULEURS
       ===================================================== */

    const themeColors = {

        clair: {
            background: "#f8fafc",
            accent: "#64748b",
            secondary: "#cbd5e1"
        },

        sombre: {
            background: "#050505",
            accent: "#6b7280",
            secondary: "#1f2937"
        },

        bleu: {
            background: "#0f172a",
            accent: "#2563eb",
            secondary: "#60a5fa"
        },

        rouge: {
            background: "#1f0a0a",
            accent: "#dc2626",
            secondary: "#f87171"
        },

        vert: {
            background: "#071a12",
            accent: "#16a34a",
            secondary: "#4ade80"
        },

        jaune: {
            background: "#1c1700",
            accent: "#eab308",
            secondary: "#fde047"
        },

        rose: {
            background: "#1f0b16",
            accent: "#ec4899",
            secondary: "#f472b6"
        },

        violet: {
            background: "#12091f",
            accent: "#8b5cf6",
            secondary: "#a78bfa"
        },

        orange: {
            background: "#1c0d00",
            accent: "#f97316",
            secondary: "#fb923c"
        },

        marron: {
            background: "#1c1008",
            accent: "#92400e",
            secondary: "#b45309"
        },

        beige: {
            background: "#211c12",
            accent: "#d6b97a",
            secondary: "#ead9b0"
        },

        multicolor: {
            background: "#111827",
            accent: "#a855f7",
            secondary: "#22d3ee"
        },

        gris: {
            background: "#171717",
            accent: "#737373",
            secondary: "#a3a3a3"
        }

    };


    /* =====================================================
       DÉCORATIONS HALLOWEEN
       ===================================================== */

    const decorationsHalloween = [
        ".chauves-souris",
        ".toiles-halloween",
        ".lune-halloween",
        ".citrouilles-halloween",
        "#halloween-intro",
        ".exclusive-button"
    ];


    function gererDecorationsHalloween(estHalloween) {

        decorationsHalloween.forEach(selecteur => {

            document
                .querySelectorAll(selecteur)
                .forEach(element => {

                    element.style.display =
                        estHalloween ? "" : "none";

                });

        });

    }


    /* =====================================================
       NETTOYAGE HALLOWEEN
       ===================================================== */

    function nettoyerHalloween() {

        gererDecorationsHalloween(false);

        document
            .querySelectorAll("[data-halloween]")
            .forEach(element => {
                element.remove();
            });

        document.body.classList.remove(
            "theme-halloween",
            "halloween",
            "halloween-active"
        );

        document.documentElement.classList.remove(
            "theme-halloween",
            "halloween",
            "halloween-active"
        );

    }


    /* =====================================================
       COULEUR
       ===================================================== */

    function obtenirCouleur(themeId) {

        if (!themeId) {
            return null;
        }

        if (themeId === "couleur-perso") {
            return "#7c3aed";
        }

        if (themeColors[themeId]) {
            return themeColors[themeId].accent;
        }

        return null;

    }


    /* =====================================================
       APPLICATION DU THÈME
       ===================================================== */

    function appliquerTheme(theme) {

        if (!theme) {
            return;
        }

        const themeId =
            theme.theme_id;

        const estHalloween =
            themeId === "halloween-2026";


        /* =================================================
           HALLOWEEN
           ================================================= */

        if (estHalloween) {

            document.documentElement.style.setProperty(
                "--theme-background",
                "#120600"
            );

            document.documentElement.style.setProperty(
                "--theme-accent",
                "#f97316"
            );

            document.documentElement.style.setProperty(
                "--theme-secondary",
                "#fbbf24"
            );

            document.documentElement.style.setProperty(
                "--theme-card",
                "rgba(255,255,255,0.09)"
            );

            document.documentElement.style.setProperty(
                "--theme-border",
                "rgba(255,255,255,0.16)"
            );

            document.documentElement.style.setProperty(
                "--theme-button",
                "#f97316"
            );

            document.documentElement.style.setProperty(
                "--theme-text-secondary",
                "#d1d5db"
            );

            document.documentElement.style.setProperty(
                "--theme-metallic",
                "none"
            );

            document.body.style.backgroundColor =
                "#120600";

            document.body.style.backgroundImage =
                "radial-gradient(circle at 20% 20%, #f97316 0 8%, transparent 9%)," +
                "radial-gradient(circle at 80% 30%, #7c3aed 0 7%, transparent 8%)," +
                "linear-gradient(135deg, #111827, #3b0764)";

            document.body.style.background =
                document.body.style.backgroundImage;

            document.body.classList.add(
                "theme-halloween"
            );

            document.documentElement.classList.add(
                "theme-halloween"
            );

            gererDecorationsHalloween(true);

            return;
        }


        /* =================================================
           RETIRER HALLOWEEN
           ================================================= */

        nettoyerHalloween();


        /* =================================================
           COULEURS
           ================================================= */

        let couleurs;

        if (themeId === "couleur-perso") {

            const couleur =
                theme.couleur_personnalisee ||
                "#7c3aed";

            couleurs = {

                background: "#111827",

                accent: couleur,

                secondary: couleur

            };

        } else {

            couleurs =
                themeColors[themeId] ||
                themeColors.sombre;

        }


        /* =================================================
           VARIABLES CSS
           ================================================= */

        document.documentElement.style.setProperty(
            "--theme-background",
            couleurs.background
        );

        document.documentElement.style.setProperty(
            "--theme-accent",
            couleurs.accent
        );

        document.documentElement.style.setProperty(
            "--theme-secondary",
            couleurs.secondary
        );

        document.documentElement.style.setProperty(
            "--theme-card",
            "rgba(255,255,255,0.09)"
        );

        document.documentElement.style.setProperty(
            "--theme-border",
            "rgba(255,255,255,0.16)"
        );

        document.documentElement.style.setProperty(
            "--theme-button",
            couleurs.accent
        );

        document.documentElement.style.setProperty(
            "--theme-text-secondary",
            "#d1d5db"
        );


        /* =================================================
           FOND NORMAL
           ================================================= */

        document.body.style.backgroundColor =
            couleurs.background;

        document.body.style.backgroundImage =
            "none";


        /* =================================================
           DÉGRADÉ
           ================================================= */

        if (theme.option_degrade === true) {

            let couleurSecondaire =
                couleurs.secondary;


            if (theme.couleur_secondaire) {

                const couleurPossedee =
                    obtenirCouleur(
                        theme.couleur_secondaire
                    );

                if (couleurPossedee) {

                    couleurSecondaire =
                        couleurPossedee;

                }

            }


            document.body.style.background =
                `linear-gradient(
                    135deg,
                    ${couleurs.background},
                    ${couleurs.accent},
                    ${couleurSecondaire}
                )`;

        } else {

            document.body.style.background =
                couleurs.background;

        }


        /* =================================================
           MÉTALLIQUE
           ================================================= */

        if (theme.option_metallique === true) {

            document.documentElement.style.setProperty(
                "--theme-metallic",
                "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.03), rgba(255,255,255,0.16))"
            );

        } else {

            document.documentElement.style.setProperty(
                "--theme-metallic",
                "none"
            );

        }

    }


    /* =====================================================
       CHARGEMENT DU THÈME UTILISATEUR
       ===================================================== */

    async function chargerThemeUtilisateur() {

        try {

            const {
                data,
                error
            } = await themeClient.rpc(
                "obtenir_theme_utilisateur"
            );


            if (error) {

                console.error(
                    "Erreur récupération thème :",
                    error
                );

                return false;

            }


            if (
                !data ||
                data.success !== true
            ) {

                console.warn(
                    "Aucun thème actif trouvé."
                );

                return false;

            }


            appliquerTheme(data);

            return true;

        } catch (error) {

            console.error(
                "Erreur système thème :",
                error
            );

            return false;

        }

    }


    /* =====================================================
       FONCTIONS PUBLIQUES
       ===================================================== */

    window.rechargerTheme =
        async function () {

            return await chargerThemeUtilisateur();

        };


    window.appliquerThemeGlobal =
        function (theme) {

            appliquerTheme(theme);

        };


    /* =====================================================
       INITIALISATION
       ===================================================== */

    function initialiserTheme() {

        chargerThemeUtilisateur();

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialiserTheme
        );

    } else {

        initialiserTheme();

    }

})();