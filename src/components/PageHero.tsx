import type { Lang } from '@/i18n/types'
import { ui } from '@/data/ui'

interface Crumb {
  label: string
  to?: string
}

interface Props {
  lang: Lang
  titleKey: string
  subKey?: string
  crumbs?: Crumb[]
}

export default function PageHero({ lang, titleKey, subKey, crumbs }: Props) {
  const t = ui[lang]
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-16 pb-14 sm:pt-20 sm:pb-16">
      {/* 装饰光斑 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl"
      />
      <div className="container-x relative">
        {crumbs && (
          <nav className="mb-4 text-xs text-slate-400" aria-label="breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                <span className={i === crumbs.length - 1 ? 'text-slate-200' : ''}>
                  {c.label}
                </span>
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl text-white sm:text-4xl">{t[titleKey]}</h1>
        {subKey && <p className="mt-3 max-w-2xl text-base text-slate-300">{t[subKey]}</p>}
      </div>
    </section>
  )
}
