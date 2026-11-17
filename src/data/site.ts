import type { Localized } from '@/i18n/types'

export const company = {
  name: {
    zh: '苏州艾丽斯装备科技有限公司',
    en: 'Suzhou Alice Equipment Technology Co., Ltd.',
  } as Localized,
  shortName: {
    zh: '艾丽斯装备',
    en: 'Alice Equipment',
  } as Localized,
  domain: 'www.szhalice.com',
  tagline: {
    zh: '智能装备 · 系统集成 · 数字工厂',
    en: 'Intelligent Equipment · System Integration · Digital Factory',
  } as Localized,
  intro: {
    zh: '苏州艾丽斯装备科技有限公司是一家专注于智能装备研发制造与智能制造系统集成的科技型企业，聚焦智能焊接、智能喷涂、智能打磨、激光熔覆、智能物流与仓储、在线检测等核心场景，为客户提供从工艺研发、装备制造到整厂数字化的一站式解决方案。',
    en: 'Suzhou Alice Equipment Technology Co., Ltd. is a technology enterprise specializing in intelligent equipment R&D and manufacturing and smart manufacturing system integration. Focusing on intelligent welding, spraying, grinding, laser cladding, intelligent logistics & warehousing, and online inspection, we provide one-stop solutions from process development and equipment manufacturing to plant-wide digitalization.',
  } as Localized,
  vision: {
    zh: '成为值得信赖的智能装备与智能制造整体解决方案提供商。',
    en: 'To be a trusted provider of intelligent equipment and smart manufacturing total solutions.',
  } as Localized,
  mission: {
    zh: '让智能装备赋能每一道工序，帮助制造企业提质、降本、增效。',
    en: 'Empower every process with intelligent equipment, helping manufacturers improve quality, reduce cost and boost efficiency.',
  } as Localized,
}

export const values: { title: Localized; desc: Localized }[] = [
  {
    title: { zh: '客户至上', en: 'Customer First' },
    desc: {
      zh: '以客户需求为中心，用可靠的产品和服务创造长期价值。',
      en: 'Centered on customer needs, creating long-term value with reliable products and services.',
    },
  },
  {
    title: { zh: '技术驱动', en: 'Technology Driven' },
    desc: {
      zh: '坚持工艺与装备的持续创新，把技术转化为可落地的生产力。',
      en: 'Pursue continuous innovation in processes and equipment, turning technology into real productivity.',
    },
  },
  {
    title: { zh: '精益求精', en: 'Pursuit of Excellence' },
    desc: {
      zh: '对每一个细节严格把关，以匠心打造稳定、高品质的装备。',
      en: 'Strictly control every detail, building stable, high-quality equipment with craftsmanship.',
    },
  },
  {
    title: { zh: '合作共赢', en: 'Win-win Cooperation' },
    desc: {
      zh: '与客户和伙伴携手成长，共同推动智能制造升级。',
      en: 'Grow together with customers and partners to advance smart manufacturing.',
    },
  },
]

export const contact = {
  // 以下地址、电话为占位，待用户补充真实信息
  address: {
    zh: '江苏省苏州市（详细地址待补充）',
    en: 'Suzhou, Jiangsu, China (full address to be confirmed)',
  } as Localized,
  landline: {
    zh: '0512-XXXXXXX（待补充）',
    en: '+86-512-XXXXXXX (to be confirmed)',
  } as Localized,
  phone: {
    zh: '1XX-XXXX-XXXX（待补充）',
    en: '+86-1XX-XXXX-XXXX (to be confirmed)',
  } as Localized,
  email: 'info@szhalice.com',
  hours: {
    zh: '周一至周五 9:00 - 18:00',
    en: 'Monday - Friday, 9:00 - 18:00',
  } as Localized,
}

export const stats: { value: string; label: Localized }[] = [
  { value: '6+', label: { zh: '核心场景方案', en: 'Core Scenario Solutions' } },
  { value: '100+', label: { zh: '服务客户', en: 'Customers Served' } },
  { value: '10+', label: { zh: '行业覆盖', en: 'Industries Covered' } },
  { value: '24h', label: { zh: '快速响应', en: 'Rapid Response' } },
]
