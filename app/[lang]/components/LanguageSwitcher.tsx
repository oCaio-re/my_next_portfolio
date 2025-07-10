'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '@/i18n'

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
    const english = i18n.locales[0]
    const portuguese = i18n.locales[1]

  return (
    <div className="absolute right-4 top-4 z-100 text-[1.5rem] opacity-40 text-[#646DD2] font-bold hover:opacity-100
        transition-all  duration-300 ease-in-out uppercase hover:backdrop-blur-md hover:drop-shadow-md/15 hover:bg-white/10 p-3 rounded-[1rem]
    ">
      {/*<p>Locale switcher:</p>*/}
      <ul>
          <li key={english}>
              <Link className="hover:text-white transition-all duration-200 ease-in-out"
                  href={redirectedPathName(english)}
              >
                  {"🇬🇧 " + english}
              </Link>
          </li>
          <li key={portuguese}>
              <Link className="hover:text-white transition-all duration-200 ease-in-out"
                  href={redirectedPathName(portuguese)}
              >
                {"🇵🇹 " + i18n.locales[1]}
              </Link>
          </li>

      </ul>
    </div>
  )
}
