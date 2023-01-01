import { styled } from '../../stitches.config'
import NextLink from 'next/link'

export const BaseNavLink = styled(NextLink, {
  display: 'inline-block',
  fontSize: '$xs',
  fontWeight: 500,
  color: '$secondary',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  transition: 'color $duration ease-in-out',

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
  transition: 'opacity $duration ease-in-out',

  '&:hover, &:focus': {
    opacity: '0.8',
  },
})
