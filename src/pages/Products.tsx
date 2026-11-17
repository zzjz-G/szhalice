import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { productCategories } from '@/data/products'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function Products() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.products.title"
        subKey="page.products.sub"
        crumbs={[{ label: t['nav.home'] }, { label: t['nav.products'] }]}
      />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  )
}
