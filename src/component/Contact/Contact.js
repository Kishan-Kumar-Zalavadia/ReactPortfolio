import React, { useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  /* const formSubmit = (event) => {
     event.preventDefault()
     alert(
       `My name is ${data.fullname}. 
   My phone number is ${data.phone}. 
   My email address is ${data.email}. 
   My Subject on  ${data.subject}. 
   Here is my message I want to say : ${data.message}. 
   `
     )
   }*/
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="left_img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Kishan Kumar Zalavadia</h1>
                  <p>Software Engineer</p>
                  <p>I would love to connect with you.</p> <br />
                  {/* <p>Phone: +01234567890</p> */}
                  <p>Email: kishankumar31032001@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/kishan-kumar-zalavadia/"
                    >
                      <button className="btn_shadow">
                        <i class="fab fa-linkedin-in"></i>
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/Kishan-Kumar-Zalavadia"
                    >
                      <button className="btn_shadow">
                        <i class="fab fa-github"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="right box_shodow">
            <div className="right_img">
                  <img src={contact1} alt="" />
                </div>
            </div> */}

            {/* <div className='right box_shodow'>
              {/* <form name="contactUs" data-netlify="true">
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} required />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} required />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} required />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} required />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} required></textarea>
                </div>
                <button className='btn_shadow' type="submit">
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form> 
              <form name="contactUs" method="POST" data-netlify="true">
                <div className="fields">
                  <div className="field name">
                    <input type="text" name="Name" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" name="Email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" name="Subject" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea name="Description" id cols={30} rows={10} placeholder="Description" required defaultValue={""} />
                </div>
                <div className="field">
                  <div data-netlify-recaptcha="true" />
                </div>
                <br />
                <div className="button">
                  <button type="submit" className='btn_shadow'>Send Message</button>
                </div>
              </form>
              
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
