import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { getCategory, productCategories } from '@/data/products'
import { solutions } from '@/data/solutions'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export default function ProductCategory() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`
  const category = getCategory(params.slug ?? '')

  if (!category) {
    return (
      <div className="container-x py-28 text-center">
        <h2 className="text-2xl">{t['common.tbc']}</h2>
        <Link to={`${base}/products`} className="btn-primary mt-6">
          {t['common.back']}
        </Link>
      </div>
    )
  }

  const related = solutions.filter((s) => s.icon === category.icon)
  const others = productCategories.filter((c) => c.slug !== category.slug).slice(0, 3)

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.products.title"
        crumbs={[
          { label: t['nav.home'] },
          { label: t['nav.products'], to: `${base}/products` },
          { label: category.name[lang] },
        ]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon name={category.icon} className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-3xl">{category.name[lang]}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{category.desc[lang]}</p>

            {/* 具体产品待补充 */}
            <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
              <p className="text-sm text-slate-500">{t['common.tbc']}</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-8">
            {related.length > 0 && (
              <div className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="text-base">{t['nav.solutions']}</h3>
                <ul className="mt-4 space-y-3">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`${base}/solution/${s.slug}`}
                        className="flex items-center justify-between text-sm text-slate-600 hover:text-brand-700"
                      >
                        {s.name[lang]}
                        <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h3 className="text-base">{t['footer.products']}</h3>
              <ul className="mt-4 space-y-3">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`${base}/products/${c.slug}`}
                      className="flex items-center justify-between text-sm text-slate-600 hover:text-brand-700"
                    >
                      {c.name[lang]}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
