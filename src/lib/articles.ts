export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  readTime: number;
  keywords: string[];
  excerpt: string;
  tldr: string;
  faq: FaqItem[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "comment-soulager-une-sciatique",
    title: "Comment soulager une sciatique ? Guide de votre ostéopathe à La Réunion",
    description:
      "Douleur irradiant le long de la jambe ? Découvrez comment soulager une sciatique grâce à l'ostéopathie. Causes, exercices et traitement à La Possession, La Réunion (974).",
    date: "2026-04-09",
    readTime: 7,
    keywords: [
      "comment soulager une sciatique",
      "soulager sciatique",
      "soigner la sciatique",
      "calmer une sciatique",
      "ostéopathe sciatique La Réunion",
      "ostéopathe sciatique La Possession",
      "ostéopathe La Possession 974",
    ],
    excerpt:
      "La sciatique touche des millions de personnes et peut rendre les gestes du quotidien insupportables. En tant qu'ostéopathe à La Possession (La Réunion), je vous explique comment identifier, calmer et soulager durablement cette douleur.",
    tldr:
      "Pour soulager une sciatique : adopter une position antalgique (allongé jambes fléchies à 90°), alterner froid puis chaud, marcher doucement plutôt que rester immobile, et étirer le piriforme. L'ostéopathie est très efficace sur les sciatiques d'origine musculaire ou posturale (1 à 3 séances). Consultez en urgence si perte de force, troubles urinaires ou engourdissement périnéal.",
    faq: [
      {
        question: "Comment soulager rapidement une sciatique ?",
        answer:
          "Allongez-vous sur le dos, jambes relevées sur un coussin pour former un angle de 90° aux hanches et genoux. Appliquez du froid 15 min trois fois par jour pendant 48 h, puis passez à la chaleur. Marchez doucement plutôt que de rester immobile, et évitez la position assise prolongée. Un anti-inflammatoire peut aider en phase aiguë, sur avis médical.",
      },
      {
        question: "Combien de temps dure une sciatique ?",
        answer:
          "Une sciatique aiguë mécanique dure en moyenne 4 à 6 semaines sans traitement. Avec une prise en charge ostéopathique adaptée, l'amélioration est souvent perceptible dès la première ou deuxième séance, et la résolution complète intervient en 1 à 3 séances pour les formes musculaires ou posturales.",
      },
      {
        question: "Quel exercice fait passer une sciatique ?",
        answer:
          "L'étirement du piriforme en position allongée (cheville croisée sur le genou opposé, on tire la cuisse vers la poitrine, 30 secondes, 3 fois) est l'exercice le plus efficace sur les sciatiques par syndrome du piriforme. À compléter par des mobilisations lombaires douces et 20 à 30 minutes de marche quotidienne.",
      },
      {
        question: "Quand consulter un ostéopathe pour une sciatique ?",
        answer:
          "Consultez un ostéopathe si la sciatique persiste plus de quelques jours, est récidivante, liée à une grossesse, survient après un effort, ou résiste à un traitement médical de plus de 3 à 4 semaines. En revanche, en cas de perte de force, troubles sphinctériens ou anesthésie en selle, consultez en urgence un médecin.",
      },
    ],
    content: `
<h2>Qu'est-ce que la sciatique ?</h2>
<p>La sciatique n'est pas une maladie en soi, mais un <strong>symptôme</strong> : une douleur qui suit le trajet du nerf sciatique, le plus long et le plus volumineux nerf du corps humain. Ce nerf part du bas du dos, traverse la fesse, descend le long de la cuisse, du mollet et peut atteindre le pied.</p>
<p>On parle de sciatique lorsque ce nerf est comprimé ou irrité. La douleur peut être sourde, lancinante ou électrique — souvent déclenchée par un mouvement, une toux ou un simple passage en position assise prolongée.</p>
<p>En consultation, je vois régulièrement des patients à La Possession et dans le nord de La Réunion qui ont attendu plusieurs semaines avant de consulter, espérant que ça passe seul. Parfois ça passe. Mais souvent la douleur s'installe, s'aggrave, et impacte durablement la qualité de vie.</p>

<h2>Les causes les plus fréquentes</h2>
<p>Avant de soulager une sciatique, il faut en comprendre l'origine. Les causes les plus courantes sont :</p>
<ul>
  <li><strong>La hernie discale</strong> (L4-L5 ou L5-S1) : le disque intervertébral fait saillie et comprime la racine nerveuse. C'est la cause la plus fréquente chez les personnes de 30 à 50 ans.</li>
  <li><strong>Le syndrome du piriforme</strong> : un muscle profond de la fesse (le piriforme) se contracte et vient pincer le nerf sciatique. Cette forme, souvent méconnue, répond très bien à l'ostéopathie.</li>
  <li><strong>L'arthrose lombaire</strong> : chez les personnes plus âgées, l'usure des vertèbres peut réduire l'espace disponible pour le nerf.</li>
  <li><strong>Les tensions musculaires compensatoires</strong> : une mauvaise posture prolongée, un travail physique intense ou même une grossesse peuvent créer des déséquilibres qui finissent par irriter le nerf.</li>
</ul>
<p>À La Réunion, le climat chaud et humide, les activités sportives intenses (trail, surf, football) et les métiers à forte sollicitation physique (BTP, agriculture, soins infirmiers) sont des facteurs de risque fréquemment rencontrés dans ma patientèle.</p>

<h2>Comment calmer une sciatique rapidement ?</h2>
<p>Voici les mesures immédiates que je recommande en attendant une consultation :</p>

<h3>1. Trouver la position antalgique</h3>
<p>En phase aiguë, allongez-vous sur le dos, les jambes relevées sur un coussin ou une chaise de façon à former un angle de 90° au niveau des hanches et des genoux. Cette position décharge les disques intervertébraux et relâche la tension sur le nerf sciatique.</p>

<h3>2. Appliquer du chaud ou du froid</h3>
<p>Dans les 48 premières heures, le froid (glaçons enveloppés dans un linge, 15 min, 3 fois/jour) réduit l'inflammation. Après 48h, la chaleur humide (bouillotte, bain chaud) détend les muscles contracturés autour du nerf.</p>

<h3>3. Éviter le repos total prolongé</h3>
<p>Contrairement à l'idée reçue, rester allongé plus de 48h aggrave souvent la situation. Marchez doucement, changez de position régulièrement. Le mouvement doux favorise la circulation et aide à récupérer plus vite.</p>

<h3>4. Prendre un anti-inflammatoire si nécessaire</h3>
<p>En phase aiguë sévère, un AINS (ibuprofène) peut vous permettre de passer les premières nuits. Consultez votre médecin pour la prescription adaptée. L'ostéopathie n'est pas incompatible avec un traitement médicamenteux — les deux approches se complètent.</p>

<h2>Exercices pour soulager le nerf sciatique</h2>
<p>Ces exercices sont à réaliser doucement, sans forcer. Si l'un d'eux aggrave la douleur, arrêtez immédiatement et consultez.</p>

<h3>Étirement du piriforme (en position allongée)</h3>
<p>Allongez-vous sur le dos. Croisez la cheville du côté douloureux sur le genou opposé (position du chiffre 4). Attrapez la cuisse de la jambe du dessous et tirez doucement vers votre poitrine. Maintenez 30 secondes. Répétez 3 fois.</p>

<h3>Mobilisation lombaire en douceur</h3>
<p>Allongé sur le dos, genoux fléchis, pieds à plat. Laissez tomber les deux genoux d'un côté, puis de l'autre, très lentement. Ce mouvement de rotation lombaire douce libère les tensions sans forcer sur le disque.</p>

<h3>Marche quotidienne</h3>
<p>20 à 30 minutes de marche à allure modérée, en terrain plat. La marche active la pompe discale, nourrit le disque intervertébral et entretient la mobilité sans surcharger le rachis lombaire.</p>

<h2>Quand consulter un ostéopathe pour une sciatique ?</h2>
<p>L'ostéopathie est particulièrement indiquée pour les sciatiques :</p>
<ul>
  <li>D'origine musculaire ou posturale (syndrome du piriforme, tensions musculaires globales)</li>
  <li>Chroniques ou récidivantes</li>
  <li>Liées à une grossesse (sciatique gravidique)</li>
  <li>Survenues après un effort physique ou un mouvement brusque</li>
  <li>Persistant après 3 à 4 semaines malgré un traitement médical seul</li>
</ul>
<p><strong>Attention</strong> : certains signes doivent vous orienter en urgence vers un médecin plutôt qu'un ostéopathe : troubles urinaires ou intestinaux associés, perte de force musculaire soudaine dans la jambe, sciatique bilatérale. Ces signes peuvent indiquer une urgence neurologique.</p>

<h2>Traitement ostéopathique de la sciatique : ce que je fais concrètement</h2>
<p>Lors d'une première consultation à mon cabinet de La Possession, je réalise un bilan complet avant de toucher quoi que ce soit. J'identifie :</p>
<ul>
  <li>Le niveau vertébral impliqué (L4-L5 ? L5-S1 ?)</li>
  <li>La présence ou non d'une hernie discale (les tests orthopédiques le suggèrent)</li>
  <li>Les zones de tension dans les muscles lombaires, fessiers et ischio-jambiers</li>
  <li>Les éventuels déséquilibres posturaux globaux (bassin, pieds, épaules)</li>
</ul>
<p>En fonction du tableau clinique, j'utilise :</p>
<ul>
  <li><strong>Des techniques de relâchement myofascial</strong> : travail sur les fascias et les muscles profonds (piriforme, carré des lombes, psoas) pour décomprimer le nerf</li>
  <li><strong>Des mobilisations vertébrales douces</strong> : en cas de blocage lombaire, des techniques de mobilisation rythmique ou de thrust (manipulation) adaptées à l'état du patient</li>
  <li><strong>Un travail sur la dure-mère</strong> : la membrane qui entoure le nerf peut être tendue sur toute sa longueur — les techniques crâniennes permettent de libérer ces tensions à distance</li>
  <li><strong>Des conseils posturaux personnalisés</strong> : adaptés à votre métier, votre pratique sportive et vos habitudes de vie à La Réunion</li>
</ul>
<p>En moyenne, 2 à 4 séances suffisent pour résoudre une sciatique d'origine mécanique. Les résultats sont souvent perceptibles dès la première séance.</p>

<h2>Prévenir les récidives de sciatique</h2>
<p>Une sciatique soulagée a tendance à revenir si les causes profondes ne sont pas corrigées. Voici mes recommandations pour éviter les rechutes :</p>
<ul>
  <li><strong>Renforcer les muscles du gainage</strong> : abdominaux profonds (transverse) et muscles paravertébraux. Un programme de 10 à 15 minutes par jour suffit.</li>
  <li><strong>Corriger l'ergonomie de travail</strong> : hauteur du bureau, position devant l'écran, technique de levage de charge.</li>
  <li><strong>Consulter en prévention</strong> : 1 à 2 séances d'ostéopathie par an permettent de détecter et corriger les tensions avant qu'elles ne deviennent douloureuses.</li>
  <li><strong>Pratiquer une activité physique régulière et adaptée</strong> : natation, marche, yoga, pilates — toutes ces disciplines entretiennent la mobilité rachidienne.</li>
</ul>

<h2>Consultation à La Possession — Prenez rendez-vous</h2>
<p>Mon cabinet est situé au sein de la Maison de Santé Sakisoigne, Rue Moulin Joli, 97419 La Possession. Je reçois en consultation du lundi au samedi, de 9h à 20h.</p>
<p>Si vous souffrez d'une sciatique et souhaitez une prise en charge ostéopathique, vous pouvez prendre rendez-vous directement en ligne sur Doctolib. Une première consultation dure environ 45 minutes à 1 heure, le temps de réaliser un bilan complet et de commencer le traitement dès la première séance.</p>
`,
  },
  {
    slug: "lombalgie-chronique-traitement-osteopathe",
    title: "Lombalgie chronique : causes, symptômes et traitement naturel par l'ostéopathie",
    description:
      "Vous souffrez de douleurs en bas du dos persistantes ? Découvrez les causes de la lombalgie chronique et comment un traitement naturel par l'ostéopathie peut vous soulager durablement. Cabinet à La Possession, La Réunion (974).",
    date: "2026-04-16",
    readTime: 8,
    keywords: [
      "lombalgie traitement naturel",
      "lombalgie chronique",
      "douleur en bas du dos",
      "que faire pour un lumbago",
      "lombalgie chronique symptome",
      "ostéopathe lombalgie La Réunion",
      "ostéopathe lombalgie La Possession",
      "ostéopathe La Possession 974",
    ],
    excerpt:
      "La lombalgie — douleur en bas du dos — est la première cause de consultation en ostéopathie. Aiguë ou chronique, elle peut devenir invalidante si elle n'est pas prise en charge correctement. En tant qu'ostéopathe à La Possession, voici ce que je vois chaque semaine et comment j'aborde ces douleurs lombaires.",
    tldr:
      "Le meilleur traitement naturel d'une lombalgie associe : mouvement quotidien (marche 30 min), étirements doux du psoas et des fessiers, application de chaleur, et ostéopathie pour traiter les blocages mécaniques. Le repos prolongé aggrave la douleur. 2 à 4 séances suffisent en général. Consultez votre médecin en cas de fièvre, perte de poids ou sciatique sévère.",
    faq: [
      {
        question: "Quel est le meilleur traitement naturel pour une lombalgie ?",
        answer:
          "Combiner trois leviers : maintenir une activité physique douce (marche 30 min/jour, natation, vélo), appliquer de la chaleur humide 15 à 20 min sur la zone tendue, et consulter un ostéopathe pour libérer les blocages articulaires et musculaires. Le repos au lit prolongé est contre-productif.",
      },
      {
        question: "Que faire pour un lumbago bloquant ?",
        answer:
          "En phase aiguë, ne restez pas couché plus de 24 à 48 heures. Marchez doucement, dormez en chien de fusil sur le côté avec un coussin entre les genoux, appliquez du chaud, et prenez un antalgique simple si besoin. Consultez un ostéopathe dans les 7 jours pour accélérer la levée du blocage.",
      },
      {
        question: "Combien de séances d'ostéopathie pour une lombalgie ?",
        answer:
          "Pour une lombalgie aiguë récente, 1 à 2 séances suffisent souvent. Pour une lombalgie chronique installée depuis plus de 3 mois, comptez 3 à 5 séances espacées de 2 à 3 semaines, complétées par un travail postural et des exercices à domicile.",
      },
      {
        question: "Quand s'inquiéter d'une lombalgie ?",
        answer:
          "Consultez votre médecin sans attendre en cas de fièvre, perte de poids inexpliquée, douleur nocturne intense, perte de force dans une jambe, troubles urinaires ou anesthésie en selle. Ces signes peuvent évoquer une cause sérieuse nécessitant un bilan médical urgent.",
      },
    ],
    content: `
<h2>Qu'est-ce que la lombalgie ?</h2>
<p>La lombalgie désigne toute douleur localisée dans la région lombaire, c'est-à-dire le bas du dos, entre les dernières côtes et le haut des fesses. C'est l'une des plaintes les plus fréquentes en médecine — et la première cause d'invalidité chez les personnes de moins de 45 ans.</p>
<p>On distingue deux formes principales :</p>
<ul>
  <li><strong>La lombalgie aiguë (lumbago)</strong> : douleur soudaine, souvent déclenchée par un faux mouvement ou un effort. Elle dure moins de 6 semaines. La grande majorité des lumbagos guérissent spontanément, mais sans traitement adapté, ils peuvent rechuter ou s'installer.</li>
  <li><strong>La lombalgie chronique</strong> : douleur persistant au-delà de 3 mois, souvent avec des phases d'amélioration et des rechutes. Elle peut finir par altérer la qualité de vie, le sommeil et l'humeur.</li>
</ul>
<p>Dans ma pratique à La Possession (La Réunion), je reçois régulièrement des patients qui "font avec" depuis des mois, parfois des années, sans avoir cherché à soulager la cause profonde de leurs douleurs lombaires. La lombalgie est de loin la première raison de consultation dans mon cabinet.</p>

<h2>Causes de la lombalgie : pourquoi a-t-on mal en bas du dos ?</h2>
<p>La lombalgie est rarement d'origine unique. Elle résulte souvent d'une combinaison de facteurs mécaniques, posturaux et parfois psychosociaux.</p>

<h3>Les causes mécaniques et structurelles</h3>
<ul>
  <li><strong>Contractures musculaires</strong> : les muscles paravertébraux (érecteurs du rachis, carré des lombes) se contractent en réponse à une surcharge ou une mauvaise posture. C'est la cause la plus fréquente du lumbago aigu.</li>
  <li><strong>Hernie discale</strong> : un disque intervertébral usé ou traumatisé fait saillie et irrite les structures environnantes. Lorsqu'elle touche une racine nerveuse, la hernie peut provoquer une sciatique associée.</li>
  <li><strong>Arthrose lombaire</strong> : l'usure progressive des articulations vertébrales (facettes articulaires) génère une raideur matinale et des douleurs à l'effort. Elle concerne surtout les personnes de plus de 50 ans.</li>
  <li><strong>Blocage sacro-iliaque</strong> : l'articulation entre le sacrum et l'os iliaque peut se bloquer, provoquant une douleur unilatérale irradiant vers la fesse et la cuisse. Souvent confondue avec une sciatique.</li>
  <li><strong>Hyperlordose ou scoliose</strong> : des déséquilibres de courbure rachidienne augmentent les contraintes sur certains segments et favorisent l'usure prématurée.</li>
</ul>

<h3>Les facteurs aggravants</h3>
<p>Certains facteurs augmentent le risque de lombalgie chronique ou de rechute :</p>
<ul>
  <li>Travail physique intense ou port répété de charges lourdes</li>
  <li>Sédentarité et travail prolongé en position assise</li>
  <li>Surpoids (augmentation des contraintes mécaniques sur les disques)</li>
  <li>Stress chronique et état anxio-dépressif (les tensions musculaires sont amplifiées)</li>
  <li>Mauvaise qualité du sommeil</li>
</ul>
<p>À La Réunion, les métiers à forte sollicitation physique — BTP, agriculture, aide à domicile, soins infirmiers — sont particulièrement représentés dans mes consultations pour lombalgie au cabinet de La Possession. Le terrain volcanique et les activités de plein air (trail, randonnée, surf) amplifient également les contraintes sur le rachis lombaire.</p>

<h2>Lombalgie chronique : quels symptômes ?</h2>
<p>La lombalgie chronique se manifeste de façon variable selon les personnes, mais on retrouve fréquemment :</p>
<ul>
  <li>Une <strong>douleur sourde ou pesante</strong> en bas du dos, permanente ou quasi-permanente</li>
  <li>Des <strong>raideurs matinales</strong> au lever, qui s'améliorent après quelques minutes de mouvement</li>
  <li>Une douleur augmentant en position assise prolongée, à la station debout prolongée ou lors d'efforts</li>
  <li>Des <strong>irradiations</strong> possibles vers les fesses, les cuisses (sans descendre jusqu'au pied, contrairement à la vraie sciatique)</li>
  <li>Une fatigue générale liée à la douleur continue et aux troubles du sommeil</li>
</ul>
<p><strong>Attention</strong> : certains signes doivent vous orienter en priorité vers un médecin : fièvre associée, perte de poids inexpliquée, douleur nocturne intense ne calmant pas au repos, troubles urinaires ou intestinaux. Ces symptômes peuvent évoquer une cause non mécanique nécessitant un bilan médical urgent.</p>

<h2>Que faire pour un lumbago ? Les bons réflexes en phase aiguë</h2>
<p>Si vous avez un lumbago aigu, voici les mesures immédiates à adopter :</p>

<h3>1. Ne pas rester immobile plus de 48h</h3>
<p>Le repos strict n'est recommandé qu'en phase très aiguë (première journée). Au-delà, la mobilisation douce est bénéfique : marchez à plat, changez régulièrement de position, évitez de rester assis ou allongé en continu. Le mouvement nourrit les disques et décontracture les muscles.</p>

<h3>2. Appliquer du froid puis du chaud</h3>
<p>Dans les 24 à 48 premières heures : froid (poche de glace enveloppée dans un linge, 15 min, 3 fois par jour) pour réduire l'inflammation. Ensuite : chaleur (bouillotte, bain chaud) pour relâcher les spasmes musculaires.</p>

<h3>3. Adopter la position antalgique</h3>
<p>Allongez-vous sur le dos, les jambes fléchies, avec un coussin sous les genoux. Cette position décharge les disques intervertébraux et les muscles paravertébraux. Évitez de dormir sur le ventre.</p>

<h3>4. Consulter rapidement</h3>
<p>Un lumbago non traité correctement dès le départ a tendance à récidiver et à évoluer vers la chronicité. Consulter un ostéopathe dans les premiers jours permet souvent de résoudre le problème plus rapidement et d'éviter l'installation durable des douleurs.</p>

<h2>Traitement naturel de la lombalgie : le rôle de l'ostéopathie</h2>
<p>L'ostéopathie est l'une des approches les plus efficaces pour soulager la lombalgie, aussi bien en phase aiguë que chronique. Elle agit directement sur les causes mécaniques sans médicament et sans intervention chirurgicale.</p>

<h3>Ce que je réalise lors de la consultation</h3>
<p>Lors de votre première venue à mon cabinet de La Possession, je commence par un bilan fonctionnel complet :</p>
<ul>
  <li>Analyse de votre posture et des déséquilibres de bassin</li>
  <li>Tests de mobilité rachidienne (flexion, extension, rotations)</li>
  <li>Palpation des muscles paravertébraux et des articulations sacro-iliaques</li>
  <li>Tests orthopédiques pour identifier une éventuelle composante discale ou radiculaire</li>
  <li>Analyse des facteurs de risque et des habitudes de vie</li>
</ul>

<h3>Les techniques utilisées</h3>
<p>En fonction du tableau clinique, j'adapte mon approche :</p>
<ul>
  <li><strong>Mobilisations vertébrales douces</strong> : pour restaurer la mobilité des segments bloqués sans forcer. Ces techniques sont indolores et particulièrement adaptées aux phases subaiguës.</li>
  <li><strong>Thrust lombaire ou sacro-iliaque</strong> : manipulation articulaire précise qui libère un blocage en quelques secondes. Souvent spectaculaire sur un lumbago récent.</li>
  <li><strong>Relâchement myofascial</strong> : travail en profondeur sur les fascias et les muscles contracturés (carré des lombes, psoas, érecteurs du rachis) pour décomprimer les structures vertébrales.</li>
  <li><strong>Travail viscéral</strong> : les organes digestifs (côlon, rein) ont des connexions fasciales avec les lombaires. Un relâchement viscéral peut surprendre mais est souvent très efficace sur les lombalgie chroniques récalcitrantes.</li>
  <li><strong>Conseils posturaux personnalisés</strong> : ergonomie du poste de travail, exercices de renforcement à faire à domicile, adaptations du quotidien.</li>
</ul>

<h2>Exercices pour soulager la lombalgie chronique</h2>
<p>Ces exercices sont à pratiquer quotidiennement, progressivement et sans douleur :</p>

<h3>Le gainage abdominal doux</h3>
<p>Allongé sur le dos, genoux fléchis, pieds à plat : contractez doucement les abdominaux profonds en poussant légèrement le bas du dos vers le sol. Maintenez 5 secondes, relâchez. Répétez 10 fois. Ce mouvement renforce le transverse, le muscle stabilisateur du rachis lombaire.</p>

<h3>Étirement du psoas</h3>
<p>En fente avant basse, genou arrière au sol : poussez doucement les hanches vers l'avant pour étirer le psoas du côté du genou au sol. Maintenez 30 secondes de chaque côté. Le psoas, muscle profond reliant les vertèbres lombaires au fémur, est souvent contracturé chez les personnes en position assise prolongée.</p>

<h3>Rotation lombaire douce</h3>
<p>Allongé sur le dos, genoux fléchis : laissez tomber les genoux d'un côté, puis de l'autre, en gardant les épaules au sol. 10 rotations lentes de chaque côté. Cet exercice mobilise les facettes articulaires et détend les muscles paravertébraux.</p>

<h3>La marche quotidienne</h3>
<p>20 à 30 minutes par jour, à allure modérée, en terrain plat ou légèrement vallonné. La marche est l'exercice le plus recommandé dans les lombalgie chroniques : elle active la pompe discale, renforce les muscles profonds et améliore l'humeur (ce qui réduit la perception de la douleur).</p>

<h2>Combien de séances pour guérir d'une lombalgie ?</h2>
<p>La durée du traitement dépend du type de lombalgie et de son ancienneté :</p>
<ul>
  <li><strong>Lumbago aigu récent (moins de 3 semaines)</strong> : en général 1 à 3 séances suffisent pour résoudre le problème.</li>
  <li><strong>Lombalgie chronique installée</strong> : 4 à 6 séances sur 2 à 3 mois, avec parfois une séance de suivi à 3 ou 6 mois pour consolider les résultats.</li>
  <li><strong>Lombalgie sur fond d'arthrose ou de hernie discale</strong> : l'ostéopathie ne guérit pas l'arthrose ou la hernie, mais elle améliore très significativement la gestion de la douleur et la qualité de vie. Des séances régulières (2 à 4 par an) permettent de maintenir une bonne mobilité.</li>
</ul>
<p>Si vous souffrez de <a href="/blog/comment-soulager-une-sciatique">sciatique associée à votre lombalgie</a>, la prise en charge sera adaptée pour soulager simultanément les deux composantes.</p>

<h2>Consultation à La Possession — Prenez rendez-vous</h2>
<p>Mon cabinet est situé au sein de la Maison de Santé Sakisoigne, Rue Moulin Joli, 97419 La Possession, dans le nord de La Réunion. Je reçois du lundi au samedi, de 9h à 20h.</p>
<p>Si vous souffrez de douleurs lombaires persistantes, aiguës ou chroniques, une consultation d'ostéopathie vous permettra d'identifier précisément l'origine de votre problème et de débuter un traitement adapté dès la première séance. Prenez rendez-vous directement en ligne sur Doctolib.</p>
`,
  },
  {
    slug: "migraine-mal-de-tete-osteopathie",
    title: "Migraine et mal de tête : comment l'ostéopathie peut vous soulager",
    description:
      "Migraines récurrentes ou maux de tête persistants ? Découvrez comment l'ostéopathie agit sur les causes mécaniques (cervicales, crâne, mâchoire) pour soulager durablement. Cabinet à La Possession, La Réunion (974).",
    date: "2026-04-30",
    readTime: 8,
    keywords: [
      "migraine ostéopathie",
      "mal de tête ostéopathe",
      "soulager migraine naturellement",
      "céphalée de tension",
      "migraine ophtalmique ostéopathe",
      "ostéopathe migraine La Réunion",
      "ostéopathe migraine La Possession",
      "ostéopathe La Possession 974",
    ],
    excerpt:
      "Les migraines et maux de tête touchent plus d'une personne sur cinq. Avant de multiplier les antalgiques, il existe une approche naturelle, souvent très efficace : l'ostéopathie. En tant qu'ostéopathe à La Possession (La Réunion), je reçois chaque semaine des patients libérés de leurs crises en quelques séances.",
    tldr:
      "L'ostéopathie est efficace sur la majorité des migraines et maux de tête d'origine cervicale, posturale ou tensionnelle : la fréquence et l'intensité diminuent dès 1 à 3 séances. Pour soulager une crise rapidement : pièce sombre, hydratation, compresse fraîche sur la nuque, respiration lente. À ne jamais négliger : maux de tête brutaux, fièvre élevée, troubles neurologiques nouveaux.",
    faq: [
      {
        question: "Comment soulager une migraine naturellement ?",
        answer:
          "Isolez-vous dans une pièce calme et sombre, appliquez une compresse fraîche sur la nuque ou le front, hydratez-vous régulièrement, et pratiquez une respiration lente (inspiration 4 sec / expiration 6 sec). Une auto-massage doux des trapèzes et de la base du crâne soulage les céphalées de tension.",
      },
      {
        question: "L'ostéopathie est-elle efficace contre les migraines ?",
        answer:
          "Oui, surtout sur les migraines d'origine cervicogénique, tensionnelle ou liée à un dysfonctionnement de l'ATM. Les études cliniques rapportent une réduction de 30 à 50 % de la fréquence des crises après 3 à 4 séances. L'ostéopathie est moins efficace sur la migraine pure d'origine vasculaire — où elle reste un complément utile.",
      },
      {
        question: "Combien de séances d'ostéopathie pour une migraine ?",
        answer:
          "1 à 3 séances espacées de 3 à 4 semaines suffisent généralement pour évaluer l'efficacité. Si la fréquence des crises diminue après la première séance, un suivi à 6 mois permet de stabiliser durablement. Sans amélioration après 3 séances, il faut explorer d'autres pistes (neurologue, dentiste pour l'ATM).",
      },
      {
        question: "Quels sont les déclencheurs fréquents des migraines ?",
        answer:
          "Les principaux déclencheurs sont : le stress, le manque ou l'excès de sommeil, certains aliments (chocolat, fromage affiné, alcool, glutamate), les variations hormonales, la déshydratation, la lumière intense, et les tensions cervicales liées à une mauvaise posture (écran, oreiller inadapté).",
      },
    ],
    content: `
<h2>Migraine, céphalée, mal de tête : de quoi parle-t-on exactement ?</h2>
<p>Avant de chercher à soulager une douleur de tête, il est essentiel de bien la nommer — car les causes (et donc les solutions) ne sont pas les mêmes selon le type. Dans ma pratique à La Possession, je vois principalement trois grandes familles :</p>
<ul>
  <li><strong>La migraine</strong> : douleur typiquement <strong>unilatérale</strong> (d'un seul côté de la tête), pulsatile, souvent accompagnée de nausées, d'une intolérance à la lumière (photophobie) et au bruit (phonophobie). Une crise dure de 4 à 72 heures et oblige généralement à s'isoler dans le noir.</li>
  <li><strong>La céphalée de tension</strong> : douleur diffuse, en "casque" ou "étau", qui serre les deux côtés du crâne. Moins violente qu'une migraine mais souvent quotidienne. C'est le type de mal de tête le plus fréquent en consultation d'ostéopathie.</li>
  <li><strong>La céphalée cervicogénique</strong> : douleur partant de la nuque et remontant sur l'arrière du crâne, parfois jusqu'à l'œil ou la tempe. Fréquente chez les personnes en travail prolongé sur ordinateur ou après un faux mouvement cervical.</li>
</ul>
<p>Il existe aussi des formes plus particulières — <strong>migraine ophtalmique</strong> (avec aura visuelle), <strong>migraine menstruelle</strong>, <strong>algie vasculaire de la face</strong> — que j'aborde plus loin dans l'article.</p>

<h2>Pourquoi a-t-on mal à la tête ? Les principales causes mécaniques</h2>
<p>La migraine est une maladie neurologique complexe, encore mal comprise. Mais en ostéopathie, on s'intéresse surtout aux <strong>facteurs déclencheurs et entretiens mécaniques</strong> sur lesquels on peut concrètement agir.</p>

<h3>Les tensions cervicales hautes</h3>
<p>Les trois premières vertèbres cervicales (C0-C1-C2, à la base du crâne) sont particulièrement liées aux maux de tête. Une <strong>restriction de mobilité</strong> à ce niveau irrite les fibres nerveuses qui innervent l'arrière du crâne et peut déclencher ou entretenir une céphalée. Le nerf grand occipital d'Arnold passe précisément dans cette zone — d'où le terme "névralgie d'Arnold" quand il est comprimé.</p>

<h3>Les blocages crâniens et de la mâchoire</h3>
<p>Le crâne n'est pas un bloc rigide : il est composé de 22 os reliés par des sutures qui conservent une <strong>micromobilité</strong>. Une tension excessive sur la dure-mère (membrane qui entoure le cerveau), un blocage des sutures temporales ou un trouble de la mâchoire (ATM) — bruxisme nocturne, mauvaise occlusion dentaire — peuvent provoquer des douleurs frontales, temporales ou rétro-orbitaires (derrière les yeux).</p>

<h3>Le stress et la posture</h3>
<p>Sous l'effet du stress chronique, les muscles de la nuque, des trapèzes et de la mâchoire se contractent en permanence. C'est la cause la plus fréquente des céphalées de tension. À La Réunion, mes patients en travail bureau (administration, banque, IT) ou à fortes charges physiques (BTP, infirmiers) cumulent souvent ces deux facteurs : tensions posturales + stress.</p>

<h3>Les facteurs viscéraux</h3>
<p>Cela surprend souvent mes patients, mais la sphère digestive (foie, estomac, intestin) a une influence directe sur les maux de tête. Une digestion difficile, une congestion hépatique ou un syndrome du côlon irritable peuvent générer des céphalées par tension fasciale ascendante. C'est typiquement le cas des migraines déclenchées après les repas, le matin au réveil, ou en lien avec le cycle menstruel.</p>

<h3>Les autres déclencheurs</h3>
<ul>
  <li>Manque de sommeil ou sommeil de mauvaise qualité</li>
  <li>Déshydratation (particulièrement à La Réunion en été)</li>
  <li>Aliments déclencheurs : chocolat, fromage affiné, alcool, glutamate, aspartame</li>
  <li>Variations hormonales (règles, grossesse, ménopause)</li>
  <li>Variations climatiques (cyclones, descente de pression atmosphérique fréquente sur l'île)</li>
</ul>

<h2>Comment soulager une migraine rapidement et naturellement ?</h2>
<p>En attendant une consultation, voici les gestes immédiats que je recommande à mes patients en crise.</p>

<h3>1. S'isoler dans un environnement calme et sombre</h3>
<p>Allongez-vous dans une pièce fraîche, lumière tamisée, sans bruit. La photophobie et la phonophobie ne sont pas des caprices : elles aggravent réellement la crise. Réduire la stimulation sensorielle aide votre système nerveux à se réguler.</p>

<h3>2. Appliquer du froid sur la nuque ou les tempes</h3>
<p>Une compresse froide ou une poche de glace enveloppée dans un linge, posée 10 à 15 minutes sur la base du crâne ou les tempes, contracte les vaisseaux sanguins dilatés et réduit la douleur pulsatile typique des migraines vasculaires.</p>

<h3>3. Masser le point Hegu (LI-4)</h3>
<p>Ce point d'acupression, situé dans le creux entre le pouce et l'index, est connu pour soulager les céphalées. Pressez fermement pendant 1 à 2 minutes, en respirant lentement. Effet apaisant souvent rapide sur les céphalées de tension.</p>

<h3>4. Détendre la nuque et la mâchoire</h3>
<p>Posez vos doigts à la base du crâne (juste sous l'os occipital), exercez une pression douce et constante pendant 1 minute. Faites de petits mouvements circulaires sur les muscles masséters (devant l'oreille, en serrant les dents pour les sentir). Cela libère les tensions qui entretiennent la douleur.</p>

<h3>5. S'hydrater et oxygéner</h3>
<p>Buvez un grand verre d'eau (la déshydratation est un déclencheur classique), aérez la pièce, et pratiquez quelques minutes de respiration lente : 4 secondes d'inspiration, 6 secondes d'expiration. La cohérence cardiaque calme le système nerveux autonome impliqué dans la migraine.</p>

<h3>6. Antalgiques : avec mesure</h3>
<p>Paracétamol ou ibuprofène peuvent dépanner ponctuellement, mais leur usage répété (plus de 10 à 15 jours par mois) crée un cercle vicieux : la <strong>céphalée par abus médicamenteux</strong>. Si vous prenez des antalgiques plus de deux fois par semaine, c'est précisément le moment de consulter pour traiter la cause de fond.</p>

<h2>Est-ce que l'ostéopathie soigne vraiment les migraines ?</h2>
<p>C'est la question que mes patients me posent en premier. La réponse honnête : <strong>l'ostéopathie ne "guérit" pas la migraine en tant que maladie neurologique</strong>, mais elle agit avec une grande efficacité sur :</p>
<ul>
  <li><strong>La fréquence des crises</strong> : la plupart de mes patients constatent une diminution de moitié, voire plus, après 3 à 5 séances</li>
  <li><strong>L'intensité de la douleur</strong> : crises plus courtes, mieux tolérées</li>
  <li><strong>Les facteurs mécaniques entretenant les céphalées</strong> : tensions cervicales, troubles de la mâchoire, stress accumulé dans les fascias</li>
  <li><strong>La consommation d'antalgiques</strong> : objectif majeur quand l'usage devient quotidien</li>
</ul>
<p>Plusieurs études cliniques (notamment françaises et nord-américaines) ont confirmé l'efficacité de l'ostéopathie sur les céphalées de tension et les migraines, particulièrement quand une composante cervicale est présente — ce qui est le cas chez la grande majorité de mes patients.</p>

<h2>Consultation d'ostéopathie pour migraine : ce que je fais concrètement</h2>
<p>Lors d'une première séance à mon cabinet de La Possession, je commence toujours par un <strong>bilan détaillé</strong> avant la moindre manipulation :</p>
<ul>
  <li>Histoire des céphalées : depuis quand, à quelle fréquence, type de douleur, déclencheurs identifiés</li>
  <li>Antécédents : choc à la tête, accident, traumatismes dentaires, accouchement instrumenté</li>
  <li>Mode de vie : poste de travail, sommeil, alimentation, stress, cycle menstruel</li>
  <li>Tests de mobilité cervicale, crânienne et de la mâchoire</li>
  <li>Évaluation posturale globale (le bassin et le bas du dos influencent les cervicales)</li>
</ul>

<h3>Les techniques que j'utilise</h3>
<ul>
  <li><strong>Techniques crâniennes douces</strong> : libération des sutures temporales, frontales et occipitales pour relâcher les tensions sur la dure-mère. Très indolores, parfois imperceptibles, mais souvent les plus efficaces sur les migraines récurrentes.</li>
  <li><strong>Mobilisation des cervicales hautes (C0-C1-C2)</strong> : techniques articulaires précises et adaptées, sans manipulation brusque, pour restaurer la mobilité de la base du crâne.</li>
  <li><strong>Travail sur la mâchoire (ATM)</strong> : relâchement des muscles masséters, ptérygoïdiens et temporaux. Indispensable chez les bruxeurs nocturnes et les personnes serrant les dents sous stress.</li>
  <li><strong>Relâchement myofascial des trapèzes et des sous-occipitaux</strong> : ces muscles, contracturés par la position assise et le stress, entretiennent la majorité des céphalées de tension.</li>
  <li><strong>Travail viscéral</strong> : si l'interrogatoire oriente vers une composante digestive ou hormonale, je travaille sur le foie, l'estomac ou les fascias pelviens.</li>
  <li><strong>Conseils personnalisés</strong> : ergonomie, exercices d'auto-libération à faire chez soi, gestion du stress, hygiène alimentaire et de sommeil adaptée à votre quotidien à La Réunion.</li>
</ul>

<h2>Combien de séances pour soulager mes migraines ?</h2>
<p>La durée du suivi dépend de l'ancienneté et de la fréquence des crises :</p>
<ul>
  <li><strong>Céphalée de tension récente</strong> (quelques semaines à quelques mois) : 1 à 3 séances suffisent généralement</li>
  <li><strong>Migraines chroniques installées depuis des années</strong> : 4 à 6 séances espacées de 3 à 4 semaines, puis suivi tous les 3 à 6 mois pour consolider</li>
  <li><strong>Migraine cataméniale (liée aux règles)</strong> : 3 à 4 séances ciblant le bassin, la sphère viscérale et les cervicales, idéalement en milieu de cycle</li>
  <li><strong>Céphalée cervicogénique</strong> (post-traumatique, post-faux mouvement) : 1 à 3 séances suffisent souvent à résoudre le problème durablement</li>
</ul>
<p>Si vos céphalées sont associées à des <a href="/blog/lombalgie-chronique-traitement-osteopathe">douleurs lombaires</a> ou cervicales basses, la prise en charge ostéopathique adressera l'ensemble du tableau postural — souvent avec un effet en chaîne sur les maux de tête.</p>

<h2>Migraine ophtalmique, cervicale, hormonale : que faire ?</h2>

<h3>Migraine ophtalmique (avec aura)</h3>
<p>Précédée de troubles visuels (points lumineux, vision floue, scotome), elle inquiète souvent. L'ostéopathie agit principalement sur la phase douloureuse qui suit l'aura, et sur la prévention des crises en relâchant les tensions cervicales hautes et la tente du cervelet (membrane intracrânienne).</p>

<h3>Migraine cervicale (cervicogénique)</h3>
<p>C'est <strong>la forme la plus accessible à l'ostéopathie</strong>. Lorsque la douleur part nettement de la nuque et remonte vers la tête, le travail manuel sur les cervicales hautes donne souvent des résultats spectaculaires dès la première séance.</p>

<h3>Migraine menstruelle ou hormonale</h3>
<p>Liée aux variations d'œstrogènes, elle survient typiquement 2 à 3 jours avant les règles. Le travail ostéopathique sur le bassin, le diaphragme et les fascias pelviens libère les contraintes mécaniques sur l'utérus et améliore globalement le syndrome prémenstruel.</p>

<h3>Migraine ophtalmique sans aura ou algie vasculaire de la face</h3>
<p>Pour ces formes plus rares mais très douloureuses, l'ostéopathie est complémentaire d'un suivi neurologique. Elle agit sur la sphère vasculaire et les tensions de la base du crâne.</p>

<h2>Quand ne pas consulter un ostéopathe pour des maux de tête ?</h2>
<p>Certains signes imposent <strong>un avis médical urgent</strong> avant toute prise en charge ostéopathique :</p>
<ul>
  <li>Mal de tête brutal et inhabituel ("le pire mal de tête de votre vie")</li>
  <li>Céphalée associée à de la fièvre, une raideur de nuque, une confusion ou des troubles de la conscience</li>
  <li>Apparition après un traumatisme crânien récent</li>
  <li>Aggravation rapide en quelques jours, sans amélioration</li>
  <li>Troubles neurologiques associés : faiblesse d'un côté du corps, troubles de la parole, troubles visuels persistants</li>
  <li>Mal de tête chez l'enfant de moins de 6 ans, ou chez la personne âgée sans antécédent</li>
</ul>
<p>Dans ces cas, dirigez-vous immédiatement vers un médecin ou les urgences. L'ostéopathie pourra reprendre la main une fois la cause grave écartée.</p>

<h2>Prévenir les crises sur le long terme</h2>
<p>Au-delà des séances, voici les habitudes que je recommande à mes patients pour réduire la fréquence des crises :</p>
<ul>
  <li><strong>Tenir un journal des crises</strong> : date, intensité, déclencheur identifié, durée, traitement pris. Sur 2 à 3 mois, des patterns apparaissent toujours (alimentation, cycle, sommeil, météo).</li>
  <li><strong>Régulariser le sommeil</strong> : se coucher et se lever aux mêmes horaires, y compris le week-end. Les variations brusques sont un déclencheur majeur.</li>
  <li><strong>Activité physique régulière</strong> : 30 minutes 3 fois par semaine — marche, natation, yoga. L'activité cardiovasculaire douce a un effet préventif démontré sur les migraines.</li>
  <li><strong>Hydratation</strong> : 1,5 à 2 L d'eau par jour, davantage à La Réunion en saison chaude</li>
  <li><strong>Gérer le stress</strong> : cohérence cardiaque, méditation, sophrologie. Le stress non régulé est le carburant numéro un des céphalées de tension.</li>
  <li><strong>Ergonomie du poste de travail</strong> : écran à hauteur des yeux, pauses toutes les 45 minutes, étirements cervicaux réguliers.</li>
</ul>

<h2>Consultation à La Possession — Prenez rendez-vous</h2>
<p>Mon cabinet est situé au sein de la Maison de Santé Sakisoigne, Rue Moulin Joli, 97419 La Possession, dans le nord de La Réunion. Je reçois du lundi au samedi, de 9h à 20h.</p>
<p>Si vous souffrez de migraines, de maux de tête récurrents ou de céphalées de tension, une consultation d'ostéopathie permet d'identifier les causes mécaniques de votre douleur et de mettre en place un plan de soin sur mesure dès la première séance. Si vos céphalées sont associées à une <a href="/blog/comment-soulager-une-sciatique">sciatique</a> ou des douleurs lombaires, je traite l'ensemble dans une approche globale. Prenez rendez-vous directement en ligne sur Doctolib.</p>
`,
  },
  {
    slug: "douleur-sacro-iliaque-exercices-osteopathie",
    title: "Douleur sacro-iliaque : 5 exercices et le rôle de l'ostéopathie pour la soulager",
    description:
      "Douleur lombaire basse, fessière ou irradiant dans la jambe ? Découvrez 5 exercices pour soulager une douleur sacro-iliaque + l'apport de l'ostéopathie. Consultations à La Possession (La Réunion 974).",
    date: "2026-05-06",
    readTime: 8,
    keywords: [
      "douleur sacro-iliaque exercices",
      "douleur sacro-iliaque",
      "articulation sacro-iliaque douleur",
      "blocage sacro iliaque",
      "sacro-iliaque ostéopathe La Réunion",
      "sacro-iliaque ostéopathe La Possession",
      "ostéopathe La Possession 974",
    ],
    excerpt:
      "L'articulation sacro-iliaque est une cause fréquente — et souvent méconnue — de douleur lombaire basse. En tant qu'ostéopathe à La Possession (La Réunion), je vous explique comment la reconnaître, 5 exercices pour la soulager à la maison, et quand l'ostéopathie peut faire la différence.",
    tldr:
      "Une douleur sacro-iliaque se localise au-dessus de la fesse, aggravée par la position assise prolongée et le passage assis-debout. Les 5 exercices clés : étirement du piriforme, bascule de bassin, étirement du psoas, pont fessier, torsion lombaire douce. L'ostéopathie résout la majorité des cas en 1 à 3 séances. Privilégiez la marche, évitez course et sports d'impact pendant la phase douloureuse.",
    faq: [
      {
        question: "Comment reconnaître une douleur sacro-iliaque ?",
        answer:
          "Douleur basse au-dessus de la fesse, le plus souvent unilatérale, aggravée par la position assise prolongée, le passage de la position assise à debout, et le retournement dans le lit. La douleur peut irradier dans la fesse ou l'arrière de la cuisse mais ne descend généralement pas jusqu'au pied (contrairement à une vraie sciatique).",
      },
      {
        question: "Quels exercices pour soulager une douleur sacro-iliaque ?",
        answer:
          "Cinq exercices sont particulièrement efficaces : étirement du piriforme en position du \"4\" allongé (30 sec × 3), bascule du bassin (10 à 15 répétitions), étirement du psoas en fente (20 à 30 sec × 3), pont fessier (10 à 12 répétitions), torsion lombaire douce (20 sec de chaque côté × 3). À pratiquer une à deux fois par jour pendant 2 à 3 semaines.",
      },
      {
        question: "Combien de temps dure une douleur sacro-iliaque ?",
        answer:
          "Un blocage mécanique aigu dure 3 à 10 jours. Une sacro-iliaque post-partum peut persister 3 à 6 mois sans prise en charge. Une forme chronique liée à un déséquilibre postural reste tant que la cause n'est pas corrigée. L'ostéopathie accélère la récupération et permet d'identifier le déséquilibre de fond.",
      },
      {
        question: "Quel sport en cas de douleur sacro-iliaque ?",
        answer:
          "Privilégiez la marche sur terrain plat, la natation (dos crawlé ou crawl, éviter la brasse), le vélo en position droite, le yoga doux et le Pilates. Évitez temporairement la course à pied, les sports d'impact, le golf, le tennis et le port de charges asymétriques tant que la douleur est présente.",
      },
    ],
    content: `
<h2>Qu'est-ce que l'articulation sacro-iliaque ?</h2>
<p>L'articulation sacro-iliaque (SI) relie le <strong>sacrum</strong> (l'os triangulaire à la base de la colonne vertébrale) à <strong>l'ilium</strong> (l'os du bassin). Vous en avez deux : une à droite, une à gauche, situées de part et d'autre du bas du dos, dans cette zone de "fossettes" au-dessus des fesses.</p>
<p>Bien qu'elle ne bouge que de quelques millimètres, cette articulation joue un rôle <strong>fondamental</strong> : elle absorbe et redistribue les contraintes entre la colonne vertébrale et les membres inférieurs à chaque pas, à chaque mouvement. Quand elle se bloque ou s'enflamme, c'est tout l'équilibre du bassin qui est perturbé.</p>
<p>En consultation à La Possession, je rencontre régulièrement des patients qui souffrent depuis des mois d'un "mal de dos" sans savoir que la véritable origine est leur articulation sacro-iliaque. Le diagnostic est souvent un soulagement à lui seul.</p>

<h2>Comment reconnaître une douleur sacro-iliaque ?</h2>
<p>La douleur sacro-iliaque a des caractéristiques précises qui la distinguent d'une lombalgie classique ou d'une <a href="/blog/comment-soulager-une-sciatique">sciatique</a> :</p>
<ul>
  <li><strong>Localisation basse et latérale</strong> : la douleur se situe juste au-dessus de la fesse, d'un seul côté le plus souvent (parfois bilatérale).</li>
  <li><strong>Douleur en position assise prolongée</strong> : conduire, travailler à un bureau, regarder un film deviennent difficiles.</li>
  <li><strong>Difficulté à passer de la position assise à debout</strong> : les premiers pas sont raides, douloureux, puis s'améliorent après quelques mètres.</li>
  <li><strong>Douleur en se retournant dans le lit</strong> : un signe très évocateur d'un blocage SI.</li>
  <li><strong>Irradiation possible</strong> dans la fesse, l'arrière de la cuisse, parfois jusqu'au genou (ce qui peut faire penser à tort à une sciatique).</li>
  <li><strong>Soulagement par la marche</strong> dans les formes mécaniques pures.</li>
</ul>
<p>Si en revanche la douleur descend jusqu'au pied, ou s'accompagne de fourmillements et de perte de force, il s'agit plus probablement d'une véritable atteinte du nerf sciatique.</p>

<h2>Pourquoi a-t-on mal à l'articulation sacro-iliaque ?</h2>
<p>Les causes les plus fréquentes que je rencontre dans ma patientèle réunionnaise :</p>
<ul>
  <li><strong>Déséquilibre du bassin</strong> : une jambe plus courte (réelle ou fonctionnelle), une cicatrice, une mauvaise posture prolongée déséquilibrent le bassin et surchargent une SI.</li>
  <li><strong>Grossesse et post-partum</strong> : les hormones (relaxine) assouplissent les ligaments, le bassin s'élargit, et la SI peut devenir instable plusieurs mois après l'accouchement.</li>
  <li><strong>Traumatisme</strong> : chute sur les fesses, accident de voiture, faux pas dans un escalier, plaquage au rugby — autant de chocs qui peuvent bloquer une SI.</li>
  <li><strong>Sport asymétrique</strong> : course à pied (très pratiquée à La Réunion : trail, raid), tennis, golf, sports avec impulsion sur une seule jambe.</li>
  <li><strong>Sédentarité prolongée</strong> : le travail assis 8h par jour raidit les hanches et finit par contraindre la SI.</li>
  <li><strong>Sacro-iliite inflammatoire</strong> : forme plus rare, liée à des maladies rhumatismales (spondylarthrite). Elle nécessite un suivi médical spécialisé.</li>
</ul>

<h2>5 exercices pour soulager une douleur sacro-iliaque à la maison</h2>
<p>Ces exercices sont à pratiquer doucement, sans forcer la douleur. Si l'un d'eux aggrave la gêne, arrêtez et consultez. Idéalement, faites-les une à deux fois par jour, pendant 2 à 3 semaines.</p>

<h3>Exercice 1 — Étirement du piriforme (position du "4")</h3>
<p>Allongé sur le dos, genoux fléchis, pieds à plat au sol. Croisez la cheville du côté douloureux sur le genou opposé (en formant un "4"). Attrapez la cuisse de la jambe du dessous et tirez-la doucement vers votre poitrine. Vous devez sentir un étirement profond dans la fesse. Tenez <strong>30 secondes</strong>, relâchez, puis répétez 3 fois.</p>

<h3>Exercice 2 — Mobilisation du bassin en bascule</h3>
<p>Allongé sur le dos, genoux fléchis, pieds à plat. Bascule lentement le bassin en collant le bas du dos au sol (rétroversion), puis relâchez en creusant légèrement le bas du dos (antéversion). Mouvement doux et lent, sans forcer. <strong>10 à 15 répétitions</strong>. Cet exercice "huile" l'articulation et réveille la mobilité du bassin.</p>

<h3>Exercice 3 — Étirement du psoas (fente avant)</h3>
<p>Mettez-vous en position de fente, le genou douloureux au sol (sur un coussin pour le confort), l'autre pied bien à plat devant vous. Avancez doucement le bassin vers l'avant en gardant le buste droit. Vous devez sentir un étirement à l'avant de la hanche du genou au sol. Tenez <strong>20 à 30 secondes</strong>, 3 fois de chaque côté. Le psoas tendu est l'un des grands responsables des blocages SI.</p>

<h3>Exercice 4 — Pont fessier (renforcement doux)</h3>
<p>Allongé sur le dos, genoux fléchis, pieds à plat à largeur de hanches. Décollez doucement le bassin du sol en contractant les fessiers, jusqu'à former une ligne droite des épaules aux genoux. Tenez <strong>5 secondes</strong>, redescendez lentement. <strong>10 à 12 répétitions</strong>. Ce renforcement stabilise le bassin et soulage durablement la SI.</p>

<h3>Exercice 5 — Mobilisation en torsion lombaire</h3>
<p>Allongé sur le dos, bras en croix, genoux fléchis. Laissez tomber les deux genoux ensemble d'un côté en gardant les épaules au sol. Tenez <strong>20 secondes</strong>, revenez au centre, puis de l'autre côté. <strong>3 fois de chaque côté</strong>. Cette torsion douce relâche les tensions globales du bas du dos et redonne de la mobilité au sacrum.</p>

<h2>Quel sport peut-on faire avec une douleur sacro-iliaque ?</h2>
<p>Bonne nouvelle : on n'arrête pas tout. À privilégier en phase douloureuse :</p>
<ul>
  <li><strong>La marche</strong> sur terrain plat (la mobilité douce active la pompe articulaire).</li>
  <li><strong>La natation</strong> dos crawlé ou crawl, en évitant la brasse qui peut solliciter le bassin.</li>
  <li><strong>Le vélo d'appartement</strong> en position droite, selle bien réglée.</li>
  <li><strong>Le yoga doux et le Pilates</strong> avec un encadrant prévenu de votre situation.</li>
</ul>
<p>À éviter temporairement : course à pied, sports d'impact, mouvements brusques de torsion (golf, tennis), port de charges asymétriques.</p>

<h2>Comment l'ostéopathie peut soulager une douleur sacro-iliaque</h2>
<p>L'ostéopathie est particulièrement efficace sur les douleurs sacro-iliaques d'origine <strong>mécanique</strong> (la grande majorité des cas). En tant qu'ostéopathe D.O. à La Possession, voici ce que je propose en consultation :</p>
<ul>
  <li><strong>Bilan global du bassin</strong> : évaluation des asymétries, de la mobilité du sacrum, des tensions musculaires associées (psoas, piriforme, fessiers, carré des lombes).</li>
  <li><strong>Techniques de mobilisation articulaire</strong> du sacrum et des os iliaques pour restaurer un mouvement physiologique.</li>
  <li><strong>Travail des tensions musculaires</strong> et fasciales qui maintiennent le déséquilibre.</li>
  <li><strong>Examen des zones associées</strong> : lombaires, hanches, viscères pelviens, pieds — car la SI est rarement isolée.</li>
  <li><strong>Conseils posturaux et exercices personnalisés</strong> à reprendre chez vous pour ne pas rechuter.</li>
</ul>
<p>La majorité des patients que je suis pour ce motif voient une amélioration nette dès la première ou la deuxième séance. Une à trois consultations suffisent généralement, sauf chronicité installée. Pour aller plus loin sur les douleurs lombaires associées, lisez aussi mon article sur la <a href="/blog/lombalgie-chronique-traitement-osteopathe">lombalgie chronique</a>.</p>

<h2>Combien de temps dure une douleur sacro-iliaque ?</h2>
<p>Cela dépend entièrement de la cause :</p>
<ul>
  <li><strong>Blocage aigu mécanique</strong> : 3 à 10 jours en général, accéléré par une consultation ostéo.</li>
  <li><strong>Sacro-iliaque post-partum</strong> : peut persister 3 à 6 mois sans prise en charge ; quelques séances accélèrent fortement la récupération.</li>
  <li><strong>Chronique liée à un déséquilibre postural</strong> : tant que la cause reste, la douleur revient. Le travail ostéopathique vise à corriger ce déséquilibre.</li>
  <li><strong>Inflammatoire (sacro-iliite)</strong> : prise en charge médicale spécialisée nécessaire en parallèle.</li>
</ul>

<h2>Quand consulter en urgence ?</h2>
<p>Consultez sans attendre votre médecin si la douleur s'accompagne de :</p>
<ul>
  <li>Fièvre, sueurs nocturnes ou perte de poids inexpliquée</li>
  <li>Engourdissement de la zone périnéale ou troubles urinaires/intestinaux récents</li>
  <li>Perte de force dans la jambe</li>
  <li>Douleur survenue après un traumatisme important (chute de hauteur, accident)</li>
</ul>
<p>Ces signes peuvent évoquer une cause sérieuse qui nécessite un avis médical immédiat.</p>

<h2>Prendre rendez-vous à La Possession (La Réunion)</h2>
<p>Si vous souffrez d'une douleur sacro-iliaque, que ce soit après un effort, une grossesse, ou de manière récurrente sans cause évidente, je vous reçois à mon cabinet au sein de la Maison de Santé Sakisoigne, à La Possession (974). La consultation dure 45 à 60 minutes et inclut bilan complet, traitement et conseils personnalisés.</p>
<p><a href="https://www.doctolib.fr/osteopathe/la-possession/vincent-magoni" target="_blank" rel="noopener noreferrer"><strong>Prendre rendez-vous sur Doctolib →</strong></a></p>
`,
  },
  {
    slug: "hernie-discale-osteopathie-soulager",
    title: "Hernie discale et ostéopathie : peut-on vraiment être soulagé ?",
    description:
      "Hernie discale : l'ostéopathie peut-elle aider ? Découvrez ce qu'un ostéopathe peut faire (ou non), les techniques utilisées, les contre-indications et les bons réflexes. Cabinet à La Possession, La Réunion (974).",
    date: "2026-05-11",
    readTime: 9,
    keywords: [
      "hernie discale ostéopathie",
      "hernie discale traitement",
      "soulager hernie discale",
      "hernie discale lombaire",
      "hernie discale L5-S1",
      "ostéopathe hernie discale La Réunion",
      "ostéopathe hernie discale La Possession",
      "ostéopathe La Possession 974",
    ],
    excerpt:
      "L'ostéopathie a-t-elle sa place dans le traitement d'une hernie discale ? La réponse est nuancée : oui dans la grande majorité des cas non compliqués, mais avec des règles strictes à respecter. En tant qu'ostéopathe à La Possession, je vous explique exactement ce qu'on peut — et ne peut pas — attendre d'une prise en charge ostéopathique d'une hernie discale.",
    tldr:
      "L'ostéopathie peut soulager une hernie discale non compliquée en agissant sur les tensions musculaires, les blocages articulaires et la posture autour du disque atteint — sans chercher à « remettre » le disque. 3 à 5 séances sont en général nécessaires. Elle est contre-indiquée en cas de déficit neurologique (perte de force, troubles urinaires, anesthésie en selle) : ces signes imposent une consultation médicale d'urgence. L'ostéopathie ne remplace pas la kinésithérapie ni la chirurgie quand elles sont indiquées — elle les complète.",
    faq: [
      {
        question: "Est-ce qu'un ostéopathe peut soulager une hernie discale ?",
        answer:
          "Oui, dans la grande majorité des cas non compliqués. L'ostéopathe ne « remet pas » le disque — la hernie elle-même est anatomique. Il agit sur les tensions musculaires, les blocages vertébraux adjacents, la posture et la mobilité du bassin, ce qui réduit la compression sur la racine nerveuse irritée. 60 à 80 % des patients ressentent une amélioration nette en 3 à 5 séances. L'ostéopathie est en revanche contre-indiquée en cas de déficit neurologique (perte de force, troubles urinaires) qui imposent une consultation médicale en urgence.",
      },
      {
        question: "Quel professionnel aller voir pour une hernie discale ?",
        answer:
          "Premier réflexe : le médecin généraliste pour confirmer le diagnostic, prescrire les examens (IRM) si nécessaire, et adapter le traitement antalgique. En seconde intention, l'ostéopathe et le kinésithérapeute travaillent en complémentarité : l'ostéopathe lève les blocages mécaniques rapidement, le kiné renforce et stabilise la zone sur le long terme. Le rhumatologue ou le neurochirurgien n'interviennent qu'en cas de douleur résistante, de déficit ou d'urgence neurologique.",
      },
      {
        question: "Comment aider une hernie discale à se résorber ?",
        answer:
          "Une hernie discale se résorbe naturellement dans 70 % des cas en 6 à 12 mois — le corps « digère » progressivement le matériel discal hernié. Pour favoriser cette résorption : maintenir une activité physique douce (marche, natation, vélo), éviter le repos prolongé, renforcer le gainage profond, corriger la posture et les contraintes mécaniques. L'ostéopathie aide en réduisant les compensations musculaires qui entretiennent l'inflammation locale.",
      },
      {
        question: "Quand ne pas aller chez l'ostéopathe avec une hernie discale ?",
        answer:
          "L'ostéopathie est formellement contre-indiquée en cas de signes neurologiques de gravité : perte de force soudaine dans une jambe, troubles urinaires ou intestinaux, anesthésie en selle (zone du périnée), ou paralysie progressive. Ces signes évoquent un syndrome de la queue de cheval ou une compression médullaire — urgence chirurgicale. Elle est également déconseillée immédiatement après une chirurgie discale ou pendant une poussée hyperalgique avec hospitalisation en cours.",
      },
      {
        question: "Ostéopathie ou kinésithérapie pour une hernie discale ?",
        answer:
          "Les deux approches ne s'opposent pas, elles se complètent. L'ostéopathe agit plus globalement et plus vite sur les blocages mécaniques et les tensions associées — utile en phase aiguë et subaiguë. Le kinésithérapeute travaille en profondeur sur le renforcement, la rééducation posturale et la stabilité du rachis — indispensable sur le long terme. L'approche idéale combine souvent 3 à 5 séances d'ostéopathie en début de prise en charge, puis un programme de kiné suivi sur plusieurs semaines.",
      },
      {
        question: "Combien de temps pour guérir d'une hernie discale ?",
        answer:
          "Une hernie discale lombaire évolue favorablement dans 90 % des cas en 6 à 12 semaines avec un traitement conservateur (antalgiques, ostéopathie, kinésithérapie, hygiène de vie). La douleur diminue généralement nettement en 4 à 6 semaines. La résorption anatomique complète peut prendre 6 à 12 mois. Seuls 5 à 10 % des patients nécessitent une intervention chirurgicale, en cas de douleur invalidante persistant au-delà de 6 à 8 semaines ou de déficit neurologique progressif.",
      },
    ],
    content: `
<h2>Hernie discale : de quoi parle-t-on exactement ?</h2>
<p>Entre chaque vertèbre se trouve un <strong>disque intervertébral</strong>, sorte de petit amortisseur fibreux composé d'un anneau périphérique solide (l'annulus) et d'un noyau central gélatineux (le nucleus pulposus). Ces disques absorbent les chocs et permettent la mobilité de la colonne.</p>
<p>Avec l'âge, les efforts répétés, les mauvaises postures ou un traumatisme, l'anneau peut se fissurer. Une partie du noyau gélatineux peut alors faire saillie vers l'extérieur : c'est la <strong>hernie discale</strong>. Lorsque cette saillie comprime une racine nerveuse à sa sortie de la colonne, elle peut provoquer une douleur irradiante caractéristique (sciatique, cruralgie, névralgie cervico-brachiale selon l'étage atteint).</p>
<p>Les localisations les plus fréquentes sont :</p>
<ul>
  <li><strong>Hernie discale L4-L5 ou L5-S1</strong> : la plus courante, responsable de la grande majorité des sciatiques mécaniques</li>
  <li><strong>Hernie discale cervicale C5-C6 ou C6-C7</strong> : douleur dans la nuque irradiant vers le bras</li>
  <li><strong>Hernie discale dorsale</strong> : beaucoup plus rare, souvent bien tolérée</li>
</ul>
<p>En consultation à mon cabinet de La Possession, je vois principalement des hernies lombaires — souvent chez des patients de 30 à 55 ans, dans des métiers physiques (BTP, soins, agriculture) ou au contraire très sédentaires.</p>

<h2>L'ostéopathie peut-elle vraiment aider en cas de hernie discale ?</h2>
<p>C'est <strong>la</strong> question qui revient le plus souvent en consultation. Et la réponse honnête est : <strong>oui, dans la grande majorité des cas non compliqués</strong>.</p>
<p>Il faut bien comprendre ce que l'ostéopathie peut faire — et ce qu'elle ne peut pas faire.</p>

<h3>Ce qu'un ostéopathe ne fait pas</h3>
<p>Un ostéopathe <strong>ne « remet » pas un disque hernié</strong>. La hernie est une lésion anatomique : une fois que du matériel discal est sorti, on ne le repousse pas mécaniquement à l'intérieur. C'est physiologiquement impossible et, en cas de manipulation brutale, potentiellement dangereux.</p>
<p>Vous trouverez sur internet des sites affirmant le contraire — méfiez-vous. Un ostéopathe sérieux ne promet pas de « réparer » votre hernie. Il propose autre chose, qui est en réalité bien plus efficace que ce qu'on imagine.</p>

<h3>Ce que l'ostéopathie fait concrètement</h3>
<p>La douleur d'une hernie discale n'est jamais uniquement liée à la compression nerveuse. Elle résulte d'un <strong>cercle vicieux</strong> :</p>
<ol>
  <li>Le disque hernié irrite la racine nerveuse → inflammation locale</li>
  <li>Le corps adopte des compensations posturales pour soulager → contractures musculaires</li>
  <li>Les muscles contracturés (psoas, carré des lombes, fessiers, ischio-jambiers) tirent sur les vertèbres → blocages articulaires</li>
  <li>Ces blocages amplifient la compression nerveuse et l'inflammation → la douleur s'auto-entretient</li>
</ol>
<p>L'ostéopathie intervient à <strong>tous les étages de ce cercle vicieux</strong>, sauf le disque lui-même. Concrètement :</p>
<ul>
  <li><strong>Relâcher les muscles contracturés</strong> qui tirent sur la zone (psoas, piriforme, paravertébraux)</li>
  <li><strong>Libérer les blocages articulaires</strong> des vertèbres adjacentes au disque atteint</li>
  <li><strong>Rééquilibrer le bassin et le sacrum</strong>, dont les déséquilibres aggravent souvent la compression</li>
  <li><strong>Travailler les fascias et la dure-mère</strong> (membrane qui entoure les nerfs) pour réduire les tensions à distance</li>
  <li><strong>Corriger la posture globale</strong> pour répartir les contraintes mécaniques</li>
</ul>
<p>Résultat : la douleur diminue, la mobilité revient, et surtout, on évite l'installation d'une douleur chronique post-hernie qui peut durer des années.</p>

<h2>Quels résultats attendre ?</h2>
<p>Sur les hernies discales lombaires non compliquées prises en charge tôt, les données cliniques et mon expérience au cabinet convergent :</p>
<ul>
  <li><strong>60 à 80 % des patients</strong> ressentent une amélioration nette dès les 2 ou 3 premières séances</li>
  <li>La douleur radiculaire (sciatique, cruralgie) diminue généralement <strong>plus vite</strong> que la douleur lombaire isolée</li>
  <li>L'amélioration globale s'étale sur <strong>3 à 6 semaines</strong> avec 3 à 5 séances espacées de 2 à 3 semaines</li>
  <li>La <strong>résorption anatomique</strong> du fragment hernié (visible sur IRM de contrôle) prend en moyenne 6 à 12 mois — pendant ce temps, l'ostéopathie maintient un terrain favorable</li>
</ul>
<p>Les cas où l'ostéopathie n'apporte pas de résultat suffisant sont essentiellement les hernies très volumineuses, les hernies anciennes très calcifiées, ou celles associées à un canal lombaire étroit.</p>

<h2>Hernie discale : quand ne pas aller chez l'ostéopathe ?</h2>
<p>L'ostéopathie est <strong>formellement contre-indiquée</strong> ou doit être différée dans plusieurs situations.</p>

<h3>Signes de gravité neurologique : urgence médicale</h3>
<p>Ces signes imposent une consultation médicale ou hospitalière <strong>immédiate</strong>, pas une séance d'ostéopathie :</p>
<ul>
  <li><strong>Anesthésie en selle</strong> : perte de sensibilité au niveau du périnée et des organes génitaux</li>
  <li><strong>Troubles urinaires ou intestinaux</strong> récents : rétention urinaire, incontinence, perte du contrôle des selles</li>
  <li><strong>Perte de force soudaine</strong> dans une ou les deux jambes (pied tombant, difficulté à monter les escaliers)</li>
  <li><strong>Paralysie progressive</strong> sur quelques heures à quelques jours</li>
</ul>
<p>Ces signes évoquent un <strong>syndrome de la queue de cheval</strong> ou une compression médullaire — c'est une urgence chirurgicale qui peut laisser des séquelles définitives si elle n'est pas opérée dans les heures qui suivent.</p>

<h3>Autres situations à différer</h3>
<ul>
  <li><strong>Phase hyperalgique aiguë</strong> avec douleur insupportable : il vaut mieux d'abord obtenir une accalmie médicamenteuse avant la séance</li>
  <li><strong>Période post-opératoire immédiate</strong> (moins de 6 semaines après chirurgie discale)</li>
  <li><strong>Infection rachidienne</strong> (spondylodiscite) ou suspicion de cause non mécanique (fièvre, perte de poids, douleur nocturne intense)</li>
  <li><strong>Ostéoporose sévère</strong> : les techniques sont alors strictement adaptées et les manipulations à haute vélocité évitées</li>
</ul>
<p>Un ostéopathe formé identifie ces drapeaux rouges dès l'anamnèse et l'examen clinique. C'est précisément pour cela qu'il est important de consulter un praticien diplômé D.O., capable de vous réorienter immédiatement si nécessaire.</p>

<h2>Comment se déroule une consultation ostéopathique pour une hernie discale ?</h2>
<p>Une consultation à mon cabinet de La Possession dure entre 45 minutes et 1 heure. Voici comment je procède.</p>

<h3>1. Anamnèse et bilan</h3>
<p>Je commence par un interrogatoire détaillé : circonstances d'apparition, type de douleur, irradiation, facteurs aggravants et soulageants, antécédents, examens déjà réalisés (IRM, radio, EMG), traitements en cours. Si vous avez une IRM, apportez-la — elle m'aide à adapter précisément l'approche.</p>
<p>Je réalise ensuite un examen clinique complet :</p>
<ul>
  <li>Tests neurologiques (force, sensibilité, réflexes) pour vérifier l'absence de déficit</li>
  <li>Tests orthopédiques (Lasègue, Léri, test de la queue de cheval)</li>
  <li>Analyse posturale, palpation segmentaire, tests de mobilité</li>
</ul>

<h3>2. Traitement adapté</h3>
<p>Selon ce que je trouve, j'utilise un panel de techniques <strong>douces et adaptées</strong> :</p>
<ul>
  <li><strong>Techniques fonctionnelles et de relâchement myofascial</strong> : indolores, idéales en phase aiguë</li>
  <li><strong>Mobilisations articulaires douces</strong> : pour restaurer la mobilité sans contrainte sur le disque</li>
  <li><strong>Techniques crâniennes et viscérales</strong> : pour libérer les tensions à distance qui entretiennent l'irritation</li>
  <li><strong>Manipulations structurelles (thrust)</strong> : uniquement sur les segments vertébraux non concernés par la hernie, jamais directement sur l'étage hernié</li>
</ul>
<p>Le travail est progressif. Les premières séances sont prudentes et privilégient le relâchement. À mesure que la douleur recule, on peut intensifier le travail postural et la mobilisation.</p>

<h3>3. Conseils personnalisés</h3>
<p>Je termine systématiquement par des conseils adaptés à votre quotidien : posture au travail, ergonomie de la voiture, port de charges, exercices d'étirement et de gainage à faire à la maison, sommeil. À La Réunion, j'adapte aussi aux activités locales — trail, surf, jardinage, travail au soleil et à la chaleur.</p>

<h2>Exercices à faire (ou à éviter) en cas de hernie discale</h2>

<h3>Exercices recommandés</h3>
<ul>
  <li><strong>Marche quotidienne</strong> : 20 à 30 minutes à plat, c'est le meilleur exercice pour une hernie. La pompe discale activée par la marche aide à la nutrition du disque et à la résorption.</li>
  <li><strong>Natation</strong> (sauf brasse coulée) : le dos crawlé est idéal car il décharge la colonne tout en mobilisant les muscles profonds.</li>
  <li><strong>Étirement doux du psoas</strong> : en fente avant basse, genou arrière au sol, 30 secondes de chaque côté.</li>
  <li><strong>Gainage en planche basse</strong> (en appui sur les genoux d'abord) : renforce le transverse, muscle stabilisateur central du rachis.</li>
  <li><strong>Mobilisation lombaire douce</strong> : sur le dos, genoux fléchis, basculer doucement le bassin d'avant en arrière (rétroversion / antéversion).</li>
</ul>

<h3>Exercices et gestes à éviter</h3>
<ul>
  <li><strong>Soulever des charges lourdes en flexion</strong> du tronc — toujours plier les genoux et garder le dos droit</li>
  <li><strong>Mouvements en hyperflexion ou hyperextension</strong> (toucher ses pieds debout, pont gymnique)</li>
  <li><strong>Rotations forcées</strong> du tronc (mouvements de golf, certains exercices de musculation avec charge)</li>
  <li><strong>Course à pied intensive</strong>, sauts répétés, équitation, en phase aiguë</li>
  <li><strong>Repos strict au lit</strong> au-delà de 48 h — c'est l'erreur la plus fréquente, et qui aggrave l'évolution</li>
</ul>

<h2>Hernie discale et sciatique : la combinaison la plus fréquente</h2>
<p>Une hernie discale L4-L5 ou L5-S1 comprime quasi systématiquement le nerf sciatique. La prise en charge ostéopathique de la hernie inclut donc le traitement spécifique de la sciatique associée. Si c'est votre cas, vous pouvez aussi consulter mon article dédié pour <a href="/blog/comment-soulager-une-sciatique">soulager une sciatique au quotidien</a>, qui complète celui-ci.</p>
<p>De même, beaucoup de hernies discales s'inscrivent dans un terrain de <a href="/blog/lombalgie-chronique-traitement-osteopathe">lombalgie chronique</a> qu'il faut traiter conjointement pour éviter les récidives.</p>

<h2>Prendre rendez-vous à La Possession (La Réunion)</h2>
<p>Si vous avez un diagnostic de hernie discale (lombaire, cervicale, dorsale) ou si vous suspectez une hernie devant des douleurs irradiantes persistantes, je vous reçois en consultation au cabinet de la Maison de Santé Sakisoigne, à La Possession (97419). Le cabinet est situé dans le nord de La Réunion, accessible facilement depuis Saint-Denis, Le Port, La Montagne, Saint-Paul et Le Plate-Saint-Leu.</p>
<p>Si vous avez une IRM ou un compte-rendu médical, apportez-les — ils m'aideront à adapter précisément le travail à votre situation.</p>
<p><a href="https://www.doctolib.fr/osteopathe/la-possession/vincent-magoni" target="_blank" rel="noopener noreferrer"><strong>Prendre rendez-vous sur Doctolib →</strong></a></p>
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
