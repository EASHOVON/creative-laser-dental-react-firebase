import React from 'react';
import './Footer.css'

const Footer = () =>
{
    return (
        <div>
            <div className="footer-first">
                <div className="footer container">
                    <div className="row text-white py-3">
                        <div className="col-md-4">
                            <h4>ADDRESS</h4>
                            <div>
                                <h6>CREATIVE LASER DENTAL</h6>
                                <p>Plot 60, Gareeb-E-Nawaz Avenue,</p>
                                <p>Sector 13</p>
                                <p>Uttara, Dhaka 1230</p>
                                <p>Phone: +8801515226983</p>
                                <p>Email: info@creativelaserbd.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>APPOINMENT:</h4>
                            <p>10678</p>
                            <p>09666710678</p>
                            <p>(02) 55037242</p>
                        </div>
                        <div className="col-md-4">
                            <h4>HOURS</h4>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Saturday</td>
                                        <td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td></tr><tr><td>Wednesday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td></tr><tr><td>Thursday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td></tr><tr><td>Friday</td><td><span>3:00 PM - 9:00 PM</span></td></tr></tbody></table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-second">
                <div className="container">
                    <div className="row text-white py-3">
                        <div className="col-md-12">
                            <h6>&copy; CREATIVE LASER DENTAL 2021, All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;