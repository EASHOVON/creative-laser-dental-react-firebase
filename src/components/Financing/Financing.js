import React from 'react';
import './Financing.css'

const Financing = () =>
{
    return (
        <div>
            <div className="finance-banner">
                <h1>Financing</h1>
            </div>
            <div className="container">
                <div className="row my-5 d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>Afford Your Care</h2>
                    </div>
                    <div className="col-md-6">
                        <p>We are committed to providing you with quality dental care. Helping to make your dental care financially comfortable and affordable is important, and we proudly offer a variety of payment options:</p>
                        <ul>
                            <li>Cash</li>
                            <li>VISA, MasterCard, and American Express</li>
                            <li>6-, 12 month, no-interest payment plans for VISA, MASTER CARD & AMERICAN EXPRESS Credit cards of Standard Chartered bank, Eastern bank & City bank.</li>
                            <li>We also accept bKash payment.</li>
                        </ul>
                        <p>Optimal, comprehensive dentistry is what we practice. We base our treatment on what is best for you.</p>
                        <div className="row">
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/standardchartered.jpg" alt="" />
                            </div>
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/lankabangla-1.jpg" alt="" />
                            </div>
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/citybank.jpg" alt="" />
                            </div>
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/lankabangla.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/visa.jpg" alt="" />
                            </div>
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/mastercard.jpg" alt="" />
                            </div>
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2019/11/american-express.jpg" alt="" />
                            </div>
                            <div className="col-md-3 body">
                                <img src="https://www.laserdentalbd.com/wp-content/uploads/2020/04/bKash-e1594033515613.png.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row my-5 d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>Advance Payment Policy</h2>
                    </div>
                    <div className="col-md-6">
                        <p>We focus on quality treatment & service. In order to achieve that, we reserve your appointment in advance. It has few advantages:</p>
                        <ul>
                            <li>We can give sufficient time needed for a specific treatment. We never hurry to finish a treatment.</li>
                            <li>We understand the value of your time. So, your waiting time is minimized.</li>
                            <li>As you already know your appointment time & duration in advance, you can arrange your personal schedule considering all of these.</li>
                        </ul>
                        <p>As we reserve a specific period of our time for you in advance, we accept advance payment to make sure that the appointment time is reserved.</p>
                        <p>Our advance payment policy:</p>
                        <ul>
                            <li>For Braces treatment: We will receive minimum 1/2 of total amount at the first appointment of beginning of treatment.</li>
                            <li>For Dental Implant: We will receive full payment at the Implant placement appointment.</li>
                            <li>For other treatments: We will always receive 1/4th of total fee in advance of the treatment that will be done on next appointment.</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row my-5 d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>How Do We Receive Advance Payment</h2>
                    </div>
                    <div className="col-md-6">
                        <h5>Bank Details</h5>
                        <p>Account Name: Dr. Shihab's LASER DENTAL</p>
                        <p>Account Number: 1421797185001</p>
                        <p>The City Bank Ltd.</p>
                        <br /><br />
                        <h5>bKash details:</h5>
                        <p>Merchant account: 01841541945</p>
                    </div>
                </div>
                <hr />
                <div className="row my-5 d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>Appointment Cancellation Policy</h2>
                    </div>
                    <div className="col-md-6">
                        <p>We reserve your appointment in advance for a specific time after receiving advance payment.</p>
                        <p>You can cancel your appointment any time considering following terms & conditions:</p>
                        <ul>
                            <li>Before 24 hours (of appointment time): We will return 100% of advance paid amount.</li>
                            <li>Before 3 hours: We will return 50% of advance paid amount.</li>
                            <li>After that time, we will not be able to return any advance paid amount.
                                Contact us to learn more about our policies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Financing;