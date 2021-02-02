import Head from '../components/Head'
import dynamic from 'next/dynamic'
import { MapsContainer } from '../styles/pages/Maps'
// import useSWR from 'swr'
// import { fetcher } from '../utils/fetcher'
const MapWithNoSSR = dynamic(() => import('../components/map/Map'), {
  ssr: false
})

const Maps: React.FC = () => {
  return (
    <MapsContainer>
      <Head title="Mapa" />
      <MapWithNoSSR />
    </MapsContainer>
  )
}

export default Maps
