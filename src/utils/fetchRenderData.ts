import dataResponse from '@/data/response.json'
import { type DataItem } from '@/types'

type DataResponse = { data: DataItem[] }

export default async (): Promise<DataResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
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
