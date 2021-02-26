import { Alignment } from 'react-base-table'

export interface Data {
  placa: string
  model: string
  cliente: string
  responsible: string
  phone: string
  date: string
  address: string
  equipment: number
  speed: number
  odometer: number
  hourMeter: number
  power: number
  chassi: string
  direction: string
  status: boolean
  gps: boolean
  charge: boolean
}

export interface ColumnData {
  key: keyof Data
  title: string
  dataKey: keyof Data
  width: number
  sortable: boolean
  align?: Alignment
  resizable?: boolean
}

export const columns: ColumnData[] = [
  {
    key: 'placa',
    title: 'Placa',
    dataKey: 'placa',
    width: 100,
    align: 'center',
    sortable: true
  },
  {
    key: 'model',
    title: 'Modelo',
    dataKey: 'model',
    width: 100,
    align: 'center',
    sortable: true,
    resizable: true
  },
  {
    key: 'cliente',
    title: 'Cliente',
    dataKey: 'cliente',
    width: 150,
    align: 'left',
    sortable: true,
    resizable: true
  },
  {
    key: 'responsible',
    title: 'Responsável',
    dataKey: 'responsible',
    width: 150,
    align: 'left',
    sortable: true,
    resizable: true
  },
  {
    key: 'phone',
    title: 'Telefone',
    dataKey: 'phone',
    width: 100,
    align: 'center',
    sortable: true,
    resizable: true
  },
  {
    key: 'date',
    title: 'Atualização',
    dataKey: 'date',
    width: 100,
    align: 'center',
    sortable: true,
    resizable: true
  },
  {
    key: 'address',
    title: 'Endereço',
    dataKey: 'address',
    width: 150,
    align: 'left',
    sortable: true,
    resizable: true
  },
  {
    key: 'equipment',
    title: 'Equipamento',
    dataKey: 'equipment',
    width: 100,
    align: 'right',
    sortable: true
  },
  {
    key: 'speed',
    title: 'Velocidade (Km/h)',
    dataKey: 'speed',
    width: 100,
    align: 'right',
    sortable: true
  },
  {
    key: 'odometer',
    title: 'Hodômetro',
    dataKey: 'odometer',
    width: 100,
    align: 'right',
    sortable: true
  },
  {
    key: 'hourMeter',
    title: 'Horímetro',
    dataKey: 'hourMeter',
    width: 100,
    align: 'right',
    sortable: true
  },
  {
    key: 'power',
    title: 'Tensão',
    dataKey: 'power',
    width: 100,
    align: 'right',
    sortable: true
  },
  {
    key: 'chassi',
    title: 'Chassi',
    dataKey: 'chassi',
    width: 100,
    align: 'right',
    sortable: true,
    resizable: true
  },
  {
    key: 'direction',
    title: 'Direção',
    dataKey: 'direction',
    width: 100,
    align: 'center',
    sortable: true
  },
  {
    key: 'status',
    title: 'Status',
    dataKey: 'status',
    width: 100,
    align: 'center',
    sortable: true
  },
  {
    key: 'gps',
    title: 'GPS',
    dataKey: 'gps',
    width: 100,
    align: 'center',
    sortable: true
  },
  {
    key: 'charge',
    title: 'Bateria',
    dataKey: 'charge',
    width: 100,
    align: 'center',
    sortable: true
  }
]
