export type Lang = 'zh' | 'en'

/** 一个需要中英文双份的文本字段 */
export type Localized = Record<Lang, string>

export const pick = (value: Localized, lang: Lang): string => value[lang]

export const isLang = (value: string | undefined): value is Lang =>
  value === 'zh' || value === 'en'
