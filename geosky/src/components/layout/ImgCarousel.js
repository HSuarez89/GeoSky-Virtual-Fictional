import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img2.jpeg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'

function ImgCarousel(){
    const carouselSettings = {
        showArrows: true,
        infiniteLoop: true,
        showThumbs: false,
        useKeyboardArrows: true,
        autoPlay: true,
        interval: 3000,
        stopOnHover: false,
    }
    return(
                    <Carousel {...carouselSettings}>
                        <div>
                            <img src={img1} alt='Imagem 1'></img>
                        </div>
                        <div>
                            <img src={img2} alt='Imagem 2'></img>
                        </div>
                        <div>
                            <img src={img3} alt='Imagem 3'></img>
                        </div>
                        <div>
                            <img src={img4} alt='Imagem 4'></img>
                        </div>
                    </Carousel>
    )
}

export default ImgCarousel