import { AnchorHTMLAttributes, ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'

type BaseLinkProps = {
  children?: ReactNode
  isActive?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps

export const BaseNavLink = ({ isActive, children, ...rest }: BaseLinkProps) => {
  const linkColor = isActive ? 'text-primary' : 'text-secondary'

  return (
    <NextLink {...rest} legacyBehavior>
      <a
        className={`inline-block text-xs font-medium uppercase tracking-widest no-underline transition-colors ease-in-out hover:text-primary ${linkColor}`}
      >
        {children}
      </a>
    </NextLink>
  )
}

export const Link = ({ children, ...rest }: BaseLinkProps) => (
  <NextLink {...rest} legacyBehavior>
    <a className="inline-flex items-center gap-2 border-b-2 border-solid border-primary text-lg text-primary no-underline transition-opacity ease-in-out hover:opacity-80 focus:opacity-80">
      {children}
    </a>
  </NextLink>
)
