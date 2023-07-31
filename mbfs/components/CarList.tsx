import React from 'react'
import { api } from '~/utils/api'


const CarList = () => {
  const cars = api.carRouter.getCars.useQuery()
  const { data} = cars
  console.log(data)
  return (
    <div>
      {data && data.map((e) => <div>{e.engineVal}</div>)}
    </div>
  )
}

export default CarList