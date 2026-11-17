import type { Localized } from '@/i18n/types'

export interface ProductCategory {
  slug: string
  name: Localized
  desc: Localized
  /** 对应内联图标 key，见 components/Icon.tsx */
  icon: string
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'welding-equipment',
    name: { zh: '智能焊接装备', en: 'Intelligent Welding Equipment' },
    desc: {
      zh: '机器人焊接工作站、智能焊接专机及配套装备。',
      en: 'Robotic welding cells, intelligent welding machines and auxiliary equipment.',
    },
    icon: 'welding',
  },
  {
    slug: 'spraying-equipment',
    name: { zh: '智能喷涂装备', en: 'Intelligent Spraying Equipment' },
    desc: {
      zh: '自动喷涂机器人、喷涂生产线及环保配套。',
      en: 'Automatic spraying robots, coating lines and environmental equipment.',
    },
    icon: 'spraying',
  },
  {
    slug: 'grinding-equipment',
    name: { zh: '智能打磨装备', en: 'Intelligent Grinding Equipment' },
    desc: {
      zh: '打磨抛光机器人、自动磨抛单元与除尘系统。',
      en: 'Grinding and polishing robots, automatic cells and dust removal systems.',
    },
    icon: 'grinding',
  },
  {
    slug: 'laser-cladding-equipment',
    name: { zh: '激光熔覆装备', en: 'Laser Cladding Equipment' },
    desc: {
      zh: '激光熔覆设备、再制造与表面强化装备。',
      en: 'Laser cladding equipment for remanufacturing and surface enhancement.',
    },
    icon: 'laser',
  },
  {
    slug: 'logistics-warehousing-equipment',
    name: { zh: '物流仓储装备', en: 'Logistics & Warehousing Equipment' },
    desc: {
      zh: 'AGV/AMR、智能仓储与产线物流装备。',
      en: 'AGV/AMR, intelligent warehousing and line logistics equipment.',
    },
    icon: 'logistics',
  },
  {
    slug: 'inspection-equipment',
    name: { zh: '在线检测装备', en: 'Online Inspection Equipment' },
    desc: {
      zh: '机器视觉、在线测量与质量检测装备。',
      en: 'Machine vision, online measurement and quality inspection equipment.',
    },
    icon: 'inspection',
  },
]

export const getCategory = (slug: string) =>
  productCategories.find((c) => c.slug === slug)
