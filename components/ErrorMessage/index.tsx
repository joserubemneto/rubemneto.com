import { ArrowLeft } from 'phosphor-react'
import { Link } from '../Link'

type ErrorMessageProps = {
  title: string
  description: string
  code: number
}

export function ErrorMessage({ code, title, description }: ErrorMessageProps) {
  return (
    <div className="my-64 flex flex-col items-center gap-5">
      <h1 className="h1">{title}</h1>
      <p className="paragraph">{description}</p>
      <Link href="/">
        <ArrowLeft /> Back to Homepage
      </Link>
    </div>
  )
}
