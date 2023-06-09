import { BaseNavLink as Link } from '../Link'
import { getYear } from 'date-fns'
import { ReactElement } from 'react'

type FooterProps = {
  links: {
    description: string
    href: string
    icon: ReactElement
  }[]
}

export function Footer({ links }: FooterProps) {
  const currentYear = getYear(new Date())

  return (
    <footer className="flex items-center justify-between bg-background py-2">
      <p className="paragraph">&copy; {currentYear} – Rubem Neto</p>
      <div className="flex gap-5">
        {links.map(({ href, description, icon }) => (
          <Link key={href} href={href} target="_blank">
            <span className="block text-2xl sm:hidden">{icon}</span>
            <span className="hidden sm:block">{description}</span>
          </Link>
        ))}
      </div>
    </footer>
  )
}
