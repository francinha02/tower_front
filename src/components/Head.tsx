import NextHead from 'next/head'

interface HeadType {
  title: string
}
const Head: React.FC<HeadType> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  )
}

export default Head
