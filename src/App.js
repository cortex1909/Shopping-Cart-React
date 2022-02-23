import './style/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Pages/Main'

const App = () => {
  const appName = 'Shopping Cart'
  return (
    <>
      <Header appName={appName} />
      <Main />
      <Footer />
    </>
  )
}

export default App
