import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { news, newsCategories } from '@/data/news'
import { ui } from '@/data/ui'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function News() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`
  const [cat, setCat] = useState<string>('all')

  const list = cat === 'all' ? news : news.filter((n) => n.categorySlug === cat)

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.news.title"
        subKey="page.news.sub"
        crumbs={[{ label: t['nav.home'] }, { label: t['nav.news'] }]}
      />

      <section className="section">
        <div className="container-x">
          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCat('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                cat === 'all'
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t['news.all']}
            </button>
            {newsCategories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCat(c.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  cat === c.slug
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.name[lang]}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((n, i) => (
              <Reveal key={n.slug} delay={i * 60}>
                <Link to={`${base}/news/${n.slug}`} className="card block h-full p-6">
                  <p className="text-xs font-semibold text-brand-600">{n.category[lang]}</p>
                  <h3 className="mt-3 text-lg leading-snug">{n.title[lang]}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
                    {n.excerpt[lang]}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                    <span>{n.date}</span>
                    <span className="font-semibold text-brand-600">{t['common.readMore']}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
