import { styled } from '../../styles/theme/stitches.config'
import { useRouter } from 'next/router'
import { BaseNavLink } from '../Link'

type NavbarProps = {
  links: {
    description: string
    href: string
  }[]
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'white',
  fontSize: '$xs',
  height: '60px',
  width: '100%',
})

const Logo = styled('a', {
  color: '$white',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '$4xl',
  fontFamily: '$heading',
  transition: 'opacity $base ease-in-out',

  '&:hover, &:focus': {
    opacity: '0.8',
  },
})

const Nav = styled('nav', {
  textAlign: 'center',

  ul: {
    display: 'flex',
    gap: '$5',
    listStyle: 'none',
  },
})

const NavLink = styled(BaseNavLink, {
  variants: {
    isActive: {
      true: {
        color: '$primary',
      },
    },
  },
})

export function Navbar({ links }: NavbarProps) {
  const { pathname } = useRouter()

  return (
    <Header>
      <Logo href="/">R</Logo>

      <Nav>
        <ul>
          {links.map(({ description, href }) => (
            <li key={href}>
              <NavLink href={href} isActive={pathname === href}>
                {description}
              </NavLink>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}
