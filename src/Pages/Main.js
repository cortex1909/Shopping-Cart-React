import Image1 from '../images/Image1.png'
import Image2 from '../images/Image2.png'
import Image3 from '../images/Image3.png'
import ImageGallery from 'react-image-gallery'

const Main = () => {
  const images = [
    {
      original: Image1,
    },
    {
      original: Image2,
    },
    {
      original: Image3,
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
      <button className="webshopBtn bottom">Webshop</button>
    </main>
  )
}

export default Main
