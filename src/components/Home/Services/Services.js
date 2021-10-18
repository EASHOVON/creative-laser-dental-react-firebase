import React from 'react';
import './Services.css'

const Services = () =>
{
    const servicesData = [
        {
            id: 1,
            title: "TEETH WHITENING",
            desc: "Rejuvenate your smile with brighter, white teeth !",
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/TEETH-WHITENING.png.webp"
        },
        {
            id: 2,
            title: "DENTAL BRACES",
            desc: "Don't worry about irregular teeth. You will smile again confidently with straight teeth.",
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/DENTAL-BRACES.png"
        },
        {
            id: 3,
            title: "GUM COLOUR CHANGE",
            desc: "Transform you blackish gum to pinkish colour with painless, single appointment Laser Gum Treatment !",
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/GUM-COLOUR-CHANGE.png"
        },
        {
            id: 4,
            title: "CERAMIC CROWN",
            desc: "Get the taste of world;s most advanced, full computerised, CAD-CAM fabricated Ceramic Crown",
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/CERAMIC-CROWN.png"
        },
        {
            id: 5,
            title: "ROOT CANAL TREATMENT",
            desc: "No more 3-5 days for Root Canal Treatment. We are offering single appointment Root Canal Treatment !",
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/ROOT-CANAL-TREATMENT.png"
        },
        {
            id: 6,
            title: "VENEER",
            desc: "Transform your smile with minimally invasive Veneer treatment !",
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/VENEER.png"
        }
    ]
    return (
        <div className="container">
            <div className="row">
                {
                    servicesData.map(service => (
                        <div key={service.id} className="col-md-4 card-content">
                            <div className="img-body">
                                <img src={service.img} alt="" />
                            </div>
                            <div>
                                <h5>{service.title}</h5>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;