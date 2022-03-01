import Header from '../components/Header'
import Footer from '../components/Footer'
import WebShopContent from '../components/WebShopContent'

const Webshop = () => {
  return (
    <>
      <Header appName={'Webshop'} linkTo={'Homepage'} />
      <WebShopContent />
      <Footer />
    </>
  )
}

export default Webshop
