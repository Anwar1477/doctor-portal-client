import React from "react";
import Service from "./Service";
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services =[
        {
            _id :1,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:fluoride

        },
        {
            _id :2,
            name:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:cavity

        },
        {
            _id :3,
            name:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:whitening

        },
    ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h2 className="text-primary font-bold text-xl">Our Services</h2>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-4'>
      {/* <Service img ={fluoride} title ='Fluoride Treatment' description ='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>
      <Service img ={cavity} title ='Cavity Filling' description ='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>
      <Service img ={whitening} title ='Teeth Whitening' description ='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service> */}
      {
        services.map(service =><Service 
        key={service._id} 
        service={service}
        ></Service>)
      }
      </div>
    </div>
  );
};

export default Services;
