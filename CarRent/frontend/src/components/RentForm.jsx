import { useState } from "react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaCalendarCheck, FaCar } from 'react-icons/fa';

const RentForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pickUp: '',
    dropOff: '',
    carModel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(formData);
    setFormData({
      name: '',
      email: '',
      pickUp: '',
      dropOff: '',
      carModel: '',
    });
  };

  return (
    <div className="w-4/5 mx-auto bg-white p-8">
      <h2 className="text-2xl mb-4 text-center">Book a car</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaUser className="text-gray-700 mr-2" />
            <label className="block text-gray-700 mr-2" htmlFor="name">
              Name
            </label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-gray-700 mr-2" />
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaCalendarAlt className="text-gray-700 mr-2" />
            <label className="block text-gray-700 mb-2" htmlFor="pickUp">
              Pick-Up Date
            </label>
          </div>
          <input
            type="date"
            id="pickUp"
            name="pickUp"
            value={formData.pickUp}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaCalendarCheck className="text-gray-700 mr-2" />
            <label className="block text-gray-700 mb-2" htmlFor="dropOff">
              Drop-Off Date
            </label>
          </div>
          <input
            type="date"
            id="dropOff"
            name="dropOff"
            value={formData.dropOff}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaCar className="text-gray-700 mr-2" />
            <label className="block text-gray-700 mb-2" htmlFor="carModel">
              Car Model
            </label>
          </div>
          <select
            id="carModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select a car model</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>
        <div className="w-full md:w-1/3 p-2 flex items-end">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentForm;