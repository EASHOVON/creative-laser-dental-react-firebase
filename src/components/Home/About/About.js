import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';

const About = () =>
{
    return (
        <div className="container">
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-md-6">
                    <img width="100%" src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/dental-about-s.png" alt="" />
                </div>
                <div className="col-md-6 ml-5">
                    <h1>ABOUT</h1>
                    <h4 className="mb-3">MEET THE DOCTOR</h4>
                    <h5 className="mb-3">
                        Dr. Shihabur Rahman <br />
                        BDS, FCPS, FWFO (USA)
                    </h5>
                    <p>Are you looking for Best Dentist or Dentist near me or Best Dental Clinic in Uttara, Dhaka, Bangladesh? Yes, you are in the right place. LASER DENTAL is one of the most hi-tech dental clinics in Dhaka, serving all of your dental needs , with special emphasis on 3D Dental Scanning, Laser Dentistry, Invisalign Clear Aligner, Teeth whitening, Painless Injection Facility, Dental Braces, Dental Implant and Scanning whole mouth with world’s most advanced Intra-oral Caries & Plaque Scanner.</p>
                    <Button>CALL NOW!</Button>
                </div>
            </div>
        </div>
    );
};

export default About;