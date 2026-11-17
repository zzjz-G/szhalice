import type { Localized } from '@/i18n/types'

export interface NewsItem {
  slug: string
  categorySlug: string
  category: Localized
  title: Localized
  excerpt: Localized
  content: Localized[]
  date: string
  source: Localized
}

export const newsCategories: { slug: string; name: Localized }[] = [
  { slug: 'company', name: { zh: '公司新闻', en: 'Company News' } },
  { slug: 'industry', name: { zh: '行业观察', en: 'Industry Insights' } },
]

export const news: NewsItem[] = [
  {
    slug: 'alice-welding-line-delivery',
    categorySlug: 'company',
    category: { zh: '公司新闻', en: 'Company News' },
    title: {
      zh: '艾丽斯装备智能焊接产线项目稳步推进',
      en: 'Alice Equipment Advances Intelligent Welding Line Project',
    },
    excerpt: {
      zh: '面向客户的自动化焊接产线正按计划推进集成与调试，帮助客户提升焊接质量与效率。',
      en: 'The customer’s automatic welding line is progressing through integration and commissioning as planned to improve welding quality and efficiency.',
    },
    content: [
      {
        zh: '近期，苏州艾丽斯装备科技有限公司承接的智能焊接产线项目正按计划推进。项目以焊接机器人、智能焊接电源和焊缝跟踪为核心，配合变位机与工装夹具，实现关键焊缝的自动化焊接。',
        en: 'Recently, the intelligent welding line project undertaken by Suzhou Alice Equipment Technology Co., Ltd. is progressing as planned. Centered on welding robots, intelligent power sources and seam tracking, together with positioners and fixtures, it enables automatic welding of key seams.',
      },
      {
        zh: '项目团队从工艺评估、方案设计到装备集成进行了系统规划，并通过焊缝跟踪与在线检测保证焊接质量稳定，相关参数与质量数据可追溯。',
        en: 'The team systematically planned the project from process assessment and solution design to equipment integration, using seam tracking and online inspection to ensure stable, traceable welding quality and parameters.',
      },
      {
        zh: '艾丽斯装备将持续推进项目交付与量产陪产，帮助客户降低对人工的依赖、提升整体生产效率。',
        en: 'Alice Equipment will continue with delivery and ramp-up support, helping the customer reduce reliance on manual labor and raise overall production efficiency.',
      },
    ],
    date: '2026-10-18',
    source: { zh: '公司新闻', en: 'Company News' },
  },
  {
    slug: 'smart-manufacturing-quality-efficiency',
    categorySlug: 'industry',
    category: { zh: '行业观察', en: 'Industry Insights' },
    title: {
      zh: '智能制造如何帮助装备制造企业提质增效',
      en: 'How Smart Manufacturing Helps Equipment Makers Improve Quality and Efficiency',
    },
    excerpt: {
      zh: '从机器人化装备到数据驱动的整厂数字化，智能制造正成为制造企业转型升级的关键路径。',
      en: 'From robotic equipment to data-driven plant digitalization, smart manufacturing is becoming a key transformation path for manufacturers.',
    },
    content: [
      {
        zh: '随着人工成本上升与质量要求提高，越来越多的制造企业开始引入机器人焊接、自动喷涂、智能打磨和在线检测等自动化装备，以稳定工艺质量、降低对熟练工人的依赖。',
        en: 'As labor costs rise and quality requirements increase, more manufacturers are introducing robotic welding, automatic spraying, intelligent grinding and online inspection to stabilize process quality and reduce reliance on skilled workers.',
      },
      {
        zh: '在单机自动化的基础上，通过智能物流、仓储系统与生产管理软件的集成，企业可以进一步打通信息流，实现库存精准、调度柔性与全过程数据追溯。',
        en: 'Building on single-machine automation, integrating intelligent logistics, warehousing and production management software allows companies to connect information flow for accurate inventory, flexible scheduling and full traceability.',
      },
      {
        zh: '业内认为，结合自身工艺与场景、循序渐进地推进自动化与数字化，是制造企业实现提质、降本、增效的务实选择。',
        en: 'The industry considers a step-by-step approach to automation and digitalization based on one’s own processes and scenarios a pragmatic way to improve quality, reduce cost and boost efficiency.',
      },
    ],
    date: '2026-09-30',
    source: { zh: '行业观察', en: 'Industry Insights' },
  },
  {
    slug: 'alice-process-innovation',
    categorySlug: 'company',
    category: { zh: '公司新闻', en: 'Company News' },
    title: {
      zh: '艾丽斯装备持续打磨工艺与装备一体化能力',
      en: 'Alice Equipment Keeps Strengthening Process-Equipment Integration Capability',
    },
    excerpt: {
      zh: '公司围绕核心工艺场景完善工艺包与装备方案，提升项目快速落地与交付能力。',
      en: 'The company is refining process packages and equipment solutions for core scenarios to enable faster project delivery.',
    },
    content: [
      {
        zh: '围绕智能焊接、喷涂、打磨、激光熔覆、物流仓储与在线检测等核心场景，苏州艾丽斯装备科技有限公司持续完善工艺包与装备方案。',
        en: 'Around core scenarios including intelligent welding, spraying, grinding, laser cladding, logistics & warehousing and online inspection, Suzhou Alice Equipment Technology Co., Ltd. continues to refine its process packages and equipment solutions.',
      },
      {
        zh: '通过工艺试验与工程实践的积累，公司将工艺 Know-how 固化到装备与控制方案中，帮助客户缩短项目周期、降低落地风险。',
        en: 'Through process trials and engineering practice, the company embeds process know-how into equipment and control solutions, helping customers shorten project cycles and reduce implementation risk.',
      },
      {
        zh: '未来，艾丽斯装备将继续坚持工艺与装备协同创新，为客户提供更可靠、更易落地的整体解决方案。',
        en: 'Going forward, Alice Equipment will continue coordinated innovation in process and equipment to provide more reliable, easier-to-deploy total solutions.',
      },
    ],
    date: '2026-09-12',
    source: { zh: '公司新闻', en: 'Company News' },
  },
]

export const getNews = (slug: string) => news.find((n) => n.slug === slug)
