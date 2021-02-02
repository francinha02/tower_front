import NextHead from 'next/head'

interface HeadType {
  title: string
  href?: string
  rel?: string
}
const Head: React.FC<HeadType> = ({ title, href, rel }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link href={href} rel={rel}></link>
    </NextHead>
  )
}

export default Head
