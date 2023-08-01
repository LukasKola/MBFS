import { Car } from "@prisma/client";


export const filterCars = (cars: Car[], model: string, manufacturer: string): Car[] => {
   if(!cars) return []
    if(model && !manufacturer){
        return cars.filter((car) => car.model === model)
    } else if( !model && manufacturer){
        const filteredCarsReversed = [...cars.filter((car) => car.manufacturer === manufacturer)].reverse()
        return filteredCarsReversed
    } else if(model && manufacturer){
        const filteredManufacturer = [...cars.filter((car) => car.manufacturer === manufacturer)].reverse()
        return filteredManufacturer.filter((car) => car.model === model)
    } else {
        const reversedCars = [...cars].reverse()
        return reversedCars
    }
}