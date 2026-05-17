
export const CATALOGUE_FILIERES = [
  // ========================================================================
  // I - UNIVERSITÉ D'ABOMEY-CALAVI
  // ========================================================================
  {
    id: "uac-irsp-sante-publique",
    nom: "Santé publique polyvalente",
    etablissement: "Institut Régional de Santé Publique (IRSP)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "maths"],
    debouches: [
      {
        titre: "Agent de santé communautaire",
        role: "Le pont entre les structures de santé et les populations villageoises ou urbaines.",
        actions: "Sensibilise sur la vaccination, la nutrition et la prévention des épidémies locales (paludisme, etc.).",
        structures: "Centres de santé d'arrondissement (CSA), ONG locales et internationales, Croix-Rouge."
      },
      {
        titre: "Responsable de surveillance épidémiologique",
        role: "La sentinelle chargée de traquer et de guetter l'apparition des maladies.",
        actions: "Collecte les données sanitaires sur le terrain et lance l'alerte précoce en cas de suspicion d'épidémie.",
        structures: "Directions Départementales de la Santé (DDS), Ministère de la Santé, OMS Bénin."
      },
      {
        titre: "Attaché de recherche en santé",
        role: "Le collaborateur scientifique qui participe aux grandes études médicales.",
        actions: "Recueille les données d'enquêtes sur le terrain, gère les protocoles et participe aux rapports scientifiques.",
        structures: "IRSP de Ouidah, Centre de Recherche Entomologique de Cotonou (CREC), instituts universitaires."
      },
      {
        titre: "Assistant en planification, suivi et évaluation en santé",
        role: "Le gestionnaire et contrôleur de l'efficacité des programmes sanitaires.",
        actions: "Planifie les budgets des projets de santé et vérifie sur le terrain si les objectifs de couverture sont atteints.",
        structures: "Agences internationales (UNICEF, USAID, Enabel), ministères, grands programmes nationaux."
      },
      {
        titre: "Agent d'hygiène et d'assainissement du milieu",
        role: "Le garant de la salubrité publique et de la santé environnementale.",
        actions: "Contrôle la qualité de l'eau, gère l'élimination des déchets et inspecte les marchés et espaces publics.",
        structures: "Services techniques des mairies, entreprises de salubrité (comme la SGDS), complexes hôteliers ou industriels."
      }
    ]
  },

  {
    id: "uac-flash-adjara-geographie",
    nom: "Géographie et Aménagement du Territoire",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines d'Adjara (FLASH-Adjara)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DEAT", "DT/STI"],
    matieres_clefs: ["francais", "hg", "maths"],
    debouches: [
      {
        titre: "Enseignement",
        role: "Transmission des connaissances géographiques, environnementales et cartographiques aux futures générations.",
        actions: "Concevoir les fiches pédagogiques, dispenser les cours d'Histoire-Géographie, évaluer les connaissances des élèves et éveiller leur conscience éco-citoyenne sur les dynamiques spatiales.",
        structures: "Collèges et lycées d'enseignement général (publics ou privés), centres de formation et instituts professionnels."
      },
      {
        titre: "Laboratoires et institutions de recherche",
        role: "Analyse scientifique des dynamiques spatiales, des mutations démographiques et des risques environnementaux.",
        actions: "Collecter des données géographiques et statistiques sur le terrain, réaliser des analyses spatiales, manipuler des outils cartographiques (SIG) et participer à la rédaction de rapports scientifiques ou de diagnostics territoriaux.",
        structures: "Centres de recherche universitaires, Centre National de Télédétection (CENATEL), instituts de recherche sur le climat et l'environnement."
      },
      {
        titre: "Assainissement",
        role: "Planification et gestion de la salubrité environnementale pour un cadre de vie sain et durable.",
        actions: "Identifier les points critiques de pollution, concevoir des plans de gestion des déchets ménagers et industriels, et élaborer des stratégies de drainage des eaux pluviales pour lutter contre les inondations urbaines.",
        structures: "Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin), directions techniques des mairies, ONG environnementales."
      },
      {
        titre: "Urbanisme",
        role: "Conception, structuration et modernisation des espaces urbains pour garantir un développement harmonieux des villes.",
        actions: "Participer à la réalisation des plans directeurs d'urbanisme (PDU), concevoir les plans de lotissement et de restructuration urbaine, et veiller au respect des règles d'implantation des infrastructures et des espaces publics.",
        structures: "Ministère du Cadre de Vie et des Transports, directions de l'urbanisme, cabinets privés d'architecture et d'urbanisme."
      },
      {
        titre: "Aménagement territorial",
        role: "Orientation stratégique de l'occupation du sol et de la répartition des infrastructures socio-économiques.",
        actions: "Réaliser des études d'impact environnemental et social (EIES), concevoir les Plans de Développement Communaux (PDC), et planifier la localisation optimale des infrastructures de base (routes, marchés, écoles, hôpitaux).",
        structures: "Mairies (Services d'aménagement et de planification), Agences de Développement Territorial (ADT), cabinets d'études et de conseil en développement local."
      }
    ]
  },

  {
    id: "uac-flash-adjara-socio-anthropologie",
    nom: "Socio-Anthropologie",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines d'Adjara (FLASH-Adjara)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DEAT", "DT/STI"],
    matieres_clefs: ["francais", "hg", "maths"],
    debouches: [
      {
        titre: "Agent dans les centres sociaux",
        role: "Accompagnateur et conseiller des personnes, familles ou groupes en situation de vulnérabilité sociale.",
        actions: "Évaluer les besoins des usagers, orienter les populations démunies vers les services de prise en charge, monter des dossiers d'aide sociale et animer des séances d'écoute et de soutien psychologique.",
        structures: "Centres de Promotion Sociale (CPS) du Bénin, centres d'accueil pour enfants ou femmes vulnérables, et services d'action sociale des communes."
      },
      {
        titre: "Ministères",
        role: "Conseiller technique et analyste des politiques publiques liées aux réalités culturelles et sociales du pays.",
        actions: "Concevoir et évaluer des programmes d'intégration sociale, mener des enquêtes de terrain pour comprendre les résistances culturelles face aux projets de développement, et rédiger des notes de synthèse pour les décideurs politiques.",
        structures: "Ministère des Affaires Sociales et de la Microfinance, Ministère de la Santé, Ministère de la Culture, et directions départementales."
      },
      {
        titre: "Recherche en sciences sociales",
        role: "Chercheur ou consultant chargé de décrypter les mutations comportementales, les faits de société et les structures culturelles.",
        actions: "Élaborer des protocoles de recherche quantitative et qualitative, mener des entretiens approfondis et des observations participantes, analyser les données collectées et publier des rapports d'expertise sociologique.",
        structures: "Laboratoires de recherche universitaires (UAC, UP), Institut National de la Statistique et de Démographie (INStaD), et cabinets d'études sociologiques."
      },
      {
        titre: "ONG",
        role: "Coordonnateur de projets humanitaires et de programmes de développement international ou local.",
        actions: "Identifier les besoins urgents des populations cibles, planifier les actions humanitaires, superviser les équipes de terrain, rédiger les rapports d'activités pour les bailleurs et assurer le plaidoyer pour les droits humains.",
        structures: "ONG nationales et internationales (Plan International, Care Bénin, UNICEF, Croix-Rouge, Amnesty International)."
      },
      {
        titre: "Développement communautaire",
        role: "Médiateur et facilitateur chargé d'impliquer activement les populations locales dans l'amélioration de leurs conditions de vie.",
        actions: "Organiser et structurer les groupements villageois ou de quartiers, animer des diagnostics participatifs pour l'accès aux infrastructures de base (eau, électricité, éducation), et assurer la médiation culturelle pour éviter les conflits communautaires.",
        structures: "Mairies (Services de développement local), programmes nationaux de gestion des terroirs, agences de microfinance, et coopératives agricoles."
      }
    ]
  },

  {
    id: "uac-flash-adjara-Anglais",
    nom: "Anglais",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines d'Adjara (FLASH-Adjara)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DEAT", "DT/STI"],
    matieres_clefs: ["francais", "hg", "anglais"],
    debouches: [
      {
        titre: "Interprétariat",
        role: "Médiateur linguistique chargé de traduire oralement des discours et des échanges entre différentes langues en temps réel.",
        actions: "Assurer la traduction simultanée ou consécutive lors des conférences internationales, des réunions d'affaires ou des audiences officielles, et transcrire des documents stratégiques tout en respectant fidèlement le sens et le ton des interlocuteurs.",
        structures: "Organisations internationales (UA, CEDEAO, ONU), ministères (Affaires Étrangères), cabinets de traduction privés, et agences d'événementiel international."
      },
      {
        titre: "Tourisme",
        role: "Ambassadeur culturel et facilitateur linguistique pour l'accueil, le guidage et l'accompagnement des visiteurs étrangers.",
        actions: "Concevoir des circuits touristiques, guider les délégations anglophones sur les sites historiques et culturels du Bénin, gérer la communication bilingue des complexes hôteliers et promouvoir le patrimoine national à l'international.",
        structures: "Agences de voyage, offices nationaux du tourisme, musées (ex: Ouidah, Abomey), parcs nationaux (Pendjari), et grands complexes hôteliers."
      },
      {
        titre: "Enseignements",
        role: "Formateur et pédagogue chargé de transmettre les compétences linguistiques, grammaticales et littéraires de la langue anglaise.",
        actions: "Préparer les fiches de cours, dispenser les leçons d'anglais (compréhension et expression écrite/orale), évaluer les compétences des apprenants et animer des clubs d'anglais pour stimuler la pratique orale.",
        structures: "Collèges et lycées d'enseignement général (publics et privés), centres de langues (centres de formation professionnelle), et cours d'appui universitaire."
      }
    ]
  },

  {
    id: "uac-imsp-mpsi-pcsi",
    nom: "Classes préparatoires MPSI et PCSI",
    etablissement: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E", "F1", "F2", "F3"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Entrée dans les grandes écoles d'ingénieurs",
        role: "Candidat d'élite préparé pour intégrer les établissements technologiques et industriels de haut niveau.",
        actions: "Passer les concours nationaux et internationaux d'entrée aux grandes écoles, assimiler les concepts avancés en sciences de l'ingénieur et développer des compétences poussées en résolution de problèmes complexes.",
        structures: "Grandes écoles nationales (Eneam, Epac, Ifi, IMSP) et internationales (écoles d'ingénieurs en Afrique, en Europe ou au Canada via les concours de recrutement)."
      },
      {
        titre: "Masters de Mathématiques",
        role: "Futur mathématicien spécialisé dans la modélisation théorique, les statistiques ou les mathématiques appliquées.",
        actions: "Suivre des cours de haut niveau en algèbre, analyse et géométrie, concevoir des modèles mathématiques pour résoudre des problèmes économiques ou industriels, et préparer un projet de recherche universitaire.",
        structures: "Laboratoires de recherche en sciences exactes, instituts de statistiques, banques, compagnies d'assurances et universités publiques ou privées."
      },
      {
        titre: "Masters de Physique",
        role: "Scientifique expert des lois de la nature, de la mécanique quantique, de l'énergie et des systèmes physiques.",
        actions: "Mener des expérimentations avancées en laboratoire, analyser les phénomènes thermodynamiques ou optiques, modéliser les systèmes énergétiques et participer au développement des technologies de pointe.",
        structures: "Centres de recherche sur l'énergie solaire et renouvelable, laboratoires de métrologie, industries technologiques et universités."
      },
      {
        titre: "Masters d'Informatique",
        role: "Spécialiste de la programmation de haut niveau, de l'algorithmique avancée et de la sécurité des données.",
        actions: "Concevoir des architectures logicielles complexes, analyser la complexité d'algorithmes de pointe, faire de la recherche en intelligence artificielle ou en cryptographie, et développer des solutions numériques d'envergure.",
        structures: "Entreprises de services numériques (ESN), startups de la Tech, laboratoires de recherche en informatique (comme ceux de l'IMSP), et directions des systèmes d'information (DSI) des grandes entreprises."
      }
    ]
  },

  {
    id: "uac-fllac-allemand",
    nom: "Allemand",
    etablissement: "Faculté des Lettres, Langues, Arts et Communications (FLLAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B"],
    matieres_clefs: ["allemand", "anglais", "francais"],
    debouches: [
      {
        titre: "Interprétariat",
        role: "Médiateur culturel et linguistique assurant la traduction fluide et instantanée de la langue allemande.",
        actions: "Traduire oralement des discours, des négociations d'affaires ou des conférences internationales, et transposer des correspondances officielles ou diplomatiques du français vers l'allemand et vice-versa.",
        structures: "Ambassades et consulats (notamment l'Ambassade d'Allemagne au Bénin), agences de coopération internationale (GIZ), ministères, et cabinets de traduction privés."
      },
      {
        titre: "Tourisme",
        role: "Ambassadeur du patrimoine national chargé d'accueillir et de guider les visiteurs et délégations germanophones.",
        actions: "Concevoir des itinéraires de visites personnalisés, guider les touristes allemands ou autrichiens sur les pôles culturels et historiques du Bénin, et gérer les relations publiques bilingues pour les institutions de loisirs.",
        structures: "Agences de voyage et de tourisme, offices de promotion du tourisme, parcs nationaux (Eko-Benin, Pendjari), et grands complexes hôteliers."
      },
      {
        titre: "Enseignement dans les collèges et lycées",
        role: "Éducateur et pédagogue dédié à l'initiation et au perfectionnement de la langue et de la culture allemandes.",
        actions: "Élaborer des fiches de cours conformes aux programmes officiels, dispenser les leçons de grammaire, vocabulaire et littérature, évaluer la progression des élèves et animer les clubs scolaires d'allemand.",
        structures: "Collèges et lycées d'enseignement secondaire général (publics et privés), et centres de formation linguistique."
      },
      {
        titre: "Lecteur-correcteur dans les maisons d'édition",
        role: "Spécialiste de la qualité éditoriale, garant de la conformité linguistique et de la mise en valeur des textes.",
        actions: "Relire minutieusement les manuscrits et les ouvrages traduits en allemand, corriger la syntaxe, l'orthographe et la typographie, et veiller à la cohérence du ton et du style littéraire avant l'impression finale.",
        structures: "Maisons d'édition littéraires, agences de communication, presses universitaires, et médias ou revues spécialisées bilingues."
      }
    ]
  },

  {
    id: "uac-fllac-anglais",
    nom: "Anglais",
    etablissement: "Faculté des Lettres, Langues, Arts et Communications (FLLAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["anglais", "francais", "hg"],
    debouches: [
      {
        titre: "Interprétariat",
        role: "Médiateur linguistique en temps réel, traduisant oralement les discours pour assurer la communication immédiate.",
        actions: "Intervenir en cabine ou en direct pour restituer instantanément des allocutions, des conférences bilatérales ou des débats, tout en respectant scrupuleusement la fidélité, le niveau de langue et les expressions idiomatiques.",
        structures: "Organisations régionales et internationales (CEDEAO, UA, ONU), Ambassades, ministères et cabinets d'interprétation haut de gamme."
      },
      {
        titre: "Tourisme",
        role: "Ambassadeur culturel chargé de promouvoir la richesse du patrimoine auprès des visiteurs anglophones.",
        actions: "Concevoir des visites guidées immersives, coordonner la logistique des délégations étrangères au Bénin et gérer la communication et l'accueil bilingues dans les grands réceptifs touristiques.",
        structures: "Agences de voyage, offices nationaux du tourisme, musées nationaux, parcs de conservation (Pendjari, W) et complexes hôteliers internationaux."
      },
      {
        titre: "Enseignement dans les collèges et lycées",
        role: "Éducateur et formateur dédié à l'apprentissage et à la maîtrise de la langue de Shakespeare par les élèves.",
        actions: "Élaborer les leçons (grammaire, lexique, civilisation), animer les séances d'expression orale en classe, évaluer les progrès des apprenants et piloter les activités parascolaires comme les clubs d'anglais.",
        structures: "Collèges et lycées d'enseignement secondaire général (publics et privés), et instituts spécialisés de formation en langues."
      },
      {
        titre: "Lecteur-correcteur",
        role: "Garant de l'excellence éditoriale, de la fluidité stylistique et de la perfection grammaticale des contenus écrits.",
        actions: "Relire attentivement des manuscrits, des articles, des revues ou des manuels rédigés ou traduits en anglais, corriger la syntaxe et la typographie, et veiller à l'harmonie globale du document avant publication.",
        structures: "Maisons d'édition littéraires ou scientifiques, agences de presse, presses universitaires et agences de communication de marque."
      },
      {
        titre: "Traduction",
        role: "Expert de la transposition écrite de documents d'une langue vers une autre avec une précision technique irréprochable.",
        actions: "Traduire des textes juridiques, des rapports d'activités, des contrats commerciaux ou des contenus web du français vers l'anglais, en effectuant des recherches terminologiques poussées pour respecter le jargon professionnel.",
        structures: "Cabinets de traduction agréés, banques de développement, grandes entreprises privées, ONG internationales et institutions judiciaires."
      }
    ]
  },

  {
    id: "uac-fllac-espagnol",
    nom: "Espagnol",
    etablissement: "Faculté des Lettres, Langues, Arts et Communications (FLLAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B"],
    matieres_clefs: ["espagnol", "francais", "hg"],
    debouches: [
      {
        titre: "Interprétariat",
        role: "Médiateur linguistique et culturel assurant la communication orale fluide entre interlocuteurs francophones et hispanophones.",
        actions: "Traduire instantanément des discours, des entretiens ou des présentations lors de rencontres officielles ou commerciales, et transcrire des déclarations de délégations étrangères tout en en respectant fidèlement le sens.",
        structures: "Ambassades et consulats des pays hispaniques, ministères (Affaires Étrangères), cabinets de traduction et agences d'événementiel international."
      },
      {
        titre: "Tourisme",
        role: "Ambassadeur du patrimoine culturel béninois chargé de concevoir et d'animer des séjours pour les voyageurs hispanophones.",
        actions: "Guider les touristes et investisseurs venus d'Espagne ou d'Amérique latine sur les sites historiques nationaux, et gérer la communication ou les réservations bilingues au sein des complexes touristiques.",
        structures: "Agences de voyage, offices nationaux de promotion du tourisme, musées historiques, parcs nationaux (Pendjari) et grands hôtels."
      },
      {
        titre: "Enseignement dans les collèges et lycées",
        role: "Enseignant et pédagogue dédié à la transmission des compétences linguistiques, grammaticales et littéraires de l'espagnol.",
        actions: "Concevoir des fiches de cours adaptées aux programmes scolaires, animer des séances d'expression écrite et orale, évaluer la progression des élèves et piloter des clubs scolaires hispaniques.",
        structures: "Collèges et lycées d'enseignement secondaire général (publics et privés), et centres de formation linguistique."
      },
      {
        titre: "Lecteur-correcteur",
        role: "Spécialiste de la rigueur éditoriale garant de la qualité stylistique, orthographique et syntaxique des productions écrites.",
        actions: "Relire attentivement les manuscrits, les revues ou les documents officiels rédigés ou traduits en espagnol, corriger les coquilles techniques et harmoniser le ton de l'ouvrage avant sa publication.",
        structures: "Maisons d'édition littéraires, presses universitaires, agences de presse, médias bilingues et agences de communication."
      },
      {
        titre: "Relations internationales",
        role: "Analyste et chargé de mission facilitant la coopération diplomatique et stratégique avec le monde hispanique.",
        actions: "Suivre l'évolution des accords bilatéraux, préparer les dossiers diplomatiques ou les projets de coopération internationale, et assurer la correspondance officielle entre les institutions partenaires.",
        structures: "Ministère des Affaires Étrangères, organisations non gouvernementales (ONG), institutions d'intégration régionale et agences de développement international."
      }
    ]
  },

  {
    id: "uac-fllac-lettres-modernes",
    nom: "Lettres Modernes",
    etablissement: "Faculté des Lettres, Langues, Arts et Communications (FLLAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Enseignement",
        role: "Pédagogue chargé de transmettre la maîtrise de la langue française, de la grammaire et de la richesse littéraire.",
        actions: "Concevoir des fiches de cours, dispenser les leçons de littérature et de stylistique, évaluer les compétences écrites et orales des élèves et stimuler l'esprit critique à travers l'analyse de textes.",
        structures: "Collèges et lycées d'enseignement secondaire général (publics et privés), centres de formation et cours de soutien universitaire."
      },
      {
        titre: "Édition",
        role: "Professionnel de la chaîne du livre assurant la sélection, la révision et la valorisation des manuscrits.",
        actions: "Relire et corriger les œuvres littéraires ou scientifiques, travailler en collaboration avec les auteurs pour améliorer la structure du récit, et coordonner la mise en page avant l'impression finale.",
        structures: "Maisons d'édition littéraires ou scolaires au Bénin, presses universitaires et structures de publication privées."
      },
      {
        titre: "Communication",
        role: "Spécialiste de la communication écrite et verbale chargé de soigner et de promouvoir l'image d'une organisation.",
        actions: "Rédiger des communiqués de presse, concevoir des supports de communication externes et internes (newsletters, plaquettes), et élaborer des stratégies éditoriales claires et percutantes pour diverses cibles.",
        structures: "Agences de communication et de publicité, directions de communication (DirCom) des entreprises privées, ministères et ONG."
      },
      {
        titre: "Journalisme",
        role: "Professionnel des médias chargé de collecter, de vérifier et de diffuser l'information de manière déontologique.",
        actions: "Mener des enquêtes et des interviews sur le terrain, rédiger des articles de presse, des chroniques ou des billets d'analyse littéraire et de société, et présenter des reportages ou des revues de presse.",
        structures: "Organes de presse écrite (journaux nationaux), stations de radio, chaînes de télévision, et médias d'information en ligne."
      },
      {
        titre: "Rédaction professionnelle",
        role: "Expert du contenu textuel sur mesure, garant de la clarté et de l'impact des écrits professionnels ou web.",
        actions: "Produire des articles de blog optimisés (SEO), rédiger des discours officiels, des rapports d'activités complexes et des correspondances administratives de haut niveau en veillant à une syntaxe irréprochable.",
        structures: "Agences de marketing digital, plateformes de freelancing, cabinets de conseil, secrétariats de direction et cabinets ministériels."
      }
    ]
  },

  {
    id: "uac-fllac-sciences-langage",
    nom: "Sciences du Langage et de la Communication",
    etablissement: "Faculté des Lettres, Langues, Arts et Communications (FLLAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G3"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Didacticien de langues",
        role: "Spécialiste de la conception et de l'optimisation des méthodes d'apprentissage et d'enseignement des langues.",
        actions: "Élaborer des manuels scolaires et des outils pédagogiques innovants, adapter les programmes d'enseignement aux réalités linguistiques locales, et former les enseignants à des techniques de transmission linguistique fluides.",
        structures: "Ministère de l'Enseignement Secondaire, Technique et de la Formation Professionnelle, INFRE (Institut National pour la Formation et la Recherche en Éducation), éditeurs de manuels scolaires et instituts de langues."
      },
      {
        titre: "Consultant en éducation bi-plurilingue et interculturelle",
        role: "Expert chargé d'intégrer harmonieusement les langues nationales et les réalités culturelles dans les systèmes éducatifs.",
        actions: "Mener des diagnostics sur l'usage des langues maternelles en milieu scolaire, concevoir des modèles d'alphabétisation bilingue (langue nationale/français) et accompagner les projets de scolarisation inclusive sur le terrain.",
        structures: "ONG de développement éducatif, laboratoires de recherche en linguistique, mairies (gestion des plans locaux d'alphabétisation) et agences de coopération internationale (comme l'UNESCO ou l'AFD)."
      },
      {
        titre: "Communication institutionnelle",
        role: "Stratège du langage et des messages chargé de veiller à la clarté et à la portée de l'image de marque d'une organisation.",
        actions: "Rédiger des chartes de communication éditoriale, concevoir des messages médiatiques percutants, structurer les relations publiques et adapter le niveau de langage selon les publics cibles (partenaires techniques, populations locales).",
        structures: "Directions de la Communication (DirCom) des ministères, grandes entreprises privées (téléphonie, banques), agences de relations publiques et organisations internationales."
      },
      {
        titre: "Analyse de discours",
        role: "Analyste et décrypteur des intentions, des structures logiques et de l'impact des messages politiques, publicitaires ou médiatiques.",
        actions: "Étudier la sémantique et la rhétorique des prises de parole officielles, évaluer l'opinion publique à partir de l'analyse textuelle des médias et réseaux sociaux, et conseiller les leaders d'opinion sur l'impact de leur vocabulaire.",
        structures: "Cabinets de conseil en stratégie politique et médiatique, agences de communication de marque, instituts de sondage et de statistiques, et médias d'information."
      }
    ]
  },

  {
    id: "uac-inmaac-admin-culturelle",
    nom: "Administration Culturelle",
    etablissement: "Institut National des Métiers d'Arts, d'Archéologie et de la Culture (INMAAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "hg", "philo"],
    debouches: [
      {
        titre: "Production ou assistance de production",
        role: "Gestionnaire opérationnel et financier chargé de donner vie aux projets artistiques et culturels.",
        actions: "Élaborer les budgets prévisionnels, rechercher des financements et des partenaires, coordonner les équipes techniques et artistiques, et veiller au respect des plannings et des réglementations juridiques lors des tournages, festivals ou spectacles.",
        structures: "Maisons de production audiovisuelle, compagnies de théâtre ou de danse, agences événementielles et festivals culturels nationaux."
      },
      {
        titre: "Diffusion et communication culturelle",
        role: "Stratège promotionnel dédié à la valorisation des œuvres et à la conquête de nouveaux publics.",
        actions: "Concevoir des campagnes de communication adaptées (presse, réseaux sociaux), rédiger les dossiers de presse, négocier les contrats de vente ou de tournée des spectacles, et organiser la visibilité des événements culturels auprès des médias.",
        structures: "Centres culturels (comme les CCRI ou l'Institut Français), musées nationaux, galeries d'art, et agences de communication spécialisées dans le domaine artistique."
      },
      {
        titre: "Assistant programmateur",
        role: "Collaborateur artistique chargé de concevoir et de structurer la programmation d'un espace culturel.",
        actions: "Visionner des œuvres ou assister à des représentations pour repérer les talents, participer à la sélection des artistes invités, planifier le calendrier des événements de la saison, et assurer la liaison logistique avec les artistes programmés.",
        structures: "Théâtres, salles de spectacles, centres culturels publics et privés, mairies (services culturels), et comités d'organisation de festivals."
      },
      {
        titre: "Manager d'artistes",
        role: "Conseiller stratégique et représentant légal chargé de développer et de pérenniser la carrière d'un ou plusieurs talents.",
        actions: "Négocier les contrats d'engagement et de droits d'auteur, planifier l'agenda professionnel (studios, concerts, interviews), conseiller l'artiste sur ses choix de carrière et son positionnement d'image, et gérer ses intérêts financiers.",
        structures: "Agences de management artistiques, labels discographiques, ou en tant que consultant indépendant (Freelance) pour des artistes plasticiens, musiciens ou comédiens au Bénin."
      }
    ]
  },

  {
    id: "uac-inmaac-arts-dramatiques",
    nom: "Arts dramatiques",
    etablissement: "Institut National des Métiers d'Arts, d'Archéologie et de la Culture (INMAAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "hg", "philo"],
    debouches: [
      {
        titre: "Comédien",
        role: "Interprète artistique donnant vie à des personnages à travers le geste, la voix et l'émotion.",
        actions: "Incarner des rôles variés, mémoriser des textes complexes, participer aux répétitions et se produire sur scène devant un public ou face à une caméra.",
        structures: "Compagnies de théâtre, plateaux de tournage de cinéma et séries télévisées, troupes artistiques et centres culturels."
      },
      {
        titre: "Metteur en scène",
        role: "Maître d'œuvre et visionnaire chargé de coordonner la création artistique d'un spectacle vivant.",
        actions: "Sélectionner les pièces et les textes, diriger l'équipe artistique et technique, harmoniser la scénographie, les lumières et le jeu des acteurs pour donner une cohérence globale à l'œuvre.",
        structures: "Théâtres nationaux et régionaux, festivals de théâtre (comme le FITHEB), centres culturels publics et indépendants."
      },
      {
        titre: "Régisseur",
        role: "Responsable logistique et technique garant du bon déroulement matériel des spectacles et représentations.",
        actions: "Superviser l'installation des décors, piloter la régie lumière et son pendant le spectacle, et anticiper les besoins techniques pour assurer la sécurité et le confort de la troupe.",
        structures: "Salles de spectacles, complexes culturels (ex: l'Institut Français, CCRI), compagnies de théâtre itinérantes et agences événementielles."
      },
      {
        titre: "Voix off",
        role: "Professionnel de la communication vocale prêtant son timbre pour des narrations non visibles à l'écran.",
        actions: "Enregistrer des textes publicitaires, des documentaires, des guides audio ou des capsules d'apprentissage en modulant le ton et le rythme selon les intentions du projet.",
        structures: "Studios d'enregistrement audio, agences de publicité, chaînes de radio et de télévision, et plateformes de création de contenus digitaux."
      },
      {
        titre: "Doublage vocal",
        role: "Acteur de l'ombre spécialisé dans la réinterprétation vocale de personnages de films, séries ou animations étrangers.",
        actions: "Synchroniser sa voix sur les mouvements des lèvres des acteurs originaux, traduire l'intensité dramatique ou comique dans la langue cible, et adapter le jeu d'acteur au format audio.",
        structures: "Maisons de production audiovisuelle, studios de post-production, et agences de distribution cinématographique ou télévisuelle."
      },
      {
        titre: "Direction d'acteurs",
        role: "Coach et conseiller artistique accompagnant les comédiens pour révéler le meilleur de leur potentiel de jeu.",
        actions: "Guider les acteurs pendant les séances de préparation, les aider à décoder la psychologie de leurs personnages et ajuster leurs expressions sur les plateaux de cinéma ou lors des répétitions de théâtre.",
        structures: "Écoles de théâtre, agences de casting, productions cinématographiques privées, et en tant que consultant indépendant (Freelance) auprès des célébrités."
      }
    ]
  },

  {
    id: "uac-inmaac-arts-plastiques",
    nom: "Arts Plastiques",
    etablissement: "Institut National des Métiers d'Arts, d'Archéologie et de la Culture (INMAAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "philo", "maths"],
    debouches: [
      {
        titre: "Dessinateur",
        role: "Spécialiste de la communication visuelle et de l'expression graphique par le trait.",
        actions: "Réaliser des croquis, des portraits, des bandes dessinées ou des plans visuels en utilisant des techniques traditionnelles (crayon, fusain) ou numériques.",
        structures: "Agences de communication, studios de design, maisons d'édition, presse écrite, ou en tant qu'artiste indépendant (Freelance)."
      },
      {
        titre: "Peintre",
        role: "Artiste créateur traduisant des émotions, des messages et des concepts sur des surfaces planes via la couleur.",
        actions: "Composer des œuvres originales sur toile ou sur mur (fresques), explorer des harmonies chromatiques, et préparer des collections thématiques pour des expositions.",
        structures: "Galeries d'art, centres culturels, industries de la décoration, et ateliers d'art nationaux ou internationaux."
      },
      {
        titre: "Sculpteur",
        role: "Artiste de la matière et du volume, façonnant des œuvres tridimensionnelles expressives.",
        actions: "Travailler, tailler ou modeler divers matériaux (bois, bronze, argile, métaux de récupération, pierre) pour donner vie à des statues, des monuments ou des installations artistiques.",
        structures: "Fonderies d'art, musées, communes (pour les monuments urbains), parcs de sculptures et commandes privées."
      },
      {
        titre: "Designer",
        role: "Créateur alliant l'esthétique artistique à l'utilité pratique pour des objets ou des espaces.",
        actions: "Concevoir le visuel de produits de consommation, de mobiliers ou d'identités de marques, en veillant à l'harmonie des formes, des couleurs et de l'ergonomie.",
        structures: "Agences de design d'objet, industries manufacturières, agences de branding, et cabinets de décoration intérieure."
      },
      {
        titre: "Illustrateur",
        role: "Créateur visuel chargé de donner une image et de mettre en valeur des textes et des concepts narratifs.",
        actions: "Créer des visuels sur mesure pour des livres d'enfants, des manuels scolaires, des articles de presse, ou des affiches publicitaires en respectant une ligne éditoriale.",
        structures: "Maisons d'édition scolaires et littéraires, agences publicitaires, studios d'animation et de jeux vidéo."
      },
      {
        titre: "Maquettiste",
        role: "Technicien de l'espace et du volume, traduisant des projets à échelle réduite pour la visualisation.",
        actions: "Concevoir et assembler des maquettes physiques ou numériques représentant des infrastructures architecturales, des décors de théâtre ou des prototypes industriels.",
        structures: "Cabinets d'architecture, agences d'urbanisme, compagnies de théâtre (scénographie) et bureaux d'études techniques."
      },
      {
        titre: "Critique d'art",
        role: "Analyste et historien chargé d'interpréter, de valoriser et de décrypter les productions artistiques pour le public.",
        actions: "Rédiger des articles de presse, des préfaces de catalogues d'exposition ou des revues scientifiques pour analyser le style, la portée culturelle et la valeur esthétique des œuvres d'art.",
        structures: "Journaux et magazines culturels, galeries d'art, revues spécialisées, musées et institutions de conservation du patrimoine."
      }
    ]
  },

  {
    id: "uac-inmaac-musique",
    nom: "Musique et Musicologie",
    etablissement: "Institut National des Métiers d'Arts, d'Archéologie et de la Culture (INMAAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DT"],
    matieres_clefs: ["francais", "anglais", "maths"],
    debouches: [
      {
        titre: "Chanteur",
        role: "Artiste vocal interprétant des œuvres musicales ou créant ses propres mélodies pour transmettre des émotions.",
        actions: "Travailler sa technique vocale, participer à des séances d'enregistrement en studio, collaborer avec des musiciens et se produire sur scène lors de concerts ou de festivals.",
        structures: "Labels discographiques, chorales et ensembles professionnels, industries du spectacle vivant et projets artistiques indépendants."
      },
      {
        titre: "Chef de chœur",
        role: "Directeur artistique et technique chargé de coordonner, former et diriger un ensemble vocal ou une chorale.",
        actions: "Sélectionner le répertoire musical, faire travailler les différentes voix (soprano, alto, ténor, basse), assurer la justesse et l'harmonie des chants, et conduire l'ensemble lors des représentations.",
        structures: "Chorales religieuses ou laïques, institutions culturelles, écoles de musique et chorales universitaires."
      },
      {
        titre: "Designer sonore",
        role: "Expert de l'environnement audio chargé de concevoir et de monter l'identité sonore de supports visuels ou interactifs.",
        actions: "Créer des effets sonores sur mesure, mixer les voix et les musiques de fond, et structurer l'ambiance acoustique pour renforcer l'impact immersif d'un projet.",
        structures: "Studios de production audiovisuelle, agences de communication et de publicité, studios de développement de jeux vidéo et médias (télévision, radio)."
      },
      {
        titre: "Compositeur de musique et paroles",
        role: "Auteur-créateur de l'architecture mélodique, rythmique et textuelle des œuvres musicales.",
        actions: "Écrire les textes des chansons, composer les lignes mélodiques et les arrangements instrumentaux, et protéger ses œuvres auprès des organismes de gestion des droits d'auteur.",
        structures: "Maisons de disques, agences de production de jingles publicitaires, compositeurs pour le cinéma (musique de film) et le théâtre (BUBEDRA au Bénin pour la gestion)."
      },
      {
        titre: "Musicien professionnel",
        role: "Artiste instrumentiste expert mettant sa maîtrise technique au service de créations musicales ou d'accompagnements scéniques.",
        actions: "Pratiquer quotidiennement son instrument (piano, guitare, batterie, instruments traditionnels), répéter les partitions complexes, et accompagner des artistes sur scène ou lors de sessions en studio.",
        structures: "Orchestres nationaux ou privés, groupes de musique (live bands), studios d'enregistrement, et grands complexes hôteliers ou événementiels."
      }
    ]
  },

  {
    id: "uac-inmaac-cinema",
    nom: "Cinéma et Audiovisuel",
    etablissement: "Institut National des Métiers d'Arts, d'Archéologie et de la Culture (INMAAC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "pct", "philo"],
    debouches: [
      {
        titre: "Scénariste",
        role: "Auteur et architecte textuel de l'histoire, chargé d'écrire la structure narrative et les dialogues d'une œuvre audiovisuelle.",
        actions: "Développer le synopsis, rédiger le séquencier détaillé, construire la psychologie des personnages et formaliser les dialogues en respectant les normes d'écriture cinématographique.",
        structures: "Maisons de production cinématographique, chaînes de télévision, agences de création de contenus digitaux, et en tant que Freelance."
      },
      {
        titre: "Storyboardeur",
        role: "Artiste visuel traduisant le scénario écrit en une suite de dessins pour planifier le découpage technique des plans.",
        actions: "Illustrer les mouvements de caméra, le cadrage et l'emplacement des personnages pour chaque scène, et collaborer étroitement avec le réalisateur pour guider l'équipe de tournage.",
        structures: "Studios d'animation, agences de communication et de publicité, et productions cinématographiques de court ou long métrage."
      },
      {
        titre: "Scénographe",
        role: "Créateur de l'espace scénique et visuel, chargé de concevoir l'univers matériel et les décors du film.",
        actions: "Imaginer, dessiner et superviser la construction ou l'aménagement des décors sur le plateau de tournage en parfaite harmonie avec l'époque et l'ambiance recherchées par la réalisation.",
        structures: "Plateaux de tournage cinématographique, studios de télévision, compagnies de théâtre et agences d'événementiel culturel."
      },
      {
        titre: "Régisseur",
        role: "Gestionnaire logistique et opérationnel garant de l'organisation matérielle et de la sécurité sur le lieu de tournage.",
        actions: "Prendre en charge les autorisations de tournage, bloquer les accès routiers si nécessaire, organiser le transport, l'hébergement et la restauration des équipes artistiques et techniques.",
        structures: "Sociétés de production audiovisuelle, agences de production de clips ou publicités, et festivals de cinéma."
      },
      {
        titre: "Monteur image",
        role: "Artiste de la post-production chargé d'assembler les rushs vidéo pour donner du rythme, du sens et de l'émotion au film.",
        actions: "Sélectionner les meilleures prises, réaliser les coupures et transitions, synchroniser l'image avec le son, et appliquer le traitement colorimétrique de base (étalonnage).",
        structures: "Studios de post-production, chaînes de télévision, agences de communication digitale et entreprises de médias en ligne."
      },
      {
        titre: "Gestion et diffusion de productions",
        role: "Stratège commercial et administratif chargé de distribuer, promouvoir et rentabiliser les œuvres cinématographiques.",
        actions: "Inscrire les films dans les festivals, négocier les droits de diffusion avec les salles de cinéma ou les plateformes de streaming, et gérer la communication de presse autour de la sortie de l'œuvre.",
        structures: "Centres nationaux du cinéma (CNCM), agences de distribution de films, chaînes de télévision régionales ou internationales, et festivals (ex: ISMA, FESPACO)."
      }
    ]
  },

  {
    id: "uac-cifred-environnement",
    nom: "Environnement, Hygiène et Santé publique",
    etablissement: "Centre Inter Facultaire de Formation et de Recherche en Environnement pour le Développement Durable (CIFRED)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "EA"],
    matieres_clefs: ["svt", "pct", "hg"],
    debouches: [
      {
        titre: "Inspecteur d'action sanitaire",
        role: "Garant de l'application des réglementations d'hygiène publique pour prévenir les risques sanitaires dans la communauté.",
        actions: "Inspecter les établissements recevant du public, contrôler la salubrité des aliments et des locaux commerciaux, et appliquer les sanctions ou recommandations requises pour protéger la santé collective.",
        structures: "Ministère de la Santé, Directions Départementales de la Santé (DDS), services d'hygiène des mairies, et structures de contrôle qualité."
      },
      {
        titre: "Expert en environnement",
        role: "Spécialiste chargé d'évaluer l'impact des activités humaines et industrielles sur les écosystèmes naturels.",
        actions: "Réaliser des études d'impact environnemental et social (EIES), concevoir des plans de gestion environnementale, et conseiller les entreprises sur les technologies propres et la réduction de leur empreinte carbone.",
        structures: "Agence Béninoise pour l'Environnement (ABE), bureaux d'études et de conseil, ONG de protection de la nature, et industries manufacturières."
      },
      {
        titre: "Gestion des déchets et assainissement",
        role: "Technicien supérieur et planificateur des circuits de collecte, de traitement et de valorisation des résidus solides et liquides.",
        actions: "Superviser les réseaux de collecte des ordures, concevoir des plans de gestion des déchets biomédicaux ou industriels dangereux, et optimiser les infrastructures d'épuration des eaux usées.",
        structures: "Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin), mairies, entreprises de traitement des eaux, et structures de recyclage."
      },
      {
        titre: "Santé publique",
        role: "Analyste et coordonnateur de programmes sanitaires globaux axés sur la prévention des pathologies environnementales.",
        actions: "Concevoir des campagnes de sensibilisation sur les maladies liées à l'eau ou à la pollution, suivre les indicateurs de santé communautaire, et collaborer à la mise en place de plans d'urgence sanitaire.",
        structures: "Organisations internationales (OMS, UNICEF), ministères, grands programmes nationaux de santé, et organisations non gouvernementales."
      }
    ]
  },
  
  {
    id: "uac-icate-gestion-cadre-vie",
    nom: "Gestion du cadre de vie",
    etablissement: "Institut de Cadre de Vie (ICATE)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["maths", "francais", "hg"],
    debouches: [
      {
        titre: "Aménagement",
        role: "Planificateur de l'espace urbain et rural pour une cohabitation harmonieuse entre infrastructures et nature.",
        actions: "Participer à l'élaboration des plans d'occupation des sols, concevoir la répartition spatiale des infrastructures publiques et intégrer les espaces paysagers et zones de verdure dans les projets de lotissement.",
        structures: "Ministère du Cadre de Vie, directions techniques des mairies, Agences de Développement Territorial (ADT) et cabinets d'urbanisme."
      },
      {
        titre: "Reboisement",
        role: "Technicien de la foresterie et de la restauration des écosystèmes végétaux face à la déforestation et au changement climatique.",
        actions: "Planifier et superviser des campagnes de reboisement massif, gérer les pépinières de plantes locales, et concevoir des ceintures vertes urbaines pour freiner l'érosion et enrichir la biodiversité.",
        structures: "Direction Générale des Eaux, Forêts et Chasse (DGEFC), ONG environnementales, parcs nationaux et projets de foresterie communautaire."
      },
      {
        titre: "Sauvegarde environnementale et sociale",
        role: "Garant de la conformité écologique et humaine des grands chantiers et projets d'infrastructures.",
        actions: "Veiller au respect des clauses de sauvegarde environnementale sur le terrain, minimiser l'impact négatif des chantiers sur les populations locales, et assurer le suivi des plans de réinstallation ou de compensation.",
        structures: "Agence Béninoise pour l'Environnement (ABE), bureaux d'études, entreprises de BTP (suivi environnemental) et bailleurs de fonds (Banque Mondiale, BAD)."
      },
      {
        titre: "Gestion et restauration de l'environnement",
        role: "Expert en dépollution chargé de réhabiliter les sites naturels dégradés ou pollués par l'activité humaine.",
        actions: "Analyser les sols et les cours d'eau contaminés, déployer des techniques de bioremédiation ou de stabilisation des terres, et concevoir des programmes durables pour la préservation des zones humides et des écosystèmes fragiles.",
        structures: "Centres de recherche, Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin), ONG internationales et cabinets d'expertise écologique."
      }
    ]
  },

  {
    id: "uac-icate-changements-climatiques",
    nom: "Gestion des changements climatiques et des écosystèmes",
    etablissement: "Institut de Cadre de Vie (IGATE)",
    universite: "UAC",
    series_autorisees: ["C", "D", "EA"],
    matieres_clefs: ["maths", "francais", "hg"],
    debouches: [
      {
        titre: "Expert en changement climatique",
        role: "Stratège scientifique chargé de concevoir et piloter les politiques d'atténuation et d'adaptation face aux crises climatiques.",
        actions: "Modéliser les scénarios d'évolution du climat, élaborer des plans de résilience pour les secteurs vulnérables (agriculture, ressources en eau), et monter les dossiers de financement climatique (Fonds Vert pour le Climat).",
        structures: "Ministère du Cadre de Vie et des Transports, Direction Générale de l'Environnement et du Climat (DGEC), PNUD Bénin, et secrétariats des conventions internationales."
      },
      {
        titre: "Aménagement des ressources naturelles",
        role: "Gestionnaire éco-responsable dédié à la préservation durable de la faune, de la flore et des bassins hydrographiques.",
        actions: "Mettre en place des plans d'aménagement forestier et faunique, cartographier la dégradation des terres à l'aide de données satellitaires, et collaborer avec les communautés locales pour freiner la désertification.",
        structures: "Direction Générale des Eaux, Forêts et Chasse (DGEFC), Centre National de Gestion des Réserves de Faune (CENAGREF), et agences de gestion des bassins versants."
      },
      {
        titre: "Consultant environnemental",
        role: "Conseiller indépendant ou en cabinet, garant de l'intégration des critères écologiques dans les projets publics et privés.",
        actions: "Réaliser des audits environnementaux, mener des études d'impact environnemental et social (EIES) pour le compte des industries, et guider les structures vers les certifications de durabilité (normes ISO).",
        structures: "Cabinets d'études et de conseil en environnement, Agence Béninoise pour l'Environnement (ABE), banques d'investissement, et ONG internationales."
      }
    ]
  },

  {
    id: "uac-icate-geomatique",
    nom: "Géomatique et Environnement",
    etablissement: "Institut de Cadre de Vie (ICATE)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "francais", "hg"],
    debouches: [
      {
        titre: "Spécialiste en géomatique",
        role: "Ingénieur-technicien de la donnée spatiale, alliant l'informatique, la géographie et l'analyse de données environnementales.",
        actions: "Acquérir des données de terrain par drone ou imagerie satellite, modéliser des territoires en 3D, traiter des nuages de points topographiques et concevoir des bases de données géospatiales complexes pour guider les décisions d'aménagement.",
        structures: "Institut Géographique National (IGN), cabinets de géomètres-experts, agences de développement territorial, et entreprises du secteur minier et pétrolier."
      },
      {
        titre: "Cartographie numérique",
        role: "Expert visuel de la donnée, chargé de concevoir et de diffuser des cartes dynamiques, interactives et analytiques.",
        actions: "Concevoir des atlas thématiques (risques d'inondation, étalement urbain, réseaux de transport), automatiser la production de cartes web, et appliquer la sémiologie graphique pour rendre l'information spatiale accessible aux décideurs.",
        structures: "Bureaux d'études en urbanisme, directions techniques des mairies, entreprises de transport et logistique, et agences de gestion des risques et catastrophes."
      },
      {
        titre: "SIG (Systèmes d'Information Géographique)",
        role: "Administrateur et analyste de plateformes SIG, garant de la structuration et de l'exploitation intelligente des données territoriales.",
        actions: "Développer et maintenir des applications SIG métiers, réaliser des analyses spatiales multicritères (ex: choix d'implantation d'infrastructures), et former les équipes opérationnelles à l'utilisation des outils géospatiaux (ArcGIS, QGIS).",
        structures: "Grandes entreprises de télécommunications (gestion de réseau), sociétés de distribution d'eau et d'électricité (SBEE, SONEB), ONG environnementales, et ministères sectoriels."
      }
    ]
  },

  {
    id: "uac-icate-espaces-urbains",
    nom: "Planification et Gestion des espaces urbains et ruraux",
    etablissement: "Institut de Cadre de Vie (ICATE)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["maths", "francais", "hg"],
    debouches: [
      {
        titre: "Spécialiste en planification urbaine",
        role: "Concepteur et régulateur des stratégies de développement des villes pour anticiper et structurer la croissance urbaine.",
        actions: "Élaborer les documents de planification (Schémas Directeurs d'Aménagement Communal - SDAC), concevoir des plans de restructuration des quartiers précaires, et définir les règles locales d'occupation des sols.",
        structures: "Ministère du Cadre de Vie et des Transports, mairies, Agence Nationale du Domaine et Foncier (ANDF), et agences de développement territorial."
      },
      {
        titre: "Gestion des territoires ruraux",
        role: "Aménagiste du territoire dédié à la revalorisation des zones rurales et à la réduction de la fracture territoriale.",
        actions: "Concevoir des infrastructures d'accès aux services de base (pistes rurales, marchés, points d'eau), planifier des zones d'aménagement agricole, et accompagner les collectivités locales dans la gestion durable de leurs ressources foncières.",
        structures: "Directions Départementales de l'Agriculture, de l'Élevage et de la Pêche (DDAEP), préfectures, groupements intercommunaux, et ONG de développement rural."
      },
      {
        titre: "Urbaniste",
        role: "Maître d'œuvre urbain harmonisant les espaces de vie, les réseaux de transport et les zones environnementales.",
        actions: "Superviser des opérations de lotissement et de viabilisation, piloter la maîtrise d'ouvrage de grands projets d'aménagement urbain, et veiller à l'intégration des espaces verts et des critères de durabilité dans la ville.",
        structures: "Cabinets d'urbanisme et d'architecture, agences de promotion immobilière, bureaux d'études techniques, et sociétés d'aménagement public."
      },
      {
        titre: "Consultant en aménagement",
        role: "Expert indépendant ou en cabinet, apportant un appui stratégique aux décideurs publics et privés sur les dynamiques spatiales.",
        actions: "Mener des diagnostics territoriaux multicritères, réaliser des enquêtes socio-économiques auprès des populations impactées par des projets, et conseiller les collectivités sur la mise en œuvre de la décentralisation.",
        structures: "Cabinets de conseil nationaux et internationaux, banques de développement (Banque Mondiale, AFD, BAD), et programmes d'appui aux communes."
      }
    ]
  },

  {
    id: "uac-ine-hydrologie-quantitative",
    nom: "Hydrologie quantitative et Gestion intégrée des Ressources",
    etablissement: "Institut National de l'Eau (INE)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Hydrologue",
        role: "Ingénieur-scientifique chargé de mesurer, modéliser et prévoir la disponibilité et les mouvements des ressources en eau de surface et souterraines.",
        actions: "Analyser les données de débits des cours d'eau, modéliser les risques d'inondation et de sécheresse, installer des stations hydrométriques et planifier la gestion durable des bassins versants face au stress climatique.",
        structures: "Direction Générale de l'Eau (DG-Eau), agences de bassin (ex: Bassin du Niger/Ouémé), instituts de recherche, et ONG environnementales."
      },
      {
        titre: "Chimiste des eaux",
        role: "Scientifique de laboratoire expert de la composition physico-chimique et de la dépollution des ressources hydriques.",
        actions: "Analyser les échantillons d'eau brute ou traitée, détecter les polluants (métaux lourds, pesticides), doser les réactifs pour le traitement de potabilisation et superviser la neutralisation des effluents industriels.",
        structures: "Société Nationale des Eaux du Bénin (SONEB), Laboratoire National de Santé Publique, bureaux d'études environnementaux, et industries agroalimentaires."
      },
      {
        titre: "Contrôle de qualité hygiénique",
        role: "Garant de la conformité biologique et sanitaire des eaux destinées à la consommation humaine et aux usages professionnels.",
        actions: "Réaliser des analyses microbiologiques (recherche de bactéries pathogènes), auditer les processus de mise en bouteille ou de distribution d'eau, et valider la potabilité de l'eau dans les réseaux d'approvisionnement ruraux et urbains.",
        structures: "Ministère de la Santé (DDS), Agence Nationale de Normalisation, de Métrologie et de Contrôle Qualité (ANM), et entreprises de production d'eau minérale."
      },
      {
        titre: "Contrôleur des travaux d'assainissement",
        role: "Technicien supérieur assurant la conformité technique des infrastructures de collecte et de traitement des eaux usées et pluviales.",
        actions: "Superviser les chantiers de pose de canalisations, inspecter les stations d'épuration et les ouvrages de drainage urbain, et s'assurer du respect des plans d'ingénierie et des normes écologiques en vigueur.",
        structures: "Directions techniques des mairies, entreprises de BTP et d'ingénierie hydraulique, et Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin)."
      }
    ]
  },

  {
    id: "uac-ine-hydrogeologie",
    nom: "Hydrogéologie et Gestion intégrée des Ressources",
    etablissement: "Institut National de l'Eau (INE)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Hydrogéologue",
        role: "Ingénieur-scientifique spécialisé dans la recherche, la cartographie et l'exploitation rationnelle des nappes aquifères.",
        actions: "Superviser les opérations de forage d'eau complexes, modéliser le comportement hydrodynamique des nappes souterraines, évaluer les réserves exploitables et définir les périmètres de protection sanitaire autour de captages d'eau.",
        structures: "Direction Générale de l'Eau (DG-Eau), cabinets d'ingénierie conseil, entreprises de forage, et Agence Nationale d'Approvisionnement en Eau Potable en Milieu Rural (ANAEPMR)."
      },
      {
        titre: "Géophysicien",
        role: "Expert en prospection du sous-sol, utilisant des méthodes physiques pour localiser les ressources et structures géologiques.",
        actions: "Réaliser et interpréter des profils de résistivité électrique (sondages électriques) ou des études sismiques pour repérer les fractures aquifères, optimiser l'implantation des futurs forages et minimiser le taux d'échec.",
        structures: "Bureaux d'études géotechniques et hydrogéologiques, entreprises d'exploration minière ou pétrolière, et instituts de recherche en géosciences."
      },
      {
        titre: "Expert en ressources souterraines",
        role: "Consultant stratégique dédié à la préservation et à la gestion durable des réserves d'eau invisibles face aux pressions anthropiques.",
        actions: "Élaborer des plans de gestion intégrée des ressources en eau (GIRE), quantifier l'impact du changement climatique sur la recharge des nappes, et concevoir des stratégies de lutte contre l'intrusion saline dans les aquifères côtiers.",
        structures: "Organisations internationales (PNUD, UNESCO, Banque Mondiale), ONG environnementales, ministères du Cadre de Vie et de l'Eau, et agences de bassin."
      },
      {
        titre: "Contrôle qualité eau",
        role: "Garant de la sécurité sanitaire et de la conformité physico-chimique des eaux souterraines captées pour la consommation.",
        actions: "Échantillonner et analyser l'eau des forages et puits, détecter d'éventuelles pollutions (nitrates, métaux, fluorures), valider les systèmes de traitement de potabilisation et auditer la qualité des réseaux de distribution.",
        structures: "Société Nationale des Eaux du Bénin (SONEB), Laboratoire National de Santé Publique, agences de contrôle sanitaire, et industries de production d'eau minérale."
      }
    ]
  },
  
  {
    id: "uac-ine-ecohydrologie",
    nom: "Ecohydrologie et Gestion intégrée des Ressources",
    etablissement: "Institut National de l'Eau (INE)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Écohydrologue",
        role: "Scientifique interdisciplinaire étudiant les interactions mutuelles entre les cycles de l'eau et les composantes biologiques des écosystèmes.",
        actions: "Analyser l'impact de la végétation sur le ruissellement et l'infiltration de l'eau, utiliser les barrières végétales naturelles pour purifier les ressources hydriques, et concevoir des solutions fondées sur la nature (SFN) pour réguler les débits des cours d'eau.",
        structures: "Direction Générale de l'Eau (DG-Eau), agences de gestion des bassins versants, centres de recherche en écologie, et ONG de protection de l'environnement."
      },
      {
        titre: "Hydrogéophysicien",
        role: "Spécialiste de l'imagerie du sous-sol appliquant des méthodes physiques pour cartographier les ressources en eau et les structures géologiques peu profondes.",
        actions: "Planifier des campagnes de prospection électrique ou électromagnétique, localiser les zones de recharge des nappes, détecter l'intrusion saline dans les nappes côtières et interpréter les données géophysiques pour guider les forages.",
        structures: "Bureaux d'études géotechniques, cabinets d'ingénierie-conseil en hydraulique, entreprises d'exploration et d'aménagement du sous-sol."
      },
      {
        titre: "Gestion des écosystèmes aquatiques",
        role: "Conservateur et aménagiste des milieux humides, des lacs, des rivières et de leurs biodiversités associées.",
        actions: "Suivre l'état écologique et physico-chimique des milieux aquatiques, piloter des projets de restauration des berges et des mangroves dégradées, et réglementer les activités anthropiques (pêche, agriculture de décrue) pour préserver l'équilibre biologique.",
        structures: "Centre National de Gestion des Réserves de Faune (CENAGREF), ministères de l'Environnement et de la Pêche, parcs nationaux, et organismes internationaux de conservation (ex: UICN, WWF)."
      },
      {
        titre: "Recherche environnementale",
        role: "Chercheur ou enseignant-chercheur dédié à la production de connaissances scientifiques sur les dynamiques hydrologiques et climatiques.",
        actions: "Concevoir des protocoles d'expérimentation sur le terrain ou en laboratoire, rédiger des articles scientifiques pour des revues spécialisées, modéliser la réponse des écosystèmes face au changement climatique et participer à des conférences internationales.",
        structures: "Laboratoires de recherche universitaires (notamment à l'INE et à l'UAC), instituts nationaux de recherche agronomique ou environnementale, et observatoires du climat."
      }
    ]
  },

  {
    id: "uac-ine-gestion-crises-eau",
    nom: "Gestion des crises et risques liés à l'eau et au climat",
    etablissement: "Institut National de l'Eau (INE)",
    universite: "UAC",
    series_autorisees: ["C", "D", "EA", "DEAT/AER"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Gestion des risques climatiques",
        role: "Spécialiste de l'anticipation et de la modélisation des aléas extrêmes liés aux dérèglements hydro-climatiques.",
        actions: "Développer des systèmes d'alerte précoce pour les inondations ou les sécheresses, cartographier les zones de vulnérabilité territoriale, et concevoir des stratégies d'atténuation de l'impact des chocs climatiques sur les populations.",
        structures: "Agence Nationale de la Protection Civile (ANPC), Direction Générale de l'Eau (DG-Eau), Météo-Bénin, et ONG de développement durable."
      },
      {
        titre: "Planification des crises hydriques",
        role: "Gestionnaire opérationnel d'urgence chargé de coordonner les réponses face à la pénurie ou à la contamination des ressources en eau.",
        actions: "Élaborer des plans de contingence et d'urgence sanitaire, organiser l'approvisionnement d'urgence en eau potable pour les populations sinistrées, et superviser le rétablissement rapide des réseaux hydrauliques après une catastrophe.",
        structures: "Ministère de l'Eau et des Mines, Société Nationale des Eaux du Bénin (SONEB), Agence Nationale d'Approvisionnement en Eau Potable en Milieu Rural (ANAEPMR), et la Croix-Rouge Béninoise."
      },
      {
        titre: "Expert en résilience territoriale",
        role: "Conseiller stratégique dédié à l'adaptation à long terme des infrastructures et des communautés face aux mutations environnementales.",
        actions: "Auditer la robustesse climatique des infrastructures publiques, intégrer des solutions d'aménagement résilientes dans les plans communaux, et accompagner la transition des secteurs vulnérables comme l'agriculture face au stress hydrique.",
        structures: "Cabinets d'études et d'ingénierie-conseil, mairies (directions techniques), programmes d'appui de la Banque Mondiale, du PNUD et du Fonds Vert pour le Climat."
      }
    ]
  },

  {
    id: "uac-ine-genie-rural",
    nom: "Génie rural et Maîtrise de l'Eau",
    etablissement: "Institut National de l'Eau (INE)",
    universite: "UAC",
    series_autorisees: ["C", "D", "EA", "DEAT/AER"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Contrôleur des travaux d'aménagement hydro-agricoles",
        role: "Technicien supérieur de terrain assurant le suivi de la construction et de la conformité des infrastructures dédiées à l'agriculture.",
        actions: "Superviser la réalisation des canaux d'irrigation, des digues, des systèmes de drainage et des retenues d'eau, vérifier la qualité des matériaux et s'assurer du respect rigoureux des plans d'exécution topographiques et hydrauliques.",
        structures: "Agences Territoriales de Développement Agricole (ATDA), entreprises de BTP et de génie civil, bureaux de contrôle technique, et groupements d'exploitants agricoles."
      },
      {
        titre: "Expert en génie rural",
        role: "Ingénieur-concepteur spécialisé dans la modernisation des infrastructures rurales et des systèmes de production agro-pastoraux.",
        actions: "Concevoir des réseaux d'irrigation goutte-à-goutte ou par aspersion, dimensionner des ouvrages de franchissement et des pistes de desserte rurale, et planifier des bâtiments d'élevage ou de stockage automatisés.",
        structures: "Ministère de l'Agriculture, de l'Élevage et de la Pêche (MAEP), cabinets d'ingénierie-conseil en développement rural, et bureaux d'études spécialisés en hydraulique agricole."
      },
      {
        titre: "Maîtrise d'ouvrage hydraulique",
        role: "Coordonnateur et gestionnaire de projets publics ou privés d'approvisionnement en eau et de valorisation des ressources hydriques.",
        actions: "Rédiger les cahiers des charges (DAO), évaluer les offres techniques des prestataires, superviser la mise en œuvre des budgets et assurer l'interface entre les bailleurs de fonds, les entreprises de travaux et les communautés bénéficiaires.",
        structures: "Agence Nationale d'Approvisionnement en Eau Potable en Milieu Rural (ANAEPMR), directions techniques des mairies, ONG d'aide au développement et institutions financières (BIDC, BOAD, Banque Mondiale)."
      }
    ]
  },

  {
    id: "uac-ine-hydraulique",
    nom: "Hydraulique et Assainissement",
    etablissement: "Institut National de l'Eau (INE)",
    universite: "UAC",
    series_autorisees: ["C", "D", "EA"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Ingénieur hydraulicien",
        role: "Concepteur et gestionnaire expert des infrastructures de captage, d'acheminement et de stockage des fluides.",
        actions: "Modéliser les réseaux d'adduction d'eau potable, dimensionner les châteaux d'eau, les stations de pompage et les réseaux de collecte d'eaux pluviales, et réaliser des études de pression et de dynamique des fluides.",
        structures: "Société Nationale des Eaux du Bénin (SONEB), cabinets d'études en ingénierie BTP/Hydraulique, et grandes entreprises de construction."
      },
      {
        titre: "Technicien en assainissement",
        role: "Spécialiste de la mise en œuvre et de la maintenance des systèmes de traitement des eaux usées, des boues et des résidus urbains.",
        actions: "Superviser l'exploitation des stations d'épuration, concevoir des installations d'assainissement autonome ou collectif, et veiller à la conformité environnementale des rejets liquides industriels et domestiques.",
        structures: "Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin), mairies (directions des services techniques), et entreprises industrielles (agroalimentaire, textile)."
      },
      {
        titre: "Gestion des réseaux d'eau potable",
        role: "Responsable d'exploitation garant de la continuité du service et de l'intégrité des infrastructures de distribution d'eau.",
        actions: "Planifier la maintenance curative et préventive des canalisations, manager les équipes de recherche de fuites, optimiser le rendement hydraulique des réseaux et superviser les opérations de sectorisation et de télégestion.",
        structures: "SONEB, Agence Nationale d'Approvisionnement en Eau Potable en Milieu Rural (ANAEPMR), et exploitants privés de systèmes d'approvisionnement en eau potable (AEP)."
      },
      {
        titre: "Conseiller technique",
        role: "Expert-conseil stratégique accompagnant les maîtres d'ouvrage et décideurs dans la planification de la politique de l'eau.",
        actions: "Auditer la performance des infrastructures existantes, formuler des recommandations techniques pour les plans de développement communaux, et assister à la rédaction des termes de référence pour les projets sectoriels de grande envergure.",
        structures: "Ministère de l'Eau et des Mines, directions départementales, agences de coopération internationale (GIZ, AFD, USAID), et bureaux de conseil en gestion des services publics."
      }
    ]
  },

  {
    id: "uac-ine-eha",
    nom: "Eau, Hygiène et Assainissement (EHA)",
    etablissement: "Institut National de l'Eau (INE)",
    universite: "UAC",
    series_autorisees: ["C", "D", "EA", "DEAT/AER"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Expert en hygiène publique",
        role: "Spécialiste de la prévention des risques sanitaires liés à l'eau, chargé de garantir la salubrité environnementale communautaire.",
        actions: "Concevoir des protocoles de désinfection, superviser le contrôle qualité des points d'eau collectifs, et déployer des programmes de changement de comportement (méthodologies ATPC - Assainissement Total Piloté par la Communauté) pour éradiquer la défécation en plein air.",
        structures: "Ministère de la Santé, Directions Départementales de la Santé (DDS), services de salubrité des mairies, et agences de contrôle sanitaire."
      },
      {
        titre: "Gestion des stations d'épuration",
        role: "Responsable d'exploitation technique veillant au traitement optimal et écologique des eaux usées urbaines ou industrielles.",
        actions: "Piloter les processus de décantation, de traitement biologique et de filtration, superviser la maintenance des équipements électromécaniques de la station, et contrôler la conformité des eaux épurées avant leur rejet dans la nature.",
        structures: "Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin), Société Nationale des Eaux du Bénin (SONEB), et industries disposant de leur propre unité de traitement."
      },
      {
        titre: "Consultant en accès à l'eau",
        role: "Conseiller stratégique expert dans la planification, la pérennisation et la tarification des services d'eau potable.",
        actions: "Mener des diagnostics techniques et financiers sur les infrastructures existantes, concevoir des modèles de gestion communautaire ou déléguée, et accompagner les communes dans la structuration de leur plan d'approvisionnement en eau.",
        structures: "Cabinets d'études en ingénierie hydraulique, Agence Nationale d'Approvisionnement en Eau Potable en Milieu Rural (ANAEPMR), et partenaires au développement."
      },
      {
        titre: "Responsable EHA en ONG",
        role: "Coordonnateur humanitaire ou de développement pilotant des projets d'accès d'urgence et de long terme à l'eau, à l'hygiène et à l'assainissement.",
        actions: "Superviser la construction de latrines institutionnelles (écoles, centres de santé) et de forages d'eau, distribuer des kits d'hygiène en situation de crise hydro-climatique, et gérer le budget tout en assurant le reporting auprès des bailleurs.",
        structures: "ONG nationales et internationales (UNICEF, Croix-Rouge, CARE, WaterAid, Plan International Bénin)."
      }
    ]
  },

  {
    id: "uac-eneam-admin-reseaux",
    nom: "Administration des Réseaux informatiques",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Technicien en réseaux informatiques",
        role: "Professionnel de terrain chargé du déploiement physique et de la configuration de base des infrastructures réseau.",
        actions: "Poser le câblage structuré, installer et configurer les équipements actifs (switchs, routeurs, points d'accès Wi-Fi), et tester la connectivité ainsi que les performances des liaisons locales.",
        structures: "Entreprises de services du numérique (ESN), fournisseurs d'accès internet (FAI), et directions informatiques des grandes et moyennes entreprises."
      },
      {
        titre: "Administrateur système",
        role: "Gestionnaire expert de l'architecture logicielle, des serveurs et de la sécurité des données de l'organisation.",
        actions: "Gérer les droits d'accès et les comptes utilisateurs (Active Directory/LDAP), piloter l'arborescence des serveurs (Linux/Windows), superviser les politiques de sauvegarde automatique et veiller à la sécurité du système d'information.",
        structures: "Banques et institutions financières, administrations publiques, plateformes de services cloud, et directions des systèmes d'information (DSI)."
      },
      {
        titre: "Technicien en maintenance informatique",
        role: "Spécialiste du support technique opérationnel chargé de garantir la disponibilité et le bon état du parc informatique.",
        actions: "Diagnostiquer et résoudre les pannes matérielles (hardware) et logicielles (software), assurer le déploiement des mises à jour de sécurité, et assister les utilisateurs au quotidien en cas d'incident.",
        structures: "Sociétés de maintenance informatique, services internes d'assistance technique (Helpdesk), et en tant que prestataire indépendant (Freelance)."
      },
      {
        titre: "Développeur d'applications",
        role: "Concepteur et programmeur de solutions logicielles métiers, intégrant une forte sensibilité aux contraintes d'infrastructure et d'automatisation.",
        actions: "Rédiger du code propre et modulaire, concevoir et administrer des bases de données relationnelles, créer des API pour interconnecter les services, et développer des scripts d'automatisation réseau.",
        structures: "Studios de développement web et mobile, start-ups technologiques, agences de marketing digital, et cellules de recherche et développement (R&D)."
      }
    ]
  },

  {
    id: "uac-eneam-analyse-prog",
    nom: "Analyse Informatique et Programmation",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Analyste-programmeur",
        role: "Professionnel chargé de traduire les besoins des utilisateurs en spécifications techniques et de concevoir l'architecture logique des applications.",
        actions: "Modéliser les bases de données (UML, Merise), rédiger les cahiers des charges techniques, écrire le code source des modules principaux et réaliser les tests unitaires d'intégration.",
        structures: "Sociétés de services du numérique (ESN), directions des systèmes d'information (DSI) des banques et assurances, et administrations publiques."
      },
      {
        titre: "Développeur web/mobile",
        role: "Spécialiste de la programmation d'interfaces dynamiques et de plateformes applicatives optimisées pour le web et les smartphones.",
        actions: "Écrire du code propre et modulaire (Frontend & Backend), intégrer des maquettes graphiques en pixel-perfect, connecter des API sécurisées et assurer la compatibilité multi-support.",
        structures: "Start-ups technologiques, agences de communication digitale, studios de développement d'applications, et en tant que Freelance indépendant."
      },
      {
        titre: "Ingénieur logiciel",
        role: "Architecte logiciel chargé de la conception globale, de la sécurité et de la pérennité des grands systèmes d'information.",
        actions: "Définir les patterns d'architecture logicielle, optimiser les performances des algorithmes complexes, mettre en place les pipelines d'intégration et de déploiement continus (CI/CD) et auditer le code existant.",
        structures: "Éditeurs de logiciels, multinationales du secteur technologique, centres de recherche et développement (R&D), et grandes plateformes de commerce électronique."
      },
      {
        titre: "Chef de projet informatique",
        role: "Coordonnateur et manager d'équipe, garant du respect des délais, des coûts et de la qualité lors du cycle de vie du projet.",
        actions: "Planifier les sprints et les tâches (méthodologies agiles comme Scrum), piloter l'allocation des ressources techniques, assurer la communication entre les développeurs et les clients, et gérer les risques opérationnels.",
        structures: "Cabinets de conseil en transformation digitale, grandes DSI sectorielles (télécoms, finances), et entreprises générales d'ingénierie."
      }
    ]
  },

  {
    id: "uac-eneam-assurance",
    nom: "Assurance",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Chargé de clientèle",
        role: "Interlocuteur commercial privilégié chargé de développer, conseiller et fidéliser un portefeuille de clients (particuliers ou professionnels).",
        actions: "Analyser les besoins de couverture des prospects, proposer les contrats d'assurance adaptés (auto, habitation, santé), négocier les conditions tarifaires et assurer le suivi commercial régulier.",
        structures: "Compagnies d'assurances (NSIA, Sunu, Saham, etc.), cabinets de courtage, agences générales d'assurance et institutions bancaires (bancassurance)."
      },
      {
        titre: "Conseiller en négoce",
        role: "Spécialiste de la négociation et de l'intermédiation commerciale pour le placement de risques complexes ou de produits financiers.",
        actions: "Mettre en concurrence les offres des différentes compagnies d'assurances pour le compte d'entreprises clientes, concevoir des solutions sur mesure et négocier les clauses contractuelles spécifiques au bénéfice de l'assuré.",
        structures: "Cabinets de courtage internationaux ou nationaux, départements de gestion des risques des grandes entreprises, et cabinets d'audit-conseil."
      },
      {
        titre: "Gestionnaire de patrimoine",
        role: "Conseiller financier stratégique chargé d'optimiser, de protéger et de transmettre les actifs financiers et immobiliers de ses clients.",
        actions: "Réaliser des bilans patrimoniaux complets, proposer des placements d'épargne à long terme et des produits de prévoyance (assurance-vie), et mettre en place des stratégies d'optimisation fiscale en conformité avec la législation.",
        structures: "Filiales patrimoniales des banques, compagnies d'assurances de personnes, et cabinets indépendants de conseil en gestion de patrimoine."
      },
      {
        titre: "Expert en risques et sinistres",
        role: "Technicien de terrain et analyste juridique chargé d'évaluer les dommages et de déterminer les responsabilités lors d'un incident.",
        actions: "Se déplacer sur les lieux des sinistres (accidents, incendies, inondations), analyser les causes techniques, chiffrer le montant des préjudices matériels et rédiger le rapport d'expertise pour l'indemnisation contractuelle.",
        structures: "Cabinets d'expertise indépendants mandatés par les compagnies, services internes de règlement des sinistres des assureurs, et cellules de gestion des risques."
      }
    ]
  },

  {
    id: "uac-eneam-banque-finance",
    nom: "Banque et Finance de Marché",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Conseiller en marché",
        role: "Spécialiste des produits financiers chargé d'accompagner les entreprises et les investisseurs institutionnels dans leurs stratégies de placement et de couverture.",
        actions: "Analyser les tendances macroéconomiques, proposer des stratégies de couverture contre le risque de change ou de taux, et concevoir des solutions financières adaptées aux profils de risque des clients.",
        structures: "Banques commerciales et d'investissement (EcoBank, BOA, etc.), sociétés de gestion et d'intermédiation (SGI) de la zone UEMOA, et cabinets de conseil financier."
      },
      {
        titre: "Trader junior",
        role: "Opérateur de marché chargé d'exécuter les ordres d'achat et de vente d'actifs financiers pour le compte de sa structure ou de ses clients.",
        actions: "Suivre en temps réel les cours de la Bourse (BRVM au niveau régional), négocier les prix des actifs (actions, obligations, devises), analyser les graphiques techniques et veiller au respect strict des limites de risques imposées.",
        structures: "SGI, salles de marchés des grandes banques, directions de la trésorerie des multinationales, et fonds d'investissement."
      },
      {
        titre: "Gestionnaire de portefeuilles",
        role: "Responsable de l'allocation d'actifs et de l'optimisation des placements financiers pour le compte de tiers (particuliers fortunés ou institutions).",
        actions: "Définir la politique d'investissement, diversifier le portefeuille de titres pour maximiser le rendement sous contrainte de risque, et produire des rapports de performance réguliers pour les mandants.",
        structures: "Sociétés de Gestion d'Actifs (SGO), compagnies d'assurances, caisses de retraite (CNSS) et banques privées."
      },
      {
        titre: "Analyste financier",
        role: "Expert chargé d'évaluer la santé financière, les performances et la valorisation des entreprises ou des projets d'investissement.",
        actions: "Étudier les états financiers (bilans, comptes de résultat), modéliser les prévisions de flux de trésorerie (DCF), valoriser les titres cotés et rédiger des notes de recommandation (achat/vente) pour les décideurs.",
        structures: "Bureaux de recherche financière, départements de Corporate Banking, cabinets d'audit et de conseil (Big Four), et agences de notation régionales."
      }
    ]
  },

  {
    id: "uac-eneam-banque-microfinances",
    nom: "Banque et Institutions des Microfinances",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Conseiller en microfinance",
        role: "Interlocuteur de premier plan chargé d'accompagner les micro-entrepreneurs et les populations à faible revenu dans l'accès aux services financiers.",
        actions: "Orienter les prospects vers les solutions d'épargne adaptées, animer des sessions d'éducation financière et suivre l'évolution des projets financés pour garantir leur réussite.",
        structures: "Systèmes Financiers Décentralisés (SFD), ONG d'appui au développement économique, et coopératives d'épargne et de crédit (COOPEC)."
      },
      {
        titre: "Gestionnaire de caisse",
        role: "Responsable opérationnel des flux de trésorerie au guichet, garant de la fiabilité des opérations quotidiennes.",
        actions: "Traiter les dépôts, les retraits et les remboursements de crédits, assurer l'arrêté de caisse journalier en fin de journée et veiller au strict respect des règles de sécurité des fonds.",
        structures: "Institutions de microfinance (ALIDé, PADME, PEBCo, etc.), agences bancaires de proximité, et réseaux d'épargne communautaires."
      },
      {
        titre: "Chargé de crédit",
        role: "Analyste et gestionnaire du risque de crédit, responsable de l'évaluation et du recouvrement des prêts accordés.",
        actions: "Mener des enquêtes de terrain pour vérifier la viabilité des activités des demandeurs, analyser les dossiers de prêt, présenter les conclusions au comité de crédit et piloter le recouvrement des impayés.",
        structures: "Grandes institutions de microfinance, banques à vocation inclusive, et programmes publics de financement de l'entrepreneuriat des jeunes et des femmes."
      },
      {
        titre: "Responsable de succursale",
        role: "Manager d'unité opérationnelle chargé de piloter la performance commerciale et administrative d'une agence locale.",
        actions: "Coordonner les équipes de caisse et de terrain, veiller à l'atteinte des objectifs de collecte d'épargne et de distribution de crédit, et garantir la rentabilité ainsi que la conformité réglementaire de l'agence (normes BCEAO).",
        structures: "Réseaux nationaux de microfinance (FECECAM, etc.), agences régionales de SFD, et banques de micro-crédit."
      }
    ]
  },

  {
    id: "uac-eneam-marketing",
    nom: "Marketing",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["eco", "francais", "maths", "anglais"],
    debouches: [
      {
        titre: "Responsable commercial",
        role: "Stratège de terrain et manager d'équipe chargé d'accroître le chiffre d'affaires et de piloter la force de vente.",
        actions: "Définir les objectifs de vente, négocier les contrats commerciaux d'envergure, encadrer et motiver l'équipe de commerciaux, et analyser les indicateurs de performance commerciale.",
        structures: "Entreprises industrielles, multinationales de la place (télécoms, FMCG), agences de distribution et sociétés de services."
      },
      {
        titre: "Chef de produit",
        role: "Gérant du cycle de vie d'un produit ou d'une gamme de produits, de sa conception à sa commercialisation sur le marché.",
        actions: "Coordonner le développement du produit avec les équipes techniques, élaborer la stratégie de positionnement et de prix, concevoir les campagnes de lancement et suivre les parts de marché.",
        structures: "Grandes entreprises de distribution, industries agroalimentaires, laboratoires pharmaceutiques et start-ups technologiques."
      },
      {
        titre: "Chargé d'études marketing",
        role: "Analyste de données chargé de décrypter les tendances du marché et les comportements des consommateurs pour guider les décisions.",
        actions: "Concevoir des questionnaires, piloter des enquêtes de terrain ou des focus groups, analyser les données statistiques collectées et rédiger des recommandations stratégiques pour la direction.",
        structures: "Instituts de sondage et cabinets d'études de marché, départements marketing des grandes structures et agences de conseil."
      },
      {
        titre: "Community Manager",
        role: "Ambassadeur digital chargé de développer, d'animer et de fédérer les communautés en ligne autour de la marque.",
        actions: "Créer et planifier des contenus interactifs (textes, visuels, vidéos), interagir avec les abonnés sur les réseaux sociaux, modérer les commentaires et assurer une veille sur l'e-réputation de l'entreprise.",
        structures: "Agences de communication digitale, start-ups, PME modernes, institutions publiques et en tant que Freelance."
      },
      {
        titre: "Digital Marketing Manager",
        role: "Architecte de la stratégie globale de l'entreprise sur le web, visant à optimiser la visibilité, l'acquisition et la conversion de leads.",
        actions: "Piloter les campagnes publicitaires payantes (Facebook Ads, Google Ads), optimiser le référencement (SEO/SEA), gérer le budget marketing digital et analyser le retour sur investissement (ROI) des tunnels de vente.",
        structures: "Plateformes de commerce électronique, agences de marketing digital, grandes entreprises en transformation numérique et multinationales."
      }
    ]
  },

  {
    id: "uac-eneam-grh",
    nom: "Gestion des Ressources Humaines",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["eco", "francais", "anglais"],
    debouches: [
      {
        titre: "Gestion du personnel",
        role: "Administrateur rigoureux garant du suivi contractuel, légal et financier des collaborateurs au sein de l'organisation.",
        actions: "Superviser la préparation et l'édition de la paie, gérer les déclarations sociales (CNSS, impôts), suivre les dossiers administratifs (congés, absences, contrats) et veiller à la conformité avec le Code du travail béninois.",
        structures: "Directions administratives des moyennes et grandes entreprises, services de paie externalisés et administrations publiques."
      },
      {
        titre: "Responsable RH entreprises privées et publiques",
        role: "Partenaire stratégique de la direction, chargé de concilier les objectifs de performance de la structure et le bien-être des collaborateurs.",
        actions: "Déployer la politique RH, piloter la gestion prévisionnelle des emplois et des compétences (GPEC), gérer les relations avec les délégués du personnel (syndicats) et concevoir les plans de formation continue.",
        structures: "Grandes entreprises privées, ministères, offices d'État, banques, hôpitaux et organisations internationales."
      },
      {
        titre: "Chargé de recrutement",
        role: "Spécialiste de l'acquisition de talents, chargé d'identifier, d'évaluer et d'intégrer les profils les plus adaptés aux besoins de la structure.",
        actions: "Rédiger et diffuser les offres d'emploi, sourcer les candidats sur les plateformes professionnelles, mener les entretiens de sélection et piloter le processus de 'onboarding' (intégration) des nouvelles recrues.",
        structures: "Cabinets de recrutement et de placement, agences d'intérim, et départements RH des entreprises en forte croissance."
      },
      {
        titre: "Consultant en organisation",
        role: "Expert externe ou interne chargé d'auditer les structures, d'optimiser les processus RH et d'accompagner la conduite du changement.",
        actions: "Réaliser des audits organisationnels, fluidifier la répartition des tâches en rédigeant des fiches de poste claires, optimiser les organigrammes et conseiller les directions dans la restructuration ou la gestion de crises internes.",
        structures: "Cabinets de conseil en management et stratégie, grandes entreprises de conseil, et institutions d'appui institutionnel."
      }
    ]
  },

  {
    id: "uac-eneam-gestion-transports",
    nom: "Gestion des Transports",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Agent en entreprises maritimes",
        role: "Opérateur clé chargé de coordonner les escales des navires et de gérer les formalités administratives et douanières liées aux marchandises.",
        actions: "Superviser les opérations d'import/export, assurer la liaison entre l'armateur, le port et les autorités douanières, et gérer la documentation maritime (Connaissement / Bill of Lading).",
        structures: "Port Autonome de Cotonou, compagnies maritimes (CMA CGM, Maersk), agences de consignation, et cabinets de commissionnaires agréés en douane."
      },
      {
        titre: "Logisticien",
        role: "Gestionnaire des flux physiques et d'informations assurant la circulation optimale des marchandises depuis le fournisseur jusqu'au client.",
        actions: "Organiser les tournées de livraison, optimiser l'utilisation de la flotte de véhicules, négocier les tarifs avec les transporteurs, et veiller au respect des délais de livraison.",
        structures: "Entreprises de transport routier, plateformes de distribution, industries manufacturières, et grandes entreprises commerciales."
      },
      {
        titre: "Chargé d'exploitation transport",
        role: "Responsable technique et opérationnel de la planification et de la rentabilité des opérations de transport au quotidien.",
        actions: "Planifier l'affectation des chauffeurs et du matériel, contrôler le respect de la réglementation sociale et de sécurité, suivre les indicateurs de coûts (consommation, maintenance) et gérer les aléas de livraison.",
        structures: "Sociétés de transport de marchandises ou de voyageurs, entreprises de logistique intégrée, et régies publiques de transport."
      },
      {
        titre: "Agent de fret aérien",
        role: "Technicien d'aéroport spécialisé dans le traitement et la logistique des marchandises acheminées par voie aérienne.",
        actions: "Calculer les tarifs de fret selon les normes IATA, réserver les espaces en soute auprès des compagnies aériennes, éditer les Lettres de Voiture Aérienne (LTA) et superviser le passage en douane des colis express.",
        structures: "Compagnies aériennes (Cargo), commissionnaires de transport international (DHL, Bolloré Logistics), et zones de fret aéroportuaires."
      }
    ]
  },

  {
    id: "uac-eneam-logistique",
    nom: "Gestion de Logistique",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Responsable supply chain",
        role: "Pilote stratégique coordonnant l'ensemble de la chaîne d'approvisionnement, de la matière première au consommateur final.",
        actions: "Synchroniser les flux entre la production, les achats et la distribution, optimiser les coûts globaux de la chaîne, et mettre en œuvre des systèmes d'information logistique (ERP).",
        structures: "Grandes industries agroalimentaires, multinationales de distribution, cimenteries, et cabinets de conseil en logistique."
      },
      {
        titre: "Gestionnaire de stocks",
        role: "Garant de l'équilibre financier et matériel des marchandises entreposées pour éviter la rupture ou le surstockage.",
        actions: "Superviser les inventaires physiques, définir les seuils d'alerte et de sécurité, commander les réapprovisionnements, et manager l'aménagement de l'espace de stockage (magasinage).",
        structures: "Centrales d'achat, distributeurs pharmaceutiques, entrepôts douaniers, et grands supermarchés."
      },
      {
        titre: "Planificateur logistique",
        role: "Organisateur de l'ordonnancement des flux chargé d'aligner les capacités logistiques sur les prévisions de ventes.",
        actions: "Établir les plannings de réception et d'expédition, coordonner les besoins d'approvisionnement avec le service achats, et suivre l'avancement des flux en temps réel.",
        structures: "Usines de production, plateformes d'e-commerce, et entreprises importatrices de biens d'équipement."
      },
      {
        titre: "Auditeur transport",
        role: "Expert analyste chargé d'évaluer la performance, la conformité réglementaire et la rentabilité des flux de transport d'une entreprise.",
        actions: "Analyser les contrats de transport, détecter les gisements d'économies financiers, vérifier le respect des normes QHSE, et recommander des schémas de transport multimodaux plus efficients.",
        structures: "Cabinets d'audit et de conseil (Big Four), et directions de contrôle de gestion des grands groupes industriels."
      }
    ]
  },

  {
    id: "uac-eneam-planification-projets",
    nom: "Planification et Gestion des Projets",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Planificateur",
        role: "Spécialiste de la structuration temporelle et financière des étapes clés d'un programme d'envergure.",
        actions: "Concevoir les diagrammes de Gantt et réseaux PERT, allouer les ressources humaines et matérielles par phase, et élaborer les budgets prévisionnels consolidés.",
        structures: "Ministère du Plan et du Développement, directions de la planification des communes (mairies), et grands bureaux d'études."
      },
      {
        titre: "Gestionnaire de projets",
        role: "Manager opérationnel responsable de la mise en œuvre d'un projet, du cadrage initial jusqu'à la clôture finale.",
        actions: "Coordonner les équipes pluridisciplinaires, assurer le respect du triptyque Coût-Délai-Qualité, gérer les risques, et animer les comités de pilotage avec les parties prenantes.",
        structures: "Agences de développement (MCT, Sèmè City), start-ups, organisations internationales, et banques de développement."
      },
      {
        titre: "Consultant en suivi-évaluation",
        role: "Expert en mesure d'impact chargé de concevoir les mécanismes de contrôle et d'analyser les résultats des interventions.",
        actions: "Définir les indicateurs de performance (KPI), collecter et analyser les données sur le terrain, réaliser des audits d'impact, et rédiger des rapports d'évaluation pour les bailleurs de fonds.",
        structures: "Cabinets de conseil nationaux et internationaux, ONG internationales, et agences de coopération (GIZ, AFD, USAID)."
      },
      {
        titre: "Coordinateur de programmes",
        role: "Superviseur stratégique chargé de piloter un portefeuille de plusieurs projets convergents vers un même objectif global.",
        actions: "Garantir la cohérence des actions menées, arbitrer l'allocation des ressources entre les projets, et assurer le plaidoyer institutionnel ainsi que les relations avec les partenaires financiers.",
        structures: "Fondations, grands programmes de développement public (ex: MCA-Bénin), et fédérations d'ONG."
      }
    ]
  },

  {
    id: "uac-eneam-planification-durable",
    nom: "Planification et Économie du Développement Durable",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Expert en développement durable",
        role: "Spécialiste de la transition écologique chargé d'intégrer les piliers environnementaux, sociaux et économiques dans les projets.",
        actions: "Concevoir des diagnostics de durabilité, modéliser des scénarios de transition écologique et piloter des stratégies d'atténuation de l'empreinte carbone pour le compte de structures publiques ou privées.",
        structures: "Ministère du Cadre de Vie et des Transports, mairies (cellules environnementales), agences de coopération internationale, et grands cabinets d'études."
      },
      {
        titre: "Économiste de projets verts",
        role: "Analyste financier spécialisé dans l'évaluation de la rentabilité et de l'impact socio-économique des investissements éco-responsables.",
        actions: "Réaliser des analyses coûts-bénéfices environnementales, monter des dossiers de financement pour le Fonds Vert pour le Climat, et évaluer la viabilité économique des infrastructures d'énergies renouvelables.",
        structures: "Banques de développement (BOAD, BAD), fonds d'investissement à impact, bureaux d'études en économie circulaire, et ONG internationales."
      },
      {
        titre: "Chargé de mission RSE",
        role: "Pilote opérationnel de la Responsabilité Sociétale des Entreprises, garant de l'éthique environnementale et sociale de l'organisation.",
        actions: "Élaborer la charte RSE de l'entreprise, mesurer et réduire l'empreinte carbone des activités de production, animer des projets d'insertion communautaire, et rédiger le rapport annuel de performance extra-financière.",
        structures: "Multinationales (téléphonie mobile, cimenteries, agroalimentaire), grandes entreprises industrielles de la place, et filiales de groupes internationaux."
      },
      {
        titre: "Conseiller en politiques publiques",
        role: "Analyste stratégique apportant son appui technique aux décideurs institutionnels pour la mise en œuvre des Objectifs de Développement Durable (ODD).",
        actions: "Auditer les politiques publiques existantes, rédiger des notes d'orientation pour l'intégration de la durabilité dans les budgets sectoriels, et coordonner les revues nationales des ODD.",
        structures: "Ministère du Plan et du Développement, institutions spécialisées des Nations Unies (PNUD, PNUE), et centres de recherche en politiques publiques."
      }
    ]
  },

  {
    id: "uac-eneam-dev-local",
    nom: "Développement Local et Régional",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Expert en développement territorial",
        role: "Architecte de la décentralisation, spécialisé dans la dynamisation économique et la valorisation des territoires décentralisés.",
        actions: "Mener des diagnostics territoriaux participatifs, identifier les filières économiques locales porteuses, et accompagner les collectivités dans la structuration de partenariats public-privé (PPP) locaux.",
        structures: "Directions Départementales du Développement, cabinets d'expertise en décentralisation, agences d'aménagement du territoire, et programmes d'appui aux communes."
      },
      {
        titre: "Chargé de projets locaux",
        role: "Gestionnaire opérationnel de programmes d'infrastructures socio-communautaires au plus près des besoins des populations.",
        actions: "Planifier et superviser la mise en œuvre des projets du Plan de Développement Communal (PDC), encadrer les équipes de terrain, gérer le budget des opérations, et animer les comités de gestion communautaires.",
        structures: "Mairies (Directions des Services Techniques et du Développement Local), ONG de développement communautaire, et associations intercommunales."
      },
      {
        titre: "Conseiller en aménagement régional",
        role: "Stratège de l'espace chargé de réduire les disparités et d'optimiser l'implantation des grandes infrastructures intercommunales.",
        actions: "Participer à l'élaboration des Schémas Directeurs d'Aménagement du Territoire, analyser les flux de populations et d'activités économiques, et proposer des plans d'aménagement concertés entre plusieurs régions.",
        structures: "Ministère de la Décentralisation et de la Gouvernance Locale, préfectures, et grands bureaux d'études en urbanisme et aménagement."
      },
      {
        titre: "Gestionnaire de fonds publics",
        role: "Administrateur financier veillant à la mobilisation, à l'allocation transparente et au contrôle des ressources financières décentralisées.",
        actions: "Suivre l'exécution budgétaire des fonds d'appui (ex: FADeC), optimiser les recettes fiscales propres de la collectivité, et s'assurer de la conformité des dépenses locales avec le code des marchés publics.",
        structures: "Recettes et trésoreries municipales, directions financières des collectivités locales, et banques partenaires des collectivités."
      }
    ]
  },

  {
    id: "uac-eneam-gestion-financiere",
    nom: "Gestion Financière et Comptable",
    etablissement: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
    universite: "UAC",
    series_autorisees: ["C", "D", "G2"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Comptable",
        role: "Garant de la transparence, de la régularité et de la fiabilité des informations financières de l'organisation.",
        actions: "Saisir les pièces comptables, réaliser les déclarations fiscales et sociales, effectuer les rapprochements bancaires, et participer à l'établissement des états financiers de synthèse (SYSCOHADA).",
        structures: "Cabinets d'expertise comptable, PME/PMI, grandes entreprises de tous secteurs, et administrations publiques."
      },
      {
        titre: "Responsable financier",
        role: "Gestionnaire stratégique chargé de piloter la politique de trésorerie, de financement et d'investissement de l'entreprise.",
        actions: "Élaborer les budgets prévisionnels, négocier les lignes de crédit auprès des banques, optimiser le besoin en fonds de roulement (BFR), et produire des tableaux de bord financiers pour la direction générale.",
        structures: "Moyennes et grandes entreprises privées, banques, filiales commerciales, et directions financières d'entreprises publiques."
      },
      {
        titre: "Auditeur financier",
        role: "Expert certificateur indépendant ou en cabinet, chargé de vérifier la sincérité et la conformité des comptes d'une entité.",
        actions: "Analyser les procédures comptables, contrôler les inventaires de clôture, évaluer les risques financiers d'erreurs ou de fraudes, et rédiger des rapports d'opinion légale sur la santé financière.",
        structures: "Cabinets d'audit nationaux et internationaux (Big Four), et commissariats aux comptes."
      },
      {
        titre: "Auditeur interne",
        role: "Conseiller permanent rattaché à la direction, dédié à l'évaluation et à la maîtrise des risques opérationnels et financiers de sa structure.",
        actions: "Auditer l'application des procédures internes dans les différents services, détecter les failles organisationnelles, et proposer des recommandations opérationnelles pour sécuriser le patrimoine de la structure.",
        structures: "Sièges des banques et assurances, grandes entreprises de télécommunications, multinationales, et inspections des ministères."
      },
      {
        titre: "Contrôleur de gestion",
        role: "Copilote de la performance de l'entreprise, chargé d'analyser les écarts entre les objectifs stratégiques et les résultats réels.",
        actions: "Mettre en place la comptabilité analytique, calculer les coûts de revient, concevoir les indicateurs de performance clés (KPI) et analyser les budgets pour proposer des mesures correctives d'optimisation.",
        structures: "Unités de production industrielles, grandes entreprises commerciales, chaînes de distribution, et sociétés de services."
      }
    ]
  },

  {
    id: "uac-epa-gestion-patrimoine",
    nom: "Gestion du patrimoine culturel",
    etablissement: "École du Patrimoine Africain (EPA)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["hg", "francais", "anglais"],
    debouches: [
      {
        titre: "Gestionnaire de musées",
        role: "Administrateur et conservateur chargé de la préservation, de la mise en valeur et de la direction d'espaces muséaux.",
        actions: "Superviser la conservation préventive des collections, concevoir des expositions temporaires et permanentes, manager les équipes de médiation et sécuriser les œuvres d'art et objets historiques.",
        structures: "Musées nationaux et privés (ex: Musées d'Abomey, Ouidah), centres culturels, et fondations d'art."
      },
      {
        titre: "Patrimoniteur",
        role: "Médiateur et guide expert spécialisé dans la transmission, la vulgarisation et l'animation autour des sites patrimoniaux.",
        actions: "Concevoir des parcours de visite immersifs, développer des outils pédagogiques pour les scolaires, et animer des ateliers de sensibilisation à la sauvegarde des patrimoines matériels et immatériels.",
        structures: "Sites touristiques et historiques, parcs naturels protégés, mairies (services de promotion du tourisme), et associations culturelles."
      },
      {
        titre: "Communicateur culturel",
        role: "Spécialiste des relations publiques et des médias chargé de promouvoir les événements, artistes et institutions culturelles.",
        actions: "Élaborer des stratégies de communication, rédiger des dossiers de presse, gérer la visibilité numérique de l'institution, et piloter les relations avec les mécènes et partenaires financiers.",
        structures: "Agences de promotion culturelle, festivals de musique et de théâtre, ministères en charge de la Culture, et industries créatives."
      },
      {
        titre: "Expert en droit du patrimoine",
        role: "Conseiller juridique garant de la protection des biens culturels contre le trafic illicite, la dégradation ou la spoliation.",
        actions: "Rédiger des inventaires réglementaires, veiller à l'application des conventions internationales (UNESCO), instruire les dossiers de classement de monuments historiques, et encadrer le retour ou la restitution de biens culturels.",
        structures: "Ministère du Tourisme, de la Culture et des Arts, organisations internationales (UNESCO, EPA), et directions des affaires juridiques publiques."
      }
    ]
  },

  {
    id: "uac-fashs-geographie",
    nom: "Géographie et Aménagement du Territoire",
    etablissement: "Faculté des Sciences Humaines et Sociales (FASHS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DEAT"],
    matieres_clefs: ["anglais", "maths", "hg"],
    debouches: [
      {
        titre: "Enseignant",
        role: "Pédagogue chargé de transmettre les connaissances en histoire, géographie et éducation civique aux élèves du secondaire.",
        actions: "Concevoir des fiches pédagogiques conformes aux programmes d'études, animer les cours, évaluer les compétences des apprenants et participer aux conseils d'enseignement.",
        structures: "Collèges et lycées publics ou privés d'enseignement secondaire général."
      },
      {
        titre: "Laboratoires et institutions de recherche",
        role: "Chercheur ou assistant de recherche spécialisé dans l'analyse des dynamiques spatiales, environnementales et démographiques.",
        actions: "Collecter des données socio-économiques et environnementales sur le terrain, réaliser des cartographies thématiques, et participer à la rédaction d'articles scientifiques ou de diagnostics territoriaux.",
        structures: "Centres de recherche universitaire (notamment à l'UAC), instituts nationaux de recherche agronomique, et observatoires du climat."
      },
      {
        titre: "Responsable d'assainissement",
        role: "Gestionnaire environnemental chargé de coordonner les actions de salubrité publique et de gestion des déchets à l'échelle d'une collectivité.",
        actions: "Planifier les circuits de collecte des ordures, superviser l'entretien des réseaux de drainage des eaux pluviales, et veiller au respect des normes d'hygiène environnementale.",
        structures: "Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin), directions techniques des mairies, et ONG environnementales."
      },
      {
        titre: "Urbaniste",
        role: "Aménagiste du territoire chargé de planifier et d'harmoniser le développement des espaces urbains et ruraux.",
        actions: "Élaborer des plans de lotissement et de viabilisation, participer à la rédaction des Schémas Directeurs d'Aménagement Communal (SDAC), et piloter l'intégration des services de base dans les nouveaux quartiers.",
        structures: "Bureaux d'études en urbanisme, cabinets d'architecture, et directions de l'aménagement au sein des mairies ou ministères."
      },
      {
        titre: "Cartographe",
        role: "Spécialiste de la représentation graphique des données spatiales à l'aide des outils numériques modernes.",
        actions: "Traiter les bases de données géographiques, concevoir des cartes dynamiques et interactives sur SIG (QGIS, ArcGIS), et modéliser des évolutions territoriales (déforestation, étalement urbain).",
        structures: "Institut Géographique National (IGN), cabinets de géomètres-experts, directions techniques des ministères, et agences de gestion des risques."
      }
    ]
  },

  {
    id: "uac-fashs-psychologie",
    nom: "Psychologie",
    etablissement: "Faculté des Sciences Humaines et Sociales (FASHS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "D"],
    matieres_clefs: ["maths", "svt", "francais"],
    debouches: [
      {
        titre: "Formation des enseignants",
        role: "Formateur spécialisé en psychologie de l'enfant et de l'adolescent, au profit du personnel d'encadrement pédagogique.",
        actions: "Animer des modules sur la psychopédagogie, initier les futurs enseignants aux dynamiques de gestion de classe, et concevoir des stratégies d'apprentissage adaptées au développement cognitif.",
        structures: "Écoles Normales Supérieures (ENS), écoles de formation des instituteurs (ENI), et structures d'appui conseil à l'enseignement."
      },
      {
        titre: "Centres d'accueil pour personnes handicapées",
        role: "Psychologue praticien dédié à l'accompagnement moral, à la réhabilitation psychologique et à l'inclusion sociale.",
        actions: "Réaliser des bilans psychologiques, animer des séances d'écoute individuelles ou collectives, et concevoir des projets individualisés d'autonomisation pour les personnes en situation de handicap.",
        structures: "Centres médico-sociaux, ONG spécialisées dans le domaine du handicap, fondations à caractère social, et centres de rééducation."
      },
      {
        titre: "Centres d'accueil et de formation en psychiatrie",
        role: "Psychologue clinicien collaborant avec le corps médical pour la prise en charge thérapeutique des troubles mentaux légers à sévères.",
        actions: "Mener des entretiens cliniques à visée diagnostique, animer des psychothérapies de soutien, et participer à la réinsertion socio-professionnelle des patients stabilisés.",
        structures: "Services de psychiatrie des hôpitaux (CNHU, CHD), centres de traitement des addictions, et cliniques neuropsychiatriques privées."
      },
      {
        titre: "Conseiller psychologique",
        role: "Professionnel de la relation d'aide guidant les personnes face aux difficultés personnelles, scolaires ou professionnelles.",
        actions: "Offrir un espace de parole confidentiel, accompagner la gestion du stress et du burn-out, réaliser des conseils d'orientation scolaire et universitaire, et intervenir lors de cellules d'écoute post-traumatique.",
        structures: "Établissements scolaires et universitaires (services d'orientation), cabinets privés, cellules RH des grandes entreprises, et ONG d'aide humanitaire."
      }
    ]
  },

  {
    id: "uac-fashs-sciences-education",
    nom: "Sciences de l'Éducation et de la Formation",
    etablissement: "Faculté des Sciences Humaines et Sociales (FASHS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "C", "D"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Formation des enseignants",
        role: "Expert en sciences de l'éducation chargé de concevoir et d'animer les programmes de formation initiale et continue des enseignants.",
        actions: "Élaborer des curriculums de formation, évaluer les pratiques d'enseignement, et encadrer les recherches en didactique des disciplines.",
        structures: "Instituts nationaux de formation (ENS, ENI), ministères de l'Éducation (MESP, MEMP), et inspections pédagogiques."
      },
      {
        titre: "Ingénieur pédagogique",
        role: "Architecte de solutions de formation globales, alliant méthodologies d'apprentissage et innovations technologiques.",
        actions: "Concevoir des parcours de formation sur-mesure (présentiels ou e-learning), scénariser des contenus multimédias, et piloter l'intégration des plateformes LMS au sein des institutions.",
        structures: "Universités, start-ups EdTech, cabinets de conseil en formation, et départements de formation des grandes entreprises."
      },
      {
        titre: "Conseiller en orientation",
        role: "Accompagnateur stratégique aidant les élèves et étudiants à structurer leur projet scolaire et professionnel.",
        actions: "Animer des séances d'information sur les filières et métiers, faire passer des tests d'intérêts professionnels, et guider les apprenants dans leurs choix de formation post-bac.",
        structures: "Centres nationaux d'orientation scolaire et universitaire, collèges et lycées, et cabinets privés de coaching d'orientation."
      },
      {
        titre: "Formateur d'adultes",
        role: "Spécialiste de l'andragogie dédié au développement des compétences continues des professionnels et des communautés.",
        actions: "Analyser les besoins de renforcement des capacités, concevoir des modules de formation pour adultes, et animer des ateliers interactifs axés sur la pratique professionnelle.",
        structures: "Organismes de formation continue, cabinets d'audit-conseil, ONG de développement communautaire, et agences de coopération."
      }
    ]
  },

  {
    id: "uac-fashs-philosophie",
    nom: "Philosophie",
    etablissement: "Faculté des Sciences Humaines et Sociales (FASHS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Enseignant dans les collèges et lycées",
        role: "Pédagogue et éveilleur de conscience chargé d'initier les élèves des classes de Terminale à la réflexion critique, logique et métaphysique.",
        actions: "Concevoir les leçons selon les repères curriculaires, animer les débats philosophiques en classe, encadrer la méthodologie de la dissertation et du commentaire de texte, et évaluer les copies.",
        structures: "Collèges et lycées publics ou privés d'enseignement secondaire général."
      },
      {
        titre: "Recherche en sciences humaines",
        role: "Chercheur académique ou universitaire dédié à l'analyse des grands courants de pensée, de l'épistémologie et des mutations sociétales contemporaines.",
        actions: "Produire des articles scientifiques, participer à des colloques de recherche, analyser l'impact des technologies et des idéologies sur la condition humaine, et encadrer des travaux universitaires.",
        structures: "Laboratoires de recherche universitaires, instituts d'études avancées, et centres de documentation en sciences humaines."
      },
      {
        titre: "Conseiller éthique",
        role: "Expert en déontologie apportant un éclairage analytique et normatif sur les dilemmes moraux posés par l'évolution scientifique et sociétale.",
        actions: "Évaluer la conformité morale des projets de recherche (notamment en bioéthique), siéger dans des comités consultatifs, et rédiger des chartes de valeurs ou des codes de conduite professionnels.",
        structures: "Comités nationaux d'éthique, centres de recherche médicale (laboratoires, hôpitaux), institutions publiques, et comités d'éthique des entreprises."
      },
      {
        titre: "Rédacteur en chef",
        role: "Responsable éditorial garant de la ligne directrice, de la qualité littéraire et de la rigueur intellectuelle des publications d'un média.",
        actions: "Définir les sujets à traiter, coordonner le travail des journalistes et rédacteurs, valider et corriger les articles, et rédiger les éditoriaux axés sur l'analyse de fond de l'actualité.",
        structures: "Maisons d'édition, revues culturelles et scientifiques, agences de presse, et médias écrits ou en ligne."
      }
    ]
  },

  {
    id: "uac-fashs-socio-anthropologie-2",
    nom: "Socio-Anthropologie",
    etablissement: "Faculté des Sciences Humaines et Sociales (FASHS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["francais", "philo", "hg"],
    debouches: [
      {
        titre: "Agent dans les centres sociaux",
        role: "Professionnel du développement social chargé de concevoir et de piloter des actions d'accompagnement et d'insertion au profit des populations vulnérables.",
        actions: "Réaliser des enquêtes socio-économiques de terrain, identifier les besoins communautaires, animer des programmes de sensibilisation (santé, éducation, égalité), et orienter les usagers vers les services compétents.",
        structures: "Centres de Promotion Sociale (CPS) du Ministère des Affaires Sociales, mairies (services des affaires sociales), et centres d'accueil communautaires."
      },
      {
        titre: "Ministères",
        role: "Analyste et chargé d'études sectorielles apportant une expertise humaine et sociétale dans la formulation des réformes de l'État.",
        actions: "Participer à l'élaboration des politiques de développement social, mener des enquêtes qualitatives sur l'impact des programmes publics, et rédiger des notes de synthèse sur les dynamiques culturelles et comportementales.",
        structures: "Ministère du Plan et du Développement, Ministère de la Décentralisation, Ministère de la Santé, et diverses directions nationales."
      },
      {
        titre: "Recherche académique",
        role: "Scientifique spécialiste de l'étude des faits sociaux, des structures de parenté, des rituels et de l'évolution des comportements collectifs.",
        actions: "Concevoir des protocoles d'enquêtes ethnographiques, mener des observations participantes sur de longues périodes, analyser les données qualitatives et publier des ouvrages ou des articles de référence.",
        structures: "Laboratoires de recherche en sciences humaines (notamment à l'UAC), instituts nationaux de recherche, et observatoires sociaux."
      },
      {
        titre: "Consultant en études sociales",
        role: "Expert indépendant ou en cabinet réalisant des diagnostics et des évaluations d'impact social pour des projets de grande envergure.",
        actions: "Élaborer des plans de gestion de l'impact environnemental et social (PGIES), mener des consultations publiques auprès des populations locales avant implantation de projets, et auditer le respect des critères humains.",
        structures: "Cabinets d'études et de conseil en développement, bureaux d'ingénierie et d'aménagement, et institutions financières de développement."
      },
      {
        titre: "ONG",
        role: "Coordonnateur de projets humanitaires ou de développement, spécialisé dans l'adaptation locale des interventions aux réalités culturelles.",
        actions: "Planifier et mettre en œuvre des projets communautaires, mobiliser et impliquer les leaders locaux et religieux, assurer le suivi participatif des actions, et évaluer le changement social induit.",
        structures: "ONG nationales et internationales (CARE, Plan International Bénin, CRS, Oxfam, etc.), et agences de développement."
      }
    ]
  },

  {
    id: "uac-fashs-histoire-archeologie",
    nom: "Histoire et Archéologie",
    etablissement: "Faculté des Sciences Humaines et Sociales (FASHS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "hg", "anglais"],
    debouches: [
      {
        titre: "Conservateur de musée",
        role: "Scientifique et gestionnaire responsable de l'inventaire, de la conservation, de l'étude et de l'exposition des collections muséales.",
        actions: "Indexer et documenter les objets archéologiques et historiques, coordonner la restauration des pièces dégradées, concevoir le parcours scénographique des expositions, et valoriser les collections auprès du grand public.",
        structures: "Musées d'État (ex: Palais Royaux d'Abomey, Musée international du Vodun), fondations d'art privées, et centres culturels."
      },
      {
        titre: "Recherche documentaire",
        role: "Spécialiste de la quête et du traitement critique des sources d'archives, des manuscrits et de la mémoire écrite ou orale.",
        actions: "Collecter et classer les documents historiques, numériser les archives fragiles, réaliser des arbres généalogiques ou des monographies historiques, et assister les historiens ou scénaristes dans leurs investigations.",
        structures: "Direction des Archives Nationales du Bénin, bibliothèques spécialisées, centres de documentation des ministères, et maisons d'édition."
      },
      {
        titre: "Gestionnaire du patrimoine culturel",
        role: "Professionnel chargé de la protection légale, de la réhabilitation et de l'exploitation touristique des monuments et sites historiques.",
        actions: "Instruire les dossiers d'inscription des sites au patrimoine mondial de l'UNESCO, planifier des projets de mise en valeur territoriale par la culture, et concevoir des circuits touristiques mémoriels.",
        structures: "Agence Nationale des Patrimoines Touristiques (ANPT), mairies, ministères de la Culture et du Tourisme, et agences de valorisation patrimoniale."
      },
      {
        titre: "Archéologue",
        role: "Chercheur de terrain spécialisé dans la découverte, l'excavation et l'analyse des vestiges matériels des sociétés anciennes.",
        actions: "Diriger des chantiers de fouilles archéologiques, réaliser des prospections pédestres et géophysiques, dater et analyser en laboratoire les fragments découverts (poteries, ossements, outils), et mener des fouilles préventives.",
        structures: "Laboratoires de recherche universitaires, instituts nationaux du patrimoine, ministères en charge de la recherche, et cabinets d'archéologie préventive."
      },
      {
        titre: "Enseignant",
        role: "Transmetteur de savoir chargé de dispenser les cours d'Histoire, de Géographie et de Citoyenneté aux élèves du secondaire.",
        actions: "Élaborer les fiches de cours, animer les séances d'apprentissage, évaluer le niveau d'acquisition des connaissances historiques et civiques des élèves, et encadrer les activités culturelles scolaires.",
        structures: "Collèges et lycées d'enseignement secondaire général (publics et privés)."
      }
    ]
  },

  {
    id: "uac-fashs-psychologie-travail",
    nom: "Psychologie du travail et des Organisations",
    etablissement: "Faculté des Sciences Humaines et Sociales (FASHS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["maths", "svt", "anglais"],
    debouches: [
      {
        titre: "Psychologue du travail",
        role: "Spécialiste de la relation homme-travail, veillant à la santé psychologique des employés et à l'équilibre humain au sein de l'entreprise.",
        actions: "Mener des entretiens individuels de soutien (gestion des conflits, stress, souffrance au travail), analyser les dynamiques relationnelles dans les équipes, et accompagner les collaborateurs en situation de reclassement professionnel.",
        structures: "Directions des Ressources Humaines des grandes entreprises, cabinets de conseil en psychologie, et cellules de médecine du travail."
      },
      {
        titre: "Expert en organisation",
        role: "Consultant interne ou externe chargé d'analyser les structures organisationnelles pour fluidifier le travail et améliorer la productivité collective.",
        actions: "Auditer les processus de travail et de communication, concevoir et clarifier les fiches de poste, optimiser la gestion du temps et l'ergonomie des espaces de travail, et accompagner les restructurations ou fusions d'entreprises.",
        structures: "Cabinets de conseil en management et stratégie, grandes entreprises de services, multinationales, et institutions publiques."
      },
      {
        titre: "Consultant en QVT (Qualité de Vie au Travail)",
        role: "Architecte de l'environnement professionnel, dédié au bien-être au travail, à la motivation des salariés et à la performance durable.",
        actions: "Élaborer et analyser des baromètres sociaux sur le climat de l'entreprise, concevoir des plans de prévention des risques psychosociaux (RPS), et piloter des projets d'amélioration du cadre de vie et de l'équilibre vie pro / vie perso.",
        structures: "Cabinets spécialisés en RH et RSE, grandes entreprises, mutuelles de santé, et administrations engagées dans la modernisation de leur gestion."
      },
      {
        titre: "Chargé de recrutement",
        role: "Spécialiste de la détection de compétences et de l'évaluation du potentiel comportemental et psychologique des candidats.",
        actions: "Rédiger les fiches d'opportunités, sourcer les talents, faire passer des tests psychotechniques et de personnalité, mener les entretiens d'embauche approfondis, et évaluer la compatibilité culturelle du candidat avec la structure.",
        structures: "Cabinets de recrutement et de chasseurs de têtes, agences d'intérim, et services internes de recrutement des grandes entreprises."
      }
    ]
  },

  {
    id: "uac-enstic-journalisme",
    nom: "Journalisme",
    etablissement: "École Nationale des Sciences et Techniques de l'Information et de la Communication (ENSTIC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["francais", "hg", "philo"],
    debouches: [
      {
        titre: "Journaliste (presse écrite, radio, TV, web)",
        role: "Professionnel de l'information chargé de collecter, vérifier, traiter et diffuser l'actualité selon les règles éthiques et déontologiques.",
        actions: "Réaliser des reportages de terrain, mener des interviews politiques ou sociétales, rédiger des articles ou des chroniques, présenter des journaux parlés ou télévisés, et animer des débats en direct.",
        structures: "Rédactions de journaux (presse écrite), chaînes de télévision (ORTB, Canal 3, etc.), stations de radio, et sites d'information en ligne (pure players)."
      },
      {
        titre: "Chargé de relations presse",
        role: "Spécialiste de la communication externe faisant l'interface entre sa structure et l'ensemble des médias nationaux ou internationaux.",
        actions: "Rédiger des communiqués et dossiers de presse percutants, organiser des conférences de presse, relancer les journalistes pour maximiser la couverture médiatique, et gérer les demandes d'interviews de la direction.",
        structures: "Agences de communication, directions de la communication des ministères, grandes entreprises, ONG, et institutions d'État."
      },
      {
        titre: "Community Manager",
        role: "Stratège éditorial en ligne chargé de valoriser les contenus de l'organe de presse ou de l'entreprise sur les plateformes numériques.",
        actions: "Adapter les articles ou reportages aux formats des réseaux sociaux (X, Facebook, TikTok), animer les espaces de commentaires, assurer le live-tweet d'événements, et fidéliser l'audience digitale.",
        structures: "Médias en ligne, agences de presse numériques, entreprises, et en tant que consultant Freelance."
      },
      {
        titre: "Producteur audiovisuel",
        role: "Responsable financier, logistique et artistique de la création de projets de contenus vidéos ou sonores.",
        actions: "Sélectionner des concepts d'émissions ou de documentaires, élaborer les budgets prévisionnels de production, recruter les équipes techniques et artistiques, et négocier la diffusion des œuvres auprès des diffuseurs.",
        structures: "Sociétés de production audiovisuelle indépendantes, chaînes de télévision, et agences de création de contenu de marque (Brand Content)."
      },
      {
        titre: "Réalisateur",
        role: "Maître d'œuvre technique et artistique traduisant un scénario ou un conducteur d'émission en images et en sons.",
        actions: "Diriger les équipes de tournage (cadreurs, ingénieurs du son) sur le plateau ou sur le terrain, orchestrer les régies de diffusion lors des directs TV, et superviser les étapes de post-production (montage, mixage).",
        structures: "Chaînes de télévision, studios de production, agences de publicité, et plateformes de streaming vidéo."
      }
    ]
  },

  {
    id: "uac-enam-admin-generale",
    nom: "Administration Générale",
    etablissement: "École Nationale d'Administration (ENAM)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["francais", "hg", "philo"],
    debouches: [
      {
        titre: "Attaché des affaires étrangères",
        role: "Diplomate et représentant de l'État chargé d'assister à la mise en œuvre de la politique extérieure et des relations internationales.",
        actions: "Rédiger des notes diplomatiques, préparer les dossiers pour les négociations bilatérales ou multilatérales, instruire les demandes de visas et de protection consulaire, et assurer le protocole lors des visites officielles.",
        structures: "Ministère des Affaires Étrangères, ambassades et consulats du Bénin à l'étranger, et organisations internationales."
      },
      {
        titre: "Inspecteur du Travail et de la Sécurité Sociale",
        role: "Garant de l'application de la législation du travail et médiateur des relations professionnelles en milieu de travail.",
        actions: "Contrôler le respect du Code du travail et des normes d'hygiène et sécurité dans les entreprises, concilier les différends individuels ou collectifs entre employeurs et salariés, et conseiller les partenaires sociaux.",
        structures: "Ministère du Travail et de la Fonction Publique, directions départementales du travail, et organismes de prévoyance sociale."
      },
      {
        titre: "Cadre administratif",
        role: "Gestionnaire et coordonnateur des activités administratives, juridiques et financières au sein d'une direction publique ou territoriale.",
        actions: "Superviser la rédaction des actes administratifs (arrêtés, décisions), veiller à la légalité des procédures, instruire les requêtes des usagers et coordonner la gestion des courriers et des archives.",
        structures: "Secrétariats généraux des ministères, préfectures, mairies (directions des affaires juridiques ou administratives), et offices d'État."
      },
      {
        titre: "Fonctionnaire de l'État",
        role: "Agent public de catégorie A dédié à la conception, à la mise en œuvre et à l'évaluation des politiques et réformes de l'administration centrale.",
        actions: "Élaborer des projets de textes législatifs ou réglementaires, piloter des programmes de modernisation du service public, et assurer le suivi budgétaire et administratif des dossiers sectoriels.",
        structures: "Directions nationales, secrétariats généraux, institutions de la République (Assemblée Nationale, Cour Constitutionnelle), et ministères."
      }
    ]
  },

  {
    id: "uac-ifri-genie-logiciel",
    nom: "Génie Logiciel",
    etablissement: "Institut de Formation et de Recherche en Informatique (IFRI)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E"],
    matieres_clefs: ["maths", "anglais", "francais"],
    debouches: [
      {
        titre: "Analyste et concepteur",
        role: "Architecte fonctionnel chargé de formaliser les besoins métiers et de modéliser la structure logique des futurs systèmes applicatifs.",
        actions: "Animer des ateliers de cadrage avec les utilisateurs, rédiger les spécifications fonctionnelles et techniques (UML, Merise), et concevoir la cinématique des écrans et les diagrammes de flux de données.",
        structures: "Sociétés de Services du Numérique (ESN), directions informatiques des banques et assurances, et cabinets de conseil IT."
      },
      {
        titre: "Architecte logiciel",
        role: "Garant de la structure technique, des performances logiques, de la scalabilité et de la pérennité du code source des applications.",
        actions: "Définir les design patterns et la stack technologique, concevoir les API de communication, mettre en place les infrastructures CI/CD, et encadrer techniquement les équipes de développeurs.",
        structures: "Éditeurs de logiciels, start-ups technologiques en forte croissance, et cellules de Recherche & Développement (R&D)."
      },
      {
        titre: "Administrateur de bases de données",
        role: "Gestionnaire expert responsable de la disponibilité, de l'intégrité, de l'optimisation et de la sécurité des données de l'entreprise.",
        actions: "Modéliser et déployer des bases de données relationnelles ou NoSQL, optimiser les requêtes SQL complexes, planifier les politiques de sauvegarde/restauration, et gérer les droits d'accès des serveurs.",
        structures: "Directions des Systèmes d'Information (DSI), opérateurs de télécommunications, fournisseurs d'infrastructures Cloud, et banques."
      },
      {
        titre: "Développeur d'applications métiers",
        role: "Programmeur spécialisé dans la création de solutions logicielles sur-mesure pour automatiser et optimiser les processus des entreprises.",
        actions: "Écrire du code propre, robuste et modulaire (Frontend & Backend), intégrer des frameworks modernes, connecter des bases de données distantes, et effectuer les tests unitaires et d'intégration.",
        structures: "Studios de développement web/mobile, entreprises de conseil, start-ups, et en tant que consultant indépendant (Freelance)."
      },
      {
        titre: "Auto-entrepreneur",
        role: "Créateur de start-up ou consultant technologique indépendant, exploitant ses compétences pour proposer des solutions innovantes sur le marché.",
        actions: "Prospecter des clients, concevoir et commercialiser des produits SaaS (Software as a Service) ou des applications mobiles, et piloter la gestion financière et technique de sa structure.",
        structures: "Start-ups innovantes, agences de conseil indépendantes, et plateformes de services numériques tiers."
      }
    ]
  },

  {
    id: "uac-ifri-ia",
    nom: "Intelligence artificielle (IA)",
    etablissement: "Institut de Formation et de Recherche en Informatique (IFRI)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E"],
    matieres_clefs: ["maths", "anglais", "francais"],
    debouches: [
      {
        titre: "Développeur de solutions intelligentes",
        role: "Ingénieur logiciel spécialisé dans l'intégration d'algorithmes d'apprentissage automatique (Machine Learning / Deep Learning) dans des applications.",
        actions: "Entraîner et fine-tuner des modèles prédictifs, implémenter des fonctionnalités de traitement automatique du langage naturel (NLP) ou de vision par ordinateur, et déployer des modèles via des API REST.",
        structures: "Start-ups de l'EdTech ou FinTech, laboratoires de recherche appliquée, et agences de transformation digitale."
      },
      {
        titre: "Architecte des données massives",
        role: "Ingénieur de données (Data Engineer) chargé de concevoir et de maintenir les infrastructures de collecte et de traitement de volumes massifs de données.",
        actions: "Mettre en place des pipelines ETL/ELT automatisés, configurer des architectures Big Data (Hadoop, Spark), et structurer les Data Lakes pour permettre le traitement en temps réel par les Data Scientists.",
        structures: "Opérateurs de télécoms (MTN, Moov), grandes institutions financières, plateformes cloud, et multinationales du numérique."
      },
      {
        titre: "Analyste de données décisionnelles",
        role: "Expert en Business Intelligence (BI) chargé de transformer la donnée brute en indicateurs visuels pour guider la stratégie d'entreprise.",
        actions: "Concevoir des entrepôts de données (Data Warehouses), créer des tableaux de bord interactifs et dynamiques (PowerBI, Tableau), et modéliser des analyses prédictives pour anticiper les comportements du marché.",
        structures: "Cabinets d'audit-conseil (Big Four), directions stratégiques des grandes entreprises, et entreprises de e-commerce."
      },
      {
        titre: "Auto-entrepreneur tech",
        role: "Innovateur et chef d'entreprise spécialisé dans la commercialisation de produits informatiques intégrant de l'intelligence artificielle.",
        actions: "Concevoir des agents conversationnels intelligents (Chatbots métiers), développer des outils d'analyse prédictive pour des secteurs spécifiques (finance, agriculture, santé), et piloter son modèle d'affaires.",
        structures: "Start-ups technologiques indépendantes, cabinets d'expertise IA, et incubateurs de solutions innovantes (Sèmè City)."
      }
    ]
  },

  {
    id: "uac-ifri-seiot",
    nom: "Systèmes embarqués et Internet des Objets (SEIoT)",
    etablissement: "Institut de Formation et de Recherche en Informatique (IFRI)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E"],
    matieres_clefs: ["maths", "anglais", "francais"],
    debouches: [
      {
        titre: "Concepteur de solutions embarquées",
        role: "Ingénieur matériel et logiciel chargé de concevoir des systèmes électroniques autonomes dédiés à des tâches spécifiques.",
        actions: "Concevoir des cartes électroniques (PCB), programmer des microcontrôleurs en C/C++ ou Assembleur, et optimiser la consommation d'énergie et la mémoire de systèmes informatiques miniaturisés.",
        structures: "Bureaux d'études électroniques, industries manufacturières, entreprises du secteur de l'énergie, et centres de prototypage."
      },
      {
        titre: "Développeur domotique",
        role: "Spécialiste de l'automatisation de l'habitat, chargé de rendre les bâtiments intelligents, connectés et économes en énergie.",
        actions: "Intégrer et programmer des capteurs, actionneurs et systèmes de gestion centralisés pour l'éclairage, la sécurité et la climatisation, et concevoir des interfaces de contrôle pour les utilisateurs.",
        structures: "Entreprises du bâtiment et de l'immobilier moderne, agences d'installation domotique, et sociétés de services techniques."
      },
      {
        titre: "Ingénieur IoT",
        role: "Architecte réseau et logiciel supervisant l'ensemble de la chaîne de valeur des objets connectés, du capteur physique au cloud.",
        actions: "Déployer des réseaux de communication bas débit (LoRaWAN, Sigfox), assurer la remontée sécurisée des données de capteurs vers des serveurs, et développer des applications web ou mobiles pour visualiser ces données.",
        structures: "Sociétés de gestion agricole intelligente (AgriTech), gestionnaires de réseaux d'eau ou d'électricité (SBEE, SONEB), et intégrateurs de solutions connectées."
      },
      {
        titre: "Auto-entrepreneur en électronique",
        role: "Créateur de solutions technologiques physiques et connectées, répondant à des problématiques de terrain locales.",
        actions: "Fabriquer des prototypes fonctionnels (systèmes d'irrigation automatisés, couveuses connectées, bornes de recharge), commercialiser ses innovations et piloter la production en petite série.",
        structures: "Ateliers technologiques (FabLabs), start-ups de hardware, et entreprises individuelles de maintenance et conception électronique."
      }
    ]
  },

  {
    id: "uac-ifri-securite-info",
    nom: "Sécurité Informatique",
    etablissement: "Institut de Formation et de Recherche en Informatique (IFRI)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E"],
    matieres_clefs: ["maths", "anglais", "francais"],
    debouches: [
      {
        titre: "Expert en réseaux et systèmes informatiques",
        role: "Ingénieur système senior chargé d'administrer de manière hautement sécurisée les infrastructures de communication de l'entreprise.",
        actions: "Configurer les pare-feu (Firewalls), proxy et VPN, implémenter des protocoles de routage sécurisés, superviser l'architecture Active Directory/LDAP, et veiller à la disponibilité continue des serveurs.",
        structures: "Directions des Systèmes d'Information (DSI) bancaires, opérateurs télécoms, et ministères régaliens."
      },
      {
        titre: "Analyste en cybersécurité",
        role: "Défenseur du système d'information chargé de surveiller, de détecter et de contrer les attaques informatiques en temps réel.",
        actions: "Analyser les logs des serveurs et équipements réseaux via un SIEM, enquêter sur les incidents de sécurité, déployer des solutions de détection d'intrusions (IDS/IPS), et appliquer des contre-mesures face aux logiciels malveillants.",
        structures: "Centres de Surveillance de la Sécurité (SOC), Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI), et grandes banques."
      },
      {
        titre: "Contrôleur des systèmes d'information",
        role: "Garant de la conformité réglementaire, juridique et méthodologique de la sécurité du patrimoine informationnel de la structure.",
        actions: "Vérifier la bonne application de la Politique de Sécurité des Systèmes d'Information (PSSI), veiller au respect des lois sur la protection des données personnelles (APDP), et sensibiliser le personnel aux risques de cyber-ingénierie sociale.",
        structures: "Grandes entreprises du secteur financier, institutions publiques, agences de régulation, et assurances."
      },
      {
        titre: "Auditeur sécurité",
        role: "Hacker éthique (Pentester) chargé d'évaluer la vulnérabilité globale du système d'information par des tests d'intrusion ciblés.",
        actions: "Simuler des cyberattaques sur les applications web, mobiles et les réseaux de l'entreprise, identifier les failles de sécurité de configuration ou de code, et rédiger un rapport détaillé accompagné de préconisations techniques de correction.",
        structures: "Cabinets de conseil en cybersécurité, agences de contrôle et d'audit IT, et équipes de sécurité internes (Red Teams)."
      }
    ]
  },

  {
    id: "uac-fsa-prod-vegetale",
    nom: "Sciences et Techniques de Production Végétale",
    etablissement: "Faculté des Sciences Agronomiques (FSA)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT/PV"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Entrepreneur agricole",
        role: "Chef d'exploitation moderne gérant de manière autonome la production, la transformation et la commercialisation de cultures végétales.",
        actions: "Élaborer les itinéraires techniques des cultures, planifier les cycles de semis et de récolte, gérer la trésorerie et la main-d'œuvre, et négocier les circuits de vente sur les marchés locaux et internationaux.",
        structures: "Exploitations agricoles privées, coopératives de producteurs (groupements), start-ups de l'AgriTech, et en tant que producteur indépendant."
      },
      {
        titre: "Contrôle de qualité des cultures",
        role: "Technicien ou auditeur garant de la conformité des produits récoltés vis-à-vis des normes sanitaires, marchandes et phytosanitaires.",
        actions: "Prélever des échantillons sur les lots de production, évaluer les critères de maturité, de calibrage et d'absence de résidus chimiques, et délivrer des certificats de conformité pour la distribution ou l'exportation.",
        structures: "Agence Béninoise de Sécurité Sanitaire des Aliments (ABSSA), laboratoires de contrôle qualité, industries de transformation agroalimentaire, et multinationales de négoce agricole."
      },
      {
        titre: "Technicien en protection des végétaux",
        role: "Spécialiste de la santé des plantes chargé de prévenir, diagnostiquer et traiter les maladies et les attaques de bio-agresseurs sur les cultures.",
        actions: "Identifier les agents pathogènes (insectes, champignons, virus), concevoir des stratégies de lutte intégrée (biologique et raisonnée), et conseiller les agriculteurs sur l'utilisation sécurisée des produits phytosanitaires.",
        structures: "Directions Départementales de l'Agriculture, de l'Élevage et de la Pêche (DDAEP), cabinets de conseil agricole, ONG d'appui au développement rural, et firmes agrochimiques."
      },
      {
        titre: "Recherche agronomique",
        role: "Assistant de recherche dédié à l'amélioration variétale, à la fertilité des sols et à l'optimisation des rendements agricoles.",
        actions: "Mettre en place et suivre des parcelles expérimentales, collecter et analyser des données biométriques sur les cultures, tester la résistance de nouvelles variétés face au stress climatique, et participer à la rédaction de fiches techniques.",
        structures: "Institut National des Recherches Agricoles du Bénin (INRAB), laboratoires universitaires de la FSA, et centres internationaux de recherche (ex: AfricaRice)."
      }
    ]
  },

  {
    id: "uac-fsa-prod-animale",
    nom: "Sciences et Techniques de Production Animale",
    etablissement: "Faculté des Sciences Agronomiques (FSA)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT/PA"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Technicien en gestion d'élevages",
        role: "Responsable technique opérationnel veillant à la productivité, au bien-être et à la rentabilité économique d'une unité d'élevage.",
        actions: "Piloter la conduite des bandes (volailles, porcs, ruminants), planifier le rationnement alimentaire, suivre le calendrier prophylactique de base, et superviser le personnel de ferme.",
        structures: "Fermes zootechniques modernes, complexes avicoles et porcins, coopératives d'éleveurs, et stations d'élevage publiques."
      },
      {
        titre: "Technicien de laboratoire",
        role: "Analyste technique chargé d'effectuer les examens biologiques et physico-chimiques liés à la santé animale et à la nutrition.",
        actions: "Analyser la qualité microbiologique et nutritionnelle des aliments pour bétail, réaliser des examens parasitologiques ou sérologiques sur des prélèvements vétérinaires, et consigner les résultats d'analyses.",
        structures: "Laboratoire National d'Appui au Développement Agricole (LANADA), laboratoires de recherche en biologie animale, et usines de fabrication d'aliments pour bétail."
      },
      {
        titre: "Zootechnicien",
        role: "Spécialiste de la biologie et de l'optimisation des performances des animaux d'élevage à travers l'alimentation, la sélection et le logement.",
        actions: "Formuler des rations alimentaires équilibrées selon les stades physiologiques, concevoir des programmes d'amélioration génétique par insémination artificielle, et définir l'ergonomie des bâtiments d'élevage.",
        structures: "Agences Territoriales de Développement Agricole (ATDA), cabinets d'expertise en productions animales, et ONG œuvrant pour la sécurité alimentaire."
      },
      {
        titre: "Vétérinaire assistant",
        role: "Collaborateur direct du médecin vétérinaire, chargé d'administrer les soins courants et d'assurer le suivi sanitaire des cheptels.",
        actions: "Exécuter les campagnes de vaccination de masse, prodiguer des soins de première urgence, assister lors des interventions chirurgicales ou des mises bas complexes, et distribuer les médicaments prescrits.",
        structures: "Cabinets et cliniques vétérinaires privés, pharmacies vétérinaires, abattoirs publics (contrôle sanitaire), et projets de développement de l'élevage."
      }
    ]
  },

  {
    id: "uac-fsa-forets",
    nom: "Aménagement et Gestion des Forêts et Parcours Naturels",
    etablissement: "Faculté des Sciences Agronomiques (FSA)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT/Foresterie"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Gestionnaire des forêts et parcours naturels",
        role: "Garant de la conservation, de l'exploitation durable et de la protection des écosystèmes forestiers et fauniques.",
        actions: "Coordonner les patrouilles de surveillance contre le braconnage et l'abattage clandestin, planifier les opérations de reboisement et d'enrichissement des forêts, et encadrer la gestion communautaire des ressources naturelles.",
        structures: "Direction Générale des Eaux, Forêts et Chasse (DGEFC), Centres Nationaux de Gestion des Réserves de Faune (CENAGREF), et parcs nationaux (Pendjari, W)."
      },
      {
        titre: "Technicien en inventaire forestier",
        role: "Opérateur technique spécialisé dans la collecte de données quantitatives et qualitatives sur les ressources forestières sur le terrain.",
        actions: "Réaliser des relevés dendrométriques (mesure du diamètre et de la hauteur des arbres), identifier les essences forestières, cartographier les peuplements par GPS, et évaluer le stock de biomasse et de carbone.",
        structures: "Bureaux d'études en environnement, agences nationales de cartographie, et projets internationaux d'atténuation du changement climatique (REDD+)."
      },
      {
        titre: "Expert en plans d'aménagement forestier",
        role: "Ingénieur-concepteur chargé de planifier sur le long terme l'utilisation et la sauvegarde des massifs forestiers.",
        actions: "Rédiger les documents cadres d'aménagement des forêts (zonage, calcul de la possibilité forestière), définir les règles de coupes sylvicoles, et concevoir des programmes de restauration des sols et de gestion des parcours de transhumance.",
        structures: "Cabinets d'ingénierie environnementale, organisations internationales (UICN, PNUD), et directions techniques des ministères du Cadre de Vie."
      }
    ]
  },

  {
    id: "uac-fsa-genie-rural",
    nom: "Génie Rural, Mécanisation Agricole, Pêche et Aquaculture",
    etablissement: "Faculté des Sciences Agronomiques (FSA)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Assainissement agricole",
        role: "Spécialiste de la gestion des eaux et de la préservation de la qualité des sols en milieu rural.",
        actions: "Dimensionner et installer des systèmes de drainage pour éviter l'asphyxie et la salinisation des sols, concevoir des ouvrages anti-érosifs, et traiter les effluents ou déchets issus des activités agro-pastorales.",
        structures: "Ministère de l'Agriculture (MAEP), bureaux d'études en aménagement hydro-agricole, et ONG de développement rural."
      },
      {
        titre: "Mécanisation agricole",
        role: "Ingénieur ou technicien chargé de l'introduction, de la maintenance et de l'adaptation des technologies de mécanisation dans les chaînes de production.",
        actions: "Évaluer et sélectionner les équipements adaptés (tracteurs, motoculteurs, récolteuses, décortiqueuses), former les exploitants à leur utilisation, et concevoir de petits outils agricoles adaptés aux réalités locales.",
        structures: "Société Nationale de Mécanisation Agricole (SoNaMA), centres de formation professionnelle agricole, et concessions d'équipements de manutention."
      },
      {
        titre: "Aménagement des pêches en aquaculture",
        role: "Technicien supérieur chargé d'assurer la gestion durable des ressources halieutiques et le développement des filières aquacoles.",
        actions: "Suivre la dynamique des populations de poissons dans les plans d'eau naturels, appliquer la réglementation des pêches (maillage des filets, périodes de fermeture), et accompagner les pêcheurs dans leur transition vers l'aquaculture.",
        structures: "Direction de la Production Halieutique, mairies (zones lacustres), coopératives de pêcheurs, et projets de développement de l'économie bleue."
      },
      {
        titre: "Concepteur de fermes piscicoles",
        role: "Ingénieur hydraulicien et biologiste spécialisé dans le dimensionnement, la construction et l'exploitation de systèmes d'élevage aquatique.",
        actions: "Concevoir l'architecture de bassins hors-sol, d'étangs de terre ou de cages flottantes, calculer les débits d'eau nécessaires, installer les systèmes de filtration et d'aération (Recirculating Aquaculture Systems - RAS), et piloter la production d'alevins.",
        structures: "Bureaux d'études en ingénierie aquacole, fermes piscicoles privées à caractère industriel, et centres de promotion de l'aquaculture."
      }
    ]
  },

  {
    id: "uac-fsa-nutrition",
    nom: "Nutrition et Technologie Alimentaires",
    etablissement: "Faculté des Sciences Agronomiques (FSA)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Technique de diététique",
        role: "Professionnel de santé nutritionnelle chargé de concevoir des régimes alimentaires adaptés aux besoins physiologiques et pathologiques des individus.",
        actions: "Élaborer des plans nutritionnels personnalisés (perte de poids, diabète, hypertension), superviser la composition des menus en milieu hospitalier ou scolaire, et animer des ateliers de rééquilibrage alimentaire.",
        structures: "Centres hospitaliers (services de nutrition), cliniques privées, centres de remise en forme, et établissements d'accueil de la petite enfance."
      },
      {
        titre: "Contrôle qualité agroalimentaire",
        role: "Responsable ou technicien QHSE veillant à la sécurité sanitaire et à la conformité réglementaire des aliments tout au long de la chaîne de fabrication.",
        actions: "Mettre en œuvre la méthode HACCP, réaliser des audits d'hygiène sur les lignes de production, contrôler le respect de la chaîne du froid, et effectuer des analyses microbiologiques sur les produits finis avant emballage.",
        structures: "Industries agroalimentaires (brasseries, huileries, laiteries), chaînes de grande distribution, et Agence Béninoise de Sécurité Sanitaire des Aliments (ABSSA)."
      },
      {
        titre: "Expert en transformation des denrées",
        role: "Ingénieur ou technologue alimentaire spécialisé dans la valorisation des matières premières locales et la formulation de nouveaux produits.",
        actions: "Développer des procédés de conservation innovants (séchage, pasteurisation, fermentation) pour réduire les pertes post-récolte, optimiser les emballages, et concevoir des recettes répondant aux attentes nutritionnelles du marché.",
        structures: "Unités de transformation agro-industrielle, centres d'incubation et d'innovation technologique, et cabinets de conseil en formulation alimentaire."
      },
      {
        titre: "Consultant nutrition",
        role: "Conseiller stratégique intervenant auprès d'organisations pour concevoir et évaluer des programmes de lutte contre la malnutrition.",
        actions: "Mener des enquêtes nutritionnelles à l'échelle communautaire (mesures anthropométriques), concevoir des stratégies d'enrichissement des aliments de base, et appuyer la formulation des politiques nationales de sécurité nutritionnelle.",
        structures: "Organisations internationales (PAM, UNICEF, FAO), ONG de santé publique, cabinets de conseil en développement, et instituts de recherche."
      }
    ]
  },

  {
    id: "uac-fsa-agroeconomie",
    nom: "Agroéconomie, Sociologie et Vulgarisation Rurales",
    etablissement: "Faculté des Sciences Agronomiques (FSA)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Gestionnaire de ferme",
        role: "Administrateur financier et opérationnel chargé d'optimiser les systèmes de production agro-pastoraux et la rentabilité globale des exploitations.",
        actions: "Établir les budgets prévisionnels et les plans de roulement, calculer les coûts de production, analyser les marges bénéficiaires, et encadrer la planification technique et logistique des campagnes agricoles.",
        structures: "Fermes agricoles commerciales, grands complexes agro-industriels, domaines de production privés, et groupements de producteurs."
      },
      {
        titre: "Économiste rural",
        role: "Analyste stratégique spécialisé dans l'étude des marchés agricoles, des filières de commercialisation et des dynamiques socio-économiques rurales.",
        actions: "Réaliser des études de marché et des chaînes de valeur sectorielles (ex: coton, anacarde, maraîchage), modéliser l'impact des politiques agricoles sur les revenus des ménages, et évaluer la viabilité économique des réformes rurales.",
        structures: "Ministère de l'Agriculture, de l'Élevage et de la Pêche (MAEP), instituts de recherche (INRAB), banques de développement, et cabinets de conseil."
      },
      {
        titre: "Agent de développement agricole",
        role: "Professionnel de la vulgarisation chargé de faire l'interface entre la recherche scientifique et les communautés rurales pour l'adoption d'innovations.",
        actions: "Concevoir des programmes de formation participatifs, vulgariser les bonnes pratiques agricoles (itinéraires techniques, gestion des sols), et structurer les communautés pour faciliter leur accès aux intrants et aux crédits.",
        structures: "Agences Territoriales de Développement Agricole (ATDA), Directions Départementales de l'Agriculture (DDAEP), et ONG de développement rural."
      },
      {
        titre: "Conseiller en coopératives",
        role: "Spécialiste de l'organisation rurale dédié à l'accompagnement, à la gouvernance et au renforcement institutionnel des regroupements agricoles.",
        actions: "Accompagner la création et la formalisation juridique des coopératives, former les membres aux principes de gestion transparente et démocratique, et appuyer la négociation collective de contrats de vente avec les industriels.",
        structures: "Unités Communales d'Appui au Développement Rural (UCDAR), fédérations et unions de producteurs (FUPRO), et projets de structuration des filières."
      }
    ]
  },

  {
    id: "uac-fsa-entrepreneuriat",
    nom: "Entrepreneuriat Agricole",
    etablissement: "Faculté des Sciences Agronomiques (FSA)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Chef d'exploitation agricole",
        role: "Entrepreneur de terrain pilotant sa propre entreprise agricole dans une perspective de rentabilité financière et de durabilité.",
        actions: "Concevoir le modèle d'affaires de la ferme, lever des fonds ou négocier des lignes de crédit, orchestrer l'ensemble des activités de production (végétale/animale), et piloter la stratégie marketing et de distribution.",
        structures: "Exploitations agricoles privées, start-ups de l'AgriTech, et moyennes/grandes entreprises agricoles indépendantes."
      },
      {
        titre: "Gestionnaire d'agrobusiness",
        role: "Manager spécialisé dans les segments de la transformation agroalimentaire, du conditionnement et de la distribution à forte valeur ajoutée.",
        actions: "Superviser l'approvisionnement en matières premières auprès des producteurs, manager l'unité de transformation ou d'emballage, optimiser les canaux de distribution (B2B/B2C), et assurer la conformité aux normes du marché.",
        structures: "PME de transformation agroalimentaire, centrales d'achat, entreprises de logistique et de négoce agricole, et chaînes de distribution."
      },
      {
        titre: "Conseiller en projets agricoles",
        role: "Consultant ou chargé d'études spécialisé dans le montage, l'analyse et l'évaluation de plans d'affaires pour investissements agro-pastoraux.",
        actions: "Rédiger des business plans agricoles détaillés, réaliser des études de faisabilité technique, économique et environnementale, et accompagner les promoteurs dans l'obtention de financements auprès des institutions bancaires.",
        structures: "Cabinets d'expertise comptable et de conseil agricole, structures d'appui à l'entrepreneuriat des jeunes, et incubateurs d'entreprises."
      },
      {
        titre: "Entrepreneur rural",
        role: "Acteur économique développant des activités de services et des solutions innovantes adaptées aux écosystèmes et économies des milieux ruraux.",
        actions: "Créer des structures de prestations de services mécanisés, implémenter des solutions d'énergies renouvelables appliquées à l'agriculture, ou développer des plateformes de services numériques et financiers de proximité.",
        structures: "Entreprises de services agricoles, agences de micro-crédit rural, et start-ups à impact social et communautaire."
      }
    ]
  },

  {
    id: "uac-fss-medecine",
    nom: "Médecine Générale",
    etablissement: "Faculté des Sciences de la Santé (FSS)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Médecin généraliste",
        role: "Praticien de premier recours assurant la prise en charge médicale globale, continue et coordonnée des patients de tous âges.",
        actions: "Réaliser des consultations cliniques, diagnostiquer les pathologies courantes, prescrire les examens complémentaires et traitements adaptés, et orienter si nécessaire le patient vers un spécialiste.",
        structures: "Centres de santé d'arrondissement ou de commune, cliniques médicales privées, et cabinets médicaux indépendants."
      },
      {
        titre: "Spécialisation en sciences de la santé",
        role: "Médecin en cours de formation de troisième cycle (Résidanat/DES) visant à acquérir une expertise pointue dans une discipline médicale ou chirurgicale.",
        actions: "Approfondir les connaissances théoriques et pratiques de la spécialité choisie (ex: pédiatrie, gynécologie, cardiologie, chirurgie), et assurer des gardes et astreintes spécialisées sous supervision.",
        structures: "Centres Hospitaliers Universitaires (CNHU-HKM, CHUD), et facultés de médecine agréées pour le troisième cycle."
      },
      {
        titre: "Recherche médicale",
        role: "Chercheur ou clinicien-chercheur dédié à l'avancement des connaissances médicales, à l'épidémiologie et à l'évaluation thérapeutique.",
        actions: "Concevoir et piloter des protocoles d'essais cliniques, analyser des données épidémiologiques sur les grandes endémies, et publier des travaux scientifiques pour améliorer les protocoles de soins nationaux.",
        structures: "Instituts nationaux de recherche en santé publique, laboratoires universitaires, centres de recherche clinique, et OMS."
      },
      {
        titre: "Praticien hospitalier",
        role: "Médecin intégré au corps médical d'un établissement hospitalier, assurant les soins aux patients hospitalisés et les urgences.",
        actions: "Assurer le suivi quotidien des lits d'hospitalisation, coordonner la prise en charge pluridisciplinaire au sein des services, participer aux gardes médicales institutionnelles, et encadrer les étudiants en stage interne.",
        structures: "Hôpitaux de zone, Centres Hospitaliers Départementaux (CHD), et hôpitaux nationaux ou confessionnels."
      }
    ]
  },

  {
    id: "uac-fss-pharmacie",
    nom: "Pharmacie",
    etablissement: "Faculté des Sciences de la Santé (FSS)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Pharmacien",
        role: "Professionnel de santé expert du médicament, responsable de sa dispensation, de la sécurité thérapeutique et du conseil aux patients.",
        actions: "Analyser la conformité des ordonnances médicales, délivrer les médicaments en informant sur le bon usage et les contre-indications, gérer les stocks d'officine, et participer aux actions de santé publique de proximité.",
        structures: "Pharmacies d'officine (privées), pharmacies hospitalières des hôpitaux publics et privés, et grossistes-répartiteurs en pharmacie."
      },
      {
        titre: "Spécialisation en sciences pharmaceutiques",
        role: "Docteur en pharmacie poursuivant des études de spécialisation biologique, hospitalière ou industrielle de haut niveau.",
        actions: "Suivre des formations de spécialisation (ex: biologie médicale, pharmacie hospitalière, toxicologie), réaliser des analyses de laboratoire complexes, et valider des protocoles d'assurance qualité.",
        structures: "Laboratoires d'analyses médicales, instituts de biologie clinique, Centres Hospitaliers Universitaires, et écoles doctorales."
      },
      {
        titre: "Industrie pharmaceutique",
        role: "Cadre technique intervenant dans les processus industriels de fabrication, de contrôle qualité ou de réglementation des produits de santé.",
        actions: "Superviser les lignes de production de médicaments, mettre en œuvre les Bonnes Pratiques de Fabrication (BPF), piloter le contrôle qualité physico-chimique et microbiologique, et monter les dossiers d'Autorisation de Mise sur le Marché (AMM).",
        structures: "Laboratoires de fabrication de médicaments, unités industrielles de production pharmaceutique, et agences de réglementation pharmaceutique."
      },
      {
        titre: "Recherche en pharmacologie",
        role: "Chercheur scientifique dédié à la découverte de nouvelles molécules, à la valorisation de la pharmacopée locale et à la pharmacovigilance.",
        actions: "Isoler et tester les principes actifs issus de plantes médicinales traditionnelles, analyser les mécanismes d'action des molécules, mener des études de toxicologie, et suivre les signalements d'effets indésirables des médicaments.",
        structures: "Centres de recherche sur la pharmacopée traditionnelle, laboratoires universitaires, et organismes nationaux de pharmacovigilance."
      }
    ]
  },

  {
    id: "uac-fss-kinesitherapie",
    nom: "Kinésithérapie",
    etablissement: "Faculté des Sciences de la Santé (FSS)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Kinésithérapeute",
        role: "Professionnel de santé spécialisé dans la rééducation motrice et le traitement des troubles du mouvement à l'aide de techniques manuelles et instrumentales.",
        actions: "Réaliser des bilans de kinésithérapie initiaux, concevoir des protocoles de massage et de gymnastique médicale, et appliquer des techniques d'étirement et de renforcement musculaire adaptées à la pathologie du patient.",
        structures: "Services de rééducation des hôpitaux, cabinets de kinésithérapie privés, et établissements médico-sociaux."
      },
      {
        titre: "Rééducateur fonctionnel",
        role: "Thérapeute spécialisé dans la restauration des capacités physiques et de l'autonomie chez les patients souffrant de séquelles neurologiques ou traumatiques graves.",
        actions: "Travailler la rééducation à la marche, stimuler la motricité fine et globale de patients hémiplégiques ou accidentés, et conseiller sur l'adaptation ergonomique de l'environnement matériel du patient.",
        structures: "Centres de rééducation et de réadaptation fonctionnelle, centres spécialisés pour accidentés de la vie, et fondations d'aide humanitaire."
      },
      {
        titre: "Praticien en médecine sportive",
        role: "Spécialiste de l'accompagnement physique, de la récupération et de la réhabilitation spécifique des athlètes et des sportifs.",
        actions: "Assurer les soins de récupération post-effort (massages, cryothérapie), traiter les traumatismes liés au sport (entorses, déchirures), et participer à la préparation physique et à la prévention des blessures.",
        structures: "Clubs sportifs professionnels, fédérations nationales de sport, centres de médecine du sport, et complexes de thalassothérapie."
      },
      {
        titre: "Soins à domicile",
        role: "Kinésithérapeute libéral ambulant dispensant des séances de rééducation directement au lieu de résidence des patients ne pouvant se déplacer.",
        actions: "Transporter le matériel mobile adapté, réaliser des séances d'entretien articulaire et respiratoire pour personnes âgées ou alitées, et former l'entourage aux gestes de manutention et de transfert sécurisés.",
        structures: "Exercice libéral indépendant, services de soins infirmiers à domicile (SSIAD), et réseaux d'aide et de maintien à domicile."
      }
    ]
  },

  {
    id: "uac-fss-assistance-sociale",
    nom: "Assistance sociale",
    etablissement: "Faculté des Sciences de la Santé (FSS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "D"],
    matieres_clefs: ["philo", "hg", "svt"],
    debouches: [
      {
        titre: "Technicien supérieur de l'action sociale",
        role: "Agent de terrain et gestionnaire de cas, chargé d'identifier, d'évaluer et d'accompagner les personnes ou familles en situation de grande précarité.",
        actions: "Mener des enquêtes sociales détaillées, élaborer des plans d'aide personnalisés, instruire les dossiers de demande d'allocations ou de secours d'urgence, et orienter les usagers vers les services spécialisés.",
        structures: "Centres de Promotion Sociale (CPS) du Ministère des Affaires Sociales, mairies (directions des affaires sociales), et centres de sauvegarde de l'enfance."
      },
      {
        titre: "Assistant de vie",
        role: "Accompagnateur de proximité dédié au maintien de l'autonomie et au bien-être quotidien des personnes vulnérables, âgées ou malades.",
        actions: "Assister les bénéficiaires dans les actes de la vie quotidienne (repas, hygiène, déplacements), organiser des activités de stimulation cognitive ou sociale, et assurer une veille attentive sur l'évolution de leur état de santé général.",
        structures: "Centres d'accueil pour personnes âgées, services de soins et d'aide à domicile, fondations humanitaires, et associations médico-sociales."
      },
      {
        titre: "Médiateur social",
        role: "Facilitateur relationnel chargé de pacifier les rapports sociaux, de résoudre les conflits de proximité et de restaurer le lien entre les usagers et les institutions.",
        actions: "Animer des espaces d'écoute et de dialogue, désamorcer les tensions communautaires ou familiales par la négociation, et accompagner les populations vulnérables dans la compréhension de leurs droits et démarches administratives.",
        structures: "Collectivités locales (mairies), établissements scolaires, centres d'hébergement d'urgence, et ONG de médiation urbaine."
      },
      {
        titre: "Conseiller en insertion",
        role: "Accompagnateur professionnel guidant les personnes éloignées de l'emploi ou en situation de reconversion vers une autonomie sociale et financière.",
        actions: "Animer des ateliers de techniques de recherche d'emploi (CV, entretien), co-construire le projet professionnel de l'usager, prospecter des entreprises partenaires pour des stages ou contrats, et assurer le suivi post-intégration.",
        structures: "Agences nationales pour l'emploi (ANPE), structures d'appui à l'entrepreneuriat des jeunes, centres de réinsertion professionnelle, et ONG de développement."
      }
    ]
  },

  {
    id: "uac-fss-nutrition-dietetique",
    nom: "Nutrition et Diététique",
    etablissement: "Faculté des Sciences de la Santé (FSS)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Nutritionniste clinique",
        role: "Professionnel de santé expert en thérapie nutritionnelle, chargé d'adapter l'alimentation des patients hospitalisés ou souffrant de pathologies spécifiques.",
        actions: "Établir des diagnostics nutritionnels approfondis, concevoir des protocoles d'alimentation entérale/parentérale ou des régimes thérapeutiques sur-mesure (insuffisance rénale, cancer, diabète), et assurer le suivi des constantes métaboliques.",
        structures: "Centres Hospitaliers Universitaires (CNHU), cliniques médicales privées, centres de prise en charge des maladies métaboliques, et centres de convalescence."
      },
      {
        titre: "Consultant en nutrition et diététique",
        role: "Praticien libéral ou conseiller expert guidant les individus et les entreprises vers une alimentation saine, équilibrée et préventive.",
        actions: "Réaliser des bilans d'impédancemétrie et des enquêtes alimentaires, concevoir des plans de rééquilibrage nutritionnel personnalisés (perte de poids, prise de masse, grossesse), et animer des conférences ou ateliers de sensibilisation.",
        structures: "Cabinets de consultation diététique privés, centres de bien-être et de fitness, structures hôtelières de standing, et en tant que travailleur indépendant."
      },
      {
        titre: "Programmes de nutrition publique",
        role: "Spécialiste en santé communautaire chargé de concevoir et de piloter des interventions à grande échelle pour lutter contre les carences et la malnutrition.",
        actions: "Mener des enquêtes épidémiologiques de terrain, piloter des campagnes de supplémentation en micronutriments, concevoir des guides nutritionnels nationaux, et évaluer l'impact des politiques de sécurité alimentaire.",
        structures: "Ministère de la Santé (Direction de la Nutrition), organisations internationales (UNICEF, PAM, FAO), et ONG de santé publique."
      },
      {
        titre: "Industrie agroalimentaire",
        role: "Ingénieur nutritionniste veillant à la qualité nutritionnelle, à la formulation et à la conformité réglementaire des aliments transformés.",
        actions: "Participer au développement de nouveaux produits (aliments fortifiés, nutrition infantile), valider le profil nutritionnel des recettes, rédiger les étiquetages et allégations de santé, et veiller au respect des normes sanitaires.",
        structures: "Grandes industries de transformation de produits laitiers ou céréaliers, laboratoires de développement de compléments alimentaires, et cabinets d'audit QHSE."
      }
    ]
  },

  {
    id: "uac-epac-analyse-biomedicale",
    nom: "Analyse Biomédicale",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Technicien de laboratoire des centres de santé",
        role: "Opérateur de santé hautement qualifié chargé d'exécuter les examens biologiques indispensables au diagnostic, au traitement et au suivi des patients.",
        actions: "Effectuer des prélèvements biologiques (sang, urine, LCR), réaliser des analyses en hématologie, biochimie, microbiologie et parasitologie, étalonner et entretenir les automates de laboratoire, et valider techniquement les résultats.",
        structures: "Laboratoires des hôpitaux publics (CNHU, CHD, hôpitaux de zone), laboratoires d'analyses privés, et centres de transfusion sanguine."
      },
      {
        titre: "Assistant de recherche biomédicale",
        role: "Technicien scientifique apportant son appui technique aux chercheurs dans l'implémentation de protocoles expérimentaux ou épidémiologiques.",
        actions: "Manipuler des cultures cellulaires ou bactériennes, réaliser des techniques de biologie moléculaire (PCR, séquençage), compiler et structurer les données expérimentales, et veiller à l'application stricte des règles de biosécurité.",
        structures: "Instituts nationaux de recherche (IRCB, INRAB), laboratoires universitaires de recherche, et centres d'essais cliniques internationaux."
      },
      {
        titre: "Contrôle qualité biologique",
        role: "Auditeur et technicien spécialisé garant de la sécurité microbiologique et de la conformité biologique des produits de santé ou de consommation.",
        actions: "Réaliser des tests de stérilité et de détection d'endotoxines sur les intrants médicaux, analyser la pureté biologique de l'eau et des produits manufacturés, et documenter les processus d'assurance qualité.",
        structures: "Agence Béninoise du Médicament (ABMED), Agence Béninoise de Sécurité Sanitaire des Aliments (ABSSA), et industries pharmaceutiques et cosmétiques."
      }
    ]
  },

  {
    id: "uac-epac-genie-alimentaire",
    nom: "Génie de Technologie Alimentaire",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Industries alimentaires",
        role: "Ingénieur ou technicien de procédé chargé de concevoir, d'optimiser et de superviser les lignes industrielles de transformation des matières premières.",
        actions: "Définir les diagrammes de fabrication, paramétrer les équipements thermiques et mécaniques (pasteurisateurs, autoclaves, broyeurs), optimiser les rendements matières, et gérer les flux de production.",
        structures: "Brasseries (Sobebra), usines de raffinage d'huile, complexes de transformation de fruits (jus d'ananas), et minoteries."
      },
      {
        titre: "Structure chargée des normes",
        role: "Cadre technique ou inspecteur veillant à l'harmonisation, à l'application et au contrôle des standards de qualité agroalimentaires au niveau national.",
        actions: "Rédiger et réviser les référentiels de normes alimentaires, inspecter les sites industriels et artisanaux de production, et auditer les dossiers de certification de produits pour l'accès aux marchés.",
        structures: "Agence Nationale de Normalisation, de Métrologie et de Contrôle Qualité (ANM), ministères du Commerce et de l'Industrie, et agences douanières."
      },
      {
        titre: "Audit et conseil en agroalimentaire",
        role: "Expert indépendant ou consultant en cabinet, accompagnant les structures dans la mise en conformité de leurs processus de fabrication.",
        actions: "Concevoir et implémenter des systèmes de management de la sécurité des aliments (ISO 22000, HACCP), réaliser des audits à blanc, former le personnel aux bonnes pratiques d'hygiène (BPH), et optimiser les flux logistiques.",
        structures: "Cabinets de conseil en ingénierie qualité (QHSE), bureaux d'études internationaux, et organismes de certification (SGS, Bureau Veritas)."
      },
      {
        titre: "Chef de production",
        role: "Manager opérationnel responsable du pilotage quotidien d'un atelier ou d'une usine de transformation agroalimentaire.",
        actions: "Planifier les plannings de production en fonction des commandes, manager les équipes d'opérateurs, suivre les indicateurs clés de performance (TRS, taux de rebuts), et garantir le respect absolu des délais et des coûts.",
        structures: "Unités de transformation agro-industrielles de moyenne et grande taille, laiteries industrielles, et usines de conditionnement."
      }
    ]
  },

  {
    id: "uac-epac-prod-sante-animale",
    nom: "Production et Santé animales",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Cliniques et pharmacies vétérinaires",
        role: "Praticien assistant ou gestionnaire de structure de soins vétérinaires, expert en santé animale et en dispensation thérapeutique.",
        actions: "Diagnostiquer et traiter les affections médicales des animaux de ferme et de compagnie, effectuer des chirurgies de routine, gérer l'approvisionnement des stocks de médicaments vétérinaires, et conseiller les clients.",
        structures: "Cliniques vétérinaires privées, pharmacies et comptoirs vétérinaires agréés, et réseaux professionnels de mandataires."
      },
      {
        titre: "Abattoirs et contrôle des produits halieutiques",
        role: "Inspecteur de salubrité publique veillant à l'hygiène des viandes et des produits de la pêche destinés à la consommation humaine.",
        actions: "Réaliser des inspections ante et post-mortem sur le bétail aux abattoirs, contrôler la fraîcheur et la conformité sanitaire des poissons et crustacés sur les marchés et débarcadères, et saisir les denrées impropres.",
        structures: "Abattoirs municipaux et industriels, directions départementales de l'élevage et de la pêche (DDAEP), et postes de contrôle frontaliers."
      },
      {
        titre: "Industries agro-alimentaires animales",
        role: "Ingénieur ou technicien de production spécialisé dans la formulation, la fabrication et le contrôle des aliments pour le bétail et l'aquaculture.",
        actions: "Formuler des rations alimentaires équilibrées sur logiciel de calcul, manager l'unité industrielle de granulation ou de broyage, auditer la qualité nutritionnelle des matières premières, et gérer la traçabilité des lots.",
        structures: "Usines de fabrication d'aliments de bétail (provenderies industrielles), et fermes de production à grande échelle intégrées."
      },
      {
        titre: "Fermes agro-pastorales",
        role: "Directeur technique ou entrepreneur d'exploitation pilotant la conduite globale des élevages et la rentabilité de la structure.",
        actions: "Planifier la reproduction et le renouvellement du cheptel (insémination, gestion des accouplements), élaborer et appliquer le plan de prophylaxie médicale et sanitaire, et piloter les indicateurs de productivité technique.",
        structures: "Grands complexes d'élevage (avicoles, bovins, porcins), ranches de production de viande ou de lait, et start-ups pastorales."
      }
    ]
  },

  {
    id: "uac-epac-genie-environnement",
    nom: "Génie de l'Environnement",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Aménagement et protection de l'environnement",
        role: "Ingénieur d'études environnementales chargé de planifier des actions de préservation des écosystèmes et de lutte contre la dégradation des milieux.",
        actions: "Concevoir des projets de restauration des sols et de reboisement, délimiter et aménager des zones tampons écologiques, et coordonner la mise en œuvre de programmes locaux de gestion durable des ressources naturelles.",
        structures: "Ministère du Cadre de Vie et des Transports, mairies (directions de l'environnement), agences de protection de la nature, et ONG écologistes."
      },
      {
        titre: "Assainissement",
        role: "Spécialiste des infrastructures techniques de traitement des eaux, de gestion des déchets et de lutte contre les pollutions urbaines.",
        actions: "Dimensionner et superviser l'exploitation de stations d'épuration des eaux usées (STEP), modéliser les réseaux de drainage pluvial, et optimiser les schémas directeurs de collecte, tri et valorisation des déchets solides.",
        structures: "Société de Gestion des Déchets et de la Salubrité (SGDS-Bénin), Sociétés de distribution d'eau (SONEB), et entreprises de travaux publics (BTP)."
      },
      {
        titre: "Bureau d'études d'impact environnemental",
        role: "Consultant ou chargé d'études chargé d'évaluer scientifiquement les répercussions écologiques des projets d'infrastructures majeurs.",
        actions: "Réaliser des Études d'Impact Environnemental et Social (EIES) complètes, mener des campagnes de mesures de pollution (air, eau, bruit), et concevoir des Plans de Gestion Environnementale et Sociale (PGES).",
        structures: "Bureaux d'études nationaux et internationaux en environnement, Agence Béninoise pour l'Environnement (ABE), et cabinets d'ingénierie-conseil."
      },
      {
        titre: "Cabinet QHSE",
        role: "Responsable ou auditeur intégré, garant du respect des normes de Qualité, Hygiène, Sécurité et Environnement au sein d'une organisation.",
        actions: "Mettre en place et auditer des systèmes de management intégrés (ISO 14001, ISO 45001), évaluer les risques professionnels sur les postes de travail, veiller à la gestion sécurisée des déchets dangereux, et animer les causeries sécurité.",
        structures: "Grands chantiers de construction, industries cimentières, entreprises textiles, et cabinets d'expertise QHSE."
      }
    ]
  },

  {
    id: "uac-epac-imagerie-medicale",
    nom: "Génie d'Imagerie médicale et de Radiobiologie",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Radiologie et échographie dans les centres hospitaliers",
        role: "Manipulateur et technicien médico-technique spécialisé dans l'acquisition d'images du corps humain à des fins diagnostiques.",
        actions: "Accueillir et installer le patient, paramétrer les consoles de radiographie standard, de scanner (TDM), d'IRM ou d'échographie, administrer les produits de contraste sous protocole médical, et veiller à la qualité optimale des clichés.",
        structures: "Centres Hospitaliers Universitaires (CNHU-HKM), Centres Hospitaliers Départementaux (CHD), et cabinets d'imagerie médicale privés."
      },
      {
        titre: "Recherche en radiobiologie",
        role: "Assistant de recherche scientifique étudiant les effets des rayonnements ionisants sur les organismes vivants et les tissus biologiques.",
        actions: "Mettre en œuvre des protocoles expérimentaux d'irradiation, analyser les altérations cellulaires et chromosomiques en laboratoire, et participer au développement de techniques de radioprotection innovantes.",
        structures: "Laboratoires de recherche universitaires, instituts de cancérologie, et agences de sûreté ou de réglementation nucléaire."
      },
      {
        titre: "Technicien en imagerie médicale",
        role: "Professionnel de santé responsable de l'application rigoureuse des règles de dosimétrie et de la gestion technique du plateau d'imagerie.",
        actions: "Assurer la dosimétrie des patients et du personnel, configurer les dispositifs de radioprotection (tabliers de plomb, paravents), et superviser le contrôle de qualité initial et périodique des émetteurs de rayons X.",
        structures: "Services de radiologie des hôpitaux de zone, centres de radiothérapie, et organismes de contrôle environnemental et sanitaire."
      }
    ]
  },

  {
    id: "uac-epac-genie-civil",
    nom: "Génie Civil",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E", "F4"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Chefs de chantiers",
        role: "Maître d'œuvre opérationnel de terrain, chargé de coordonner l'exécution quotidienne des travaux d'un ouvrage de construction.",
        actions: "Organiser le travail des équipes d'ouvriers, veiller à l'approvisionnement des matériaux (ciment, gravier, aciers), contrôler la conformité de la mise en œuvre (ferraillage, coffrage, coulage du béton), et faire respecter les règles de sécurité.",
        structures: "Entreprises de grands travaux de BTP, PME de construction immobilière, et chantiers d'infrastructures publiques."
      },
      {
        titre: "Conducteurs des travaux",
        role: "Superviseur technico-économique responsable de la gestion administrative, financière et humaine de un ou plusieurs chantiers.",
        actions: "Planifier les calendriers d'avancement des travaux, contrôler les budgets d'exécution et valider les factures des sous-traitants, participer aux réunions de chantier avec le maître d'ouvrage, et manager les chefs de chantiers.",
        structures: "Grandes entreprises de BTP (ex: Sogea-Satom, Colas), cabinets de gestion de projets immobiliers, et bureaux de contrôle technique."
      },
      {
        titre: "Techniciens d'étude en entreprise",
        role: "Calculateur et projeteur en bureau d'études, chargé de modéliser les structures et de quantifier les ressources nécessaires.",
        actions: "Réaliser les calculs de dimensionnement des structures en béton armé ou charpente métallique, dessiner les plans d'exécution sur logiciels CAO/DAO (AutoCAD, Robot Structural Analysis), et rédiger les devis quantitatifs et estimatifs.",
        structures: "Bureaux d'études structures, cabinets d'architecture, et cellules d'études techniques intégrées des entreprises de construction."
      },
      {
        titre: "BTP et infrastructures",
        role: "Technicien supérieur ou chargé d'études au sein des services publics ou parapublics d'aménagement et de gestion du patrimoine bâti.",
        actions: "Superviser la maintenance et la réhabilitation des infrastructures routières, routières ou portuaires, instruire les dossiers de marchés publics, et auditer l'état technique des bâtiments institutionnels.",
        structures: "Ministère du Cadre de Vie et des Transports, Directions Générales des Infrastructures, et directions techniques des mairies."
      }
    ]
  },

  {
    id: "uac-epac-genie-electrique",
    nom: "Génie Électrique",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E", "F2", "F3"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Sociétés d'électricité",
        role: "Ingénieur ou technicien d'exploitation chargé de la gestion opérationnelle des réseaux de production, de transport et de distribution d'énergie.",
        actions: "Superviser le fonctionnement des centrales électriques ou des sous-stations de transformation, manœuvrer les organes de coupure et de protection, localiser et coordonner la réparation des avaries sur les lignes haute/basse tension.",
        structures: "Société Béninoise d'Énergie Électrique (SBEE), Communauté Électrique du Bénin (CEB), et entreprises de production d'énergies renouvelables."
      },
      {
        titre: "Usines",
        role: "Technicien d'automatismes et de distribution d'énergie responsable de l'alimentation électrique stable de l'appareil de production industrielle.",
        actions: "Concevoir et câbler les armoires de distribution et de commande, configurer et programmer les variateurs de vitesse et les automates industriels, et optimiser la consommation d'énergie (facteur de puissance).",
        structures: "Usines de transformation (cimenteries, textiles, agroalimentaires), et complexes industriels automatisés."
      },
      {
        titre: "Cabinets d'experts (suivi, contrôle, audit)",
        role: "Auditeur technique et inspecteur de conformité veillant à la sécurité, aux normes et à l'efficacité énergétique des installations.",
        actions: "Réaliser des audits énergétiques complets sur des sites industriels ou tertiaires, inspecter la conformité des installations électriques neuves avant mise en service, et tester les dispositifs de mise à la terre et de protection des personnes.",
        structures: "Bureaux de contrôle et d'inspection (Contrôle Technique, Bureau Veritas, SGS), et cabinets d'expertise en efficacité énergétique."
      },
      {
        titre: "Maintenance industrielle",
        role: "Responsable ou technicien supérieur de maintenance électrique chargé de minimiser le taux de panne des équipements de production.",
        actions: "Élaborer et appliquer les plannings de maintenance préventive sur les moteurs, transformateurs et génératrices, diagnostiquer rapidement les pannes complexes à l'aide d'appareils de mesure (multimètres, oscilloscopes), et remplacer les composants défectueux.",
        structures: "Services de maintenance des grandes industries, ports, aéroports, et sociétés spécialisées en maintenance multitechnique."
      }
    ]
  },

  {
    id: "uac-epac-genie-mecanique",
    nom: "Génie Mécanique et Énergétique",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E", "F1"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Maintenance industrielle",
        role: "Technicien supérieur responsable de la disponibilité opérationnelle, de la fiabilité et de la réparation mécanique des machines de production.",
        actions: "Réaliser les alignements d'arbres, les vidanges et les remplacements d'organes d'usure (roulements, engrenages, joints), diagnostiquer les vibrations ou anomalies thermiques, et piloter les interventions lourdes lors des arrêts d'usine.",
        structures: "Unités de production industrielle (brasseries, usines d'égrenage de coton, cimenteries), et entreprises de maintenance mécanique."
      },
      {
        titre: "Designer industriel",
        role: "Technicien de conception mécanique modélisant des pièces, sous-ensembles cinématiques ou installations thermiques complexes.",
        actions: "Étudier la faisabilité technique d'un produit, réaliser la modélisation 3D et les plans d'ensemble/détails sur logiciels CAO (SolidWorks, Catia), et effectuer des simulations de résistance des matériaux (RDM).",
        structures: "Bureaux d'études industriels, start-ups de hardware, et entreprises de chaudronnerie et de construction mécanique."
      },
      {
        titre: "Production de pièces",
        role: "Superviseur d'atelier d'usinage et de fabrication mécanique guidant la transformation des matériaux bruts en produits finis.",
        actions: "Définir les gammes de fabrication, programmer et configurer les machines-outils à commande numérique (MOCN) ou conventionnelles (tours, fraiseuses), concevoir les outillages de positionnement, et encadrer les équipes d'opérateurs.",
        structures: "Ateliers de construction mécanique, chantiers navals, usines de fabrication métallique, et structures de prototypage."
      },
      {
        titre: "Bureaux d'études et méthodes",
        role: "Technicien des méthodes chargé d'industrialiser les produits et de rationaliser les processus de fabrication ou les installations énergétiques.",
        actions: "Rédiger les fiches d'instructions de montage, calculer les temps de fabrication et optimiser l'implantation des postes de travail (layout), et concevoir des systèmes de fluides industriels (vapeur, air comprimé, climatisation).",
        structures: "Cabinets d'ingénierie-conseil, directions industrielles, et bureaux d'études spécialisés en thermique et climatisation industrielle."
      },
      {
        titre: "Contrôle de qualité",
        role: "Inspecteur qualité veillant à la stricte conformité dimensionnelle, géométrique et métallurgique des pièces fabriquées.",
        actions: "Utiliser des instruments de mesure de haute précision (pieds à coulisse, micromètres, machines tridimensionnelles), réaliser des contrôles non destructifs (CND : ressuage, magnétoscopie, ultrasons), et valider les certificats de matière.",
        structures: "Services contrôle qualité des usines de pointe, organismes de certification technique, et laboratoires de métrologie mécanique."
      }
    ]
  },

  {
    id: "uac-epac-genie-info-telecom",
    nom: "Génie Informatique et Télécom",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E", "F2"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Réseaux télécoms",
        role: "Ingénieur ou technicien d'infrastructures chargé du déploiement, de la configuration et du maintien opérationnel des réseaux de télécommunication.",
        actions: "Superviser le déploiement de liaisons par fibre optique, faisceaux hertziens ou liaisons satellites, configurer les équipements de cœur de réseau (routeurs, commutateurs, DSLAM), et optimiser la qualité de service (QoS).",
        structures: "Opérateurs de réseaux mobiles (MTN, Moov, SBIN), fournisseurs d'accès internet (FAI), et équipementiers télécoms."
      },
      {
        titre: "Cabinets d'experts",
        role: "Consultant technique ou auditeur réseau réalisant des diagnostics de performance et de sécurité sur les infrastructures d'information.",
        actions: "Auditer l'architecture réseau des clients, identifier les goulets d'étranglement ou vulnérabilités de routage, concevoir des plans d'évolution vers le cloud ou la SD-WAN, et rédiger les cahiers des charges techniques.",
        structures: "Cabinets d'audit et de conseil IT, entreprises de services du numérique (ESN), et intégrateurs de solutions de télécommunication."
      },
      {
        titre: "Technicien dans les usines",
        role: "Responsable des réseaux industriels et de l'interconnexion des systèmes automatisés de production.",
        actions: "Déployer et maintenir les bus de terrain et réseaux Ethernet industriels (Profinet, Modbus), assurer l'interface réseau entre les automates (PLC) et les systèmes de supervision (SCADA), et sécuriser les accès distants de télémaintenance.",
        structures: "Usines hautement automatisées, industries de transformation continue, et entreprises d'intégration de systèmes d'automatisation."
      },
      {
        titre: "Administrateur réseau",
        role: "Gestionnaire système et réseau garant de la connectivité, de la sécurité informatique et de la disponibilité des services réseau de l'entreprise.",
        actions: "Gérer l'annuaire d'entreprise (Active Directory), configurer les VLAN, les pare-feu d'extrémité et les serveurs de messagerie/fichiers, surveiller les trafics réseau via des outils de monitoring, et assister les utilisateurs au quotidien.",
        structures: "Directions des Systèmes d'Information (DSI) des banques, administrations publiques, universités, et moyennes/grandes entreprises."
      }
    ]
  },

  {
    id: "uac-epac-genie-chimique",
    nom: "Génie Chimique procédés",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Unités de production",
        role: "Technicien ou ingénieur d'exploitation supervisant les opérations physiques et chimiques de transformation industrielle des matières premières.",
        actions: "Piloter et réguler le fonctionnement des réacteurs, colonnes de distillation, échangeurs thermiques et filtres, analyser les paramètres de marche (pression, température, pH), et ajuster le débit des réactifs.",
        structures: "Usines de raffinage d'huile, cimenteries, industries chimiques, et usines de production d'engrais ou d'intrants industriels."
      },
      {
        titre: "Consultant en production et analyse",
        role: "Expert en génie des procédés réalisant des analyses physico-chimiques avancées et optimisant les bilans de matière et d'énergie.",
        actions: "Modéliser des cinétiques de réactions ou transferts thermiques sur logiciel, réaliser des analyses par chromatographie ou spectroscopie en laboratoire, et conseiller les usines sur la réduction de leurs pertes de matières.",
        structures: "Cabinets d'expertise industrielle, laboratoires d'analyses physico-chimiques indépendants, et centres de recherche appliquée."
      },
      {
        titre: "Sécurité, hygiène et environnement",
        role: "Responsable ou ingénieur HSE spécialisé dans la gestion des risques technologiques et le traitement des effluents industriels.",
        actions: "Élaborer des études de dangers et des plans d'opération internes (POI), superviser le bon fonctionnement de la station de traitement des rejets liquides ou gazeux, et veiller au stockage sécurisé des produits chimiques dangereux.",
        structures: "Directions QHSE des sites industriels, agences de protection de l'environnement (ABE), et cabinets d'audit des risques."
      },
      {
        titre: "Industries agroalimentaire et pharmaceutique",
        role: "Technicien de procédés spécialisé dans la conduite de lignes de production soumises à de strictes exigences d'hygiène et de formulation pure.",
        actions: "Superviser les processus de fermentation, d'extraction, de séchage ou de conditionnement stérile, appliquer les procédures de nettoyage en place (NEP), et valider la traçabilité physico-chimique de chaque lot de fabrication.",
        structures: "Laboratoires pharmaceutiques, usines de boissons et brasseries, complexes laitiers, et savonneries industrielles."
      }
    ]
  },

  {
    id: "uac-epac-machinisme-agricole",
    nom: "Machinisme Agricole",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E", "F3"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Fabrication mécanique",
        role: "Technicien supérieur ou concepteur mécanique dédié à la création et à la fabrication d'outils et équipements agricoles adaptés au contexte local.",
        actions: "Concevoir des prototypes d'équipements (égreneuses, batteuses, presses), dessiner les plans mécaniques, sélectionner les aciers appropriés, et superviser les opérations d'assemblage, soudage et chaudronnerie mécanique.",
        structures: "Entreprises de construction mécanique, structures d'innovation technologique agricole, et centres de prototypage."
      },
      {
        titre: "Parcs machines",
        role: "Gestionnaire logistique et technique de flottes d'engins, de tracteurs et d'équipements de manutention ou de travaux agricoles.",
        actions: "Planifier l'affectation et le déploiement des machines sur les périmètres agricoles, gérer le stock de pièces détachées et de consommables, suivre le taux de disponibilité des engins, et optimiser la gestion du carburant.",
        structures: "Société Nationale de Mécanisation Agricole (SoNaMA), coopératives agricoles motorisées, et grands domaines de production rizicole ou sucrière."
      },
      {
        titre: "Contrôle qualité",
        role: "Inspecteur technique qualifié veillant à la conformité réglementaire, mécanique et sécuritaire du matériel agricole importé ou fabriqué.",
        actions: "Réaliser des essais de performance et de traction sur banc d'épreuve, évaluer la sécurité d'utilisation des transmissions et systèmes hydrauliques, et délivrer des procès-verbaux de conformité technique.",
        structures: "Centres nationaux d'essais du matériel agricole, agences de normalisation (ANM), et entreprises d'importation de machines."
      },
      {
        titre: "Maintenance des engins agricoles",
        role: "Chef d'atelier de maintenance spécialisé dans le diagnostic et la réparation mécanique, hydraulique et électrique des machines agricoles.",
        actions: "Diagnostiquer les pannes sur les circuits d'injection diesel, réparer les pompes et distributeurs hydrauliques de relevage, effectuer la révision des transmissions (boîtes de vitesses, ponts), et coordonner la maintenance curative de terrain.",
        structures: "Ateliers de maintenance de la SoNaMA, concessions de marques de matériel agricole (ex: John Deere, Massey Ferguson), et grands garages spécialisés."
      },
      {
        titre: "Mécanisation agricole",
        role: "Conseiller technique ou chargé d'études spécialisé dans l'intégration stratégique des technologies mécaniques au sein des itinéraires culturaux.",
        actions: "Évaluer les besoins en motorisation des exploitations, former les tractoristes et conducteurs aux bonnes pratiques de labour et de semis mécanisé, et mener des études de rentabilité sur l'adoption d'outils de mécanisation.",
        structures: "Agences Territoriales de Développement Agricole (ATDA), ONG de développement rural, et bureaux d'études en ingénierie agronomique."
      }
    ]
  },

  {
    id: "uac-epac-genie-biomedical",
    nom: "Génie Biomédical (Maintenance Biomédicale et Hospitalière)",
    etablissement: "École Polytechnique d'Abomey-Calavi (EPAC)",
    universite: "UAC",
    series_autorisees: ["C", "D", "E", "F2", "F3"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Technicien de laboratoire des centres de santé",
        role: "Technicien expert responsable du paramétrage, de l'étalonnage et du parfait fonctionnement technique des instruments de diagnostic biologique.",
        actions: "Assurer la maintenance de précision des automates d'hématologie et de biochimie, configurer les microscopes et centrifugeuses, installer les chaînes analytiques automatisées, et gérer les interfaces informatiques de remontée de données.",
        structures: "Laboratoires de biologie médicale des CHU et CHD, grands centres d'analyses privés, et instituts de recherche médicale."
      },
      {
        titre: "Maintenance hospitalière",
        role: "Responsable ou technicien supérieur de maintenance biomédicale veillant à la continuité de service des dispositifs médicaux des blocs opératoires et des soins critiques.",
        actions: "Mener les interventions préventives et curatives sur les respirateurs de réanimation, les tables d'opération, les moniteurs de surveillance et les pousse-seringues, et coordonner la gestion des réseaux de fluides médicaux (oxygène, vide).",
        structures: "Services biomédicaux internes des hôpitaux (CNHU, CHD, hôpitaux de zone), et sociétés prestataires en maintenance médicale."
      },
      {
        titre: "Contrôle des équipements médicaux et vétérinaires",
        role: "Auditeur métrologique ou inspecteur de conformité chargé de valider la sécurité électrique et la précision fonctionnelle des équipements de santé.",
        actions: "Réaliser des tests de sécurité électrique sur les dispositifs reliés au patient, calibrer les puissances des bistouris électriques ou des défibrillateurs à l'aide de simulateurs de contrôle, et auditer les registres de traçabilité de maintenance.",
        structures: "Ministère de la Santé (Direction des Infrastructures et Équipements), cabinets d'audit biomédical privés, et agences de contrôle sanitaire."
      }
    ]
  },

  {
    id: "uac-ceforp-dynamique-population",
    nom: "Dynamique de Population et Planification Régionale",
    etablissement: "Centre de Formation et de Recherche en matière de Population (CEFORP)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "hg", "anglais"],
    debouches: [
      {
        titre: "Spécialiste en développement local",
        role: "Cadre technique d'aménagement territorial chargé d'intégrer les variables démographiques dans la planification des actions de développement.",
        actions: "Concevoir des programmes d'accès aux services de base (écoles, santé) corrélés à la croissance démographique locale, animer les ateliers de planification participative avec les communautés, et évaluer la performance des projets locaux.",
        structures: "Directions de planification des mairies, projets de développement communautaire décentralisés, et ONG de développement local."
      },
      {
        titre: "Technicien supérieur en planification",
        role: "Analyste et chargé d'études macro-démographiques chargé d'appuyer la formulation des politiques sectorielles de l'État.",
        actions: "Analyser les indicateurs démographiques (fécondité, mortalité, migrations), projeter l'évolution des structures de la population à court et long terme, et rédiger des notes de cadrage pour les plans de développement nationaux.",
        structures: "Ministère du Plan et du Développement, Institut National de la Statistique et de la Démographie (INStaD), et directions d'études (DPP) des ministères."
      },
      {
        titre: "Gestionnaire de base de données",
        role: "Administrateur de données démographiques et socio-économiques chargé de structurer et d'exploiter les grands volumes d'enquêtes.",
        actions: "Concevoir le schéma relationnel des bases de données d'enquêtes, nettoyer et apurer les fichiers de données brutes issus des recensements, et générer des requêtes statistiques complexes d'analyse transversale.",
        structures: "INStaD, instituts de recherche en sciences sociales (CEFORP), observatoires de la santé, et grandes agences de sondage."
      },
      {
        titre: "Technicien en SIG et cartographie",
        role: "Géomaticien spécialisé dans la modélisation et la représentation spatiale des données démographiques et des infrastructures.",
        actions: "Créer des cartes thématiques dynamiques de densité de population ou de couverture sanitaire sur logiciels SIG (QGIS, ArcGIS), géo-référencer les données d'infrastructures locales, et réaliser des analyses spatiales d'accessibilité.",
        structures: "Bureaux d'études en aménagement du territoire, agences nationales de cartographie, mairies, et directions régionales de l'urbanisme."
      }
    ]
  },

  {
    id: "uac-herci-negoce",
    nom: "Négoce International",
    etablissement: "Haute École Régionale de Commerce International (HERCI)",
    universite: "UAC",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "anglais", "eco"],
    debouches: [
      {
        titre: "Technicien en négoce international",
        role: "Gestionnaire opérationnel de la chaîne logistique et documentaire des transactions commerciales transnationales.",
        actions: "Assurer la conformité des opérations par rapport aux Incoterms, rédiger et assembler la liasse documentaire d'exportation (crédits documentaires, connaissements, certificats d'origine), et suivre le dédouanement des marchandises.",
        structures: "Sociétés de négoce (trading houses), cabinets de commissionnaires agréés en douane (transitaires), et grands groupes industriels importateurs."
      },
      {
        titre: "Agent commercial import-export",
        role: "Commercial export chargé de développer le portefeuille de clients ou fournisseurs internationaux de l'entreprise.",
        actions: "Mener des prospections sur les marchés extérieurs, analyser la concurrence internationale, formuler des offres commerciales adaptées aux spécificités réglementaires et logistiques locales, et négocier les conditions de vente.",
        structures: "PME exportatrices de produits locaux (anacarde, karité, coton), centrales d'achat, et directions commerciales des multinationales."
      },
      {
        titre: "Acheteur international",
        role: "Sourcing manager international chargé de négocier les meilleurs contrats d'approvisionnement mondiaux en matières premières ou marchandises.",
        actions: "Identifier et auditer des fournisseurs internationaux compétitifs, lancer des appels d'offres internationaux, négocier les prix de gros, les conditions de paiement à l'international et les clauses de livraison, et gérer le risque de change.",
        structures: "Grandes industries manufacturières, chaînes de grande distribution, entreprises de BTP, et plateformes de commerce international."
      },
      {
        titre: "Responsable de force de vente",
        role: "Manager de proximité pilotant l'équipe commerciale et veillant à l'atteinte des objectifs de chiffre d'affaires sur une zone géographique définie.",
        actions: "Définir les secteurs de vente et les objectifs individuels des commerciaux, concevoir des outils d'aide à la vente et d'animation commerciale, analyser les tableaux de bord d'activité, et encadrer le suivi des grands comptes.",
        structures: "Directions commerciales des banques, filiales de multinationales de grande consommation, et agences de distribution exclusive."
      }
    ]
  },

  {
    id: "uac-herci-gestion-relations",
    nom: "Gestion des Relations Maritimes Internationales",
    etablissement: "Haute École Régionale de Commerce International (HERCI)",
    universite: "UAC",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "anglais", "eco"],
    debouches: [
      {
        titre: "Gestionnaire des relations maritimes internationales",
        role: "Cadre stratégique chargé de superviser les accords bilatéraux, la réglementation internationale et les partenariats entre acteurs du secteur maritime.",
        actions: "Négocier des accords d'exploitation ou de coopération portuaire, veiller au respect des conventions internationales (OMI, SOLAS, MARPOL), et coordonner les relations avec les institutions maritimes régionales.",
        structures: "Ministère de l'Économie Maritime, Agence Nationale de la Marine Marchande, organisations maritimes internationales, et grandes compagnies d'armement."
      },
      {
        titre: "Courtier international",
        role: "Intermédiaire expert chargé de négocier et de conclure les contrats d'affrètement ou de vente de navires pour le compte de ses clients.",
        actions: "Mettre en relation les armateurs et les chargeurs, négocier les taux de fret et les conditions de la charte-partie, analyser les fluctuations du marché du transport, et gérer les litiges commerciaux contractuels.",
        structures: "Sociétés de courtage maritime, cabinets de négoce international, bourses de fret, et compagnies de commerce mondial."
      },
      {
        titre: "Logistique portuaire",
        role: "Coordonnateur opérationnel responsable de l'optimisation des flux de marchandises, du stockage et de la manutention au sein de l'enceinte portuaire.",
        actions: "Planifier l'accueil des navires à quai, superviser le déchargement et le chargement des conteneurs, optimiser l'espace des parcs de stockage, et minimiser les temps d'attente (surestaries).",
        structures: "Port Autonome de Cotonou, entreprises de manutention portuaire (Sobemap, Bénin Terminal), et plateformes logistiques multimodales."
      },
      {
        titre: "Transitaire",
        role: "Architecte du transport international mandaté pour organiser la chaîne de transport de bout en bout pour le compte d'un chargeur.",
        actions: "Sélectionner les modes de transport appropriés, négocier les tarifs avec les transporteurs, assurer le suivi documentaire et douanier des cargaisons, et coordonner la livraison finale des marchandises.",
        structures: "Agences de commissionnaires agréés en douane, multinationales du transport et de la logistique (Bolloré, Maersk), et PME de transit."
      }
    ]
  },

  {
    id: "uac-herci-commerce-international",
    nom: "Commerce International",
    etablissement: "Haute École Régionale de Commerce International (HERCI)",
    universite: "UAC",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "anglais", "eco"],
    debouches: [
      {
        titre: "Chef de produits import-export",
        role: "Responsable stratégique du développement commercial, du sourcing et du positionnement d'une gamme de produits sur les marchés étrangers.",
        actions: "Analyser les marchés cibles internationaux, prospecter et auditer des fournisseurs ou distributeurs mondiaux, adapter le packaging aux réglementations locales, et piloter les marges et la rentabilité.",
        structures: "Entreprises d'import-export, grands groupes industriels, maisons de négoce, et enseignes de la grande distribution."
      },
      {
        titre: "Responsable de force de vente international",
        role: "Manager commercial supervisant les équipes de vente sur une ou plusieurs zones géographiques transfrontalières.",
        actions: "Définir la stratégie commerciale export, fixer les objectifs de vente et les budgets de prospection, animer le réseau de distributeurs étrangers, et négocier les contrats de distribution grands comptes.",
        structures: "Filiales de multinationales, PME exportatrices de produits locaux (agroalimentaire, cosmétique), et agences de distribution."
      },
      {
        titre: "Consultant en douane",
        role: "Expert juridique et technique chargé d'optimiser les opérations douanières et de sécuriser la conformité réglementaire des échanges.",
        actions: "Auditer les procédures d'import-export des entreprises, déterminer le classement tarifaire et l'origine des marchandises, conseiller sur les régimes douaniers économiques (entrepôt, perfectionnement), et assister en cas de contentieux.",
        structures: "Cabinets de conseil en commerce international, directions douanières des grandes entreprises, et grandes agences de transit."
      },
      {
        titre: "Agent commercial",
        role: "Professionnel de la négociation terrain chargé de prospecter de nouveaux clients et de développer le chiffre d'affaires d'une zone.",
        actions: "Mener des campagnes de prospection directes (B2B), présenter les offres techniques et commerciales, négocier les prix et modalités de paiement, et assurer le suivi de la relation et de la fidélisation client.",
        structures: "Sociétés de services, représentations commerciales de marques étrangères, et agences commerciales indépendantes."
      }
    ]
  },

  {
    id: "uac-injeps-developpement-communautaire",
    nom: "Développement communautaire",
    etablissement: "Institut National de la Jeunesse de l'Éducation Physique et Sportive (INJEPS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Technicien Supérieur d'Action Socio-Éducative",
        role: "Animateur et éducateur de terrain chargé de concevoir et de mettre en œuvre des projets de cohésion sociale et d'appui aux populations vulnérables.",
        actions: "Identifier les besoins socio-éducatifs des groupes (jeunes, femmes, personnes âgées), organiser des ateliers de sensibilisation, et accompagner les initiatives associatives et culturelles locales.",
        structures: "Centres de Promotion Sociale (CPS), mairies, maisons des jeunes, et associations d'action sociale."
      },
      {
        titre: "Administrateur de programmes et projets de développement",
        role: "Cadre de gestion chargé de planifier, budgétiser et piloter des programmes d'aide au développement ou d'action humanitaire.",
        actions: "Rédiger des propositions de projets pour les bailleurs de fonds, coordonner la mise en œuvre technique et logistique des activités, et manager les budgets et les ressources humaines allouées.",
        structures: "ONG nationales et internationales, agences de coopération bilatérale ou multilatérale, et institutions d'aide au développement."
      },
      {
        titre: "Chef de projets",
        role: "Manager opérationnel responsable du bon déroulement d'un projet spécifique, du cadrage initial jusqu'à la clôture.",
        actions: "Planifier les plannings d'exécution des tâches, animer les équipes opérationnelles de terrain, suivre les indicateurs de performance, et rédiger les rapports d'avancement narratifs et financiers.",
        structures: "Bureaux d'études en développement social, fondations d'entreprises, et ONG sectorielles (santé, éducation, environnement)."
      },
      {
        titre: "Spécialiste en planification locale",
        role: "Conseiller technique auprès des collectivités territoriales pour l'élaboration et le suivi des plans de développement décentralisés.",
        actions: "Animer les diagnostics communautaires participatifs, appuyer la rédaction des Plans de Développement Communaux (PDC), et veiller à la cohérence des infrastructures locales avec les orientations nationales.",
        structures: "Services de planification des mairies, groupements intercommunaux, préfectures, et ministères de la Décentralisation."
      }
    ]
  },

  {
    id: "uac-injeps-andragogie",
    nom: "Andragogie",
    etablissement: "Institut National de la Jeunesse de l'Éducation Physique et Sportive (INJEPS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Spécialiste en ingénierie de formation",
        role: "Architecte de la formation chargé de concevoir des dispositifs, parcours et référentiels pédagogiques adaptés aux adultes.",
        actions: "Analyser les besoins en compétences des organisations, rédiger les cahiers des charges de formation, concevoir les architectures pédagogiques et les modalités d'évaluation des acquis.",
        structures: "Cabinets de conseil en ressources humaines, centres de formation professionnelle, et grandes directions des ressources humaines (DRH)."
      },
      {
        titre: "Administrateur de programmes éducatifs",
        role: "Gestionnaire chargé du déploiement stratégique, budgétaire et réglementaire de projets liés à l'alphabétisation ou à l'éducation non formelle.",
        actions: "Piloter la logistique des campagnes d'alphabétisation, assurer la gestion administrative des centres d'apprentissage, et évaluer la conformité et l'impact des curricula déployés.",
        structures: "Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle (Direction de l'Alphabétisation), et ONG éducatives."
      },
      {
        titre: "Éducateur et formateur d'adultes",
        role: "Pédagogue de terrain chargé d'animer des sessions d'apprentissage et de renforcement de capacités pour un public adulte.",
        actions: "Animer des modules techniques ou transversaux, utiliser des méthodes actives et participatives (andragogiques), concevoir des supports de cours imagés ou interactifs, et accompagner individuellement les apprenants.",
        structures: "Centres de formation continue, groupements de producteurs (formations agricoles), écoles professionnelles, et agences d'insertion."
      }
    ]
  },

  {
    id: "uac-injeps-recreologie",
    nom: "Récréologie",
    etablissement: "Institut National de la Jeunesse de l'Éducation Physique et Sportive (INJEPS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Administrateur en programmes de loisir et tourisme",
        role: "Cadre technique chargé de concevoir et de promouvoir la politique des loisirs, du divertissement sain et du tourisme de masse.",
        actions: "Élaborer des schémas directeurs d'aménagement des zones de loisir, planifier des circuits touristiques attractifs, et superviser la gestion économique et logistique des infrastructures d'accueil.",
        structures: "Ministère du Tourisme, de la Culture et des Arts, agences de promotion touristique, et directions hôtelières ou de parcs d'attraction."
      },
      {
        titre: "Coordonnateur de projets récréatifs",
        role: "Manager événementiel chargé de la planification et de l'organisation d'activités, de festivals ou de programmes d'animation à grande échelle.",
        actions: "Concevoir le conducteur artistique ou technique des événements, coordonner les équipes de logistique et de sécurité, gérer le budget opérationnel, et piloter les relations avec les partenaires et sponsors.",
        structures: "Agences d'événementiel, mairies (services culturels et loisirs), complexes hôteliers et de villégiature, et clubs de vacances."
      },
      {
        titre: "Spécialiste en gestion du patrimoine touristique",
        role: "Conservateur et valorisateur chargé de la préservation et de la mise en valeur économique des sites historiques, culturels et naturels.",
        actions: "Concevoir des outils de médiation culturelle (guides, expositions), documenter l'histoire et les spécificités des sites, et piloter des projets d'aménagement éco-touristiques respectueux de l'environnement.",
        structures: "Musées nationaux, gestionnaires de sites patrimoniaux (ex: Ouidah, Abomey), ONG de tourisme durable, et parcs naturels."
      }
    ]
  },

  {
    id: "uac-injeps-entrepreneuriat-social",
    nom: "Entrepreneuriat social",
    etablissement: "Institut National de la Jeunesse de l'Éducation Physique et Sportive (INJEPS)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D"],
    matieres_clefs: ["francais", "anglais", "philo"],
    debouches: [
      {
        titre: "Spécialiste en création et gestion d'entreprises sociales",
        role: "Entrepreneur à impact pilotant une structure économique viable dont la mission principale est de résoudre un problème social ou environnemental.",
        actions: "Élaborer des modèles d'affaires hybrides (revenus commerciaux et impact social), lever des fonds d'investissement d'impact, et piloter la gouvernance participative et transparente de la structure.",
        structures: "Entreprises sociales et solidaires (ESS), start-ups à fort impact communautaire, et incubateurs de projets à utilité sociale."
      },
      {
        titre: "Consultant en économie solidaire",
        role: "Conseiller stratégique accompagnant les porteurs de projets et les institutions dans la structuration d'initiatives solidaires.",
        actions: "Réaliser des études d'opportunité et de viabilité pour l'économie inclusive, former les acteurs aux principes du commerce équitable et de la micro-finance sociale, et évaluer l'impact social des investissements.",
        structures: "Cabinets de conseil en RSE (Responsabilité Sociétale des Entreprises), agences de développement international, et réseaux d'économie solidaire."
      },
      {
        titre: "Chargé de projets associatifs",
        role: "Coordonnateur opérationnel assurant la gestion et le développement des activités d'une association ou fondation d'intérêt général.",
        actions: "Organiser les campagnes de mobilisation citoyenne ou de levée de fonds (crowdfunding), gérer la logistique des projets solidaires de proximité, et animer les réseaux de bénévoles et de membres.",
        structures: "Fondations d'entreprises, associations de solidarité nationale, et ONG engagées dans l'autonomisation des communautés."
      }
    ]
  },

  {
    id: "uac-fadec-droit",
    nom: "Droit",
    etablissement: "Faculté de Droit et de Science Politique (FADEC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G2"],
    matieres_clefs: ["francais", "anglais", "hg"],
    debouches: [
      {
        titre: "Attaché des services administratifs",
        role: "Juriste public chargé de garantir la légalité des actes administratifs et d'instruire les contentieux au sein des institutions étatiques.",
        actions: "Rédiger des projets d'arrêtés ou de circulaires, formuler des avis juridiques sur les dossiers complexes, et assurer la défense de l'administration lors de recours gracieux ou devant la chambre administrative.",
        structures: "Secrétariats généraux des ministères, mairies (directions des affaires juridiques), préfectures, et directions de la fonction publique."
      },
      {
        titre: "Juriste d'affaires et d'entreprise",
        role: "Conseiller juridique interne chargé de protéger les intérêts légaux, contractuels et financiers de sa structure.",
        actions: "Rédiger et valider les contrats commerciaux et de travail, assurer la veille réglementaire (code OHADA, droit fiscal), suivre le secrétariat juridique de la société (conseils d'administration), et gérer les pré-contentieux.",
        structures: "Banques, compagnies d'assurances, multinationales, grandes PME industrielles ou commerciales, et cabinets de conseil juridique."
      },
      {
        titre: "Auxiliaires de justice (avocat, huissier, notaire)",
        role: "Professionnel libéral du droit habilité à conseiller, représenter, défendre les usagers ou authentifier des actes juridiques.",
        actions: "Avocat : plaider et défendre les clients devant les tribunaux. Huissier : signifier les actes et exécuter les décisions de justice. Notaire : authentifier les contrats de vente immobilière, mariages ou successions.",
        structures: "Cabinets d'avocats, études de notaires, charges d'huissiers de justice (après réussite aux concours et stages professionnels légaux)."
      },
      {
        titre: "Magistrature",
        role: "Garant de l'application de la loi, chargé de trancher les litiges ou de diriger les poursuites pénales en toute impartialité.",
        actions: "Magistrat du siège : présider les audiences, analyser les conclusions juridiques et rendre des jugements ou verdicts. Magistrat du parquet (Procureur) : diriger les enquêtes de police et requérir l'application de la loi pénale.",
        structures: "Tribunaux d'Instance, Tribunaux de Première Instance, Cours d'Appel, et Cour Suprême (accessible via l'ENAM ou concours professionnels)."
      }
    ]
  },

  {
    id: "uac-fadec-sciences-politiques",
    nom: "Sciences Politiques",
    etablissement: "Faculté de Droit et de Science Politique (FADEC)",
    universite: "UAC",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G2"],
    matieres_clefs: ["francais", "anglais", "hg"],
    debouches: [
      {
        titre: "Diplomate",
        role: "Représentant officiel de l'État chargé de la mise en œuvre de la politique étrangère et de la protection des intérêts nationaux à l'étranger.",
        actions: "Négocier des traités internationaux, rédiger des analyses géopolitiques sur les pays de résidence, et assurer la protection et l'assistance des ressortissants béninois à l'étranger.",
        structures: "Ministère des Affaires Étrangères, ambassades, consulats, et représentations permanentes auprès des organisations internationales (ONU, UA)."
      },
      {
        titre: "Spécialiste des relations internationales",
        role: "Analyste ou conseiller expert en géopolitique, chargé de décrypter les dynamiques mondiales et de formuler des orientations stratégiques.",
        actions: "Suivre et analyser les crises internationales, concevoir des plaidoyers thématiques (droits humains, climat), et coordonner des projets de coopération internationale décentralisée.",
        structures: "Organisations non gouvernementales internationales, think tanks, institutions régionales (CEDEAO, UEMOA), et cabinets de conseil en stratégie."
      },
      {
        titre: "Sociologue des comportements politiques",
        role: "Chercheur ou expert en analyses quantitatives et qualitatives des dynamiques électorales, des mouvements sociaux et de l'opinion publique.",
        actions: "Concevoir et analyser des sondages d'opinion, mener des enquêtes de terrain sur l'engagement citoyen, et rédiger des rapports scientifiques ou des notes de décryptage pour les médias et partis politiques.",
        structures: "Laboratoires de recherche universitaires, instituts de sondage, cabinets de communication politique, et organisations de la société civile."
      },
      {
        titre: "Évaluateur des politiques publiques",
        role: "Auditeur stratégique chargé d'analyser l'efficacité, la pertinence et les impacts des programmes et réformes mis en œuvre par l'État.",
        actions: "Définir les critères et indicateurs d'évaluation, mener des audits de performance sur les budgets sectoriels, réaliser des enquêtes auprès des bénéficiaires, et formaliser des recommandations d'ajustement.",
        structures: "Cellules d'évaluation des ministères, Bureau de l'Évaluateur National, institutions de contrôle (Cour des Comptes), et cabinets d'audit internationaux."
      }
    ]
  },

  {
    id: "uac-faseg-seg",
    nom: "Sciences Économiques et de Gestion (Tronc commun)",
    etablissement: "Faculté des Sciences Économiques et de Gestion (FASEG)",
    universite: "UAC",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Analystes et statisticiens",
        role: "Chargé d'études économiques chargé de collecter, traiter et modéliser les données financières ou de marché pour orienter la gestion.",
        actions: "Construire des modèles économétriques simples, analyser les séries temporelles de ventes ou d'activités, concevoir des tableaux de bord de gestion, et rédiger des rapports d'analyse macro ou micro-économique.",
        structures: "Directions financières des entreprises, instituts de conjoncture économique, cabinets de conseil, et directions de planification."
      },
      {
        titre: "Comptable",
        role: "Technicien supérieur ou responsable financier garant de la régularité, de la sincérité et de la fidélité des comptes de l'organisation.",
        actions: "Enregistrer les écritures comptables quotidiennes (factures, paie, banques), établir les déclarations fiscales et sociales périodiques, participer à la clôture annuelle des comptes et à l'établissement du bilan.",
        structures: "Cabinets d'expertise comptable, services comptabilité des PME/PMI, banques, assurances, et ONG."
      },
      {
        titre: "Planificateur et gestionnaire des ressources financières",
        role: "Contrôleur de gestion ou analyste financier d'entreprise chargé d'optimiser l'utilisation des capitaux et de suivre les budgets.",
        actions: "Élaborer les budgets prévisionnels des différents départements, analyser les écarts entre le réalisé et les prévisions, optimiser la gestion de la trésorerie au jour le jour, et évaluer la rentabilité des investissements.",
        structures: "Directions Administratives et Financières (DAF) des moyennes et grandes entreprises, services de contrôle de gestion, et administrations publiques."
      },
      {
        titre: "Économiste de marché",
        role: "Analyste spécialisé dans le suivi des marchés financiers, des matières premières et de l'environnement concurrentiel sectoriel.",
        actions: "Suivre l'évolution des cours de change, des taux d'intérêt et des matières premières locales (coton, cajou), réaliser des notes de conjoncture financière, et formuler des recommandations d'achat, de vente ou de couverture de risques.",
        structures: "SGI (Sociétés de Gestion et d'Intermédiation), banques de revente ou d'investissement, et directions de la stratégie de grands groupes."
      },
      {
        titre: "Conseiller en microfinance",
        role: "Chargé d'affaires et de clientèle dédié à l'octroi et au suivi des crédits auprès des micro-entrepreneurs et groupements.",
        actions: "Étudier la viabilité technique et financière des demandes de micro-crédits, assurer le suivi régulier du remboursement des portefeuilles clients sur le terrain, et dispenser des conseils de base en gestion aux bénéficiaires.",
        structures: "Institutions de Microfinance (IMF : PADME, Alide, FECECAM), et agences d'appui au secteur informel et à l'inclusion financière."
      }
    ]
  },

  {
    id: "uac-faseg-eco-stats",
    nom: "Économie et Statistiques Appliquées",
    etablissement: "Faculté des Sciences Économiques et de Gestion (FASEG)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Statisticien",
        role: "Expert en méthodologie quantitative chargé de concevoir et de piloter l'ensemble de la chaîne de production des données statistiques.",
        actions: "Définir les plans de sondage et la méthodologie des enquêtes, concevoir les questionnaires, superviser la collecte de données sur le terrain, réaliser les traitements de redressement et analyser les résultats complexes.",
        structures: "Institut National de la Statistique et de la Démographie (INStaD), observatoires économiques sectoriels, et services statistiques des ministères."
      },
      {
        titre: "Économètre",
        role: "Spécialiste de la modélisation mathématique appliqué à la vérification empirique des théories économiques et aux prévisions.",
        actions: "Spécifier et estimer des modèles de régression linéaire ou multivariée sur logiciels spécialisés (Stata, R, EViews), valider la robustesse statistique des estimateurs, et simuler l'impact de chocs économiques ou politiques.",
        structures: "Banque Centrale des États de l'Afrique de l'Ouest (BCEAO), laboratoires de recherche en économie, et directions des études macroéconomiques."
      },
      {
        titre: "Analyste économiste",
        role: "Chargé d'études stratégiques transformant les indicateurs statistiques et économétriques en notes de synthèse décisionnelles.",
        actions: "Rédiger des notes d'analyse sur l'inflation, la croissance ou le commerce extérieur, concevoir des modèles prévisionnels de croissance, et participer aux travaux de cadrage macroéconomique pour l'élaboration de la loi de finances.",
        structures: "Ministère de l'Économie et des Finances, banques commerciales, représentations d'institutions financières internationales (Banque Mondiale, FMI)."
      },
      {
        titre: "Conseiller en stratégies et prise de décisions",
        role: "Consultant senior apportant des éclairages basés sur la donnée chiffrée pour optimiser les choix stratégiques d'institutions publiques ou privées.",
        actions: "Réaliser des analyses coûts-bénéfices d'envergure, mener des études de positionnement concurrentiel basées sur le Big Data, et accompagner les décideurs dans l'évaluation des risques et scénarios stratégiques futurs.",
        structures: "Cabinets de conseil stratégique de premier plan, directions générales des grandes entreprises (Télécoms, Énergie), et cabinets ministériels."
      }
    ]
  },

  {
    id: "uac-faseg-stcf",
    nom: "Sciences et Techniques Comptables et Financières (STCF)",
    etablissement: "Faculté des Sciences Économiques et de Gestion (FASEG)",
    universite: "UAC",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Auditeur comptable ou financier",
        role: "Professionnel indépendant ou interne chargé de vérifier la sincérité, la conformité et la régularité des états financiers d'une organisation.",
        actions: "Examiner les registres comptables, vérifier les pièces justificatives, évaluer les risques financiers, contrôler l'application des normes SYSCOHADA, et rédiger des rapports d'audit contenant des recommandations stratégiques.",
        structures: "Cabinets d'expertise comptable et d'audit (nationaux et internationaux), grandes entreprises, et institutions publiques de contrôle."
      },
      {
        titre: "Contrôleur interne en banque et entreprise",
        role: "Garant de la maîtrise des risques opérationnels et de la mise en œuvre efficace des procédures de gestion internes.",
        actions: "Définir et actualiser les cartographies des risques, concevoir des plans de contrôle permanent, veiller à la conformité réglementaire (directives BCEAO pour les banques), et mener des investigations en cas d'anomalies.",
        structures: "Banques commerciales, établissements de microfinance, compagnies d'assurance, et grandes entreprises commerciales ou industrielles."
      },
      {
        titre: "Agent comptable",
        role: "Comptable public ou d'entreprise doté d'une responsabilité personnelle et pécuniaire sur la manipulation des fonds et valeurs.",
        actions: "Prendre en charge et recouvrer les recettes, payer les dépenses visées et régulières, tenir la comptabilité générale de la structure, et élaborer les états financiers de synthèse en fin d'exercice.",
        structures: "Établissements publics à caractère public ou commercial (EPA/EPIC), agences de l'État, grands projets de développement, et PME."
      },
      {
        titre: "Expert fiscal",
        role: "Conseiller juridique et financier spécialisé dans la législation fiscale, chargé d'optimiser la gestion des impôts d'une structure en toute légalité.",
        actions: "Établir ou réviser les déclarations fiscales complexes, assister l'entreprise lors des contrôles et redressements diligentés par la Direction Générale des Impôts (DGI), et structurer les montages financiers des investissements.",
        structures: "Cabinets de conseil fiscal et juridique, directions fiscales des multinationales, et cabinets d'expertise comptable."
      }
    ]
  },

  {
    id: "uac-fast-svt",
    nom: "Sciences de la Vie et de la Terre",
    etablissement: "Faculté des Sciences et Techniques (FAST)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "francais"],
    debouches: [
      {
        titre: "Enseignement des SVT",
        role: "Éducateur et pédagogue chargé de transmettre les connaissances en biologie et géologie aux élèves du secondaire.",
        actions: "Concevoir les fiches de cours selon les programmes d'études par compétences, animer les cours théoriques et les séances de travaux pratiques (TP), et évaluer les acquis des apprenants lors des compositions et devoirs.",
        structures: "Collèges et Lycées d'Enseignement Général (publics et privés), et directions départementales de l'enseignement secondaire."
      },
      {
        titre: "Technicien de laboratoire",
        role: "Opérateur technique assurant la préparation des expériences biologiques et la maintenance courante du parc instrumental.",
        actions: "Préparer les réactifs, milieux de culture et échantillons pour les manipulations, configurer les microscopes et petits automates, veiller au respect des règles de bio-sécurité, et gérer le stock de consommables.",
        structures: "Laboratoires pédagogiques universitaires, laboratoires d'analyses agro-environnementales, et lycées techniques agricoles."
      },
      {
        titre: "Institutions de recherche",
        role: "Assistant de recherche apportant son concours technique à la réalisation de programmes d'études scientifiques sur le vivant ou l'environnement.",
        actions: "Collecter et cataloguer des échantillons sur le terrain (faune, flore, roches), exécuter des protocoles de screening biologique, saisir et mettre en forme les données d'expérimentation, et entretenir les collections scientifiques.",
        structures: "Institut de Recherches Halieutiques et Océanologiques du Bénin (IRHOB), INRAB, instituts universitaires de recherche, et ONG de conservation."
      },
      {
        titre: "Écoles d'ingénieurs agronomiques",
        role: "Candidat à la spécialisation technique accédant aux parcours d'ingénieurs en agronomie ou gestion des écosystèmes grâce aux acquis scientifiques.",
        actions: "Passer les concours d'entrée ou dossiers de passerelle, suivre les formations de second cycle ou masters professionnels spécialisés en foresterie, production végétale, rurale ou animale.",
        structures: "Facultés d'agronomie (FSA/UAC, UP), écoles d'ingénieurs d'Afrique de l'Ouest, et centres d'excellence régionaux."
      }
    ]
  },

  {
    id: "uac-fast-physique-chimie",
    nom: "Physique-Chimie",
    etablissement: "Faculté des Sciences et Techniques (FAST)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Enseignement des PCT",
        role: "Professeur du secondaire chargé d'enseigner les sciences physiques, la chimie et leurs applications technologiques.",
        actions: "Élaborer les progressions pédagogiques, animer les leçons, monter les manipulations de physique et chimie (circuits électriques, dosages acido-basiques), et encadrer les clubs scientifiques des établissements.",
        structures: "Collèges et Lycées d'Enseignement Général et Technique (publics et privés), et établissements d'enseignement technique."
      },
      {
        titre: "Technicien de laboratoire",
        role: "Manipulateur scientifique réalisant des analyses physico-chimiques et des contrôles de mesures de précision en environnement sécurisé.",
        actions: "Réaliser les étalonnages des pH-mètres et conductimètres, préparer les solutions titrées, effectuer les analyses de routine sur l'eau, les sols ou les produits manufacturés, et consigner les résultats sur cahier de laboratoire.",
        structures: "Laboratoires d'analyses de la SONEB, de la douane ou d'entreprises industrielles, et laboratoires de recherche universitaire."
      },
      {
        titre: "Institutions de recherche",
        role: "Opérateur technique de recherche participant au développement de projets scientifiques en sciences des matériaux ou chimie appliquée.",
        actions: "Mettre en œuvre des protocoles de synthèse chimique ou de caractérisation physique, suivre le fonctionnement des appareillages de mesure de pointe, et contribuer à la rédaction des comptes-rendus techniques de recherche.",
        structures: "Laboratoires de recherche de la FAST, instituts nationaux des sciences de la matière, et projets de recherche sur l'énergie solaire."
      },
      {
        titre: "Écoles d'ingénieurs",
        role: "Étudiant de niveau licence poursuivant son cursus vers des diplômes d'ingénieur spécialisés par voie de passerelles académiques.",
        actions: "Préparer les dossiers d'admission pour intégrer des cycles de Master Ingénieur ou écoles de spécialisation en génie chimique, génie des procédés, ou en génie des matériaux.",
        structures: "École Polytechnique d'Abomey-Calavi (EPAC), instituts polytechniques régionaux (Bénin et sous-région), et universités technologiques."
      }
    ]
  },

  {
    id: "uac-fast-maths-info",
    nom: "Mathématiques Informatique et Applications",
    etablissement: "Faculté des Sciences et Techniques (FAST)",
    universite: "UAC",
    series_autorisees: ["C"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Enseignement des mathématiques",
        role: "Professeur de mathématiques chargé d'inculquer le raisonnement logique, l'algèbre et la géométrie aux élèves du secondaire.",
        actions: "Planifier les cours théoriques, préparer les exercices d'application gradués, évaluer les compétences en résolution de problèmes des élèves, et assurer l'accompagnement pédagogique pour les classes d'examen.",
        structures: "Collèges et Lycées d'Enseignement Général (publics et privés), et centres de formation technique."
      },
      {
        titre: "Technicien de laboratoire",
        role: "Assistant de calcul ou d'administration de plateformes de simulation et de calcul scientifique intensif.",
        actions: "Gérer le bon fonctionnement des infrastructures informatiques légères de calcul, scripter des routines de traitement mathématique (en Python ou MATLAB), et assister les utilisateurs dans l'exploitation des logiciels d'analyse.",
        structures: "Salles de calcul universitaire, centres de recherche en modélisation, et départements de statistiques des universités."
      },
      {
        titre: "Institutions de recherche",
        role: "Technicien de recherche impliqué dans la modélisation mathématique de phénomènes réels et le codage d'algorithmes complexes.",
        actions: "Contribuer au codage numérique de modèles physiques, épidémiologiques ou financiers, assurer l'archivage et le versioning des codes sources, et participer au dépouillement informatique des données de recherche.",
        structures: "Institut de Mathématiques et de Sciences Physiques (IMSP), chaires de recherche de l'UAC, et centres de recherche ouest-africains."
      },
      {
        titre: "Écoles d'ingénieurs",
        role: "Étudiant à fort profil quantitatif s'orientant par voie de concours ou de titre vers des spécialités d'ingénierie de pointe.",
        actions: "Candidater aux concours d'écoles d'ingénieurs spécialisées en informatique de développement, Big Data, cybersécurité, actuariat, ou en télécommunications.",
        structures: "EPAC (Génie Informatique), IMSP (Data Science), écoles inter-États (INP-HB de Yamoussoukro, etc.), et instituts spécialisés."
      }
    ]
  },

  {
    id: "uac-fast-energies-renouvelables",
    nom: "Énergies Renouvelables et Systèmes Énergétiques",
    etablissement: "Faculté des Sciences et Techniques (FAST)",
    universite: "UAC",
    series_autorisees: ["C", "D", "F2", "F3"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Production et fourniture d'énergie électrique",
        role: "Technicien supérieur d'exploitation réseau chargé de piloter et maintenir les installations de production d'énergies décentralisées.",
        actions: "Superviser le fonctionnement des onduleurs et parcs de batteries dans les centrales solaires, effectuer la maintenance préventive des panneaux photovoltaïques ou mini-centrales hydroélectriques, et gérer l'injection sur le réseau.",
        structures: "Centrales solaires (ex: Defissol, Iloulofin), SBEE, producteurs indépendants d'énergie (IPP), et agences d'électrification rurale (ABERME)."
      },
      {
        titre: "Fourniture de services énergétiques",
        role: "Technicien concepteur et installateur de solutions énergétiques solaires et d'efficacité énergétique pour les particuliers et entreprises.",
        actions: "Dimensionner les besoins énergétiques d'un site (calcul de charges), concevoir les plans d'implantation photovoltaïque, diriger les équipes d'électriciens lors de la pose, et assurer le service après-vente (SAV).",
        structures: "Entreprises privées du secteur solaire, PME d'installations électriques, cabinets de génie climatique, et start-ups de l'économie verte."
      },
      {
        titre: "Expert en transition énergétique",
        role: "Chargé d'études ou conseiller technique junior accompagnant la planification des politiques et audits énergétiques durables.",
        actions: "Réaliser des bilans de performance énergétique sur des bâtiments ou procédés industriels, analyser les gisements d'économies d'énergie, et monter des dossiers techniques pour l'adoption de solutions décarbonées.",
        structures: "Bureaux d'études en thermique et énergétique, agences étatiques pour la maîtrise de l'énergie, ONG environnementales, et mairies."
      }
    ]
  },

  {
    id: "uac-fast-genetique-biotech",
    nom: "Génétique, Biotechnologies et Ressources Biologiques",
    etablissement: "Faculté des Sciences et Techniques (FAST)",
    universite: "UAC",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "francais"],
    debouches: [
      {
        titre: "Recherche en génétique et biotechnologies appliquées",
        role: "Assistant d'expérimentation moléculaire effectuant les manipulations de génétique médicale, végétale ou microbienne en institut.",
        actions: "Réaliser des extractions d'acides nucléiques (ADN/ARN), conduire des PCR de diagnostic ou de génotypage, analyser les gels d'électrophorèse, et veiller à la traçabilité rigoureuse des échantillons biologiques.",
        structures: "Laboratoires de biologie moléculaire (ex: Institut de Biomédecine Appliquée - ISBA), INRAB, et centres de recherche universitaires."
      },
      {
        titre: "Gestion des ressources génétiques",
        role: "Conservateur technique ou gestionnaire de bio-banques chargé de préserver la biodiversité et le patrimoine génétique local.",
        actions: "Gérer la conservation des semences (banques de graines) ou des souches microbiennes, cataloguer les accessions selon les critères morphologiques et moléculaires, et assurer le maintien des conditions de cryo-conservation.",
        structures: "Centres de conservation des semences, jardins botaniques nationaux, instituts de recherche agronomique, et parcs nationaux."
      },
      {
        titre: "Entrepreneuriat en sélections végétales et animales",
        role: "Promoteur technique ou conseiller d'élevage/multiplication spécialisé dans la production de semences et d'animaux de souches améliorées.",
        actions: "Mettre en œuvre des plans de croisement et de sélection génétique pour améliorer les rendements ou résistances, produire des semences certifiées à haute valeur ajoutée, et conseiller les producteurs sur les itinéraires techniques.",
        structures: "Entreprises semencières privées, coopératives de production agricole haut de gamme, fermes d'élevage de sélectionneurs, et cabinets conseil."
      }
    ]
  },

  {
    id: "uac-fast-microbiologie",
    nom: "Microbiologie et Biotechnologie Alimentaire",
    etablissement: "Faculté des Sciences et Techniques (FAST)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["svt", "pct", "francais"],
    debouches: [
      {
        titre: "Chef de production dans les industries",
        role: "Responsable technique de la conduite des lignes industrielles faisant intervenir des procédés fermentaires ou biotechnologiques.",
        actions: "Piloter les paramètres de fermentation (cuves, bioréacteurs), encadrer le travail des opérateurs d'ateliers, s'assurer du respect des recettes de fabrication, et optimiser les rendements microbiologiques globaux.",
        structures: "Brasseries (Sobebra), usines de production de produits laitiers (yaourts), vinaigreries, et unités de panification industrielle."
      },
      {
        titre: "Laboratoire en contrôle de qualité",
        role: "Analyste microbiologiste veillant à la conformité sanitaire et à l'absence de contaminants dans les aliments mis sur le marché.",
        actions: "Effectuer des dénombrements microbiologiques de germes indicateurs ou pathogènes (Salmonella, Listeria), valider la conformité des matières premières et produits finis, et documenter les résultats d'analyses.",
        structures: "Agence Béninoise de Sécurité Sanitaire des Aliments (ABSSA), laboratoires de contrôle qualité des usines agroalimentaires, et laboratoires privés."
      },
      {
        titre: "Transformations agroalimentaires",
        role: "Conseiller technologique ou gestionnaire d'unité artisanale/semi-industrielle de valorisation des produits agricoles locaux.",
        actions: "Développer et standardiser des procédés de transformation (fermentation du manioc en gari, du néré en afitin), assurer la stabilisation des produits finis sans additifs chimiques nocifs, et former les groupements de femmes.",
        structures: "PME de valorisation agroalimentaire, ONG d'appui à la souveraineté alimentaire, et projets d'autonomisation rurale."
      },
      {
        titre: "Auditeur de qualité",
        role: "Auditeur interne ou externe chargé de vérifier le respect des chartes d'hygiène et de sécurité sanitaire des aliments.",
        actions: "Évaluer l'application de la méthode HACCP sur les sites de production, inspecter l'hygiène des locaux et du personnel (Bonnes Pratiques d'Hygiène), et préparer les structures pour l'obtention de labels de certification.",
        structures: "Cabinets d'audit qualité (QHSE), directions qualité des grandes chaînes de restauration ou d'hôtellerie, et organismes certificateurs."
      }
    ]
  },

  {
    id: "uac-fast-hydrobiologie",
    nom: "Hydrobiologie Appliquée",
    etablissement: "Faculté des Sciences et Techniques (FAST)",
    universite: "UAC",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["svt", "pct", "francais"],
    debouches: [
      {
        titre: "Technicien de laboratoire de biologie",
        role: "Analyste spécialisé dans l'étude des organismes aquatiques (plancton, benthos) et la physiologie des espèces d'eau douce ou marines.",
        actions: "Préparer et trier les échantillons biologiques aquatiques, réaliser des examens taxonomiques sous loupe ou microscope, maintenir les aquariums de laboratoire et suivre les paramètres bio-indicateurs.",
        structures: "Laboratoires universitaires d'hydrobiologie, instituts de recherche halieutique (IRHOB), et observatoires de l'environnement côtier."
      },
      {
        titre: "Spécialiste en qualité de l'eau",
        role: "Technicien environnemental ou hydrologue chargé d'évaluer la composition physico-chimique et écologique des ressources en eau.",
        actions: "Effectuer des prélèvements d'eau sur le réseau ou en milieu naturel (lacs, lagunes), mesurer les paramètres physico-chimiques in situ (oxygène dissous, turbidité), analyser les polluants, et interpréter l'état de santé des milieux.",
        structures: "Directions départementales de l'Eau, SONEB, agences de gestion intégrée des ressources en eau (GIRE), et cabinets d'études d'impact."
      },
      {
        titre: "Chef de production en pisciculture et aquaculture",
        role: "Gestionnaire technique d'exploitation piscicole veillant à la rentabilité et au suivi optimal des élevages de poissons.",
        actions: "Planifier l'empoissonnement des étangs ou cages flottantes, calculer et distribuer les rations d'aliments, suivre la croissance de la biomasse, surveiller la qualité de l'eau des bassins, et gérer les campagnes de récolte.",
        structures: "Fermes aquacoles privées, stations piscicoles d'État, groupements de producteurs aquacoles, et ONG de développement rural."
      },
      {
        titre: "Technicien en inspection des produits halieutiques",
        role: "Inspecteur de salubrité publique chargé de valider la conformité sanitaire des poissons, crustacés et produits dérivés.",
        actions: "Contrôler la fraîcheur de la marée au débarquement ou sur les marchés, inspecter le respect de la chaîne du froid dans les usines de congélation ou de fumage, et délivrer les certificats sanitaires pour la commercialisation ou l'exportation.",
        structures: "Direction de la Production Halieutique (MAEP), postes de contrôle sanitaire aux frontières (port/aéroport), et grandes poissonneries industrielles."
      }
    ]
  },

  // ========================================================================
  // II - UNIVERSITÉ DE PARAKOU
  // ========================================================================
  {
    id: "up-fa-prod-vegetale",
    nom: "Sciences et Techniques de Production Végétale",
    etablissement: "Faculté d'Agronomie (FA)",
    universite: "UP",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Entrepreneur agricole",
        role: "Promoteur et gestionnaire d'une exploitation agricole moderne axée sur la culture intensive de produits végétaux.",
        actions: "Concevoir le plan de campagne agricole, sécuriser les intrants de qualité, piloter la préparation mécanique des sols, superviser l'itinéraire technique cultural, et négocier la commercialisation des récoltes.",
        structures: "Fermes agricoles privées, coopératives agricoles, agro-complexes de production maraîchère, fruitière ou céréalière."
      },
      {
        titre: "Conseiller agricole",
        role: "Expert de terrain chargé d'accompagner les producteurs dans l'amélioration de leurs pratiques et de leurs rendements.",
        actions: "Animer des séances de vulgarisation technique, former aux bonnes pratiques phytosanitaires et de fertilisation, aider à la structuration des coopératives, et réaliser des diagnostics technico-économiques.",
        structures: "Agences Territoriales de Développement Agricole (ATDA), Chambres d'Agriculture, ONG de développement rural, et cabinets conseil."
      },
      {
        titre: "Technicien en production végétale",
        role: "Superviseur technique chargé de la conduite opérationnelle et quotidienne des parcelles de culture de grande envergure.",
        actions: "Planifier et suivre les calendriers d'irrigation et de fertilisation, encadrer la main-d'œuvre agricole, veiller à la bonne exécution des travaux mécanisés, et contrôler l'état sanitaire général des plants.",
        structures: "Grandes plantations industrielles (coton, palmier à huile, anacarde, riz), stations de recherche agronomique, et fermes semencières."
      },
      {
        titre: "Protection des végétaux",
        role: "Spécialiste de la santé des plantes chargé de prévenir, diagnostiquer et traiter les maladies et les attaques de ravageurs.",
        actions: "Mener des prospections phytosanitaires sur le terrain, identifier les agents pathogènes ou insectes nuisibles, concevoir des plans de lutte intégrée (biologique et chimique), et contrôler la conformité des intrants.",
        structures: "Direction de la Production Végétale (MAEP), laboratoires de protection des végétaux, et services d'inspection phytosanitaire aux frontières."
      },
      {
        titre: "Enseignant des lycées agricoles",
        role: "Professeur technique chargé de la formation théorique et pratique des futurs acteurs du monde agricole.",
        actions: "Élaborer les contenus de cours en agronomie végétale, animer les travaux pratiques sur les parcelles pédagogiques de l'établissement, et évaluer les compétences techniques des apprenants.",
        structures: "Lycées Techniques Agricoles (LTA) publics et privés, et centres de formation professionnelle rurale."
      }
    ]
  },

  {
    id: "up-fa-prod-animale",
    nom: "Sciences et Techniques de Production Animale et Halieutique",
    etablissement: "Faculté d'Agronomie (FA)",
    universite: "UP",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Technicien en gestion d'élevage",
        role: "Conducteur d'élevage spécialisé chargé du suivi zootechnique, de la reproduction et du bien-être des cheptels.",
        actions: "Formuler et rationner les aliments par catégorie d'animaux, planifier les programmes de prophylaxie et de vaccination, surveiller les paramètres de reproduction (insémination, mise bas), et tenir les registres d'élevage.",
        structures: "Fermes zootechniques modernes (aviculture, porciculture, élevage de petits et grands ruminants), et complexes laitiers."
      },
      {
        titre: "Gestion des exploitations aquacoles",
        role: "Technicien supérieur aquacole gérant la chaîne de production de poissons ou de crustacés en environnement contrôlé.",
        actions: "Superviser la reproduction en écloserie et la production d'alevins, contrôler la qualité physico-chimique de l'eau des bassins ou cages, piloter l'alimentation et la croissance, et organiser les pêches de récolte.",
        structures: "Fermes piscicoles privées, stations aquacoles d'État, et projets de développement de l'aquaculture continentale."
      },
      {
        titre: "Entrepreneur agricole",
        role: "Agro-entrepreneur autonome valorisant les filières de productions animales, halieutiques ou de transformation de viande/poisson.",
        actions: "Mobiliser les investissements, concevoir l'architecture technique des bâtiments d'élevage, optimiser les coûts de production, et développer un réseau de distribution pour les produits d'origine animale.",
        structures: "Unités de production avicole, fermes d'élevage intégré, entreprises de production et de vente de poissons marchands."
      },
      {
        titre: "Conseiller agricole",
        role: "Spécialiste en productions animales apportant un appui-conseil stratégique aux éleveurs et groupements professionnels.",
        actions: "Diffuser les innovations techniques en matière de logement et de nutrition animale, conseiller sur l'amélioration génétique des troupeaux, et accompagner la transition vers des modèles de production durables.",
        structures: "ATDA, directions départementales de l'Élevage, ONG de développement rural, et groupements d'éleveurs."
      },
      {
        titre: "Enseignant des lycées agricoles",
        role: "Formateur technique transmettant les compétences en zootechnie, nutrition animale et techniques de pêche/aquaculture.",
        actions: "Dispenser les cours de productions animales, encadrer les étudiants lors des travaux pratiques au sein des ateliers d'élevage ou bassins de l'école, et valider les compétences pratiques.",
        structures: "Lycées Techniques Agricoles (LTA), et instituts de formation aux métiers de l'élevage."
      }
    ]
  },

  {
    id: "up-fa-ressources-naturelles",
    nom: "Aménagement et Gestion des Ressources Naturelles",
    etablissement: "Faculté d'Agronomie (FA)",
    universite: "UP",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Technicien en aménagement des aires protégées",
        role: "Gestionnaire environnemental de terrain chargé de la conservation de la biodiversité dans les réserves et parcs naturels.",
        actions: "Participer à l'élaboration des plans d'aménagement, suivre les dynamiques des populations de faune et de flore sauvages, cartographier les habitats, et coordonner les actions de restauration écologique.",
        structures: "CENAGREF (Parcs nationaux de la Pendjari et du W), ONG de conservation de la nature, et réserves de biosphère."
      },
      {
        titre: "Cadre des eaux et forêts",
        role: "Officier technique ou ingénieur forestier assurant l'application de la réglementation forestière et la gestion durable du patrimoine sylvicole.",
        actions: "Superviser les chantiers de reboisement et de restauration des paysages dégradés, contrôler l'exploitation des essences forestières, lutter contre le braconnage et la déforestation, et instruire les délits forestiers.",
        structures: "Direction Générale des Eaux, Forêts et Chasse (DGEFC), inspections forestières, et cantonnements forestiers."
      },
      {
        titre: "Entrepreneur agricole",
        role: "Promoteur d'initiatives vertes axées sur la sylviculture, l'agroforesterie ou la valorisation économique durable des ressources naturelles.",
        actions: "Mettre en place des pépinières forestières ou ornementales commerciales, développer des plantations d'essences à croissance rapide (teck, acacia), ou exploiter durablement les produits forestiers non ligneux (PFNL).",
        structures: "Entreprises forestières privées, exploitations agroforestières autonomes, et cabinets d'éco-entrepreneuriat."
      },
      {
        titre: "Conseiller en conservation",
        role: "Consultant ou chargé de mission environnementale accompagnant l'intégration du développement durable dans les territoires.",
        actions: "Mener des études d'impact environnemental et social (EIES), concevoir des mécanismes de gestion communautaire des forêts, et sensibiliser les populations locales aux enjeux du changement climatique.",
        structures: "Bureaux d'études en environnement, collectivités locales, agences de coopération internationale, et ONG environnementales."
      }
    ]
  },

  {
    id: "up-fa-socio-eco-rurales",
    nom: "Sociologie et Économie Rurales",
    etablissement: "Faculté d'Agronomie (FA)",
    universite: "UP",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Assistance dans la création et la gestion d'entreprise/coopérative agricole",
        role: "Conseiller d'entreprise en milieu rural spécialisé dans la structuration juridique, financière et organisationnelle des chaînes de valeur.",
        actions: "Réaliser des plans d'affaires (business plans) pour les projets ruraux, appuyer la mise en place de la gouvernance coopérative, former les acteurs à la comptabilité simplifiée, et faciliter l'accès aux marchés.",
        structures: "Unions de producteurs (ex: FUPRO), incubateurs de start-ups agricoles, cabinets d'expertise en agro-business, et banques agricoles."
      },
      {
        titre: "Appui conseil au développement local",
        role: "Agent de développement ou facilitateur communautaire chargé de concevoir et de piloter des projets d'infrastructure ou d'animation rurale.",
        actions: "Animer des diagnostics territoriaux participatifs, accompagner les mairies dans la rédaction de la composante agricole de leur plan de développement, et coordonner la mise en œuvre des actions d'autonomisation rurale.",
        structures: "Mairies (services de développement local), ONG de développement, agences de développement territorial, et projets de coopération."
      },
      {
        titre: "Études socio-économiques",
        role: "Chargé d'enquêtes ou analyste de données socio-économiques chargé d'évaluer la dynamique et l'impact des politiques agricoles.",
        actions: "Concevoir des outils de collecte de données (questionnaires, guides d'entretien), mener des enquêtes quantitatives et qualitatives auprès des ménages ruraux, analyser les données de revenus et de sécurité alimentaire, et rédiger des rapports.",
        structures: "Instituts de recherche agronomique (INRAB), laboratoires universitaires, cabinets de conseil en évaluation de projets, et agences statistiques (INStaD)."
      }
    ]
  },

  {
    id: "up-fa-nutrition-agro",
    nom: "Nutrition et Sciences Agro-alimentaires",
    etablissement: "Faculté d'Agronomie (FA)",
    universite: "UP",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Entrepreneur agro-alimentaire",
        role: "Promoteur d'une unité industrielle ou semi-industrielle de transformation et de conditionnement de denrées alimentaires.",
        actions: "Développer des procédés de transformation innovants pour les matières premières locales, manager l'outil de production, concevoir des packagings attractifs, et assurer la mise en marché de produits finis normés.",
        structures: "PME de transformation agroalimentaire (jus de fruits, farines infantiles, conserves, huileries), et start-ups d'innovation alimentaire."
      },
      {
        titre: "Responsable système de qualité IAA",
        role: "Manager qualité garant de la conformité des produits, du respect des normes d'hygiène et de la sécurité sanitaire au sein de l'usine.",
        actions: "Mettre en œuvre et suivre la démarche HACCP et la norme ISO 22000, réaliser des audits internes d'hygiène, former le personnel aux bonnes pratiques de fabrication, et piloter la traçabilité des lots.",
        structures: "Industries Agro-Alimentaires (IAA) de grande envergure (brasseries, minoteries, complexes laitiers), et organismes de certification."
      },
      {
        titre: "Chef production IAA",
        role: "Cadre opérationnel supervisant les opérations quotidiennes de fabrication sur les lignes de transformation industrielle.",
        actions: "Ordonnancer les plannings de fabrication, gérer les flux de matières premières et d'emballages, encadrer les équipes d'opérateurs techniques, et veiller au respect des cadences de production et des critères de coût.",
        structures: "Unités industrielles de transformation, usines d'égrenage ou de trituration, et manufactures de biens de grande consommation alimentaire."
      },
      {
        titre: "Technicien en nutrition",
        role: "Spécialiste de la nutrition humaine chargé d'élaborer, de valider et de promouvoir des solutions pour l'équilibre nutritionnel et la santé.",
        actions: "Concevoir des formulations de produits à haute valeur nutritionnelle (farines de sevrage enrichies), piloter des enquêtes de surveillance nutritionnelle, et animer des campagnes de sensibilisation communautaire contre la malnutrition.",
        structures: "Ministère de la Santé, ONG de lutte contre la malnutrition, agences d'aide alimentaire (PAM), et centres de santé."
      },
      {
        titre: "Enseignant des lycées agricoles",
        role: "Enseignant technique transmettant les savoirs en biochimie alimentaire, technologies de transformation, conservation et nutrition.",
        actions: "Préparer les cours théoriques, encadrer les étudiants en laboratoire de technologie alimentaire ou en atelier de transformation pilote, et évaluer les compétences techniques.",
        structures: "Lycées Techniques Agricoles (LTA), et centres de formation aux métiers de l'agroalimentaire."
      }
    ]
  },

  {
    id: "up-fm-medecine",
    nom: "Médecine Humaine",
    etablissement: "Faculté de Médecine (FM)",
    universite: "UP",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Médecin généraliste dans les hôpitaux et centres de santé",
        role: "Professionnel de santé chargé de la prise en charge médicale globale des patients, du diagnostic au traitement et au suivi.",
        actions: "Réaliser des consultations cliniques, prescrire les examens complémentaires et les traitements adaptés, assurer le suivi des pathologies chroniques, réaliser des gestes d'urgence, et coordonner le parcours de soins.",
        structures: "Centres Hospitaliers Universitaires (CHU), Centres Hospitaliers Départementaux (CHD), Hôpitaux de Zone, et cliniques privées."
      },
      {
        titre: "Spécialisation médicale",
        role: "Médecin en cours de spécialisation (interne) évoluant vers une expertise approfondie dans une discipline clinique ou chirurgicale.",
        actions: "Suivre le cursus de Diplôme d'Études Spécialisées (DES) en cardiologie, pédiatrie, gynécologie-obstétrique, chirurgie générale, etc., et assurer des fonctions de soins spécialisés sous la supervision d'un chef de service.",
        structures: "Services spécialisés des grands CHU nationaux et régionaux, et instituts de formation médicale supérieure."
      },
      {
        titre: "Recherche clinique",
        role: "Médecin chercheur participant à la mise en œuvre de protocoles scientifiques et d'essais cliniques pour faire avancer la science médicale.",
        actions: "Participer à la conception de protocoles d'essais cliniques, suivre l'état de santé des patients inclus dans les études, collecter et analyser les données cliniques, et rédiger des articles scientifiques.",
        structures: "Instituts de recherche médicale (IRD, ISBA), chaires hospitalo-universitaires, et laboratoires de l'industrie pharmaceutique."
      }
    ]
  },

  {
    id: "up-enatse-sante-publique",
    nom: "Santé publique et surveillance Épidémiologique",
    etablissement: "École Nationale de formation des Techniciens Supérieurs en Santé Publique et Surveillance Épidémiologique (ENATSE)",
    universite: "UP",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "anglais", "svt"],
    debouches: [
      {
        titre: "Biostatisticien dans les services de santé",
        role: "Analyste de données sanitaires chargé de collecter, traiter et modéliser les informations relatives à la santé publique.",
        actions: "Gérer le Système d'Information Sanitaire (SIS) à l'échelle d'une région, analyser les bases de données d'enquêtes ou de morbidité, concevoir des indicateurs de santé, et produire des rapports statistiques décisionnels.",
        structures: "Directions Départementales de la Santé (DDS), programmes nationaux de santé (paludisme, VIH), et ministères de la Santé."
      },
      {
        titre: "Agent de surveillance épidémiologique",
        role: "Technicien de veille sanitaire chargé d'identifier, de suivre et de documenter l'apparition ou la progression des maladies transmissibles.",
        actions: "Mener des investigations de terrain lors de flambées épidémiologiques, centraliser les alertes sanitaires, suivre le protocole de notification des maladies à déclaration obligatoire, et participer à la riposte sanitaire.",
        structures: "Services d'épidémiologie des ministères, agences de sécurité sanitaire, centres de contrôle des maladies, et ONG médicales."
      },
      {
        titre: "Attaché de recherche en santé",
        role: "Collaborateur technique assurant la coordination opérationnelle et le suivi logistique des projets de recherche en santé publique.",
        actions: "Superviser la collecte de données sur le terrain ou en milieu hospitalier, contrôler la qualité et l'anonymisation des données saisies, veiller au respect de l'éthique médicale, et participer à la logistique du projet.",
        structures: "Centres de recherche en santé publique, instituts universitaires, et organismes internationaux de recherche."
      },
      {
        titre: "Agent des collectivités locales",
        role: "Technicien ou conseiller en hygiène et santé publique auprès des municipalités pour la promotion de la santé communautaire.",
        actions: "Concevoir et animer les plans d'assainissement et d'hygiène publique de la commune, inspecter les conditions de salubrité des marchés et structures collectives, et piloter les programmes locaux de sensibilisation.",
        structures: "Mairies (services de l'environnement, de l'hygiène et de la santé), préfectures, et associations intercommunales."
      }
    ]
  },

  {
    id: "up-iut-gestion-banques",
    nom: "Gestion des Banques",
    etablissement: "Institut Universitaire de Technologie (IUT)",
    universite: "UP",
    series_autorisees: ["C", "D", "G2"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Organismes financiers",
        role: "Gestionnaire intermédiaire chargé du traitement opérationnel des transactions, des dossiers de financement ou des placements.",
        actions: "Analyser la structure financière des dossiers de demande de financement, suivre l'évolution des portefeuilles de titres, exécuter les opérations de marché réglementées, et valider la conformité des flux financiers.",
        structures: "Sociétés de Gestion et d'Intermédiation (SGI), établissements financiers de crédit, et holdings de gestion d'actifs."
      },
      {
        titre: "Établissements de crédits",
        role: "Analyste de crédit chargé de l'instruction et de la validation technique des dossiers de demande de financement des particuliers et PME.",
        actions: "Étudier les états financiers et ratios de solvabilité des demandeurs, évaluer les risques de non-remboursement, proposer des structures de garanties adaptées, et rédiger des avis motivés pour le comité de crédit.",
        structures: "Compagnies de crédit-bail, établissements de microfinance de grande taille, et sociétés financières spécialisées."
      },
      {
        titre: "Entreprises commerciales de banque",
        role: "Technicien des opérations de guichet ou d'arrière-guichet (back-office) veillant au traitement fluide et sécurisé des services bancaires.",
        actions: "Superviser les opérations de caisse complexes, assurer le traitement des flux de compensation monétique, contrôler la conformité des opérations internationales (virements, transferts), et gérer les approvisionnements de fonds.",
        structures: "Banques de détail (commerciales), et grands réseaux d'agences bancaires nationaux ou régionaux."
      },
      {
        titre: "Chargé de clientèle",
        role: "Conseiller commercial dédié à la gestion, au développement et à la fidélisation d'un portefeuille de clients particuliers ou professionnels.",
        actions: "Accueillir les clients et diagnostiquer leurs besoins financiers, commercialiser la gamme de produits et services (comptes, crédits, assurances), instruire les demandes de prêts courantes, et suivre l'évolution des comptes.",
        structures: "Agences bancaires commerciales, et institutions de microfinance haut de gamme."
      }
    ]
  },

  {
    id: "up-iut-gestion-commerciale",
    nom: "Gestion Commerciale",
    etablissement: "Institut Universitaire de Technologie (IUT)",
    universite: "UP",
    series_autorisees: ["B", "C", "D", "G3", "DT/COM"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Entreprises commerciales",
        role: "Gestionnaire commercial ou de point de vente chargé d'optimiser l'activité de distribution et de vente de biens ou services.",
        actions: "Participer à l'élaboration de la stratégie marketing locale, suivre et analyser les indicateurs de vente, gérer le budget commercial de sa section, et mettre en œuvre les campagnes de promotion commerciale.",
        structures: "Sociétés de distribution de biens de consommation, entreprises de services, et enseignes de commerce de détail."
      },
      {
        titre: "Services logistiques internationaux",
        role: "Coordonnateur des opérations d'approvisionnement et d'expédition des marchandises dans un contexte transnational.",
        actions: "Organiser les flux physiques de marchandises importées ou exportées, suivre les livraisons avec les transporteurs, gérer les stocks en entrepôt douanier, et s'assurer du respect des délais et des coûts.",
        structures: "Directions logistiques des multinationales, plateformes de stockage internationales, et hubs de distribution."
      },
      {
        titre: "Sociétés de transit",
        role: "Déclarant en douane ou agent d'exploitation assurant la conformité et la fluidité douanière des flux de commerce extérieur.",
        actions: "Rédiger les déclarations en douane de marchandises à l'aide des outils informatiques dédiés, déterminer l'espèce tarifaire et la valeur en douane, et suivre l'inspection physique ou documentaire des colis.",
        structures: "Cabinets de commissionnaires agréés en douane, entreprises de transit portuaire ou aéroportuaire."
      },
      {
        titre: "Banques",
        role: "Conseiller commercial ou animateur des ventes de services et produits financiers de la banque au grand public.",
        actions: "Promouvoir la souscription de cartes de crédit, d'offres de banque en ligne ou d'assurances associées, mener des prospections sur le terrain pour l'ouverture de comptes, et concevoir des challenges commerciaux.",
        structures: "Réseaux de distribution des banques commerciales, et compagnies d'assurance partenaires."
      },
      {
        titre: "Chef de rayon",
        role: "Manager opérationnel responsable de la performance économique et de l'attractivité d'un espace de vente dédié.",
        actions: "Gérer l'approvisionnement et les commandes de produits, piloter l'implantation visuelle et le merchandising des étals, fixer les prix dans le cadre de la politique commerciale, et encadrer l'équipe de conseillers de vente.",
        structures: "Supermarchés, hypermarchés, et grandes surfaces de distribution spécialisées."
      },
      {
        titre: "Attaché commercial",
        role: "Négociateur et développeur commercial de terrain chargé d'acquérir et de suivre un portefeuille de clients B2B.",
        actions: "Mener des actions de prospection directes auprès des entreprises, présenter des offres commerciales et techniques complexes, négocier les conditions contractuelles de vente, et assurer un service après-vente rigoureux.",
        structures: "Sociétés de télécommunications, fournisseurs d'accès internet, grossistes industriels, et agences de services informatiques."
      }
    ]
  },

  {
    id: "up-iut-gestion-entreprises",
    nom: "Gestion des Entreprises",
    etablissement: "Institut Universitaire de Technologie (IUT)",
    universite: "UP",
    series_autorisees: ["C", "D", "G2"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Cabinets comptables",
        role: "Assistant ou collaborateur comptable chargé de la tenue et de la révision des comptabilités de plusieurs clients.",
        actions: "Saisir les pièces comptables au quotidien, réaliser les rapprochements bancaires, préparer les déclarations de TVA et autres impôts professionnels, et participer à la préparation des bilans et des comptes de résultat.",
        structures: "Cabinets d'expertise comptable, cabinets d'audit, et structures de conseil de gestion externalisées."
      },
      {
        titre: "Services de comptabilité des entreprises",
        role: "Technicien supérieur comptable assurant la gestion financière et comptable interne de son organisation.",
        actions: "Enregistrer les écritures comptables (fournisseurs, clients, paie), suivre le paiement des factures, préparer les états de rapprochement de trésorerie, et collaborer avec l'expert-comptable pour la clôture annuelle.",
        structures: "Directions Administratives et Financières (DAF) des PME, PMI, et des grandes entreprises nationales."
      },
      {
        titre: "Banques",
        role: "Analyste financier junior ou chargé d'opérations d'arrière-guichet assurant le suivi de gestion et le contrôle des comptes.",
        actions: "Analyser les ratios financiers et bilans des entreprises clientes en demande de prêt, assurer le contrôle de gestion interne des coûts de l'agence, et valider les écritures d'ajustement comptable bancaire.",
        structures: "Sièges sociaux et directions financières des banques commerciales, et grandes mutuelles d'épargne."
      },
      {
        titre: "Assurances",
        role: "Gestionnaire de contrats de sinistres ou de souscription assurant le suivi financier et administratif des dossiers.",
        actions: "Analyser les risques des dossiers de souscription, calculer les cotisations et primes d'assurance, instruire les dossiers d'indemnisation lors des sinistres, et vérifier la conformité financière des règlements.",
        structures: "Compagnies d'assurances nationales, courtiers en assurance, et mutuelles de santé."
      },
      {
        titre: "Administrations",
        role: "Gestionnaire budgétaire ou comptable public chargé de l'exécution et du contrôle des deniers publics au sein des services de l'État.",
        actions: "Instruire l'engagement et la liquidation des dépenses publiques, veiller à la conformité par rapport à la loi de finances, suivre les régies de recettes et d'avances, et produire les rapports d'exécution budgétaire.",
        structures: "Ministère de l'Économie et des Finances, agences nationales, directions financières des mairies, et préfectures."
      },
      {
        titre: "Auto-emploi",
        role: "Entrepreneur indépendant créant et pilotant une unité économique autonome (TPE/PME) dans le secteur de son choix.",
        actions: "Réaliser l'étude de faisabilité du projet, mobiliser le capital de départ, assumer l'ensemble de la gestion comptable, fiscale et commerciale de la structure, et manager le développement opérationnel de la start-up.",
        structures: "Agences de services, structures de e-commerce, cabinets de micro-conseil, et PME de distribution."
      }
    ]
  },

  {
    id: "up-iut-transport-logistique",
    nom: "Gestion des Transports et Logistiques",
    etablissement: "Institut Universitaire de Technologie (IUT)",
    universite: "UP",
    series_autorisees: ["B", "C", "D", "G2"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Banques",
        role: "Analyste des risques de transport et de commerce international ou gestionnaire des flux financiers documentaires.",
        actions: "Vérifier la validité et la conformité des documents de transport (connaissement, LTA) associés aux crédits documentaires, et évaluer les garanties financières des entreprises de logistique clientes.",
        structures: "Départements Trade Finance (Commerce International) des sièges bancaires, et grandes SGI."
      },
      {
        titre: "Sociétés d'assurance",
        role: "Rédacteur de contrats ou gestionnaire de sinistres spécialisé dans les branches transport de marchandises et corps de navires/avions.",
        actions: "Évaluer les risques logistiques liés aux itinéraires et modes de transport, chiffrer les primes d'assurance maritime ou routière, et mandater des experts pour évaluer les avaries et indemniser les assurés.",
        structures: "Compagnies d'assurances multirisques, et cabinets d'expertise en avaries maritimes et de transport."
      },
      {
        titre: "Entreprises de transport et de gestion ferroviaire",
        role: "Exploitant de transport multimodal chargé de planifier, d'optimiser et de suivre les mouvements de convois ou de flottes.",
        actions: "Établir les plans de chargement des trains ou camions, planifier les rotations des véhicules et les plannings des conducteurs, et superviser le suivi en temps réel du trafic de marchandises ou de passagers.",
        structures: "Sociétés d'exploitation ferroviaire (ex: infrastructures régionales), et grandes entreprises de transport routier de marchandises."
      },
      {
        titre: "Compagnies aériennes",
        role: "Superviseur des opérations de fret aérien ou de logistique d'escale assurant le traitement fluide des vols et du cargo.",
        actions: "Coordonner le traitement logistique du fret aérien en soute, préparer la documentation douanière et de sécurité aéronautique (manifestes de fret), et superviser l'assistance au sol des avions (handling).",
        structures: "Compagnies aériennes commerciales ou de fret, et entreprises de gestion et d'assistance aéroportuaire."
      },
      {
        titre: "Technicien des études aéronautiques",
        role: "Assistant d'études techniques de trafic ou de planification logistique en environnement aéroportuaire.",
        actions: "Collecter et traiter les données statistiques d'exploitation aéroportuaire, participer à la modélisation des flux de passagers et de bagages, et appuyer l'optimisation de l'utilisation des infrastructures techniques au sol.",
        structures: "Agences nationales de l'aviation civile (ANAC), et gestionnaires d'infrastructures aéroportuaires."
      }
    ]
  },

  {
    id: "up-iut-info-gestion",
    nom: "Informatique de Gestion",
    etablissement: "Institut Universitaire de Technologie (IUT)",
    universite: "UP",
    series_autorisees: ["C", "D", "G2"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Centre informatique",
        role: "Technicien d'exploitation informatique assurant la disponibilité opérationnelle des serveurs et infrastructures de traitement.",
        actions: "Assurer la maintenance logicielle et matérielle courante du parc de serveurs, configurer les postes clients, automatiser les tâches régulières de sauvegarde, et assister les utilisateurs face aux incidents techniques.",
        structures: "Centres de données (Data Centers) publics ou privés, et directions de services informatiques mutualisés."
      },
      {
        titre: "Banques",
        role: "Analyste support applicatif ou gestionnaire des bases de données orientées métiers bancaires.",
        actions: "Assurer le maintien en conditions opérationnelles du Core Banking (logiciel bancaire), exécuter les traitements informatiques de fin de journée, requêter les bases de données (SQL) pour produire des rapports, et résoudre les bugs.",
        structures: "Directions des Systèmes d'Information (DSI) des banques, et institutions financières décentralisées."
      },
      {
        titre: "Éditeur de logiciels",
        role: "Développeur d'applications ou technicien d'intégration participant à la création et au déploiement de solutions de gestion.",
        actions: "Coder de nouvelles fonctionnalités logicielles sur la base d'un cahier des charges, réaliser les phases de tests unitaires et d'intégration, configurer et installer les progiciels (ERP) chez les clients, et assurer la maintenance corrective.",
        structures: "Entreprises de Services du Numérique (ESN), éditeurs de logiciels de comptabilité, RH ou gestion commerciale."
      },
      {
        titre: "Grandes entreprises informatisées",
        role: "Technicien supérieur IT interne garant du bon fonctionnement des applications métiers et des flux de données.",
        actions: "Administrer les outils informatiques internes (CRM, progiciels de gestion), former le personnel à l'utilisation des logiciels de l'entreprise, mettre en œuvre la politique de sécurité informatique, et gérer l'interconnexion des outils.",
        structures: "DSI des grandes entreprises industrielles, de télécommunications, de distribution ou agroalimentaires."
      },
      {
        titre: "Analyste programmeur",
        role: "Développeur Full-Stack ou applicatif chargé de concevoir et de faire évoluer des plateformes web ou logicielles sur mesure.",
        actions: "Analyser les besoins des utilisateurs, concevoir l'architecture de la base de données, développer l'interface utilisateur (Front-End) et la logique métier (Back-End), et rédiger la documentation technique associée.",
        structures: "Start-ups technologiques, agences de développement web et mobile, et cabinets de conseil informatique."
      },
      {
        titre: "Administrateur de réseau",
        role: "Technicien d'infrastructure réseau assurant la connectivité, la performance et la sécurité des liaisons de l'entreprise.",
        actions: "Déployer et configurer les routeurs, commutateurs et pare-feu, gérer l'adressage IP et l'accès à internet, surveiller le trafic réseau pour détecter les anomalies ou intrusions, et installer les connexions filaires ou sans fil.",
        structures: "Moyennes et grandes entreprises, universités, administrations publiques, et fournisseurs de services internet."
      }
    ]
  },

  {
    id: "up-iut-grh",
    nom: "Gestion des Ressources Humaines",
    etablissement: "Institut Universitaire de Technologie (IUT)",
    universite: "UP",
    series_autorisees: ["A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Entreprises",
        role: "Assistant ou gestionnaire des ressources humaines chargé du suivi administratif et opérationnel du personnel.",
        actions: "Assurer la gestion quotidienne des dossiers des salariés (contrats, congés, absences), participer à la mise en œuvre du plan de formation, organiser les intégrations des nouveaux employés, et veiller aux relations sociales.",
        structures: "Directions des Ressources Humaines (DRH) des PME, PMI, et des groupes commerciaux et industriels."
      },
      {
        titre: "Assurances",
        role: "Gestionnaire de prestations de prévoyance collective ou chargé de la gestion RH interne de la compagnie.",
        actions: "Gérer l'adhésion des salariés aux contrats collectifs d'assurance santé ou de retraite complémentaire, instruire les dossiers de remboursement des frais de santé, ou piloter les processus RH internes à la société.",
        structures: "Compagnies d'assurances de personnes, mutuelles de santé, et grands cabinets de courtage."
      },
      {
        titre: "Administrations",
        role: "Gestionnaire de la fonction publique chargé de la carrière administrative et de la gestion des agents de l'État.",
        actions: "Instruire les dossiers d'avancement, de mutation ou de retraite des agents, préparer les actes de nomination, veiller à la conformité par rapport au statut général de la fonction publique, et suivre la masse salariale.",
        structures: "Ministère de la Fonction Publique, directions des ressources humaines (DRH) ministérielles, et mairies."
      },
      {
        titre: "Organisations",
        role: "Coordonnateur ou technicien RH assurant la gestion des effectifs et l'application des politiques internes de structure.",
        actions: "Suivre l'adéquation entre les besoins opérationnels et les effectifs en place, animer les processus d'évaluation annuelle des performances, et gérer les dossiers disciplinaires et de conformité réglementaire.",
        structures: "Grandes institutions consulaires (CCI), agences de développement public, et offices d'État."
      },
      {
        titre: "ONG",
        role: "Responsable RH ou officier d'administration RH gérant les équipes de permanents, de consultants et d'expatriés.",
        actions: "Rédiger les contrats d'engagement selon la législation locale ou internationale, coordonner la logistique de déploiement du personnel humanitaire sur le terrain, et piloter les plans de rémunération et d'évaluation.",
        structures: "ONG nationales et internationales, et fondations d'aide humanitaire ou de développement."
      },
      {
        titre: "Chargé de recrutement",
        role: "Spécialiste du sourcing et de l'évaluation de candidats pour le compte d'employeurs ou de clients.",
        actions: "Rédiger et diffuser les offres d'emploi, trier et présélectionner les CV, mener les entretiens d'embauche initiaux, réaliser des tests de compétences, et rédiger des synthèses d'évaluation pour les managers.",
        structures: "Cabinets de recrutement, agences de travail temporaire (intérim), et cellules de recrutement des grandes entreprises."
      },
      {
        titre: "Gestion de la paie",
        role: "Technicien paie ou gestionnaire social assurant la production exacte des rémunérations et des déclarations associées.",
        actions: "Collecter et traiter les éléments variables de paie (heures supplémentaires, primes), éditer les bulletins de salaire sur logiciel dédié, et effectuer les déclarations sociales et fiscales périodiques (CNSS, ITS).",
        structures: "Services de gestion de la paie externalisés, cabinets d'expertise comptable, et grands départements RH."
      }
    ]
  },

  {
    id: "up-faseg-ape",
    nom: "Analyse et Politique Économiques (APE)",
    etablissement: "Faculté des Sciences Économiques et de Gestion (FASEG)",
    universite: "UP",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Cabinets conseils en politiques économiques",
        role: "Consultant économique chargé de mener des analyses d'impact de réformes budgétaires, fiscales ou sectorielles.",
        actions: "Réaliser des diagnostics de politique économique sectorielle, analyser les données macroéconomiques complexes, évaluer les incidences des chocs économiques externes, et formuler des notes d'orientation stratégique.",
        structures: "Cabinets de conseil stratégique, think tanks économiques, et institutions de recherche économique appliquée."
      },
      {
        titre: "Cabinets conseils en projets de développement",
        role: "Analyste de projets chargé de réaliser les études de faisabilité et les évaluations de programmes à impact socio-économique.",
        actions: "Mener des analyses coûts-bénéfices et coûts-efficacité pour les investissements publics ou privés, élaborer les indicateurs de suivi d'impact, et auditer l'efficacité allocative des ressources financières.",
        structures: "Bureaux d'études en ingénierie de projets, agences de conseil en développement, et fondations internationales."
      },
      {
        titre: "Structures chargées des questions économiques (ONG, Ministère)",
        role: "Chargé d'études macroéconomiques ou conseiller technique junior assurant le cadrage et le suivi des indicateurs de développement.",
        actions: "Suivre l'évolution des agrégats macroéconomiques (croissance, inflation, dette), participer à la modélisation des politiques publiques, et rédiger des synthèses de conjoncture économique nationale ou internationale.",
        structures: "Ministère de l'Économie et des Finances, Ministère du Plan et du Développement, ONG de plaidoyer économique, et banques de développement."
      }
    ]
  },
  
  {
    id: "up-faseg-ege",
    nom: "Entrepreneuriat et Gestion des Entreprises (EGE)",
    etablissement: "Faculté des Sciences Économiques et de Gestion (FASEG)",
    universite: "UP",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Auto-emploi",
        role: "Chef d'entreprise indépendant ou start-upper pilotant une entité économique autonome à forte valeur ajoutée.",
        actions: "Identifier des opportunités de marché, concevoir des business modèles résilients, structurer les aspects juridiques et fiscaux de l'entité, et assurer le management global opérationnel.",
        structures: "Start-ups innovantes, PME/PMI agro-business, agences de services digitaux, et micro-entreprises locales."
      },
      {
        titre: "Cabinets conseils en création et gestion d'activités",
        role: "Consultant junior ou conseiller technique spécialisé dans l'accompagnement et l'incubation de porteurs de projets.",
        actions: "Animer des ateliers de formation sur la création d'entreprise, structurer la gouvernance des jeunes organisations, et accompagner la recherche de financements (levée de fonds, crowdfunding).",
        structures: "Incubateurs et accélérateurs de start-ups, cabinets de conseil en gestion, et structures d'appui à l'entrepreneuriat."
      },
      {
        titre: "Études de faisabilité",
        role: "Chargé d'études de projets effectuant les évaluations avant investissement pour garantir la viabilité des nouvelles activités.",
        actions: "Réaliser des études de marché approfondies, modéliser les états financiers prévisionnels (plans de trésorerie, bilans), et analyser les risques socio-économiques et réglementaires du projet.",
        structures: "Bureaux d'études en ingénierie financière, agences de développement territorial, et directions stratégiques des banques."
      },
      {
        titre: "Audit en création et mise à niveau d'entreprises",
        role: "Auditeur ou consultant en organisation spécialisé dans la restructuration et l'amélioration de la compétitivité des entreprises.",
        actions: "Diagnostiquer les dysfonctionnements organisationnels et financiers des structures existantes, élaborer des plans de mise à niveau technique, et suivre l'implémentation de nouvelles méthodes de gestion.",
        structures: "Cabinets d'audit et de conseil, agences nationales de promotion des investissements (ex: APIEx), et grands programmes de développement."
      }
    ]
  },

  {
    id: "up-faseg-mmo",
    nom: "Marketing et Management des Organisations (MMO)",
    etablissement: "Faculté des Sciences Économiques et de Gestion (FASEG)",
    universite: "UP",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Cabinets conseils en management",
        role: "Consultant en organisation et stratégie interne pour le compte de structures publiques ou privées.",
        actions: "Analyser les processus de gouvernance et de travail, proposer des architectures organisationnelles optimales, accompagner le changement managérial, et optimiser la gestion du capital humain.",
        structures: "Cabinets de conseil en management stratégique, directions générales des grandes entreprises, et PME en restructuration."
      },
      {
        titre: "Cabinets conseils en marketing",
        role: "Chef de projet marketing ou planificateur stratégique dédié à la croissance commerciale des marques.",
        actions: "Concevoir des mix-marketing adaptés aux marchés locaux et régionaux, piloter des études de comportement du consommateur, et définir les stratégies de positionnement et de pénétration de marché.",
        structures: "Cabinets d'études de marché, agences de conseil en marketing, et directions commerciales des grandes entreprises (Télécoms, Agroalimentaire)."
      },
      {
        titre: "Cabinets conseils en communication",
        role: "Chargé de communication ou chef de publicité responsable de l'image de marque et de la visibilité institutionnelle.",
        actions: "Élaborer des plans de communication médias et hors-médias, concevoir des campagnes publicitaires d'impact, et gérer les relations presse ainsi que la communication de crise des organisations.",
        structures: "Agences de communication 360°, cabinets de relations publiques, et cellules de communication des ministères."
      },
      {
        titre: "Administrations de tous genres",
        role: "Cadre administratif ou manager opérationnel supervisant le bon fonctionnement des services de support.",
        actions: "Coordonner les activités logistiques et administratives internes, piloter les indicateurs de performance des équipes, et assurer l'interface fonctionnelle avec les partenaires et directions métiers.",
        structures: "Directions Administratives des grandes entreprises, mairies, ministères sectoriels, et organisations non gouvernementales."
      }
    ]
  },

  {
    id: "up-faseg-fc",
    nom: "Finance et Comptabilité (FC)",
    etablissement: "Faculté des Sciences Économiques et de Gestion (FASEG)",
    universite: "UP",
    series_autorisees: ["B", "C", "D", "G2", "G3"],
    matieres_clefs: ["maths", "francais", "anglais"],
    debouches: [
      {
        titre: "Cabinets conseils en finances",
        role: "Consultant financier junior chargé de guider les choix d'investissement et d'optimiser la structure du capital.",
        actions: "Analyser la rentabilité financière des investissements, structurer des plans de refinancement ou de levée de dette, et évaluer la valeur financière des entreprises dans le cadre de cessions ou partenariats.",
        structures: "Cabinets de conseil financier, Sociétés de Gestion et d'Intermédiation (SGI), et banques d'affaires."
      },
      {
        titre: "Cabinets conseils en comptabilité",
        role: "Collaborateur ou réviseur comptable externe assurant la sincérité et le contrôle de régularité des comptes clients.",
        actions: "Saisir les opérations comptables complexes, auditer les écritures de fin d'exercice, monter la liasse fiscale annuelle (états financiers SYSCOHADA), et conseiller les entreprises sur le plan comptable.",
        structures: "Cabinets d'expertise comptable, cabinets de commissariat aux comptes, et agences de gestion agréées."
      },
      {
        titre: "Cabinets d'audit en gestion",
        role: "Auditeur interne ou externe dédié à la performance organisationnelle et à l'évaluation des contrôles de gestion.",
        actions: "Vérifier la bonne exécution des procédures internes, concevoir ou évaluer des systèmes de contrôle de gestion (tableaux de bord, indicateurs de rentabilité), et identifier les zones de pertes financières.",
        structures: "Cabinets d'audit internationaux ou locaux, et directions du contrôle de gestion des grandes entreprises."
      },
      {
        titre: "Structures financières (Ministères, Entreprises)",
        role: "Gestionnaire financier ou comptable interne veillant à la saine gestion des ressources budgétaires.",
        actions: "Élaborer les budgets prévisionnels annuels, piloter la trésorerie opérationnelle, assurer la conformité des déclarations fiscales et sociales, et produire les états de synthèse budgétaire.",
        structures: "Directions Administratives et Financières (DAF) de PME/PMI, banques de détail, et directions financières des ministères."
      }
    ]
  },

  {
    id: "up-fdsp-droit-prive",
    nom: "Droit Privé",
    etablissement: "Faculté de Droit et Sciences Politiques (FDSP)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["francais", "philo", "hg"],
    debouches: [
      {
        titre: "Attaché des services administratifs",
        role: "Cadre juridique public ou privé veillant à la légalité des actes de gestion courante et à la conformité aux textes.",
        actions: "Rédiger des notes juridiques, préparer les décisions administratives, instruire les dossiers de marchés publics, et gérer le précontentieux contractuel de la structure.",
        structures: "Mairies (services juridiques), préfectures, secrétariats généraux des ministères, et établissements publics."
      },
      {
        titre: "Juristes des affaires",
        role: "Conseiller juridique interne protégeant les intérêts commerciaux, contractuels et réglementaires de l'entreprise.",
        actions: "Rédiger et négocier les baux commerciaux et contrats de travail, assurer la conformité aux normes OHADA, gérer la vie sociale de l'entité (assemblées), et défendre la structure en cas de litiges.",
        structures: "Banques, compagnies d'assurance, opérateurs de télécommunications, et grandes PME commerciales ou industrielles."
      },
      {
        titre: "Greffier",
        role: "Garant de l'authenticité des procédures judiciaires et collaborateur direct des magistrats au tribunal.",
        actions: "Assister le juge lors des audiences, transcrire fidèlement les débats et décisions, conserver les minutes et archives du tribunal, et délivrer les actes authentiques de justice.",
        structures: "Tribunaux de Première Instance, Tribunaux de Commerce, Cours d'Appel, et Cour Suprême."
      },
      {
        titre: "Collaborateurs de profession judiciaire (avocats, huissiers, notaires)",
        role: "Assistant juridique de haut niveau œuvrant au sein d'une étude ou d'un cabinet professionnel libéral.",
        actions: "Effectuer des recherches doctrinales et jurisprudentielles, rédiger des projets d'actes (notariés, conclusions d'avocats, assignations d'huissiers), et instruire les dossiers de fond des clients.",
        structures: "Cabinets d'avocats, études de notaires, et charges d'huissiers de justice."
      },
      {
        titre: "Magistrature",
        role: "Garant des libertés et de l'application stricte de la loi, chargé de trancher les litiges civils ou commerciaux.",
        actions: "Analyser les pièces de dossiers judiciaires, présider les audiences de jugement, délibérer en toute partialité et rendre des décisions de justice opposables.",
        structures: "Tribunaux d'Instance, Tribunaux de Première Instance, et Cours de cassation (accessible via concours d'entrée à l'ENAM)."
      }
    ]
  },

  {
    id: "up-fdsp-droit-public",
    nom: "Droit Public",
    etablissement: "Faculté de Droit et Sciences Politiques (FDSP)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["francais", "philo", "hg"],
    debouches: [
      {
        titre: "Attaché de services administratifs",
        role: "Cadre spécialisé dans la gestion publique et la sécurité juridique des décisions et actes réglementaires de l'État.",
        actions: "Rédiger des projets d'arrêtés ou de circulaires administratifs, assurer le contrôle de légalité des actes internes, et traiter les contentieux devant la chambre administrative.",
        structures: "Directions départementales des ministères, secrétariats d'institutions républicaines, et grandes municipalités."
      },
      {
        titre: "Diplomatie",
        role: "Représentant de l'État chargé du maintien des relations bilatérales et multilatérales et de la mise en œuvre du droit international.",
        actions: "Rédiger des notes d'analyse diplomatique, négocier des accords de coopération ou d'investissement, et assister les délégations nationales dans les instances internationales.",
        structures: "Ministère des Affaires Étrangères, ambassades, consulats, et organisations régionales (CEDEAO, UEMOA)."
      },
      {
        titre: "Attaché politique",
        role: "Conseiller stratégique de cabinet chargé du suivi des affaires institutionnelles et réglementaires auprès des élus.",
        actions: "Rédiger des discours et propositions de lois, assurer la veille réglementaire sur les réformes législatives, et organiser les relations avec les acteurs de la société civile et les médias.",
        structures: "Cabinet ministériel, Assemblée Nationale (cabinets des députés), et directions des partis politiques."
      },
      {
        titre: "Conseiller juridique",
        role: "Expert en droit public et constitutionnel chargé d'apporter un éclairage juridique aux administrations et institutions.",
        actions: "Formuler des avis juridiques motivés sur les risques de constitutionnalité ou de légalité, auditer les contrats publics complexes (PPP), et sécuriser les réformes institutionnelles.",
        structures: "Agences publiques de régulation, cabinets de conseil en politiques publiques, et hautes institutions (Cour Constitutionnelle)."
      },
      {
        titre: "Fonctionnaire public",
        role: "Cadre de commandement ou de gestion intégré à la haute fonction publique d'État ou territoriale.",
        actions: "Piloter la mise en œuvre opérationnelle des politiques publiques sectorielles, gérer les budgets publics alloués, et manager les équipes d'agents publics sur le terrain.",
        structures: "Ministères de l'administration publique, préfectures, agences de l'État, et collectivités territoriales décentralisées."
      }
    ]
  },

  {
    id: "up-fdsp-sciences-politiques",
    nom: "Sciences Politiques et Relations Internationales",
    etablissement: "Faculté de Droit et Sciences Politiques (FDSP)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B", "C", "D", "G1", "G2", "G3"],
    matieres_clefs: ["francais", "philo", "hg"],
    debouches: [
      {
        titre: "Attaché des services culturels",
        role: "Médiateur et promoteur culturel chargé de la diplomatie culturelle et de la valorisation artistique à l'échelle internationale.",
        actions: "Concevoir des événements et des festivals favorisant le dialogue des cultures, piloter des projets d'échanges inter-universitaires, et coordonner les actions des centres culturels.",
        structures: "Ambassades (services culturels), instituts de coopération (ex: Institut Français), et centres culturels nationaux."
      },
      {
        titre: "Guide touristique",
        role: "Ambassadeur du patrimoine historique et culturel chargé d'animer et d'accompagner des parcours de visites spécialisés.",
        actions: "Concevoir des itinéraires touristiques enrichis, documenter l'histoire géopolitique et culturelle des sites, et encadrer les flux de visiteurs internationaux en garantissant leur sécurité.",
        structures: "Agences de voyages, offices de tourisme communaux, agences de développement du tourisme (ANPT), et musées."
      },
      {
        titre: "Conseiller politique",
        role: "Analyste stratégique de premier plan orientant les prises de parole et les choix idéologiques des acteurs politiques.",
        actions: "Réaliser des décryptages de l'opinion publique, rédiger des éléments de langage et des notes de cadrage sur l'actualité socio-économique, et concevoir des stratégies de campagne électorale.",
        structures: "Cabinets de leaders politiques, directions de partis politiques, et cabinets d'affaires publiques."
      },
      {
        titre: "Analyste de politique publique",
        role: "Auditeur spécialisé dans l'évaluation des programmes étatiques et des interventions d'aide au développement.",
        actions: "Définir les critères d'évaluation d'impact, mesurer l'efficacité sociale et financière des réformes, collecter les retours des bénéficiaires, et formaliser des recommandations d'ajustement structurel.",
        structures: "Think tanks, grands cabinets de conseil en développement, bureaux d'évaluation ministériels, et ONG de plaidoyer."
      },
      {
        titre: "Lobbyiste",
        role: "Représentant d'intérêts chargé de faire valoir les positions d'une entité auprès des décideurs législatifs et exécutifs.",
        actions: "Suivre l'élaboration des projets de lois, rédiger des argumentaires techniques et d'impact pour les décideurs, et organiser des plateformes de dialogue public-privé réglementées.",
        structures: "Fédérations patronales (CNP), chambres consulaires (CCI), grandes multinationales, et cabinets de lobbying."
      },
      {
        titre: "Député",
        role: "Élu du peuple, membre du pouvoir législatif, chargé de voter les lois et de contrôler l'action du gouvernement.",
        actions: "Analyser, amender et voter les projets de lois en commission et en plénière, poser des questions orales ou écrites aux ministres, et mener des missions d'information sur le terrain.",
        structures: "Assemblée Nationale du Bénin."
      },
      {
        titre: "Agent de relations publiques",
        role: "Spécialiste de la communication corporate et institutionnelle chargé de soigner la réputation d'une organisation.",
        actions: "Gérer les relations avec les médias nationaux et internationaux, organiser les relations institutionnelles B2G, et concevoir les contenus de communication corporate.",
        structures: "Grandes entreprises privées, directions de la communication des ministères, et agences de communication."
      }
    ]
  },

  {
    id: "up-flash-allemand",
    nom: "Allemand",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B"],
    matieres_clefs: ["francais", "philo", "allemand"],
    debouches: [
      {
        titre: "Enseignement",
        role: "Enseignant du secondaire chargé de l'apprentissage de la langue et de la culture germanique.",
        actions: "Élaborer les fiches pédagogiques, animer les cours théoriques et pratiques d'expression orale/écrite, et évaluer les compétences linguistiques des élèves selon le programme par compétences.",
        structures: "Collèges et Lycées d'Enseignement Général (publics et privés), et centres de langues."
      },
      {
        titre: "Interprète",
        role: "Professionnel de la communication orale traduisant en temps réel des discours du ou vers l'allemand.",
        actions: "Assurer l'interprétation consécutive ou simultanée lors de séminaires internationaux, accompagner les délégations germanophones lors de missions officielles, et veiller à la fidélité du message culturel.",
        structures: "Agences de traduction, organismes internationaux, cabinets de diplomatie, et services d'interprétation indépendants."
      },
      {
        titre: "Traducteur",
        role: "Expert en communication écrite convertissant des textes officiels, techniques ou littéraires d'une langue à l'autre.",
        actions: "Traduire des documents juridiques, des manuels techniques ou des rapports institutionnels, garantir la justesse terminologique, et assurer la révision comparative de textes traduits.",
        structures: "Cabinets de traduction agréés, maisons d'édition, grandes organisations internationales, et auto-emploi."
      },
      {
        titre: "Agent dans le tourisme",
        role: "Professionnel de l'accueil et du voyage dédié à la prise en charge d'une clientèle germanophone.",
        actions: "Concevoir et commercialiser des packages de voyages adaptés, guider les touristes sur les sites historiques en langue allemande, et nouer des partenariats avec des tour-opérateurs basés en Europe centrale.",
        structures: "Agences de réceptif touristique, grands complexes hôteliers, offices du tourisme, et compagnies de transport de voyageurs."
      },
      {
        titre: "Coopération internationale",
        role: "Chargé de projet ou assistant technique au sein d'organismes de développement bilatéraux.",
        actions: "Faciliter la liaison et la communication avec les partenaires germanophones, participer au suivi opérationnel et administratif des projets financés, et rédiger les rapports narratifs de terrain en allemand.",
        structures: "Agences de coopération allemande (GIZ, KfW), fondations politiques allemandes (Hanns Seidel, Friedrich Ebert), et ONG."
      }
    ]
  },

  {
    id: "up-flash-anglais",
    nom: "Anglais",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DEAT"],
    matieres_clefs: ["francais", "anglais", "maths"],
    debouches: [
      {
        titre: "Enseignement",
        role: "Professeur du secondaire chargé de l'enseignement de l'anglais comme langue seconde.",
        actions: "Concevoir les leçons en s'appuyant sur l'approche par compétences, animer les activités de compréhension et de production, et évaluer les élèves pour les examens officiels (BEPC, Bac).",
        structures: "Collèges et Lycées d'Enseignement Général et Technique, et instituts de formation professionnelle."
      },
      {
        titre: "Interprète",
        role: "Professionnel traduisant instantanément la parole d'un locuteur lors de rencontres bilingues ou multilingues.",
        actions: "Réaliser de l'interprétation de conférence (simultanée) ou de liaison, traduire les échanges lors de négociations d'affaires, et maîtriser le jargon technique spécifique aux thématiques abordées.",
        structures: "Agences événementielles internationales, institutions sous-régionales (CEDEAO), ambassades, et consulting indépendant."
      },
      {
        titre: "Traducteur",
        role: "Spécialiste de la transcription écrite de contenus anglophones vers le français ou inversement.",
        actions: "Traduire des contrats d'affaires, des rapports de développement, des articles scientifiques ou des contenus de sites web, en respectant scrupuleusement le sens d'origine et la fluidité linguistique.",
        structures: "Bureaux de traduction, directions de communication des multinationales, et agences éditoriales web."
      },
      {
        titre: "Agent dans le tourisme",
        role: "Coordonnateur ou conseiller voyage assurant l'interface avec la clientèle internationale anglophone.",
        actions: "Prendre en charge les réservations et demandes spécifiques des voyageurs, organiser des circuits touristiques guidés en anglais, et gérer les relations commerciales avec les plateformes de réservation mondiales.",
        structures: "Tours-opérateurs locaux, hôtels de standing international, et agences de tourisme d'affaires."
      },
      {
        titre: "Rédacteur technique",
        role: "Professionnel chargé de rédiger des documentations claires, précises et normées en langue anglaise.",
        actions: "Concevoir des guides d'utilisation de produits, des manuels de procédures internes ou des bases de connaissances d'aide logicielle, en vulgarisant des concepts techniques complexes.",
        structures: "Entreprises de services du numérique (ESN), industries exportatrices, et start-ups technologiques."
      },
      {
        titre: "Communication internationale",
        role: "Chargé de communication ou gestionnaire de communauté (Community Manager) évoluant dans un univers bilingue.",
        actions: "Animer les réseaux sociaux de l'organisation en anglais, rédiger des communiqués de presse internationaux, et coordonner la stratégie de marque globale avec les filiales étrangères.",
        structures: "Multinationales (secteur bancaire, logistique, tech), ONG d'envergure mondiale, et agences de relations publiques."
      }
    ]
  },

  {
    id: "up-flash-espagnol",
    nom: "Espagnol",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B"],
    matieres_clefs: ["francais", "philo", "espagnol"],
    debouches: [
      {
        titre: "Enseignement",
        role: "Professeur de langue espagnole transmettant les compétences linguistiques et culturelles du monde hispanique.",
        actions: "Préparer les cours selon les guides d'exécution en vigueur, animer les activités interactives d'expression écrite et orale, et encadrer les clubs culturels ibériques de l'établissement.",
        structures: "Lycées et Collèges d'Enseignement Général (publics et privés), et instituts de langues privés."
      },
      {
        titre: "Interprète",
        role: "Professionnel de la traduction orale traduisant du ou vers l'espagnol en temps réel.",
        actions: "Assurer la traduction des débats lors de colloques internationaux ou de rencontres commerciales B2B, et faciliter le dialogue entre les experts nationaux et les partenaires hispanophones.",
        structures: "Cabinets de consulting, agences de traduction, et services diplomatiques indépendants."
      },
      {
        titre: "Traducteur",
        role: "Professionnel chargé de transposer des documents écrits de langue espagnole vers le français et inversement.",
        actions: "Traduire des textes de lois, des documents commerciaux, administratifs ou de projets d'aide au développement, en garantissant la fidélité et la fluidité stylistique.",
        structures: "Agences de traduction, ONG de développement, et entreprises d'import-export en lien avec le monde hispanique."
      },
      {
        titre: "Agent dans le tourisme",
        role: "Concepteur de produits touristiques ou guide spécialisé pour les flux de voyageurs hispanophones.",
        actions: "Planifier l'accueil et le séjour de touristes d'origine espagnole ou latino-américaine, assurer le guidage linguistique sur les hauts lieux culturels locaux, et gérer la relation client.",
        structures: "Agences de voyages réceptives, compagnies aériennes, structures hôtelières et de loisirs."
      },
      {
        titre: "Relations diplomatiques",
        role: "Collaborateur ou assistant technique de chancellerie affecté au suivi des zones géographiques hispanophones.",
        actions: "Rédiger des revues de presse et notes de synthèse en espagnol sur l'actualité politique et économique, et appuyer la préparation logistique des visites officielles de délégations.",
        structures: "Ambassades et consulats des pays hispaniques, et directions géographiques du Ministère des Affaires Étrangères."
      }
    ]
  },

  {
    id: "up-flash-geographie",
    nom: "Géographie et Aménagement du Territoire",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DEAT"],
    matieres_clefs: ["francais", "anglais", "maths"],
    debouches: [
      {
        titre: "Enseignement",
        role: "Professeur d'Histoire-Géographie transmettant les clés de compréhension spatiale et temporelle du monde aux élèves.",
        actions: "Concevoir les séquences pédagogiques, animer les cours théoriques (cartographie, démographie, géographie économique), et évaluer les élèves pour les examens d'État.",
        structures: "Collèges et Lycées d'Enseignement Général, et écoles normales de formation."
      },
      {
        titre: "Urbaniste",
        role: "Aménageur territorial junior participant à la planification urbaine et à la restructuration des espaces habités.",
        actions: "Participer à l'élaboration des Schémas Directeurs d'Aménagement Urbain (SDAU), concevoir les plans d'occupation des sols, et analyser l'impact socio-spatial des infrastructures de transport.",
        structures: "Ministère du Cadre de Vie, directions techniques des mairies, et cabinets d'urbanisme et d'architecture."
      },
      {
        titre: "Climatologiste",
        role: "Analyste environnemental chargé de suivre l'évolution des paramètres climatiques et d'évaluer les risques associés.",
        actions: "Collecter et traiter les données météorologiques, modéliser les impacts locaux du changement climatique (inondations, sécheresses), et formuler des plans d'adaptation pour les communautés vulnérables.",
        structures: "Agence Nationale de la Météorologie (Météo-Bénin), observatoires du climat, et ONG de protection environnementale."
      },
      {
        titre: "Géomorphologue",
        role: "Expert en sciences de la terre étudiant la dynamique et l'évolution des formes du relief terrestre.",
        actions: "Réaliser des diagnostics de dynamique côtière (érosion marine), évaluer les risques d'éboulement ou d'envasement des plans d'eau, et cartographier la vulnérabilité géologique des sols avant travaux.",
        structures: "Bureaux d'études géotechniques et environnementaux, instituts de recherche géologique, et agences de protection du littoral."
      },
      {
        titre: "Hydrologue",
        role: "Spécialiste de la dynamique des eaux de surface et souterraines et de la gestion durable des bassins versants.",
        actions: "Mesurer les débits des cours d'eau, modéliser le comportement des crues pour prévenir les inondations, et participer à la planification des infrastructures hydrauliques (barrages, digues).",
        structures: "Direction Générale de l'Eau, agences de bassin, et cabinets d'ingénierie en hydraulique et environnement."
      },
      {
        titre: "Aménagement du territoire",
        role: "Chargé de mission ou cartographe expert en Systèmes d'Information Géographique (SIG) pour le développement local.",
        actions: "Concevoir des bases de données géospatiales (SIG), réaliser des cartes thématiques pour orienter l'implantation d'écoles ou d'hôpitaux, et appuyer la rédaction des Plans de Développement Communaux (PDC).",
        structures: "Institut National de Cartographie (IGN), services de planification des mairies, et projets de développement rural."
      }
    ]
  },

  {
    id: "up-flash-Sociologie-Antropologie",
    nom: "Sociologie-Antropologie",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
    universite: "UP",
    series_autorisees: ["A1", "A2", "B", "C", "D", "DEAT"],
    matieres_clefs: ["francais", "anglais", "maths"],
    debouches: [
      {
        titre: "Employé dans les centres Sociaux",
        role: "Conseiller socio-éducatif ou agent de terrain chargé de la prise en charge des publics vulnérables.",
        actions: "Mener des enquêtes sociales auprès des familles en difficulté, concevoir des plans d'accompagnement individualisés, et coordonner l'accès aux aides d'urgence et programmes d'insertion.",
        structures: "Centres de Promotion Sociale (CPS) du Ministère des Affaires Sociales, et centres d'accueil pour enfants ou femmes en situation difficile."
      },
      {
        titre: "Centre de recherche",
        role: "Assistant de recherche en sciences humaines effectuant les investigations de terrain qualitatives et quantitatives.",
        actions: "Concevoir les grilles d'entretien et questionnaires, animer des focus groups sur le terrain, transcrire et coder les données recueillies, et participer à la rédaction d'analyses scientifiques ou sociologiques.",
        structures: "Laboratoires de recherche universitaires (LASDEL ou similaires), instituts de sciences sociales, et observatoires de développement."
      },
      {
        titre: "Ministère",
        role: "Chargé d'études ou conseiller technique sectoriel chargé de l'intégration de la dimension humaine dans les politiques publiques.",
        actions: "Analyser l'impact social potentiel des projets de lois ou de décrets, rédiger des notes de cadrage sur les dynamiques culturelles et communautaires, et suivre l'exécution des plans nationaux d'équité genre.",
        structures: "Ministère de la Santé, Ministère des Affaires Sociales, et Ministère de la Culture."
      },
      {
        titre: "ONG",
        role: "Coordonnateur de projets communautaires ou spécialiste en mobilisation sociale chargé du dialogue avec les populations.",
        actions: "Diagnostiquer les leviers et freins culturels à l'adoption de nouveaux comportements (hygiène, éducation), concevoir des stratégies d'engagement participatif, et piloter les enquêtes CAP (Connaissances, Attitudes, Pratiques).",
        structures: "ONG nationales et internationales de développement sanitaire, éducatif ou environnemental."
      },
      {
        titre: "Projet",
        role: "Responsable ou expert en développement communautaire assurant l'ancrage local des infrastructures.",
        actions: "Mettre en place des comités de gestion communautaire (ex: pour des forages d'eau ou écoles), prévenir et arbitrer les tensions foncières ou sociales liées au projet, et assurer le suivi des indicateurs d'acceptabilité sociale.",
        structures: "Grands projets de développement rural financés par les bailleurs de fonds internationaux (Banque Mondiale, BAD, etc.)."
      },
      {
        titre: "Médiateur",
        role: "Facilitateur social chargé du règlement pacifique des litiges de proximité et de la cohésion communautaire.",
        actions: "Animer des séances de médiation entre éleveurs et agriculteurs ou au sein des familles, sensibiliser aux droits humains et méthodes non violentes, et rétablir le dialogue social dans les zones en tension.",
        structures: "Cellules de médiation communales, associations de défense des droits humains, et préfectures."
      }
    ]
  },

  {
    id: "up-flash-Lettres-Modernes",
    nom: "Lettres-Modernes",
    etablissement: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
    universite: "UP",
    series_autorisees: ["A1", "A2"],
    matieres_clefs: ["francais", "philo", "hg"],
    debouches: [
      {
        titre: "Enseignement",
        role: "Professeur de Français et de Littérature transmettant la maîtrise de la langue et le goût des textes littéraires aux élèves.",
        actions: "Concevoir les séances de cours (grammaire, conjugaison, étude de textes), animer les leçons et les ateliers d'écriture, et évaluer l'expression écrite et la capacité d'analyse critique des élèves.",
        structures: "Collèges et Lycées d'Enseignement Général (publics et privés), et écoles de formation pédagogique."
      },
      {
        titre: "Interprète",
        role: "Professionnel de la communication orale traduisant des discours ou échanges verbaux à l'aide d'une excellente maîtrise stylistique.",
        actions: "Assurer la liaison linguistique lors de rencontres culturelles, d'ateliers créatifs ou de délégations de la francophonie, en veillant aux nuances lexicales et au respect du niveau de langue adapté.",
        structures: "Agences événementielles culturelles, institutions de la francophonie (OIF), et consulting indépendant."
      },
      {
        titre: "Traducteur",
        role: "Spécialiste de la communication écrite assurant l'adaptation stylistique et littéraire de documents.",
        actions: "Traduire ou adapter des œuvres littéraires, des articles de presse, des scripts ou des contenus culturels, en veillant à la clarté syntaxique, à l'élégance de la langue et au respect des figures de style de l'auteur original.",
        structures: "Maisons d'édition, revues culturelles, agences de rédaction, et auto-emploi."
      }
    ]
  },

  // ========================================================================
  // III - UNIVERSITÉ NATIONALE DES SCIENCES, TECHNOLOGIES, INGÉNIERIE ET MATHÉMATIQUES (UNSTIM)
  // ========================================================================
  {
    id: "unstim-insti-genie-civil",
    nom: "Génie Civil",
    etablissement: "Institut National Supérieur de Technologie Industrielle (INSTI)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "F4", "DT/BTP", "DT/DPB", "DT/OG"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Techniciens de travaux du génie civil",
        role: "Conducteur de travaux junior chargé de l'exécution opérationnelle, de la planification et du suivi des chantiers de construction.",
        actions: "Superviser les équipes d'ouvriers, veiller au respect du planning d'approvisionnement en matériaux, interpréter les plans d'exécution béton armé, et contrôler la conformité des ouvrages réalisés.",
        structures: "Entreprises de BTP, grandes sociétés de construction d'infrastructures routières ou hydrauliques."
      },
      {
        titre: "Contrôleurs de chantiers",
        role: "Représentant technique de la maîtrise d'œuvre veillant à la stricte application des cahiers des charges et des normes de sécurité.",
        actions: "Inspecter régulièrement l'avancement des travaux, valider la conformité des matériaux reçus sur site, vérifier la mise en œuvre des règles de l'art, et consigner les observations dans le journal de chantier.",
        structures: "Bureaux de contrôle technique (ex: SOCOTEC, Veritas), cabinets de maîtrise d'œuvre, et directions de supervision."
      },
      {
        titre: "Assistants des experts géomètres",
        role: "Opérateur topographe de terrain chargé des mesures, des levés et des implantations d'ouvrages.",
        actions: "Manipuler les stations totales et récepteurs GNSS pour effectuer les levés topographiques, réaliser des implantations d'axes de routes ou de bâtiments, et traiter les données sur logiciels DAO.",
        structures: "Cabinets de géomètres-experts agréés, brigades topographiques des grandes entreprises de TP."
      },
      {
        titre: "Cabinets d'architecture",
        role: "Dessinateur-projeteur en structure ou technicien d'études chargé de la modélisation technique des projets.",
        actions: "Traduire les esquisses architecturales en plans de coffrage et de ferraillage, effectuer des métrés d'ouvrages, et participer à la rédaction des pièces écrites (CCTP) des projets de bâtiment.",
        structures: "Cabinets d'architecture, bureaux d'études techniques (BET) structures."
      },
      {
        titre: "Agences immobilières",
        role: "Conseiller technique ou chargé d'affaires responsable de l'évaluation, du suivi technique et de la maintenance du patrimoine bâti.",
        actions: "Réaliser des diagnostics techniques de l'état des bâtiments, estimer le coût des travaux de rénovation ou de réhabilitation, et superviser les interventions de maintenance des corps d'état secondaires.",
        structures: "Sociétés de promotion immobilière, agences de gestion de patrimoine, et foncières privées."
      }
    ]
  },

  {
    id: "unstim-insti-genie-energetique",
    nom: "Génie Énergétique (Énergies Renouvelables et Systèmes Énergétiques)",
    etablissement: "Institut National Supérieur de Technologie Industrielle (INSTI)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "F2", "F3", "DT/Electrotech"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Techniciens en industrie électrique et électronique",
        role: "Technicien de maintenance et d'exploitation des installations de conversion et de distribution électrique industrielle.",
        actions: "Assurer la maintenance préventive et corrective des armoires électriques de puissance, configurer les variateurs de vitesse, et diagnostiquer les pannes sur les réseaux de distribution internes.",
        structures: "Usines de production industrielle, centrales électriques, et sous-stations de distribution d'énergie."
      },
      {
        titre: "Métiers du bâtiment",
        role: "Superviseur des lots techniques d'électricité, de courants forts et faibles au sein des chantiers de construction.",
        actions: "Superviser la pose des réseaux de câblages, valider l'équilibrage des phases des tableaux électriques divisionnaires, et contrôler la mise en œuvre des installations de secours (groupes électrogènes, onduleurs).",
        structures: "Entreprises d'installations électriques du bâtiment, et PME d'intégration de systèmes électriques."
      },
      {
        titre: "Installations pour énergies renouvelables",
        role: "Technicien supérieur photovoltaïque et éolien spécialisé dans le dimensionnement opérationnel et la pose de systèmes autonomes ou hybrides.",
        actions: "Calculer le dimensionnement des parcs de batteries et des champs de panneaux solaires, superviser l'installation des onduleurs et régulateurs de charge, et assurer la maintenance des installations solaires décentralisées.",
        structures: "Entreprises spécialisées en énergie solaire, agences d'électrification rurale, et ONG de développement."
      },
      {
        titre: "Audit et efficacité énergétique",
        role: "Technicien conseiller en performance énergétique chargé d'optimiser la consommation des infrastructures industrielles ou tertiaires.",
        actions: "Déployer des campagnes de mesures d'énergie (pose de compteurs), analyser les profils de consommation électrique, identify les gisements d'économies d'énergie, et proposer des solutions technologiques de substitution performantes.",
        structures: "Bureaux d'études en efficacité énergétique, agences nationales de l'énergie, et grandes industries."
      }
    ]
  },

  {
    id: "unstim-insti-froid-climatisation",
    nom: "Génie Énergétique (Froid et climatisation)",
    etablissement: "Institut National Supérieur de Technologie Industrielle (INSTI)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "F3", "DT/FC"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Techniciens en froid et climatisation de bâtiment et automobile",
        role: "Frigoriste spécialisé chargé de l'installation, du réglage et du dépannage des systèmes de conditionnement d'air et de réfrigération.",
        actions: "Réaliser le montage des circuits frigorifiques (brasage, raccordement), effectuer la charge en fluide frigorigène dans le respect des normes d'étanchéité, paramétrer les régulateurs thermiques, et réparer les climatisations automobiles et résidentielles.",
        structures: "Sociétés spécialisées en génie climatique, ateliers de maintenance automobile de concessionnaires, et services de maintenance technique."
      },
      {
        titre: "Métiers du bâtiment",
        role: "Technicien d'études ou de chantier HVAC chargé du déploiement des installations thermiques et de traitement de l'air.",
        actions: "Interpréter les plans de réseaux aérauliques et de tuyauteries frigorifiques, coordonner la pose des centrales de traitement d'air (CTA) et des groupes d'eau glacée, et réaliser les essais d'équilibrage des débits.",
        structures: "Grandes entreprises de second œuvre du bâtiment, et bureaux d'études techniques fluides."
      },
      {
        titre: "Appareillage et instrumentation",
        role: "Technicien de maintenance des boucles de régulation et de contrôle des processus thermiques automatisés.",
        actions: "Calibrer les capteurs de température, de pression et d'humidité, assurer la maintenance des détendeurs électroniques et des compresseurs, et tester les automatismes de sécurité des installations frigorifiques industrielles.",
        structures: "Entrepôts frigorifiques, usines agroalimentaires (chaîne du froid), et équipementiers de régulation thermique."
      }
    ]
  },

  {
    id: "unstim-insti-info-telecom",
    nom: "Génie Électrique et Informatique (Informatique et Télécommunications)",
    etablissement: "Institut National Supérieur de Technologie Industrielle (INSTI)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "F3", "DT/Electrotech"],
    matieres_clefs: ["maths", "anglais", "pct"],
    debouches: [
      {
        titre: "Service informatique d'entreprise",
        role: "Administrateur système et réseau junior veillant au maintien en conditions opérationnelles des infrastructures informatiques internes.",
        actions: "Gérer les droits d'accès des utilisateurs (Active Directory), configurer et déployer les commutateurs et routeurs, superviser les sauvegardes de données, et assurer le support technique du personnel.",
        structures: "Directions des Systèmes d'Information (DSI) de PME/PMI, banques, et administrations publiques."
      },
      {
        titre: "Cabinets d'audit ou ingénierie informatique",
        role: "Consultant technique junior ou analyste d'infrastructure participant à des missions de cadrage ou de déploiement d'architectures IT.",
        actions: "Auditer la sécurité des configurations réseaux, cartographier les vulnérabilités de l'infrastructure, et déployer des solutions de virtualisation ou de liaisons d'interconnexion (VPN, FH).",
        structures: "Sociétés de Services du Numérique (ESN), cabinets de conseil IT, et intégrateurs de réseaux et télécoms."
      },
      {
        titre: "Sociétés de maintenance informatique",
        role: "Technicien de support matériel et logiciel chargé du dépannage de niveau 1 et 2 et de l'optimisation des parcs informatiques.",
        actions: "Diagnostiquer et réparer les pannes matérielles (ordinateurs, serveurs, périphériques), réinstaller et optimiser les systèmes d'exploitation, et éradiquer les menaces applicatives (malwares).",
        structures: "PME de maintenance informatique, prestataires d'infogérance, et boutiques spécialisées de SAV technique."
      },
      {
        titre: "Agences de développement web et mobile",
        role: "Développeur Full-Stack ou intégrateur d'applications logicielles interconnectées aux réseaux.",
        actions: "Concevoir et développer des interfaces utilisateurs réactives, programmer des API robustes pour l'échange de données, et assurer l'interfaçage des applications avec les passerelles et infrastructures serveurs.",
        structures: "Agences digitales, start-ups technologiques, et éditeurs de solutions logicielles."
      }
    ]
  },

  {
    id: "unstim-insti-electronique",
    nom: "Génie Électrique et Informatique (Électronique et Électrotechnique)",
    etablissement: "Institut National Supérieur de Technologie Industrielle (INSTI)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "F3", "DT/Electrotech"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Électricité industrielle et de bâtiments",
        role: "Chef d'équipe ou technicien supérieur d'installations électriques de forte puissance.",
        actions: "Concevoir les schémas d'implantation électrique industrielle, piloter le câblage d'armoires TGBT (Tableau Général Basse Tension), et s'assurer de la bonne mise en œuvre des liaisons à la terre et des protections différentielles.",
        structures: "Entreprises d'installations industrielles, grands chantiers tertiaires, et PME d'électricité générale."
      },
      {
        titre: "Contrôle de procédés",
        role: "Technicien d'instrumentation chargé de la maintenance opérationnelle de la chaîne de mesure et d'actionnement industrielle.",
        actions: "Calibrer les transmetteurs de pression, débit et niveau, assurer la maintenance des vannes de régulation et des actionneurs pneumatiques ou électriques, et diagnostiquer les anomalies de transmission de signaux.",
        structures: "Usines de traitement d'eau, cimenteries, complexes agro-industriels, et industries manufacturières."
      },
      {
        titre: "Production et transport d'énergie électrique",
        role: "Opérateur ou technicien d'exploitation de réseaux de transport et de postes de transformation électrique.",
        actions: "Suivre les indicateurs de charge sur les lignes électriques, piloter les opérations de couplage ou découplage de générateurs, et effectuer la maintenance préventive sur les disjoncteurs et transformateurs de puissance.",
        structures: "Compagnies nationales d'électricité (ex: SBEE, CEB), centrales thermiques ou hydrauliques, et parcs solaires de grande envergure."
      },
      {
        titre: "Commande automatique de processus",
        role: "Technicien en automatisme chargé de la programmation et du dépannage des automates programmables industriels (API).",
        actions: "Modifier ou concevoir des programmes d'automates (langages Ladder, Grafcet), programmer les consoles de supervision d'interfaces homme-machine (IHM), et localiser les pannes logiques ou électriques des lignes automatisées.",
        structures: "Sociétés d'intégration d'automatismes, industries lourdes, et manufactures automatisées."
      }
    ]
  },

  {
    id: "unstim-insti-maintenance-auto",
    nom: "Maintenance des Systèmes (Maintenance Automobile)",
    etablissement: "Institut National Supérieur de Technologie Industrielle (INSTI)",
    universite: "UNSTIM",
    series_autorisees: ["F1", "F2", "F3", "DT/MA"],
    matieres_clefs: ["maths", "pct", "Mecanique"],
    debouches: [
      {
        titre: "Parcs automobiles",
        role: "Chef d'atelier ou adjoint au gestionnaire de flotte, responsable du maintien opérationnel et de la disponibilité des véhicules.",
        actions: "Planifier les calendriers de révision préventive de la flotte, superviser les équipes de mécaniciens, suivre l'indicateur de consommation de carburant, et optimiser les coûts liés à l'usure mécanique des pièces.",
        structures: "Grandes entreprises de logistique, administrations publiques dotées d'une flotte importante, et compagnies de transport."
      },
      {
        titre: "Concessionnaires automobiles",
        role: "Technicien diagnosticien spécialisé en mécatronique automobile pour la résolution de pannes complexes.",
        actions: "Utiliser la valise de diagnostic électronique pour identifier les codes d'erreur du calculateur, analyser les données des capteurs moteurs (injection, ABS, ESP), et réaliser le remplacement ou la programmation des modules électroniques défaillants.",
        structures: "Réseaux de services après-vente de marques automobiles majeures, et grands garages de réparation modernes."
      },
      {
        titre: "Gestionnaires de parc d'engins",
        role: "Superviseur de la maintenance des machines lourdes et des engins spéciaux de génie civil ou de manutention.",
        actions: "Suivre l'entretien des circuits hydrauliques haute pression (vérins, pompes), diagnostiquer les pannes de transmissions mécaniques complexes, et gérer les stocks de pièces de rechange critiques d'engins de chantier.",
        structures: "Entreprises de BTP, exploitants portuaires (manutention), et compagnies d'extraction minière ou de carrières."
      },
      {
        titre: "Usines de production",
        role: "Technicien de maintenance mécanique de l'outil de production industrielle.",
        actions: "Assurer la révision des moteurs thermiques stationnaires (groupes de secours), contrôler l'alignement des arbres de transmission et l'état des réducteurs mécaniques des lignes de convoyage ou d'emballage.",
        structures: "Brasseries, huileries, usines d'égrenage de coton, et manufactures diverses."
      },
      {
        titre: "Cabinets d'expertise et de conseils",
        role: "Technicien expert junior effectuant les évaluations techniques et chiffrées des véhicules.",
        actions: "Inspecter l'état structurel et mécanique des véhicules après sinistre, estimer le montant des réparations de carrosserie et de mécanique, et rédiger des rapports techniques d'expertise de valeur vénale.",
        structures: "Cabinets d'expertise automobile indépendants, et directions de sinistres des compagnies d'assurance."
      }
    ]
  },

  {
    id: "unstim-insti-genie-mecanique-et-productique",
    nom: "Génie mécanique et productique",
    etablissement: "Institut National Supérieur de Technologie Industrielle (INSTI)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "F1", "DT/MA", "DT/FM"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Maintenance industrielle",
        role: "Technicien supérieur de maintenance mécanique chargé de la réduction des temps d'arrêt des machines d'usine.",
        actions: "Déployer les plans de graissage et d'entretien mécanique périodique, remplacer les pièces d'usure (roulements, engrenages, joints), et intervenir en urgence sur les pannes de rupture mécanique.",
        structures: "Complexes agro-industriels, industries de transformation textile, et usines de conditionnement."
      },
      {
        titre: "Fabrication Mécanique",
        role: "Technicien d'usinage et de fabrication mécanique supervisant la production de pièces sur machines traditionnelles ou à commande numérique (MOCN).",
        actions: "Configurer les paramètres de coupe (vitesse, avance), programmer les trajectoires d'outils sur logiciels de FAO, piloter le tournage ou le fraisage de précision, et vérifier les cotes de tolérance des pièces produites.",
        structures: "Ateliers de construction mécanique de précision, unités de maintenance lourde, et usines d'assemblage."
      },
      {
        titre: "Parcs machines",
        role: "Responsable technique de la gestion opérationnelle et de la pérennité d'un ensemble d'équipements industriels mécanisés.",
        actions: "Suivre le taux d'utilisation et de rendement des machines, superviser les opérations de montage et d'alignement géométrique des nouveaux équipements, et gérer la documentation technique.",
        structures: "Directions techniques d'industries lourdes, cimenteries, et plateformes logistiques industrielles."
      },
      {
        titre: "Méthodes et controle de la qualité",
        role: "Technicien méthodes chargé de l'optimisation des gammes de fabrication et du contrôle métrologique.",
        actions: "Rédiger les fiches d'instructions de montage, définir les outillages de fabrication optimaux, et utiliser des instruments de mesure de haute précision (pieds à coulisse, micromètres) pour valider la qualité géométrique des produits.",
        structures: "Départements Qualité et Méthodes des industries de transformation mécanique ou de plasturgie."
      },
      {
        titre: "Maintenance des engins agricoles",
        role: "Technicien spécialisé assurant le bon fonctionnement opérationnel du matériel motorisé de traction agricole.",
        actions: "Réparer les systèmes de transmission et de prise de force des tracteurs, réviser les moteurs diesels lourds des moissonneuses, et entretenir les circuits de direction hydraulique assistée.",
        structures: "Centres nationaux de mécanisation agricole, coopératives de mécanisation rurale, et concessionnaires de matériel agricole."
      },
      {
        titre: "Mécanisation agricole",
        role: "Conseiller technique ou concepteur junior participant au choix et à l'adaptation technologique des outils aratoires.",
        actions: "Participer au prototypage d'outils simples de récolte ou de transformation locale, former les groupements de producteurs aux réglages mécaniques des semoirs ou charrues, et évaluer les performances de rendement des équipements.",
        structures: "Projets de développement de l'entrepreneuriat agricole, structures d'encadrement rural, et bureaux d'études spécialisés."
      }
    ]
  },

  {
    id: "unstim-ensbba-biotech-medicale",
    nom: "Biotechnologie Médicale",
    etablissement: "École Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "maths"],
    debouches: [
      {
        titre: "Techniciens supérieurs dans les laboratoires de diagnostics biomédicaux",
        role: "Technicien de laboratoire médical réalisant les analyses de biologie clinique pour l'aide au diagnostic médical.",
        actions: "Prendre en charge les prélèvements biologiques (sang, urine), réaliser les analyses hématologiques, biochimiques et microbiologiques automatisées ou manuelles, et valider techniquement la cohérence des résultats.",
        structures: "Laboratoires d'analyses médicales privés, laboratoires des centres hospitaliers (CHU, CHD, Hôpitaux de zone)."
      },
      {
        titre: "Contrôle de qualité des analyses",
        role: "Technicien assurance qualité veillant à l'exactitude, à la reproductibilité et à la fiabilité des analyses biomédicales délivrées.",
        actions: "Passer les échantillons de contrôle qualité internes (CQI) quotidiens, calibrer et qualifier les automates d'analyses, gérer le suivi des non-conformités de prélèvement, et appliquer les normes ISO 15189.",
        structures: "Grands laboratoires de référence nationaux, agences de sécurité sanitaire, et réseaux hospitaliers."
      },
      {
        titre: "Laboratoires de recherche",
        role: "Assistant de recherche biomédicale appliquant les techniques de biologie moléculaire ou cellulaire au sein d'équipes scientifiques.",
        actions: "Réaliser des extractions d'acides nucléiques (ADN/ARN), piloter des réactions d'amplification génique par PCR, maintenir les lignées cellulaires, et consigner scrupuleusement les protocoles expérimentaux.",
        structures: "Instituts de recherche médicale (ex: INRAB, IRD), centres de recherche sur les maladies infectieuses, et laboratoires universitaires."
      },
      {
        titre: "Production de bioproduits",
        role: "Technicien de bio-production supervisant la culture cellulaire ou microbienne pour l'extraction de substances d'intérêt therapeutic.",
        actions: "Préparer les milieux de culture stériles, piloter les bioréacteurs (fermenteurs), suivre les cinétiques de croissance, et mener les étapes de purification en aval (centrifugation, filtration) des principes actifs biomédicaux.",
        structures: "Unité de fabrication de réactifs de diagnostic, laboratoires biotechnologiques, et industries biomédicales régionales."
      }
    ]
  },

  {
    id: "unstim-ensbba-biotech-pharma",
    nom: "Biotechnologie Pharmaceutique",
    etablissement: "École Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "maths"],
    debouches: [
      {
        titre: "Techniciens supérieurs de valorisation des ressources biologiques",
        role: "Technicien en phyto-technologie chargé d'extraire, de cribler et de valoriser les molécules actives issues de la biodiversité.",
        actions: "Collecter et identifier les plantes médicinales de la flore locale, réaliser des extractions par solvants ou hydrodistillation, et isoler les grandes familles chimiques d'intérêt thérapeutique ou cosmétique.",
        structures: "Centres de pharmacopée traditionnelle, laboratoires de phyto-chimie, et instituts de recherche en sciences biologiques."
      },
      {
        titre: "Industries pharmaceutiques et cosmétiques",
        role: "Technicien de formulation ou de fabrication galénique veillant au bon déroulement de la mise en forme des produits.",
        actions: "Suivre les fiches de pesée des matières premières, piloter les équipements de mélange, de granulation ou d'émulsion, et conditionner les formes pharmaceutiques ou cosmétiques selon les Bonnes Pratiques de Fabrication (BPF).",
        structures: "Usines de fabrication de médicaments génériques, et PME de production de produits cosmétiques naturels."
      },
      {
        titre: "Laboratoires de substances naturelles",
        role: "Technicien d'analyses chromatographiques effectuant l'identification et le profilage chimique des extraits naturels.",
        actions: "Préparer les échantillons pour analyse, injecter les extraits dans les systèmes de chromatographie (CCM, HPLC), interpréter les profils chimiques, et quantifier les principes actifs majeurs.",
        structures: "Laboratoires universitaires de recherche en chimie organique, et centres de contrôle qualité d'extraits végétaux."
      },
      {
        titre: "Contrôle de qualité des produits",
        role: "Technicien de contrôle qualité physico-chimique et microbiologique des produits finis et matières premières.",
        actions: "Mesurer les paramètres physiques (pH, viscosité, densité), réaliser les tests de stérilité et de charge microbienne des produits, et valider la conformité des produits finis par rapport aux spécifications de mise sur le marché.",
        structures: "Laboratoires de contrôle qualité des industries de santé, et organismes nationaux de contrôle du médicament (ex: ANRP)."
      }
    ]
  },

  {
    id: "unstim-ensbba-genetique",
    nom: "Génétique Biotechnologies et Applications",
    etablissement: "École Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "maths"],
    debouches: [
      {
        titre: "Techniciens supérieurs de recherche en génétique humaine",
        role: "Technicien de cytogénétique et de génétique moléculaire réalisant la manipulation d'échantillons d'ADN.",
        actions: "Préparer les caryotypes (analyse des chromosomes), réaliser le séquençage de gènes cibles, exécuter les protocoles de génotypage, et utiliser les logiciels de bio-informatique de premier niveau pour aligner des séquences.",
        structures: "Laboratoires hospitalo-universitaires de génétique, et instituts de recherche en santé publique."
      },
      {
        titre: "Diagnostic dans les centres hospitaliers",
        role: "Technicien hospitalier chargé de la détection moléculaire des pathologies d'origine génétique ou infectieuse.",
        actions: "Réaliser des tests PCR en temps réel pour le dépistage de mutations génétiques constitutionnelles ou l'identification de génotypes viraux et bactériens, et tenir à jour le cahier de traçabilité des échantillons.",
        structures: "Services de biologie moléculaire des grands centres hospitaliers (CHU), et laboratoires de référence nationaux."
      },
      {
        titre: "Génétique et sélection en recherche agricole",
        role: "Technicien d'amélioration variétale et de sélection assistée par marqueurs (SAM) pour les espèces végétales et animales.",
        actions: "Réaliser le génotypage de populations de plantes ou d'animaux d'élevage, identifier les porteurs de caractères d'intérêt (résistance aux maladies, rendement), et suivre les croisements dirigés en station expérimentale.",
        structures: "Centres de recherche agronomique (INRAB, AfricaRice), fermes semencières, et instituts d'amélioration des cultures."
      }
    ]
  },

  {
    id: "unstim-ensbba-genie-biologique",
    nom: "Génie Biologique et Bioproduits (GBB)",
    etablissement: "École Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "maths"],
    debouches: [
      {
        titre: "Techniciens supérieurs dans les laboratoires d'analyse ou de recherche",
        role: "Technicien polyvalent en biosciences exécutant les protocoles analytiques de bio-ingénierie.",
        actions: "Préparer les réactifs et solutions chimiques, réaliser les dosages enzymatiques et immunologiques, mettre en œuvre les techniques d'électrophorèse, et veiller à l'entretien préventif du parc d'instruments.",
        structures: "Laboratoires de recherche en biotechnologies, plateformes d'analyses scientifiques privées ou d'État."
      },
      {
        titre: "Centres de recherches en biologie appliquée",
        role: "Assistant d'expérimentation biologique chargé du suivi des protocoles de tests in vitro ou in vivo.",
        actions: "Conduire les essais de toxicité d'extraits biologiques, suivre le comportement de cultures cellulaires ou de micro-organismes sous différentes conditions physico-chimiques, et structurer les bases de données d'expérimentation.",
        structures: "Centres de recherche sur le paludisme, instituts de recherche en sciences de la santé, et chaires universitaires."
      },
      {
        titre: "Assistant de recherche",
        role: "Collaborateur technique du chercheur principal gérant l'organisation et la logistique technique du laboratoire.",
        actions: "Passer les commandes de consommables spécifiques de biologie, mettre à jour la base documentaire des protocoles de sécurité biologique (normes de confinement), et participer à la mise en forme graphique des données d'études.",
        structures: "Laboratoires de R&D d'entreprises privées, et unités mixtes de recherche internationales."
      },
      {
        titic: "Technicien qualité",
        role: "Technicien d'assurance et de contrôle qualité des bioprocessus et des environnements contrôlés.",
        actions: "Réaliser le suivi microbiologique de l'air et des surfaces des salles blanches, contrôler la conformité microbiologique des eaux de process, et participer à la rédaction des procédures de nettoyage et de stérilisation.",
        structures: "Industries de transformation biologique, agro-industries, et laboratoires de production de solutions stériles."
      }
    ]
  },

  {
    id: "unstim-ensbba-dietetique",
    nom: "Diététique des aliments et Nutrition",
    etablissement: "École Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["svt", "pct", "maths"],
    debouches: [
      {
        titre: "Technicien supérieur en diététique",
        role: "Diététicien clinicien ou conseiller en hygiène alimentaire élaborant des plans de nutrition sur mesure.",
        actions: "Réaliser des bilans nutritionnels personnalisés (mesures anthropométriques), concevoir des régimes alimentaires adaptés aux pathologies (diabète, hypertension, obésité), et assurer le suivi de l'éducation nutritionnelle des patients.",
        structures: "Cabinets de diététique libéraux, centres de bien-être, et structures d'accompagnement médico-social."
      },
      {
        titre: "Contrôle de qualité des aliments",
        role: "Technicien de contrôle de sécurité sanitaire des aliments (HACCP) au sein de la chaîne agroalimentaire.",
        actions: "Prendre des échantillons de denrées alimentaires, réaliser les tests microbiologiques de détection des agents pathogènes (Salmonella, Listeria), inspecter l'hygiène des locaux de stockage, et valider la conformité des étiquetages nutritionnels.",
        structures: "Agences de sécurité sanitaire des aliments (ex: ABSSA), directions de contrôle de la qualité, et laboratoires agroalimentaires."
      },
      {
        titre: "Sociétés de restauration collective",
        role: "Responsable qualité nutritionnelle et hygiène supervisant la préparation des repas de masse.",
        actions: "Élaborer les plans de menus équilibrés respectant les grammages et les besoins nutritionnels spécifiques, valider le respect de la chaîne du froid lors de la préparation et de la liaison chaude/froide, et former le personnel aux règles d'hygiène.",
        structures: "Entreprises de restauration collective (cantines scolaires, d'entreprises), et cuisines centrales d'organisations."
      },
      {
        titre: "Centres hospitaliers",
        role: "Diététicien hospitalier chargé de l'organisation de la nutrition thérapeutique des patients hospitalisés.",
        actions: "Gérer l'interface avec la cuisine pour l'adaptation des repas aux prescriptions médicales des services (réanimation, pédiatrie), superviser les protocoles de nutrition entérale ou parentérale, et mener des audits de dénutrition.",
        structures: "Réseaux hospitaliers publics (CHU, CHD), cliniques médicales de court séjour, et centres de convalescence."
      },
      {
        titre: "Conseiller en éducation nutritionnelle",
        role: "Animateur de programmes de santé publique axés sur la prévention des maladies nutritionnelles.",
        actions: "Concevoir des supports de communication sur les bonnes pratiques alimentaires locales, animer des ateliers d'éducation nutritionnelle pour la lutte contre la malnutrition infantile ou les maladies métaboliques, et évaluer l'impact des campagnes.",
        structures: "ONG de développement sanitaire, programmes nationaux de nutrition, et services médico-sociaux des communes."
      }
    ]
  },

  {
    id: "unstim-fast-nati-maths-info",
    nom: "Mathématiques Informatiques",
    etablissement: "Faculté des Sciences et Techniques de Natitingou (FAST/Natitingou)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["anglais", "pct", "maths"],
    debouches: [
      {
        titre: "Cadres de télécommunications optiques",
        role: "Technicien d'infrastructures de transmission optique ou de réseaux de transport de données.",
        actions: "Modéliser le comportement de propagation des signaux lumineux, participer au dimensionnement des liaisons par fibre optique, et utiliser les réflectomètres (OTDR) pour localiser les pertes de signal ou les coupures de câbles.",
        structures: "Opérateurs de télécommunications, fournisseurs d'accès internet (FAI), et gestionnaires d'infrastructures numériques."
      },
      {
        titre: "Nouvelles technologies de l'information",
        role: "Analyste de données junior ou développeur d'algorithmes de traitement automatique de l'information.",
        actions: "Traiter et structurer des bases de données quantitatives en utilisant des langages de script (Python, R), concevoir des modèles mathématiques de prédiction simples, et implémenter des solutions applicatives pour l'automatisation des tâches.",
        structures: "Start-ups de la Tech, agences de services informatiques, et cellules d'analyse statistique."
      },
      {
        titre: "Enseignants des lycées et collèges",
        role: "Professeur certifié ou contractuel chargé de l'enseignement des mathématiques ou de l'informatique de base.",
        actions: "Préparer les leçons théoriques conformément au guide pédagogique d'État, dispenser les cours d'algèbre, d'analyse ou de programmation fondamentale, et évaluer les compétences des apprenants.",
        structures: "Collèges et Lycées d'Enseignement Général (publics et privés), et centres professionnels de formation numérique."
      },
      {
        titre: "Accès aux écoles d'ingénieur",
        role: "Étudiant de cycle d'ingénieur spécialisé, poursuivant une formation d'ingénierie de haut niveau après sélection.",
        actions: "Passer les concours ou sélections sur dossier pour intégrer les filières de spécialisation (Génie Logiciel, Data Science, Sécurité Informatique) afin de mener des projets complexes de R&D.",
        structures: "Écoles d'ingénieurs sous-régionales et internationales, instituts de technologie supérieurs."
      },
      {
        titre: "Master recherche ou professionnel",
        role: "Étudiant de second cycle universitaire s'orientant vers l'expertise pointue ou la recherche académique fondamentale.",
        actions: "Suivre des séminaires d'études avancées en mathématiques appliquées ou informatique théorique, mener un projet de mémoire de recherche original, et maîtriser la rédaction de publications scientifiques.",
        structures: "Facultés d'études supérieures, laboratoires universitaires, et écoles doctorales."
      }
    ]
  },

  {
    id: "unstim-fast-nati-physique-chimie",
    nom: "Physique Chimie",
    etablissement: "Faculté des Sciences et Techniques de Natitingou (FAST/Natitingou)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["anglais", "pct", "maths"],
    debouches: [
      {
        titre: "Cadres en météorologie, océanographie et balistique",
        role: "Technicien supérieur d'études environnementales ou d'analyse physique de données dynamiques.",
        actions: "Traiter les relevés de capteurs atmosphériques ou marins, appliquer les équations de la mécanique des fluides pour modéliser les prévisions locales ou côtières, et exploiter les outils d'imagerie satellite.",
        structures: "Agences nationales de météorologie, observatoires océanographiques, et instituts de recherche géophysique."
      },
      {
        titre: "Enseignants des lycées et collèges",
        role: "Professeur de Sciences Physiques, Chimie et Technologie (PCT) dans le second degré.",
        actions: "Planifier l'itinéraire pédagogique annuel, animer les cours théoriques et les séances de travaux pratiques en laboratoire (dosages, optique, électricité), et évaluer les compétences des classes pour les examens (BEPC, Bac).",
        structures: "Établissements d'enseignement secondaire publics et privés."
      },
      {
        titre: "Accès aux écoles d'ingénieur",
        role: "Étudiant en ingénierie industrielle ou des procédés poursuivant son parcours en cycle supérieur de spécialisation.",
        actions: "Intégrer par concours ou sur dossier des cursus d'ingénierie spécialisés (Génie chimique, Génie des matériaux, Énergies) pour acquérir les compétences d'encadrement technique d'usines.",
        structures: "Grandes écoles polytechniques, instituts supérieurs des sciences appliquées."
      },
      {
        titre: "Industries chimiques, agroalimentaires et pharmaceutiques",
        role: "Technicien de laboratoire de contrôle qualité physico-chimique ou d'optimisation des formulations de production.",
        actions: "Réaliser des analyses qualitatives et quantitatives de matières premières (spectrophotométrie, pH-métrie, titrages), vérifier la conformité des produits intermédiaires et finis aux normes industrielles, et consigner les rapports d'essais.",
        structures: "Laboratoires de contrôle qualité d'usines chimiques (peintures, plastiques), d'agro-industries (huileries, boissons) et de firmes de santé."
      }
    ]
  },

  {
    id: "unstim-ensgep-froid-clim",
    nom: "Froid et Climatisation",
    etablissement: "École Nationale Supérieure de Génie Énergétique et Procédés (ENSGEP)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "DT/FC"],
    matieres_clefs: ["maths", "anglais", "pct"],
    debouches: [
      {
        titre: "Technicien supérieur en installation, mise en service et maintenance d'équipements de froid et climatisation",
        role: "Chargé d'affaires ou technicien expert HVAC responsable du cycle de vie des installations de conditionnement d'air industrielles et tertiaires.",
        actions: "Concevoir les schémas d'implantation de centrales de traitement d'air (CTA), superviser les équipes de montage de tuyauteries et d'isolation thermique, exécuter la mise en service des systèmes de régulation numérique, et coordonner la maintenance curative des grands systèmes de réfrigération.",
        structures: "Sociétés d'ingénierie en génie climatique, industries agroalimentaires de grande taille, et plateformes logistiques frigorifiques."
      }
    ]
  },

  {
    id: "unstim-ensgep-equip-motorises",
    nom: "Équipements motorisés",
    etablissement: "École Nationale Supérieure de Génie Énergétique et Procédés (ENSGEP)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "DT/MA", "DT/FM"],
    matieres_clefs: ["maths", "anglais", "pct"],
    debouches: [
      {
        titre: "Technicien supérieur en installation et maintenance des équipements motorisés",
        role: "Responsable d'exploitation d'installations motorisées fixes ou mobiles assurant leur disponibilité.",
        actions: "Superviser la pose et l'alignement mécanique des groupes motopompes et motocompresseurs de forte puissance, planifier la maintenance lourde préventive, et piloter les indicateurs de défaillance des machines tournantes.",
        structures: "Compagnies d'exploitation pétrolière ou minière, usines de transformation, et sous-stations de pompage d'eau."
      },
      {
        titre: "Électromécanique",
        role: "Technicien de maintenance électromécanique assurant l'interface entre la commande électrique et la puissance mécanique.",
        actions: "Diagnostiquer les pannes sur les moteurs électriques asynchrones et synchrones, remplacer les contacteurs et relais de commande, et réparer les dispositifs d'accouplement et les freins électromécaniques.",
        structures: "Services de maintenance interne d'industries lourdes, cimenteries, et manufactures automatisées."
      },
      {
        titre: "Mécanique automobile",
        role: "Technicien supérieur en ingénierie de maintenance des systèmes de propulsion des véhicules et engins de transport.",
        actions: "Réaliser la révision et le reconditionnement complet de moteurs à combustion interne, analyser la géométrie des trains roulants, et piloter l'entretien des boîtes de vitesses automatiques et mécaniques.",
        structures: "Grands ateliers de réparation d'entreprises de transport, et ateliers concessionnaires haut de gamme."
      },
      {
        titre: "Maintenance des systèmes hydrauliques et pneumatiques",
        role: "Technicien spécialisé dans le contrôle et la remise en état des boucles de transmission de puissance par fluides.",
        actions: "Réviser les pompes à pistons et moteurs hydrauliques, localiser et étancher les fuites de fluides sous haute pression, remplacer les distributeurs pneumatiques, et tester la pureté des huiles de circuits.",
        structures: "Ateliers de réparation d'engins lourds de chantier, et usines de production dotées de presses ou de lignes automatisées."
      }
    ]
  },

  {
    id: "unstim-enstp-genie-civil",
    nom: "Génie Civil",
    etablissement: "École Nationale Supérieure des Travaux Publics (ENSTP)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "EA", "F4", "DT/BTP"],
    matieres_clefs: ["maths", "anglais", "pct"],
    debouches: [
      {
        titre: "Assistants dans les bureaux d'études",
        role: "Dessinateur-projeteur d'infrastructures calculant et modélisant les structures de génie civil.",
        actions: "Réaliser le calcul de descente de charges simples sur logiciels spécialisés, concevoir les plans d'armatures de dalles et de poutres, et participer à la rédaction des devis descriptifs et estimatifs (DQE).",
        structures: "Bureaux d'études techniques (BET) en bâtiment et travaux publics, et cabinets d'ingénierie-conseil."
      },
      {
        titre: "Techniciens contrôleurs de travaux du génie civil",
        role: "Superviseur technique externe veillant à la conformité réglementaire des exécutions de chantiers publics ou privés.",
        actions: "Vérifier le positionnement des éléments structurels par rapport aux plans visés, contrôler l'application des règles de sécurité (EPI, protections collectives), et valider les attachements de travaux pour la facturation.",
        structures: "Bureaux de contrôle technique de renommée, administrations d'inspection, et cabinets de maîtrise d'œuvre."
      },
      {
        titre: "Techniciens métreurs",
        role: "Économiste de la construction junior quantifiant l'ensemble des matériaux et coûts nécessaires à la réalisation de l'ouvrage.",
        actions: "Effectuer le calcul détaillé des cubes de béton, surfaces de coffrage et poids d'aciers à partir des plans de structure, réaliser le suivi budgétaire en cours de chantier, et valider les décomptes mensuels.",
        structures: "Directions financières des entreprises de BTP, et cabinets d'économie de la construction."
      },
      {
        titre: "Services déconcentrés et mairies",
        role: "Technicien des services techniques municipaux ou étatiques en charge du suivi du patrimoine immobilier public.",
        actions: "Instruire techniquement les demandes de permis de construire, suivre la bonne exécution des chantiers d'infrastructures de la commune (pistes, écoles), et préparer les cahiers des charges d'appels d'offres.",
        structures: "Directions Techniques des Mairies, et Directions Départementales des Infrastructures et des Transports."
      },
      {
        titre: "Laboratoires géotechniques",
        role: "Technicien d'essais de mécanique des sols et des matériaux routiers/bâtiment.",
        actions: "Réaliser les essais Proctor et de granulométrie sur les sols de fondation, couler et tester la résistance à la compression des éprouvettes de béton de chantier, et effectuer les carottages de contrôle sur routes.",
        structures: "Laboratoires d'essais du bâtiment et des travaux publics (ex: CNERTP), et services géotechniques privés."
      },
      {
        titre: "Entrepreneur, chef de chantier",
        role: "Manager opérationnel de terrain pilotant l'avancement physique quotidien et la logistique d'une zone de travaux.",
        actions: "Planifier la répartition quotidienne de la main-d'œuvre et du matériel lourd, implanter les repères d'exécution, veiller au respect des cadences de production d'ouvrages, et assurer le respect rigoureux de la qualité.",
        structures: "Entreprises de BTP de toutes tailles, et PME de construction générale."
      }
    ]
  },

  {
    id: "unstim-enstp-genie-geomatique",
    nom: "Génie Géomatique Appliquée",
    etablissement: "École Nationale Supérieure des Travaux Publics (ENSTP)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "F4", "DT/OG", "DT/BTP"],
    matieres_clefs: ["maths", "anglais", "pct"],
    debouches: [
      {
        titre: "Assistants des experts géomètres",
        role: "Collaborateur technique de cabinet pilotant la production des documents fonciers et topographiques.",
        actions: "Coordonner les levés de délimitation de propriétés et de lotissement, traiter les calculs de polygonation, et monter les dossiers techniques de demande de titres de propriété foncière (titre foncier).",
        structures: "Cabinets d'experts-géomètres agréés, et agences de gestion foncière d'État (ex: ANDF)."
      },
      {
        titre: "Techniciens en SIG",
        role: "Gestionnaire de bases de données spatialisées créant et exploitant des Systèmes d'Information Géographique.",
        actions: "Numériser et structurer des données géographiques (parcelles, réseaux d'eau, routes) sur logiciels SIG (QGIS, ArcGIS), réaliser des requêtes spatiales complexes, et publier des cartes interactives d'aide à la décision.",
        structures: "Bureaux d'études en environnement et aménagement, mairies, et opérateurs de réseaux (télécoms, eau)."
      },
      {
        titre: "Technicien-cartographe",
        role: "Professionnel de la sémiologie graphique et de la production de documents cartographiques précis.",
        actions: "Élaborer des cartes thématiques (occupation du sol, risques d'inondation), traiter des images de télédétection satellitaire ou par drone, et assurer la mise à jour des référentiels topographiques nationaux.",
        structures: "Institut Géographique National (IGN), agences de gestion des risques, et instituts de recherche en géographie."
      },
      {
        titre: "Services déconcentrés et mairies",
        role: "Technicien du cadastre urbain ou du service de planification de l'occupation spatiale de la collectivité.",
        actions: "Gérer le plan cadastral de la commune, analyser la conformité des projets urbains par rapport aux plans d'aménagement, et structurer le Système d'Information Local (SIL) de la municipalité.",
        structures: "Services techniques des mairies, et directions départementales du cadre de vie."
      },
      {
        titre: "Bureaux d'études",
        role: "Expert topographe/géomaticien d'études d'impact et de conception d'infrastructures de transport ou d'aménagement.",
        actions: "Réaliser la modélisation numérique de terrain (MNT) pour l'étude du tracé de nouvelles routes, calculer les cubatures de terrassement, et prêter appui à la cartographie environnementale des projets.",
        structures: "Grands cabinets de conseil en ingénierie, et bureaux d'études pluridisciplinaires."
      }
    ]
  },

  {
    id: "unstim-enstp-architecture",
    nom: "Architecture et Urbanisme",
    etablissement: "École Nationale Supérieure des Travaux Publics (ENSTP)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "F4", "DT/OG", "DT/BTP"],
    matieres_clefs: ["maths", "anglais", "pct"],
    debouches: [
      {
        titre: "Techniciens architectes-urbanistes",
        role: "Collaborateur de conception d'espaces architecturaux et de projets de lotissement ou d'éco-quartiers.",
        actions: "Participer à la formalisation en 2D/3D d'esquisses de projets de bâtiments, concevoir l'aménagement spatial de lotissements urbains, et intégrer les contraintes de réglementation urbaine dans les propositions graphiques.",
        structures: "Cabinets d'architecture, agences d'urbanisme, et sociétés d'aménagement urbain."
      },
      {
        titre: "Techniciens contrôleurs de chantiers",
        role: "Superviseur de chantier garant du respect de la vision esthétique et fonctionnelle du projet architectural.",
        actions: "Suivre la fidélité de mise en œuvre des détails architecturaux (choix des parements, finitions, circulations), inspecter la conformité des implantations, et coordonner les interfaces des différents corps d'état (gros œuvre, finitions).",
        structures: "Cabinets d'architecture assurant la direction de travaux, et agences de maîtrise d'œuvre."
      },
      {
        titre: "Techniciens contrôleurs de travaux d'aménagements urbains",
        role: "Superviseur des travaux de voiries et réseaux divers (VRD) et de création d'espaces publics urbains.",
        actions: "Contrôler la pose du mobilier urbain, la réalisation des voies pavées ou bitumées de la ville, le déploiement des réseaux d'éclairage public, et veiller à la mise aux normes d'accessibilité universelle.",
        structures: "Entreprises de VRD, mairies (services espaces verts et voiries), et agences d'exécution des travaux publics."
      },
      {
        titre: "Cabinets d'architecture",
        role: "Dessinateur en perspectives et technicien d'études d'exécution (BIM / DAO) d'ouvrages complexes.",
        actions: "Réaliser des modélisations tridimensionnelles réalistes (rendus d'images, maquettes numériques BIM), préparer les dossiers de demande de permis de construire, et dessiner les plans de détails d'exécution (calepinages, coupes).",
        structures: "Cabinets d'architectes agréés (membres de l'Ordre), et bureaux de design global."
      },
      {
        titre: "Bureaux d'études",
        role: "Technicien de planification urbaine et d'aménagement du territoire participant à la rédaction des Schémas Directeurs.",
        actions: "Participer aux enquêtes de terrain sur l'habitat et la mobility, compiler les documents d'urbanisme réglementaire (Schémas Directeurs d'Aménagement), et cartographier les projections démographiques de développement urbain.",
        structures: "Bureaux d'études techniques en urbanisme, et cabinets d'ingénierie territoriale."
      }
    ]
  },

  {
    id: "unstim-enstp-hydraulique",
    nom: "Hydraulique et Assainissement",
    etablissement: "École Nationale Supérieure des Travaux Publics (ENSTP)",
    universite: "UNSTIM",
    series_autorisees: ["C", "D", "E", "EA", "F4"],
    matieres_clefs: ["maths", "anglais", "pct"],
    debouches: [
      {
        titre: "Techniciens en hydraulique et assainissement",
        role: "Technicien d'exploitation de réseaux d'eau potable et d'infrastructures de collecte des eaux usées/pluviales.",
        actions: "Superviser les chantiers de pose de conduites d'eau potable, configurer et entretenir les stations de pompage et de surpression, localiser les fuites sur les réseaux de distribution, et concevoir les extensions simples de réseaux.",
        structures: "Sociétés de distribution d'eau potable (ex: SONEB), entreprises de travaux hydrauliques, et PME d'assainissement."
      },
      {
        titre: "Laboratoires d'analyse d'eau",
        role: "Technicien de contrôle qualité de la potabilité des eaux et de la conformité environnementale des rejets.",
        actions: "Prendre des échantillons d'eau sur le réseau ou en milieu naturel, analyser les paramètres physico-chimiques (turbidité, chlore résiduel, métaux lourds), effectuer le suivi bactériologique, et rédiger les rapports de conformité.",
        structures: "Laboratoires de contrôle qualité des eaux (SONEB, ministères de la santé), et agences de protection de l'environnement."
      },
      {
        titre: "Contrôleurs des travaux d'assainissement et d'adduction d'eau",
        role: "Technicien de surveillance externe vérifiant la qualité d'exécution des infrastructures d'eau.",
        actions: "Inspecter la conformité des pentes de canalisations d'égouts ou de collecteurs d'eaux pluviales, réaliser les essais de mise en pression d'étanchéité des conduites d'eau potable, et valider la bonne mise en œuvre des regards de visite.",
        structures: "Bureaux d'études assurant la maîtrise d'œuvre, agences de contrôle technique, et grands bailleurs de fonds de l'eau."
      },
      {
        titre: "Gestion des stations d'épuration",
        role: "Technicien opérateur de process au sein d'unités de traitement des eaux usées domestiques ou industrielles.",
        actions: "Suivre le bon fonctionnement des étapes de décantation, d'aération biologique et de traitement des boues, ajuster les paramètres d'injection de réactifs chimiques, et assurer la maintenance préventive des équipements électromécaniques (pompes, agitateurs).",
        structures: "Stations d'épuration urbaines, stations de traitement de boues de vidange, et usines industrielles dotées de stations de rejets."
      },
      {
        titre: "Services déconcentrés et mairies",
        role: "Technicien ou conseiller technique sectoriel en eau, hygiène et assainissement (EHA) pour les collectivités.",
        actions: "Piloter la mise en œuvre de la stratégie communale d'eau potable et d'assainissement, superviser la gestion déléguée des systèmes d'adduction d'eau villageoise (AEV), et instruire les projets de latrinisation publique.",
        structures: "Services techniques des municipalités, et Directions Départementales de l'Eau et de l'Assainissement."
      }
    ]
  },

  // ========================================================================
  // IV - UNIVERSITÉ NATIONALE D'AGRICULTURE (UNA)
  // ========================================================================
  {
    id: "una-eaq-aquaculture",
    nom: "Aquaculture",
    etablissement: "École d'Aquaculture (EAq)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/PA", "DEAT/Pêche et aquaculture"],
    matieres_clefs: ["svt", "maths", "pct"],
    debouches: [
      {
        titre: "Chargé des entreprises aquacoles",
        role: "Gestionnaire technique et financier d'unités de production piscicole ou conchylicole.",
        actions: "Élaborer les plans de production annuels, suivre les ratios de rentabilité économique, piloter les indicateurs de croissance de la biomasse, et coordonner les équipes de techniciens sur site.",
        structures: "Fermes aquacoles privées, complexes de production intensive, et coopératives de producteurs."
      },
      {
        titre: "Technicien en production de poissons, crevettes, crabes, huîtres et moules",
        role: "Opérateur spécialisé de terrain garant de la survie, de l'alimentation et du bien-être des espèces élevées.",
        actions: "Gérer l'alimentation quotidienne selon les tables de rationnement, suivre les paramètres physico-chimiques de l'eau (O2 dissous, pH, température), mener les opérations de tri et de calibrage, et appliquer les traitements prophylactiques.",
        structures: "Établissements d'aquaculture continentale ou marine, et stations expérimentales d'élevage."
      },
      {
        titre: "Conception et fabrication des aliments aquacoles",
        role: "Nutritionniste aquacole chargé du formulation et de la production de granulés adaptés aux stades de croissance.",
        actions: "Calculer les besoins nutritionnels (protéines, lipides) des espèces cibles, formuler les aliments à partir de matières premières locales, contrôler les processus d'extrusion ou de granulation, et veiller à la stabilité hydrique de l'aliment.",
        structures: "Fabriques d'aliments pour bétail et poissons, et unités de recherche et développement en nutrition animale."
      },
      {
        titre: "Aquariologie",
        role: "Technicien en systèmes aquariologiques et maintenance de la faune aquatique d'ornement.",
        actions: "Concevoir et installer des aquariums et bassins d'ornement, gérer le fonctionnement des circuits fermés de filtration (mécanique, biologique, UV), acclimater les espèces exotiques, et diagnostiquer les pathologies des poissons d'ornement.",
        structures: "Parcs aquatiques, animaleries spécialisées, et structures d'aménagement d'intérieurs de standing."
      },
      {
        titre: "Gestion et certification de semences aquacoles",
        role: "Technicien d'écloserie spécialisé dans la reproduction contrôlée et la production d'alevins ou de post-larves vigoureux.",
        actions: "Gérer le stock de géniteurs, induire la reproduction par hypophysation ou chocs thermiques, superviser l'incubation des œufs, produire le plancton vivant (Artemia, rotifères) pour le premier nourrissage, et délivrer des certificats de conformité sanitaire.",
        structures: "Écloseries modernes (publiques ou privées), et organismes nationaux de contrôle de la qualité de la pêche."
      }
    ]
  },

  {
    id: "una-ehaev-horticulture",
    nom: "Horticulture et Aménagement des espaces Verts",
    etablissement: "École d'Horticulture et d'Aménagement des Espaces Verts (EHAEV)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/PV", "DEAT/Foresterie"],
    matieres_clefs: ["svt", "maths", "pct"],
    debouches: [
      {
        titre: "Technicien en gestion des entreprises horticoles",
        role: "Responsable d'exploitation d'unités de production maraîchère, fruitière ou florale.",
        actions: "Planifier les calendriers de culture sous serre ou de plein champ, budgétiser l'approvisionnement en intrants spécifiques, optimiser le circuit logistique post-récolte, et encadrer la main-d'œuvre technique.",
        structures: "Grandes exploitations horticoles, fermes d'exportation de produits frais, et coopératives horticoles."
      },
      {
        titre: "Conseiller des exploitations horticoles",
        role: "Agent d'appui technique vulgarisant les bonnes pratiques culturales et l'innovation technologique.",
        actions: "Diagnostiquer les blocages techniques chez les producteurs, conseiller sur le choix des variétés à haut rendement, vulgariser les techniques d'irrigation de précision (goutte-à-goutte), et appuyer l'accès aux marchés.",
        structures: "Centres de promotion de l'entrepreneuriat agricole, projets d'aide au développement, et cabinets d'ingénierie agronome."
      },
      {
        titre: "Aménagement des espaces verts",
        role: "Technicien paysagiste ou chargé de projets d'aménagements paysagers et urbains.",
        actions: "Interpréter les plans d'architectes-paysagistes, implanter les massifs floraux et zones engazonnées, coordonner la mise en place de systèmes d'arrosage automatique, et planifier la maintenance (taille, élagage).",
        structures: "Entreprises d'aménagement paysager, services techniques des mairies, et grands complexes hôteliers."
      },
      {
        titre: "Production de semences et plants",
        role: "Pépiniériste spécialisé dans la multiplication végétative et la production de plants sains.",
        actions: "Réaliser le greffage, le marcottage et le bouturage d'espèces fruitières ou ornementales, gérer les substrats et l'ombrage en pépinière, et contrôler l'état phytosanitaire des jeunes plants avant commercialisation.",
        structures: "Pépinières commerciales, centres de recherche agronomique, et vergers conservatoires."
      },
      {
        titre: "Gestion des ravageurs et nuisibles",
        role: "Technicien en protection des cultures horticoles et spécialiste de la lutte intégrée.",
        actions: "Identifier les insectes ravageurs, nématodes et champignons pathogènes, définir des stratégies de lutte biologique (auxiliaires, biopesticides) ou chimique raisonnée, et calibrer les appareils de traitement.",
        structures: "Bureaux d'études phytosanitaires, grandes exploitations agricoles, et firmes distributrices d'intrants."
      },
      {
        titre: "Biotechnologies horticoles",
        role: "Technicien de laboratoire de culture in vitro spécialisé dans la micropropagation de matériel végétal.",
        actions: "Préparer les milieux de culture gélosés sous hotte à flux laminaire, prélever et repiquer les explants, assurer les phases de multiplication et d'enracinement en chambre climatisée, et suivre le sevrage en serre.",
        structures: "Laboratoires de biotechnologie végétale, instituts de recherche, et unités de production semencière industrielle."
      },
      {
        titre: "Recherche en horticulture",
        role: "Assistant d'expérimentation agronomique au sein de programmes d'amélioration des plantes horticoles.",
        actions: "Mettre en place des dispositifs expérimentaux en blocs randomisés, suivre l'évolution des variables de croissance et de rendement, collecter rigoureusement les données, et participer à la rédaction des rapports scientifiques.",
        structures: "Instituts nationaux de recherche agricole (ex: INRAB), universités, et stations de recherche internationales."
      }
    ]
  },

  {
    id: "una-egpvs-gestion-prod",
    nom: "Gestion et Production Végétale et Semencière",
    etablissement: "École de Gestion et de Production Végétale et Semencière (EGPVS)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/PV"],
    matieres_clefs: ["svt", "maths", "pct"],
    debouches: [
      {
        titre: "Entrepreneur en production végétale",
        role: "Chef d'entreprise agricole exploitant des cultures de grandes importances économiques (vivrières ou de rente).",
        actions: "Gérer l'ensemble des cycles culturaux (travail du sol, semis, fertilisation, récolte), manager les ressources matérielles et humaines de l'exploitation, et assurer la commercialisation des récoltes.",
        structures: "Exploitations agricoles privées, start-ups agropastorales, et fermes intégrées."
      },
      {
        titre: "Technicien en production de semences",
        role: "Multiplicateur de semences certifiées garant du respect strict des protocoles d'isolement et de pureté variétale.",
        actions: "Mettre en œuvre les parcelles de multiplication (semences de base ou certifiées), réaliser l'épuration variétale au champ (élimination des hors-types), superviser la récolte et le séchage contrôlés pour préserver le taux de germination.",
        structures: "Compagnies semencières privées, groupements de producteurs semenciers, et structures étatiques de développement agricole."
      },
      {
        titre: "Gestionnaire des banques de semences",
        role: "Curateur de ressources phytogénétiques assurant la conservation à long terme de la diversité semencière.",
        actions: "Conditionner les lots de semences (nettoyage, tri), contrôler périodiquement le taux d'humidité et la viabilité (tests de germination), gérer les bases de données d'inventaire, et maintenir les infrastructures de conservation à basse température.",
        structures: "Centres de conservation de ressources génétiques, instituts de recherche agricole, et ONG de préservation de la biodiversité."
      },
      {
        titre: "Technicien en gestion de la fertilité des sols",
        role: "Spécialiste en agropédologie opérationnelle et nutrition des plantes.",
        actions: "Réaliser des prélèvements d'échantillons de sol au champ, interpréter les résultats d'analyses de laboratoire, formuler des recommandations de fertilisation équilibrée (organique et minérale), et promouvoir les techniques de conservation des sols (agroforesterie, semis direct).",
        structures: "Bureaux d'études agropédologiques, directions de développement rural, et grandes plantations."
      },
      {
        titre: "Protection des végétaux",
        role: "Technicien de surveillance épidémiologique et de clinique des plantes au champ.",
        actions: "Inspecter régulièrement l'état sanitaire des cultures, identifier les agents pathogènes (virus, bactéries, champignons), évaluer les seuils de nuisibilité économique, et préconiser des schémas de traitement protecteurs.",
        structures: "Directions nationales de la protection des végétaux, douanes et services de contrôle aux frontières, et cabinets de conseil."
      },
      {
        titre: "Assistant de recherche agricole",
        role: "Collaborateur technique en charge du suivi opérationnel des programmes de sélection végétale ou d'itinéraires techniques.",
        actions: "Exécuter les croisements dirigés, gérer la traçabilité des lignées au champ, mesurer les paramètres morpho-physiologiques des plantes, et synthétiser les données d'essais sur tableur.",
        structures: "Centres nationaux de recherche agronomique, organismes internationaux de développement agricole."
      }
    ]
  },

  {
    id: "una-estctpa-ipa-nh",
    nom: "Industrie des Produits Agro-Alimentaires et Nutrition Humaine (IPA-NH)",
    etablissement: "École des Sciences et Techniques de Conservation et de Transformation des Produits Agricoles (ESTCTPA)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/NTA"],
    matieres_clefs: ["svt", "maths", "pct"],
    debouches: [
      {
        titre: "Technicien supérieur en industries agroalimentaires",
        role: "Conducteur de ligne de production ou chef d'équipe de transformation agroalimentaire.",
        actions: "Piloter les équipements industriels de transformation (pasteurisateurs, séchoirs, broyeurs), veiller au respect des fiches de fabrication et des rendements matières, et encadrer les opérateurs de ligne.",
        structures: "Usines de transformation de produits agricoles (boissons, huileries, conserveries), et laiteries industrielles."
      },
      {
        titre: "Producteur et conservateur de produits agroalimentaires",
        role: "Artisan-entrepreneur ou responsable technique d'unités de transformation valorisant la production locale.",
        actions: "Concevoir des procédés de transformation adaptés (séchage, fermentation, pasteurisation), optimiser la durée de conservation (DLC/DLUO), et assurer la production de denrées stables et commercialisables.",
        structures: "PME/PMI agroalimentaires, et groupements d'entrepreneuriat féminin ou de jeunes."
      },
      {
        titre: "Contrôleur de la qualité",
        role: "Technicien d'analyse qualité garant de la conformité physico-chimique, microbiologique et sensorielle des aliments.",
        actions: "Prélever des échantillons sur la chaîne de production, réaliser les analyses de routine (acidité, taux de sucre brix, recherche de contaminants), veiller à la stricte application du plan de maîtrise sanitaire, et gérer les alertes qualité.",
        structures: "Départements qualité d'industries agroalimentaires, et laboratoires de contrôle officiels."
      },
      {
        titre: "Conseiller en conservation et transformation",
        role: "Expert-conseil accompagnant la mise aux normes et la modernisation des procédés alimentaires.",
        actions: "Diagnostiquer les pertes post-récolte au sein des structures de transformation, recommander des technologies de stabilisation plus efficientes, et former les acteurs aux Bonnes Pratiques d'Hygiène (BPH).",
        structures: "Cabinets d'expertise agroalimentaire, ONG d'appui au secteur agricole, et structures consulaires (chambres de commerce)."
      },
      {
        titre: "Enseignant dans les lycées techniques agricoles",
        role: "Professeur technique transmettant les compétences théoriques et pratiques en technologie alimentaire.",
        actions: "Concevoir et animer les cours théoriques en nutrition, biochimie alimentaire et procédés, et encadrer les travaux pratiques (fabrication de jus, confitures, fromages) en atelier technologique.",
        structures: "Lycées Techniques Agricoles (LTA) publics et privés, et centres de formation professionnelle."
      }
    ]
  },
  
  {
    id: "una-estctpa-ibr",
    nom: "Industrie des Bio-Ressources (IBR)",
    etablissement: "École des Sciences et Techniques de Conservation et de Transformation des Produits Agricoles (ESTCTPA)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/NTA"],
    matieres_clefs: ["svt", "maths", "pct"],
    debouches: [
      {
        titre: "Technicien supérieur en industrie des bio-ressources",
        role: "Technicien de valorisation industrielle des matières biologiques non-alimentaires et coproduits.",
        actions: "Superviser les procédés d'extraction, de raffinage ou de bioconversion de la biomasse, contrôler le fonctionnement des réacteurs, et optimiser la valorisation des flux de matières organiques.",
        structures: "Unités industrielles d'éco-extraction, bioraffineries, et usines de transformation chimique verte."
      },
      {
        titre: "Industries cosmétiques et de phytothérapie",
        role: "Technicien formulation et d'extraction de principes actifs naturels à usage cosmétique ou thérapeutique.",
        actions: "Mener l'extraction d'huiles essentielles ou de principes actifs végétaux (macération, distillation), formuler des crèmes, pommades ou lotions à base d'extraits naturels, et contrôler la stabilité des émulsions.",
        structures: "Laboratoires et usines cosmétiques, et unités de production de médicaments traditionnels améliorés (MTA)."
      },
      {
        titre: "Fabrication de biogaz et huiles végétales",
        role: "Responsable d'unités de production de bioénergies et d'huiles techniques.",
        actions: "Piloter le fonctionnement des digesteurs anaérobies (méthaniseurs), suivre les paramètres de fermentation (pH, température), contrôler la qualité du biogaz produit, et gérer l'extraction mécanique d'huiles végétales.",
        structures: "Unités de méthanisation rurale ou industrielle, et usines de trituration d'oléagineux."
      },
      {
        titre: "Fabricant d'aliments pour bétail",
        role: "Technicien de production de nutrition animale valorisant les sous-produits agro-industriels (tourteaux, sons).",
        actions: "Formuler des rations alimentaires équilibrées pour différentes filières d'élevage, superviser le broyage, le mélange et l'ensachage automatisés des aliments, et contrôler la qualité des matières premières entrantes.",
        structures: "Provenderies industrielles, et coopératives d'éleveurs dotées d'une unité de mélange."
      },
      {
        titre: "Conseiller en gestion des procédés post-récoltes",
        role: "Consultant technique spécialisé dans la réduction des pertes et la valorisation des résidus agricoles.",
        actions: "Évaluer l'efficience des techniques de séchage et de transformation, concevoir des solutions de valorisation pour les co-produits (ex: coques d'anacarde, balles de riz), et accompagner les exploitants dans la transition bioéconomique.",
        structures: "Bureaux d'études environnement/agriculture, ONG, et organismes de développement de la filière verte."
      }
    ]
  },

  {
    id: "una-estctpa-GCESPA",
    nom: "Génie de Conditionnement Emballage et Stockage des Produits Alimentaires",
    etablissement: "École des Sciences et Techniques de Conservation et de Transformation des Produits Agricoles (ESTCTPA)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/NTA"],
    matieres_clefs: ["svt", "maths", "pct"],
    debouches: [
      {
        titre: "Technicien en génie du conditionnement-emballages et stockage des produits agroalimentaires",
        role: "Responsable de la fin de ligne de production, de la mise sous emballage et de la logistique d'entreposage.",
        actions: "Paramétrer les operculeuses, ensacheuses et lignes de conditionnement sous atmosphère modifiée, superviser la palettisation, et veiller au maintien des conditions d'ambiance des zones d'expédition.",
        structures: "Grandes industries agroalimentaires, et plateformes logistiques de distribution de produits frais."
      },
      {
        titre: "Technicien en contrôle de qualité et normes des produits agroalimentaires",
        role: "Inspecteur qualité spécialisé dans l'étanchéité, la perméabilité et la sécurité des contenants alimentaires.",
        actions: "Réaliser des tests de migration chimique entre l'aliment et l'emballage, contrôler la résistance mécanique des cartons et films de protection, et valider la conformité des systèmes de fermeture aux normes de sécurité sanitaire.",
        structures: "Bureaux d'études emballage, départements qualité d'usines de production, et organismes de normalisation (ex: ANM)."
      },
      {
        titre: "Concepteur d'étiquettes, d'emballages et conditionnements alimentaires",
        role: "Designer-développeur d'emballages (Packaging Designer) alliant protection, design esthétique et éco-conception.",
        actions: "Définir les matériaux d'emballage optimaux selon les propriétés de l'aliment (barrière à l'humidité, à l'O2), concevoir des structures d'emballage ergonomiques et biodégradables, et intégrer les mentions légales d'étiquetage.",
        structures: "Agences de packaging, usines de fabrication d'emballages (plastiques, cartons, verres), et start-ups innovantes."
      },
      {
        titre: "Concepteur de structures de stockage et de conservation: greniers, cribs, silos, magasins/entrepôts",
        role: "Technicien d'études spécialisé dans le dimensionnement et la construction d'infrastructures de stockage de masse.",
        actions: "Calculer les capacités de stockage nécessaires, concevoir des plans de silos ou de magasins à atmosphère ou ventilation contrôlée, suivre le chantier de construction, et mettre en œuvre les plans de lutte intégrée contre les nuisibles de stockage.",
        structures: "Bureaux d'études en génie rural, entreprises de construction de structures agricoles, et agences de gestion des stocks de sécurité alimentaire."
      }
    ]
  },

  {
    id: "una-egr-agroequipement",
    nom: "Agroéquipement",
    etablissement: "École de Génie Rural (EGR)",
    universite: "UNA",
    series_autorisees: ["C", "D", "E", "F1", "F2", "F3", "DT/FM", "DT/CEMS", "DT/MA", "DT/Electrotech", "DEAT/AER"],
    matieres_clefs: ["maths", "pct", "anglais"],
    debouches: [
      {
        titre: "Conception et fabrication des machines agricoles",
        role: "Dessinateur-concepteur en machinisme agricole adaptant la technologie aux réalités culturales locales.",
        actions: "Concevoir des prototypes de petits équipements (semoirs, égreneuses, batteuses) sur logiciels de CAO/DAO, réaliser les calculs de résistance des matériaux, et superviser le soudage et l'assemblage mécanique en atelier.",
        structures: "Ateliers de construction mécanique agricole, start-ups d'innovation technologique, et centres de recherche en mécanisation."
      },
      {
        titre: "Maintenance des engins et équipements",
        role: "Chef d'atelier ou technicien supérieur responsable de la maintenance lourde des tracteurs et matériels attelés.",
        actions: "Diagnostiquer les pannes mécaniques, hydrauliques et électriques sur les tracteurs et moissonneuses, planifier les révisions périodiques avant les campagnes agricoles, et encadrer les équipes d'ouvriers mécaniciens.",
        structures: "Centres de mécanisation agricole, grandes plantations hautement mécanisées, et concessions de matériel agricole."
      },
      {
        titre: "Gérant de parc d'engins",
        role: "Gestionnaire de flotte logistique et de machines agricoles optimisant leur taux de rotation et d'utilisation.",
        actions: "Planifier l'affectation des engins sur les différents chantiers de labour ou de récolte, gérer l'approvisionnement en carburants et lubrifiants, suivre les coûts d'exploitation par machine, et piloter le renouvellement du parc.",
        structures: "Sociétés de prestations de services agricoles, coopératives d'utilisation de matériel agricole (CUMA), et grands chantiers ruraux."
      },
      {
        titre: "Installation et maintenance d'équipements agroindustriels",
        role: "Technicien supérieur d'installation d'unités d'usinage et de transformation lourde.",
        actions: "Superviser le montage et l'alignement mécanique des moulins, presses à huile industrielles ou lignes de tri, réaliser les raccordements de puissance, et assurer la maintenance préventive (tension de courroies, lubrification).",
        structures: "Usines d'égrenage de coton, rizeries industrielles, manufactures agro-industrielles, et installateurs d'équipements."
      },
      {
        titre: "Cabinets d'audit et de conseils agricoles",
        role: "Expert-conseil en investissements de mécanisation et choix technologiques.",
        actions: "Réaliser des études de faisabilité technico-économique pour l'achat de flottes d'engins, auditer le niveau d'efficience énergétique des parcs machines existants, et conseiller les promoteurs sur le calibrage des équipements.",
        structures: "Cabinets d'études en génie rural, organisations de producteurs, et banques de développement agricole."
      }
    ]
  },

  {
    id: "una-egr-erer",
    nom: "Électrification Rurale et Énergies renouvelables (ERER)",
    etablissement: "École de Génie Rural (EGR)",
    universite: "UNA",
    series_autorisees: ["C", "D", "E", "F1", "F2", "F3", "DT/Electrotech", "DT/EAP"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Industries de transformation et unités de production",
        role: "Technicien de maintenance énergétique assurant l'alimentation stable et l'optimisation des flux électriques d'usine.",
        actions: "Assurer le maintien en conditions opérationnelles des groupes électrogènes et onduleurs industriels, équilibrer les charges des réseaux de puissance internes, et diagnostiquer les coupures ou courts-circuits électriques.",
        structures: "Usines agro-industrielles, manufactures de transformation en milieu rural, et complexes industriels."
      },
      {
        titre: "Cabinets d'audit et de conseils en énergies renouvelables",
        role: "Auditeur énergétique junior évaluant le potentiel de basculement vers les énergies vertes.",
        actions: "Réaliser des bilans de consommation électrique, dimensionner des installations solaires ou biomasse de substitution, et rédiger des rapports d'opportunité d'amélioration de la performance énergétique.",
        structures: "Bureaux d'études en transition énergétique, et agences de conseil en ingénierie durable."
      },
      {
        titre: "Projets d'électrification rurale",
        role: "Superviseur technique de déploiement de mini-réseaux électriques décentralisés (mini-grids).",
        actions: "Superviser la construction de centrales solaires photovoltaïques autonomes, contrôler le câblage des réseaux de distribution basse tension dans les localités rurales, et valider l'installation des compteurs prépayés chez les usagers.",
        structures: "Agences nationales d'électrification rurale (ex: ABERME), ONG de développement, et entreprises délégataires de services publics."
      },
      {
        titre: "Entreprises de BTP",
        role: "Technicien supérieur responsable des lots électricité et intégration des énergies renouvelables sur les bâtiments.",
        actions: "Étudier les schémas d'incorporation des panneaux solaires thermiques ou photovoltaïques sur les toitures, encadrer les équipes d'électriciens de chantier, et s'assurer de la conformité des installations intérieures.",
        structures: "Grandes entreprises de construction, et PME d'installations de fluides et énergies."
      },
      {
        titre: "Garages automobiles",
        role: "Technicien spécialisé dans la maintenance des systèmes électriques embarqués et de conversion d'énergie des flottes d'engins.",
        actions: "Diagnostiquer les alternateurs, démarreurs et circuits de charge des batteries lourdes, entretenir les circuits de signalisation électriques des remorques et engins de génie rural, et intervenir sur les moteurs électriques simples.",
        structures: "Grands ateliers de réparation d'engins, et services après-vente de parcs mécanisés."
      },
      {
        titre: "Entreprenariat sur les énergies vertes",
        role: "Promoteur-installateur de solutions solaires résidentielles, de pompage agricole ou d'éclairage public.",
        actions: "Négocier l'achat de kits solaires de qualité, concevoir et chiffrer des systèmes de pompage solaire pour les maraîchers, exécuter l'installation technique (panneaux, régulateurs, onduleurs), et en assurer le SAV.",
        structures: "PME d'intégration de systèmes solaires, ou exercice libéral indépendant."
      }
    ]
  },

  {
    id: "una-egr-ira",
    nom: "Infrastructures Rurales et Assainissement",
    etablissement: "École de Génie Rural (EGR)",
    universite: "UNA",
    series_autorisees: ["C", "D", "E", "EA", "F1", "F4", "DT/BTP", "DT/DPB", "DT/OG", "DEAT/AER"],
    matieres_clefs: ["maths", "pct", "francais"],
    debouches: [
      {
        titre: "Travaux de constructions d'ouvrages et réseaux hydrauliques",
        role: "Conducteur de travaux d'adduction d'eau potable et d'infrastructures hydrauliques de grande envergure.",
        actions: "Superviser le terrassement et la pose de conduites de transfert d'eau, piloter la construction de châteaux d'eau en béton armé ou métalliques, et coordonner l'installation des équipements de pompage.",
        structures: "Entreprises spécialisées en hydraulique lourde, et sociétés de grands travaux de BTP."
      },
      {
        titre: "Travaux d'irrigation et de drainage",
        role: "Technicien supérieur d'aménagement de réseaux d'irrigation à la parcelle.",
        actions: "Dimensionner et implanter les canaux d'irrigation à ciel ouvert ou les réseaux sous pression, calculer les débits requis, et installer les systèmes de drainage pour éviter la salinisation ou l'asphyxie des sols cultivés.",
        structures: "Entreprises d'aménagements hydro-agricoles, et groupements d'exploitants agricoles d'envergure."
      },
      {
        titre: "Aménagement hydro-agricole",
        role: "Superviseur d'aménagements de bas-fonds et de périmètres irrigués.",
        actions: "Piloter les travaux de nivellement de terrain, concevoir et réaliser des petites digues de retenue d'eau ou des déversoirs de crue, et assurer la maintenance des pistes de desserte agricole associées aux périmètres.",
        structures: "Directions du génie rural, agences d'exécution de projets d'aménagement, et bureaux d'études techniques."
      },
      {
        titre: "Voirie et réseaux d'adduction d'eau potable",
        role: "Technicien de réseaux urbains et ruraux chargé du déploiement des infrastructures d'eau et de voiries tertiaires.",
        actions: "Suivre la pose de collecteurs d'eaux pluviales (caniveaux), vérifier le compactage des pistes rurales et voies d'accès, et coordonner la mise en place de bornes-fontaines publiques.",
        structures: "Services techniques des mairies, agences de gestion de l'eau potable en milieu rural, et entreprises de TP."
      },
      {
        titre: "Sociétés de BTP",
        role: "Chef de chantier Génie Civil / Génie Rural pilotant l'exécution technique des ouvrages d'art simples.",
        actions: "Interpréter les plans de ferraillage et de coffrage de radiers, de ponts, de dalots ou d'entrepôts de stockage, planifier l'approvisionnement en agrégats, et diriger les équipes de maçons et coffreurs.",
        structures: "Entreprises générales de construction de routes, de pistes et de bâtiments."
      },
      {
        titre: "Cabinets d'architecture et de génie civil",
        role: "Dessinateur-projeteur en infrastructures hydrauliques et rurales au sein d'une équipe de maîtrise d'œuvre.",
        actions: "Traduire les notes de calcul hydrologique en plans d'exécution (profils en long et en travers de canaux ou pistes), réaliser le métré quantitatif des terrassements et maçonneries, et éditer les pièces techniques des projets.",
        structures: "Bureaux d'études en ingénierie de l'eau, et cabinets d'architectures pluridisciplinaires."
      }
    ]
  },

  {
    id: "una-egese-prod-sante-animale",
    nom: "Productions et santé animales",
    etablissement: "École de Gestion et d'Exploitation des Systèmes d'Élevage (EGESE)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/PA"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Technicien des fermes d'embouche",
        role: "Conseiller technique ou gérant d'unités d'engraissement intensif (bovins, ovins, caprins).",
        actions: "Concevoir des rations de finition hautement énergétiques, planifier les cycles d'embouche, suivre quotidiennement le gain moyen quotidien (GMQ) des animaux, et veiller à l'administration des déparasitants.",
        structures: "Fermes d'embouche privées, coopératives d'éleveurs, et ranchs d'élevage."
      },
      {
        titre: "Technicien des fermes de production laitière",
        role: "Responsable d'atelier de production laitière veillant aux performances de traite et à la qualité sanitaire.",
        actions: "Gérer le troupeau de vaches laitières (alimentation, insémination), piloter les équipements de traite mécanique, mettre en œuvre les protocoles de lutte contre les mammites, et assurer l'hygiène stricte du lait récolté.",
        structures: "Fermes laitières modernes, et coopératives de collecte et de transformation du lait."
      },
      {
        titre: "Production d'œufs de consommation",
        role: "Chef d'exploitation avicole spécialisé en filière pondeuses.",
        actions: "Superviser la conduite des bâtiments d'élevage (gestion de la lumière, de la ventilation, de la densité), piloter la distribution automatisée ou manuelle de l'aliment, programmer le calendrier vaccinal, et gérer le mirage et le calibrage des œufs.",
        structures: "Grands complexes avicoles privés, et fermes de production d'œufs de table."
      },
      {
        titre: "Centres d'accouvage",
        role: "Technicien d'écloserie avicole gérant l'incubation artificielle et la production de poussins d'un jour.",
        actions: "Sélectionner et stocker les œufs à couver (OAC), programmer et réguler les paramètres des incubateurs et éclosoirs (température, hygrométrie, retournement), trier et sexer les poussins à l'éclosion, et réaliser la vaccination de premier jour.",
        structures: "Accouvoirs industriels régionaux, et multiplicateurs de souches avicoles."
      },
      {
        titre: "Cliniques et pharmacies vétérinaires",
        role: "Auxiliaire de santé vétérinaire ou gestionnaire d'officine agro-vétérinaire.",
        actions: "Assister le médecin vétérinaire lors des interventions chirurgicales ou des consultations, délivrer les médicaments vétérinaires sur ordonnance, gérer les stocks de vaccins sous chaîne du froid, et conseiller les éleveurs sur les posologies.",
        structures: "Cliniques vétérinaires privées, pharmacies de revente d'intrants zootechniques, et cabinets vétérinaires."
      },
      {
        titre: "Entrepreneur en fabrication d'aliments bétail",
        role: "Gérant de provenderie locale formulant des aliments complets pour les monogastriques et polygastriques.",
        actions: "Formuler des aliments de qualité (démarrage, croissance, finition) selon les coûts d'opportunité des matières premières, piloter les lignes d'ensachage, et garantir la conformité aux normes réglementaires d'alimentation animale.",
        structures: "Provenderies privées, et unités d'auto-fabrication de grandes coopératives."
      },
      {
        titre: "Gestionnaire des fermes agro-vétérinaires",
        role: "Manager général d'exploitations intégrées combinant productions animales et distribution d'intrants.",
        actions: "Coordonner les différentes spéculations d'élevage de la ferme, valider les bilans comptables de l'activité, encadrer l'équipe commerciale de distribution de produits vétérinaires, et développer les partenariats d'affaires.",
        structures: "Fermes intégrées d'envergure, et grandes entreprises du secteur agropastoral."
      }
    ]
  },

  {
    id: "una-eapa-FA",
    nom: "Finance Agricole (FA)",
    etablissement: "École d'Agrobusiness et de Politiques Agricoles (EAPA)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Mercaticien d'entreprises agricoles et agro-industrielles",
        role: "Responsable marketing ou chargé d'études de marché spécialisé dans les filières agricoles.",
        actions: "Concevoir des stratégies de positionnement de marque pour des produits transformés, élaborer des campagnes promotionnelles ciblées, analyser le comportement des consommateurs, et négocier le référencement en grande distribution.",
        structures: "Grandes coopératives d'exportation (coton, anacarde, karité), et industries agroalimentaires majeures."
      },
      {
        titre: "Agent commercial",
        role: "Commercial terrain ou négociateur d'affaires assurant la vente d'intrants ou la collecte de produits agricoles.",
        actions: "Développer et fidéliser un portefeuille de clients (fermes, distributeurs), négocier les contrats d'achat à terme de récoltes, organiser les tournées de livraison, et suivre le recouvrement des créances.",
        structures: "Firmes d'import-export d'intrants (engrais, semences), et centrales d'achats agricoles."
      },
      {
        titre: "Banquier agricole",
        role: "Chargé d'affaires agricoles en institution bancaire, spécialisé dans le financement des chaînes de valeur.",
        actions: "Analyser les demandes de crédit des exploitants et agro-industriels, évaluer les risques techniques et financiers des projets agricoles, structurer les plans d'amortissement de campagnes, et suivre le remboursement des encours.",
        structures: "Banques commerciales dotées d'un département agricole, et banques publiques de développement agricole."
      },
      {
        titre: "Assureur agricole",
        role: "Gestionnaire de sinistres ou concepteur de produits d'assurance indicielle ou de dommages agricoles.",
        actions: "Évaluer les risques climatiques et sanitaires d'une zone de production, concevoir des polices d'assurance adaptées aux cultures et élevages, inspecter les dégâts sur le terrain après sinistre, et chiffrer les indemnités dues.",
        structures: "Compagnies d'assurance privées, et mutuelles nationales d'assurance agricole."
      },
      {
        titre: "Gestionnaire d'institutions de financement agricole",
        role: "Cadre dirigeant de structures d'épargne et de crédit adapté au secteur rural.",
        actions: "Piloter la stratégie d'octroi de micro-crédits agricoles, veiller au respect de la réglementation financière, concevoir des mécanismes de cautionnement solidaire pour les petits exploitants, et manager le réseau d'agences.",
        structures: "Institutions de Microfinance (IMF), caisses locales de crédit agricole, et fonds de garantie nationaux."
      },
      {
        titre: "Conseiller en gestion d'entreprises agricoles",
        role: "Gestionnaire-conseil accompagnant la structuration comptable et financière des fermes.",
        actions: "Mettre en place des outils de comptabilité agricole analytique, élaborer les plans de trésorerie prévisionnels des exploitations, calculer les seuils de rentabilité par spéculation, et optimiser la fiscalité de l'entreprise.",
        structures: "Centres de Gestion Agréés (CGA), cabinets d'expertise comptable, et agences territoriales de développement."
      },
      {
        titre: "Consultant",
        role: "Expert indépendant réalisant des évaluations économiques et des études de filières.",
        actions: "Conduire des études de faisabilité technico-économique pour de grands investissements agropastoraux, évaluer l'impact financier de politiques publiques agricoles, et animer des formations en éducation financière pour les organisations paysannes.",
        structures: "Cabinets d'études et de conseil internationaux, ou exercice indépendant (Freelance)."
      }
    ]
  },

  {
    id: "una-eapa-ges-exploit",
    nom: "Gestion des Exploitations Agricoles et Entreprises Agroalimentaires (GEAEA)",
    etablissement: "École d'Agrobusiness et de Politiques Agricoles (EAPA)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Mercaticien d'entreprises agricoles et agro-industrielles",
        role: "Chef de produit (Product Manager) agroalimentaire coordonnant la mise en marché des innovations gustatives ou de conditionnement.",
        actions: "Établir le mix-marketing de gammes de produits alimentaires, mener des panels de dégustation, concevoir les stratégies d'emballage marketing, et coordonner la communication digitale et physique de la marque.",
        structures: "Compagnies de transformation de fruits, laiteries de marque, et groupes agro-industriels divers."
      },
      {
        titre: "Agent commercial",
        role: "Chargé du développement des ventes B2B de produits agricoles ou de matériels spécialisés.",
        actions: "Prospecter les acheteurs industriels nationaux et internationaux, négocier les volumes et les critères qualité contractuels, participer aux salons et foires agroalimentaires, et piloter les indicateurs de vente.",
        structures: "Négociants internationaux de commodités (café, cacao, cajou), et fournisseurs professionnels du secteur agricole."
      },
      {
        titre: "Banquier agricole",
        role: "Analyste de risques de crédit rattaché aux portefeuilles d'entreprises agroalimentaires.",
        actions: "Auditer les états financiers et bilans d'usines agroalimentaires sollicitant des lignes de crédit, analyser la viabilité de leurs business plans d'extension, et émettre des avis d'octroi motivés basés sur la connaissance des filières.",
        structures: "Fonds d'investissement dédiés à l'agriculture, et services de notation de risques de banques."
      },
      {
        titre: "Assureur agricole",
        role: "Souscripteur de risques d'entreposage et de transformation industrielle d'aliments.",
        actions: "Analyser les dispositifs de sécurité et de conservation des usines clientes, évaluer les risques de perte de stock en silos ou entrepôts frigorifiques, et chiffrer les primes d'assurance responsabilité civile exploitation.",
        structures: "Compagnies d'assurance de premier plan, et courtiers en assurance industrielle."
      },
      {
        titre: "Gestionnaire d'institutions de financement agricole",
        role: "Responsable des opérations ou des partenariats au sein de mécanismes de financement structuré (ex: récépissé d'entrepôt).",
        actions: "Mettre en œuvre des instruments de financement tripartite (banque-producteur-acheteur), superviser la conformité des stocks gagés, et nouer des alliances avec les acteurs institutionnels du secteur.",
        structures: "Fonds de développement agricole, et institutions financières spécialisées en agrobusiness."
      },
      {
        titre: "Conseiller en gestion d'entreprises agricoles",
        role: "Directeur de d'exploitation externe ou conseiller stratégique de grands groupements agro-industriels.",
        actions: "Réaliser des audits organisationnels et opérationnels d'exploitations, concevoir des tableaux de bord de pilotage d'activité avec des indicateurs clés (KPI), et piloter les plans de restructuration ou de croissance.",
        structures: "Bureaux d'ingénierie et de management d'agrobusiness, et fédérations d'organisations de producteurs."
      },
      {
        titre: "Consultant",
        role: "Expert en modélisation de business models durables et d'analyse de chaînes de valeur de l'agrobusiness.",
        actions: "Accompagner la levée de fonds de start-ups agricoles auprès de capital-risqueurs, concevoir des guides pratiques de gestion des entreprises agroalimentaires, et réaliser des évaluations de performance de projets agricoles.",
        structures: "Cabinets de conseil en stratégie, agences de coopération internationale, et cabinets indépendants."
      }
    ]
  },

  {
    id: "una-eapa-MA-des-intrants-MIPA",
    nom: "Marketing des Intrants et Produits Agricoles (MIPA)",
    etablissement: "École d'Agrobusiness et de Politiques Agricoles (EAPA)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Mercaticien d'entreprises agricoles et agro-industrielles",
        role: "Responsable de la stratégie de marque et de l'acquisition de parts de marché d'intrants ou d'équipements de production.",
        actions: "Développer le réseau de distribution de intrants (engrais, semences, phytosanitaires), concevoir des offres promotionnelles adaptées aux cycles de trésorerie des paysans, et animer les réseaux de revendeurs certifiés.",
        structures: "Grandes firmes multinationales de l'agrochimie et des semences, et constructeurs de machines de culture."
      },
      {
        titre: "Agent commercial",
        role: "Ingénieur technico-commercial chargé de la promotion scientifique des intrants auprès des grands comptes.",
        actions: "Organiser des vitrines de démonstration au champ pour prouver l'efficacité des produits aux réseaux de producteurs, assurer le conseil technique d'utilisation des spécialités commerciales, et négocier les commandes de volume.",
        structures: "Distributeurs d'intrants agricoles nationaux, et coopératives agricoles d'approvisionnement."
      },
      {
        titre: "Banquier agricole",
        role: "Conseiller financier spécialisé dans les crédits de campagnes dédiés à l'achat d'intrants agricoles.",
        actions: "Structurer des solutions de financement spécifiques (ex: crédit intrant remboursable à la récolte), évaluer la solvabilité des groupements demandeurs, et suivre la chaîne d'approvisionnement adossée au crédit.",
        structures: "Établissements bancaires de microfinance, et réseaux de crédit mutuel ruraux."
      },
      {
        titre: "Assureur agricole",
        role: "Conseiller en assurance crédit commercial appliqué aux transactions de négoce d'intrants.",
        actions: "Analyser les risques de défaut de paiement des distributeurs d'intrants, concevoir des garanties de couverture des risques de transport de marchandises agricoles, et suivre l'indemnisation des contentieux commerciaux.",
        structures: "Sociétés d'assurance-crédit, et départements risques de grandes compagnies de courtage."
      },
      {
        titre: "Gestionnaire d'institutions de financement agricole",
        role: "Cadre financier concevant des lignes de refinancement pour l'approvisionnement groupé en intrants à l'échelle nationale.",
        actions: "Négocier des lignes de crédit de re-financement auprès de bailleurs institutionnels, mettre en place les mécanismes d'octroi de fonds aux centrales d'achat paysannes, et s'assurer de la viabilité du portefeuille.",
        structures: "Fonds nationaux de promotion de l'agriculture, et instances dirigeantes d'institutions de microfinance."
      },
      {
        titre: "Conseiller en gestion d'entreprises agricoles",
        role: "Spécialiste de la gestion des approvisionnements et de l'optimisation des charges opérationnelles des fermes.",
        actions: "Aider les gérants de fermes à planifier au meilleur coût leurs achats d'intrants (achats groupés), négocier avec les fournisseurs les délais de paiement, et optimiser la rotation des stocks critiques pour éviter les ruptures.",
        structures: "Unités d'appui à la gestion des organisations paysannes, et cabinets conseil en performance agricole."
      },
      {
        titre: "Consultant",
        role: "Expert en étude de marché et régulation de la distribution des intrants et produits agricoles.",
        actions: "Conduire des études d'impact des subventions d'engrais sur la productivité agricole, auditer la transparence des circuits de distribution, et conseiller les ministères sur les politiques de labellisation et normes de qualité.",
        structures: "Bureaux d'études internationaux, agences des Nations Unies (FAO), et ministères de l'agriculture."
      }
    ]
  },

  {
    id: "una-esrva-sociologie-rurale",
    nom: "Sociologie rurale et Vulgarisation Agricole",
    etablissement: "École de Sociologie rurale et de Vulgarisation Agricole (ESRVA)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Technicien supérieur des entreprises agricoles",
        role: "Responsable des relations communautaires et de la gestion de la main-d'œuvre au sein des agro-industries.",
        actions: "Gérer le climat social de l'exploitation, prévenir et résoudre les conflits fonciers ou de travail avec les communautés environnantes, et mettre en œuvre les chartes de responsabilité sociétale (RSE).",
        structures: "Grandes plantations industrielles (canne à sucre, palmier à huile), et entreprises intégrées de production."
      },
      {
        titre: "Vulgarisateur/conseil agricole",
        role: "Agent de vulgarisation ou conseiller d'exploitation facilitant l'adoption de techniques résilientes.",
        actions: "Animer des Écoles Pratiques d'Agriculture (Champs-Écoles Paysans), concevoir des guides techniques imagés adaptés aux langues locales, et conseiller les producteurs dans l'adoption d'innovations (variétés, agroécologie).",
        structures: "Agences publiques d'extension agricole, ONG d'appui au développement rural, et agences territoriales."
      },
      {
        titre: "Recherche en sociologie rurale",
        role: "Assistant de recherche en sciences humaines appliquées au développement et aux dynamiques agraires.",
        actions: "Mener des enquêtes socio-économiques qualitatives et quantitatives en milieu rural (focus groups, entretiens semi-directifs), analyser l'impact du changement social sur les ménages agricoles, et transcrire les données terrain.",
        structures: "Instituts nationaux de recherche (ex: INRAB, CBRSI), laboratoires universitaires, et instituts d'études de développement."
      },
      {
        titre: "Conseiller technique de cabinet agricole",
        role: "Conseiller d'orientation ou chargé d'études au sein d'organes d'ingénierie et de planification agricole.",
        actions: "Analyser les dynamiques des organisations de producteurs, formuler des recommandations pour l'intégration du genre et des jeunes dans les projets de développement, et concevoir des approches de conseil agricole participatif.",
        structures: "Cabinets d'études d'impact socio-environnemental, et bureaux d'ingénierie du développement social."
      },
      {
        titre: "Fonctionnaire d'État",
        role: "Cadre technique de l'administration publique chargé de la planification du développement rural.",
        actions: "Suivre la mise en œuvre des programmes nationaux de sécurité alimentaire, coordonner les actions des agents de vulgarisation sur un territoire donné, et participer à la collecte des données statistiques de production.",
        structures: "Ministère de l'Agriculture, de l'Élevage et de la Pêche (MAEP) et ses directions techniques départementales."
      },
      {
        titre: "Fonctionnaire des collectivités décentralisées",
        role: "Responsable du développement local et des affaires agricoles au sein d'une municipalité rurale.",
        actions: "Élaborer le volet agricole du Plan de Développement Communal (PDC), appuyer la structuration des marchés locaux, et coordonner les interventions des ONG et projets sur le territoire de la commune.",
        structures: "Services techniques et de planification des Mairies (communes rurales et semi-urbaines)."
      },
      {
        titre: "Gestion des organisations paysannes",
        role: "Animateur ou secrétaire technique de réseaux d'organisations de producteurs (OP).",
        actions: "Renforcer les capacités d'action et de négociation des responsables d'OP, structurer les services d'approvisionnement et de vente groupée pour les membres, et assurer le plaidoyer auprès des instances de décision.",
        structures: "Unions départementales ou nationales de producteurs, et fédérations d'organisations paysannes."
      }
    ]
  },

  {
    id: "una-efortt-foresterie",
    nom: "Foresterie Tropicale",
    etablissement: "École de Foresterie Tropicale (EFortT)",
    universite: "UNA",
    series_autorisees: ["C", "D", "DEAT/Foresterie"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Forestier gestionnaire des ressources naturelles",
        role: "Technicien des eaux, forêts et chasse chargé de l'application de la politique forestière nationale.",
        actions: "Planifier et superviser les chantiers de reboisement d'envergure, contrôler la légalité de l'exploitation du bois d'œuvre, réaliser l'inventaire forestier national, et mener la lutte contre la déforestation et les feux de brousse tardifs.",
        structures: "Direction Générale des Eaux, Forêts et Chasse (corps paramilitaire), et offices nationaux du bois."
      },
      {
        titre: "Gestionnaire des réserves de faune et des aires protégées",
        role: "Conservateur adjoint ou technicien de gestion de la biodiversité dans les parcs nationaux.",
        actions: "Coordonner les patrouilles anti-braconnage, suivre l'évolution des populations de grands mammifères (recensements fauniques), aménager les points d'eau et pistes de vision, et animer les programmes d'éco-développement avec les riverains.",
        structures: "Agences de gestion des parcs nationaux (ex: Pendjari, W), et ONG de conservation de la nature."
      },
      {
        titre: "Sylviculteur",
        role: "Responsable de plantations forestières privées ou publiques assurant la production durable de bois.",
        actions: "Gérer la récolte et la sélection de graines forestières de qualité, conduire les pépinières forestières (essences locales et exotiques: tecks, eucalyptus), planifier l'élagage, les éclaircies, et piloter l'exploitation raisonnée.",
        structures: "Entreprises d'exploitation forestière, industries du bois, et exploitants forestiers privés."
      },
      {
        titre: "Expert en pilotage de drones forestiers",
        role: "Technicien de télédétection et d'imagerie aérienne spécialisé dans le suivi des couverts forestiers.",
        actions: "Programmer et exécuter des plans de vol par drone au-dessus des massifs forestiers, traiter les images multispectrales capturées, cartographier l'état sanitaire de la forêt, et estimer la biomasse ou les dégâts d'incendies.",
        structures: "Bureaux d'études en géomatique forestière, agences de surveillance environnementale, et instituts de recherche."
      },
      {
        titre: "Spécialiste de la domestication et élevage des gibiers",
        role: "Technicien d'aulacodiculture ou d'élevage d'espèces fauniques non-conventionnelles.",
        actions: "Concevoir des enclos et cages de reproduction adaptés, formuler des rations nutritionnelles imitant le milieu naturel, appliquer le suivi sanitaire (prophylaxies), et encadrer la filière de commercialisation légale de viande de brousse.",
        structures: "Fermes d'élevage de gibiers (aulacodes, francolins), stations de recherche faunique, et projets de micro-élevage."
      },
      {
        titre: "Transformations sommaires du bois",
        role: "Chef d'unité de scierie ou de menuiserie industrielle valorisant le matériau bois.",
        actions: "Superviser les opérations de cubage des grumes, piloter les scies de tête et lignes de débitage, gérer les séchoirs à bois pour optimiser le taux d'humidité, et contrôler la qualité des produits semi-finis (charpentes, contreplaqués).",
        structures: "Scieries industrielles, complexes de transformation du bois, et industries d'ébénisterie."
      },
      {
        titre: "Recherche et études d'impact environnemental",
        role: "Assistant d'étude environnementale mesurant l'état des écosystèmes forestiers.",
        actions: "Réaliser des inventaires floristiques (relevés de phytosociologie), mesurer les stocks de carbone des arbres, participer à la rédaction des volets 'biodiversité' des Études d'Impact Environnemental et Social (EIES).",
        structures: "Cabinets d'audit environnemental agréés, centres de recherche forestière, et laboratoires universitaires."
      }
    ]
  },

  {
    id: "eismv-veterinaire",
    nom: "Sciences et Médecine Vétérinaires (Toutes filières)",
    etablissement: "École Inter-États des Sciences et Médecine Vétérinaires (EISMV)",
    universite: "Écoles Inter-États",
    series_autorisees: ["C", "D"],
    matieres_clefs: ["maths", "pct", "svt"],
    debouches: [
      {
        titre: "Vétérinaire",
        role: "Docteur en médecine vétérinaire assurant les soins cliniques aux animaux de compagnie, d'élevage et de la faune.",
        actions: "Diagnostiquer les pathologies animales, prescrire les traitements médicamenteux appropriés, pratiquer les interventions chirurgicales (césariennes, chirurgies des tissus mous), et mener le suivi de reproduction (insémination, suivi de gestation).",
        structures: "Cliniques et cabinets vétérinaires libéraux, parcs zoologiques, et parcs nationaux."
      },
      {
        titre: "Inspection sanitaire",
        role: "Vétérinaire inspecteur officiel de la santé publique et de la sécurité sanitaire des aliments.",
        actions: "Réaliser l'inspection ante et post-mortem des carcasses en abattoir, contrôler la conformité sanitaire des établissements de transformation de viande et de poisson, et délivrer les certificats de salubrité pour l'exportation.",
        structures: "Directions nationales des services vétérinaires, abattoirs municipaux et industriels, et postes de contrôle aux frontières."
      },
      {
        titre: "Production et santé animales",
        role: "Directeur zootechnique de grands complexes d'élevage encadrant les plans de biosécurité.",
        actions: "Concevoir des protocoles de biosécurité stricts pour prévenir l'introduction d'épizooties (ex: peste porcine, grippe aviaire), piloter la prophylaxie médicale globale du cheptel, et optimiser les indices de consommation.",
        structures: "Grands complexes agro-industriels d'élevage, fermes d'État, et firmes d'intégration avicole ou bovine."
      },
      {
        titre: "Pharmacie vétérinaire",
        role: "Responsable technique de laboratoire pharmaceutique vétérinaire ou d'officine de revente d'envergure.",
        actions: "Formuler ou valider la mise sur le marché de médicaments vétérinaires (antibiotiques, antiparasitaires, vaccins), suivre la pharmacovigilance, et assurer la promotion scientifique auprès des réseaux de praticiens.",
        structures: "Laboratoires de fabrication de médicaments vétérinaires, et grandes centrales de distribution de produits zoosanitaires."
      },
      {
        titre: "Recherche en médecine vétérinaire",
        role: "Chercheur ou assistant d'études spécialisé en virologie, bactériologie ou épidémiologie animale (approche One Health).",
        actions: "Isoler et caractériser des agents pathogènes en laboratoire de haute sécurité, concevoir des modèles épidémiologiques de propagation des zoonoses (maladies transmissibles de l'animal à l'homme), et tester des candidats vaccins.",
        structures: "Instituts de recherche vétérinaire nationaux ou internationaux, et laboratoires de référence mondiaux (OMS/WOAH)."
      },
      {
        titre: "Élevage et agro-industrie",
        role: "Consultant expert en gestion stratégique des filières animales pour des instances de décision.",
        actions: "Réaliser l'audit d'efficience technique de filières de transformation de viande ou de lait, concevoir des politiques régionales de développement pastoral et de gestion des couloirs de transhumance, et évaluer des projets de développement.",
        structures: "Organisations internationales (UEMOA, CEDEAO, FAO), et grands cabinets d'ingénierie agropastorale."
      }
    ]
  }
];