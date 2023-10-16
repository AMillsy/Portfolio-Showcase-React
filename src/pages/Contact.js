import "../styles/Contact.css";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  useEffect(() => {});
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errorList, setErrorList] = useState();
  const [successMessage, setSuccess] = useState({
    message: "",
    color: "green",
  });
  let errorMessage = [];

  const changeData = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    return;
  };

  const checkData = () => {
    errorMessage = [];
    setErrorList(null);
    if (!(data.name || data.email || data.message || data.subject)) return;

    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!data.subject) {
      errorMessage.push("Please Enter a subject");
    }
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

    if (errorMessage.length !== 0) {
      displayError(errorMessage);
      return false;
    }

    return true;
  };

  const displayError = () => {
    setErrorList(
      errorMessage.map((value) => {
        return <li>{value}</li>;
      })
    );
    console.log(errorList);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!checkData()) return;
    emailjs
      .send("service_zy45bk3", "template_gw68jha", data, "1oDfEvi6N6zEOk7PH")
      .then(
        async (result) => {
          setSuccess({ message: "Successfully sent email", color: "green" });
          setData((prevState) => ({
            ...prevState,
            name: "",
            email: "",
            subject: "",
            message: "",
          }));
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess({ message: "Error sending email", color: "red" });
        }
      );

    setTimeout(function () {
      setSuccess({ message: "", color: "green" });
    }, 10000);
  };
  return (
    <section className="contactSection">
      <h2 className="contactTitle">Contact</h2>

      <form
        className="formContainer"
        ref={form}
        onBlur={() => checkData()}
        onSubmit={sendEmail}
      >
        <div>
          <label className="labelName">Your name:</label>
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
          <label className="labelEmail">Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
            onChange={(e) => changeData(e)}
          ></input>
        </div>
        <div>
          <label className="labelEmail">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="subject"
            onChange={(e) => changeData(e)}
          ></input>
        </div>
        <div>
          <label>Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => changeData(e)}
          ></textarea>
        </div>
        <button className="btnMessage" onClick={() => sendEmail}>
          Send Message
        </button>

        <ul className="error">{errorList}</ul>
        <p style={{ color: successMessage.color }}>{successMessage.message}</p>
      </form>
    </section>
  );
};

export default Contact;
