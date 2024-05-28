import { useState } from "react";
import './contact.css'
import { toast } from "react-toastify";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
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
    const { name, email, subject, Message } = user;
    if (!name || !email || !subject || !Message) {
      toast.error("all fields are required");
      return;
    }

    try {
      const response = await fetch("https://e-commerse-8f3bf-default-rtdb.firebaseio.com/Message.json", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, Message }),
      });
      if (response.ok) {
        toast.success("message sent");
        setUser({ name: "", email: "", subject: "", Message: "" });
      } else {
        toast.error("Error occured. Message sending failed");
      }
    } catch (e) {
      toast.error("Error occured. Message sending failed");
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
                <h4>name</h4>
              </div>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Name'
                  value={user.name}
                  name='name'
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
