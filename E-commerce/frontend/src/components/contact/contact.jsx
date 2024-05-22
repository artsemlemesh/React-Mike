import { useState } from "react";
import './contact.css'


const Contact = () => {
  const [user, setUser] = useState({
    Name: "",
    email: "",
    subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Name, email, subject, Message } = user;
    if (!Name || !email || !subject || !Message) {
      alert("all fields are required");
      return;
    }

    try {
      const response = await fetch("url", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ Name, email, subject, Message }),
      });
      if (response.ok) {
        alert("message sent");
        setUser({ Name: "", email: "", subject: "", Message: "" });
      } else {
        alert("Error occured. Message sending failed");
      }
    } catch (e) {
      alert("Error occured. Message sending failed");
    }
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="form">
          <h2>#contact us</h2>
          <form method='POST' onSubmit={handleSubmit}>
            <div className='box'>
              <div className='label'>
                <h4>Name</h4>
              </div>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Name'
                  value={user.Name}
                  name='Name'
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='box'>
              <div className='label'>
                <h4>E-mail</h4>
              </div>
              <div className='input'>
                <input
                  type='email'
                  placeholder='E-mail'
                  value={user.email}
                  name='email'
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='box'>
              <div className='label'>
                <h4>Subject</h4>
              </div>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Subject'
                  value={user.subject}
                  name='subject'
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='box'>
              <div className='label'>
                <h4>Message</h4>
              </div>
              <div className='input'>
                <textarea
                  placeholder='Message'
                  value={user.Message}
                  name='Message'
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
