import '../../styles/globals.css'
import Footer from '../components/site/Footer'
import HeadPage from '../components/site/HeadPage'
import NavBar from '../components/site/NavBar'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <HeadPage />
      <div className="flex flex-col items-center h-screen">
        <NavBar />
        <Component {...pageProps} />
      </div>

      <Footer />

    </>
  )
}

export default MyApp

// tutorial de layout persistente
// https://dev.to/guiselair/criando-um-layout-persistente-em-nextjs-1g8m
