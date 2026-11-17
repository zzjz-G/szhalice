import { Link, useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { ui } from '@/data/ui'

export default function NotFound() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]

  return (
    <div className="container-x flex flex-col items-center py-28 text-center">
      <p className="text-7xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl">
        {lang === 'zh' ? '页面未找到' : 'Page Not Found'}
      </h1>
      <p className="mt-3 max-w-md text-sm text-slate-500">
        {lang === 'zh'
          ? '您访问的页面不存在或已被移动。'
          : 'The page you are looking for does not exist or has been moved.'}
      </p>
      <Link to={`/${lang}`} className="btn-primary mt-8">
        {t['nav.home']}
      </Link>
    </div>
  )
}
