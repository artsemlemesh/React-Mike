import { useState } from "react";

const Cars = ({ tabs }) => {
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
            <img src={tabs[currentTabIndex].image} alt="Tab Content" className="rounded" />
          </div>
          
          {/* Third Column */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Column 1</th>
                  <th className="py-2 px-4 border-b">Column 2</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 7 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="py-2 px-4 border-b">Data {rowIndex + 1}</td>
                    <td className="py-2 px-4 border-b">Data {rowIndex + 1}</td>
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