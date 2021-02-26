import Head from '../components/Head'
import { Container } from '../styles/pages/Home'
import Location from '../assets/my_location.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head title="Tower GPS" />
      <h1>Tower GPS</h1>
      <Location />
    </Container>
  )
}

export default Home
