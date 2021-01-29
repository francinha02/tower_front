import dotenv from 'dotenv/'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.local' : '.env'
  })
}

export default {
  mapboxKey: process.env.MAPBOX_API_KEY
}
