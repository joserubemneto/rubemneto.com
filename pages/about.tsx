import { parseISO, format, intervalToDuration } from 'date-fns'
import { Divider } from '../components/Divider'
import { Heading } from '../components/Heading'
import { BaseImage } from '../components/Image'
import { Link } from '../components/Link'
import { Paragraph } from '../components/Paragraph'
import { styled } from '../stitches.config'

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

const Container = styled('div', {
  margin: '$8 0',
})

const Grid = styled('div', {
  display: 'flex',
  gap: '$16',
  marginTop: '$10',
})

const Image = styled(BaseImage, {
  height: '220px',
})

export const AboutContainer = styled('div', {
  [`& ${Paragraph}`]: {
    marginTop: '$5',
  },
})

export const Experience = styled('div', {
  marginTop: '$10',

  [`& > ${Paragraph}`]: {
    marginTop: '$2',
  },
})

export const ExperienceHeadline = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})

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

export default function About() {
  return (
    <Container>
      <Heading as="h1">About</Heading>
      <Grid>
        <Image src="/static/images/profile.jpeg" />
        <div>
          <AboutContainer>
            <Paragraph>
              I&apos;m Rubem, I started my developer journey in 2018, studying
              about frontend using HTML, CSS and JavaScript.
            </Paragraph>
            <Paragraph>
              I&apos;m working as a <strong>Frontend Engineer</strong> at NEW
              WORK SE and studying{' '}
              <strong>Informatic&apos;s Engineering</strong> at Univesity of
              Aveiro - Portugal. I&apos;m from Caruaru, Pernambuco, Brazil and
              now <strong>I&apos;m living in Aveiro, Portugal</strong> with my
              lovely wife and amazing son.
            </Paragraph>

            <Paragraph>
              On my free time I love to watch and play football, get out to eat
              and travel with my family.
            </Paragraph>
          </AboutContainer>

          <Divider />

          <section>
            <Heading as="h2">Career</Heading>
            {career.map(
              ({ jobTitle, company, location, startDate, endDate }) => (
                <Experience key={company.name}>
                  <ExperienceHeadline>
                    <Heading as="h3">{jobTitle}</Heading>
                    <Paragraph>-</Paragraph>
                    <Link href={company.href} target="_blank">
                      {company.name}
                    </Link>
                    <Paragraph>• {location}</Paragraph>
                  </ExperienceHeadline>
                  <Paragraph>
                    <span>{formatDate(startDate)}</span>
                    <span> - </span>
                    <span>{endDate ? formatDate(endDate) : 'Present'}</span>
                    <span> • </span>
                    <span>{getExperienceDuration(startDate, endDate)}</span>
                  </Paragraph>
                </Experience>
              ),
            )}
          </section>

          <Divider />

          <section>
            <Heading as="h2">Contact</Heading>

            <Paragraph css={{ marginTop: '$10' }}>
              I&apos;m always open to talk about new ideas, help the software
              community to be event better or just to talk :). If you want to
              get in touch,{' '}
              <Link href="mailto:joserubemn31@gmail.com">let&apos;s talk.</Link>
            </Paragraph>
          </section>
        </div>
      </Grid>
    </Container>
  )
}
