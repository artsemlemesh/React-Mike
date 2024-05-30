import { useState } from "react"


const RentForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pickUp: '',
        dropOff: '',
        carModel: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('booking details: ', formData)
        //logic of adding data to a server
    }


    return(
        <>
        <div className="max-w-sm mx-auto bg-white p-8 border border-gray-300 rounded shadow-md">
            <h2 className="text-2xl mb-4 text-center">Car Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="pickUp">
                    pickUp Date
                    </label>
                    <input
                        type="date"
                        id='pickUp'
                        name='pickUp'
                        value={formData.pickUp}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="dropOff">
                    dropOff Date
                    </label>
                    <input
                        type="date"
                        id='dropOff'
                        name='dropOff'
                        value={formData.dropOff}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="carModel">
                    carModel 
                    </label>
                    <select
                        id='carModel'
                        name='carModel'
                        value={formData.carModel}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value=''>Select a car model</option>
                        <option value='Sedan'>Sedan</option>
                        <option value='SUV'>SUV</option>
                        <option value='Truck'>Truck</option>
                        <option value='Convertible'>Convertible</option>
                        </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Book Now
                </button>
            </form>
        </div>
        </>
    )
}

export default RentForm