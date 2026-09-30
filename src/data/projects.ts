export type Category = 'ai' | 'storytelling' | 'tools' | 'side'

export interface Project {
  question: string
  name: string
  years: string
  with?: string
  // One line with a measurable outcome, shown above the description.
  result?: string
  description: string
  stack: string[]
  categories: Category[]
  link?: string
  media?: string
  status?: 'in progress'
  // Not published: shown only in the local preview, with a "hidden" badge.
  hidden?: boolean
  // Draft-only note: what the text still needs from Edouard. Shown as a badge in dev.
  todo?: string
}

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'ai', label: 'AI' },
  { id: 'storytelling', label: 'Storytelling' },
  { id: 'tools', label: 'Tools' },
  { id: 'side', label: 'Side projects' },
]

export const PROJECTS: Project[] = [
  // --- 2020 → today -------------------------------------------------------
  {
    question: 'Can a machine read financial documents like an analyst, and prove every number?',
    name: 'AiDP',
    years: '2023–now',
    with: 'Codepan',
    result: '97% verified accuracy',
    description:
      'AiDP is the document intelligence platform behind Codepan’s products. As CTO, I designed and built all of its technical side. It reads invoices, bank statements, contracts and provider packs, then extracts, checks and structures the data. Every value links back to its source, and uncertain values go to a human for review.',
    stack: ['LLM', 'RAG', 'Agents', 'LlamaIndex', 'Django', 'Next.js', 'Celery', 'n8n'],
    categories: ['ai', 'tools'],
    link: 'https://aidp.ai',
    media: 'aidp.webp',
  },
  {
    question: 'How do you turn a day of paperwork into minutes of review?',
    name: 'ReLoA',
    years: '2023–now',
    with: 'Codepan',
    result: 'Hours of case preparation become minutes of review',
    description:
      'UK financial advisers lose hours on Letters of Authority and provider packs. ReLoA is the version of AiDP for this sector. It extracts policies, funds, contributions and charges, and links each answer to the page it comes from. Paraplanners only review.',
    stack: ['LLM', 'Document AI', 'Intelliflo'],
    categories: ['ai', 'tools'],
    link: 'https://reloa.ai',
    media: 'reloa.webp',
  },
  {
    question: 'Can AI find the right freelancer for a project?',
    name: 'Kiedis',
    years: '2025–now',
    with: 'via Codepan',
    description:
      'Kiedis matches business freelancers, interim managers and experts with the companies that need them. I build the core: resume extraction, semantic search across profiles, AI matching, and chat assistants for onboarding and search.',
    stack: ['LLM', 'Semantic search', 'OpenSearch', 'Django', 'React', 'Celery', 'Phoenix'],
    categories: ['ai', 'tools'],
    link: 'https://www.kiedis.com/',
    media: 'kiedis.webp',
  },
  {
    question: 'Can an auditor onboard a client’s data in two hours instead of three weeks?',
    name: 'Feature Mapping & Data Pro',
    years: '2023–2024',
    with: 'PwC, via Codepan',
    result: 'Client onboarding: from 1 day – 3 weeks to 2 hours per account',
    description:
      'Every audit starts with client data in about 100 different formats: spreadsheets, ERP exports, text files. A machine learning model maps the fields, and auditors confirm or correct the mapping in a sheet. Then they export clean data to their own tools. The first version runs inside PwC Germany. Data Pro takes it to PwC Global.',
    stack: ['Machine learning', 'Classification', 'Information extraction', 'Feedback loop'],
    categories: ['ai', 'tools'],
  },
  {
    question: 'How do you clean supplier catalogues before buyers see them?',
    name: 'Catalogue Management',
    years: '2020–2026',
    with: 'Wescale, via Codepan',
    result: 'Millions of events each month, in real time',
    description:
      'Wescale connects B2B buyers and suppliers. Each supplier sends its catalogue from a different system, so buyers saw missing, unclear and duplicate items. With NLP and classification, the system enriches each item, or flags it back to the supplier, in real time. It runs in containers on the client’s cloud.',
    stack: ['NLP', 'Classification', 'Python', 'Django', 'Pub/Sub', 'Docker'],
    categories: ['ai', 'tools'],
  },
  {
    question: 'Can a mailing list feel simple again?',
    name: 'Flocky',
    years: '2026',
    description:
      'Flocky manages mailing groups: create groups, manage members, moderate messages and track deliveries.',
    stack: ['Django', 'React', 'TypeScript', 'Celery'],
    categories: ['tools'],
    status: 'in progress',
  },
  {
    question: 'Does Instagram’s algorithm push some pictures more than others?',
    name: 'Monitoring Instagram',
    years: '2020',
    with: 'AlgorithmWatch',
    description:
      'This investigation is an attempt to unveil the Instagram algorithm and the way it encourages different types of content.',
    stack: ['Web Extension', 'Google Vision', 'Python', 'Django'],
    categories: ['ai', 'storytelling'],
    link: 'https://algorithmwatch.org/en/instagram-algorithm/',
    media: 'ig-monitor.png',
  },

  // --- 2013 → 2019 --------------------------------------------------------
  {
    question: 'Can pop songs teach history, geography and music to children?',
    name: 'Mélo',
    years: '2019–2022',
    with: 'Zebrock',
    description:
      'Mélo is an educational platform that uses music and contemporary songs as a tool for teaching. It embeds pedagogic content, hundreds of biographies, instruments, styles and artists, a map to explore geographic content, and a media player.',
    stack: ['Python', 'Django', 'GraphQL', 'Elasticsearch', 'Map', 'AWS', 'High Traffic'],
    categories: ['storytelling', 'tools'],
    link: 'https://www.melo-app.com/',
    media: 'melo.webm',
  },
  {
    question: 'How can a polling institute see the story in its own numbers?',
    name: 'IFOP',
    years: '2018–2025',
    with: 'IFOP',
    description:
      'The French Institute of Public Opinion is an international polling and market research firm. I built interactive dashboards to help them track many metrics and understand them better, with text analysis on open answers. I also advise their teams on infrastructure, and I take their AI prototypes to production.',
    stack: ['Natural Language Processing', 'Elasticsearch', 'Python', 'Django', 'React', 'D3.js', 'Infrastructure'],
    categories: ['ai', 'tools'],
    media: 'ifop.gif',
  },
  {
    question: 'How do Facebook news pages talk about each candidate before an election?',
    name: 'Bias Tracker',
    years: '2018',
    description:
      'Bias Tracker extracts entities from Facebook posts and analyzes the sentiment related to them. Then it shows charts of the bias of each source toward each entity. First used for the Italian elections.',
    stack: ['Natural Language Processing', 'Sentiment analysis', 'Django', 'React', 'GraphQL', 'Task Queue'],
    categories: ['ai', 'tools'],
    link: 'https://medium.com/@dougiegyro/bias-tracker-understanding-sentiment-in-the-runup-to-the-italian-elections-ad390ced5d19',
    media: 'biastracker.jpg',
  },
  {
    question: 'Where are all my crypto assets, and what are they worth?',
    name: 'Totalbalance',
    years: '2018',
    description:
      'A crypto asset manager. It gives an overview of your crypto currencies, from many different kinds of wallets.',
    stack: ['React', 'Firebase', 'D3.js', 'Data vis'],
    categories: ['tools'],
    link: 'https://app.totalbalance.io/',
    media: 'tb.gif',
    hidden: true,
  },
  {
    question: 'How does a small fashion label sell a limited collection online?',
    name: 'ISHHH',
    years: '2018',
    description:
      'Carmen released her new limited collection of kimonos, crop tops and jeans jackets with Indian flavors. The shop handles the gallery, the inventory and the payment.',
    stack: ['React', 'Inventory management', 'Payment'],
    categories: ['tools'],
    link: 'https://www.ishhh.de/',
    media: 'ishhh-website.webm',
    hidden: true,
  },
  {
    question: 'Is the air safe to breathe near me today?',
    name: 'Smog Alarm',
    years: '2017',
    description:
      'Smog Alarm collects the daily reports of the German Environment Agency on air quality. It finds your closest station and alerts you by Messenger, email or RSS. A Messenger bot helps you subscribe.',
    stack: ['Messenger Bot', 'Python', 'Django', 'D3.js', 'Map', 'Data analysis'],
    categories: ['side'],
    link: 'http://www.smogalarm.org',
    media: 'smogalarm.jpg',
  },
  {
    question: 'What happens when strangers control one shining object with their phones?',
    name: 'Master of the Ring',
    years: '2017',
    description:
      'A game where players interact together with an unknown piece of shining hardware, using their phones as controllers. The game escapes the screens and lights up the physical space.',
    stack: ['Raspberry Pi', 'Python', 'React', 'Welds'],
    categories: ['side'],
    media: 'looped.gif',
  },
  {
    question: 'What does a newsroom need to create, publish and archive the news?',
    name: 'Superdesk',
    years: '2017',
    with: 'Sourcefabric',
    description:
      'Content creation, production, distribution, archiving and curation. Modular by design, and developed with news organizations worldwide.',
    stack: ['Python', 'React', 'Angular.js', 'Plugin System', 'API', 'High Traffic'],
    categories: ['tools'],
    link: 'https://www.superdesk.org/',
    media: 'superdesk.png',
  },
  {
    question: 'What if YouTube, SoundCloud, GIFs and tweets played as one TV channel?',
    name: 'Loopr',
    years: '2016',
    with: 'Benjamin Etco',
    description:
      'L8pr is an Internet player. Create your own channel of YouTube videos and SoundCloud tracks illustrated with GIFs, add your tweets and RSS feeds, and loop it all.',
    stack: ['Python', 'React', 'API'],
    categories: ['side'],
    link: 'https://l8pr.herokuapp.com',
    media: 'loopr.gif',
  },
  {
    question: 'What colors are the pills we swallow?',
    name: 'Pillen',
    years: '2016',
    description: 'The colorimetric repository of little pills.',
    stack: ['Color detection', 'Data analysis', 'Data vis', 'API'],
    categories: ['side'],
    link: 'http://vied12.github.io/pillen/',
    media: 'pillen.png',
    hidden: true,
  },
  {
    question: 'Do I have time for one more coffee before my bus?',
    name: 'Bus Notifier',
    years: '2016',
    description:
      'A little box for the bathroom that shows the next departures from your station. A colored light tells how close your bus is. Push the buttons to scroll through the next departures.',
    stack: ['Raspberry Pi', 'Python', 'Welds', 'API'],
    categories: ['side'],
    link: 'https://github.com/vied12/public-transport-notifier',
    media: 'bus.gif',
  },
  {
    question: 'How can a city see where its energy goes?',
    name: 'Energy',
    years: '2015',
    description:
      'An interactive infographic about energy, for municipal decision-makers and city planners.',
    stack: ['Map', 'Data vis'],
    categories: ['storytelling'],
    link: 'https://vied12.github.io/energy/',
    media: 'energy.gif',
  },
  {
    question: 'How do journalists cover breaking news, minute by minute?',
    name: 'Liveblog',
    years: '2015',
    with: 'Sourcefabric',
    description:
      'An open source web app that lets journalists provide immediate and ongoing coverage of fast-moving news events.',
    stack: ['Python', 'Flask', 'Angular.js', 'API', 'High Traffic'],
    categories: ['tools'],
    link: 'https://www.sourcefabric.org/en/liveblog/',
    media: 'liveblog.gif',
  },
  {
    question: 'How many people died on their way to Europe?',
    name: 'The Migrant Files',
    years: '2014',
    result: 'Winner of the Data Journalism Awards 2014',
    description:
      'An open database with information on more than 29,000 people who died on their way to Europe.',
    stack: ['Data analysis', 'Data vis', 'Neo4j'],
    categories: ['storytelling'],
    link: 'http://www.themigrantsfiles.com/',
    media: 'tmf.jpg',
  },
  {
    question: 'Could you handle a communication crisis?',
    name: 'Jeu d’influences',
    years: '2014',
    with: 'France 5',
    result: 'Best cross-media piece, Liège Web Festival 2014',
    description: 'Jeu d’influences puts you right in front of a communication crisis.',
    stack: ['Serious Game', 'Angular.js'],
    categories: ['storytelling'],
    link: 'http://jeu-d-influences.france5.fr/',
    media: 'jeudinfluences.gif',
  },
  {
    question: 'How do young Europeans see work, compared to their parents?',
    name: 'World of Work',
    years: '2014',
    with: 'Arte',
    result: 'More than 10,000 participants',
    description:
      'A survey that measures how young Europeans perceive work, and compares their opinions with those of older generations.',
    stack: ['Python', 'Django', 'High Traffic'],
    categories: ['storytelling'],
    media: 'wow.png',
  },
  {
    question: 'Where does Chinese money go in Africa?',
    name: 'Dragon’s Gifts',
    years: '2014',
    with: 'Al Jazeera',
    description:
      'Take the tour of Chinese projects in Africa, or explore the data and delve into the Chinese presence on the continent.',
    stack: ['Map', 'D3.js', 'Data vis'],
    categories: ['storytelling'],
    link: 'http://www.aljazeera.com/indepth/interactive/2014/03/interactive-china-african-spending-spree-2014320121349799136.html',
    media: 'dragonsgifts.png',
  },
  {
    question: 'What did ten years of a larger EU change?',
    name: 'n-ost',
    years: '2014',
    with: 'n-ost',
    description: 'A map for the 10th anniversary of the EU enlargement.',
    stack: ['Map', 'Data vis'],
    categories: ['storytelling'],
    link: 'https://github.com/jplusplus/nost-10years',
    media: 'nost10years.png',
  },
  {
    question: 'Who are the new-media artists of Belgrade?',
    name: 'Resonate 2014',
    years: '2014',
    description:
      'They do not call themselves artists, but they might be the future of art. We met the new-media art scene in Belgrade, at the Resonate festival.',
    stack: ['Python', 'Flask', 'Map'],
    categories: ['storytelling'],
    link: 'https://vied12.github.io/resonate2014/',
    media: 'resonate2014.gif',
  },
  {
    question: 'How do you query an investigation like a database?',
    name: 'Detective.io',
    years: '2014',
    description:
      'Detective.io hosts your investigation and lets you run powerful queries on it. Describe your field of study, and it builds the input interface and the front-end for you.',
    stack: ['Neo4j', 'Django', 'Angular.js', 'API', 'Data vis'],
    categories: ['tools'],
    media: 'detective.gif',
  },
  {
    question: 'Who stood alone in the TPP negotiations?',
    name: 'Wikileaks — TPP',
    years: '2013',
    with: 'Wikileaks',
    description: 'US and Australia isolated in the TPP negotiations: a map of the positions of each country.',
    stack: ['Map', 'D3.js', 'Data vis'],
    categories: ['storytelling'],
    link: 'https://wikileaks.org/US-Australia-isolated-in-TPP.html',
    media: 'wikileaks.png',
  },
  {
    question: 'Is this budget number big or small?',
    name: 'Spending Stories',
    years: '2013',
    with: 'Open Knowledge Foundation',
    description:
      'Spending Stories improves fiscal literacy and awareness of budget data worldwide. It puts amounts into perspective, and takes into account inflation in the country of the expense.',
    stack: ['Python', 'Django', 'Data vis'],
    categories: ['tools'],
    link: 'http://spendingstories.org',
    media: 'spendingstories.png',
  },
  {
    question: 'How can a journalist make a chart in seconds?',
    name: 'Datawrapper',
    years: '2013',
    description: 'Create charts and maps in seconds.',
    stack: ['D3.js', 'Plugin System', 'Map', 'API', 'High Traffic'],
    categories: ['tools'],
    link: 'https://www.datawrapper.de',
    media: 'datawrapper.gif',
  },
  {
    question: 'What should a journalist investigate today?',
    name: 'Broken Promises',
    years: '2013',
    description:
      'Broken Promises answers with what was promised in the past, for today.',
    stack: ['Python', 'Task Queue', 'API'],
    categories: ['tools', 'storytelling'],
    link: 'http://jplusplus.se/broken-promises-the-memory-you-lost-is-here/',
    media: 'brokenpromises.png',
  },
]
