import { useState } from "react";



export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) { //getCurrentIndex represents the index of a currently clicked tab
    setCurrentTabIndex(getCurrentIndex);// updates  the state of the tab that was clicked(ensures that the clicked tab becomes the active tab)
    onChange(getCurrentIndex); // passes the index of the clicked tab as an argument to the onChange func. (this allows the parent component to handle any changes to the selected tab)
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`} //currentTabIndex is used to track the index of currently active tab within the Tabs component
            onClick={() => handleOnClick(index)}
            key={tabItem.label} //each child in list should have a unique key prop
          >
            <span className="label">{tabItem.label}</span> {/* dynamic tab's name */}
            
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content} {/* if a tab exists then return content of this tab */}
      </div>
    </div>
  );
}
