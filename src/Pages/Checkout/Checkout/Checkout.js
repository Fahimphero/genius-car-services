import axios from 'axios';
import React, { useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetail(serviceId);
    const [user, loading] = useAuthState(auth);
    console.log(user);
    // const [user, setUser] = useState({
    //     name: 'Triple H',
    //     email: 'tripleh@gmail.com',
    //     address: 'Florida, USA',
    //     phone: '3536363625'

    // });

    // const handleAddressChange = (event) => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        axios.post('https://pacific-atoll-92625.herokuapp.com/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!');
                    event.target.reset();
                }
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id="" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" id="" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='address' autoComplete='off' required />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Checkout;