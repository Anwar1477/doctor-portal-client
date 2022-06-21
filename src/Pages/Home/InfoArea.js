import React from 'react';
import InfoCart from './InfoCart'; 
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoArea = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart img={clock} cartTitle="Opening Hours" infoText="Lorem Ipsum is simply dummy text of the pri"></InfoCart>
            <InfoCart img={marker} cartTitle="Visit our location" infoText="Brooklyn, NY 10036, United States"></InfoCart>
            <InfoCart img={phone}  cartTitle="Contact us now" infoText="+000 123 456789"></InfoCart>
        </div>
    );
};

export default InfoArea;