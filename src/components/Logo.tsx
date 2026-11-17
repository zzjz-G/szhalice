import type { Lang } from '@/i18n/types'
import { company } from '@/data/site'

interface Props {
  lang: Lang
  /** 深色背景下使用（页脚/登录页），文字改白 */
  light?: boolean
}

/** 正式 logo 提供前的品牌占位：字母 A 图形 + 简称 */
export default function Logo({ lang, light = false }: Props) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-600 text-lg font-bold text-white">
        A
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={
            light
              ? 'text-[15px] font-bold text-white'
              : 'text-[15px] font-bold text-ink-900'
          }
        >
          {company.shortName[lang]}
        </span>
        <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
          Alice Equipment
        </span>
      </span>
    </span>
  )
}
