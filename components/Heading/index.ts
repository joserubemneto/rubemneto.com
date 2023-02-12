import { styled } from '../../styles/theme/stitches.config'

export const Heading = styled('h2', {
  color: '$primary',
  variants: {
    as: {
      h1: {
        fontFamily: '$heading',
        fontSize: '$6xl',
        lineHeight: '50px',
      },
      h2: {
        fontSize: '$2xl',
      },
      h3: {
        fontSize: '$lg',
      },
    },
  },
})
