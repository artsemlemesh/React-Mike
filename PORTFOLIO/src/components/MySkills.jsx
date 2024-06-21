import React from "react";


const MySkills = () => {
  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className=" transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <div className=" max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4 flex items-center">
            <img  src='front.png'  alt="React Logo" className="h-6 w-6 mr-2" />

              <h2 className="text-xl font-semibold">frontend</h2>
            </div>
            <div className="bg-gray-100 p-4">
              <p className="text-gray-700"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            facilis quo cumque aliquam magnam tempora totam atque consequuntur
            similique debitis aut natus quidem nobis illum praesentium autem
            eligendi, nisi rerum.</p>
            </div>
          </div>
          
        </div>
        <div className=" transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
        <div className=" max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4 flex items-center">
            <img  src='back.png'  alt="React Logo" className="h-6 w-6 mr-2" />

              <h2 className="text-xl font-semibold">backend</h2>
            </div>
            <div className="bg-gray-100 p-4">
              <p className="text-gray-700"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            facilis quo cumque aliquam magnam tempora totam atque consequuntur
            similique debitis aut natus quidem nobis illum praesentium autem
            eligendi, nisi rerum.</p>
            </div>
          </div>
        </div>
        <div className=" transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
        <div className=" max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold">my title</h2>
            </div>
            <div className="bg-gray-100 p-4">
              <p className="text-gray-700"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            facilis quo cumque aliquam magnam tempora totam atque consequuntur
            similique debitis aut natus quidem nobis illum praesentium autem
            eligendi, nisi rerum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
