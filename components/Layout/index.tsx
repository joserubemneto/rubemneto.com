import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { ReactElement, ReactNode } from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

type LayoutProps = {
  children: ReactNode
}

type PageLink = {
  description: string
  href: string
}

type FooterLink = {
  icon: ReactElement
} & PageLink

const navbarLinks: PageLink[] = [
  {
    description: 'Home',
    href: '/',
  },
  {
    description: 'About',
    href: '/about',
  },
]

const footerLinks: FooterLink[] = [
  {
    description: 'GitHub',
    href: 'https://github.com/joserubemneto',
    icon: <GithubLogo aria-label="Github" />,
  },
  {
    description: 'linkedin',
    href: 'https://www.linkedin.com/in/jose-rubem',
    icon: <LinkedinLogo aria-label="Linkedin" />,
  },
]

export function Layout({ children }: LayoutProps) {
  return (
    <main className="mx-auto my-0 flex min-h-screen w-full max-w-screen-md flex-col px-4 py-0 md:px-6">
      <Navbar links={navbarLinks} />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer links={footerLinks} />
    </main>
  )
}
