import { useState } from "react";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userMessage: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [emailReceived, setEmailReceived] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    const { data } = await axios.post(
      "https://pandautilities.vercel.app/utils/sendmail",
      { contactData }
    );
    if (data?.error) {
      alert(
        "We were unable to send the email, we will surely work on the problem."
      );
      setDisabled(false);
      setLoading(false);
    } else {
      setLoading(false);
      setEmailReceived(true);
    }
  };
  return (
    <>
      <div className="contact__container">
        <h2 className="gradient__text" id="contact">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="contact__name">
            <input
              type="text"
              value={contactData.firstName}
              required
              name="firstName"
              id="first_name"
              placeholder="First Name"
              onChange={handleClick}
            />
            <input
              type="text"
              value={contactData.lastName}
              required
              name="lastName"
              id="last_name"
              placeholder="Last Name"
              onChange={handleClick}
            />
          </div>
          <div className="contact__rest">
            <input
              type="email"
              value={contactData.userEmail}
              required
              name="userEmail"
              id="user_email"
              placeholder="Email"
              onChange={handleClick}
            />
            <label htmlFor="user_email" className="emailLabel">
              We will send response at the provided email.
            </label>
            <textarea
              name="userMessage"
              value={contactData.userMessage}
              required
              id="user_message"
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={handleClick}
            />
            {emailReceived && (
              <h4 className="emailReceived">
                We have received your message and we will reply to you shortly.
              </h4>
            )}
            <button
              type="submit"
              className="btn btn-primary cntBtn"
              disabled={disabled}
            >
              {loading ? ("loading..") : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
