import { ErrorMessage } from '../components/ErrorMessage'

export default function Custom404() {
  return (
    <ErrorMessage
      code={404}
      title="Oh oh, page not found."
      description="This page doesn't exist."
    />
  )
}
