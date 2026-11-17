import type { Lang } from '@/i18n/types'

type Dict = Record<string, string>

export const ui: Record<Lang, Dict> = {
  zh: {
    // 导航
    'nav.home': '首页',
    'nav.products': '产品中心',
    'nav.solutions': '解决方案',
    'nav.about': '关于我们',
    'nav.news': '新闻资讯',
    'nav.contact': '联系我们',
    'nav.profile': '公司简介',
    'nav.culture': '企业文化',
    'lang.switch': 'EN',

    // 通用
    'common.learnMore': '了解更多',
    'common.viewAll': '查看全部',
    'common.readMore': '阅读全文',
    'common.contactUs': '联系我们',
    'common.getQuote': '在线询盘',
    'common.back': '返回',
    'common.tbc': '内容正在整理中，敬请期待',
    'common.prev': '上一篇',
    'common.next': '下一篇',

    // 首页区块
    'home.products.title': '产品中心',
    'home.products.sub': '聚焦智能装备与系统集成，覆盖智能制造核心场景',
    'home.about.title': '关于我们',
    'home.about.sub': '专注智能装备，赋能智能制造',
    'home.solutions.title': '场景解决方案',
    'home.solutions.sub': '按场景分类，帮助客户快速对号入座',
    'home.news.title': '新闻资讯',
    'home.news.sub': '了解艾丽斯的最新动态与行业观察',
    'home.cta.title': '寻找智能制造整体解决方案？',
    'home.cta.sub': '从工艺到装备，从单机到整厂，我们为您提供一站式服务',

    // 页面横幅
    'page.products.title': '产品中心',
    'page.products.sub': '智能装备与系统集成产品，助力制造提质增效',
    'page.solutions.title': '解决方案',
    'page.solutions.sub': '面向核心工艺场景的整体解决方案',
    'page.about.title': '关于我们',
    'page.about.sub': '专注智能装备，赋能智能制造',
    'page.news.title': '新闻资讯',
    'page.news.sub': '公司动态与行业观察',
    'page.contact.title': '联系我们',
    'page.contact.sub': '期待与您合作，欢迎随时咨询',

    // 关于
    'about.profile': '公司简介',
    'about.culture': '企业文化',
    'about.vision': '企业愿景',
    'about.mission': '企业使命',
    'about.values': '核心价值观',

    // 联系
    'contact.landline': '座机',
    'contact.phone': '手机',
    'contact.email': '电子邮箱',
    'contact.address': '公司地址',
    'contact.hours': '工作时间',
    'contact.form.title': '在线询盘',
    'contact.form.name': '您的姓名',
    'contact.form.company': '公司名称',
    'contact.form.email': '联系邮箱',
    'contact.form.phone': '联系电话',
    'contact.form.message': '需求描述',
    'contact.form.submit': '提交询盘',
    'contact.form.success': '提交成功，我们会尽快与您联系！',

    // 新闻
    'news.all': '全部',
    'news.source': '来源',
    'news.related': '相关资讯',

    // 页脚
    'footer.products': '产品中心',
    'footer.solutions': '解决方案',
    'footer.quickLinks': '快速链接',
    'footer.contact': '联系方式',
    'footer.rights': '版权所有',
    'footer.icp': '（待备案）',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.profile': 'Company Profile',
    'nav.culture': 'Corporate Culture',
    'lang.switch': '中',

    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
    'common.contactUs': 'Contact Us',
    'common.getQuote': 'Get a Quote',
    'common.back': 'Back',
    'common.tbc': 'Content is being organized. Please stay tuned.',
    'common.prev': 'Previous',
    'common.next': 'Next',

    // Home sections
    'home.products.title': 'Products',
    'home.products.sub': 'Intelligent equipment and system integration for core smart manufacturing scenarios',
    'home.about.title': 'About Us',
    'home.about.sub': 'Focused on intelligent equipment for smart manufacturing',
    'home.solutions.title': 'Scenario Solutions',
    'home.solutions.sub': 'Organized by scenario to help customers find the right fit',
    'home.news.title': 'News & Insights',
    'home.news.sub': 'Latest updates from Alice and industry observations',
    'home.cta.title': 'Looking for a Smart Manufacturing Total Solution?',
    'home.cta.sub': 'From process to equipment, from single machines to the whole plant — one-stop service',

    // Page heroes
    'page.products.title': 'Products',
    'page.products.sub': 'Intelligent equipment and system integration products for better manufacturing',
    'page.solutions.title': 'Solutions',
    'page.solutions.sub': 'Total solutions for core process scenarios',
    'page.about.title': 'About Us',
    'page.about.sub': 'Focused on intelligent equipment for smart manufacturing',
    'page.news.title': 'News & Insights',
    'page.news.sub': 'Company updates and industry observations',
    'page.contact.title': 'Contact Us',
    'page.contact.sub': 'We look forward to working with you',

    // About
    'about.profile': 'Company Profile',
    'about.culture': 'Corporate Culture',
    'about.vision': 'Our Vision',
    'about.mission': 'Our Mission',
    'about.values': 'Core Values',

    // Contact
    'contact.landline': 'Landline',
    'contact.phone': 'Mobile',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.form.title': 'Request a Quote',
    'contact.form.name': 'Your Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'contact.form.success': 'Submitted successfully. We will get back to you soon!',

    // News
    'news.all': 'All',
    'news.source': 'Source',
    'news.related': 'Related News',

    // Footer
    'footer.products': 'Products',
    'footer.solutions': 'Solutions',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All Rights Reserved',
    'footer.icp': '(ICP filing pending)',
  },
}
