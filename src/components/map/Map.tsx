import faker from 'faker'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import config from '../../config/config'
import { Adapter } from '../../models/Adapter'

faker.locale = 'pt_BR'

interface MapInterface {
  id: string
  latitude: number
  longitude: number
  firstName: string
  lastName: string
  placa: string
  cliente: string
  modelo: string
  atual: string
  status: string
  velocidade: number
  address: string
}

type MapProps = {
  data: Adapter[]
}

const MapPlaceholder = () => {
  return (
    <p>
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}

const Map: React.FC<MapProps> = ({ data }) => {
  const pin: MapInterface[] = []
  data.forEach(adapter => {
    const parsedData: MapInterface = {
      latitude: null,
      longitude: null,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      placa: faker.vehicle.vin(),
      cliente: `${faker.name.firstName()} ${faker.name.lastName()}`,
      modelo: faker.vehicle.manufacturer(),
      atual: null,
      status: null,
      velocidade: null,
      address: `${faker.address.streetName()}, ${faker.address.state()}`,
      id: adapter.equipmentNumber.toString()
    }
    if (adapter.location.length > 0) {
      const sortLocation = adapter.location.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      )
      parsedData.velocidade = sortLocation[0].speed
      parsedData.latitude = sortLocation[0].latitude
      parsedData.longitude = sortLocation[0].longitude
      parsedData.atual = sortLocation[0].serverTime
    }
    if (adapter.statusId.length > 0) {
      const sortStatus = adapter.statusId.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      )
      parsedData.status = sortStatus[0].valid ? 'ON' : 'OFF'
    }
    pin.push(parsedData)
  })

  return (
    <MapContainer
      center={[-3.8580372, -38.495503]}
      zoom={6}
      scrollWheelZoom={false}
      placeholder={<MapPlaceholder />}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${config.mapboxKey}`}
        attribution='Map data &copy; <a href="https://www.mapbox.org/">MapBox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {pin.map(parsed => (
        <Marker
          position={[parsed.latitude, parsed.longitude]}
          draggable={true}
          key={parsed.id}
        >
          <Popup>
            Cliente: {parsed.cliente} <br />
            Placa: {parsed.placa} <br />
            Modelo: {parsed.modelo} <br />
            Atualização: {parsed.atual} <br />
            Status: {parsed.status} <br />
            Velocidade: {parsed.velocidade} <br />
            Endereço: {parsed.address} <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
