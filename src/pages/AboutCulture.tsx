import { useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { company, values } from '@/data/site'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function AboutCulture() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.about.title"
        subKey="page.about.sub"
        crumbs={[
          { label: t['nav.home'] },
          { label: t['nav.about'] },
          { label: t['about.culture'] },
        ]}
      />

      {/* 愿景 / 使命 */}
      <section className="section">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-ink-900 p-10">
              <Icon name="target" className="h-8 w-8 text-brand-400" />
              <h2 className="mt-5 text-xl text-white">{t['about.vision']}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{company.vision[lang]}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-slate-100 p-10 shadow-sm">
              <Icon name="award" className="h-8 w-8 text-brand-600" />
              <h2 className="mt-5 text-xl">{t['about.mission']}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{company.mission[lang]}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl">{t['about.values']}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title.en} delay={i * 70}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg">{v.title[lang]}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{v.desc[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
