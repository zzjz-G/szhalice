import { useState, type FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import type { Lang } from '@/i18n/types'
import { contact } from '@/data/site'
import { ui } from '@/data/ui'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

const infoCards = [
  { icon: 'phone', key: 'contact.landline', value: 'landline' },
  { icon: 'phone', key: 'contact.phone', value: 'phone' },
  { icon: 'mail', key: 'contact.email', value: 'email' },
  { icon: 'pin', key: 'contact.address', value: 'address' },
  { icon: 'clock', key: 'contact.hours', value: 'hours' },
] as const

export default function Contact() {
  const params = useParams()
  const lang = (params.lang as Lang) ?? 'zh'
  const t = ui[lang]
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  const valueOf = (key: string) => {
    if (key === 'email') return contact.email
    const k = key as 'landline' | 'phone' | 'address' | 'hours'
    return contact[k][lang]
  }

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((cur) => ({ ...cur, [field]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // 纯前端站点：无后端，仅做前端确认；正式接入后端/邮件服务后再真实提交
    setSubmitted(true)
  }

  const fields = [
    { key: 'contact.form.name', name: 'name', type: 'input' },
    { key: 'contact.form.company', name: 'company', type: 'input' },
    { key: 'contact.form.email', name: 'email', type: 'input' },
    { key: 'contact.form.phone', name: 'phone', type: 'input' },
  ] as const

  return (
    <div>
      <PageHero
        lang={lang}
        titleKey="page.contact.title"
        subKey="page.contact.sub"
        crumbs={[{ label: t['nav.home'] }, { label: t['nav.contact'] }]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* 联系信息：卡片样式完全统一 */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map((c) => (
                <div key={c.key} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-slate-500">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs text-slate-400">{t[c.key]}</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">{valueOf(c.value)}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 询盘表单 */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-100 p-8 shadow-sm">
              <h2 className="text-xl">{t['contact.form.title']}</h2>
              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-brand-50 p-10 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white">
                    <Icon name="check" className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-medium text-brand-800">{t['contact.form.success']}</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label className="mb-1.5 block text-sm font-medium text-slate-600">
                        {t[f.key]}
                      </label>
                      <input
                        required={f.name === 'name' || f.name === 'email'}
                        value={form[f.name]}
                        onChange={update(f.name)}
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-600">
                      {t['contact.form.message']}
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {t['contact.form.submit']}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
