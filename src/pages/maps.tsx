import Head from 'next/head'

import mapboxGl from 'mapbox-gl'

import { useEffect, useState } from 'react'
// import useSWR from 'swr'
// import { fetcher } from '../utils/fetcher'
import config from '../config/config'

mapboxGl.accessToken = config.mapboxKey

const Maps: React.FC = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false)
  // const { data, error } = useSWR('', fetcher)

  useEffect(() => {
    setPageIsMounted(true)
    const map = new mapboxGl.Map({
      container: 'tower',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-38.4955035, -3.8580372],
      zoom: 12
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Maps</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <main>
        <h1>Mapa</h1>
        <div id="tower" style={{ width: '100vw', height: '100vh' }} />
      </main>
    </div>
  )
}

export default Maps
