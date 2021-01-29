import dotenv from 'dotenv/'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path:
      process.env.NODE_ENV === 'development' ? '.env.development.local' : '.env'
  })
}

export default {
  mapboxKey:
    process.env.NEXT_PUBLIC_MAPBOX_API_KEY || process.env.MAPBOX_API_KEY
}
