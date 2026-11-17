import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { getSolution, solutions } from '@/data/solutions'
import { productCategories } from '@/data/products'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function SolutionDetail() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`
  const solution = getSolution(params.slug ?? '')

  if (!solution) {
    return (
      <div className="container-x py-28 text-center">
        <h2 className="text-2xl">{t['common.tbc']}</h2>
        <Link to={`${base}/solutions`} className="btn-primary mt-6">
          {t['common.back']}
        </Link>
      </div>
    )
  }

  const idx = solutions.findIndex((s) => s.slug === solution.slug)
  const prev = solutions[(idx - 1 + solutions.length) % solutions.length]
  const next = solutions[(idx + 1) % solutions.length]
  const relatedProducts = productCategories.filter((c) => c.icon === solution.icon)

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.solutions.title"
        crumbs={[
          { label: t['nav.home'] },
          { label: t['nav.solutions'], to: `${base}/solutions` },
          { label: solution.name[lang] },
        ]}
      />

      {/* 概述 */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
              <Icon name={solution.icon} className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-3xl">{solution.name[lang]}</h2>
            <p className="mt-3 text-brand-600">{solution.short[lang]}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-slate-600">{solution.overview[lang]}</p>
          </Reveal>
        </div>
      </section>

      {/* 痛点 */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">
              {lang === 'zh' ? '行业痛点' : 'Pain Points'}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solution.painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name="shield" className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{p[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 方案组成 */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">
              {lang === 'zh' ? '方案组成' : 'Solution Components'}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solution.components.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="h-full rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-brand-700">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-base">{c.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.desc[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 核心优势 + 工艺流程 */}
      <section className="section bg-slate-50">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">
              {lang === 'zh' ? '核心优势' : 'Key Advantages'}
            </h2>
            <ul className="mt-8 space-y-4">
              {solution.advantages.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {a[lang]}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-2xl sm:text-3xl">
              {lang === 'zh' ? '实施流程' : 'Implementation Process'}
            </h2>
            <ol className="mt-8 space-y-5">
              {solution.process.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink-900 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-sm font-medium text-slate-700">{step[lang]}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 应用行业 + 相关产品 */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">
              {lang === 'zh' ? '应用行业' : 'Industries'}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {solution.industries.map((ind) => (
                <span
                  key={ind.en}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600"
                >
                  {ind[lang]}
                </span>
              ))}
            </div>
          </Reveal>

          {relatedProducts.length > 0 && (
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-3xl">
                {lang === 'zh' ? '推荐装备' : 'Recommended Equipment'}
              </h2>
              <ul className="mt-8 space-y-3">
                {relatedProducts.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`${base}/products/${c.slug}`}
                      className="flex items-center justify-between rounded-xl border border-slate-100 px-5 py-4 text-sm text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                    >
                      {c.name[lang]}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* 上一/下一 + CTA */}
      <section className="border-t border-slate-100">
        <div className="container-x flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to={`${base}/solution/${prev.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-700"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            {prev.name[lang]}
          </Link>
          <Link to={`${base}/contact`} className="btn-primary">
            {t['common.getQuote']}
          </Link>
          <Link
            to={`${base}/solution/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-700"
          >
            {next.name[lang]}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
