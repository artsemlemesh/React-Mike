import { useState } from "react";

export default function Tabss({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0); // index of a currently selected tab

    function handleOnClick(getCurrentIndex){ //getCurrentIndex index of a currently clicked tab
        setCurrentTabIndex(getCurrentIndex); // updates the state of the tab that was clicked
        onChange(getCurrentIndex) //passes the curr index to the parent component
    }

  return (
    <div className="wrapper">
      <div className="heading">
        {/* this div is for tabs */}
        {tabsContent.map((tabItem, index) => (
          //we need map to iterate over an array of tabs, default args for map(item, index)
          <div
            key={tabItem.label}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)} //based on what tab we click it passes it to the function
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{color: 'red'}}> {/* this div for tab returns(content) */}
      {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content }
      </div>
    </div>
  );
}
