import ImageGallery from 'react-image-gallery'
import { Link } from 'react-router-dom'

const Main = () => {
  const images = [
    {
      original: './shopping-cart-react/images/Image1.png',
    },
    {
      original: './shopping-cart-react/images/Image2.png',
    },
    {
      original: './shopping-cart-react/images/Image3.png',
    },
  ]

  return (
    <main>
      <div className="leftSide">
        <div className="upperBox">
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
        </div>
        <div className="lowerBox">
          <p>
            Sapiente dolore quibusdam assumenda, veniam aliquam, nostrum
            aspernatur eius doloremque ex nesciunt distinctio molestias
            architecto rerum cupiditate laboriosam repudiandae? Quisquam
            possimus eum illum adipisci iure aliquid qui numquam, maxime in
            laudantium totam laborum quia nemo fugiat. Nihil consequatur ea
            perferendis debitis, mollitia fugiat? Facere, laborum et.
            Perspiciatis.
          </p>
        </div>
      </div>
      <div className="slideshow">
        <ImageGallery items={images} />
      </div>
      <Link to="./webshop">
        <button className="webshopBtn bottom">Webshop</button>
      </Link>
    </main>
  )
}

export default Main
