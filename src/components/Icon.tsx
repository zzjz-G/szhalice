interface IconProps {
  name: string
  className?: string
}

// 统一的 24x24 线性图标，颜色跟随 currentColor
const paths: Record<string, React.ReactNode> = {
  welding: (
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M7 9.5V14c0 1.5 2.2 3 5 3s5-1.5 5-3V9.5" />
      <path d="M12 13v6" />
    </>
  ),
  spraying: (
    <>
      <path d="M9 8h4v9a2 2 0 0 1-2 2h-0a2 2 0 0 1-2-2V8z" />
      <path d="M9 10H6.5a1.5 1.5 0 0 0 0 3H9" />
      <path d="M16 9l3-1" />
      <path d="M16 12h3" />
      <path d="M16 15l3 1" />
    </>
  ),
  grinding: (
    <>
      <circle cx="9" cy="9" r="5" />
      <path d="M12.5 12.5L19 19" />
      <path d="M6 9h6" />
      <path d="M9 6v6" />
    </>
  ),
  laser: (
    <>
      <path d="M4 6h16" />
      <path d="M12 6v4" />
      <path d="M8 10l4 5 4-5" />
      <path d="M12 15v4" />
      <path d="M9 19h6" />
    </>
  ),
  logistics: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  inspection: (
    <>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.5 14.5L20 20" />
      <path d="M7.5 10h5" />
      <path d="M10 7.5v5" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L14 12.5l4 1.5V17a2 2 0 0 1-2 2A13 13 0 0 1 5 9a2 2 0 0 1 0-5z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" />
    </>
  ),
  send: <path d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z" />,
  factory: (
    <>
      <path d="M3 21V10l6 4V10l6 4V7l6-3v17H3z" />
      <path d="M7 17h0M12 17h0M17 17h0" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M15 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M17 14.6a5.5 5.5 0 0 1 3.5 5.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2.5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1L5.3 5.3" />
    </>
  ),
}

export default function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.check}
    </svg>
  )
}
