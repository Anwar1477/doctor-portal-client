import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AppointmentModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const handleAppointment = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    console.log(slot, name, phone, email);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary text-center">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleAppointment}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, 'PP')}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
