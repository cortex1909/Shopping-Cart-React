import './style/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Pages/Main'

const App = () => {
  const appName = 'Shopping Cart Homepage'
  return (
    <>
      <Header appName={appName} linkTo={'webshop'} />
      <Main />
      <Footer />
    </>
  )
}

export default App
