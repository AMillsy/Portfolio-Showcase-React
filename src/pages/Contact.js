import "../styles/Contact.css";
import { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const changeData = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    return;
  };
  return (
    <section className="contactSection">
      <h2 className="contactTitle">Contact</h2>

      <div className="formContainer">
        <div>
          <label className="labelName">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            onChange={(e) => changeData(e)}
            value={data.name}
          ></input>
        </div>
        <div>
          <label className="labelEmail">Your email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
            onChange={(e) => changeData(e)}
          ></input>
        </div>
        <div>
          <label>Message</label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => changeData(e)}
          ></textarea>
        </div>
        <button className="btnMessage" onClick={() => console.log(data)}>
          Send Message
        </button>

        <p className="error"></p>
      </div>
    </section>
  );
};

export default Contact;
