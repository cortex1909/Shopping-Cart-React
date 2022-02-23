import { Slide, Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Main = () => {
  const slideImages = [
    {
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      caption: 'Slide 1',
    },
    {
      url: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
      caption: 'Slide 2',
    },
    {
      url: 'https://react-slideshow.herokuapp.com/assets/images/slide_6.jpg',
      caption: 'Slide 3',
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
        <div className="slide-container">
          <Fade indicators={true}>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <button className="webshopBtn bottom">Webshop</button>
    </main>
  )
}

export default Main
