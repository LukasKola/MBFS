import { CarCard, Hero, SearchBar } from "components";
import Head from "next/head";
import { useState } from "react";
import { api } from "~/utils/api";
import { filterCars } from "~/utils/filterCars";


export default function Home() {
  const utils = api.useContext()
  const cars = api.carRouter.getCars.useQuery()
  const [searchManufacturer, setSearchManufacturer] = useState('')
  const [searchModel ,setSearchModel] = useState('')
  const { data } = cars
  const { mutate: deleteCar } = api.carRouter.deleteCar.useMutation({
    async onSuccess() {
      await utils.carRouter.getCars.invalidate()
    }
  })
 

  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data


  return (
    <>
      <Head>
        <title>Administrace vozidel</title>
        <meta name="description" content="jednoduche a rychle spravovani vozidel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden">

        <Hero />
        <div className="mt-12 padding-x padding-y max-width" >
          <div className="home__filters">
            <SearchBar setSearchManufacturer={setSearchManufacturer} setSearchModel={setSearchModel}/>
            <div className="home__filter-container">
            </div>
          </div>
          {!isDataEmpty ?
            (
              <section>
                <div className="home__cars-wrapper" >
                  {
                    filterCars(data,searchModel, searchManufacturer).map((car) => <CarCard key={car.id} car={car} deleteCar={deleteCar} />)
                  }
                </div>
              </section>
            ) : (
              <div className="home__error-container" >
                <h2 className="text-black text-xl font-bold" >Žádna data</h2>

              </div>
            )
          }


        </div>
      </main>
    </>
  );
}
