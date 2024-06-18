import { useState } from "react";
import RentForm from "../components/RentForm";
// import RentForm from "./RentForm";

const Cart = () => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="container mx-auto p-4">
      <RentForm addBooking={addBooking} />
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Your Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookings.map((booking, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-2">{booking.carModel}</h3>
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Pick-Up Date:</strong> {booking.pickUp}</p>
                <p><strong>Drop-Off Date:</strong> {booking.dropOff}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;