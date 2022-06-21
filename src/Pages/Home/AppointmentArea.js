import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../Shared/PrimaryButton';

const AppointmentArea = () => {
    return (
        <section className='flex justify-center items-center'style={{background:`url(${appointment})`}}>
            <div className='hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div>
                <img className='flex-1' />
                <h3 className='text-xl text-primary font-bold' >Appointment</h3>
                <h2 className='text-2xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure ea libero similique harum? Exercitationem sequi voluptatum impedit minima, iste tenetur ipsum cupiditate ex optio dolorem laboriosam harum assumenda aspernatur tempore earum mollitia dolores soluta totam explicabo aliquam. Consequuntur, repellat.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
            
        </section>
    );
};

export default AppointmentArea;