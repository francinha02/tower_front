import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import faker from 'faker'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import config from '../../config/config'
import { fetcher } from '../../utils/fetcher'
faker.locale = 'pt_BR'

interface MapInterface {
  latitude: number
  longitude: number
  firstName: string
  lastName: string
  placa: string
  cliente: string
  modelo: string
  atualizacao: string
  status: string
  velocidade: string
  endereco: string
}

const Map: React.FC = () => {
  const data: MapInterface[] = []

  for (let i = 0; i < 100; i++) {
    const parsedData: MapInterface = {
      latitude: parseInt(faker.address.latitude()),
      longitude: parseInt(faker.address.longitude()),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      placa: faker.vehicle.vin(),
      cliente: `${faker.name.firstName()} ${faker.name.lastName()}`,
      modelo: faker.vehicle.manufacturer(),
      atualizacao: faker.date.recent().toString(),
      status: faker.random.boolean() ? 'ON' : 'OFF',
      velocidade: `${faker.random.number(180)}Km/h`,
      endereco: `${faker.address.streetName()}, ${faker.address.state()}`
    }

    data.push(parsedData)
  }

  if (!data) {
    return <p>Carregando ...</p>
  }
  return (
    <MapContainer
      center={[-3.8580372, -38.495503]}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${config.mapboxKey}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {data.map(parsed => (
        // eslint-disable-next-line react/jsx-key
        <Marker position={[parsed.latitude, parsed.longitude]} draggable={true}>
          <Popup>
            Cliente: {parsed.cliente} <br />
            Placa: {parsed.placa} <br />
            Modelo: {parsed.modelo} <br />
            Atualização: {parsed.atualizacao} <br />
            Status: {parsed.status} <br />
            Velocidade: {parsed.velocidade} <br />
            Endereço: {parsed.endereco} <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
