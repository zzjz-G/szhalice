import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { solutions } from '@/data/solutions'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function Solutions() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.solutions.title"
        subKey="page.solutions.sub"
        crumbs={[{ label: t['nav.home'] }, { label: t['nav.solutions'] }]}
      />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link to={`${base}/solution/${s.slug}`} className="card group flex h-full flex-col p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg">{s.name[lang]}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.short[lang]}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  {t['common.learnMore']}
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
