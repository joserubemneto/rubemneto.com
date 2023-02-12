import { styled } from '../../styles/theme/stitches.config'
import { BaseNavLink } from '../Link'
import { Paragraph } from '../Paragraph'
import { getYear } from 'date-fns'

type FooterProps = {
  links: {
    description: string
    href: string
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
  display: 'none',
  '@bp2': { display: 'block' },
})

export function Footer({ links }: FooterProps) {
  const currentYear = getYear(new Date())

  return (
    <Container>
      <Paragraph>&copy; {currentYear} – Rubem Neto</Paragraph>
      <LinksContainer>
        {links.map(({ href, description }) => (
          <Link key={href} href={href} target="_blank">
            <Title>{description}</Title>
          </Link>
        ))}
      </LinksContainer>
    </Container>
  )
}
