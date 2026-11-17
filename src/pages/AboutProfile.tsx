import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { company, stats } from '@/data/site'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function AboutProfile() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`

  const highlights = [
    { icon: 'gear', title: { zh: '装备研发制造', en: 'Equipment R&D & Manufacturing' } },
    { icon: 'target', title: { zh: '系统集成能力', en: 'System Integration' } },
    { icon: 'shield', title: { zh: '可靠交付服务', en: 'Reliable Delivery & Service' } },
    { icon: 'users', title: { zh: '专业团队', en: 'Professional Team' } },
  ]

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.about.title"
        subKey="page.about.sub"
        crumbs={[
          { label: t['nav.home'] },
          { label: t['nav.about'] },
          { label: t['about.profile'] },
        ]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl">{t['about.profile']}</h2>
            <p className="mt-6 leading-relaxed text-slate-600">{company.intro[lang]}</p>
            <p className="mt-4 leading-relaxed text-slate-600">{company.mission[lang]}</p>
            <Link to={`${base}/contact`} className="btn-primary mt-8">
              {t['common.contactUs']}
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.icon} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base">{h.title[lang]}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-900 py-14">
        <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label[lang]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
