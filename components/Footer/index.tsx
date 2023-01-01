import { styled } from '../../stitches.config'
import { BaseNavLink } from '../Link'

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
  justifyContent: 'center',
  gap: '$5',
  height: '60px',
})

const Link = styled(BaseNavLink)

const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' },
})

export function Footer({ links }: FooterProps) {
  return (
    <Container>
      {links.map(({ href, description }) => (
        <Link key={href} href={href} target="_blank">
          <Title>{description}</Title>
        </Link>
      ))}
    </Container>
  )
}
