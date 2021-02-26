import faker from 'faker'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Table, { SortOrder } from 'react-base-table'
import 'react-base-table/styles.css'
import Head from '../components/Head'
import { useAxios } from '../hooks/useAxios'
import { Adapter } from '../models/Adapter'
import { columns, Data } from '../models/Columns'
import { MapsContainer } from '../styles/pages/Maps'
import ViewPort from '../utils/viewPort'

faker.setLocale('pt_BR')

const MapWithNoSSR = dynamic(() => import('../components/map/Map'), {
  ssr: false
})

type Sort = {
  key: keyof Data
  order: SortOrder
}

const defaultSort: Sort = {
  key: 'speed',
  order: 'asc'
}

const parsedData: Data[] = []

const Maps: React.FC = () => {
  const [state, setState] = useState({ data: parsedData, sortBy: defaultSort })

  let token: { 'x-access-token': string }
  if (typeof window !== 'undefined') {
    token = {
      'x-access-token': localStorage.getItem('token')
    }
  }
  const { data } = useAxios<Adapter[]>('adapters', token)
  if (!data) {
    return <p>Carregando ...</p>
  }

  data.forEach(adapter => {
    const parsed: Data = {
      placa: 'NUX-6520',
      model: 'Gol',
      cliente: faker.name.firstName() + ' ' + faker.name.lastName(),
      responsible: faker.name.firstName() + ' ' + faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      date: faker.date.recent().toString(),
      address: faker.address.streetAddress(),
      equipment: adapter.equipmentNumber,
      speed: null,
      odometer: null,
      hourMeter: null,
      power: null,
      chassi: null,
      direction: faker.address.direction(),
      status: null,
      gps: null,
      charge: null
    }

    if (adapter.location.length > 0) {
      const sortLocation = adapter.location.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      )
      parsed.speed = sortLocation[0].speed
      parsed.date = sortLocation[0].serverTime
    }
    if (adapter.statusId.length > 0) {
      const sortStatus = adapter.statusId.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      )
      parsed.odometer = sortStatus[0].info.odometer
      parsed.hourMeter = sortStatus[0].info.hourMeter
      parsed.power = sortStatus[0].info.power
      parsed.status = sortStatus[0].valid
      parsed.gps = sortStatus[0].info.active
      parsed.charge = sortStatus[0].charge
    }
    parsedData.push(parsed)
  })

  const columnShape = []
  let widthTable = 0

  columns.forEach(col => {
    columnShape.push(col.title)
    widthTable = widthTable + col.width
  })

  const onColumnSort = (sortBy): void => {
    console.log(sortBy)
    const order = sortBy.order === 'asc' ? 1 : -1
    parsedData.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))
    setState({
      sortBy,
      data: parsedData
    })
  }

  return (
    <MapsContainer>
      <Head title="Mapa" />
      <section className="leaflet-container">
        <MapWithNoSSR data={data} />
      </section>
      <section className="table-section">
        <Table
          data={state.data}
          width={widthTable}
          height={ViewPort.vh(29)}
          sortBy={state.sortBy}
          onColumnSort={onColumnSort}
          columns={columns}
        />
      </section>
    </MapsContainer>
  )
}

export default Maps
// export Maps
