export type ModelType = 'SUNTECH' | 'GT06'
export type MobileOperator =
  | 'Claro'
  | 'Oi'
  | 'Tim'
  | 'Vivo'
  | 'Vodafone'
  | 'Outras'

export type TimeZone =
  | 'GMT-14'
  | 'GMT-13'
  | 'GMT-12'
  | 'GMT-11'
  | 'GMT-10'
  | 'GMT-9'
  | 'GMT-8'
  | 'GMT-7'
  | 'GMT-6'
  | 'GMT-5'
  | 'GMT-4'
  | 'GMT-3'
  | 'GMT-2'
  | 'GMT-1'
  | 'GMT+1'
  | 'GMT+2'
  | 'GMT+3'
  | 'GMT+4'
  | 'GMT+5'
  | 'GMT+6'
  | 'GMT+7'
  | 'GMT+8'
  | 'GMT+9'
  | 'GMT+10'
  | 'GMT+11'
  | 'GMT+12'

export interface Base {
  id: string
  active: boolean
  deleted: boolean
  createdAt: string
  updateAt: string
}

export interface Location extends Base {
  serverTime: string
  fixTime: string
  satellite: number
  latitude: number
  longitude: number
  speed: number
  course: string
  cellId: string
}

export interface Info extends Base {
  odometer: number
  power: number
  serial: number
  io: number
  mode: number
  hourMeter: number
  archive: boolean
}

export interface Status extends Base {
  blocked: boolean
  valid: boolean
  charge: boolean
  ignition: boolean
  battery: number
  info: Info
}

export interface Adapter extends Base {
  code: number
  description: string
  model: ModelType
  equipmentNumber: number
  phone: string
  mobileOperator: MobileOperator
  chipNumber: string
  timezone: TimeZone
  location: Location[]
  statusId: Status[]
}
