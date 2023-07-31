import { CustomFilter, Hero, SearchBar } from "components";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";


export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Car catlog
            </h1>
          </div>
          <div className="home__filters">
            <SearchBar/>
            <div className="home__filter-container">
              <CustomFilter title='Typ paliva' />
              <CustomFilter title='Rok výroby' />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
