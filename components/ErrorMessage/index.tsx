import { ArrowLeft } from 'phosphor-react'
import { styled } from '../../stitches.config'
import { Heading } from '../Heading'
import { Link } from '../Link'
import { Paragraph } from '../Paragraph'

type ErrorMessageProps = {
  code: number
}

export function ErrorMessage({ code }: ErrorMessageProps) {
  let title = 'five hundred'
  let description = "Something isn't right."

  if (code === 404) {
    title = 'Oh oh, page not found.'
    description = "This page doesn't exist."
  }

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

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
  margin: '$64 0',
})
