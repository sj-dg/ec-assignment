import dataResponse1 from '@/data/response-1.json'
import dataResponse2 from '@/data/response-2.json'
import { type DataItem } from '@/types'

type DataResponse = { data: DataItem[] }
const dataCollection: DataResponse[] = [
  dataResponse1 as DataResponse,
  dataResponse2 as DataResponse
]

export default async (): Promise<DataResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dataResponse = dataCollection[Math.round(Math.random())]
      /**
       * shuffle data everytime its invoked
       */
      const shuffledResponse = {
        data: dataResponse.data.sort(() => 0.5 - Math.random())
      }
      resolve(shuffledResponse as DataResponse)
    }, 2500)
  })
}
