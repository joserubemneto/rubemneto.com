import { ReactNode } from 'react'
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

const footerLinks: PageLink[] = [
  {
    description: 'Source',
    href: 'https://github.com/joserubemneto/rubemneto.com',
  },
  {
    description: 'GitHub',
    href: 'https://github.com/joserubemneto',
  },
  {
    description: 'linkedin',
    href: 'https://www.linkedin.com/in/jose-rubem',
  },
  {
    description: 'Twitter',
    href: 'https://twitter.com/joserubemn',
  },
]

const LayoutContainer = styled('div', {
  minHeight: '100vh',
  maxWidth: '768px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
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
