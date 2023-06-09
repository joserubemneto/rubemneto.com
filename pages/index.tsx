import Head from 'next/head'
import { ArrowRight } from 'phosphor-react'
import { Link } from '../components/Link'

type HomeProps = {
  meta: {
    title: string
    description: string
  }
}

export default function Index({ meta }: HomeProps) {
  const { title, description } = meta

  return (
    <div className="flex flex-1 flex-col justify-center gap-8">
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
      </Head>
      <section>
        <h1 className="h1">Hi, I&apos;m Rubem Neto.</h1>
        <p className="paragraph mt-5 sm:mt-2">
          <strong className="strong">Frontend Engineer at New Work SE</strong>.
          <br />
          Here I will share things about my work, life and side projects.
        </p>

        <Link href="/about" className="mt-7 sm:mt-5">
          More about me <ArrowRight />
        </Link>
      </section>
    </div>
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
