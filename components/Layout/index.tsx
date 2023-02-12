import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { ReactElement, ReactNode } from 'react'
import { styled } from '../../styles/theme/stitches.config'
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

const LayoutContainer = styled('div', {
  minHeight: '100vh',
  maxWidth: '768px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 $4',

  '@bp2': {
    padding: '0 $6',
  },
})

const ContentContainer = styled('div', {
  flex: '1',
})

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Navbar links={navbarLinks} />
      <ContentContainer>{children}</ContentContainer>
      <Footer links={footerLinks} />
    </LayoutContainer>
  )
}
