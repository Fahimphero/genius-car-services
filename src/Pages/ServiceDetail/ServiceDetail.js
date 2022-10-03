import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetail(serviceId);

    // useEffect(() => {
    //     const url = `https://genius-car-service-server.onrender.com/service/${serviceId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setService(data));
    // }, [])

    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;