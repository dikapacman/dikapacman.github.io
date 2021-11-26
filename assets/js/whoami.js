var randomQ = randomInt(0, 36);
function randomInt(lowest, size) {
  return Math.floor(Math.random() * size) + lowest;
}

var whoamiElem = document.getElementById('whoami');

whoamiElem.innerHTML = getWhoami(randomQ);

function getWhoami(n) {
  var whoamis = [
    'Designer and Web Developer',
    'Desainer dan Pengembang Web',
    'Designer und Webentwickler',
    'デザイナーおよびウェブサイト開発者',
    'Desainer lan Pangembang Web',
    'Designer e sviluppatore web',
    'Ontwerper en webontwikkelaar',
    'Dizayner və Veb Developer',
    'طراح و توسعه دهنده وب',
    '디자이너 및 웹 개발자',
    'Désainer sareng Pangembang Wéb',
    'Designer och webbutvecklare',
    'डिजाइनर और वेब डेवलपर',
    'Nhà thiết kế và Nhà phát triển Web',
    '设计师和网页开发人员',
    'Dizajner i web programer',
    'Concepteur et développeur Web',
    'Дизайнер и веб-разработчик',
    'Designer și Dezvoltator Web',
    'Dearthóir agus Forbróir Gréasáin',
    'Pereka dan Pembangun Web',
    'Tasarımcı ve Web Geliştiricisi',
    'นักออกแบบและนักพัฒนาเว็บ',
    'Diseñador y desarrollador web',
    'Tervező és webfejlesztő',
    'Hönnuður og vefhönnuður',
    'Designer og webutvikler',
    'Դիզայներ և վեբ ծրագրավորող',
    'Designér a webový vývojář',
    'Dizaineris ir interneto kūrėjas',
    'Designer a Web Entwéckler',
    'Disinjatur u Web Developer',
    'Deseñador e Desenvolvedor Web',
    'Umklami kanye Nonjiniyela Wewebhu',
    'Σχεδιαστής και προγραμματιστής Ιστού',
    'Dizayner va veb-dasturchi',
  ];

  return whoamis[n];
}
