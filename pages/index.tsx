import { ArrowRight } from 'phosphor-react'
import { Heading } from '../components/Heading'
import { BaseImage } from '../components/Image'
import { Link } from '../components/Link'
import { Paragraph } from '../components/Paragraph'
import { styled } from '../stitches.config'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '$64 0',
  gap: '$8',

  [`& ${Paragraph}`]: {
    marginTop: '$5',
  },

  [`& ${Link}`]: {
    marginTop: '$7',
  },
})

const ContentContainer = styled('div', {
  p: {
    marginTop: '$2',
  },
})

const Image = styled(BaseImage, {
  width: '60px',
  height: '60px',
  alignSelf: 'flex-start',
})

export default function Index() {
  return (
    <Container>
      <Image src="/static/images/profile.jpeg" />
      <ContentContainer>
        <Heading as="h1">Hi, I&apos;m Rubem Neto.</Heading>
        <Paragraph>
          <strong>Frontend Engineer at New Work SE</strong>.
          <br />
          Here I will share things about my work, life and side projects.
        </Paragraph>

        <Link href="/about" css={{ gap: '$2' }}>
          More about me <ArrowRight />
        </Link>
      </ContentContainer>
    </Container>
  )
}
