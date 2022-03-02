import Header from '../components/Header'
import Footer from '../components/Footer'
import WebShopContent from '../components/WebShopContent'
import { useState, useEffect } from 'react'

const Webshop = () => {
  const [interior, setInterior] = useState(null)
  const [exterior, setExterior] = useState(null)
  const [brushes, setBrushes] = useState(null)
  const [machines, setMachines] = useState(null)

  useEffect(async () => {
    await Promise.all([
      fetch('http://localhost:3000/interior')
        .then((response) => response.json())
        .then((data) => setInterior(data)),
      fetch('http://localhost:3000/exterior')
        .then((response) => response.json())
        .then((data) => setExterior(data)),
      fetch('http://localhost:3000/brushes')
        .then((response) => response.json())
        .then((data) => setBrushes(data)),
      fetch('http://localhost:3000/machines')
        .then((response) => response.json())
        .then((data) => setMachines(data)),
    ])
  }, [])

  return (
    <>
      <Header appName={'Webshop'} linkTo={'Homepage'} />
      {(interior, exterior, brushes, machines) && (
        <WebShopContent
          interiorContent={interior}
          exteriorContent={exterior}
          brushesContent={brushes}
          machinesContent={machines}
        />
      )}
      <Footer />
    </>
  )
}

export default Webshop
