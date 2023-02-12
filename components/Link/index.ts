import { styled } from '../../styles/theme/stitches.config'
import NextLink from 'next/link'

export const BaseNavLink = styled(NextLink, {
  display: 'inline-block',
  fontSize: '$xs',
  fontWeight: 500,
  color: '$secondary',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: 'color $base ease-in-out',

  '&:hover': {
    color: '$primary',
  },
})

export const Link = styled(NextLink, {
  display: 'inline-flex',
  alignItems: 'center',
  borderBottom: '1px solid $primary',
  color: '$primary',
  fontSize: '$lg',
  textDecoration: 'none',
  transition: 'opacity $base ease-in-out',
  gap: '$2',

  '&:hover, &:focus': {
    opacity: '0.8',
  },
})
