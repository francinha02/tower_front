import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import faker from 'faker'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import config from '../../config/config'
import { useAxios } from '../../hooks/useAxios'
import { Adapter } from '../../models/Adapter'
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
  address: string
}

const Map: React.FC = () => {
  const token = {
    'x-access-token': localStorage.getItem('token')
  }
  const { data } = useAxios<Adapter[]>('adapters', token)
  if (!data) {
    return <p>Quase lá</p>
  }
  console.log(data)
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
      atualizacao: faker.date.recent().toString(),
      status: null,
      velocidade: null,
      address: `${faker.address.streetName()}, ${faker.address.state()}`
    }

    if (adapter.location.length > 0) {
      const sortLocation = adapter.location.sort(
        (a, b) => Date.parse(b.createAt) - Date.parse(a.createAt)
      )
      console.log(sortLocation[0])
      parsedData.velocidade = `${sortLocation[0].speed}Km/h`
      parsedData.latitude = sortLocation[0].latitude
      parsedData.longitude = sortLocation[0].longitude
    }
    if (adapter.statusId.length > 0) {
      const sortStatus = adapter.statusId.sort(
        (a, b) => Date.parse(b.createAt) - Date.parse(a.createAt)
      )
      parsedData.status = sortStatus[0].valid ? 'ON' : 'OFF'
    }
    pin.push(parsedData)
  })

  return (
    <MapContainer
      center={[-3.8580372, -38.495503]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${config.mapboxKey}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {pin.map(parsed => (
        // eslint-disable-next-line react/jsx-key
        <Marker position={[parsed.latitude, parsed.longitude]} draggable={true}>
          <Popup>
            Cliente: {parsed.cliente} <br />
            Placa: {parsed.placa} <br />
            Modelo: {parsed.modelo} <br />
            Atualização: {parsed.atualizacao} <br />
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
