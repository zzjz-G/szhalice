import type { Lang } from '@/i18n/types'
import { ui } from '@/data/ui'
import Reveal from './Reveal'

interface Props {
  eyebrowKey?: string
  titleKey: string
  subKey?: string
  lang: Lang
  center?: boolean
}

export default function SectionHeading({
  eyebrowKey,
  titleKey,
  subKey,
  lang,
  center = true,
}: Props) {
  const t = ui[lang]
  return (
    <Reveal
      className={
        center
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl'
      }
    >
      {eyebrowKey && <p className="eyebrow">{t[eyebrowKey]}</p>}
      <h2 className="mt-3 text-3xl sm:text-4xl">{t[titleKey]}</h2>
      {subKey && <p className="mt-4 text-base leading-relaxed text-slate-500">{t[subKey]}</p>}
    </Reveal>
  )
}
