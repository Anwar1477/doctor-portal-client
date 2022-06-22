import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import ServiceCart from "./ServiceCart";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment,setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center ">
        <h3 className="text-center text-secondary text-xl font-bold">
          Available Appointment On {format(date, "PP")}
        </h3>
        <p className="text-gray-400 text-[20px]">Please select a service</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service} setTreatment={setTreatment}></ServiceCart>
        ))}
      </div>
      {
        treatment && <AppointmentModal treatment={treatment} setTreatment={setTreatment} date={date} key={treatment._id}></AppointmentModal>
      }
    </div>
  );
};

export default AvailableAppointments;
