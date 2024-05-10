import { useState } from "react";
import "./photos.css";

const Photos = ({ data }) => {

  return (
    <div className="scroll-container">
      <div className="scroll-content">
      {data?.messages?.map((message) => (
        <div className="photo" key={message?.createdAt}>
            {message.img && <img src={message.img} alt="" />}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Photos;
