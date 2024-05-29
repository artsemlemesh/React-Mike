import { useState } from "react";

const Cars = ({ tabs, fields }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrIndex) {
    setCurrentTabIndex(getCurrIndex);
    console.log(getCurrIndex);
  }

  return (
    <>
      <h1>Cars</h1>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* First Column */}
          <div className="flex flex-col space-y-2">
            {tabs.map((tabItem, index) => (
              <div
                key={index}
                className={`tab-item cursor-pointer p-2 rounded ${
                  currentTabIndex === index ? "bg-blue-200" : "bg-gray-200"
                }`}
                onClick={() => handleOnClick(index)}
              >
                {tabItem.image}
              </div>
            ))}
          </div>
          
          {/* Second Column */}
          <div className="flex items-center justify-center bg-gray-300 rounded p-4">
            <img src={tabs[currentTabIndex].image} alt={tabs[currentTabIndex].image} className="rounded" />
          </div>
          
          {/* Third Column */}
          <div className="flex">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 border-b text-center text-xl font-semibold text-gray-700" colSpan={2}>
              $30/rent per day
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-gray-600">{field.label}</td>
              <td className="py-2 px-4 border-b text-gray-600">
                {tabs[currentTabIndex].details.find(detail => detail.attribute1 === field.key)?.attribute2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          
        </div>
      </div>
    </>
  );
};

export default Cars;