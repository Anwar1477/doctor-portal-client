import React from 'react';
import AppointmentArea from './AppointmentArea';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import InfoArea from './InfoArea';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <InfoArea></InfoArea>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentArea></AppointmentArea>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;