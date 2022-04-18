import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hier ist leider eine Umleitung!" />
        <p className="description">
          Bitte nutzt künftig <a href="https://arenauten.at">Arenauten.at</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
