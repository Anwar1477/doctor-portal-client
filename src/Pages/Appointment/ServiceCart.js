import React from "react";

const ServiceCart = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body justify-center items-center">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No slot available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div class="card-actions">
          <label  onClick={()=>setTreatment(service)}
          disabled={slots.length === 0}  htmlFor="booking-modal" class="btn btn-primary"> Appointment Now</label>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
