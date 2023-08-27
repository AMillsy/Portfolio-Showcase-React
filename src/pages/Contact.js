import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contactSection">
      <h2 className="contactTitle">Contact</h2>

      <div className="formContainer">
        <label className="labelName" for="fname">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="firstname"
          placeholder="Your name.."
        ></input>
        <label className="labelEmail" for="email">
          Your email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="JohnDoe@gmail.com"
        ></input>
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button className="btnMessage">Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
