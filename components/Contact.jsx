"use client";
import React, { useState } from "react";
import { CoolMode } from "./magicui/cool-mode";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15cd5b14-0dfe-482b-8fdb-1a3239ac7ed2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="mx-7 ">
      <div className="container mx-auto p-6 mt-10 mb-10  bg-muted-gray rounded-lg shadow-md border py-20">
        <div className="text-center space-y-4 px-10">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
            Contact us
          </div>
          <h2 className="text-5xl font-bold sm:text-5xl">Get in Touch</h2>
        </div>
        <div className="contact">
          <div className="contact-col">
            <h3>
              Send us a message{" "}
              <img src="/assests/icons/msg-icon.png" alt="Message Icon" />
            </h3>
            <p>
              Feel free to reach out through the contact form or find our
              contact information below. Your feedback, questions, and
              suggestions are important to us as we strive to provide
              exceptional service to our university community.
            </p>
            <ul>
              <li>
                <img src="/assests/icons/mail-icon.png" alt="Mail Icon" />
                Guidex2024@gmail.com
              </li>
              <li>
                <img src="/assests/icons/phone-icon.png" alt="Phone Icon" />
                +91 8500025420
              </li>
              <li>
                <img
                  src="/assests/icons/location-icon.png"
                  alt="Location Icon"
                />
                Kalkheda, 462044, Bhopal
              </li>
            </ul>
          </div>
          <div className="contact-col">
            <form onSubmit={onSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="phone">Phone No</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
              <label htmlFor="message">Write Your Message Here</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
              ></textarea>
              <CoolMode>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Submit Now{" "}
                  <img
                    src="/assests/icons/white-arrow.png"
                    alt="Submit Arrow Icon"
                    width={30}
                    height={30}
                    className="pl-2"
                  />
                </button>
              </CoolMode>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
