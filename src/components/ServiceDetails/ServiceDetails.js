import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () =>
{
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() =>
    {
        fetch(`/fakeData/fakeData-${ serviceId }.json`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    console.log(service);
    return (
        <div className="container">
            <div className="row my-5">
                <h2 className="text-center">{service.title}</h2>
                <div className="col-md-12">
                    <p>{service.desc}</p>
                </div>
            </div>
            <div className="row my-5 py-5">
                <div className="col-md-2 img">
                    <img src={service?.imgOne} alt="" />
                </div>
                <div className="col-md-2 img">
                    <img src={service?.imgTwo} alt="" />
                </div>
                <div className="col-md-2 img">
                    <img src={service?.imgThree} alt="" />
                </div>
                <div className="col-md-2 img">
                    <img src={service?.imgFour} alt="" />
                </div>
                <div className="col-md-2 img">
                    <img src={service?.imgFive} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;