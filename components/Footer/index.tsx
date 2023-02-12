import { styled } from '../../styles/theme/stitches.config'
import { BaseNavLink } from '../Link'
import { Paragraph } from '../Paragraph'
import { getYear } from 'date-fns'
import { ReactElement } from 'react'

type FooterProps = {
  links: {
    description: string
    href: string
    icon: ReactElement
  }[]
}

const Container = styled('footer', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2 0',
})

const LinksContainer = styled('div', {
  display: 'flex',
  gap: '$5',
})

const Link = styled(BaseNavLink)

const Title = styled('span', {
  display: 'block',
  '@bp1': { display: 'none' },
})

const IconContainer = styled('span', {
  fontSize: '$2xl',
  display: 'none',

  '@bp1': {
    display: 'block',
  },
})

export function Footer({ links }: FooterProps) {
  const currentYear = getYear(new Date())

  return (
    <Container>
      <Paragraph>&copy; {currentYear} – Rubem Neto</Paragraph>
      <LinksContainer>
        {links.map(({ href, description, icon }) => (
          <Link key={href} href={href} target="_blank">
            <IconContainer>{icon}</IconContainer>
            <Title>{description}</Title>
          </Link>
        ))}
      </LinksContainer>
    </Container>
  )
}
