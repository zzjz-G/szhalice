import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { productCategories } from '@/data/products'
import { solutions } from '@/data/solutions'
import { ui } from '@/data/ui'
import Icon from './Icon'
import Logo from './Logo'

export default function Navbar() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const otherLang: Lang = lang === 'zh' ? 'en' : 'zh'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  const linkBase = `/${lang}`

  const navItem = (key: string, to: string) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-md px-3 py-2 text-sm font-medium transition ${
          isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'
        }`
      }
    >
      {t[key]}
    </NavLink>
  )

  const dropdown = (
    navKey: string,
    items: { to: string; label: string }[],
  ) => (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-brand-700">
        {t[navKey]}
        <Icon name="chevron" className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-1 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition ${
        scrolled ? 'shadow-md' : 'border-b border-slate-100'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to={`${linkBase}`} aria-label="home">
          <Logo lang={lang} />
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItem('nav.home', `${linkBase}`)}
          {dropdown('nav.products', [
            ...productCategories.map((c) => ({
              to: `${linkBase}/products/${c.slug}`,
              label: c.name[lang],
            })),
          ])}
          {dropdown('nav.solutions', [
            ...solutions.map((s) => ({
              to: `${linkBase}/solution/${s.slug}`,
              label: s.name[lang],
            })),
          ])}
          {dropdown('nav.about', [
            { to: `${linkBase}/about/profile`, label: t['nav.profile'] },
            { to: `${linkBase}/about/culture`, label: t['nav.culture'] },
          ])}
          {navItem('nav.news', `${linkBase}/news`)}
          {navItem('nav.contact', `${linkBase}/contact`)}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={`/${otherLang}${location.pathname.replace(/^\/(zh|en)/, '')}`}
            className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-semibold text-ink-900 transition hover:border-brand-300"
          >
            {t['lang.switch']}
          </Link>
          <Link to={`${linkBase}/contact`} className="btn-primary hidden md:inline-flex">
            {t['common.getQuote']}
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-md text-ink-900 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="menu"
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <Link to={`${linkBase}`} className="block py-2.5 text-sm font-medium">
            {t['nav.home']}
          </Link>
          {[
            {
              key: 'nav.products',
              group: 'products',
              items: productCategories.map((c) => ({
                to: `${linkBase}/products/${c.slug}`,
                label: c.name[lang],
              })),
            },
            {
              key: 'nav.solutions',
              group: 'solutions',
              items: solutions.map((s) => ({
                to: `${linkBase}/solution/${s.slug}`,
                label: s.name[lang],
              })),
            },
            {
              key: 'nav.about',
              group: 'about',
              items: [
                { to: `${linkBase}/about/profile`, label: t['nav.profile'] },
                { to: `${linkBase}/about/culture`, label: t['nav.culture'] },
              ],
            },
          ].map((g) => (
            <div key={g.group} className="border-t border-slate-50 py-1">
              <button
                className="flex w-full items-center justify-between py-2.5 text-sm font-medium"
                onClick={() => setOpenGroup((cur) => (cur === g.group ? null : g.group))}
              >
                {t[g.key]}
                <Icon
                  name="chevron"
                  className={`h-4 w-4 transition ${openGroup === g.group ? 'rotate-180' : ''}`}
                />
              </button>
              {openGroup === g.group && (
                <div className="pb-2 pl-3">
                  {g.items.map((it) => (
                    <Link key={it.to} to={it.to} className="block py-2 text-sm text-slate-500">
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to={`${linkBase}/news`} className="block border-t border-slate-50 py-2.5 text-sm font-medium">
            {t['nav.news']}
          </Link>
          <Link to={`${linkBase}/contact`} className="block border-t border-slate-50 py-2.5 text-sm font-medium">
            {t['nav.contact']}
          </Link>
        </nav>
      )}
    </header>
  )
}
