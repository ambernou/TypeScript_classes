interface FlatInfo {
  id: string
  title: string
  details: string
  photos: string[]
  coordinates: number[]
  bookedDates: number[]
}

interface Flat extends FlatInfo {
  price: number
}

interface FormattedFlat extends FlatInfo {
  totalPrice: number
}

interface Parameters {
  city: string
  checkInDate: Date
  checkOutDate: Date
  priceLimit: number
}

export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number): Date

export const backendPort: number

export const localStorageKey: string

export class FlatRentSdk {
  get(id: string): Flat | FormattedFlat
  search(parameters: Parameters): FormattedFlat[]

  // * @param {number} flatId - в описании функции указано, что flatId число, но ссылка на id объекта, а это - строка
  // поэтому я указала строку, возможно в чем-то не разобралась
  book(flatId: string, checkInDate: Date, checkOutDate: Date): number
}
