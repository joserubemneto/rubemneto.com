import { ArrowLeft } from 'phosphor-react'
import { styled } from '../../styles/theme/stitches.config'
import { Heading } from '../Heading'
import { Link } from '../Link'
import { Paragraph } from '../Paragraph'

type ErrorMessageProps = {
  title: string
  description: string
  code: number
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
  margin: '$64 0',
})

export function ErrorMessage({ code, title, description }: ErrorMessageProps) {
  return (
    <Container>
      <Heading as="h1">{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Link href="/">
        <ArrowLeft /> Back to Homepage
      </Link>
    </Container>
  )
}
