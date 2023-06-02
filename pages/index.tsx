import Head from 'next/head'
import { ArrowRight } from 'phosphor-react'
import { Heading } from '../components/Heading'
import { Link } from '../components/Link'
import { Paragraph } from '../components/Paragraph'
import { styled } from '../styles/theme/stitches.config'

type HomeProps = {
  meta: {
    title: string
    description: string
  }
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center',
  gap: '$8',
})

const ContentContainer = styled('div', {
  [`& ${Paragraph}`]: {
    marginTop: '$5',

    '@bp1': {
      marginTop: '$2',
    },
  },

  [`& ${Link}`]: {
    marginTop: '$7',

    '@bp1': {
      marginTop: '$5',
    },
  },
})

export default function Index({ meta }: HomeProps) {
  const { title, description } = meta

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
      </Head>
      <ContentContainer>
        <Heading as="h1">Hi, I&apos;m Rubem Neto.</Heading>
        <Paragraph>
          <strong>Frontend Engineer at New Work SE</strong>.
          <br />
          Here I will share things about my work, life and side projects.
        </Paragraph>

        <Link href="/about">
          More about me <ArrowRight />
        </Link>
      </ContentContainer>
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Rubem Neto',
        description: 'Fascinated with software development, UI and UX.',
      },
    },
  }
}
