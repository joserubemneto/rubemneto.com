import { parseISO, format, intervalToDuration } from 'date-fns'
import Head from 'next/head'
import { Link } from '../components/Link'

type AboutProps = {
  meta: {
    title: string
    description: string
  }
}

type Career = {
  jobTitle: string
  company: {
    name: string
    href: string
  }
  location: string
  startDate: string
  endDate: string | null
}

const career: Career[] = [
  {
    jobTitle: 'Frontend Engineer',
    company: {
      name: 'New Work SE',
      href: 'https://www.new-work.se/en',
    },
    location: 'Portugal',
    startDate: '2022-01',
    endDate: null,
  },
  {
    jobTitle: 'Frontend Developer',
    company: {
      name: 'Jumia Porto Tech Center',
      href: 'https://group.jumia.com/',
    },
    location: 'Portugal',
    startDate: '2022-04',
    endDate: '2022-12',
  },
  {
    jobTitle: 'Frontend Developer',
    company: {
      name: 'LUGGit',
      href: 'https://luggit.app/',
    },
    location: 'Portugal',
    startDate: '2021-11',
    endDate: '2022-10',
  },
]

function formatDate(date: string): string {
  return format(parseISO(date), 'LLL yyyy')
}

function getExperienceDuration(
  startDate: string,
  endDate: string | null,
): string {
  const durationObj = intervalToDuration({
    start: parseISO(startDate),
    end: endDate ? parseISO(endDate) : new Date(),
  })

  let durationStr = ''

  if (durationObj.years && durationObj.years > 1) {
    durationStr = `${durationObj.years} yrs `
  } else if (durationObj.years === 1) {
    durationStr = `${durationObj.years} yr `
  }

  if (durationObj.months && durationObj.months > 1) {
    durationStr += `${durationObj.months} mos`
  } else if (durationObj.months === 1) {
    durationStr += `${durationObj.months} mo`
  }

  return durationStr
}

export default function About({ meta }: AboutProps) {
  const { title, description } = meta

  return (
    <div className="my-8">
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
      </Head>

      <h1 className="h1">About</h1>
      <div className="mt-10 flex flex-col gap-16 md:flex-row">
        <img
          className="h-56 w-56 max-w-full rounded-lg object-cover"
          src="/static/images/profile.jpeg"
          alt="Rubem"
        />
        <div>
          <div>
            <p className="paragraph">
              I&apos;m Rubem, I started my developer journey in 2018, studying
              about frontend using HTML, CSS and JavaScript.
            </p>
            <p className="paragraph mt-5">
              I&apos;m working as a{' '}
              <strong className="strong">Frontend Engineer</strong> at NEW WORK
              SE and studying{' '}
              <strong className="strong">Informatic&apos;s Engineering</strong>{' '}
              at Univesity of Aveiro - Portugal. I&apos;m from Caruaru,
              Pernambuco, Brazil and now{' '}
              <strong className="strong">
                I&apos;m living in Aveiro, Portugal
              </strong>{' '}
              with my lovely wife and amazing son.
            </p>

            <p className="paragraph mt-5">
              On my free time I love to watch and play football, get out to eat
              and travel with my family.
            </p>
          </div>

          <div className="my-10 h-px w-full bg-black" />

          <section>
            <h2 className="h2">Career</h2>
            {career.map(
              ({ jobTitle, company, location, startDate, endDate }) => (
                <div className="mt-10" key={company.name}>
                  <h3 className="h3">{jobTitle}</h3>
                  <div className="mt-2 flex items-center gap-1">
                    <Link href={company.href} target="_blank">
                      {company.name}
                    </Link>
                    <p className="paragraph">• {location}</p>
                  </div>
                  <p className="paragraph mt-2">
                    <span>{formatDate(startDate)}</span>
                    <span> - </span>
                    <span>{endDate ? formatDate(endDate) : 'Present'}</span>
                    <span> • </span>
                    <span>{getExperienceDuration(startDate, endDate)}</span>
                  </p>
                </div>
              ),
            )}
          </section>

          <div className="my-10 h-px w-full bg-black" />

          <section>
            <h2 className="h2">Contact</h2>

            <p className="paragraph mt-10">
              I&apos;m always open to talk about new ideas, help the software
              community to be event better or just to talk :). If you want to
              get in touch,{' '}
              <Link href="mailto:joserubemn31@gmail.com">let&apos;s talk.</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'About | Rubem Neto',
        description:
          'Rubem Neto is a Brazilian Frontend Engineer. He lives in Aveiro, Portugal and works on the software development field since 2018 and currently is build build the future of work at New Work SE.',
      },
    },
  }
}
