import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { company, stats } from '@/data/site'
import { productCategories } from '@/data/products'
import { solutions } from '@/data/solutions'
import { news } from '@/data/news'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

export default function Home() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-ink-900">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(51,119,255,0.35),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(6,182,212,0.25),transparent_40%)]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-x relative py-24 sm:py-28 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-brand-400">{company.tagline[lang]}</p>
            <h1 className="mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {lang === 'zh'
                ? '智能装备赋能制造，系统集成引领未来'
                : 'Intelligent Equipment Empowering Manufacturing'}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {company.intro[lang]}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to={`${base}/products`} className="btn-primary">
                {t['nav.products']}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                to={`${base}/contact`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t['common.contactUs']}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* 数据条 */}
        <div className="relative border-t border-white/10">
          <div className="container-x grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-slate-400">{s.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 产品中心 ===== */}
      <section className="section">
        <SectionHeading
          lang={lang}
          eyebrowKey="nav.products"
          titleKey="home.products.title"
          subKey="home.products.sub"
        />
        <div className="container-x mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link to={`${base}/products/${c.slug}`} className="card block h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg">{c.name[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.desc[lang]}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  {t['common.learnMore']}
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== 关于我们 ===== */}
      <section className="section bg-slate-50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t['home.about.title']}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{t['home.about.sub']}</h2>
            <p className="mt-5 leading-relaxed text-slate-600">{company.intro[lang]}</p>
            <ul className="mt-6 space-y-3">
              {[
                lang === 'zh' ? '工艺研发与装备制造一体化' : 'Integrated process development and equipment manufacturing',
                lang === 'zh' ? '从单机到整厂的一站式交付' : 'One-stop delivery from single machines to the whole plant',
                lang === 'zh' ? '数据驱动，质量全程可追溯' : 'Data-driven with full quality traceability',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to={`${base}/about/profile`} className="btn-primary mt-8">
              {t['common.learnMore']}
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-10">
              <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.value}>
                    <p className="text-3xl font-bold text-white">{s.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{s.label[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 场景方案 ===== */}
      <section className="section">
        <SectionHeading
          lang={lang}
          eyebrowKey="nav.solutions"
          titleKey="home.solutions.title"
          subKey="home.solutions.sub"
        />
        <div className="container-x mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ===== 新闻资讯 ===== */}
      <section className="section bg-slate-50">
        <div className="container-x flex items-end justify-between gap-4">
          <SectionHeading
            lang={lang}
            center={false}
            eyebrowKey="nav.news"
            titleKey="home.news.title"
            subKey="home.news.sub"
          />
          <Link to={`${base}/news`} className="btn-ghost hidden shrink-0 sm:inline-flex">
            {t['common.viewAll']}
          </Link>
        </div>
        <div className="container-x mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.slug} delay={i * 70}>
              <Link to={`${base}/news/${n.slug}`} className="card block h-full p-6">
                <p className="text-xs font-semibold text-brand-600">{n.category[lang]}</p>
                <h3 className="mt-3 text-lg leading-snug">{n.title[lang]}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-500">{n.excerpt[lang]}</p>
                <p className="mt-4 text-xs text-slate-400">{n.date}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-brand-700">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="container-x relative py-16 text-center sm:py-20">
          <h2 className="text-3xl text-white sm:text-4xl">{t['home.cta.title']}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-100">{t['home.cta.sub']}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to={`${base}/contact`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              {t['common.getQuote']}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link
              to={`${base}/solutions`}
              className="inline-flex items-center rounded-lg border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t['nav.solutions']}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
