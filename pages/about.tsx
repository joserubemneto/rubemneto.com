import { Divider } from '../components/Divider'
import { Heading } from '../components/Heading'
import { BaseImage } from '../components/Image'
import { Link } from '../components/Link'
import { Paragraph } from '../components/Paragraph'
import { styled } from '../stitches.config'

const career = [
  {
    jobTitle: 'Frontend Engineer',
    company: {
      name: 'New Work SE',
      href: 'www.google.com',
    },
    location: 'Portugal',
    duration: 'Jul 2021 – Present • 1 yr 6 mos',
  },
  {
    jobTitle: 'Frontend Developer',
    company: {
      name: 'Jumia Porto Tech Center',
      href: 'www.google.com',
    },
    location: 'Portugal',
    duration: 'Jul 2021 – Present • 1 yr 6 mos',
  },
  {
    jobTitle: 'Frontend Developer',
    company: {
      name: 'LUGGit',
      href: 'www.google.com',
    },
    location: 'Portugal',
    duration: 'Jul 2021 – Present • 1 yr 6 mos',
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

export default function About() {
  return (
    <Container>
      <Heading as="h1">About</Heading>
      <Grid>
        <Image src="/static/images/profile.jpeg" />
        <div>
          <section>
            <Paragraph>
              I&apos;m Rubem, I started as a Software Developer in 2018, working
              with React.
            </Paragraph>
            <Paragraph>
              I&apos;m working as a Frontend Engineer at NEW WORK SE and
              studying Informatic&apos;s Engineering at Univesity of Aveiro -
              Portugal. I&apos;m from Caruaru, Pernambuco, Brazil and now
              I&apos;m living in Aveiro, Portugal with my lovely wife and
              amazing son.
            </Paragraph>

            <Paragraph>
              On my free time I love to watch and play football, get out to eat
              and travel with my family.
            </Paragraph>
          </section>

          <Divider />

          <section>
            <Heading as="h2">Career</Heading>
            {career.map(({ jobTitle, company, location, duration }) => (
              <Experience key={company.name}>
                <ExperienceHeadline>
                  <Heading as="h3">{jobTitle}</Heading>
                  <Paragraph>-</Paragraph>
                  <Link href={company.href}>{company.name}</Link>
                  <Paragraph>• {location}</Paragraph>
                </ExperienceHeadline>
                <Paragraph>{duration}</Paragraph>
              </Experience>
            ))}
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
