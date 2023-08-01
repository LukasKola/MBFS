import { Car } from "@prisma/client";


export const filterCars = (cars: Car[], model: string, manufacturer: string): Car[] => {
   if(!cars) return []
    if(model && !manufacturer){
        return cars.filter((car) => car.model === model)
    } else if( !model && manufacturer){
        return cars.filter((car) => car.manufacturer === manufacturer)
    } else if(model && manufacturer){
        const filteredManufacturer = cars.filter((car) => car.manufacturer === manufacturer)
        return filteredManufacturer.filter((car) => car.model === model)
    } else {
        return cars
    }
}