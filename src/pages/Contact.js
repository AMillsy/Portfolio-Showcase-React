import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contactSection">
      <h2 className="contactTitle">Contact</h2>

      <div className="formContainer">
        <div>
          <label className="labelName" for="fname">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="firstname"
            placeholder="Your name.."
          ></input>
        </div>
        <div>
          <label className="labelEmail" for="email">
            Your email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
          ></input>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button className="btnMessage">Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
