import { useRouter } from 'next/router'
import { BaseNavLink as Link } from '../Link'

type NavbarProps = {
  links: {
    description: string
    href: string
  }[]
}

export function Navbar({ links }: NavbarProps) {
  const { pathname } = useRouter()

  return (
    <header className="flex h-16 w-full items-center justify-between text-xs text-white">
      <a
        className="font-heading text-4xl font-bold text-white decoration-0 transition-opacity ease-in-out hover:opacity-80 focus:opacity-80"
        href="/"
      >
        R
      </a>

      <nav className="text-center">
        <ul className="flex list-none gap-5">
          {links.map(({ description, href }) => (
            <li key={href}>
              <Link href={href} isActive={pathname === href}>
                {description}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
