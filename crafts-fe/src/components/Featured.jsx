import React from 'react'
import Turkey from '../images/carol-turkey.png';
import Cups from '../images/carols-cups.png';
import Topper from '../images/cake-topper.png';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
export default function Featured() {
  return (
    <>
        <CCarousel controls transition="crossfade" className="custom-carousel">
            <CCarouselItem>
                <CImage className="d-block w-100 carousel-img" id='carousel-img' src={Topper} alt="slide 1"/>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carousel-img" src={Turkey} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carousel-img" src={Cups} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    </>
  )
}
