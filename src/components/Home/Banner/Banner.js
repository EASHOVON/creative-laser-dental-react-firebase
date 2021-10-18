import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
/* 
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="...">
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
    </div>
  </div>
</div> */
const Banner = () =>
{
    /*
https://i.ibb.co/vxBhQgf/Dental-Clinic-in-Uttara-jpg.webp
https://i.ibb.co/gR3j95z/3-D-Intraoral-Scanner-jpg.webp
https://i.ibb.co/T8xLDnf/Invisalign-Clear-Aligner-jpg.webp
https://i.ibb.co/s31SBgH/Laser-dental-treatment-1-jpg.webp
https://i.ibb.co/kgx5HqC/painless-inj-2.webp
https://i.ibb.co/6nr7t7s/Digital-Smile-Design-at-LASER-DENTAL-jpg.webp
*/
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 mx-auto"
                        src="https://i.ibb.co/zQ2BxLC/Modern-Dentistry.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/44zrMfY/Modern-Dentistry-1.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/PC3Tj4p/Modern-Dentistry-2.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/q15TZT6/Modern-Dentistry-3.png"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/8YzfdCq/Modern-Dentistry-4.png"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XSNps6r/Modern-Dentistry-5.png"
                        alt="Sixth Slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;

/*
https://i.ibb.co/zQ2BxLC/Modern-Dentistry.png
https://i.ibb.co/44zrMfY/Modern-Dentistry-1.png
https://i.ibb.co/PC3Tj4p/Modern-Dentistry-2.png
https://i.ibb.co/q15TZT6/Modern-Dentistry-3.png
https://i.ibb.co/8YzfdCq/Modern-Dentistry-4.png
https://i.ibb.co/XSNps6r/Modern-Dentistry-5.png
*/