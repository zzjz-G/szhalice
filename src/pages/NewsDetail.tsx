import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { getNews, news } from '@/data/news'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function NewsDetail() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`
  const item = getNews(params.slug ?? '')

  if (!item) {
    return (
      <div className="container-x py-28 text-center">
        <h2 className="text-2xl">{t['common.tbc']}</h2>
        <Link to={`${base}/news`} className="btn-primary mt-6">
          {t['common.back']}
        </Link>
      </div>
    )
  }

  const idx = news.findIndex((n) => n.slug === item.slug)
  const prev = news[(idx - 1 + news.length) % news.length]
  const next = news[(idx + 1) % news.length]

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.news.title"
        crumbs={[
          { label: t['nav.home'] },
          { label: t['nav.news'], to: `${base}/news` },
          { label: item.category[lang] },
        ]}
      />

      <article className="section">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold text-brand-600">{item.category[lang]}</p>
            <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{item.title[lang]}</h1>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-400">
              <span>{item.date}</span>
              <span>
                {t['news.source']}：{item.source[lang]}
              </span>
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            {item.content.map((para, i) => (
              <Reveal key={i}>
                <p className="text-[17px] leading-loose text-slate-600">{para[lang]}</p>
              </Reveal>
            ))}
          </div>

          {/* 上一/下一 */}
          <div className="mt-14 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-2">
            <Link
              to={`${base}/news/${prev.slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-700"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              <span className="line-clamp-1">{prev.title[lang]}</span>
            </Link>
            <Link
              to={`${base}/news/${next.slug}`}
              className="flex items-center justify-end gap-2 text-sm font-semibold text-slate-600 hover:text-brand-700 sm:text-right"
            >
              <span className="line-clamp-1">{next.title[lang]}</span>
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
