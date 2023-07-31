import { CarCard, CarList, CustomFilter, Hero, SearchBar } from "components";
import Head from "next/head";
import { api } from "~/utils/api";


export default function Home() {
  const utils = api.useContext()
  const cars = api.carRouter.getCars.useQuery()
  const { data } = cars
  const { mutate: deleteCar } = api.carRouter.deleteCar.useMutation({
    async onSuccess() {
      utils.carRouter.getCars.invalidate()
    }
  })
  const { mutate: updateCar } = api.carRouter.updateCar.useMutation({
    async onSuccess() {
      utils.carRouter.getCars.invalidate()
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
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter />
              <CustomFilter />
            </div>
          </div>
          {!isDataEmpty ?
            (
              <section>
                <div className="home__cars-wrapper" >
                  {data?.map((car) => <CarCard car={car} deleteCar={deleteCar}/>)}
                </div>
              </section>
            ) : (
              <div className="home__error-container" >
                <h2 className="text-black text-xl font-bold" >no results</h2>

              </div>
            )
          }


        </div>
      </main>
    </>
  );
}
