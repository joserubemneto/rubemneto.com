import { styled } from '../../styles/theme/stitches.config'

export const Heading = styled('h2', {
  color: '$primary',
  variants: {
    as: {
      h1: {
        fontFamily: '$heading',
        fontSize: '$6xl',
        lineHeight: '50px',

        '@bp1': {
          fontSize: '$5xl',
        },
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
