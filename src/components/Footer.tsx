import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { company, contact } from '@/data/site'
import { productCategories } from '@/data/products'
import { solutions } from '@/data/solutions'
import { ui } from '@/data/ui'
import Icon from './Icon'
import Logo from './Logo'

export default function Footer() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const base = `/${lang}`
  const year = new Date().getFullYear()

  const linkCol = (heading: string, items: { to: string; label: string }[]) => (
    <div>
      <h4 className="text-sm font-semibold text-white">{heading}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} className="text-sm text-slate-400 transition hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-ink-900">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo lang={lang} light />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {company.tagline[lang]}
          </p>
        </div>

        {linkCol(t['footer.products'], [
          ...productCategories.map((c) => ({
            to: `${base}/products/${c.slug}`,
            label: c.name[lang],
          })),
        ])}

        {linkCol(t['footer.solutions'], [
          ...solutions.map((s) => ({
            to: `${base}/solution/${s.slug}`,
            label: s.name[lang],
          })),
        ])}

        <div>
          <h4 className="text-sm font-semibold text-white">{t['footer.contact']}</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {contact.address[lang]}
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {contact.landline[lang]}
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {contact.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {company.name[lang]} · {t['footer.rights']}
          </p>
          <p>{t['footer.icp']}</p>
        </div>
      </div>
    </footer>
  )
}
