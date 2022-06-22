import React from 'react';
import Footer from '../Shared/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;