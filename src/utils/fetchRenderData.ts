import dataResponse from '@/data/response.json'
import { type DataItem } from '@/types'

type DataResponse = { data: DataItem[] }

export default async (): Promise<DataResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataResponse as DataResponse)
    }, 2500)
  })
}
