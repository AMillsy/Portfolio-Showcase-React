import "../styles/Contact.css";
import { useState, useEffect } from "react";

const Contact = () => {
  useEffect(() => {});
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const [errorList, setErrorList] = useState();
  let errorMessage = [];

  const changeData = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    return;
  };

  const checkData = () => {
    errorMessage = [];
    setErrorList(null);
    if (!(data.name || data.email || data.message)) return;

    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!data.name) {
      errorMessage.push("Please Enter name");
    }
    if (!data.email) {
      errorMessage.push("Please enter an email");
    } else if (!re.test(data.email)) {
      errorMessage.push("Invalid Email");
    }
    if (!data.message) {
      errorMessage.push("Please enter a message");
    }

    displayError(errorMessage);
  };

  const displayError = () => {
    setErrorList(
      errorMessage.map((value) => {
        return <li>{value}</li>;
      })
    );
    console.log(errorList);
  };
  return (
    <section className="contactSection">
      <h2 className="contactTitle">Contact</h2>

      <div className="formContainer" onBlur={() => checkData()}>
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

        <ul className="error">{errorList}</ul>
      </div>
    </section>
  );
};

export default Contact;
