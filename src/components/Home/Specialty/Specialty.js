import React from 'react';
import { Button } from 'react-bootstrap';

const Specialty = () =>
{
    const specialDetails = [
        {
            id: 1,
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/laser.png",
            title: "LASER TECHNOLOGY",
            desc: "Worlds most advanced Diode Laser. Your treatment experience will be relaxing & smooth."

        },
        {
            id: 2,
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/PAINLESS.png",
            title: "PAINLESS INJECTION",
            desc: "Only Dental Clinic in Bangladesh utilising Painless Injection System. You will be amazed!"
        },
        {
            id: 3,
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/SCANNING.png",
            title: "3D DENTAL SCANNER",
            desc: "World’s most advanced 3D Dental Scanner & only one in Bangladesh!"
        },
        {
            id: 4,
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/DENTAL-IMPLANT.png",
            title: "DENTAL IMPLANT",
            desc: "Years of experience! Specialist care. You will be able to chew properly again!"
        },
        {
            id: 5,
            img: "https://www.laserdentalbd.com/wp-content/uploads/2019/11/DIGITAL-SMILE-DESIGN.png",
            title: "DIGITAL SMILE DESIGN",
            desc: "We help to re-design your smile and create a customised smile for your face!"
        },

    ]
    return (
        <div className="container">
            <div className="row my-5">
                <h1 className="text-center">SPECIALTY</h1>
                <h4 className="text-center">WHAT MAKES US SPECIAL</h4>
                {
                    specialDetails.map(specialDetail => (
                        <div key={specialDetail.id} className="col-md-4 px-5 card-body">
                            <div className="text-center">
                                <img src={specialDetail.img} alt="" />
                            </div>
                            <div className="text-center">
                                <h5>{specialDetail.title}</h5>
                                <p>{specialDetail.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Specialty;